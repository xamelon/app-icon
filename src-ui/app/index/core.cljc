(ns app.index.core
  (:require [stylo.core :refer [c]]
            [reagent.core :as r])
  )


(defonce image (r/atom nil))

(defn on-click-file []
  #?(:cljs
     (.click (.getElementById js/document "icon-file"))))

(defn on-read-file [^js/ProgressEvent e]
  (.log js/console e)
  (let [result (.-result (.-target e))]
    (reset! image result)
    ))


(defn on-load-file [event]
  (let [file #?(:cljs (.-files (.getElementById js/document "icon-file")))
        reader (js/FileReader.)]
    (set! (.-onload reader) #(on-read-file %))
    (.readAsDataURL reader (first file))))

(defn draw-to-canvas [e]
  (.log js/console e)
  (let [result (.-result (.-target e))
        canvas (.createElement js/document "canvas")
        context (.getContext canvas "2d")
        image (js/Image. "1024px" "1024px")]
    (set! (.-src image) result)
    (.drawImage context image 0 0 "1024px" "1024px")
    (.fillRect context 20 20 20 20)
    (let [img (.toDataURL canvas)
          link (.createElement js/document "a")]
      (set! (.-download link) "filename.png")
      (set! (.-href link) img)
      (.click link)
      )
    )
  )

(defn generate-icons []
  (let [svg (.getElementById js/document "generated-app-icon")
        blob (js/Blob. #js[(.-outerHTML svg)] #js{:type "image/svg+xml;charset=utf-8"})
        reader (js/FileReader.)]
    (set! (.-onloadend reader) #(draw-to-canvas %))
    (.readAsDataURL reader blob)))

(defn core []
  [:<>
   [:h1 {:class (c :italic)}  "This is app icon generator"]
   
   [:div {:on-click #(on-click-file)
          :class (c [:w "40vh"]
                    [:h "40vh"]
                    [:rounded 16]
                    :overflow-hidden
                    :border-dashed
                    [:border 3 :gray-500]
                    :cursor-pointer
                    :items-center
                    :justify-center
                    :text-lg)}
    [:input {:id "icon-file"
             :on-change #(on-load-file %)
             :type "file"
             :class (c :hidden)}]
    (if @image
      [:svg
       {:width "100%" :height "100%"
        :id "generated-app-icon"}
       [:image {:href @image
                :x "0"
                :y "0"
                :width "100%"
                :height "100%"}]
       [:g {:transform "rotate(-45 50 50)"}
        [:rect {:fill "grey"
                :width "150"
                :height "40"
                :x "-20"}]
        [:text {:x "53"
                :y "23"
                :text-anchor "middle"
                :alignment-baseline "middle"
                :fill "white"}
         "DEMO"
         ]]
       ]
      [:div 
       "Drag and drop here"
       [:div {:class (c :text-sm [:text :gray-900])}
        "or clic to choose file"]
       ])    
    ]
   
   (when @image
     [:a {:on-click #(generate-icons)} "Download"])
   
   ])

