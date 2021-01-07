(ns app.core
  (:require [reagent.dom :as dom]
            [app.index.core :as index]))

(defn mount-root []
  #?(:cljs
     (reagent.dom/render
      [index/core]
      (.getElementById js/document "app"))))

(defn init! []
  (mount-root))