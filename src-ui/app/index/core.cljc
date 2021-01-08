(ns app.index.core
  (:require [stylo.core :refer [c]]
            [reagent.core :as r])
  )

(defn on-click-file []
  #?(:cljs
     (.click (.getElementById js/document "icon-file"))))

(defn on-read-file [^js/ProgressEvent e image]
  (.log js/console e)
  (let [result (.-result (.-target e))]
    (reset! image result)
    ))


(defn on-load-file [event image]
  (let [file #?(:cljs (.-files (.getElementById js/document "icon-file")))
        reader (js/FileReader.)]
    (set! (.-onload reader) #(on-read-file % image))
    (.readAsDataURL reader (first file))))


(defn redraw-icon [canvas image]
  (let [context (.getContext canvas "2d")
        img-el (js/Image.)
        w (.-width canvas)
        h (.-height canvas)]
    (println "Width" w "Height" h "Canvas" canvas)
    (set! (.-onload img-el)
          (fn []
            (set! (.-imageSmoothingEnabled context) false)
            (.drawImage context img-el 0 0 w h)))
    (set! (.-src img-el) @image)

    )
  )

(defn core []
  (let [image (r/atom nil)]
    (r/create-class
     {:component-did-update
      (fn [this]
        (if-let [canvas (.getElementById js/document "canvas")]
          
          (redraw-icon canvas image)
            
          )
        )

      :reagent-render
      (fn []
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
                   :on-change #(on-load-file % image)
                   :type "file"
                   :class (c :hidden)}]
          (if @image
            [:canvas
             {:id "canvas"
              :class (c [:w "40vh"] [:h "40vh"])}]
            [:div 
             "Drag and drop here"
             [:div {:class (c :text-sm [:text :gray-900])}
              "or clic to choose file"]
             ])    
          ]
         
         (when @image
           [:a "Download"])
         
         ])})))

