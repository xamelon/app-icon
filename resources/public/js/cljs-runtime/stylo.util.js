goog.provide('stylo.util');
stylo.util.format = (function stylo$util$format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___69243 = arguments.length;
var i__4737__auto___69244 = (0);
while(true){
if((i__4737__auto___69244 < len__4736__auto___69243)){
args__4742__auto__.push((arguments[i__4737__auto___69244]));

var G__69245 = (i__4737__auto___69244 + (1));
i__4737__auto___69244 = G__69245;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return stylo.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(stylo.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(stylo.util.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stylo.util.format.cljs$lang$applyTo = (function (seq69213){
var G__69214 = cljs.core.first(seq69213);
var seq69213__$1 = cljs.core.next(seq69213);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69214,seq69213__$1);
}));

stylo.util.with_alpha = (function stylo$util$with_alpha(color,variable){
var temp__5718__auto__ = garden.color.hex__GT_rgb(color);
if(cljs.core.truth_(temp__5718__auto__)){
var map__69225 = temp__5718__auto__;
var map__69225__$1 = (((((!((map__69225 == null))))?(((((map__69225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69225):map__69225);
var red = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69225__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var green = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69225__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var blue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69225__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
return stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("rgba(%d,%d,%d,var(%s))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([red,green,blue,cljs.core.name(variable)], 0));
} else {
return color;
}
});
stylo.util.str_ratio_QMARK_ = (function stylo$util$str_ratio_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.re_matches(/(-?\d+)\/(\d+)/,s);
} else {
return false;
}
});
stylo.util.parse_str_ratio = (function stylo$util$parse_str_ratio(s){
var vec__69237 = cljs.core.re_matches(/(-?\d+)\/(\d+)/,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69237,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69237,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69237,(2),null);
return (parseFloat(n) / parseFloat(d));
});
stylo.util.as_unit = (function stylo$util$as_unit(var_args){
var G__69241 = arguments.length;
switch (G__69241) {
case 1:
return stylo.util.as_unit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$1 = (function (v){
return stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"rem","rem",-976484757));
}));

(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2 = (function (v,preferred_unit){
if(garden.units.unit_QMARK_(v)){
return v;
} else {
if(cljs.core.truth_(stylo.util.str_ratio_QMARK_(v))){
return garden.units.percent(((100) * stylo.util.parse_str_ratio(v)));
} else {
if(typeof v === 'string'){
return v;
} else {
var G__69242 = preferred_unit;
var G__69242__$1 = (((G__69242 instanceof cljs.core.Keyword))?G__69242.fqn:null);
switch (G__69242__$1) {
case "ms":
return garden.units.ms(v);

break;
case "px":
return garden.units.px(v);

break;
case "deg":
return garden.units.deg(v);

break;
case "rem":
return garden.units.rem((v * 0.25));

break;
case "percent":
return garden.units.percent(v);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69242__$1)].join('')));

}

}
}
}
}));

(stylo.util.as_unit.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=stylo.util.js.map
