goog.provide('re_com.dropdown');
/**
 * In a vector of maps (where each map has an :id), return the id of the choice offset posititions away
 * from id (usually +1 or -1 to go to next/previous). Also accepts :start and :end
 */
re_com.dropdown.move_to_new_choice = (function re_com$dropdown$move_to_new_choice(choices,id_fn,id,offset){
var current_index = re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(id,choices,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn], 0));
var new_index = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,new cljs.core.Keyword(null,"start","start",-355208981)))?(0):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,new cljs.core.Keyword(null,"end","end",-268185958)))?(cljs.core.count(choices) - (1)):(((current_index == null))?(0):cljs.core.mod((current_index + offset),cljs.core.count(choices))
)));
if(cljs.core.truth_((function (){var and__4115__auto__ = new_index;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.count(choices) > (0));
} else {
return and__4115__auto__;
}
})())){
var G__62896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(choices,new_index);
return (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(G__62896) : id_fn.call(null,G__62896));
} else {
return null;
}
});
/**
 * If necessary, inserts group headings entries into the choices
 */
re_com.dropdown.choices_with_group_headings = (function re_com$dropdown$choices_with_group_headings(opts,group_fn){
var groups = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(group_fn,opts);
var group_headers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62897_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"group","group",582596132)],[cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),p1__62897_SHARP_]);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(group_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,groups)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_headers,groups], null);
});
/**
 * Filter a list of choices based on a filter string using plain string searches (case insensitive). Less powerful
 * than regex's but no confusion with reserved characters
 */
re_com.dropdown.filter_choices = (function re_com$dropdown$filter_choices(choices,group_fn,label_fn,filter_text){
var lower_filter_text = clojure.string.lower_case(filter_text);
var filter_fn = (function (opt){
var group = ((((group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(opt) : group_fn.call(null,opt)) == null))?"":(group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(opt) : group_fn.call(null,opt)));
var label = cljs.core.str.cljs$core$IFn$_invoke$arity$1((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(opt) : label_fn.call(null,opt)));
return (((clojure.string.lower_case(group).indexOf(lower_filter_text) >= (0))) || ((clojure.string.lower_case(label).indexOf(lower_filter_text) >= (0))));
});
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,choices);
});
/**
 * Filter a list of choices based on a filter string using regex's (case insensitive). More powerful but can cause
 * confusion for users entering reserved characters such as [ ] * + . ( ) etc.
 */
re_com.dropdown.filter_choices_regex = (function re_com$dropdown$filter_choices_regex(choices,group_fn,label_fn,filter_text){
var re = (function (){try{return (new RegExp(filter_text,"i"));
}catch (e62903){if((e62903 instanceof Object)){
var e = e62903;
return null;
} else {
throw e62903;

}
}})();
var filter_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (re__$1,opt){
if((re__$1 == null)){
return null;
} else {
var or__4126__auto__ = re__$1.test((group_fn.cljs$core$IFn$_invoke$arity$1 ? group_fn.cljs$core$IFn$_invoke$arity$1(opt) : group_fn.call(null,opt)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return re__$1.test((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(opt) : label_fn.call(null,opt)));
}
}
}),re);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,choices);
});
/**
 * Filter a list of choices extra data within the choices vector
 */
