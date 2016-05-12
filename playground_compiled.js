if(!lt.util.load.provided_QMARK_('lt.plugins.playground')) {
goog.provide('lt.plugins.playground');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.files');
goog.require('lt.objs.cli');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.workspace');
goog.require('lt.objs.workspace');
goog.require('lt.util.dom');
goog.require('lt.objs.style');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.cli');
goog.require('lt.objs.style');
goog.require('lt.objs.intro');
goog.require('crate.binding');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.intro');
goog.require('lt.objs.command');
lt.plugins.playground.playground_btn = (function playground_btn(){var e__6285__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),"playground"], null));var seq__6385_6401 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__6285__auto__){
return (function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),lt.objs.files.join.call(null,lt.objs.files.lt_user_dir.call(null),"plugins","playground","src","lt","plugins","baby_steps.cljs"));
});})(e__6285__auto__))
], null)));var chunk__6386_6402 = null;var count__6387_6403 = 0;var i__6388_6404 = 0;while(true){
if((i__6388_6404 < count__6387_6403))
{var vec__6389_6405 = cljs.core._nth.call(null,chunk__6386_6402,i__6388_6404);var ev__6286__auto___6406 = cljs.core.nth.call(null,vec__6389_6405,0,null);var func__6287__auto___6407 = cljs.core.nth.call(null,vec__6389_6405,1,null);lt.util.dom.on.call(null,e__6285__auto__,ev__6286__auto___6406,func__6287__auto___6407);
{
var G__6408 = seq__6385_6401;
var G__6409 = chunk__6386_6402;
var G__6410 = count__6387_6403;
var G__6411 = (i__6388_6404 + 1);
seq__6385_6401 = G__6408;
chunk__6386_6402 = G__6409;
count__6387_6403 = G__6410;
i__6388_6404 = G__6411;
continue;
}
} else
{var temp__4092__auto___6412 = cljs.core.seq.call(null,seq__6385_6401);if(temp__4092__auto___6412)
{var seq__6385_6413__$1 = temp__4092__auto___6412;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6385_6413__$1))
{var c__5642__auto___6414 = cljs.core.chunk_first.call(null,seq__6385_6413__$1);{
var G__6415 = cljs.core.chunk_rest.call(null,seq__6385_6413__$1);
var G__6416 = c__5642__auto___6414;
var G__6417 = cljs.core.count.call(null,c__5642__auto___6414);
var G__6418 = 0;
seq__6385_6401 = G__6415;
chunk__6386_6402 = G__6416;
count__6387_6403 = G__6417;
i__6388_6404 = G__6418;
continue;
}
} else
{var vec__6390_6419 = cljs.core.first.call(null,seq__6385_6413__$1);var ev__6286__auto___6420 = cljs.core.nth.call(null,vec__6390_6419,0,null);var func__6287__auto___6421 = cljs.core.nth.call(null,vec__6390_6419,1,null);lt.util.dom.on.call(null,e__6285__auto__,ev__6286__auto___6420,func__6287__auto___6421);
{
var G__6422 = cljs.core.next.call(null,seq__6385_6413__$1);
var G__6423 = null;
var G__6424 = 0;
var G__6425 = 0;
seq__6385_6401 = G__6422;
chunk__6386_6402 = G__6423;
count__6387_6403 = G__6424;
i__6388_6404 = G__6425;
continue;
}
}
} else
{}
}
break;
}
return e__6285__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.playground","intro","lt.plugins.playground/intro",1582854408),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intro","intro",1114266078),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.intro","on-close-destroy","lt.objs.intro/on-close-destroy",1201771465)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Welcome",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#intro","div#intro",1717177196),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",4087841945),40,new cljs.core.Keyword(null,"src","src",1014018390),crate.binding.bound.call(null,lt.objs.style.styles,lt.objs.intro.__GT_lt_image)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Welcome to the latest version of Light Table. To see the full list of\n        what's been added/changed, checkout the ",lt.objs.intro.changelog.call(null),". Some of the\n        highlights include deeper Javascript support, inline browsers, and\n        Python eval! If you're new, you might want to take a look at ",lt.objs.intro.docs.call(null)," to get started."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"If you run into any problems, report the issue on ",lt.objs.intro.reports.call(null),"!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Want to start hacking Lighttable? come to the ",lt.plugins.playground.playground_btn.call(null),"and start peeking at\n    Lighttable internals ~(\u00B0-\u00B0)~"], null)], null);
}));
lt.plugins.playground.__BEH__show_intro = (function __BEH__show_intro(this$){if(cljs.core.truth_(lt.objs.cli.args.call(null)))
{return null;
} else
{var intro = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.playground","intro","lt.plugins.playground/intro",1582854408));lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"body","body",1016933652)));
lt.objs.tabs.add_BANG_.call(null,intro);
return lt.objs.tabs.active_BANG_.call(null,intro);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.playground","show-intro","lt.plugins.playground/show-intro",3357491704),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.playground.__BEH__show_intro,new cljs.core.Keyword(null,"desc","desc",1016984067),"Playground: Open a welcome screen",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-init","post-init",2970371471),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.playground","show-new-file","lt.plugins.playground/show-new-file",2729062683)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.playground","open-intro","lt.plugins.playground/open-intro",3524338795),new cljs.core.Keyword(null,"desc","desc",1016984067),"Playground: intro page",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var intro = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.playground","intro","lt.plugins.playground/intro",1582854408));lt.util.dom.focus.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"body","body",1016933652)));
lt.objs.tabs.add_BANG_.call(null,intro);
return lt.objs.tabs.active_BANG_.call(null,intro);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.playground","open-playground","lt.plugins.playground/open-playground",3633079414),new cljs.core.Keyword(null,"desc","desc",1016984067),"Playground: playground script",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),lt.objs.files.join.call(null,lt.objs.files.lt_user_dir.call(null),"plugins","playground","src","lt","plugins","baby_steps.cljs"));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.add-user-plugin-to-workspace","user.add-user-plugin-to-workspace",4324437372),new cljs.core.Keyword(null,"desc","desc",1016984067),"Playground: Add playground plugin to workspace",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.workspace.current_ws,new cljs.core.Keyword(null,"add.folder!","add.folder!",2151595160),lt.objs.files.join.call(null,lt.objs.files.lt_user_dir.call(null),"plugins","playground"));
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.baby-steps')) {
goog.provide('lt.plugins.baby_steps');
goog.require('cljs.core');
goog.require('lt.objs.tabs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
}

//# sourceMappingURL=playground_compiled.js.map