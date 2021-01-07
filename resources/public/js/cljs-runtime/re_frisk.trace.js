goog.provide('re_frisk.trace');
re_frisk.trace.component_name = (function re_frisk$trace$component_name(c){
var G__65934 = c;
var G__65934__$1 = (((G__65934 == null))?null:G__65934.constructor);
if((G__65934__$1 == null)){
return null;
} else {
return G__65934__$1.displayName;
}
});
re_frisk.trace.operation_name = cljs.core.memoize((function (c){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(re_frisk.trace.component_name(c),/ > /));
}));
re_frisk.trace.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function re_frisk$trace$mp_render(){
var c = this;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__65936 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__65937 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frisk.trace.operation_name(c)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__65937);

try{try{if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render(c);
} else {
var rat = goog.object.get(c,"cljsRatom");
var _ = reagent.impl.batching.mark_rendered(c);
var res = (((rat == null))?reagent.ratom.run_in_reaction((function (){
return reagent.impl.component.do_render(c);
}),c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = goog.object.get(c,"cljsRatom");
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__54193__auto___65964 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id(cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id(cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__54193__auto___65964);

} else {
}

return res;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__54191__auto___65965 = re_frame.interop.now();
var duration__54192__auto___65966 = (end__54191__auto___65965 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__54192__auto___65966,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__54191__auto___65965);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__65936);
}} else {
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render(c);
} else {
var rat = goog.object.get(c,"cljsRatom");
var _ = reagent.impl.batching.mark_rendered(c);
var res = (((rat == null))?reagent.ratom.run_in_reaction((function (){
return reagent.impl.component.do_render(c);
}),c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = goog.object.get(c,"cljsRatom");
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__54193__auto___65968 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id(cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id(cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__54193__auto___65968);

} else {
}

return res;
}
}
})], null);
re_frisk.trace.normalize_traces = (function re_frisk$trace$normalize_traces(traces){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (items,p__65939){
var map__65940 = p__65939;
var map__65940__$1 = (((((!((map__65940 == null))))?(((((map__65940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65940):map__65940);
var trace = map__65940__$1;
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65940__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65940__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65940__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65940__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op_type__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(op_type),"sub"))?new cljs.core.Keyword(null,"sub","sub",-2093760025):op_type);
var item = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indx","indx",1571035590),id,new cljs.core.Keyword(null,"trace?","trace?",1730690679),true], null);
var G__65943 = op_type__$1;
var G__65943__$1 = (((G__65943 instanceof cljs.core.Keyword))?G__65943.fqn:null);
switch (G__65943__$1) {
case "re-frame.router/fsm-trigger":
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item,cljs.core.select_keys(trace,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"operation","operation",-1267664310)], null))], 0)));

break;
case "event":
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"trace?","trace?",1730690679)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(trace,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"duration","duration",1444101068)], null)),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(tags),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"truncated-name","truncated-name",1771353320),re_frisk.utils.truncate_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(tags)))),new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713),re_frisk.diff.diff.diff(new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645).cljs$core$IFn$_invoke$arity$1(tags),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964).cljs$core$IFn$_invoke$arity$1(tags))], 0))], 0)));

break;
case "event/handler":
var prev = cljs.core.peek(items);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword(null,"event","event",301435442)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(items),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev,new cljs.core.Keyword(null,"handler-duration","handler-duration",262132324),duration));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item,cljs.core.select_keys(trace,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))], 0)));
}

break;
case "event/do-fx":
var prev = cljs.core.peek(items);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$2(prev,new cljs.core.Keyword(null,"event","event",301435442)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(items),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev,new cljs.core.Keyword(null,"fx-duration","fx-duration",1796312432),duration));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item,cljs.core.select_keys(trace,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"duration","duration",1444101068)], null))], 0)));
}

break;
case "sub":
case "render":
var prev = cljs.core.peek(items);
var trace__$1 = cljs.core.select_keys(trace,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"duration","duration",1444101068)], null));
var trace__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace__$1,new cljs.core.Keyword(null,"duration-ms","duration-ms",1993555055),re_frisk.utils.str_ms(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(trace__$1)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"subs?","subs?",-2085240020).cljs$core$IFn$_invoke$arity$1(prev))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(items),cljs.core.update.cljs$core$IFn$_invoke$arity$4(prev,new cljs.core.Keyword(null,"subs","subs",-186681991),cljs.core.conj,trace__$2));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.Keyword(null,"subs?","subs?",-2085240020),true,new cljs.core.Keyword(null,"subs","subs",-186681991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trace__$2], null)], null)], 0)));
}

