goog.provide('re_com.tabs');
re_com.tabs.tabs_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of tabs | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"unique-id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"tab -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"CSS styles to add or override (aplies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"each individual tab"], null)," rather than the container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the outer container)"], null)], null)], null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63802 = arguments.length;
var i__4737__auto___63803 = (0);
while(true){
if((i__4737__auto___63803 < len__4736__auto___63802)){
args__4742__auto__.push((arguments[i__4737__auto___63803]));

var G__63806 = (i__4737__auto___63803 + (1));
i__4737__auto___63803 = G__63806;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__63585){
var map__63586 = p__63585;
var map__63586__$1 = (((((!((map__63586 == null))))?(((((map__63586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63586):map__63586);
var args = map__63586__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63586__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63586__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63586__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63586__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63586__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63586__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63586__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63586__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63577_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__63577_SHARP_) : id_fn.call(null,p1__63577_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__63577#] (= current (id-fn p1__63577#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs nav nav-tabs noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style("none")], null),attr], 0)),(function (){var iter__4529__auto__ = (function re_com$tabs$iter__63595(s__63596){
return (new cljs.core.LazySeq(null,(function (){
var s__63596__$1 = s__63596;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__63596__$1);
if(temp__5720__auto__){
var s__63596__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63596__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63596__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63598 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63597 = (0);
while(true){
if((i__63597 < size__4528__auto__)){
var t = cljs.core._nth(c__4527__auto__,i__63597);
cljs.core.chunk_append(b__63598,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__63597,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__63598,s__63596__$2,temp__5720__auto__,current,tabs__$1,_,map__63586,map__63586__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__63597,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__63598,s__63596__$2,temp__5720__auto__,current,tabs__$1,_,map__63586,map__63586__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
:null)], null),label], null)], null);
})());

var G__63839 = (i__63597 + (1));
i__63597 = G__63839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63598),re_com$tabs$iter__63595(cljs.core.chunk_rest(s__63596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63598),null);
}
} else {
var t = cljs.core.first(s__63596__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":null),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__63596__$2,temp__5720__auto__,current,tabs__$1,_,map__63586,map__63586__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__63596__$2,temp__5720__auto__,current,tabs__$1,_,map__63586,map__63586__$1,args,model,tabs,on_change,id_fn,label_fn,class$,style,attr))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__63595(cljs.core.rest(s__63596__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(tabs__$1);
})()], null);
}));

(re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq63579){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63579));
}));

re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63847 = arguments.length;
var i__4737__auto___63848 = (0);
while(true){
if((i__4737__auto___63848 < len__4736__auto___63847)){
args__4742__auto__.push((arguments[i__4737__auto___63848]));

var G__63849 = (i__4737__auto___63848 + (1));
i__4737__auto___63848 = G__63849;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__63616){
var map__63617 = p__63616;
var map__63617__$1 = (((((!((map__63617 == null))))?(((((map__63617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63617):map__63617);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63617__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63617__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63617__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63617__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63617__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63617__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63617__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63617__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63617__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63614_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__63614_SHARP_) : id_fn.call(null,p1__63614_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__63614#] (= current (id-fn p1__63614#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect btn-group",(cljs.core.truth_(vertical_QMARK_)?"-vertical":null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style("none")], null),attr], 0)),(function (){var iter__4529__auto__ = (function re_com$tabs$iter__63625(s__63626){
return (new cljs.core.LazySeq(null,(function (){
var s__63626__$1 = s__63626;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__63626__$1);
if(temp__5720__auto__){
var s__63626__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63626__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63626__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63628 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63627 = (0);
while(true){
if((i__63627 < size__4528__auto__)){
var t = cljs.core._nth(c__4527__auto__,i__63627);
cljs.core.chunk_append(b__63628,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",((selected_QMARK_)?"active":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__63627,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__63628,s__63626__$2,temp__5720__auto__,current,tabs__$1,_,map__63617,map__63617__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__63627,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__63628,s__63626__$2,temp__5720__auto__,current,tabs__$1,_,map__63617,map__63617__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null);
})());

var G__63854 = (i__63627 + (1));
i__63627 = G__63854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63628),re_com$tabs$iter__63625(cljs.core.chunk_rest(s__63626__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63628),null);
}
} else {
var t = cljs.core.first(s__63626__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),new cljs.core.Keyword(null,"class","class",-2030961996),["btn btn-default ",((selected_QMARK_)?"active":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__63626__$2,temp__5720__auto__,current,tabs__$1,_,map__63617,map__63617__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__63626__$2,temp__5720__auto__,current,tabs__$1,_,map__63617,map__63617__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null);
})(),re_com$tabs$iter__63625(cljs.core.rest(s__63626__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(tabs__$1);
})()], null);
}));

(re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq63615){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63615));
}));

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63855 = arguments.length;
var i__4737__auto___63856 = (0);
while(true){
if((i__4737__auto___63856 < len__4736__auto___63855)){
args__4742__auto__.push((arguments[i__4737__auto___63856]));

var G__63857 = (i__4737__auto___63856 + (1));
i__4737__auto___63856 = G__63857;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__63666){
var map__63668 = p__63666;
var map__63668__$1 = (((((!((map__63668 == null))))?(((((map__63668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63668):map__63668);
var args = map__63668__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63668__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63668__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63668__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63668__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63668__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63668__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63668__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63668__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], 0));
}));

(re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq63644){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63644));
}));

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63862 = arguments.length;
var i__4737__auto___63863 = (0);
while(true){
if((i__4737__auto___63863 < len__4736__auto___63862)){
args__4742__auto__.push((arguments[i__4737__auto___63863]));

var G__63867 = (i__4737__auto___63863 + (1));
i__4737__auto___63863 = G__63867;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__63679){
var map__63680 = p__63679;
var map__63680__$1 = (((((!((map__63680 == null))))?(((((map__63680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63680):map__63680);
var args = map__63680__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63680__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63680__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63680__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63680__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63680__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63680__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63680__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63680__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], 0));
}));

(re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq63676){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63676));
}));

