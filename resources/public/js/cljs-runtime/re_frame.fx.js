goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__61674 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__61675 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__61675);

try{try{var seq__61676 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__61677 = null;
var count__61678 = (0);
var i__61679 = (0);
while(true){
if((i__61679 < count__61678)){
var vec__61694 = chunk__61677.cljs$core$IIndexed$_nth$arity$2(null,i__61679);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61694,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61694,(1),null);
var temp__5718__auto___61775 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___61775)){
var effect_fn_61776 = temp__5718__auto___61775;
(effect_fn_61776.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61776.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61776.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61777 = seq__61676;
var G__61778 = chunk__61677;
var G__61779 = count__61678;
var G__61780 = (i__61679 + (1));
seq__61676 = G__61777;
chunk__61677 = G__61778;
count__61678 = G__61779;
i__61679 = G__61780;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__61676);
if(temp__5720__auto__){
var seq__61676__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61676__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61676__$1);
var G__61781 = cljs.core.chunk_rest(seq__61676__$1);
var G__61782 = c__4556__auto__;
var G__61783 = cljs.core.count(c__4556__auto__);
var G__61784 = (0);
seq__61676 = G__61781;
chunk__61677 = G__61782;
count__61678 = G__61783;
i__61679 = G__61784;
continue;
} else {
var vec__61698 = cljs.core.first(seq__61676__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61698,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61698,(1),null);
var temp__5718__auto___61785 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___61785)){
var effect_fn_61786 = temp__5718__auto___61785;
(effect_fn_61786.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61786.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61786.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61787 = cljs.core.next(seq__61676__$1);
var G__61788 = null;
var G__61789 = (0);
var G__61790 = (0);
seq__61676 = G__61787;
chunk__61677 = G__61788;
count__61678 = G__61789;
i__61679 = G__61790;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__54191__auto___61791 = re_frame.interop.now();
var duration__54192__auto___61792 = (end__54191__auto___61791 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__54192__auto___61792,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__54191__auto___61791);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__61674);
}} else {
var seq__61702 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__61703 = null;
var count__61704 = (0);
var i__61705 = (0);
while(true){
if((i__61705 < count__61704)){
var vec__61718 = chunk__61703.cljs$core$IIndexed$_nth$arity$2(null,i__61705);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61718,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61718,(1),null);
var temp__5718__auto___61793 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___61793)){
var effect_fn_61794 = temp__5718__auto___61793;
(effect_fn_61794.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61794.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61794.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61795 = seq__61702;
var G__61796 = chunk__61703;
var G__61797 = count__61704;
var G__61798 = (i__61705 + (1));
seq__61702 = G__61795;
chunk__61703 = G__61796;
count__61704 = G__61797;
i__61705 = G__61798;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__61702);
if(temp__5720__auto__){
var seq__61702__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61702__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61702__$1);
var G__61799 = cljs.core.chunk_rest(seq__61702__$1);
var G__61800 = c__4556__auto__;
var G__61801 = cljs.core.count(c__4556__auto__);
var G__61802 = (0);
seq__61702 = G__61799;
chunk__61703 = G__61800;
count__61704 = G__61801;
i__61705 = G__61802;
continue;
} else {
var vec__61723 = cljs.core.first(seq__61702__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61723,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61723,(1),null);
var temp__5718__auto___61803 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___61803)){
var effect_fn_61804 = temp__5718__auto___61803;
(effect_fn_61804.cljs$core$IFn$_invoke$arity$1 ? effect_fn_61804.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_61804.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__61805 = cljs.core.next(seq__61702__$1);
var G__61806 = null;
var G__61807 = (0);
var G__61808 = (0);
seq__61702 = G__61805;
chunk__61703 = G__61806;
count__61704 = G__61807;
i__61705 = G__61808;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__61728 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__61729 = null;
var count__61730 = (0);
var i__61731 = (0);
while(true){
if((i__61731 < count__61730)){
var map__61742 = chunk__61729.cljs$core$IIndexed$_nth$arity$2(null,i__61731);
var map__61742__$1 = (((((!((map__61742 == null))))?(((((map__61742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61742):map__61742);
var effect = map__61742__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61742__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61742__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__61728,chunk__61729,count__61730,i__61731,map__61742,map__61742__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__61728,chunk__61729,count__61730,i__61731,map__61742,map__61742__$1,effect,ms,dispatch))
,ms);
}


var G__61809 = seq__61728;
var G__61810 = chunk__61729;
var G__61811 = count__61730;
var G__61812 = (i__61731 + (1));
seq__61728 = G__61809;
chunk__61729 = G__61810;
count__61730 = G__61811;
i__61731 = G__61812;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__61728);
if(temp__5720__auto__){
var seq__61728__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61728__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61728__$1);
var G__61813 = cljs.core.chunk_rest(seq__61728__$1);
var G__61814 = c__4556__auto__;
var G__61815 = cljs.core.count(c__4556__auto__);
var G__61816 = (0);
seq__61728 = G__61813;
chunk__61729 = G__61814;
count__61730 = G__61815;
i__61731 = G__61816;
continue;
} else {
var map__61746 = cljs.core.first(seq__61728__$1);
var map__61746__$1 = (((((!((map__61746 == null))))?(((((map__61746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61746):map__61746);
var effect = map__61746__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61746__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61746__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__61728,chunk__61729,count__61730,i__61731,map__61746,map__61746__$1,effect,ms,dispatch,seq__61728__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__61728,chunk__61729,count__61730,i__61731,map__61746,map__61746__$1,effect,ms,dispatch,seq__61728__$1,temp__5720__auto__))
,ms);
}


var G__61817 = cljs.core.next(seq__61728__$1);
var G__61818 = null;
var G__61819 = (0);
var G__61820 = (0);
seq__61728 = G__61817;
chunk__61729 = G__61818;
count__61730 = G__61819;
i__61731 = G__61820;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__61751 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__61752 = null;
var count__61753 = (0);
var i__61754 = (0);
while(true){
if((i__61754 < count__61753)){
var event = chunk__61752.cljs$core$IIndexed$_nth$arity$2(null,i__61754);
re_frame.router.dispatch(event);


var G__61823 = seq__61751;
var G__61824 = chunk__61752;
var G__61825 = count__61753;
var G__61826 = (i__61754 + (1));
seq__61751 = G__61823;
chunk__61752 = G__61824;
count__61753 = G__61825;
i__61754 = G__61826;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__61751);
if(temp__5720__auto__){
var seq__61751__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61751__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61751__$1);
var G__61830 = cljs.core.chunk_rest(seq__61751__$1);
var G__61831 = c__4556__auto__;
var G__61832 = cljs.core.count(c__4556__auto__);
var G__61833 = (0);
seq__61751 = G__61830;
chunk__61752 = G__61831;
count__61753 = G__61832;
i__61754 = G__61833;
continue;
} else {
var event = cljs.core.first(seq__61751__$1);
re_frame.router.dispatch(event);


var G__61834 = cljs.core.next(seq__61751__$1);
var G__61835 = null;
var G__61836 = (0);
var G__61837 = (0);
seq__61751 = G__61834;
chunk__61752 = G__61835;
count__61753 = G__61836;
i__61754 = G__61837;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__61758 = cljs.core.seq(value);
var chunk__61759 = null;
var count__61760 = (0);
var i__61761 = (0);
while(true){
if((i__61761 < count__61760)){
var event = chunk__61759.cljs$core$IIndexed$_nth$arity$2(null,i__61761);
clear_event(event);


var G__61838 = seq__61758;
var G__61839 = chunk__61759;
var G__61840 = count__61760;
var G__61841 = (i__61761 + (1));
seq__61758 = G__61838;
chunk__61759 = G__61839;
count__61760 = G__61840;
i__61761 = G__61841;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__61758);
if(temp__5720__auto__){
var seq__61758__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61758__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61758__$1);
var G__61842 = cljs.core.chunk_rest(seq__61758__$1);
var G__61843 = c__4556__auto__;
var G__61844 = cljs.core.count(c__4556__auto__);
var G__61845 = (0);
seq__61758 = G__61842;
chunk__61759 = G__61843;
count__61760 = G__61844;
i__61761 = G__61845;
continue;
} else {
var event = cljs.core.first(seq__61758__$1);
clear_event(event);


var G__61846 = cljs.core.next(seq__61758__$1);
var G__61847 = null;
var G__61848 = (0);
var G__61849 = (0);
seq__61758 = G__61846;
chunk__61759 = G__61847;
count__61760 = G__61848;
i__61761 = G__61849;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
