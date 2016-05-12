(ns lt.plugins.baby-steps
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.notifos :as notifos])
  (:require-macros [lt.macros :refer [defui behavior]]))

;; First of all, connect to this project.
;; then establish a connection to lighttable by evaling the complete file and
;; select Lighttable UI
(comment to avoid having compilation errors, the following code is ignored by the reader
  through the use of #_(), in order to use it just take out the reader-ignore literal "#_"
  and everything should be fine)

;; LETS GET STARTED

;; you get the current editor like this
#_(pool/last-active)
;; that failed, didn't it? well an editor seems to be a javascript object so it
;; it can't be properly printed. BUT it can be assigned

;; lets check that out
#_(let [editor (pool/last-active)
      meta   {:end-line 19 :line 2 :end-column 40}
      loc    {:line (dec (:end-line meta))
              :ch (:end-column meta)
              :start-line (dec (:line meta))}
      msg    "HELLO wORLD"]
  (object/raise editor :editor.result msg loc))
;; pretty obvious right? get the current editor (well that's the one that you
;; are working on), tell him where to put the result and what to display.
;; PLAY with it. change its meta info, or the message type or content.
;; the :editor.result behavior shows a blue widget with the supplied message

;; but how about displayingt the message not to the right?
#_(let [editor (pool/last-active)
      meta   {:end-line 32 :line 2 :end-column 40}
      loc    {:line (dec (:end-line meta))
              :ch (:end-column meta)
              :start-line (dec (:line meta))}
      msg    "HELLO WORLD"]
  (object/raise editor :editor.result.underline msg loc))
;; cool hah?
;; look how :editor.result displays the widget to the right, but the underline
;; result expands the gutter to make the result fit under the specified line

;; how about those pesky exceptions? I want to create those
#_(let [editor (pool/last-active)
      meta   {:end-line 44 :line 2 :end-column 40}
      loc    {:line (dec (:end-line meta))
              :ch (:end-column meta)
              :start-line (dec (:line meta))}
      msg    "HELLO WORLD"]
  (object/raise editor :editor.exception msg loc))
;; did you notice that exceptions are always displayed underline?

;; how about showing a message to the user?
#_(notifos/set-msg! "HELLO MESSAGE" {:class "my-class"})
;; try changing :class to "error"
;; BTW: notifos have a timeout so you better make clear what you want to show !
;;      they also dissapear if another notifo is created

;; By now you should have noticed that :line and :end-column don't seem to
;; provide any special meaning. To be honest I'm not sure if that's a bug or not?
;; care to submit a bug report?


;; lets now start talking about Lighttable's architecture, BOT (Behavior Object Tag)
;; for a deep explanation of it check: http://www.chris-granger.com/2013/01/24/the-ide-as-data/
;; let's focus on our playground. A very basic object is like this:

#_(defui hello-panel []
  [:h1 "Hello from the playground"])

#_(behavior ::on-close-destroy
          :triggers #{:close}
          :desc "Close tab and tabset as well if last tab"
          :reaction (fn [this]
                      (when-let [tabset (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @tabset)) 1)
                          (tabs/rem-tabset tabset)))
                      (object/raise this :destroy)))

#_(object/object* ::hello-object
                :behaviors [::on-close-destroy]
                :init (fn [this] (hello-panel)))

;; oh too many things at the same time ...

;; well a UI is just a hiccup-like datastructure. h1 is a h1 HTML tag and well
;; the rest is its content. you can do way more with uis than just that, but
;; lets keep it simple

;; a behavior is a way to react to an event. the ::on-close-destroy behavior
;; is triggered on :close. Its reaction is pretty obvious: it checks if it is
;; running on a tabset and it is the only tab openned, if so then it removes
;; the complete tabset and proceeds to destroy the complete object.

;; an object on the other hand is just a container. A datastructure made to
;; hold the information of a set of behaviors and a UI in a semantic way.
;; in ::hello-object we tell it to create a hello-panel on initialization and
;; to attach the behavior ::on-close-destroy to the object.

;; too much theory, lets play. Create a tab with that hello panel
#_(let [hello (object/create ::hello-object)];there it is, your new brand object
  (tabs/add-or-focus! hello))
;; that should create a tabset in your current tab and pass the focus to it
;; try closing it .... surprised? probably not. Move it to another tab and then
;; close it. Roger that?


;; for your final baby steps, lets create a command that can do that when used
;; instead of you manually evaluating the code

;; commands are the things that you see in the panel on the right (Ctrl + Space)
;; they are called only by the user and they mainly associate user intentions
;; with the BOT architecture

#_(cmd/command {:command ::say-hello
              :desc "Playground's greating"
              :exec (fn []
                      (let [hello (object/create ::hello-object)]
                        (tabs/add-or-focus! hello)))})
;; nothing happened ?? ... well not quite. Check your commands panel there ==>
;; and type playground on the search box, enter and voila :)

;; Congratulations, now you know all the basics of Lighttable

;; TODO: what do you think that the following code does?
;; try to guess it and check it out ;)
#_(let [editor (pool/last-active)
        meta {:end-line 127 :line 2 :end-column 40}
        loc  {:line (dec (:end-line meta))
              :ch (:end-column meta)
              :start-line (dec (:line meta))}]
  (object/raise editor :editor.result.underline (hello-panel) loc))

;; PS: don't worry about the commands and tabs that you created, everything will
;; be destroyed after you disconnect this project from Lighttable

;; do you want to know why? well open the playground.behaviors file and figure
;; it out by yourself
