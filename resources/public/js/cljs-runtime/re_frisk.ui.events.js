goog.provide('re_frisk.ui.events');
re_frisk.ui.events.event_item = (function re_frisk$ui$events$event_item(_,tool_state){
return (function (p__65730,___$1){
var map__65731 = p__65730;
var map__65731__$1 = (((((!((map__65731 == null))))?(((((map__65731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65731):map__65731);
var item = map__65731__$1;
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65731__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65731__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var app_db_diff = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65731__$1,new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65731__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65731__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),["list-group-item",(cljs.core.truth_(selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),(5),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(13),new cljs.core.Keyword(null,"border-left-width","border-left-width",2037218085),(2),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),(((((app_db_diff == null)) && (cljs.core.not(selected_QMARK_))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.7"], null):null),((clojure.string.blank_QMARK_(color))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left-color","border-left-color",-1166146583),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)].join('')], null))], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-event","selected-event",898030638),item);

return event.preventDefault();
})], null),(cljs.core.truth_(op_type)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.trace.trace_event_item,item], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),name], null))], null);
});
});
re_frisk.ui.events.event_list_item = (function re_frisk$ui$events$event_list_item(_,tool_state){
return (function (p__65734,___$1){
var map__65735 = p__65734;
var map__65735__$1 = (((((!((map__65735 == null))))?(((((map__65735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65735):map__65735);
var item = map__65735__$1;
var trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65735__$1,new cljs.core.Keyword(null,"trace?","trace?",1730690679));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65735__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
if(cljs.core.truth_((function (){var and__4115__auto__ = trace_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),op_type);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.trace.trace_item,item,tool_state], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_item,item,tool_state], null);
}
});
});
re_frisk.ui.events.events_scroller = (function re_frisk$ui$events$events_scroller(filtered_events,tool_state){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"debugger-messages",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var n = reagent.dom.dom_node(this$);
if(cljs.core.truth_(new cljs.core.Keyword(null,"scroll-bottom?","scroll-bottom?",-1686598134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tool_state)))){
return (n.scrollTop = n.scrollHeight);
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.scroller,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),(function (p1__65737_SHARP_){
var t = p1__65737_SHARP_.target;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"scroll-bottom?","scroll-bottom?",-1686598134),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((t.scrollHeight - t.offsetHeight),t.scrollTop));
})], null),(function (){var iter__4529__auto__ = (function re_frisk$ui$events$events_scroller_$_iter__65739(s__65740){
return (new cljs.core.LazySeq(null,(function (){
var s__65740__$1 = s__65740;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__65740__$1);
if(temp__5720__auto__){
var s__65740__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65740__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__65740__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__65742 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__65741 = (0);
while(true){
if((i__65741 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__65741);
cljs.core.chunk_append(b__65742,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_list_item,item,tool_state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"indx","indx",1571035590).cljs$core$IFn$_invoke$arity$1(item))].join('')], null)));

var G__65759 = (i__65741 + (1));
i__65741 = G__65759;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65742),re_frisk$ui$events$events_scroller_$_iter__65739(cljs.core.chunk_rest(s__65740__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65742),null);
}
} else {
var item = cljs.core.first(s__65740__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_list_item,item,tool_state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"indx","indx",1571035590).cljs$core$IFn$_invoke$arity$1(item))].join('')], null)),re_frisk$ui$events$events_scroller_$_iter__65739(cljs.core.rest(s__65740__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.deref(filtered_events));
})()], null);
})], null));
});
re_frisk.ui.events.events_view = (function re_frisk$ui$events$events_view(re_frame_data,tool_state){
var truncate_checkbox_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var checkbox_trace_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var text_val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var re_frame_events = new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frame_data);
var colored_and_selected = reagent.ratom.make_reaction((function (){
var clrs = new cljs.core.Keyword(null,"events-colors","events-colors",-428819032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tool_state));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65745_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__65745_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tool_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-event","selected-event",898030638),new cljs.core.Keyword(null,"indx","indx",1571035590)], null)),new cljs.core.Keyword(null,"indx","indx",1571035590).cljs$core$IFn$_invoke$arity$1(p1__65745_SHARP_)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),(cljs.core.truth_(cljs.core.deref(truncate_checkbox_val))?new cljs.core.Keyword(null,"truncated-name","truncated-name",1771353320).cljs$core$IFn$_invoke$arity$1(p1__65745_SHARP_):cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(p1__65745_SHARP_)))),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.get.cljs$core$IFn$_invoke$arity$2(clrs,cljs.core.first(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(p1__65745_SHARP_)))], 0));
}),cljs.core.deref(re_frame_events)));
}));
var traces_filtered_events = reagent.ratom.make_reaction((function (){
if(cljs.core.truth_(cljs.core.deref(checkbox_trace_val))){
return cljs.core.deref(colored_and_selected);
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trace?","trace?",1730690679),cljs.core.deref(colored_and_selected));
}
}));
var filtered_events = reagent.ratom.make_reaction((function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(text_val),"")){
return cljs.core.deref(traces_filtered_events);
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(re_frisk.utils.filter_event(cljs.core.deref(text_val)),cljs.core.deref(traces_filtered_events));
}
}));
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"model","model",331153215),text_val,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Filter events",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__65746_SHARP_){
return cljs.core.reset_BANG_(text_val,p1__65746_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.small_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(text_val,"");
})], null),"X"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),truncate_checkbox_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__65747_SHARP_){
return cljs.core.reset_BANG_(truncate_checkbox_val,p1__65747_SHARP_);
}),new cljs.core.Keyword(null,"label","label",1718410804),"truncate"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),checkbox_trace_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__65748_SHARP_){
return cljs.core.reset_BANG_(checkbox_trace_val,p1__65748_SHARP_);
}),new cljs.core.Keyword(null,"label","label",1718410804),"traces"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.events_scroller,filtered_events,tool_state], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(3)], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"gap","gap",80255254),"5px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.github.link], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.small_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(re_frame_events,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tool_state,cljs.core.dissoc,new cljs.core.Keyword(null,"selected-event","selected-event",898030638));
})], null),"clear"], null)], null)], null)], null)], null);
});
});
re_frisk.ui.events.event_bar = (function re_frisk$ui$events$event_bar(tool_state){
var evnt_key = reagent.ratom.make_reaction((function (){
return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tool_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-event","selected-event",898030638),new cljs.core.Keyword(null,"event","event",301435442)], null)));
}));
var subs_QMARK_ = reagent.ratom.make_reaction((function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tool_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-event","selected-event",898030638),new cljs.core.Keyword(null,"subs?","subs?",-2085240020)], null));
}));
var color = reagent.ratom.make_reaction((function (){
if(cljs.core.truth_(cljs.core.deref(evnt_key))){
var G__65753 = new cljs.core.Keyword(null,"events-colors","events-colors",-428819032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tool_state));
var fexpr__65752 = cljs.core.deref(evnt_key);
return (fexpr__65752.cljs$core$IFn$_invoke$arity$1 ? fexpr__65752.cljs$core$IFn$_invoke$arity$1(G__65753) : fexpr__65752.call(null,G__65753));
} else {
return "";
}
}));
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4e5d6c"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"4px"], null),new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(cljs.core.deref(evnt_key))?"Event":(cljs.core.truth_(cljs.core.deref(subs_QMARK_))?"Subscriptions":"Event / Trace"
))], null),(cljs.core.truth_(cljs.core.deref(evnt_key))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref(evnt_key),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#df691a"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"#",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"4px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"000000",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"max-length","max-length",-254826109),"6",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(color),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__65751_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events-colors","events-colors",-428819032),cljs.core.deref(evnt_key)], null),p1__65751_SHARP_.target.value);
})], null)], null)], null)], null):null)], null)], null);
});
});
re_frisk.ui.events.event_view = (function re_frisk$ui$events$event_view(tool_state){
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_frisk.ui.components.frisk.expand_by_default);
return (function (_){
var map__65755 = new cljs.core.Keyword(null,"selected-event","selected-event",898030638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tool_state));
var map__65755__$1 = (((((!((map__65755 == null))))?(((((map__65755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65755):map__65755);
var item = map__65755__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65755__$1,new cljs.core.Keyword(null,"event","event",301435442));
var app_db_diff = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65755__$1,new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713));
var trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65755__$1,new cljs.core.Keyword(null,"trace?","trace?",1730690679));
var duration_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65755__$1,new cljs.core.Keyword(null,"duration-ms","duration-ms",1993555055));
var handler_duration_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65755__$1,new cljs.core.Keyword(null,"handler-duration-ms","handler-duration-ms",-491924416));
var fx_duration_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65755__$1,new cljs.core.Keyword(null,"fx-duration-ms","fx-duration-ms",-1014211328));
var subs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65755__$1,new cljs.core.Keyword(null,"subs?","subs?",-2085240020));
if(cljs.core.truth_(item)){
if(cljs.core.truth_(subs_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.trace.subs_details,item], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Root,(cljs.core.truth_(trace_QMARK_)?item:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713),app_db_diff], null),(cljs.core.truth_(duration_ms)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"duration","duration",1444101068),duration_ms,new cljs.core.Keyword(null,"handler-duration","handler-duration",262132324),handler_duration_ms,new cljs.core.Keyword(null,"fx-duration","fx-duration",1796312432),fx_duration_ms], null)], null):null)], 0))),(0),state_atom], null);
}
} else {
return null;
}
});
});

//# sourceMappingURL=re_frisk.ui.events.js.map
