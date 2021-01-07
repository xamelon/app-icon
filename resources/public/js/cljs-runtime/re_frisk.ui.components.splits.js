goog.provide('re_frisk.ui.components.splits');
/**
 * Return a drag handle to go into a vertical or horizontal splitter bar:
 *  orientation: Can be :horizonal or :vertical
 *  over?:       When true, the mouse is assumed to be over the splitter so show a bolder color
 */
re_frisk.ui.components.splits.drag_handle = (function re_frisk$ui$components$splits$drag_handle(orientation,over_QMARK_){
var vertical_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"vertical","vertical",718696748));
var length = "20px";
var width = "8px";
var pos1 = "3px";
var pos2 = "3px";
var color = (cljs.core.truth_(over_QMARK_)?"#999":"#ccc");
var border = ["solid 1px ",color].join('');
var flex_flow = [((vertical_QMARK_)?"row":"column")," nowrap"].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"display-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_flow_style(flex_flow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((vertical_QMARK_)?width:length),new cljs.core.Keyword(null,"height","height",1025178622),((vertical_QMARK_)?length:width),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),pos1,new cljs.core.Keyword(null,"height","height",1025178622),length,new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"height","height",1025178622),pos1,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),pos2,new cljs.core.Keyword(null,"height","height",1025178622),length,new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"height","height",1025178622),pos2,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null))], null)], null)], null);
});
/**
 * Returns markup for a horizontal layout component
 */
re_frisk.ui.components.splits.h_split = (function re_frisk$ui$components$splits$h_split(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65714 = arguments.length;
var i__4737__auto___65715 = (0);
while(true){
if((i__4737__auto___65715 < len__4736__auto___65714)){
args__4742__auto__.push((arguments[i__4737__auto___65715]));

var G__65716 = (i__4737__auto___65715 + (1));
i__4737__auto___65715 = G__65716;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_frisk.ui.components.splits.h_split.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_frisk.ui.components.splits.h_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__65650){
var map__65651 = p__65650;
var map__65651__$1 = (((((!((map__65651 == null))))?(((((map__65651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65651):map__65651);
var args = map__65651__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65651__$1,new cljs.core.Keyword(null,"size","size",1098693007),"auto");
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65651__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65651__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65651__$1,new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917));
var initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65651__$1,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(50));
var splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65651__$1,new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"8px");
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65651__$1,new cljs.core.Keyword(null,"margin","margin",-995903681),"8px");
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65651__$1,new cljs.core.Keyword(null,"document","document",-1329188687),document);
var container_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("h-split-");
var split_perc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var stop_drag = (function (){
if(cljs.core.truth_(on_split_change)){
var G__65654_65721 = cljs.core.deref(split_perc);
(on_split_change.cljs$core$IFn$_invoke$arity$1 ? on_split_change.cljs$core$IFn$_invoke$arity$1(G__65654_65721) : on_split_change.call(null,G__65654_65721));
} else {
}

return cljs.core.reset_BANG_(dragging_QMARK_,false);
});
var calc_perc = (function (mouse_x){
var container = document.getElementById(container_id);
var offsets = re_com.util.sum_scroll_offsets(container);
var c_width = container.clientWidth;
var c_left_x = container.offsetLeft;
var relative_x = ((mouse_x - c_left_x) + new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(offsets));
return (100.0 * (relative_x / c_width));
});
var mousemove = (function (event){
return cljs.core.reset_BANG_(split_perc,calc_perc(event.clientX));
});
var mousedown = (function (event){
event.preventDefault();

return cljs.core.reset_BANG_(dragging_QMARK_,true);
});
var mouseover_split = (function (){
return cljs.core.reset_BANG_(over_QMARK_,true);
});
var mouseout_split = (function (){
return cljs.core.reset_BANG_(over_QMARK_,false);
});
var make_container_attrs = (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-h-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),container_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style(size),re_com.box.flex_flow_style("row nowrap"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),style], 0))], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (event){
stop_drag();

return null;
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (event){
stop_drag();

return null;
}),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (event){
mousemove(event);

return null;
})], null):null),attr], 0));
});
var make_panel_attrs = (function (class$,in_drag_QMARK_,percentage){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style([cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null)], 0))], null);
});
var make_splitter_attrs = (function (class$){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
mousedown(event);

return null;
}),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
mouseover_split();

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
mouseout_split();

