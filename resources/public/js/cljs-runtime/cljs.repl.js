goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__70435){
var map__70436 = p__70435;
var map__70436__$1 = (((((!((map__70436 == null))))?(((((map__70436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70436):map__70436);
var m = map__70436__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70436__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__70439_70650 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70440_70651 = null;
var count__70441_70652 = (0);
var i__70442_70653 = (0);
while(true){
if((i__70442_70653 < count__70441_70652)){
var f_70654 = chunk__70440_70651.cljs$core$IIndexed$_nth$arity$2(null,i__70442_70653);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_70654], 0));


var G__70655 = seq__70439_70650;
var G__70656 = chunk__70440_70651;
var G__70657 = count__70441_70652;
var G__70658 = (i__70442_70653 + (1));
seq__70439_70650 = G__70655;
chunk__70440_70651 = G__70656;
count__70441_70652 = G__70657;
i__70442_70653 = G__70658;
continue;
} else {
var temp__5720__auto___70659 = cljs.core.seq(seq__70439_70650);
if(temp__5720__auto___70659){
var seq__70439_70660__$1 = temp__5720__auto___70659;
if(cljs.core.chunked_seq_QMARK_(seq__70439_70660__$1)){
var c__4556__auto___70661 = cljs.core.chunk_first(seq__70439_70660__$1);
var G__70662 = cljs.core.chunk_rest(seq__70439_70660__$1);
var G__70663 = c__4556__auto___70661;
var G__70664 = cljs.core.count(c__4556__auto___70661);
var G__70665 = (0);
seq__70439_70650 = G__70662;
chunk__70440_70651 = G__70663;
count__70441_70652 = G__70664;
i__70442_70653 = G__70665;
continue;
} else {
var f_70666 = cljs.core.first(seq__70439_70660__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_70666], 0));


var G__70667 = cljs.core.next(seq__70439_70660__$1);
var G__70668 = null;
var G__70669 = (0);
var G__70670 = (0);
seq__70439_70650 = G__70667;
chunk__70440_70651 = G__70668;
count__70441_70652 = G__70669;
i__70442_70653 = G__70670;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_70671 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_70671], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_70671)))?cljs.core.second(arglists_70671):arglists_70671)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__70447_70673 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70448_70674 = null;
var count__70449_70675 = (0);
var i__70450_70676 = (0);
while(true){
if((i__70450_70676 < count__70449_70675)){
var vec__70462_70677 = chunk__70448_70674.cljs$core$IIndexed$_nth$arity$2(null,i__70450_70676);
var name_70678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70462_70677,(0),null);
var map__70465_70679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70462_70677,(1),null);
var map__70465_70680__$1 = (((((!((map__70465_70679 == null))))?(((((map__70465_70679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70465_70679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70465_70679):map__70465_70679);
var doc_70681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70465_70680__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70465_70680__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_70678], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_70682], 0));

if(cljs.core.truth_(doc_70681)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_70681], 0));
} else {
}


var G__70683 = seq__70447_70673;
var G__70684 = chunk__70448_70674;
var G__70685 = count__70449_70675;
var G__70686 = (i__70450_70676 + (1));
seq__70447_70673 = G__70683;
chunk__70448_70674 = G__70684;
count__70449_70675 = G__70685;
i__70450_70676 = G__70686;
continue;
} else {
var temp__5720__auto___70687 = cljs.core.seq(seq__70447_70673);
if(temp__5720__auto___70687){
var seq__70447_70688__$1 = temp__5720__auto___70687;
if(cljs.core.chunked_seq_QMARK_(seq__70447_70688__$1)){
var c__4556__auto___70689 = cljs.core.chunk_first(seq__70447_70688__$1);
var G__70690 = cljs.core.chunk_rest(seq__70447_70688__$1);
var G__70691 = c__4556__auto___70689;
var G__70692 = cljs.core.count(c__4556__auto___70689);
var G__70693 = (0);
seq__70447_70673 = G__70690;
chunk__70448_70674 = G__70691;
count__70449_70675 = G__70692;
i__70450_70676 = G__70693;
continue;
} else {
var vec__70467_70694 = cljs.core.first(seq__70447_70688__$1);
var name_70695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70467_70694,(0),null);
var map__70470_70696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70467_70694,(1),null);
var map__70470_70697__$1 = (((((!((map__70470_70696 == null))))?(((((map__70470_70696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70470_70696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70470_70696):map__70470_70696);
var doc_70698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70470_70697__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70470_70697__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_70695], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_70699], 0));

if(cljs.core.truth_(doc_70698)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_70698], 0));
} else {
}


