if(!lt.util.load.provided_QMARK_('lt.plugins.playground')) {
goog.provide('lt.plugins.playground');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.workspace');
goog.require('lt.objs.workspace');
goog.require('lt.util.dom');
goog.require('lt.objs.style');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.style');
goog.require('lt.objs.intro');
goog.require('crate.binding');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.intro');
goog.require('lt.objs.command');
lt.plugins.playground.playground_plugin_dir = lt.objs.files.join.call(null,lt.objs.files.lt_user_dir.call(null),"plugins","playground");
lt.plugins.playground.baby_cljs_path = lt.objs.files.join.call(null,lt.plugins.playground.playground_plugin_dir,"src","lt","plugins","baby_steps.cljs");
lt.plugins.playground.playground_btn = (function playground_btn(){var e__6275__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),"playground"], null));var seq__6477_6483 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__6275__auto__){
return (function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),lt.plugins.playground.baby_cljs_path);
});})(e__6275__auto__))
], null)));var chunk__6478_6484 = null;var count__6479_6485 = 0;var i__6480_6486 = 0;while(true){
if((i__6480_6486 < count__6479_6485))
{var vec__6481_6487 = cljs.core._nth.call(null,chunk__6478_6484,i__6480_6486);var ev__6276__auto___6488 = cljs.core.nth.call(null,vec__6481_6487,0,null);var func__6277__auto___6489 = cljs.core.nth.call(null,vec__6481_6487,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6488,func__6277__auto___6489);
{
var G__6490 = seq__6477_6483;
var G__6491 = chunk__6478_6484;
var G__6492 = count__6479_6485;
var G__6493 = (i__6480_6486 + 1);
seq__6477_6483 = G__6490;
chunk__6478_6484 = G__6491;
count__6479_6485 = G__6492;
i__6480_6486 = G__6493;
continue;
}
} else
{var temp__4092__auto___6494 = cljs.core.seq.call(null,seq__6477_6483);if(temp__4092__auto___6494)
{var seq__6477_6495__$1 = temp__4092__auto___6494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6477_6495__$1))
{var c__5632__auto___6496 = cljs.core.chunk_first.call(null,seq__6477_6495__$1);{
var G__6497 = cljs.core.chunk_rest.call(null,seq__6477_6495__$1);
var G__6498 = c__5632__auto___6496;
var G__6499 = cljs.core.count.call(null,c__5632__auto___6496);
var G__6500 = 0;
seq__6477_6483 = G__6497;
chunk__6478_6484 = G__6498;
count__6479_6485 = G__6499;
i__6480_6486 = G__6500;
continue;
}
} else
{var vec__6482_6501 = cljs.core.first.call(null,seq__6477_6495__$1);var ev__6276__auto___6502 = cljs.core.nth.call(null,vec__6482_6501,0,null);var func__6277__auto___6503 = cljs.core.nth.call(null,vec__6482_6501,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6502,func__6277__auto___6503);
{
var G__6504 = cljs.core.next.call(null,seq__6477_6495__$1);
var G__6505 = null;
var G__6506 = 0;
var G__6507 = 0;
seq__6477_6483 = G__6504;
chunk__6478_6484 = G__6505;
count__6479_6485 = G__6506;
i__6480_6486 = G__6507;
continue;
}
}
} else
{}
}
break;
}
return e__6275__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.playground","intro","lt.plugins.playground/intro",1582854408),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intro","intro",1114266078),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.intro","on-close-destroy","lt.objs.intro/on-close-destroy",1201771465)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Welcome",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#intro","div#intro",1717177196),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",4087841945),40,new cljs.core.Keyword(null,"src","src",1014018390),crate.binding.bound.call(null,lt.objs.style.styles,lt.objs.intro.__GT_lt_image)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Welcome to the latest version of Light Table. To see the full list of\n        what's been added/changed, checkout the ",lt.objs.intro.changelog.call(null),". Some of the\n        highlights include deeper Javascript support, inline browsers, and\n        Python eval! If you're new, you might want to take a look at ",lt.objs.intro.docs.call(null)," to get started."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"If you run into any problems, report the issue on ",lt.objs.intro.reports.call(null),"!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"Want to start hacking Lighttable? come to the ",lt.plugins.playground.playground_btn.call(null),"and start peeking at\n    Lighttable internals ~(\u00B0-\u00B0)~"], null)], null);
}));
lt.plugins.playground.__BEH__show_intro = (function __BEH__show_intro(this$){if(cljs.core.truth_(cli.args.call(null)))
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.playground","open-playground","lt.plugins.playground/open-playground",3633079414),new cljs.core.Keyword(null,"desc","desc",1016984067),"Playground: playground script",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),lt.plugins.playground.baby_cljs_path);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.add-user-plugin-to-workspace","user.add-user-plugin-to-workspace",4324437372),new cljs.core.Keyword(null,"desc","desc",1016984067),"Playground: Add playground plugin to workspace",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.objs.workspace.current_ws,new cljs.core.Keyword(null,"add.folder!","add.folder!",2151595160),lt.plugins.playground.playground_plugin_dir);
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
lt.objs.editor.pool.last_active.call(null);
var editor_6381 = lt.objs.editor.pool.last_active.call(null);var meta_6382 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"end-line","end-line",2693041432),19,new cljs.core.Keyword(null,"line","line",1017226086),2,new cljs.core.Keyword(null,"end-column","end-column",3799845882),40], null);var loc_6383 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_6382) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_6382),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_6382) - 1)], null);var msg_6384 = "HELLO wORLD";lt.object.raise.call(null,editor_6381,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),msg_6384,loc_6383);
var editor_6385 = lt.objs.editor.pool.last_active.call(null);var meta_6386 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"end-line","end-line",2693041432),32,new cljs.core.Keyword(null,"line","line",1017226086),2,new cljs.core.Keyword(null,"end-column","end-column",3799845882),40], null);var loc_6387 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_6386) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_6386),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_6386) - 1)], null);var msg_6388 = "HELLO WORLD";lt.object.raise.call(null,editor_6385,new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758),msg_6388,loc_6387);
var editor_6389 = lt.objs.editor.pool.last_active.call(null);var meta_6390 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"end-line","end-line",2693041432),44,new cljs.core.Keyword(null,"line","line",1017226086),2,new cljs.core.Keyword(null,"end-column","end-column",3799845882),40], null);var loc_6391 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_6390) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_6390),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_6390) - 1)], null);var msg_6392 = "HELLO WORLD";lt.object.raise.call(null,editor_6389,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),msg_6392,loc_6391);
lt.objs.notifos.set_msg_BANG_.call(null,"HELLO MESSAGE",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"my-class"], null));
lt.plugins.baby_steps.hello_panel = (function hello_panel(){var e__6275__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Hello from the playground"], null));var seq__6365_6393 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__6366_6394 = null;var count__6367_6395 = 0;var i__6368_6396 = 0;while(true){
if((i__6368_6396 < count__6367_6395))
{var vec__6369_6397 = cljs.core._nth.call(null,chunk__6366_6394,i__6368_6396);var ev__6276__auto___6398 = cljs.core.nth.call(null,vec__6369_6397,0,null);var func__6277__auto___6399 = cljs.core.nth.call(null,vec__6369_6397,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6398,func__6277__auto___6399);
{
var G__6400 = seq__6365_6393;
var G__6401 = chunk__6366_6394;
var G__6402 = count__6367_6395;
var G__6403 = (i__6368_6396 + 1);
seq__6365_6393 = G__6400;
chunk__6366_6394 = G__6401;
count__6367_6395 = G__6402;
i__6368_6396 = G__6403;
continue;
}
} else
{var temp__4092__auto___6404 = cljs.core.seq.call(null,seq__6365_6393);if(temp__4092__auto___6404)
{var seq__6365_6405__$1 = temp__4092__auto___6404;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6365_6405__$1))
{var c__5632__auto___6406 = cljs.core.chunk_first.call(null,seq__6365_6405__$1);{
var G__6407 = cljs.core.chunk_rest.call(null,seq__6365_6405__$1);
var G__6408 = c__5632__auto___6406;
var G__6409 = cljs.core.count.call(null,c__5632__auto___6406);
var G__6410 = 0;
seq__6365_6393 = G__6407;
chunk__6366_6394 = G__6408;
count__6367_6395 = G__6409;
i__6368_6396 = G__6410;
continue;
}
} else
{var vec__6370_6411 = cljs.core.first.call(null,seq__6365_6405__$1);var ev__6276__auto___6412 = cljs.core.nth.call(null,vec__6370_6411,0,null);var func__6277__auto___6413 = cljs.core.nth.call(null,vec__6370_6411,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6412,func__6277__auto___6413);
{
var G__6414 = cljs.core.next.call(null,seq__6365_6405__$1);
var G__6415 = null;
var G__6416 = 0;
var G__6417 = 0;
seq__6365_6393 = G__6414;
chunk__6366_6394 = G__6415;
count__6367_6395 = G__6416;
i__6368_6396 = G__6417;
continue;
}
}
} else
{}
}
break;
}
return e__6275__auto__;
});
lt.plugins.baby_steps.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___6418 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___6418))
{var tabset_6419 = temp__4092__auto___6418;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabset_6419))),1))
{lt.objs.tabs.rem_tabset.call(null,tabset_6419);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.baby-steps","on-close-destroy","lt.plugins.baby-steps/on-close-destroy",3864800502),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.baby_steps.__BEH__on_close_destroy,new cljs.core.Keyword(null,"desc","desc",1016984067),"Close tab and tabset as well if last tab",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.baby-steps","hello-object","lt.plugins.baby-steps/hello-object",1990696081),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.baby-steps","on-close-destroy","lt.plugins.baby-steps/on-close-destroy",3864800502)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.baby_steps.hello_panel.call(null);
}));
var hello_6420 = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.baby-steps","hello-object","lt.plugins.baby-steps/hello-object",1990696081));lt.objs.tabs.add_or_focus_BANG_.call(null,hello_6420);
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.baby-steps","say-hello","lt.plugins.baby-steps/say-hello",745608367),new cljs.core.Keyword(null,"desc","desc",1016984067),"Playground's greating",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.baby-steps","hello-object","lt.plugins.baby-steps/hello-object",1990696081));return lt.objs.tabs.add_or_focus_BANG_.call(null,hello);
})], null));
var editor_6421 = lt.objs.editor.pool.last_active.call(null);var meta_6422 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"end-line","end-line",2693041432),127,new cljs.core.Keyword(null,"line","line",1017226086),2,new cljs.core.Keyword(null,"end-column","end-column",3799845882),40], null);var loc_6423 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",1017226086),(new cljs.core.Keyword(null,"end-line","end-line",2693041432).cljs$core$IFn$_invoke$arity$1(meta_6422) - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),new cljs.core.Keyword(null,"end-column","end-column",3799845882).cljs$core$IFn$_invoke$arity$1(meta_6422),new cljs.core.Keyword(null,"start-line","start-line",3689311729),(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(meta_6422) - 1)], null);lt.object.raise.call(null,editor_6421,new cljs.core.Keyword(null,"editor.result.underline","editor.result.underline",541343758),lt.plugins.baby_steps.hello_panel.call(null),loc_6423);
}

//# sourceMappingURL=playground_compiled.js.map