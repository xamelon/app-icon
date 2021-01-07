goog.provide('stylo.tailwind.border');
stylo.tailwind.border.rounded_size = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"none","none",1333468478),"0",new cljs.core.Keyword(null,"sm","sm",-1402575065),"0.125rem",new cljs.core.Keyword(null,"md","md",707286655),"0.375rem",new cljs.core.Keyword(null,"lg","lg",-80787836),"0.5rem",new cljs.core.Keyword(null,"full","full",436801220),"9999px"], null);
stylo.tailwind.border.rounded = (function stylo$tailwind$border$rounded(var_args){
var args__4742__auto__ = [];
var len__4736__auto___69381 = arguments.length;
var i__4737__auto___69382 = (0);
while(true){
if((i__4737__auto___69382 < len__4736__auto___69381)){
args__4742__auto__.push((arguments[i__4737__auto___69382]));

var G__69383 = (i__4737__auto___69382 + (1));
i__4737__auto___69382 = G__69383;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic = (function (x,keys){
var x__$1 = (((x == null))?"0.25rem":((cljs.core.int_QMARK_(x))?stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)):(stylo.tailwind.border.rounded_size.cljs$core$IFn$_invoke$arity$1 ? stylo.tailwind.border.rounded_size.cljs$core$IFn$_invoke$arity$1(x) : stylo.tailwind.border.rounded_size.call(null,x))
));
return cljs.core.zipmap(keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(x__$1));
}));

(stylo.tailwind.border.rounded.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stylo.tailwind.border.rounded.cljs$lang$applyTo = (function (seq69368){
var G__69369 = cljs.core.first(seq69368);
var seq69368__$1 = cljs.core.next(seq69368);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69369,seq69368__$1);
}));

stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded","rounded",85415706),(function() {
var G__69384 = null;
var G__69384__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-radius","border-radius",419594011)], 0))], null)], null);
});
var G__69384__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-radius","border-radius",419594011)], 0))], null)], null);
});
G__69384 = function(_,x){
switch(arguments.length){
case 1:
return G__69384__1.call(this,_);
case 2:
return G__69384__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69384.cljs$core$IFn$_invoke$arity$1 = G__69384__1;
G__69384.cljs$core$IFn$_invoke$arity$2 = G__69384__2;
return G__69384;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-t","rounded-t",-2048541791),(function() {
var G__69385 = null;
var G__69385__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
var G__69385__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
G__69385 = function(_,x){
switch(arguments.length){
case 1:
return G__69385__1.call(this,_);
case 2:
return G__69385__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69385.cljs$core$IFn$_invoke$arity$1 = G__69385__1;
G__69385.cljs$core$IFn$_invoke$arity$2 = G__69385__2;
return G__69385;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-r","rounded-r",-197111461),(function() {
var G__69386 = null;
var G__69386__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
var G__69386__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
G__69386 = function(_,x){
switch(arguments.length){
case 1:
return G__69386__1.call(this,_);
case 2:
return G__69386__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69386.cljs$core$IFn$_invoke$arity$1 = G__69386__1;
G__69386.cljs$core$IFn$_invoke$arity$2 = G__69386__2;
return G__69386;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-b","rounded-b",-765352328),(function() {
var G__69388 = null;
var G__69388__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
var G__69388__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
G__69388 = function(_,x){
switch(arguments.length){
case 1:
return G__69388__1.call(this,_);
case 2:
return G__69388__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69388.cljs$core$IFn$_invoke$arity$1 = G__69388__1;
G__69388.cljs$core$IFn$_invoke$arity$2 = G__69388__2;
return G__69388;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-l","rounded-l",1639486971),(function() {
var G__69389 = null;
var G__69389__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
var G__69389__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
G__69389 = function(_,x){
switch(arguments.length){
case 1:
return G__69389__1.call(this,_);
case 2:
return G__69389__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69389.cljs$core$IFn$_invoke$arity$1 = G__69389__1;
G__69389.cljs$core$IFn$_invoke$arity$2 = G__69389__2;
return G__69389;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-tl","rounded-tl",-649211256),(function() {
var G__69390 = null;
var G__69390__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342)], 0))], null)], null);
});
var G__69390__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342)], 0))], null)], null);
});
G__69390 = function(_,x){
switch(arguments.length){
case 1:
return G__69390__1.call(this,_);
case 2:
return G__69390__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69390.cljs$core$IFn$_invoke$arity$1 = G__69390__1;
G__69390.cljs$core$IFn$_invoke$arity$2 = G__69390__2;
return G__69390;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-tr","rounded-tr",776020084),(function() {
var G__69391 = null;
var G__69391__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
var G__69391__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792)], 0))], null)], null);
});
G__69391 = function(_,x){
switch(arguments.length){
case 1:
return G__69391__1.call(this,_);
case 2:
return G__69391__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69391.cljs$core$IFn$_invoke$arity$1 = G__69391__1;
G__69391.cljs$core$IFn$_invoke$arity$2 = G__69391__2;
return G__69391;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-br","rounded-br",1562597181),(function() {
var G__69392 = null;
var G__69392__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
var G__69392__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)], 0))], null)], null);
});
G__69392 = function(_,x){
switch(arguments.length){
case 1:
return G__69392__1.call(this,_);
case 2:
return G__69392__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69392.cljs$core$IFn$_invoke$arity$1 = G__69392__1;
G__69392.cljs$core$IFn$_invoke$arity$2 = G__69392__2;
return G__69392;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rounded-bl","rounded-bl",1067689139),(function() {
var G__69393 = null;
var G__69393__1 = (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
var G__69393__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),stylo.tailwind.border.rounded.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610)], 0))], null)], null);
});
G__69393 = function(_,x){
switch(arguments.length){
case 1:
return G__69393__1.call(this,_);
case 2:
return G__69393__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69393.cljs$core$IFn$_invoke$arity$1 = G__69393__1;
G__69393.cljs$core$IFn$_invoke$arity$2 = G__69393__2;
return G__69393;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border","border",1444987323),(function() {
var G__69394 = null;
var G__69394__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border","border",1444987323),(1));
});
var G__69394__2 = (function() { 
var G__69395__delegate = function (_,props){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.int_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"border-width","border-width",-1512605390),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha((stylo.tailwind.color.colors.cljs$core$IFn$_invoke$arity$1 ? stylo.tailwind.color.colors.cljs$core$IFn$_invoke$arity$1(x) : stylo.tailwind.color.colors.call(null,x)),new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),(1)], 0));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"px","px",281329899))], null),props)], null)], null);
};
var G__69395 = function (_,var_args){
var props = null;
if (arguments.length > 1) {
var G__69396__i = 0, G__69396__a = new Array(arguments.length -  1);
while (G__69396__i < G__69396__a.length) {G__69396__a[G__69396__i] = arguments[G__69396__i + 1]; ++G__69396__i;}
  props = new cljs.core.IndexedSeq(G__69396__a,0,null);
} 
return G__69395__delegate.call(this,_,props);};
G__69395.cljs$lang$maxFixedArity = 1;
G__69395.cljs$lang$applyTo = (function (arglist__69397){
var _ = cljs.core.first(arglist__69397);
var props = cljs.core.rest(arglist__69397);
return G__69395__delegate(_,props);
});
G__69395.cljs$core$IFn$_invoke$arity$variadic = G__69395__delegate;
return G__69395;
})()
;
G__69394 = function(_,var_args){
var props = var_args;
switch(arguments.length){
case 1:
return G__69394__1.call(this,_);
default:
var G__69398 = null;
if (arguments.length > 1) {
var G__69399__i = 0, G__69399__a = new Array(arguments.length -  1);
while (G__69399__i < G__69399__a.length) {G__69399__a[G__69399__i] = arguments[G__69399__i + 1]; ++G__69399__i;}
G__69398 = new cljs.core.IndexedSeq(G__69399__a,0,null);
}
return G__69394__2.cljs$core$IFn$_invoke$arity$variadic(_, G__69398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69394.cljs$lang$maxFixedArity = 1;
G__69394.cljs$lang$applyTo = G__69394__2.cljs$lang$applyTo;
G__69394.cljs$core$IFn$_invoke$arity$1 = G__69394__1;
G__69394.cljs$core$IFn$_invoke$arity$variadic = G__69394__2.cljs$core$IFn$_invoke$arity$variadic;
return G__69394;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-t","border-t",-1847734998),(function() {
var G__69400 = null;
var G__69400__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-t","border-t",-1847734998),(1));
});
var G__69400__2 = (function() { 
var G__69401__delegate = function (_,props){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.int_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"border-top-width","border-top-width",1612782932),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha((stylo.tailwind.color.colors.cljs$core$IFn$_invoke$arity$1 ? stylo.tailwind.color.colors.cljs$core$IFn$_invoke$arity$1(x) : stylo.tailwind.color.colors.call(null,x)),new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),(1)], 0));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top-width","border-top-width",1612782932),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"px","px",281329899))], null),props)], null)], null);
};
var G__69401 = function (_,var_args){
var props = null;
if (arguments.length > 1) {
var G__69402__i = 0, G__69402__a = new Array(arguments.length -  1);
while (G__69402__i < G__69402__a.length) {G__69402__a[G__69402__i] = arguments[G__69402__i + 1]; ++G__69402__i;}
  props = new cljs.core.IndexedSeq(G__69402__a,0,null);
} 
return G__69401__delegate.call(this,_,props);};
G__69401.cljs$lang$maxFixedArity = 1;
G__69401.cljs$lang$applyTo = (function (arglist__69403){
var _ = cljs.core.first(arglist__69403);
var props = cljs.core.rest(arglist__69403);
return G__69401__delegate(_,props);
});
G__69401.cljs$core$IFn$_invoke$arity$variadic = G__69401__delegate;
return G__69401;
})()
;
G__69400 = function(_,var_args){
var props = var_args;
switch(arguments.length){
case 1:
return G__69400__1.call(this,_);
default:
var G__69404 = null;
if (arguments.length > 1) {
var G__69405__i = 0, G__69405__a = new Array(arguments.length -  1);
while (G__69405__i < G__69405__a.length) {G__69405__a[G__69405__i] = arguments[G__69405__i + 1]; ++G__69405__i;}
G__69404 = new cljs.core.IndexedSeq(G__69405__a,0,null);
}
return G__69400__2.cljs$core$IFn$_invoke$arity$variadic(_, G__69404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69400.cljs$lang$maxFixedArity = 1;
G__69400.cljs$lang$applyTo = G__69400__2.cljs$lang$applyTo;
G__69400.cljs$core$IFn$_invoke$arity$1 = G__69400__1;
G__69400.cljs$core$IFn$_invoke$arity$variadic = G__69400__2.cljs$core$IFn$_invoke$arity$variadic;
return G__69400;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-r","border-r",1332650530),(function() {
var G__69406 = null;
var G__69406__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-r","border-r",1332650530),(1));
});
var G__69406__2 = (function() { 
var G__69407__delegate = function (_,props){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.int_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"border-right-width","border-right-width",750273868),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha((stylo.tailwind.color.colors.cljs$core$IFn$_invoke$arity$1 ? stylo.tailwind.color.colors.cljs$core$IFn$_invoke$arity$1(x) : stylo.tailwind.color.colors.call(null,x)),new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),(1)], 0));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right-width","border-right-width",750273868),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"px","px",281329899))], null),props)], null)], null);
};
var G__69407 = function (_,var_args){
var props = null;
if (arguments.length > 1) {
var G__69408__i = 0, G__69408__a = new Array(arguments.length -  1);
while (G__69408__i < G__69408__a.length) {G__69408__a[G__69408__i] = arguments[G__69408__i + 1]; ++G__69408__i;}
  props = new cljs.core.IndexedSeq(G__69408__a,0,null);
} 
return G__69407__delegate.call(this,_,props);};
G__69407.cljs$lang$maxFixedArity = 1;
G__69407.cljs$lang$applyTo = (function (arglist__69409){
var _ = cljs.core.first(arglist__69409);
var props = cljs.core.rest(arglist__69409);
return G__69407__delegate(_,props);
});
G__69407.cljs$core$IFn$_invoke$arity$variadic = G__69407__delegate;
return G__69407;
})()
;
G__69406 = function(_,var_args){
var props = var_args;
switch(arguments.length){
case 1:
return G__69406__1.call(this,_);
default:
var G__69410 = null;
if (arguments.length > 1) {
var G__69411__i = 0, G__69411__a = new Array(arguments.length -  1);
while (G__69411__i < G__69411__a.length) {G__69411__a[G__69411__i] = arguments[G__69411__i + 1]; ++G__69411__i;}
G__69410 = new cljs.core.IndexedSeq(G__69411__a,0,null);
}
return G__69406__2.cljs$core$IFn$_invoke$arity$variadic(_, G__69410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69406.cljs$lang$maxFixedArity = 1;
G__69406.cljs$lang$applyTo = G__69406__2.cljs$lang$applyTo;
G__69406.cljs$core$IFn$_invoke$arity$1 = G__69406__1;
G__69406.cljs$core$IFn$_invoke$arity$variadic = G__69406__2.cljs$core$IFn$_invoke$arity$variadic;
return G__69406;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-b","border-b",-466456219),(function() {
var G__69412 = null;
var G__69412__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-b","border-b",-466456219),(1));
});
var G__69412__2 = (function() { 
var G__69413__delegate = function (_,props){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.int_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha((stylo.tailwind.color.colors.cljs$core$IFn$_invoke$arity$1 ? stylo.tailwind.color.colors.cljs$core$IFn$_invoke$arity$1(x) : stylo.tailwind.color.colors.call(null,x)),new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),(1)], 0));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"px","px",281329899))], null),props)], null)], null);
};
var G__69413 = function (_,var_args){
var props = null;
if (arguments.length > 1) {
var G__69414__i = 0, G__69414__a = new Array(arguments.length -  1);
while (G__69414__i < G__69414__a.length) {G__69414__a[G__69414__i] = arguments[G__69414__i + 1]; ++G__69414__i;}
  props = new cljs.core.IndexedSeq(G__69414__a,0,null);
} 
return G__69413__delegate.call(this,_,props);};
G__69413.cljs$lang$maxFixedArity = 1;
G__69413.cljs$lang$applyTo = (function (arglist__69415){
var _ = cljs.core.first(arglist__69415);
var props = cljs.core.rest(arglist__69415);
return G__69413__delegate(_,props);
});
G__69413.cljs$core$IFn$_invoke$arity$variadic = G__69413__delegate;
return G__69413;
})()
;
G__69412 = function(_,var_args){
var props = var_args;
switch(arguments.length){
case 1:
return G__69412__1.call(this,_);
default:
var G__69416 = null;
if (arguments.length > 1) {
var G__69417__i = 0, G__69417__a = new Array(arguments.length -  1);
while (G__69417__i < G__69417__a.length) {G__69417__a[G__69417__i] = arguments[G__69417__i + 1]; ++G__69417__i;}
G__69416 = new cljs.core.IndexedSeq(G__69417__a,0,null);
}
return G__69412__2.cljs$core$IFn$_invoke$arity$variadic(_, G__69416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69412.cljs$lang$maxFixedArity = 1;
G__69412.cljs$lang$applyTo = G__69412__2.cljs$lang$applyTo;
G__69412.cljs$core$IFn$_invoke$arity$1 = G__69412__1;
G__69412.cljs$core$IFn$_invoke$arity$variadic = G__69412__2.cljs$core$IFn$_invoke$arity$variadic;
return G__69412;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-l","border-l",653108124),(function() {
var G__69418 = null;
var G__69418__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-l","border-l",653108124),(1));
});
var G__69418__2 = (function() { 
var G__69419__delegate = function (_,props){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.int_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha((stylo.tailwind.color.colors.cljs$core$IFn$_invoke$arity$1 ? stylo.tailwind.color.colors.cljs$core$IFn$_invoke$arity$1(x) : stylo.tailwind.color.colors.call(null,x)),new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),(1)], 0));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"px","px",281329899))], null),props)], null)], null);
};
var G__69419 = function (_,var_args){
var props = null;
if (arguments.length > 1) {
var G__69420__i = 0, G__69420__a = new Array(arguments.length -  1);
while (G__69420__i < G__69420__a.length) {G__69420__a[G__69420__i] = arguments[G__69420__i + 1]; ++G__69420__i;}
  props = new cljs.core.IndexedSeq(G__69420__a,0,null);
} 
return G__69419__delegate.call(this,_,props);};
G__69419.cljs$lang$maxFixedArity = 1;
G__69419.cljs$lang$applyTo = (function (arglist__69421){
var _ = cljs.core.first(arglist__69421);
var props = cljs.core.rest(arglist__69421);
return G__69419__delegate(_,props);
});
G__69419.cljs$core$IFn$_invoke$arity$variadic = G__69419__delegate;
return G__69419;
})()
;
G__69418 = function(_,var_args){
var props = var_args;
switch(arguments.length){
case 1:
return G__69418__1.call(this,_);
default:
var G__69422 = null;
if (arguments.length > 1) {
var G__69423__i = 0, G__69423__a = new Array(arguments.length -  1);
while (G__69423__i < G__69423__a.length) {G__69423__a[G__69423__i] = arguments[G__69423__i + 1]; ++G__69423__i;}
G__69422 = new cljs.core.IndexedSeq(G__69423__a,0,null);
}
return G__69418__2.cljs$core$IFn$_invoke$arity$variadic(_, G__69422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69418.cljs$lang$maxFixedArity = 1;
G__69418.cljs$lang$applyTo = G__69418__2.cljs$lang$applyTo;
G__69418.cljs$core$IFn$_invoke$arity$1 = G__69418__1;
G__69418.cljs$core$IFn$_invoke$arity$variadic = G__69418__2.cljs$core$IFn$_invoke$arity$variadic;
return G__69418;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-opacity","border-opacity",-1046826610),(function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"--border-opacity","--border-opacity",164540135),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"percent","percent",2031453817))], null)], null)], null);
}));
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-solid","border-solid",-1844392314),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid"], null)], null)], null);
}));
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-dashed","border-dashed",-1823201978),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"dashed"], null)], null)], null);
}));
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-dotted","border-dotted",-2061093096),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"dotted"], null)], null)], null);
}));
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-double","border-double",500673849),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"double"], null)], null)], null);
}));
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"border-none","border-none",1383902613),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"none"], null)], null)], null);
}));
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"divide","divide",2108946657),(function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&>*+*",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),stylo.util.with_alpha((stylo.tailwind.color.colors.cljs$core$IFn$_invoke$arity$1 ? stylo.tailwind.color.colors.cljs$core$IFn$_invoke$arity$1(x) : stylo.tailwind.color.colors.call(null,x)),new cljs.core.Keyword(null,"--divide-opacity","--divide-opacity",-1688298810)),new cljs.core.Keyword(null,"--divide-opacity","--divide-opacity",-1688298810),(1)], null)], null)], null);
}));
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"divide-opacity","divide-opacity",1994371723),(function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"--divide-opacity","--divide-opacity",-1688298810),stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"percent","percent",2031453817))], null)], null)], null);
}));
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"divide-x","divide-x",-816420657),(function() {
var G__69424 = null;
var G__69424__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divide-x","divide-x",-816420657),(1));
});
var G__69424__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&>*+*",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"--divide-x-reverse","--divide-x-reverse",149178366),(0),new cljs.core.Keyword(null,"border-right-width","border-right-width",750273868),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * var(--divide-x-reverse))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0)),new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * calc(1 - var(--divide-x-reverse)))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0))], null)], null)], null);
});
G__69424 = function(_,x){
switch(arguments.length){
case 1:
return G__69424__1.call(this,_);
case 2:
return G__69424__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69424.cljs$core$IFn$_invoke$arity$1 = G__69424__1;
G__69424.cljs$core$IFn$_invoke$arity$2 = G__69424__2;
return G__69424;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"divide-y","divide-y",-875938125),(function() {
var G__69425 = null;
var G__69425__1 = (function (_){
return stylo.rule.rule.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divide-y","divide-y",-875938125),(1));
});
var G__69425__2 = (function (_,x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&>*+*",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"--divide-y-reverse","--divide-y-reverse",1383963719),(0),new cljs.core.Keyword(null,"border-top-width","border-top-width",1612782932),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * calc(1 - var(--divide-y-reverse)))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0)),new cljs.core.Keyword(null,"border-bottom-width","border-bottom-width",-1417262769),stylo.util.format.cljs$core$IFn$_invoke$arity$variadic("calc(%s * var(--divide-y-reverse))",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.compiler.render_css(stylo.util.as_unit.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"px","px",281329899)))], 0))], null)], null)], null);
});
G__69425 = function(_,x){
switch(arguments.length){
case 1:
return G__69425__1.call(this,_);
case 2:
return G__69425__2.call(this,_,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69425.cljs$core$IFn$_invoke$arity$1 = G__69425__1;
G__69425.cljs$core$IFn$_invoke$arity$2 = G__69425__2;
return G__69425;
})()
);

//# sourceMappingURL=stylo.tailwind.border.js.map