re_com.dropdown.filter_choices_by_keyword = (function re_com$dropdown$filter_choices_by_keyword(choices,keyword,value){
var filter_fn = (function (opt){
return ((keyword.cljs$core$IFn$_invoke$arity$1 ? keyword.cljs$core$IFn$_invoke$arity$1(opt) : keyword.call(null,opt)).indexOf(value) >= (0));
});
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,choices);
});
re_com.dropdown.show_selected_item = (function re_com$dropdown$show_selected_item(node){
var item_offset_top = node.offsetTop;
var item_offset_bottom = (item_offset_top + node.clientHeight);
var parent = node.parentNode;
var parent_height = parent.clientHeight;
var parent_visible_top = parent.scrollTop;
var parent_visible_bottom = (parent_visible_top + parent_height);
var new_scroll_top = (((item_offset_bottom > parent_visible_bottom))?(function (){var x__4214__auto__ = (item_offset_bottom - parent_height);
var y__4215__auto__ = (0);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():(((item_offset_top < parent_visible_top))?item_offset_top:null));
if(cljs.core.truth_(new_scroll_top)){
return (parent.scrollTop = new_scroll_top);
} else {
return null;
}
});
/**
 * Render a group heading
 */
re_com.dropdown.make_group_heading = (function re_com$dropdown$make_group_heading(m){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.group-result","li.group-result",1074686727),new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(m)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m)], null));
});
/**
 * Render a choice item and set up appropriate mouse events
 */
re_com.dropdown.choice_item = (function re_com$dropdown$choice_item(id,label,on_click,internal_model){
var mouse_over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var node = reagent.dom.dom_node(this$);
var selected = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),id);
if(selected){
return re_com.dropdown.show_selected_item(node);
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var node = reagent.dom.dom_node(this$);
var selected = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),id);
if(selected){
return re_com.dropdown.show_selected_item(node);
} else {
return null;
}
}),new cljs.core.Keyword(null,"display-name","display-name",694513143),"choice-item",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (id__$1,label__$1,on_click__$1,internal_model__$1){
var selected = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model__$1),id__$1);
var class$ = ((selected)?"highlighted":(cljs.core.truth_(cljs.core.deref(mouse_over_QMARK_))?"mouseover":null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["active-result group-option ",class$].join(''),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
cljs.core.reset_BANG_(mouse_over_QMARK_,true);

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
cljs.core.reset_BANG_(mouse_over_QMARK_,false);

return null;
}),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
(on_click__$1.cljs$core$IFn$_invoke$arity$1 ? on_click__$1.cljs$core$IFn$_invoke$arity$1(id__$1) : on_click__$1.call(null,id__$1));

return null;
})], null),label__$1], null);
})], null));
});
re_com.dropdown.make_choice_item = (function re_com$dropdown$make_choice_item(id_fn,render_fn,callback,internal_model,opt){
var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(opt) : id_fn.call(null,opt));
var markup = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(opt) : render_fn.call(null,opt));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.choice_item,id,markup,callback,internal_model], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null));
});
/**
 * Base function (before lifecycle metadata) to render a filter text box
 */
re_com.dropdown.filter_text_box_base = (function re_com$dropdown$filter_text_box_base(filter_box_QMARK_,filter_text,key_handler,drop_showing_QMARK_,set_filter_text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chosen-search","div.chosen-search",-210987404),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"off",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(filter_box_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"0px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"border","border",1444987323),"none"], null)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(filter_text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
var G__62927_63022 = event.target.value;
(set_filter_text.cljs$core$IFn$_invoke$arity$1 ? set_filter_text.cljs$core$IFn$_invoke$arity$1(G__62927_63022) : set_filter_text.call(null,G__62927_63022));

return null;
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (event){
if(cljs.core.truth_((key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(event) : key_handler.call(null,event)))){
} else {
event.preventDefault();
}

return null;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (event){
cljs.core.reset_BANG_(drop_showing_QMARK_,false);

return null;
})], null)], null)], null);
});
/**
 * Render a filter text box
 */
re_com.dropdown.filter_text_box = cljs.core.with_meta(re_com.dropdown.filter_text_box_base,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__62938_SHARP_){
var node = reagent.dom.dom_node(p1__62938_SHARP_).firstChild;
return node.focus();
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (p1__62939_SHARP_){
var node = reagent.dom.dom_node(p1__62939_SHARP_).firstChild;
return node.focus();
})], null));
/**
 * Render the top part of the dropdown, with the clickable area and the up/down arrow
 */