return null;
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style(["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"col-resize"], null),(cljs.core.truth_(cljs.core.deref(over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f8f8f8"], null):null)], 0))], null);
});
return (function() { 
var G__65723__delegate = function (p__65663){
var map__65665 = p__65663;
var map__65665__$1 = (((((!((map__65665 == null))))?(((((map__65665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65665):map__65665);
var _splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65665__$1,new cljs.core.Keyword(null,"_splitter-size","_splitter-size",-2092162822));
var panel_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65665__$1,new cljs.core.Keyword(null,"panel-2","panel-2",244198907));
var panel_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65665__$1,new cljs.core.Keyword(null,"panel-1","panel-1",998274139));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65665__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65665__$1,new cljs.core.Keyword(null,"_margin","_margin",1508241828));
var _on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65665__$1,new cljs.core.Keyword(null,"_on-split-change","_on-split-change",1230437286));
var _width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65665__$1,new cljs.core.Keyword(null,"_width","_width",-75982426));
var _size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65665__$1,new cljs.core.Keyword(null,"_size","_size",-746489012));
var _height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65665__$1,new cljs.core.Keyword(null,"_height","_height",133867120));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65665__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65665__$1,new cljs.core.Keyword(null,"_initial-split","_initial-split",2145793073));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65665__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_container_attrs(class$,style,attr,cljs.core.deref(dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs("rc-h-split-top",cljs.core.deref(dragging_QMARK_),cljs.core.deref(split_perc)),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_splitter_attrs("rc-h-split-splitter"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.splits.drag_handle,new cljs.core.Keyword(null,"vertical","vertical",718696748),cljs.core.deref(over_QMARK_)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs("rc-h-split-bottom",cljs.core.deref(dragging_QMARK_),((100) - cljs.core.deref(split_perc))),panel_2], null)], null);
};
var G__65723 = function (var_args){
var p__65663 = null;
if (arguments.length > 0) {
var G__65725__i = 0, G__65725__a = new Array(arguments.length -  0);
while (G__65725__i < G__65725__a.length) {G__65725__a[G__65725__i] = arguments[G__65725__i + 0]; ++G__65725__i;}
  p__65663 = new cljs.core.IndexedSeq(G__65725__a,0,null);
} 
return G__65723__delegate.call(this,p__65663);};
G__65723.cljs$lang$maxFixedArity = 0;
G__65723.cljs$lang$applyTo = (function (arglist__65726){
var p__65663 = cljs.core.seq(arglist__65726);
return G__65723__delegate(p__65663);
});
G__65723.cljs$core$IFn$_invoke$arity$variadic = G__65723__delegate;
return G__65723;
})()
;
}));

(re_frisk.ui.components.splits.h_split.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk.ui.components.splits.h_split.cljs$lang$applyTo = (function (seq65646){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65646));
}));

/**
 * Returns markup for a vertical layout component
 */
re_frisk.ui.components.splits.v_split = (function re_frisk$ui$components$splits$v_split(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65727 = arguments.length;
var i__4737__auto___65728 = (0);
while(true){
if((i__4737__auto___65728 < len__4736__auto___65727)){
args__4742__auto__.push((arguments[i__4737__auto___65728]));

var G__65729 = (i__4737__auto___65728 + (1));
i__4737__auto___65728 = G__65729;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_frisk.ui.components.splits.v_split.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_frisk.ui.components.splits.v_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__65679){
var map__65680 = p__65679;
var map__65680__$1 = (((((!((map__65680 == null))))?(((((map__65680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65680):map__65680);
var args = map__65680__$1;
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65680__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65680__$1,new cljs.core.Keyword(null,"margin","margin",-995903681),"8px");
var initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65680__$1,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(50));
var splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65680__$1,new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"8px");
var on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65680__$1,new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917));
var open_bottom_split_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65680__$1,new cljs.core.Keyword(null,"open-bottom-split?","open-bottom-split?",953160965));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65680__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65680__$1,new cljs.core.Keyword(null,"size","size",1098693007),"auto");
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65680__$1,new cljs.core.Keyword(null,"document","document",-1329188687),document);
var container_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("v-split-");
var split_perc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var stop_drag = (function (){
if(cljs.core.truth_(on_split_change)){
var G__65685_65733 = cljs.core.deref(split_perc);
(on_split_change.cljs$core$IFn$_invoke$arity$1 ? on_split_change.cljs$core$IFn$_invoke$arity$1(G__65685_65733) : on_split_change.call(null,G__65685_65733));
} else {
}

return cljs.core.reset_BANG_(dragging_QMARK_,false);
});
var calc_perc = (function (mouse_y){
var container = document.getElementById(container_id);
var offsets = re_com.util.sum_scroll_offsets(container);
var c_height = container.clientHeight;
var c_top_y = container.offsetTop;
var relative_y = ((mouse_y - c_top_y) + new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(offsets));
return (100.0 * (relative_y / c_height));
});
var mousemove = (function (event){
return cljs.core.reset_BANG_(split_perc,calc_perc(event.clientY));
});
var mousedown = (function (event){
event.preventDefault();

return cljs.core.reset_BANG_(dragging_QMARK_,true);
});
var mouseover_split = (function (){
return cljs.core.reset_BANG_(over_QMARK_,true);
});
var mouseout_split = (function (){
return cljs.core.reset_BANG_(over_QMARK_,false);
});
var make_container_attrs = (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),container_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style(size),re_com.box.flex_flow_style("column nowrap"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),style], 0))], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (event){
stop_drag();

return null;
}),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (event){
mousemove(event);

return null;
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (event){
stop_drag();

return null;
})], null):null),attr], 0));
});
var make_panel_attrs = (function (class$,in_drag_QMARK_,percentage){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style([cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null)], 0))], null);
});
var make_splitter_attrs = (function (class$){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
mousedown(event);

return null;
}),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
mouseover_split();

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
mouseout_split();

