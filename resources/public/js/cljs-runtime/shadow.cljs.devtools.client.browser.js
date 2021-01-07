goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___68923 = arguments.length;
var i__4737__auto___68924 = (0);
while(true){
if((i__4737__auto___68924 < len__4736__auto___68923)){
args__4742__auto__.push((arguments[i__4737__auto___68924]));

var G__68925 = (i__4737__auto___68924 + (1));
i__4737__auto___68924 = G__68925;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq68636){
var G__68638 = cljs.core.first(seq68636);
var seq68636__$1 = cljs.core.next(seq68636);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68638,seq68636__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__68640 = cljs.core.seq(sources);
var chunk__68641 = null;
var count__68642 = (0);
var i__68643 = (0);
while(true){
if((i__68643 < count__68642)){
var map__68654 = chunk__68641.cljs$core$IIndexed$_nth$arity$2(null,i__68643);
var map__68654__$1 = (((((!((map__68654 == null))))?(((((map__68654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68654):map__68654);
var src = map__68654__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68654__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68654__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68654__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68654__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e68660){var e_68932 = e68660;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_68932);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_68932.message)].join('')));
}

var G__68933 = seq__68640;
var G__68934 = chunk__68641;
var G__68935 = count__68642;
var G__68936 = (i__68643 + (1));
seq__68640 = G__68933;
chunk__68641 = G__68934;
count__68642 = G__68935;
i__68643 = G__68936;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__68640);
if(temp__5720__auto__){
var seq__68640__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68640__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__68640__$1);
var G__68937 = cljs.core.chunk_rest(seq__68640__$1);
var G__68938 = c__4556__auto__;
var G__68939 = cljs.core.count(c__4556__auto__);
var G__68940 = (0);
seq__68640 = G__68937;
chunk__68641 = G__68938;
count__68642 = G__68939;
i__68643 = G__68940;
continue;
} else {
var map__68662 = cljs.core.first(seq__68640__$1);
var map__68662__$1 = (((((!((map__68662 == null))))?(((((map__68662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68662):map__68662);
var src = map__68662__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68662__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68662__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68662__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68662__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e68666){var e_68941 = e68666;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_68941);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_68941.message)].join('')));
}

var G__68942 = cljs.core.next(seq__68640__$1);
var G__68943 = null;
var G__68944 = (0);
var G__68945 = (0);
seq__68640 = G__68942;
chunk__68641 = G__68943;
count__68642 = G__68944;
i__68643 = G__68945;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__68677 = cljs.core.seq(js_requires);
var chunk__68678 = null;
var count__68679 = (0);
var i__68680 = (0);
while(true){
if((i__68680 < count__68679)){
var js_ns = chunk__68678.cljs$core$IIndexed$_nth$arity$2(null,i__68680);
var require_str_68946 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_68946);


var G__68947 = seq__68677;
var G__68948 = chunk__68678;
var G__68949 = count__68679;
var G__68950 = (i__68680 + (1));
seq__68677 = G__68947;
chunk__68678 = G__68948;
count__68679 = G__68949;
i__68680 = G__68950;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__68677);
if(temp__5720__auto__){
var seq__68677__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68677__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__68677__$1);
var G__68951 = cljs.core.chunk_rest(seq__68677__$1);
var G__68952 = c__4556__auto__;
var G__68953 = cljs.core.count(c__4556__auto__);
var G__68954 = (0);
seq__68677 = G__68951;
chunk__68678 = G__68952;
count__68679 = G__68953;
i__68680 = G__68954;
continue;
} else {
var js_ns = cljs.core.first(seq__68677__$1);
var require_str_68955 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_68955);


var G__68956 = cljs.core.next(seq__68677__$1);
var G__68957 = null;
var G__68958 = (0);
var G__68959 = (0);
seq__68677 = G__68956;
chunk__68678 = G__68957;
count__68679 = G__68958;
i__68680 = G__68959;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__68694){
var map__68696 = p__68694;
var map__68696__$1 = (((((!((map__68696 == null))))?(((((map__68696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68696):map__68696);
var msg = map__68696__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68696__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68696__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68701(s__68702){
return (new cljs.core.LazySeq(null,(function (){
var s__68702__$1 = s__68702;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__68702__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__68709 = cljs.core.first(xs__6277__auto__);
var map__68709__$1 = (((((!((map__68709 == null))))?(((((map__68709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68709):map__68709);
var src = map__68709__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68709__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68709__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__68702__$1,map__68709,map__68709__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__68696,map__68696__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68701_$_iter__68703(s__68704){
return (new cljs.core.LazySeq(null,((function (s__68702__$1,map__68709,map__68709__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__68696,map__68696__$1,msg,info,reload_info){
return (function (){
var s__68704__$1 = s__68704;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__68704__$1);
if(temp__5720__auto____$1){
var s__68704__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68704__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__68704__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__68706 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__68705 = (0);
while(true){
if((i__68705 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__68705);
cljs.core.chunk_append(b__68706,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__68962 = (i__68705 + (1));
i__68705 = G__68962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68706),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68701_$_iter__68703(cljs.core.chunk_rest(s__68704__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68706),null);
}
} else {
var warning = cljs.core.first(s__68704__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68701_$_iter__68703(cljs.core.rest(s__68704__$2)));
}
} else {
return null;
}
break;
}
});})(s__68702__$1,map__68709,map__68709__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__68696,map__68696__$1,msg,info,reload_info))
,null,null));
});})(s__68702__$1,map__68709,map__68709__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__68696,map__68696__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68701(cljs.core.rest(s__68702__$1)));
} else {
var G__68963 = cljs.core.rest(s__68702__$1);
s__68702__$1 = G__68963;
continue;
}
} else {
var G__68964 = cljs.core.rest(s__68702__$1);
s__68702__$1 = G__68964;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__68719_68965 = cljs.core.seq(warnings);
var chunk__68720_68966 = null;
var count__68721_68967 = (0);
var i__68722_68968 = (0);
while(true){
if((i__68722_68968 < count__68721_68967)){
var map__68731_68969 = chunk__68720_68966.cljs$core$IIndexed$_nth$arity$2(null,i__68722_68968);
var map__68731_68970__$1 = (((((!((map__68731_68969 == null))))?(((((map__68731_68969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68731_68969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68731_68969):map__68731_68969);
var w_68971 = map__68731_68970__$1;
var msg_68972__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68731_68970__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_68973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68731_68970__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68731_68970__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_68975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68731_68970__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_68975)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68973),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68974),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_68972__$1)].join(''));


var G__68976 = seq__68719_68965;
var G__68977 = chunk__68720_68966;
var G__68978 = count__68721_68967;
var G__68979 = (i__68722_68968 + (1));
seq__68719_68965 = G__68976;
chunk__68720_68966 = G__68977;
count__68721_68967 = G__68978;
i__68722_68968 = G__68979;
continue;
} else {
var temp__5720__auto___68980 = cljs.core.seq(seq__68719_68965);
if(temp__5720__auto___68980){
var seq__68719_68981__$1 = temp__5720__auto___68980;
if(cljs.core.chunked_seq_QMARK_(seq__68719_68981__$1)){
var c__4556__auto___68982 = cljs.core.chunk_first(seq__68719_68981__$1);
var G__68983 = cljs.core.chunk_rest(seq__68719_68981__$1);
var G__68984 = c__4556__auto___68982;
var G__68985 = cljs.core.count(c__4556__auto___68982);
var G__68986 = (0);
seq__68719_68965 = G__68983;
chunk__68720_68966 = G__68984;
count__68721_68967 = G__68985;
i__68722_68968 = G__68986;
continue;
} else {
var map__68734_68989 = cljs.core.first(seq__68719_68981__$1);
var map__68734_68990__$1 = (((((!((map__68734_68989 == null))))?(((((map__68734_68989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68734_68989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68734_68989):map__68734_68989);
var w_68991 = map__68734_68990__$1;
var msg_68992__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68734_68990__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_68993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68734_68990__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68734_68990__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_68995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68734_68990__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_68995)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68993),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68994),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_68992__$1)].join(''));


var G__68996 = cljs.core.next(seq__68719_68981__$1);
var G__68997 = null;
var G__68998 = (0);
var G__68999 = (0);
seq__68719_68965 = G__68996;
chunk__68720_68966 = G__68997;
count__68721_68967 = G__68998;
i__68722_68968 = G__68999;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__68693_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__68693_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__68744){
var map__68745 = p__68744;
var map__68745__$1 = (((((!((map__68745 == null))))?(((((map__68745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68745):map__68745);
var msg = map__68745__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68745__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__68748 = cljs.core.seq(updates);
var chunk__68750 = null;
var count__68751 = (0);
var i__68752 = (0);
while(true){
if((i__68752 < count__68751)){
var path = chunk__68750.cljs$core$IIndexed$_nth$arity$2(null,i__68752);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__68818_69007 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__68821_69008 = null;
var count__68822_69009 = (0);
var i__68823_69010 = (0);
while(true){
if((i__68823_69010 < count__68822_69009)){
var node_69012 = chunk__68821_69008.cljs$core$IIndexed$_nth$arity$2(null,i__68823_69010);
var path_match_69013 = shadow.cljs.devtools.client.browser.match_paths(node_69012.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69013)){
var new_link_69016 = (function (){var G__68845 = node_69012.cloneNode(true);
G__68845.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69013),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68845;
})();
(new_link_69016.onload = ((function (seq__68818_69007,chunk__68821_69008,count__68822_69009,i__68823_69010,seq__68748,chunk__68750,count__68751,i__68752,new_link_69016,path_match_69013,node_69012,path,map__68745,map__68745__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_69012);
});})(seq__68818_69007,chunk__68821_69008,count__68822_69009,i__68823_69010,seq__68748,chunk__68750,count__68751,i__68752,new_link_69016,path_match_69013,node_69012,path,map__68745,map__68745__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69013], 0));

goog.dom.insertSiblingAfter(new_link_69016,node_69012);


var G__69017 = seq__68818_69007;
var G__69018 = chunk__68821_69008;
var G__69019 = count__68822_69009;
var G__69020 = (i__68823_69010 + (1));
seq__68818_69007 = G__69017;
chunk__68821_69008 = G__69018;
count__68822_69009 = G__69019;
i__68823_69010 = G__69020;
continue;
} else {
var G__69021 = seq__68818_69007;
var G__69022 = chunk__68821_69008;
var G__69023 = count__68822_69009;
var G__69024 = (i__68823_69010 + (1));
seq__68818_69007 = G__69021;
chunk__68821_69008 = G__69022;
count__68822_69009 = G__69023;
i__68823_69010 = G__69024;
continue;
}
} else {
var temp__5720__auto___69025 = cljs.core.seq(seq__68818_69007);
if(temp__5720__auto___69025){
var seq__68818_69026__$1 = temp__5720__auto___69025;
if(cljs.core.chunked_seq_QMARK_(seq__68818_69026__$1)){
var c__4556__auto___69027 = cljs.core.chunk_first(seq__68818_69026__$1);
var G__69028 = cljs.core.chunk_rest(seq__68818_69026__$1);
var G__69029 = c__4556__auto___69027;
var G__69030 = cljs.core.count(c__4556__auto___69027);
var G__69031 = (0);
seq__68818_69007 = G__69028;
chunk__68821_69008 = G__69029;
count__68822_69009 = G__69030;
i__68823_69010 = G__69031;
continue;
} else {
var node_69032 = cljs.core.first(seq__68818_69026__$1);
var path_match_69033 = shadow.cljs.devtools.client.browser.match_paths(node_69032.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69033)){
var new_link_69034 = (function (){var G__68847 = node_69032.cloneNode(true);
G__68847.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69033),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68847;
})();
(new_link_69034.onload = ((function (seq__68818_69007,chunk__68821_69008,count__68822_69009,i__68823_69010,seq__68748,chunk__68750,count__68751,i__68752,new_link_69034,path_match_69033,node_69032,seq__68818_69026__$1,temp__5720__auto___69025,path,map__68745,map__68745__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_69032);
});})(seq__68818_69007,chunk__68821_69008,count__68822_69009,i__68823_69010,seq__68748,chunk__68750,count__68751,i__68752,new_link_69034,path_match_69033,node_69032,seq__68818_69026__$1,temp__5720__auto___69025,path,map__68745,map__68745__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69033], 0));

goog.dom.insertSiblingAfter(new_link_69034,node_69032);


var G__69039 = cljs.core.next(seq__68818_69026__$1);
var G__69040 = null;
var G__69041 = (0);
var G__69042 = (0);
seq__68818_69007 = G__69039;
chunk__68821_69008 = G__69040;
count__68822_69009 = G__69041;
i__68823_69010 = G__69042;
continue;
} else {
var G__69043 = cljs.core.next(seq__68818_69026__$1);
var G__69044 = null;
var G__69045 = (0);
var G__69046 = (0);
seq__68818_69007 = G__69043;
chunk__68821_69008 = G__69044;
count__68822_69009 = G__69045;
i__68823_69010 = G__69046;
continue;
}
}
} else {
}
}
break;
}


var G__69049 = seq__68748;
var G__69050 = chunk__68750;
var G__69051 = count__68751;
var G__69052 = (i__68752 + (1));
seq__68748 = G__69049;
chunk__68750 = G__69050;
count__68751 = G__69051;
i__68752 = G__69052;
continue;
} else {
var G__69059 = seq__68748;
var G__69060 = chunk__68750;
var G__69061 = count__68751;
var G__69062 = (i__68752 + (1));
seq__68748 = G__69059;
chunk__68750 = G__69060;
count__68751 = G__69061;
i__68752 = G__69062;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__68748);
if(temp__5720__auto__){
var seq__68748__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68748__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__68748__$1);
var G__69063 = cljs.core.chunk_rest(seq__68748__$1);
var G__69064 = c__4556__auto__;
var G__69065 = cljs.core.count(c__4556__auto__);
var G__69066 = (0);
seq__68748 = G__69063;
chunk__68750 = G__69064;
count__68751 = G__69065;
i__68752 = G__69066;
continue;
} else {
var path = cljs.core.first(seq__68748__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__68851_69067 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__68854_69068 = null;
var count__68855_69069 = (0);
var i__68856_69070 = (0);
while(true){
if((i__68856_69070 < count__68855_69069)){
var node_69071 = chunk__68854_69068.cljs$core$IIndexed$_nth$arity$2(null,i__68856_69070);
var path_match_69072 = shadow.cljs.devtools.client.browser.match_paths(node_69071.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69072)){
var new_link_69073 = (function (){var G__68865 = node_69071.cloneNode(true);
G__68865.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69072),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68865;
})();
(new_link_69073.onload = ((function (seq__68851_69067,chunk__68854_69068,count__68855_69069,i__68856_69070,seq__68748,chunk__68750,count__68751,i__68752,new_link_69073,path_match_69072,node_69071,path,seq__68748__$1,temp__5720__auto__,map__68745,map__68745__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_69071);
});})(seq__68851_69067,chunk__68854_69068,count__68855_69069,i__68856_69070,seq__68748,chunk__68750,count__68751,i__68752,new_link_69073,path_match_69072,node_69071,path,seq__68748__$1,temp__5720__auto__,map__68745,map__68745__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69072], 0));

goog.dom.insertSiblingAfter(new_link_69073,node_69071);


var G__69075 = seq__68851_69067;
var G__69076 = chunk__68854_69068;
var G__69077 = count__68855_69069;
var G__69078 = (i__68856_69070 + (1));
seq__68851_69067 = G__69075;
chunk__68854_69068 = G__69076;
count__68855_69069 = G__69077;
i__68856_69070 = G__69078;
continue;
} else {
var G__69080 = seq__68851_69067;
var G__69081 = chunk__68854_69068;
var G__69082 = count__68855_69069;
var G__69083 = (i__68856_69070 + (1));
seq__68851_69067 = G__69080;
chunk__68854_69068 = G__69081;
count__68855_69069 = G__69082;
i__68856_69070 = G__69083;
continue;
}
} else {
var temp__5720__auto___69085__$1 = cljs.core.seq(seq__68851_69067);
if(temp__5720__auto___69085__$1){
var seq__68851_69086__$1 = temp__5720__auto___69085__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68851_69086__$1)){
var c__4556__auto___69087 = cljs.core.chunk_first(seq__68851_69086__$1);
var G__69088 = cljs.core.chunk_rest(seq__68851_69086__$1);
var G__69089 = c__4556__auto___69087;
var G__69090 = cljs.core.count(c__4556__auto___69087);
var G__69091 = (0);
seq__68851_69067 = G__69088;
chunk__68854_69068 = G__69089;
count__68855_69069 = G__69090;
i__68856_69070 = G__69091;
continue;
} else {
var node_69094 = cljs.core.first(seq__68851_69086__$1);
var path_match_69095 = shadow.cljs.devtools.client.browser.match_paths(node_69094.getAttribute("href"),path);
if(cljs.core.truth_(path_match_69095)){
var new_link_69096 = (function (){var G__68866 = node_69094.cloneNode(true);
G__68866.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_69095),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68866;
})();
(new_link_69096.onload = ((function (seq__68851_69067,chunk__68854_69068,count__68855_69069,i__68856_69070,seq__68748,chunk__68750,count__68751,i__68752,new_link_69096,path_match_69095,node_69094,seq__68851_69086__$1,temp__5720__auto___69085__$1,path,seq__68748__$1,temp__5720__auto__,map__68745,map__68745__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_69094);
});})(seq__68851_69067,chunk__68854_69068,count__68855_69069,i__68856_69070,seq__68748,chunk__68750,count__68751,i__68752,new_link_69096,path_match_69095,node_69094,seq__68851_69086__$1,temp__5720__auto___69085__$1,path,seq__68748__$1,temp__5720__auto__,map__68745,map__68745__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_69095], 0));

goog.dom.insertSiblingAfter(new_link_69096,node_69094);


var G__69098 = cljs.core.next(seq__68851_69086__$1);
var G__69099 = null;
var G__69100 = (0);
var G__69101 = (0);
seq__68851_69067 = G__69098;
chunk__68854_69068 = G__69099;
count__68855_69069 = G__69100;
i__68856_69070 = G__69101;
continue;
} else {
var G__69102 = cljs.core.next(seq__68851_69086__$1);
var G__69103 = null;
var G__69104 = (0);
var G__69105 = (0);
seq__68851_69067 = G__69102;
chunk__68854_69068 = G__69103;
count__68855_69069 = G__69104;
i__68856_69070 = G__69105;
continue;
}
}
} else {
}
}
break;
}


var G__69106 = cljs.core.next(seq__68748__$1);
var G__69107 = null;
var G__69108 = (0);
var G__69109 = (0);
seq__68748 = G__69106;
chunk__68750 = G__69107;
count__68751 = G__69108;
i__68752 = G__69109;
continue;
} else {
var G__69110 = cljs.core.next(seq__68748__$1);
var G__69111 = null;
var G__69112 = (0);
var G__69113 = (0);
seq__68748 = G__69110;
chunk__68750 = G__69111;
count__68751 = G__69112;
i__68752 = G__69113;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__68872){
var map__68874 = p__68872;
var map__68874__$1 = (((((!((map__68874 == null))))?(((((map__68874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68874):map__68874);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68874__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__68877){
var map__68878 = p__68877;
var map__68878__$1 = (((((!((map__68878 == null))))?(((((map__68878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68878):map__68878);
var _ = map__68878__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68878__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__68880,done,error){
var map__68881 = p__68880;
var map__68881__$1 = (((((!((map__68881 == null))))?(((((map__68881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68881):map__68881);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68881__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__68888,done,error){
var map__68889 = p__68888;
var map__68889__$1 = (((((!((map__68889 == null))))?(((((map__68889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68889):map__68889);
var msg = map__68889__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68889__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68889__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68889__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__68892){
var map__68893 = p__68892;
var map__68893__$1 = (((((!((map__68893 == null))))?(((((map__68893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68893):map__68893);
var src = map__68893__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68893__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__68896 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__68896) : done.call(null,G__68896));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__68897){
var map__68898 = p__68897;
var map__68898__$1 = (((((!((map__68898 == null))))?(((((map__68898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68898):map__68898);
var msg__$1 = map__68898__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68898__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e68900){var ex = e68900;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__68903){
var map__68904 = p__68903;
var map__68904__$1 = (((((!((map__68904 == null))))?(((((map__68904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68904):map__68904);
var env = map__68904__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68904__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__68908){
var map__68909 = p__68908;
var map__68909__$1 = (((((!((map__68909 == null))))?(((((map__68909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68909):map__68909);
var msg = map__68909__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68909__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__68915){
var map__68916 = p__68915;
var map__68916__$1 = (((((!((map__68916 == null))))?(((((map__68916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68916):map__68916);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68916__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68916__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__68918){
var map__68919 = p__68918;
var map__68919__$1 = (((((!((map__68919 == null))))?(((((map__68919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68919):map__68919);
var svc = map__68919__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68919__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
