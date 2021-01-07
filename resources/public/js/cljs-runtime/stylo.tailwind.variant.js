goog.provide('stylo.tailwind.variant');
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),(function() { 
var G__69461__delegate = function (_,k,rules){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cljs.core.PersistentArrayMap.EMPTY], null),stylo.rule.join_rules(rules))], null);
};
var G__69461 = function (_,k,var_args){
var rules = null;
if (arguments.length > 2) {
var G__69462__i = 0, G__69462__a = new Array(arguments.length -  2);
while (G__69462__i < G__69462__a.length) {G__69462__a[G__69462__i] = arguments[G__69462__i + 2]; ++G__69462__i;}
  rules = new cljs.core.IndexedSeq(G__69462__a,0,null);
} 
return G__69461__delegate.call(this,_,k,rules);};
G__69461.cljs$lang$maxFixedArity = 2;
G__69461.cljs$lang$applyTo = (function (arglist__69463){
var _ = cljs.core.first(arglist__69463);
arglist__69463 = cljs.core.next(arglist__69463);
var k = cljs.core.first(arglist__69463);
var rules = cljs.core.rest(arglist__69463);
return G__69461__delegate(_,k,rules);
});
G__69461.cljs$core$IFn$_invoke$arity$variadic = G__69461__delegate;
return G__69461;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"odd","odd",-1213409872),(function() { 
var G__69464__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),":nth-child(odd)",rules);
};
var G__69464 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__69465__i = 0, G__69465__a = new Array(arguments.length -  1);
while (G__69465__i < G__69465__a.length) {G__69465__a[G__69465__i] = arguments[G__69465__i + 1]; ++G__69465__i;}
  rules = new cljs.core.IndexedSeq(G__69465__a,0,null);
} 
return G__69464__delegate.call(this,_,rules);};
G__69464.cljs$lang$maxFixedArity = 1;
G__69464.cljs$lang$applyTo = (function (arglist__69466){
var _ = cljs.core.first(arglist__69466);
var rules = cljs.core.rest(arglist__69466);
return G__69464__delegate(_,rules);
});
G__69464.cljs$core$IFn$_invoke$arity$variadic = G__69464__delegate;
return G__69464;
})()
);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"even","even",-275845692),(function() { 
var G__69467__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),":nth-child(even)",rules);
};
var G__69467 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__69468__i = 0, G__69468__a = new Array(arguments.length -  1);
while (G__69468__i < G__69468__a.length) {G__69468__a[G__69468__i] = arguments[G__69468__i + 1]; ++G__69468__i;}
  rules = new cljs.core.IndexedSeq(G__69468__a,0,null);
} 
return G__69467__delegate.call(this,_,rules);};
G__69467.cljs$lang$maxFixedArity = 1;
G__69467.cljs$lang$applyTo = (function (arglist__69469){
var _ = cljs.core.first(arglist__69469);
var rules = cljs.core.rest(arglist__69469);
return G__69467__delegate(_,rules);
});
G__69467.cljs$core$IFn$_invoke$arity$variadic = G__69467__delegate;
return G__69467;
})()
);
stylo.tailwind.variant.pseudo_classes = cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"any-link","any-link",-1005234634),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"defined","defined",-1805032318),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"enabled","enabled",1195909756),new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"first-child","first-child",2114099842),new cljs.core.Keyword(null,"first-of-type","first-of-type",-740219653),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"focus-visible","focus-visible",-135927717),new cljs.core.Keyword(null,"focus-within","focus-within",1637765153),new cljs.core.Keyword(null,"fullscreen","fullscreen",-4371054),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"in-range","in-range",1356571825),new cljs.core.Keyword(null,"indeterminate","indeterminate",-513040976),new cljs.core.Keyword(null,"invalid","invalid",412869516),new cljs.core.Keyword(null,"last-child","last-child",1330670325),new cljs.core.Keyword(null,"last-of-type","last-of-type",-654078196),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"only-child","only-child",-1420502495),new cljs.core.Keyword(null,"only-of-type","only-of-type",693975143),new cljs.core.Keyword(null,"optional","optional",2053951509),new cljs.core.Keyword(null,"out-of-range","out-of-range",692318589),new cljs.core.Keyword(null,"placeholder-shown","placeholder-shown",1752397014),new cljs.core.Keyword(null,"read-only","read-only",-191706886),new cljs.core.Keyword(null,"read-write","read-write",178022883),new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"valid","valid",155614240),new cljs.core.Keyword(null,"visited","visited",-1610853875)], true);
var seq__69433_69472 = cljs.core.seq(stylo.tailwind.variant.pseudo_classes);
var chunk__69434_69473 = null;
var count__69435_69474 = (0);
var i__69436_69475 = (0);
while(true){
if((i__69436_69475 < count__69435_69474)){
var c_69476 = chunk__69434_69473.cljs$core$IIndexed$_nth$arity$2(null,i__69436_69475);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,c_69476,((function (seq__69433_69472,chunk__69434_69473,count__69435_69474,i__69436_69475,c_69476){
return (function() { 
var G__69477__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_69476),rules);
};
var G__69477 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__69478__i = 0, G__69478__a = new Array(arguments.length -  1);
while (G__69478__i < G__69478__a.length) {G__69478__a[G__69478__i] = arguments[G__69478__i + 1]; ++G__69478__i;}
  rules = new cljs.core.IndexedSeq(G__69478__a,0,null);
} 
return G__69477__delegate.call(this,_,rules);};
G__69477.cljs$lang$maxFixedArity = 1;
G__69477.cljs$lang$applyTo = (function (arglist__69479){
var _ = cljs.core.first(arglist__69479);
var rules = cljs.core.rest(arglist__69479);
return G__69477__delegate(_,rules);
});
G__69477.cljs$core$IFn$_invoke$arity$variadic = G__69477__delegate;
return G__69477;
})()
;})(seq__69433_69472,chunk__69434_69473,count__69435_69474,i__69436_69475,c_69476))
);