re_com.dropdown.dropdown_top = (function re_com$dropdown$dropdown_top(){
var ignore_click = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (internal_model,choices,id_fn,label_fn,tab_index,placeholder,dropdown_click,key_handler,filter_box_QMARK_,drop_showing_QMARK_,title_QMARK_){
var _ = reagent.core.set_state(reagent.core.current_component(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688),filter_box_QMARK_], null));
var text = (cljs.core.truth_(cljs.core.deref(internal_model))?(function (){var G__62941 = re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(internal_model),choices,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn], 0));
return (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(G__62941) : label_fn.call(null,G__62941));
})():placeholder);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.chosen-single.chosen-default","a.chosen-single.chosen-default",-2089562458),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),tab_index,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_(cljs.core.deref(ignore_click))){
cljs.core.reset_BANG_(ignore_click,false);
} else {
(dropdown_click.cljs$core$IFn$_invoke$arity$0 ? dropdown_click.cljs$core$IFn$_invoke$arity$0() : dropdown_click.call(null));
}

return null;
}),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
if(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))){
cljs.core.reset_BANG_(ignore_click,true);
} else {
}

return null;
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (event){
(key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(event) : key_handler.call(null,event));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.which,(13))){
cljs.core.reset_BANG_(ignore_click,true);
} else {
}

return null;
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(title_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),text], null):null),text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null)], null)], null);
});
});
re_com.dropdown.fn_or_vector_of_maps_QMARK_ = (function re_com$dropdown$fn_or_vector_of_maps_QMARK_(v){
return ((cljs.core.fn_QMARK_(v)) || (re_com.validate.vector_of_maps_QMARK_(v)));
});
/**
 * Load choices if choices is callback.
 */
re_com.dropdown.load_choices_STAR_ = (function re_com$dropdown$load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_){
var id = (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)) + (1));
var callback = (function (p__62945){
var map__62946 = p__62945;
var map__62946__$1 = (((((!((map__62946 == null))))?(((((map__62946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62946):map__62946);
var args = map__62946__$1;
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62946__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62946__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(choices_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"choices","choices",1385611597),result], 0));
} else {
return null;
}
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(choices_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"timer","timer",-1266967739),null], 0));

var G__62948 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-text","filter-text",-381699202),text,new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668),regex_filter_QMARK_], null);
var G__62949 = (function (p1__62943_SHARP_){
return callback(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),p1__62943_SHARP_], null));
});
var G__62950 = (function (p1__62944_SHARP_){
return callback(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__62944_SHARP_], null));
});
return (choices.cljs$core$IFn$_invoke$arity$3 ? choices.cljs$core$IFn$_invoke$arity$3(G__62948,G__62949,G__62950) : choices.call(null,G__62948,G__62949,G__62950));
});
/**
 * Load choices or schedule lodaing depending on debounce?
 */
