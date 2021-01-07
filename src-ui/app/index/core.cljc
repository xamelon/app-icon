(ns app.index.core
  (:require [stylo.core :refer [c]])
  )


(defn on-click-file []
  #?(:cljs
     (.click (.getElementById js/document "icon-file"))))


(defn on-load-file [event]
  (let [file #?(:cljs (.files (.getElementById js/document "icon-file")))]
    (println file)
    )
  )

(defn core []
  [:<>
   [:h1 {:class (c :italic)}  "This is app icon generator"]
   [:div {:on-click #(on-click-file)
          :class (c :flex
                    :flex-col
                    [:w "30%"]
                    [:h "30%"]
                    [:rounded 16]
                    :border-dashed
                    [:border 3 :gray-500]
                    :cursor-pointer
                    :items-center
                    :justify-center
                    :text-lg)}
    "Drag and drop here"
    [:div {:class (c :text-sm [:text :gray-900])}
     "or clic to choose file"]
    [:input {:id "icon-file"
             :on-change #(on-load-file %)
             :type "file"
             :class (c :hidden)}]]])