var G__70700 = cljs.core.next(seq__70447_70688__$1);
var G__70701 = null;
var G__70702 = (0);
var G__70703 = (0);
seq__70447_70673 = G__70700;
chunk__70448_70674 = G__70701;
count__70449_70675 = G__70702;
i__70450_70676 = G__70703;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__70474 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__70475 = null;
var count__70476 = (0);
var i__70477 = (0);
while(true){
if((i__70477 < count__70476)){
var role = chunk__70475.cljs$core$IIndexed$_nth$arity$2(null,i__70477);
var temp__5720__auto___70704__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___70704__$1)){
var spec_70705 = temp__5720__auto___70704__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_70705)], 0));
} else {
}


var G__70706 = seq__70474;
var G__70707 = chunk__70475;
var G__70708 = count__70476;
var G__70709 = (i__70477 + (1));
seq__70474 = G__70706;
chunk__70475 = G__70707;
count__70476 = G__70708;
i__70477 = G__70709;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__70474);
if(temp__5720__auto____$1){
var seq__70474__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__70474__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__70474__$1);
var G__70710 = cljs.core.chunk_rest(seq__70474__$1);
var G__70711 = c__4556__auto__;
var G__70712 = cljs.core.count(c__4556__auto__);
var G__70713 = (0);
seq__70474 = G__70710;
chunk__70475 = G__70711;
count__70476 = G__70712;
i__70477 = G__70713;
continue;
} else {
var role = cljs.core.first(seq__70474__$1);
var temp__5720__auto___70714__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___70714__$2)){
var spec_70715 = temp__5720__auto___70714__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_70715)], 0));
} else {
}


