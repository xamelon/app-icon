goog.provide('re_frisk.ui.views');
re_frisk.ui.views.subs_view = (function re_frisk$ui$views$subs_view(subs,checkbox_sorted_val){
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_frisk.ui.components.frisk.expand_by_default);
return (function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Root,re_frisk.utils.sort_map(cljs.core.deref(subs),cljs.core.deref(checkbox_sorted_val),checkbox_sorted_val),(0),state_atom], null);
});
});
re_frisk.ui.views.app_db_view = (function re_frisk$ui$views$app_db_view(app_db,tool_state){
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_frisk.ui.components.frisk.expand_by_default);
var checkbox_sorted_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"app-db"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),checkbox_sorted_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_frisk.utils.on_change_sort(app_db,checkbox_sorted_val,new cljs.core.Keyword(null,"re-frisk-sorted","re-frisk-sorted",-1702831647)),new cljs.core.Keyword(null,"label","label",1718410804),"sort"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"app-db-delta-error","app-db-delta-error",1501760555).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tool_state)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"update error",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#df691a"], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Root,re_frisk.utils.sort_map(cljs.core.deref(app_db),cljs.core.deref(checkbox_sorted_val),checkbox_sorted_val),(0),state_atom], null)], null)], null);
});
});
re_frisk.ui.views.main_view = (function re_frisk$ui$views$main_view(re_frame_data,tool_state,doc){
var subs_checkbox_sorted_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var open_event_split_QMARK_ = reagent.ratom.make_reaction((function (){
return cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tool_state),new cljs.core.Keyword(null,"selected-event","selected-event",898030638)));
}));
return (function (_,___$1,___$2){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4e5d6c"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Active subscriptions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),subs_checkbox_sorted_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_frisk.utils.on_change_sort(new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(re_frame_data),subs_checkbox_sorted_val,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-frisk-sorted","re-frisk-sorted",-1702831647)], null),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.Keyword(null,"label","label",1718410804),"sort"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"subs-delta-error","subs-delta-error",-356773612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tool_state)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"update error",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#df691a"], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.splits.v_split,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),"0",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null),new cljs.core.Keyword(null,"document","document",-1329188687),doc,new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.subs_view,new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(re_frame_data),subs_checkbox_sorted_val], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.splits.v_split,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),"100",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null),new cljs.core.Keyword(null,"document","document",-1329188687),doc,new cljs.core.Keyword(null,"open-bottom-split?","open-bottom-split?",953160965),open_event_split_QMARK_,new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4e5d6c"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.app_db_view,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(re_frame_data),tool_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_bar,tool_state], null)], null)], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_view,tool_state], null)], null)], null)], null)], null);
});
});
re_frisk.ui.views.external_main_view = (function re_frisk$ui$views$external_main_view(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65925 = arguments.length;
var i__4737__auto___65926 = (0);
while(true){
if((i__4737__auto___65926 < len__4736__auto___65925)){
args__4742__auto__.push((arguments[i__4737__auto___65926]));

var G__65929 = (i__4737__auto___65926 + (1));
i__4737__auto___65926 = G__65929;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_frisk.ui.views.external_main_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_frisk.ui.views.external_main_view.cljs$core$IFn$_invoke$arity$variadic = (function (re_frame_data,tool_state,p__65850){
var vec__65851 = p__65850;
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65851,(0),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.splits.h_split,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),"25",new cljs.core.Keyword(null,"document","document",-1329188687),doc,new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.events_view,re_frame_data,tool_state], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.main_view,re_frame_data,tool_state,doc], null)], null)], null)], null);
}));

(re_frisk.ui.views.external_main_view.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_frisk.ui.views.external_main_view.cljs$lang$applyTo = (function (seq65847){
var G__65848 = cljs.core.first(seq65847);
var seq65847__$1 = cljs.core.next(seq65847);
var G__65849 = cljs.core.first(seq65847__$1);
var seq65847__$2 = cljs.core.next(seq65847__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65848,G__65849,seq65847__$2);
}));