re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63871 = arguments.length;
var i__4737__auto___63872 = (0);
while(true){
if((i__4737__auto___63872 < len__4736__auto___63871)){
args__4742__auto__.push((arguments[i__4737__auto___63872]));

var G__63876 = (i__4737__auto___63872 + (1));
i__4737__auto___63872 = G__63876;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__63691){
var map__63692 = p__63691;
var map__63692__$1 = (((((!((map__63692 == null))))?(((((map__63692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63692):map__63692);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63692__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63692__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63692__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63692__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63692__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63692__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63692__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63692__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63692__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444));
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__63686_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__63686_SHARP_) : id_fn.call(null,p1__63686_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__63686#] (= current (id-fn p1__63686#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-tabs noselect nav nav-pills",(cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),re_com.box.flex_child_style("none"),new cljs.core.Keyword(null,"role","role",-736691072),"tabslist"], null),attr], 0)),(function (){var iter__4529__auto__ = (function re_com$tabs$iter__63695(s__63696){
return (new cljs.core.LazySeq(null,(function (){
var s__63696__$1 = s__63696;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__63696__$1);
if(temp__5720__auto__){
var s__63696__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63696__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63696__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63698 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63697 = (0);
while(true){
if((i__63697 < size__4528__auto__)){
var t = cljs.core._nth(c__4527__auto__,i__63697);
cljs.core.chunk_append(b__63698,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (i__63697,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__63698,s__63696__$2,temp__5720__auto__,current,tabs__$1,_,map__63692,map__63692__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__63697,id,label,selected_QMARK_,t,c__4527__auto__,size__4528__auto__,b__63698,s__63696__$2,temp__5720__auto__,current,tabs__$1,_,map__63692,map__63692__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null)], null);
})());

var G__63882 = (i__63697 + (1));
i__63697 = G__63882;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63698),re_com$tabs$iter__63695(cljs.core.chunk_rest(s__63696__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63698),null);
}
} else {
var t = cljs.core.first(s__63696__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((selected_QMARK_)?"active":""),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),style], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__63696__$2,temp__5720__auto__,current,tabs__$1,_,map__63692,map__63692__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__63696__$2,temp__5720__auto__,current,tabs__$1,_,map__63692,map__63692__$1,on_change,model,attr,label_fn,tabs,id_fn,style,class$,vertical_QMARK_))
:null)], null),label], null)], null);
})(),re_com$tabs$iter__63695(cljs.core.rest(s__63696__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(tabs__$1);
})()], null);
}));

(re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq63690){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63690));
}));

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63916 = arguments.length;
var i__4737__auto___63917 = (0);
while(true){
if((i__4737__auto___63917 < len__4736__auto___63916)){
args__4742__auto__.push((arguments[i__4737__auto___63917]));

var G__63918 = (i__4737__auto___63917 + (1));
i__4737__auto___63917 = G__63918;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__63756){
var map__63758 = p__63756;
var map__63758__$1 = (((((!((map__63758 == null))))?(((((map__63758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63758):map__63758);
var args = map__63758__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63758__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63758__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63758__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63758__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63758__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63758__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63758__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63758__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], 0));
}));

(re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq63749){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63749));
}));

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63970 = arguments.length;
var i__4737__auto___63971 = (0);
while(true){
if((i__4737__auto___63971 < len__4736__auto___63970)){
args__4742__auto__.push((arguments[i__4737__auto___63971]));

var G__63977 = (i__4737__auto___63971 + (1));
i__4737__auto___63971 = G__63977;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__63779){
var map__63780 = p__63779;
var map__63780__$1 = (((((!((map__63780 == null))))?(((((map__63780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63780):map__63780);
var args = map__63780__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63780__$1,new cljs.core.Keyword(null,"model","model",331153215));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63780__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63780__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63780__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63780__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63780__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63780__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63780__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.tabs.tabs_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tabs"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro tabs-args-desc args \"tabs\")"));
}

return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"tabs","tabs",-779855354),tabs,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),label_fn,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], 0));
}));

(re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq63766){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63766));
}));


//# sourceMappingURL=re_com.tabs.js.map
