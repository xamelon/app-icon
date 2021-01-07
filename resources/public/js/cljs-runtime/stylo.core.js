goog.provide('stylo.core');
if((typeof stylo !== 'undefined') && (typeof stylo.core !== 'undefined') && (typeof stylo.core.styles !== 'undefined')){
} else {
stylo.core.styles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
stylo.core.compile_styles = (function stylo$core$compile_styles(styles){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(stylo.tailwind.preflight.preflight,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__70805){
var vec__70806 = p__70805;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70806,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70806,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"location","location",1815599388),cljs.core.meta,cljs.core.val),styles)))], 0));
});

//# sourceMappingURL=stylo.core.js.map
