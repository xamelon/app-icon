goog.provide('re_frisk.core');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.core !== 'undefined') && (typeof re_frisk.core.initialized !== 'undefined')){
} else {
re_frisk.core.initialized = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.core !== 'undefined') && (typeof re_frisk.core.prev_event !== 'undefined')){
} else {
re_frisk.core.prev_event = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.core !== 'undefined') && (typeof re_frisk.core.re_frame_data !== 'undefined')){
} else {
re_frisk.core.re_frame_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"app-db","app-db",865606302),reagent.core.atom.cljs$core$IFn$_invoke$arity$1("not connected"),new cljs.core.Keyword(null,"events","events",1792552201),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"subs","subs",-186681991),reagent.core.atom.cljs$core$IFn$_invoke$arity$1("not connected")], null);
}
re_frisk.core.update_db_and_subs = (function re_frisk$core$update_db_and_subs(){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data),cljs.core.deref(re_frame.subs.query__GT_reaction));

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data),cljs.core.deref(re_frame.db.app_db));
});
re_frisk.core.trace_cb = (function re_frisk$core$trace_cb(traces){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data),cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frisk.trace.normalize_durations,re_frisk.trace.normalize_traces(traces)));

return re_frisk.utils.call_and_chill(re_frisk.core.update_db_and_subs,(500));
});
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value,queue){
var app_db = cljs.core.deref(re_frame.db.app_db);
var indx = cljs.core.count(cljs.core.deref(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data)));
var diff = re_frisk.diff.diff.diff(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.core.prev_event)),app_db);
cljs.core.reset_BANG_(re_frisk.core.prev_event,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db","app-db",865606302),app_db], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frisk.core.re_frame_data),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"event","event",301435442),value,new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713),diff,new cljs.core.Keyword(null,"indx","indx",1571035590),indx,new cljs.core.Keyword(null,"queue","queue",1455835879),queue,new cljs.core.Keyword(null,"truncated-name","truncated-name",1771353320),re_frisk.utils.truncate_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(value)))], null));

return re_frisk.utils.call_and_chill(re_frisk.core.update_db_and_subs,(500));
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65980 = arguments.length;
var i__4737__auto___65981 = (0);
while(true){
if((i__4737__auto___65981 < len__4736__auto___65980)){
args__4742__auto__.push((arguments[i__4737__auto___65981]));

var G__65982 = (i__4737__auto___65981 + (1));
i__4737__auto___65981 = G__65982;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__65970){
var vec__65972 = p__65970;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65972,(0),null);
if(cljs.core.truth_(cljs.core.deref(re_frisk.core.initialized))){
return null;
} else {
cljs.core.reset_BANG_(re_frisk.core.initialized,true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.db.tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"opts","opts",155075701),opts);

if(re_frame.trace.is_trace_enabled_QMARK_()){
re_frame.trace.register_trace_cb(new cljs.core.Keyword(null,"re-frisk-trace","re-frisk-trace",912949928),re_frisk.core.trace_cb);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"events?","events?",-780512682).cljs$core$IFn$_invoke$arity$1(opts),false)){
} else {
cljs.core.reset_BANG_(re_frisk.core.prev_event,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db","app-db",865606302),cljs.core.deref(re_frame.db.app_db)], null));

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1(re_frisk.core.post_event_callback);
}
}

return setTimeout(re_frisk.ui.views.mount_internal,(100),re_frisk.core.re_frame_data);
}
}));

(re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq65969){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65969));
}));

re_frisk.core.enable = (function re_frisk$core$enable(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65983 = arguments.length;
var i__4737__auto___65984 = (0);
while(true){
if((i__4737__auto___65984 < len__4736__auto___65983)){
args__4742__auto__.push((arguments[i__4737__auto___65984]));

var G__65985 = (i__4737__auto___65984 + (1));
i__4737__auto___65984 = G__65985;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_frisk.core.enable.cljs$core$IFn$_invoke$arity$variadic = (function (p__65976){
var vec__65977 = p__65976;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65977,(0),null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
}));

(re_frisk.core.enable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk.core.enable.cljs$lang$applyTo = (function (seq65975){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65975));
}));


//# sourceMappingURL=re_frisk.core.js.map
