goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__60322__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__60322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60323__i = 0, G__60323__a = new Array(arguments.length -  0);
while (G__60323__i < G__60323__a.length) {G__60323__a[G__60323__i] = arguments[G__60323__i + 0]; ++G__60323__i;}
  args = new cljs.core.IndexedSeq(G__60323__a,0,null);
} 
return G__60322__delegate.call(this,args);};
G__60322.cljs$lang$maxFixedArity = 0;
G__60322.cljs$lang$applyTo = (function (arglist__60324){
var args = cljs.core.seq(arglist__60324);
return G__60322__delegate(args);
});
G__60322.cljs$core$IFn$_invoke$arity$variadic = G__60322__delegate;
return G__60322;
})()
);

(o.error = (function() { 
var G__60325__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__60325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60326__i = 0, G__60326__a = new Array(arguments.length -  0);
while (G__60326__i < G__60326__a.length) {G__60326__a[G__60326__i] = arguments[G__60326__i + 0]; ++G__60326__i;}
  args = new cljs.core.IndexedSeq(G__60326__a,0,null);
} 
return G__60325__delegate.call(this,args);};
G__60325.cljs$lang$maxFixedArity = 0;
G__60325.cljs$lang$applyTo = (function (arglist__60327){
var args = cljs.core.seq(arglist__60327);
return G__60325__delegate(args);
});
G__60325.cljs$core$IFn$_invoke$arity$variadic = G__60325__delegate;
return G__60325;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
