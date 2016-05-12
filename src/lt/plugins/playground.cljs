(ns lt.plugins.playground
  (:require [lt.util.dom :as dom]
            [lt.objs.cli :as cli]
            [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.style :as style]
            [lt.objs.files :as files]
            [lt.objs.intro :as lt-intro]
            [crate.binding :refer [bound]]
            [lt.objs.workspace :as workspace])
  (:require-macros [lt.macros :refer [defui behavior]]))

;; internal configuration, you shouldn't change this or bad things could happen

;(def playground-plugin-dir (files/join (files/lt-user-dir) "plugins" "playground"))
;(def baby-cljs-path (files/join playground-plugin-dir "src" "lt" "plugins" "baby_steps.cljs"))
;(def playground-plugin-dir "/home/camilo/.config/Lighttable/plugins playground")
;(def baby-cljs-path (files/join playground-plugin-dir "src" "lt" "plugins" "baby_steps.cljs"))

(defui playground-btn []
  [:button "playground"]
  :click (fn [] (cmd/exec! :open-path (files/join (files/lt-user-dir) "plugins" "playground" "src" "lt" "plugins" "baby_steps.cljs"))))

(object/object* ::intro
                :tags #{:intro}
                :behaviors [:lt.objs.intro/on-close-destroy]
                :name "Welcome"
                :init (fn [this]
  [:div#intro [:h1 [:img {:height 40 :src (bound style/styles lt-intro/->lt-image)}]]
   [:p "Welcome to the latest version of Light Table. To see the full list of
        what's been added/changed, checkout the " (lt-intro/changelog) ". Some of the
        highlights include deeper Javascript support, inline browsers, and
        Python eval! If you're new, you might want to take a look at " (lt-intro/docs) " to get started."]
   [:p "If you run into any problems, report the issue on " (lt-intro/reports) "!"]
   [:br]
   [:p "Want to start hacking Lighttable? come to the " (playground-btn) "and start peeking at
    Lighttable internals ~(°-°)~"]]))

(behavior ::show-intro
          :triggers #{:post-init}
          :type :user
          :exclusive [::show-new-file]
          :desc "Playground: Open a welcome screen"
          :reaction (fn [this]
                      (when-not (cli/args)
                        (let [intro (object/create ::intro)]
                          (dom/focus (dom/$ :body))
                          (tabs/add! intro)
                          (tabs/active! intro)))))

(cmd/command {:command ::open-intro
              :desc "Playground: intro page"
              :exec (fn []
                      (let [intro (object/create ::intro)]
                        (dom/focus (dom/$ :body))
                        (tabs/add! intro)
                        (tabs/active! intro)))})

(cmd/command {:command ::open-playground
              :desc "Playground: playground script"
              :exec (fn [] (cmd/exec! :open-path (files/join (files/lt-user-dir) "plugins" "playground"
                                                   "src" "lt" "plugins" "baby_steps.cljs")))})

(cmd/command {:command :user.add-user-plugin-to-workspace
              :desc "Playground: Add playground plugin to workspace"
              :exec (fn [] (object/raise workspace/current-ws :add.folder!
                             (files/join (files/lt-user-dir) "plugins" "playground")))})