break;
default:
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item,trace], 0)));

}
}),cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),traces));
});
re_frisk.trace.normalize_durations = (function re_frisk$trace$normalize_durations(p__65944){
var map__65945 = p__65944;
var map__65945__$1 = (((((!((map__65945 == null))))?(((((map__65945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65945):map__65945);
var trace = map__65945__$1;
var subs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65945__$1,new cljs.core.Keyword(null,"subs?","subs?",-2085240020));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65945__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65945__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var handler_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65945__$1,new cljs.core.Keyword(null,"handler-duration","handler-duration",262132324));
var fx_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65945__$1,new cljs.core.Keyword(null,"fx-duration","fx-duration",1796312432));
var map__65948 = (cljs.core.truth_(subs_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([trace,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__65950){
var map__65951 = p__65950;
var map__65951__$1 = (((((!((map__65951 == null))))?(((((map__65951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65951):map__65951);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65951__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var op_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65951__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var G__65953 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core._PLUS_,duration);
var G__65953__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type__$1,new cljs.core.Keyword("sub","run","sub/run",-1821315581)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__65953,new cljs.core.Keyword(null,"run-count","run-count",-924546145),cljs.core.inc),new cljs.core.Keyword(null,"run-duration","run-duration",1321930251),cljs.core._PLUS_,duration):G__65953);
var G__65953__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type__$1,new cljs.core.Keyword("sub","create","sub/create",-1301317560)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__65953__$1,new cljs.core.Keyword(null,"created-count","created-count",-1708534686),cljs.core.inc),new cljs.core.Keyword(null,"created-duration","created-duration",-1526658187),cljs.core._PLUS_,duration):G__65953__$1);
var G__65953__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type__$1,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__65953__$2,new cljs.core.Keyword(null,"disposed-count","disposed-count",-457935431),cljs.core.inc),new cljs.core.Keyword(null,"disposed-duration","disposed-duration",-1737482274),cljs.core._PLUS_,duration):G__65953__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type__$1,new cljs.core.Keyword(null,"render","render",-1408033454))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__65953__$3,new cljs.core.Keyword(null,"render-count","render-count",-875399191),cljs.core.inc),new cljs.core.Keyword(null,"render-duration","render-duration",1704092121),cljs.core._PLUS_,duration);
} else {
return G__65953__$3;
}
}),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"created-count","created-count",-1708534686),new cljs.core.Keyword(null,"render-count","render-count",-875399191),new cljs.core.Keyword(null,"run-duration","run-duration",1321930251),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"created-duration","created-duration",-1526658187),new cljs.core.Keyword(null,"disposed-count","disposed-count",-457935431),new cljs.core.Keyword(null,"render-duration","render-duration",1704092121),new cljs.core.Keyword(null,"disposed-duration","disposed-duration",-1737482274),new cljs.core.Keyword(null,"run-count","run-count",-924546145)],[(0),(0),(0),(0),(0),(0),(0),(0),(0)]),subs)], 0)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type,new cljs.core.Keyword(null,"event","event",301435442)))?(function (){var handler_fx_duration = (handler_duration + fx_duration);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(trace,new cljs.core.Keyword(null,"handler-fx-duration","handler-fx-duration",1974562002),handler_fx_duration,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler-fx-duration-ms","handler-fx-duration-ms",-118285662),re_frisk.utils.str_ms(handler_fx_duration)], 0));
})():trace
));
var map__65948__$1 = (((((!((map__65948 == null))))?(((((map__65948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65948):map__65948);
var trace__$1 = map__65948__$1;
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65948__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var handler_duration__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65948__$1,new cljs.core.Keyword(null,"handler-duration","handler-duration",262132324));
var fx_duration__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65948__$1,new cljs.core.Keyword(null,"fx-duration","fx-duration",1796312432));
var run_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65948__$1,new cljs.core.Keyword(null,"run-duration","run-duration",1321930251));
var created_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65948__$1,new cljs.core.Keyword(null,"created-duration","created-duration",-1526658187));
var disposed_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65948__$1,new cljs.core.Keyword(null,"disposed-duration","disposed-duration",-1737482274));
var render_duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65948__$1,new cljs.core.Keyword(null,"render-duration","render-duration",1704092121));
var G__65957 = trace__$1;
var G__65957__$1 = (cljs.core.truth_(duration)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65957,new cljs.core.Keyword(null,"duration-ms","duration-ms",1993555055),re_frisk.utils.str_ms(duration)):G__65957);
var G__65957__$2 = (cljs.core.truth_(handler_duration__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65957__$1,new cljs.core.Keyword(null,"handler-duration-ms","handler-duration-ms",-491924416),re_frisk.utils.str_ms(handler_duration__$1)):G__65957__$1);
var G__65957__$3 = (cljs.core.truth_(fx_duration__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65957__$2,new cljs.core.Keyword(null,"fx-duration-ms","fx-duration-ms",-1014211328),re_frisk.utils.str_ms(fx_duration__$1)):G__65957__$2);
var G__65957__$4 = (cljs.core.truth_(run_duration)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65957__$3,new cljs.core.Keyword(null,"run-duration-ms","run-duration-ms",-1510786585),re_frisk.utils.str_ms(run_duration)):G__65957__$3);
var G__65957__$5 = (cljs.core.truth_(created_duration)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65957__$4,new cljs.core.Keyword(null,"created-duration-ms","created-duration-ms",1987553257),re_frisk.utils.str_ms(created_duration)):G__65957__$4);
var G__65957__$6 = (cljs.core.truth_(disposed_duration)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65957__$5,new cljs.core.Keyword(null,"disposed-duration-ms","disposed-duration-ms",-1456969189),re_frisk.utils.str_ms(disposed_duration)):G__65957__$5);
if(cljs.core.truth_(render_duration)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65957__$6,new cljs.core.Keyword(null,"render-duration-ms","render-duration-ms",-757772115),re_frisk.utils.str_ms(render_duration));
} else {
return G__65957__$6;
}
});

//# sourceMappingURL=re_frisk.trace.js.map