var G__69480 = seq__69433_69472;
var G__69481 = chunk__69434_69473;
var G__69482 = count__69435_69474;
var G__69483 = (i__69436_69475 + (1));
seq__69433_69472 = G__69480;
chunk__69434_69473 = G__69481;
count__69435_69474 = G__69482;
i__69436_69475 = G__69483;
continue;
} else {
var temp__5720__auto___69484 = cljs.core.seq(seq__69433_69472);
if(temp__5720__auto___69484){
var seq__69433_69485__$1 = temp__5720__auto___69484;
if(cljs.core.chunked_seq_QMARK_(seq__69433_69485__$1)){
var c__4556__auto___69486 = cljs.core.chunk_first(seq__69433_69485__$1);
var G__69487 = cljs.core.chunk_rest(seq__69433_69485__$1);
var G__69488 = c__4556__auto___69486;
var G__69489 = cljs.core.count(c__4556__auto___69486);
var G__69490 = (0);
seq__69433_69472 = G__69487;
chunk__69434_69473 = G__69488;
count__69435_69474 = G__69489;
i__69436_69475 = G__69490;
continue;
} else {
var c_69491 = cljs.core.first(seq__69433_69485__$1);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,c_69491,((function (seq__69433_69472,chunk__69434_69473,count__69435_69474,i__69436_69475,c_69491,seq__69433_69485__$1,temp__5720__auto___69484){
return (function() { 
var G__69494__delegate = function (_,rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_69491),rules);
};
var G__69494 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__69495__i = 0, G__69495__a = new Array(arguments.length -  1);
while (G__69495__i < G__69495__a.length) {G__69495__a[G__69495__i] = arguments[G__69495__i + 1]; ++G__69495__i;}
  rules = new cljs.core.IndexedSeq(G__69495__a,0,null);
} 
return G__69494__delegate.call(this,_,rules);};
G__69494.cljs$lang$maxFixedArity = 1;
G__69494.cljs$lang$applyTo = (function (arglist__69496){
var _ = cljs.core.first(arglist__69496);
var rules = cljs.core.rest(arglist__69496);
return G__69494__delegate(_,rules);
});
G__69494.cljs$core$IFn$_invoke$arity$variadic = G__69494__delegate;
return G__69494;
})()
;})(seq__69433_69472,chunk__69434_69473,count__69435_69474,i__69436_69475,c_69491,seq__69433_69485__$1,temp__5720__auto___69484))
);


