goog.provide('garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4742__auto__ = [];
var len__4736__auto___69525 = arguments.length;
var i__4737__auto___69526 = (0);
while(true){
if((i__4737__auto___69526 < len__4736__auto___69525)){
args__4742__auto__.push((arguments[i__4737__auto___69526]));

var G__69527 = (i__4737__auto___69526 + (1));
i__4737__auto___69526 = G__69527;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__69529__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__69529 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__69532__i = 0, G__69532__a = new Array(arguments.length -  0);
while (G__69532__i < G__69532__a.length) {G__69532__a[G__69532__i] = arguments[G__69532__i + 0]; ++G__69532__i;}
  children = new cljs.core.IndexedSeq(G__69532__a,0,null);
} 
return G__69529__delegate.call(this,children);};
G__69529.cljs$lang$maxFixedArity = 0;
G__69529.cljs$lang$applyTo = (function (arglist__69533){
var children = cljs.core.seq(arglist__69533);
return G__69529__delegate(children);
});
G__69529.cljs$core$IFn$_invoke$arity$variadic = G__69529__delegate;
return G__69529;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq69431){
var G__69432 = cljs.core.first(seq69431);
var seq69431__$1 = cljs.core.next(seq69431);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69432,seq69431__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__69538__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__69538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69539__i = 0, G__69539__a = new Array(arguments.length -  0);
while (G__69539__i < G__69539__a.length) {G__69539__a[G__69539__i] = arguments[G__69539__i + 0]; ++G__69539__i;}
  args = new cljs.core.IndexedSeq(G__69539__a,0,null);
} 
return G__69538__delegate.call(this,args);};
G__69538.cljs$lang$maxFixedArity = 0;
G__69538.cljs$lang$applyTo = (function (arglist__69540){
var args = cljs.core.seq(arglist__69540);
return G__69538__delegate(args);
});
G__69538.cljs$core$IFn$_invoke$arity$variadic = G__69538__delegate;
return G__69538;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4742__auto__ = [];
var len__4736__auto___69541 = arguments.length;
var i__4737__auto___69542 = (0);
while(true){
if((i__4737__auto___69542 < len__4736__auto___69541)){
args__4742__auto__.push((arguments[i__4737__auto___69542]));

var G__69543 = (i__4737__auto___69542 + (1));
i__4737__auto___69542 = G__69543;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq69442){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69442));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__69452 = arguments.length;
switch (G__69452) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___69545 = arguments.length;
var i__4737__auto___69546 = (0);
while(true){
if((i__4737__auto___69546 < len__4736__auto___69545)){
args_arr__4757__auto__.push((arguments[i__4737__auto___69546]));

var G__69547 = (i__4737__auto___69546 + (1));
i__4737__auto___69546 = G__69547;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq69450){
var G__69451 = cljs.core.first(seq69450);
var seq69450__$1 = cljs.core.next(seq69450);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69451,seq69450__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4742__auto__ = [];
var len__4736__auto___69548 = arguments.length;
var i__4737__auto___69549 = (0);
while(true){
if((i__4737__auto___69549 < len__4736__auto___69548)){
args__4742__auto__.push((arguments[i__4737__auto___69549]));

var G__69550 = (i__4737__auto___69549 + (1));
i__4737__auto___69549 = G__69550;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq69459){
var G__69460 = cljs.core.first(seq69459);
var seq69459__$1 = cljs.core.next(seq69459);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69460,seq69459__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4742__auto__ = [];
var len__4736__auto___69554 = arguments.length;
var i__4737__auto___69555 = (0);
while(true){
if((i__4737__auto___69555 < len__4736__auto___69554)){
args__4742__auto__.push((arguments[i__4737__auto___69555]));

var G__69556 = (i__4737__auto___69555 + (1));
i__4737__auto___69555 = G__69556;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq69470){
var G__69471 = cljs.core.first(seq69470);
var seq69470__$1 = cljs.core.next(seq69470);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69471,seq69470__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4742__auto__ = [];
var len__4736__auto___69557 = arguments.length;
var i__4737__auto___69558 = (0);
while(true){
if((i__4737__auto___69558 < len__4736__auto___69557)){
args__4742__auto__.push((arguments[i__4737__auto___69558]));

var G__69559 = (i__4737__auto___69558 + (1));
i__4737__auto___69558 = G__69559;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq69492){
var G__69493 = cljs.core.first(seq69492);
var seq69492__$1 = cljs.core.next(seq69492);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69493,seq69492__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
