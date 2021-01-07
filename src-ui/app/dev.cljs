(ns app.dev
  (:require [re-frisk.core :as re-frisk]
            [devtools.core :as devtools]
            [app.core :as core]))

(devtools/install!)

(enable-console-print!)

(re-frisk/enable)

(defn ^:dev/after-load re-render []
  (println "Reload")
  (core/mount-root))

(core/init!)
