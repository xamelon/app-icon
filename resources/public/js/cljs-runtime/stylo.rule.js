goog.provide('stylo.rule');
if((typeof stylo !== 'undefined') && (typeof stylo.rule !== 'undefined') && (typeof stylo.rule.rule !== 'undefined')){
} else {
stylo.rule.rule = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("stylo.rule","default","stylo.rule/default",1590513079)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__69152 = cljs.core.get_global_hierarchy;
return (fexpr__69152.cljs$core$IFn$_invoke$arity$0 ? fexpr__69152.cljs$core$IFn$_invoke$arity$0() : fexpr__69152.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("stylo.rule","rule"),(function() { 
var G__69167__delegate = function (k,_){
return k;
};
var G__69167 = function (k,var_args){
var _ = null;
if (arguments.length > 1) {
var G__69168__i = 0, G__69168__a = new Array(arguments.length -  1);
while (G__69168__i < G__69168__a.length) {G__69168__a[G__69168__i] = arguments[G__69168__i + 1]; ++G__69168__i;}
  _ = new cljs.core.IndexedSeq(G__69168__a,0,null);
} 
return G__69167__delegate.call(this,k,_);};
G__69167.cljs$lang$maxFixedArity = 1;
G__69167.cljs$lang$applyTo = (function (arglist__69172){
var k = cljs.core.first(arglist__69172);
var _ = cljs.core.rest(arglist__69172);
return G__69167__delegate(k,_);
});
G__69167.cljs$core$IFn$_invoke$arity$variadic = G__69167__delegate;
return G__69167;
})()
,new cljs.core.Keyword("stylo.rule","default","stylo.rule/default",1590513079),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("stylo.rule","default","stylo.rule/default",1590513079),(function() { 
var G__69173__delegate = function (k,types){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([types], 0))])], null)], null);
};
var G__69173 = function (k,var_args){
var types = null;
if (arguments.length > 1) {
var G__69174__i = 0, G__69174__a = new Array(arguments.length -  1);
while (G__69174__i < G__69174__a.length) {G__69174__a[G__69174__i] = arguments[G__69174__i + 1]; ++G__69174__i;}
  types = new cljs.core.IndexedSeq(G__69174__a,0,null);
} 
return G__69173__delegate.call(this,k,types);};
G__69173.cljs$lang$maxFixedArity = 1;
G__69173.cljs$lang$applyTo = (function (arglist__69175){
var k = cljs.core.first(arglist__69175);
var types = cljs.core.rest(arglist__69175);
return G__69173__delegate(k,types);
});
G__69173.cljs$core$IFn$_invoke$arity$variadic = G__69173__delegate;
return G__69173;
})()
);
stylo.rule.merge_by_selector = (function stylo$rule$merge_by_selector(exps){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__69154){
var vec__69155 = p__69154;
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69155,(0),null);
var exps__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69155,(1),null);
var style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,exps__$1));
var children = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69153_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),p1__69153_SHARP_);
}),exps__$1));
var G__69158 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector], null);
var G__69158__$1 = ((cljs.core.seq(style))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__69158,style):G__69158);
if(cljs.core.seq(children)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__69158__$1,children);
} else {
return G__69158__$1;
}
}),cljs.core.group_by(cljs.core.first,exps));
});
stylo.rule.join_rules = (function stylo$rule$join_rules(rules){
return stylo.rule.merge_by_selector(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__69163_SHARP_){
if(((cljs.core.sequential_QMARK_(p1__69163_SHARP_)) && (cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,p1__69163_SHARP_)))){
return p1__69163_SHARP_;
} else {
if(cljs.core.sequential_QMARK_(p1__69163_SHARP_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(stylo.rule.rule,p1__69163_SHARP_);
} else {
if(cljs.core.map_QMARK_(p1__69163_SHARP_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),p1__69163_SHARP_], null)], null);
} else {
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$1(p1__69163_SHARP_);

}
}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0)));
});

//# sourceMappingURL=stylo.rule.js.map