re_com.dropdown.load_choices = (function re_com$dropdown$load_choices(choices_state,choices,debounce_delay,text,regex_filter_QMARK_,debounce_QMARK_){
if(cljs.core.fn_QMARK_(choices)){
var temp__5720__auto___63026 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state));
if(cljs.core.truth_(temp__5720__auto___63026)){
var timer_63027 = temp__5720__auto___63026;
clearTimeout(timer_63027);
} else {
}

if(cljs.core.truth_(debounce_QMARK_)){
var timer = setTimeout((function (){
return re_com.dropdown.load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_);
}),debounce_delay);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(choices_state,cljs.core.assoc,new cljs.core.Keyword(null,"timer","timer",-1266967739),timer);
} else {
return re_com.dropdown.load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_);
}
} else {
return null;
}
});
re_com.dropdown.single_dropdown_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of choices | atom | (opts, done, fail) -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.dropdown.fn_or_vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Each is expected to have an id, label and, optionally, a group, provided by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id-fn"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":label-fn"], null)," & ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":group-fn"], null),". May also be a callback ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"(opts, done, fail)"], null)," where opts is map of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":filter-text"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":regex-filter?."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"the id of a choice | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"the id of the selected choice. If nil, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":placeholder"], null)," text is shown"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when a new choice is selected. Passed the id of new choice"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"choice -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"choice -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns its displayable label."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"group-fn","group-fn",129203707),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"type","type",1174270348),"choice -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns its group identifier"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"choice -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns the markup that will be rendered for that choice. Defaults to the label if no custom markup is required."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, no user selection is allowed"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, a filter text field is placed at the top of the dropdown"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the filter text field will support JavaScript regular expressions. If false, just plain text"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text when no selection"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title?","title?",-1510254555),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, allows the title for the selected dropdown to be displayed via a mouse over. Handy when dropdown width is small and text is truncated"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"100%",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the CSS width. e.g.: \"500px\" or \"20em\""], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"240px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the maximum height of the dropdown part"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"component's tabindex. A value of -1 removes from order"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"delay to debounce loading requests when using callback ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the outer container)"], null)], null)], null);
/**
 * Render a single dropdown component which emulates the bootstrap-choosen style. Sample choices object:
 *   [{:id "AU" :label "Australia"      :group "Group 1"}
 *    {:id "US" :label "United States"  :group "Group 1"}
 *    {:id "GB" :label "United Kingdom" :group "Group 1"}
 *    {:id "AF" :label "Afghanistan"    :group "Group 2"}]
 */
re_com.dropdown.single_dropdown = (function re_com$dropdown$single_dropdown(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63039 = arguments.length;
var i__4737__auto___63040 = (0);
while(true){
if((i__4737__auto___63040 < len__4736__auto___63039)){
args__4742__auto__.push((arguments[i__4737__auto___63040]));

var G__63043 = (i__4737__auto___63040 + (1));
i__4737__auto___63040 = G__63043;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.dropdown.single_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.dropdown.single_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__62956){
var map__62957 = p__62956;
var map__62957__$1 = (((((!((map__62957 == null))))?(((((map__62957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62957):map__62957);
var args = map__62957__$1;
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62957__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62957__$1,new cljs.core.Keyword(null,"model","model",331153215));
var regex_filter_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62957__$1,new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668));
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62957__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),(250));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.dropdown.single_dropdown_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["single-dropdown"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro single-dropdown-args-desc args \"single-dropdown\")"));
}

var external_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
var internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(external_model));
var drop_showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var filter_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var choices_fn_QMARK_ = cljs.core.fn_QMARK_(choices);
var choices_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),choices_fn_QMARK_,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"timer","timer",-1266967739),null], null));
var load_choices = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(re_com.dropdown.load_choices,choices_state,choices,debounce_delay);
var set_filter_text = (function (text,p__62959,debounce_QMARK_){
var map__62960 = p__62959;
var map__62960__$1 = (((((!((map__62960 == null))))?(((((map__62960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62960):map__62960);
var args__$1 = map__62960__$1;
var regex_filter_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62960__$1,new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668));
load_choices(text,regex_filter_QMARK___$1,debounce_QMARK_);

return cljs.core.reset_BANG_(filter_text,text);
});
load_choices("",regex_filter_QMARK_,false);

return (function() { 
var G__63048__delegate = function (p__62964){
var map__62965 = p__62964;
var map__62965__$1 = (((((!((map__62965 == null))))?(((((map__62965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62965):map__62965);
var args__$1 = map__62965__$1;
var group_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62965__$1,new cljs.core.Keyword(null,"group-fn","group-fn",129203707),new cljs.core.Keyword(null,"group","group",582596132));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62965__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tab_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"tab-index","tab-index",895755393));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var title_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"title?","title?",-1510254555));
var render_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62965__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),label_fn);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var regex_filter_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668));
var choices__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62965__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debounce_delay__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var filter_box_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62965__$1,new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.dropdown.single_dropdown_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["single-dropdown"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro single-dropdown-args-desc args \"single-dropdown\")"));
}

var choices__$2 = ((choices_fn_QMARK_)?new cljs.core.Keyword(null,"choices","choices",1385611597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)):re_com.util.deref_or_value(choices__$1));
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var regex_filter_QMARK___$2 = re_com.util.deref_or_value(regex_filter_QMARK___$1);
var latest_ext_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model__$1));
var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(external_model),cljs.core.deref(latest_ext_model)))?(function (){
cljs.core.reset_BANG_(external_model,cljs.core.deref(latest_ext_model));

return cljs.core.reset_BANG_(internal_model,cljs.core.deref(latest_ext_model));
})()
:null);
var changeable_QMARK_ = (function (){var and__4115__auto__ = on_change;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4115__auto__;
}
})();
var callback = (function (p1__62951_SHARP_){
cljs.core.reset_BANG_(internal_model,p1__62951_SHARP_);

if(cljs.core.truth_((function (){var and__4115__auto__ = changeable_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_model),cljs.core.deref(latest_ext_model));
} else {
return and__4115__auto__;
}
})())){
var G__62967_63049 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__62967_63049) : on_change.call(null,G__62967_63049));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(drop_showing_QMARK_,cljs.core.not);

