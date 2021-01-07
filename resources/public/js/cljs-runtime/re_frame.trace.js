goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__61308){
var map__61309 = p__61308;
var map__61309__$1 = (((((!((map__61309 == null))))?(((((map__61309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61309):map__61309);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61309__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61309__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61309__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61309__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__61314_61351 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__61315_61352 = null;
var count__61316_61353 = (0);
var i__61317_61354 = (0);
while(true){
if((i__61317_61354 < count__61316_61353)){
var vec__61328_61356 = chunk__61315_61352.cljs$core$IIndexed$_nth$arity$2(null,i__61317_61354);
var k_61357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61328_61356,(0),null);
var cb_61358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61328_61356,(1),null);
try{var G__61332_61359 = cljs.core.deref(re_frame.trace.traces);
(cb_61358.cljs$core$IFn$_invoke$arity$1 ? cb_61358.cljs$core$IFn$_invoke$arity$1(G__61332_61359) : cb_61358.call(null,G__61332_61359));
}catch (e61331){var e_61360 = e61331;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_61357,"while storing",cljs.core.deref(re_frame.trace.traces),e_61360], 0));
}

var G__61361 = seq__61314_61351;
var G__61362 = chunk__61315_61352;
var G__61363 = count__61316_61353;
var G__61364 = (i__61317_61354 + (1));
seq__61314_61351 = G__61361;
chunk__61315_61352 = G__61362;
count__61316_61353 = G__61363;
i__61317_61354 = G__61364;
continue;
} else {
var temp__5720__auto___61365 = cljs.core.seq(seq__61314_61351);
if(temp__5720__auto___61365){
var seq__61314_61366__$1 = temp__5720__auto___61365;
if(cljs.core.chunked_seq_QMARK_(seq__61314_61366__$1)){
var c__4556__auto___61367 = cljs.core.chunk_first(seq__61314_61366__$1);
var G__61368 = cljs.core.chunk_rest(seq__61314_61366__$1);
var G__61369 = c__4556__auto___61367;
var G__61370 = cljs.core.count(c__4556__auto___61367);
var G__61371 = (0);
seq__61314_61351 = G__61368;
chunk__61315_61352 = G__61369;
count__61316_61353 = G__61370;
i__61317_61354 = G__61371;
continue;
} else {
var vec__61333_61373 = cljs.core.first(seq__61314_61366__$1);
var k_61374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61333_61373,(0),null);
var cb_61375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61333_61373,(1),null);
try{var G__61337_61376 = cljs.core.deref(re_frame.trace.traces);
(cb_61375.cljs$core$IFn$_invoke$arity$1 ? cb_61375.cljs$core$IFn$_invoke$arity$1(G__61337_61376) : cb_61375.call(null,G__61337_61376));
}catch (e61336){var e_61377 = e61336;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_61374,"while storing",cljs.core.deref(re_frame.trace.traces),e_61377], 0));
}

var G__61378 = cljs.core.next(seq__61314_61366__$1);
var G__61379 = null;
var G__61380 = (0);
var G__61381 = (0);
seq__61314_61351 = G__61378;
chunk__61315_61352 = G__61379;
count__61316_61353 = G__61380;
i__61317_61354 = G__61381;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