var G__69497 = cljs.core.next(seq__69433_69485__$1);
var G__69498 = null;
var G__69499 = (0);
var G__69500 = (0);
seq__69433_69472 = G__69497;
chunk__69434_69473 = G__69498;
count__69435_69474 = G__69499;
i__69436_69475 = G__69500;
continue;
}
} else {
}
}
break;
}
stylo.tailwind.variant.pseudo_elements = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"thumb","thumb",1718947232),new cljs.core.Keyword(null,"range-track","range-track",-1449711072),new cljs.core.Keyword(null,"first-line","first-line",285094849),new cljs.core.Keyword(null,"spelling-error","spelling-error",1665378434),new cljs.core.Keyword(null,"progress-bar","progress-bar",-123877022),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"grammar-error","grammar-error",419933222),new cljs.core.Keyword(null,"reveal","reveal",-131374202),new cljs.core.Keyword(null,"range-progress","range-progress",-920777497),new cljs.core.Keyword(null,"check","check",1226308904),new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword(null,"browse","browse",2070502601),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cue-region","cue-region",1087710702),new cljs.core.Keyword(null,"ticks-before","ticks-before",2078986128),new cljs.core.Keyword(null,"ticks-after","ticks-after",-211651342),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"range-thumb","range-thumb",1201269077),new cljs.core.Keyword(null,"fill-lower","fill-lower",1022026678),new cljs.core.Keyword(null,"first-letter","first-letter",1923006839),new cljs.core.Keyword(null,"cue","cue",1555624311),new cljs.core.Keyword(null,"fill-upper","fill-upper",-911013512),new cljs.core.Keyword(null,"progress-value","progress-value",1698126170),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"expand","expand",595248157),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"track","track",195787487)],["::-ms-thumb",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["::-webkit-slider-runnable-track",null,"::-moz-range-track",null], null), null),"::first-line","::spelling-error",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["::-webkit-progress-bar",null,"::-moz-progress-bar",null], null), null),"::placeholder","::grammar-error","::-ms-reveal","::-moz-range-progress","::-ms-check","::marker","::-ms-browse","::-ms-fill","::-ms-value","::cue-region","::-ms-ticks-before","::-ms-ticks-after","::after",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["::-webkit-slider-thumb",null,"::-moz-range-thumb",null], null), null),"::-ms-fill-lower","::first-letter","::cue","::-ms-fill-upper","::-webkit-progress-value","::selection","::backdrop","::before","::-ms-expand","::-ms-tooltip","::-ms-clear","::-ms-track"]);
var seq__69438_69501 = cljs.core.seq(stylo.tailwind.variant.pseudo_elements);
var chunk__69439_69502 = null;
var count__69440_69503 = (0);
var i__69441_69504 = (0);
while(true){
if((i__69441_69504 < count__69440_69503)){
var vec__69453_69505 = chunk__69439_69502.cljs$core$IIndexed$_nth$arity$2(null,i__69441_69504);
var k_69506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69453_69505,(0),null);
var v_69507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69453_69505,(1),null);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k_69506,((function (seq__69438_69501,chunk__69439_69502,count__69440_69503,i__69441_69504,vec__69453_69505,k_69506,v_69507){
return (function() { 
var G__69508__delegate = function (_,rules){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (seq__69438_69501,chunk__69439_69502,count__69440_69503,i__69441_69504,vec__69453_69505,k_69506,v_69507){
return (function (p1__69437_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),p1__69437_SHARP_,rules);
});})(seq__69438_69501,chunk__69439_69502,count__69440_69503,i__69441_69504,vec__69453_69505,k_69506,v_69507))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.set_QMARK_(v_69507))?v_69507:cljs.core.PersistentHashSet.createAsIfByAssoc([v_69507]))], 0));
};
var G__69508 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__69509__i = 0, G__69509__a = new Array(arguments.length -  1);
while (G__69509__i < G__69509__a.length) {G__69509__a[G__69509__i] = arguments[G__69509__i + 1]; ++G__69509__i;}
  rules = new cljs.core.IndexedSeq(G__69509__a,0,null);
} 
return G__69508__delegate.call(this,_,rules);};
G__69508.cljs$lang$maxFixedArity = 1;
G__69508.cljs$lang$applyTo = (function (arglist__69510){
var _ = cljs.core.first(arglist__69510);
var rules = cljs.core.rest(arglist__69510);
return G__69508__delegate(_,rules);
});
G__69508.cljs$core$IFn$_invoke$arity$variadic = G__69508__delegate;
return G__69508;
})()
;})(seq__69438_69501,chunk__69439_69502,count__69440_69503,i__69441_69504,vec__69453_69505,k_69506,v_69507))
);