return set_filter_text("",args__$1,false);
});
var cancel = (function (){
cljs.core.reset_BANG_(drop_showing_QMARK_,false);

set_filter_text("",args__$1,false);

return cljs.core.reset_BANG_(internal_model,cljs.core.deref(external_model));
});
var dropdown_click = (function (){
if(cljs.core.truth_(disabled_QMARK___$1)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(drop_showing_QMARK_,cljs.core.not);
}
});
var filtered_choices = ((choices_fn_QMARK_)?choices__$2:(cljs.core.truth_(regex_filter_QMARK___$2)?re_com.dropdown.filter_choices_regex(choices__$2,group_fn,label_fn,cljs.core.deref(filter_text)):re_com.dropdown.filter_choices(choices__$2,group_fn,label_fn,cljs.core.deref(filter_text))));
var press_enter = (function (){
if(cljs.core.truth_(disabled_QMARK___$1)){
cancel();
} else {
callback(cljs.core.deref(internal_model));
}

return true;
});
var press_escape = (function (){
cancel();

return true;
});
var press_tab = (function (){
if(cljs.core.truth_(disabled_QMARK___$1)){
cancel();
} else {
if(cljs.core.truth_(changeable_QMARK_)){
var G__62968_63054 = cljs.core.deref(internal_model);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__62968_63054) : on_change.call(null,G__62968_63054));
} else {
}

cljs.core.reset_BANG_(drop_showing_QMARK_,false);

set_filter_text("",args__$1,false);
}

cljs.core.reset_BANG_(drop_showing_QMARK_,false);

return true;
});
var press_up = (function (){
if(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))){
cljs.core.reset_BANG_(internal_model,re_com.dropdown.move_to_new_choice(filtered_choices,id_fn,cljs.core.deref(internal_model),(-1)));
} else {
cljs.core.reset_BANG_(drop_showing_QMARK_,true);
}

return true;
});
var press_down = (function (){
if(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))){
cljs.core.reset_BANG_(internal_model,re_com.dropdown.move_to_new_choice(filtered_choices,id_fn,cljs.core.deref(internal_model),(1)));
} else {
cljs.core.reset_BANG_(drop_showing_QMARK_,true);
}

