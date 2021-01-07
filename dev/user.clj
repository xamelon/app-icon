(ns user
  (:require [shadow.cljs.devtools.api :as shadow]
            [shadow.cljs.devtools.config :as shadow.config]
            [shadow.cljs.devtools.server :as shadow.server]))

(defn restart-app
 
  [& args]
  (shadow.server/stop!)
  (shadow.server/start!)
  (shadow/watch :app)
  )

(comment

  (restart-app)
  
  )
