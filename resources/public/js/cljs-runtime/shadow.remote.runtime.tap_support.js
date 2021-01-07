goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__68330,p__68331){
var map__68332 = p__68330;
var map__68332__$1 = (((((!((map__68332 == null))))?(((((map__68332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68332):map__68332);
var svc = map__68332__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68332__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68332__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68332__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68333 = p__68331;
var map__68333__$1 = (((((!((map__68333 == null))))?(((((map__68333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68333):map__68333);
var msg = map__68333__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68333__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68333__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68333__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68333__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__68343,p__68344){
var map__68345 = p__68343;
var map__68345__$1 = (((((!((map__68345 == null))))?(((((map__68345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68345):map__68345);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68345__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__68346 = p__68344;
var map__68346__$1 = (((((!((map__68346 == null))))?(((((map__68346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68346):map__68346);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68346__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__68355,p__68356){
var map__68357 = p__68355;
var map__68357__$1 = (((((!((map__68357 == null))))?(((((map__68357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68357):map__68357);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68357__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68357__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__68358 = p__68356;
var map__68358__$1 = (((((!((map__68358 == null))))?(((((map__68358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68358):map__68358);
var msg = map__68358__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68358__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__68365,tid){
var map__68366 = p__68365;
var map__68366__$1 = (((((!((map__68366 == null))))?(((((map__68366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68366):map__68366);
var svc = map__68366__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68366__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__68374 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__68375 = null;
var count__68376 = (0);
var i__68377 = (0);
while(true){
if((i__68377 < count__68376)){
var vec__68391 = chunk__68375.cljs$core$IIndexed$_nth$arity$2(null,i__68377);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68391,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68391,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68406 = seq__68374;
var G__68407 = chunk__68375;
var G__68408 = count__68376;
var G__68409 = (i__68377 + (1));
seq__68374 = G__68406;
chunk__68375 = G__68407;
count__68376 = G__68408;
i__68377 = G__68409;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__68374);
if(temp__5720__auto__){
var seq__68374__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68374__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__68374__$1);
var G__68410 = cljs.core.chunk_rest(seq__68374__$1);
var G__68411 = c__4556__auto__;
var G__68412 = cljs.core.count(c__4556__auto__);
var G__68413 = (0);
seq__68374 = G__68410;
chunk__68375 = G__68411;
count__68376 = G__68412;
i__68377 = G__68413;
continue;
} else {
var vec__68394 = cljs.core.first(seq__68374__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68394,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68394,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__68414 = cljs.core.next(seq__68374__$1);
var G__68415 = null;
var G__68416 = (0);
var G__68417 = (0);
seq__68374 = G__68414;
chunk__68375 = G__68415;
count__68376 = G__68416;
i__68377 = G__68417;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__68370_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__68370_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__68371_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__68371_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__68372_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__68372_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__68373_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__68373_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__68399){
var map__68400 = p__68399;
var map__68400__$1 = (((((!((map__68400 == null))))?(((((map__68400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68400):map__68400);
var svc = map__68400__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68400__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68400__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