return true;
});
var press_home = (function (){
cljs.core.reset_BANG_(internal_model,re_com.dropdown.move_to_new_choice(filtered_choices,id_fn,cljs.core.deref(internal_model),new cljs.core.Keyword(null,"start","start",-355208981)));

return true;
});
var press_end = (function (){
cljs.core.reset_BANG_(internal_model,re_com.dropdown.move_to_new_choice(filtered_choices,id_fn,cljs.core.deref(internal_model),new cljs.core.Keyword(null,"end","end",-268185958)));

return true;
});
var key_handler = (function (p1__62952_SHARP_){
if(cljs.core.truth_(disabled_QMARK___$1)){
return false;
} else {
var G__62985 = p1__62952_SHARP_.which;
switch (G__62985) {
case (13):
return press_enter();

break;
case (27):
return press_escape();

break;
case (9):
return press_tab();

break;
case (38):
return press_up();

break;
case (40):
return press_down();

break;
case (36):
return press_home();

break;
case (35):
return press_end();

break;
default:
return filter_box_QMARK_;

}
}
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-dropdown chosen-container chosen-container-single noselect ",(cljs.core.truth_(cljs.core.deref(drop_showing_QMARK_))?"chosen-container-active chosen-with-drop ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style((cljs.core.truth_(width)?"0 0 auto":"auto")),re_com.box.align_style(new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"start","start",-355208981)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),style], 0))], null),attr], 0)),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.dropdown_top,internal_model,choices__$2,id_fn,label_fn,tab_index,placeholder,dropdown_click,key_handler,filter_box_QMARK_,drop_showing_QMARK_,title_QMARK_], null),(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(drop_showing_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chosen-drop","div.chosen-drop",-1110109208),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.filter_text_box,filter_box_QMARK_,filter_text,key_handler,drop_showing_QMARK_,(function (p1__62953_SHARP_){
return set_filter_text(p1__62953_SHARP_,args__$1,true);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.chosen-results","ul.chosen-results",-932618517),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null)], null):null),(cljs.core.truth_(((choices_fn_QMARK_)?new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.loading","li.loading",1659621189),"Loading..."], null):(cljs.core.truth_(((choices_fn_QMARK_)?new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state)):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.error","li.error",534172652),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(choices_state))], null):(((cljs.core.count(filtered_choices) > (0)))?(function (){var vec__62986 = re_com.dropdown.choices_with_group_headings(filtered_choices,group_fn);
var group_names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62986,(0),null);
var group_opt_lists = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62986,(1),null);
var make_a_choice = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(re_com.dropdown.make_choice_item,id_fn,render_fn,callback,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([internal_model], 0));
var make_choices = (function (p1__62954_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(make_a_choice,p1__62954_SHARP_);
});
var make_h_then_choices = (function (h,opts){
return cljs.core.cons(re_com.dropdown.make_group_heading(h),make_choices(opts));
});
var has_no_group_names_QMARK_ = (new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.first(group_names)) == null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(group_opt_lists))) && (has_no_group_names_QMARK_))){
return make_choices(cljs.core.first(group_opt_lists));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(make_h_then_choices,group_names,group_opt_lists));
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.no-results","li.no-results",-717682399),["No results match \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(filter_text)),"\""].join('')], null)
)))], null)], null):null)], null);
};
var G__63048 = function (var_args){
var p__62964 = null;
if (arguments.length > 0) {
var G__63062__i = 0, G__63062__a = new Array(arguments.length -  0);
while (G__63062__i < G__63062__a.length) {G__63062__a[G__63062__i] = arguments[G__63062__i + 0]; ++G__63062__i;}
  p__62964 = new cljs.core.IndexedSeq(G__63062__a,0,null);
} 
return G__63048__delegate.call(this,p__62964);};
G__63048.cljs$lang$maxFixedArity = 0;
G__63048.cljs$lang$applyTo = (function (arglist__63063){
var p__62964 = cljs.core.seq(arglist__63063);
return G__63048__delegate(p__62964);
});
G__63048.cljs$core$IFn$_invoke$arity$variadic = G__63048__delegate;
return G__63048;
})()
;
}));

(re_com.dropdown.single_dropdown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.dropdown.single_dropdown.cljs$lang$applyTo = (function (seq62955){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62955));
}));


//# sourceMappingURL=re_com.dropdown.js.map