return null;
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style(["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"row-resize"], null),(cljs.core.truth_(cljs.core.deref(over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f8f8f8"], null):null)], 0))], null);
});
return (function() { 
var G__65738__delegate = function (p__65703){
var map__65704 = p__65703;
var map__65704__$1 = (((((!((map__65704 == null))))?(((((map__65704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65704):map__65704);
var _splitter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65704__$1,new cljs.core.Keyword(null,"_splitter-size","_splitter-size",-2092162822));
var panel_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65704__$1,new cljs.core.Keyword(null,"panel-2","panel-2",244198907));
var panel_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65704__$1,new cljs.core.Keyword(null,"panel-1","panel-1",998274139));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65704__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65704__$1,new cljs.core.Keyword(null,"_margin","_margin",1508241828));
var _on_split_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65704__$1,new cljs.core.Keyword(null,"_on-split-change","_on-split-change",1230437286));
var _width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65704__$1,new cljs.core.Keyword(null,"_width","_width",-75982426));
var _size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65704__$1,new cljs.core.Keyword(null,"_size","_size",-746489012));
var _height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65704__$1,new cljs.core.Keyword(null,"_height","_height",133867120));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65704__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _initial_split = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65704__$1,new cljs.core.Keyword(null,"_initial-split","_initial-split",2145793073));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65704__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var perc = (cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(split_perc),parseInt(initial_split)))?(function (){var and__4115__auto__ = open_bottom_split_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(open_bottom_split_QMARK_);
} else {
return and__4115__auto__;
}
})():false))?"70":cljs.core.deref(split_perc));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_container_attrs(class$,style,attr,cljs.core.deref(dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs("re-v-split-top",cljs.core.deref(dragging_QMARK_),perc),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_splitter_attrs("re-v-split-splitter"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.splits.drag_handle,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),cljs.core.deref(over_QMARK_)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs("re-v-split-bottom",cljs.core.deref(dragging_QMARK_),((100) - perc)),panel_2], null)], null);
};
var G__65738 = function (var_args){
var p__65703 = null;
if (arguments.length > 0) {
var G__65743__i = 0, G__65743__a = new Array(arguments.length -  0);
while (G__65743__i < G__65743__a.length) {G__65743__a[G__65743__i] = arguments[G__65743__i + 0]; ++G__65743__i;}
  p__65703 = new cljs.core.IndexedSeq(G__65743__a,0,null);
} 
return G__65738__delegate.call(this,p__65703);};
G__65738.cljs$lang$maxFixedArity = 0;
G__65738.cljs$lang$applyTo = (function (arglist__65744){
var p__65703 = cljs.core.seq(arglist__65744);
return G__65738__delegate(p__65703);
});
G__65738.cljs$core$IFn$_invoke$arity$variadic = G__65738__delegate;
return G__65738;
})()
;
}));

(re_frisk.ui.components.splits.v_split.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk.ui.components.splits.v_split.cljs$lang$applyTo = (function (seq65677){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65677));
}));


//# sourceMappingURL=re_frisk.ui.components.splits.js.map