var G__70716 = cljs.core.next(seq__70474__$1);
var G__70717 = null;
var G__70718 = (0);
var G__70719 = (0);
seq__70474 = G__70716;
chunk__70475 = G__70717;
count__70476 = G__70718;
i__70477 = G__70719;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__70724 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__70725 = cljs.core.ex_cause(t);
via = G__70724;
t = G__70725;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__70491 = datafied_throwable;
var map__70491__$1 = (((((!((map__70491 == null))))?(((((map__70491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70491):map__70491);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70491__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70491__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70491__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__70492 = cljs.core.last(via);
var map__70492__$1 = (((((!((map__70492 == null))))?(((((map__70492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70492):map__70492);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70492__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70492__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70492__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__70493 = data;
var map__70493__$1 = (((((!((map__70493 == null))))?(((((map__70493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70493):map__70493);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70493__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70493__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70493__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__70494 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__70494__$1 = (((((!((map__70494 == null))))?(((((map__70494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70494):map__70494);
var top_data = map__70494__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70494__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__70515 = phase;
var G__70515__$1 = (((G__70515 instanceof cljs.core.Keyword))?G__70515.fqn:null);
switch (G__70515__$1) {
case "read-source":
var map__70516 = data;
var map__70516__$1 = (((((!((map__70516 == null))))?(((((map__70516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70516):map__70516);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70516__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70516__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__70518 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__70518__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70518,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__70518);
var G__70518__$2 = (cljs.core.truth_((function (){var fexpr__70524 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70524.cljs$core$IFn$_invoke$arity$1 ? fexpr__70524.cljs$core$IFn$_invoke$arity$1(source) : fexpr__70524.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70518__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__70518__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70518__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__70518__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__70531 = top_data;
var G__70531__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70531,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__70531);
var G__70531__$2 = (cljs.core.truth_((function (){var fexpr__70535 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70535.cljs$core$IFn$_invoke$arity$1 ? fexpr__70535.cljs$core$IFn$_invoke$arity$1(source) : fexpr__70535.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__70531__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__70531__$1);
var G__70531__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70531__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__70531__$2);
var G__70531__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70531__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__70531__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70531__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__70531__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__70540 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70540,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70540,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70540,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70540,(3),null);
var G__70548 = top_data;
var G__70548__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70548,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__70548);
var G__70548__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__70548__$1);
var G__70548__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70548__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__70548__$2);
var G__70548__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70548__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__70548__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70548__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__70548__$4;
}

break;
case "execution":
var vec__70564 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70564,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70564,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70564,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70564,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__70482_SHARP_){
var or__4126__auto__ = (p1__70482_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__70572 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__70572.cljs$core$IFn$_invoke$arity$1 ? fexpr__70572.cljs$core$IFn$_invoke$arity$1(p1__70482_SHARP_) : fexpr__70572.call(null,p1__70482_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__70576 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__70576__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70576,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__70576);
var G__70576__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70576__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__70576__$1);
var G__70576__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70576__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__70576__$2);
var G__70576__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70576__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__70576__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__70576__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__70576__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70515__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__70601){
var map__70602 = p__70601;
var map__70602__$1 = (((((!((map__70602 == null))))?(((((map__70602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70602):map__70602);
var triage_data = map__70602__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70602__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70602__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70602__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70602__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70602__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70602__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70602__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70602__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__70608 = phase;
var G__70608__$1 = (((G__70608 instanceof cljs.core.Keyword))?G__70608.fqn:null);
switch (G__70608__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__70610 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__70611 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70612 = loc;
var G__70613 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70614_70733 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70615_70734 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70616_70735 = true;
var _STAR_print_fn_STAR__temp_val__70617_70736 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70616_70735);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70617_70736);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70595_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70595_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70615_70734);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70614_70733);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__70610,G__70611,G__70612,G__70613) : format.call(null,G__70610,G__70611,G__70612,G__70613));

break;
case "macroexpansion":
var G__70619 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__70620 = cause_type;
var G__70621 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70622 = loc;
var G__70623 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70619,G__70620,G__70621,G__70622,G__70623) : format.call(null,G__70619,G__70620,G__70621,G__70622,G__70623));

break;
case "compile-syntax-check":
var G__70624 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__70625 = cause_type;
var G__70626 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70627 = loc;
var G__70628 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70624,G__70625,G__70626,G__70627,G__70628) : format.call(null,G__70624,G__70625,G__70626,G__70627,G__70628));

break;
case "compilation":
var G__70629 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__70630 = cause_type;
var G__70631 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70632 = loc;
var G__70633 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70629,G__70630,G__70631,G__70632,G__70633) : format.call(null,G__70629,G__70630,G__70631,G__70632,G__70633));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__70634 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__70635 = symbol;
var G__70636 = loc;
var G__70637 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70638_70738 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70639_70739 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70640_70740 = true;
var _STAR_print_fn_STAR__temp_val__70641_70741 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70640_70740);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70641_70741);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70600_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__70600_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70639_70739);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70638_70738);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__70634,G__70635,G__70636,G__70637) : format.call(null,G__70634,G__70635,G__70636,G__70637));
} else {
var G__70643 = "Execution error%s at %s(%s).\n%s\n";
var G__70644 = cause_type;
var G__70645 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__70646 = loc;
var G__70647 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__70643,G__70644,G__70645,G__70646,G__70647) : format.call(null,G__70643,G__70644,G__70645,G__70646,G__70647));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70608__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