var G__69511 = seq__69438_69501;
var G__69512 = chunk__69439_69502;
var G__69513 = count__69440_69503;
var G__69514 = (i__69441_69504 + (1));
seq__69438_69501 = G__69511;
chunk__69439_69502 = G__69512;
count__69440_69503 = G__69513;
i__69441_69504 = G__69514;
continue;
} else {
var temp__5720__auto___69515 = cljs.core.seq(seq__69438_69501);
if(temp__5720__auto___69515){
var seq__69438_69516__$1 = temp__5720__auto___69515;
if(cljs.core.chunked_seq_QMARK_(seq__69438_69516__$1)){
var c__4556__auto___69517 = cljs.core.chunk_first(seq__69438_69516__$1);
var G__69518 = cljs.core.chunk_rest(seq__69438_69516__$1);
var G__69519 = c__4556__auto___69517;
var G__69520 = cljs.core.count(c__4556__auto___69517);
var G__69521 = (0);
seq__69438_69501 = G__69518;
chunk__69439_69502 = G__69519;
count__69440_69503 = G__69520;
i__69441_69504 = G__69521;
continue;
} else {
var vec__69456_69522 = cljs.core.first(seq__69438_69516__$1);
var k_69523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69456_69522,(0),null);
var v_69524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69456_69522,(1),null);
stylo.rule.rule.cljs$core$IMultiFn$_add_method$arity$3(null,k_69523,((function (seq__69438_69501,chunk__69439_69502,count__69440_69503,i__69441_69504,vec__69456_69522,k_69523,v_69524,seq__69438_69516__$1,temp__5720__auto___69515){
return (function() { 
var G__69528__delegate = function (_,rules){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (seq__69438_69501,chunk__69439_69502,count__69440_69503,i__69441_69504,vec__69456_69522,k_69523,v_69524,seq__69438_69516__$1,temp__5720__auto___69515){
return (function (p1__69437_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(stylo.rule.rule,new cljs.core.Keyword(null,"pseudo","pseudo",851696982),p1__69437_SHARP_,rules);
});})(seq__69438_69501,chunk__69439_69502,count__69440_69503,i__69441_69504,vec__69456_69522,k_69523,v_69524,seq__69438_69516__$1,temp__5720__auto___69515))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.set_QMARK_(v_69524))?v_69524:cljs.core.PersistentHashSet.createAsIfByAssoc([v_69524]))], 0));
};
var G__69528 = function (_,var_args){
var rules = null;
if (arguments.length > 1) {
var G__69530__i = 0, G__69530__a = new Array(arguments.length -  1);
while (G__69530__i < G__69530__a.length) {G__69530__a[G__69530__i] = arguments[G__69530__i + 1]; ++G__69530__i;}
  rules = new cljs.core.IndexedSeq(G__69530__a,0,null);
} 
return G__69528__delegate.call(this,_,rules);};
G__69528.cljs$lang$maxFixedArity = 1;
G__69528.cljs$lang$applyTo = (function (arglist__69531){
var _ = cljs.core.first(arglist__69531);
var rules = cljs.core.rest(arglist__69531);
return G__69528__delegate(_,rules);
});
G__69528.cljs$core$IFn$_invoke$arity$variadic = G__69528__delegate;
return G__69528;
})()
;})(seq__69438_69501,chunk__69439_69502,count__69440_69503,i__69441_69504,vec__69456_69522,k_69523,v_69524,seq__69438_69516__$1,temp__5720__auto___69515))
);


var G__69534 = cljs.core.next(seq__69438_69516__$1);
var G__69535 = null;
var G__69536 = (0);
var G__69537 = (0);
seq__69438_69501 = G__69534;
chunk__69439_69502 = G__69535;
count__69440_69503 = G__69536;
i__69441_69504 = G__69537;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=stylo.tailwind.variant.js.map