re_frisk.ui.views.on_external_window_unload = (function re_frisk$ui$views$on_external_window_unload(app__$1){
return (function (){
reagent.dom.unmount_component_at_node(app__$1);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.db.tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"ext-win-opened?","ext-win-opened?",-1620778949),false);
});
});
re_frisk.ui.views.mount_external = (function re_frisk$ui$views$mount_external(window,doc,re_frame_data){
var app__$1 = doc.getElementById("re-frisk-debugger-div");
goog.object.set(window,"onunload",re_frisk.ui.views.on_external_window_unload(app__$1));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.db.tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"ext-win-opened?","ext-win-opened?",-1620778949),true);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.external_main_view,re_frame_data,re_frisk.db.tool_state,doc], null)], null),app__$1);
});
re_frisk.ui.views.open_debugger_window = (function re_frisk$ui$views$open_debugger_window(re_frame_data){
return (function (){
var map__65881 = new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.db.tool_state));
var map__65881__$1 = (((((!((map__65881 == null))))?(((((map__65881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65881):map__65881);
var ext_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65881__$1,new cljs.core.Keyword(null,"ext_height","ext_height",-46169089));
var ext_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65881__$1,new cljs.core.Keyword(null,"ext_width","ext_width",925500566));
var win = window.open("","Debugger",["width=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = ext_width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (800);
}
})()),",height=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = ext_height;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (800);
}
})()),",resizable=yes,scrollbars=yes,status=no",",directories=no,toolbar=no,menubar=no"].join(''));
var doc = win.document;
doc.open();

doc.write(re_frisk.ui.external_hml.html_doc);

goog.object.set(win,"onload",(function (){
return re_frisk.ui.views.mount_external(win,doc,re_frame_data);
}));

return doc.close();
});
});
re_frisk.ui.views.on_iframe_load = (function re_frisk$ui$views$on_iframe_load(re_frame_data){
return (function (){
var doc = document.getElementById("re-frisk-iframe").contentDocument;
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.external_main_view,re_frame_data,re_frisk.db.tool_state,doc], null)], null),doc.getElementById("re-frisk-debugger-div"));
});
});
re_frisk.ui.views.inner_view = (function re_frisk$ui$views$inner_view(re_frame_data){
var ext_opened_QMARK_ = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"ext-win-opened?","ext-win-opened?",-1620778949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.db.tool_state));
}));
var latest_left = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"latest-left","latest-left",-733268314).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.db.tool_state));
}));
return (function (){
if(cljs.core.truth_(cljs.core.deref(ext_opened_QMARK_))){
return null;
} else {
var left = (function (){var or__4126__auto__ = re_frisk.utils.normalize_draggable(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.ui.components.drag.draggable)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (window.innerWidth - (30));
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk.ui.style.inner_view_container(left,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.ui.components.drag.draggable)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.3], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk.ui.style.external_button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),re_frisk.ui.views.open_debugger_window(re_frame_data)], null),"\u2197"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk.ui.style.external_button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(re_frisk.utils.closed_QMARK_(left)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.db.tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"latest-left","latest-left",-733268314),(window.innerWidth - left));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.ui.components.drag.draggable,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(window.innerWidth - ((re_frisk.utils.closed_QMARK_(left))?cljs.core.deref(latest_left):(30))));
})], null),((re_frisk.utils.closed_QMARK_(left))?"\u2B60":"\u2B62")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk.ui.style.dragg_button,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),re_frisk.ui.components.drag.mouse_down_handler], null)], null)], null)], null),((re_frisk.utils.closed_QMARK_(left))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"re-frisk-iframe",new cljs.core.Keyword(null,"src-doc","src-doc",-543683145),re_frisk.ui.external_hml.html_doc,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.ui.components.drag.draggable)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"none","none",1333468478)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"all","all",892129742)], null)),new cljs.core.Keyword(null,"on-load","on-load",1415151594),re_frisk.ui.views.on_iframe_load(re_frame_data)], null)], null)], null))], null);
}
});
});
re_frisk.ui.views.mount_internal = (function re_frisk$ui$views$mount_internal(re_frame_data){
var div = document.createElement("div");
goog.object.set(div,"style",["position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none;","margin:0; padding:0; z-index:999999999;pointer-events: none;"].join(''));

document.body.appendChild(div);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.inner_view,re_frame_data], null),div);
});

//# sourceMappingURL=re_frisk.ui.views.js.map
