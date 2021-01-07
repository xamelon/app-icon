goog.provide('re_com.typeahead');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__65205){
var map__65206 = p__65205;
var map__65206__$1 = (((((!((map__65206 == null))))?(((((map__65206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65206):map__65206);
var args = map__65206__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65206__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value(model);
var G__65208 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4126__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__65208,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__65208,external_model_value));
} else {
return G__65208;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__65210,event){
var map__65211 = p__65210;
var map__65211__$1 = (((((!((map__65211 == null))))?(((((map__65211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65211):map__65211);
var state = map__65211__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65211__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65211__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65211__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__65213 = event;
var G__65213__$1 = (((G__65213 instanceof cljs.core.Keyword))?G__65213.fqn:null);
switch (G__65213__$1) {
case "input-text-blurred":
var and__4115__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__4115__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
if(cljs.core.not(rigid_QMARK___$1)){
var or__4126__auto__ = cljs.core.not(change_on_blur_QMARK___$1);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return false;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__65220,event){
var map__65221 = p__65220;
var map__65221__$1 = (((((!((map__65221 == null))))?(((((map__65221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65221):map__65221);
var state = map__65221__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65221__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__65224 = event;
var G__65224__$1 = (((G__65224 instanceof cljs.core.Keyword))?G__65224.fqn:null);
switch (G__65224__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__65226,new_value){
var map__65227 = p__65226;
var map__65227__$1 = (((((!((map__65227 == null))))?(((((map__65227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65227):map__65227);
var state = map__65227__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65227__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__65232,suggestion){
var map__65235 = p__65232;
var map__65235__$1 = (((((!((map__65235 == null))))?(((((map__65235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65235):map__65235);
var state = map__65235__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65235__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__65237 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__65237,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true], 0));
} else {
return G__65237;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728)], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__65238,index){
var map__65239 = p__65238;
var map__65239__$1 = (((((!((map__65239 == null))))?(((((map__65239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65239):map__65239);
var state = map__65239__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65239__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__65241 = state;
var G__65241__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65241,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__65241__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model(G__65241__$1,suggestion):G__65241__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion(G__65241__$2,suggestion);
} else {
return G__65241__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__65242,index){
var map__65243 = p__65242;
var map__65243__$1 = (((((!((map__65243 == null))))?(((((map__65243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65243):map__65243);
var state = map__65243__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65243__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__65247){
var map__65250 = p__65247;
var map__65250__$1 = (((((!((map__65250 == null))))?(((((map__65250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65250):map__65250);
var state = map__65250__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65250__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__65253 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__65253,suggestion_active_index);
} else {
return G__65253;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__65264){
var map__65265 = p__65264;
var map__65265__$1 = (((((!((map__65265 == null))))?(((((map__65265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65265):map__65265);
var state = map__65265__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65265__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65265__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__65270 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__65270,re_com.typeahead.wrap(((function (){var or__4126__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__65270;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__65278){
var map__65280 = p__65278;
var map__65280__$1 = (((((!((map__65280 == null))))?(((((map__65280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65280):map__65280);
var state = map__65280__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65280__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65280__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__65287 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__65287,re_com.typeahead.wrap(((function (){var or__4126__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__65287;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__65291 = state;
var G__65291__$1 = re_com.typeahead.clear_suggestions(G__65291)
;
var G__65291__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__65291__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__65291__$2,null);
} else {
return G__65291__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__65298){
var map__65300 = p__65298;
var map__65300__$1 = (((((!((map__65300 == null))))?(((((map__65300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65300):map__65300);
var state = map__65300__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65300__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65300__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65300__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((cljs.core.not(displaying_suggestion_QMARK_))?re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307)):false))){
return re_com.typeahead.update_model(state,input_text);
} else {
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value),new cljs.core.Keyword(null,"external-model","external-model",506095421),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5718__auto__ = (function (){var G__65311 = text;
var G__65312 = (function (p1__65307_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__65307_SHARP_);
});
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__65311,G__65312) : data_source.call(null,G__65311,G__65312));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var return_value = temp__5718__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__55638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_65350){
var state_val_65351 = (state_65350[(1)]);
if((state_val_65351 === (1))){
var state_65350__$1 = state_65350;
var statearr_65354_65552 = state_65350__$1;
(statearr_65354_65552[(2)] = null);

(statearr_65354_65552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65351 === (2))){
var state_65350__$1 = state_65350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65350__$1,(4),c_search);
} else {
if((state_val_65351 === (3))){
var inst_65348 = (state_65350[(2)]);
var state_65350__$1 = state_65350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65350__$1,inst_65348);
} else {
if((state_val_65351 === (4))){
var inst_65334 = (state_65350[(7)]);
var inst_65334__$1 = (state_65350[(2)]);
var inst_65336 = cljs.core.deref(state_atom);
var inst_65337 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_65336);
var inst_65338 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_65334__$1);
var state_65350__$1 = (function (){var statearr_65358 = state_65350;
(statearr_65358[(7)] = inst_65334__$1);

(statearr_65358[(8)] = inst_65337);

return statearr_65358;
})();
if(inst_65338){
var statearr_65360_65553 = state_65350__$1;
(statearr_65360_65553[(1)] = (5));

} else {
var statearr_65361_65554 = state_65350__$1;
(statearr_65361_65554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65351 === (5))){
var inst_65337 = (state_65350[(8)]);
var inst_65340 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_65341 = re_com.typeahead.search_data_source_BANG_(inst_65337,state_atom,"");
var state_65350__$1 = (function (){var statearr_65363 = state_65350;
(statearr_65363[(9)] = inst_65340);

return statearr_65363;
})();
var statearr_65365_65555 = state_65350__$1;
(statearr_65365_65555[(2)] = inst_65341);

(statearr_65365_65555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65351 === (6))){
var inst_65334 = (state_65350[(7)]);
var inst_65337 = (state_65350[(8)]);
var inst_65343 = re_com.typeahead.search_data_source_BANG_(inst_65337,state_atom,inst_65334);
var state_65350__$1 = state_65350;
var statearr_65367_65557 = state_65350__$1;
(statearr_65367_65557[(2)] = inst_65343);

(statearr_65367_65557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65351 === (7))){
var inst_65345 = (state_65350[(2)]);
var state_65350__$1 = (function (){var statearr_65369 = state_65350;
(statearr_65369[(10)] = inst_65345);

return statearr_65369;
})();
var statearr_65372_65558 = state_65350__$1;
(statearr_65372_65558[(2)] = null);

(statearr_65372_65558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__55616__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__55616__auto____0 = (function (){
var statearr_65373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65373[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__55616__auto__);

(statearr_65373[(1)] = (1));

return statearr_65373;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__55616__auto____1 = (function (state_65350){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_65350);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e65374){var ex__55619__auto__ = e65374;
var statearr_65375_65559 = state_65350;
(statearr_65375_65559[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_65350[(4)]))){
var statearr_65376_65560 = state_65350;
(statearr_65376_65560[(1)] = cljs.core.first((state_65350[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65561 = state_65350;
state_65350 = G__65561;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__55616__auto__ = function(state_65350){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__55616__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__55616__auto____1.call(this,state_65350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__55616__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__55616__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_65379 = f__55639__auto__();
(statearr_65379[(6)] = c__55638__auto__);

return statearr_65379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));

return c__55638__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__65382 = cljs.core.deref(state_atom);
var map__65382__$1 = (((((!((map__65382 == null))))?(((((map__65382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65382):map__65382);
var state = map__65382__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65382__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65382__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (p1__65380_SHARP_){
var G__65384 = p1__65380_SHARP_;
var G__65384__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__65384,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__65384__$1,new_text);
} else {
return G__65384__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__65388 = cljs.core._EQ_;
var expr__65389 = event.which;
if(cljs.core.truth_((pred__65388.cljs$core$IFn$_invoke$arity$2 ? pred__65388.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__65389) : pred__65388.call(null,goog.events.KeyCodes.UP,expr__65389)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__65388.cljs$core$IFn$_invoke$arity$2 ? pred__65388.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__65389) : pred__65388.call(null,goog.events.KeyCodes.DOWN,expr__65389)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__65388.cljs$core$IFn$_invoke$arity$2 ? pred__65388.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__65389) : pred__65388.call(null,goog.events.KeyCodes.ENTER,expr__65389)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__65388.cljs$core$IFn$_invoke$arity$2 ? pred__65388.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__65389) : pred__65388.call(null,goog.events.KeyCodes.ESC,expr__65389)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__65388.cljs$core$IFn$_invoke$arity$2 ? pred__65388.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__65389) : pred__65388.call(null,goog.events.KeyCodes.TAB,expr__65389)))){
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"the outer container"], null),", rather than the textbox)"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65572 = arguments.length;
var i__4737__auto___65574 = (0);
while(true){
if((i__4737__auto___65574 < len__4736__auto___65572)){
args__4742__auto__.push((arguments[i__4737__auto___65574]));

var G__65576 = (i__4737__auto___65574 + (1));
i__4737__auto___65574 = G__65576;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__65400){
var map__65401 = p__65400;
var map__65401__$1 = (((((!((map__65401 == null))))?(((((map__65401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65401):map__65401);
var args = map__65401__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__65404 = re_com.typeahead.make_typeahead_state(args);
var map__65404__$1 = (((((!((map__65404 == null))))?(((((map__65404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65404):map__65404);
var state = map__65404__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65404__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65404__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return (function() { 
var G__65581__delegate = function (p__65408){
var map__65409 = p__65408;
var map__65409__$1 = (((((!((map__65409 == null))))?(((((map__65409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65409):map__65409);
var args__$1 = map__65409__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65409__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__65417 = cljs.core.deref(state_atom);
var map__65417__$1 = (((((!((map__65417 == null))))?(((((map__65417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65417):map__65417);
var state__$1 = map__65417__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65417__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65417__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65417__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65417__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__4126__auto__ = width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4529__auto__ = (function re_com$typeahead$iter__65424(s__65425){
return (new cljs.core.LazySeq(null,(function (){
var s__65425__$1 = s__65425;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__65425__$1);
if(temp__5720__auto__){
var s__65425__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65425__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__65425__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__65427 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__65426 = (0);
while(true){
if((i__65426 < size__4528__auto__)){
var vec__65433 = cljs.core._nth(c__4527__auto__,i__65426);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65433,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65433,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__65427,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__65426,selected_QMARK_,vec__65433,i,s,c__4527__auto__,size__4528__auto__,b__65427,s__65425__$2,temp__5720__auto__,map__65417,map__65417__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__65409,map__65409__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__65404,map__65404__$1,state,c_search,c_input,state_atom,input_text_model,map__65401,map__65401__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__65426,selected_QMARK_,vec__65433,i,s,c__4527__auto__,size__4528__auto__,b__65427,s__65425__$2,temp__5720__auto__,map__65417,map__65417__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__65409,map__65409__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__65404,map__65404__$1,state,c_search,c_input,state_atom,input_text_model,map__65401,map__65401__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__65426,selected_QMARK_,vec__65433,i,s,c__4527__auto__,size__4528__auto__,b__65427,s__65425__$2,temp__5720__auto__,map__65417,map__65417__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__65409,map__65409__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__65404,map__65404__$1,state,c_search,c_input,state_atom,input_text_model,map__65401,map__65401__$1,args){
return (function (p1__65396_SHARP_){
p1__65396_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__65426,selected_QMARK_,vec__65433,i,s,c__4527__auto__,size__4528__auto__,b__65427,s__65425__$2,temp__5720__auto__,map__65417,map__65417__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__65409,map__65409__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__65404,map__65404__$1,state,c_search,c_input,state_atom,input_text_model,map__65401,map__65401__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__65604 = (i__65426 + (1));
i__65426 = G__65604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65427),re_com$typeahead$iter__65424(cljs.core.chunk_rest(s__65425__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65427),null);
}
} else {
var vec__65440 = cljs.core.first(s__65425__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65440,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65440,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__65440,i,s,s__65425__$2,temp__5720__auto__,map__65417,map__65417__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__65409,map__65409__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__65404,map__65404__$1,state,c_search,c_input,state_atom,input_text_model,map__65401,map__65401__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__65440,i,s,s__65425__$2,temp__5720__auto__,map__65417,map__65417__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__65409,map__65409__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__65404,map__65404__$1,state,c_search,c_input,state_atom,input_text_model,map__65401,map__65401__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__65440,i,s,s__65425__$2,temp__5720__auto__,map__65417,map__65417__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__65409,map__65409__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__65404,map__65404__$1,state,c_search,c_input,state_atom,input_text_model,map__65401,map__65401__$1,args){
return (function (p1__65396_SHARP_){
p1__65396_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__65440,i,s,s__65425__$2,temp__5720__auto__,map__65417,map__65417__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__65409,map__65409__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__65404,map__65404__$1,state,c_search,c_input,state_atom,input_text_model,map__65401,map__65401__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__65424(cljs.core.rest(s__65425__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__65581 = function (var_args){
var p__65408 = null;
if (arguments.length > 0) {
var G__65616__i = 0, G__65616__a = new Array(arguments.length -  0);
while (G__65616__i < G__65616__a.length) {G__65616__a[G__65616__i] = arguments[G__65616__i + 0]; ++G__65616__i;}
  p__65408 = new cljs.core.IndexedSeq(G__65616__a,0,null);
} 
return G__65581__delegate.call(this,p__65408);};
G__65581.cljs$lang$maxFixedArity = 0;
G__65581.cljs$lang$applyTo = (function (arglist__65617){
var p__65408 = cljs.core.seq(arglist__65617);
return G__65581__delegate(p__65408);
});
G__65581.cljs$core$IFn$_invoke$arity$variadic = G__65581__delegate;
return G__65581;
})()
;
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq65397){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65397));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__55638__auto___65618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_65499){
var state_val_65500 = (state_65499[(1)]);
if((state_val_65500 === (7))){
var inst_65452 = (state_65499[(2)]);
var state_65499__$1 = state_65499;
var statearr_65501_65619 = state_65499__$1;
(statearr_65501_65619[(2)] = inst_65452);

(statearr_65501_65619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65500 === (1))){
var inst_65447 = null;
var state_65499__$1 = (function (){var statearr_65502 = state_65499;
(statearr_65502[(7)] = inst_65447);

return statearr_65502;
})();
var statearr_65503_65620 = state_65499__$1;
(statearr_65503_65620[(2)] = null);

(statearr_65503_65620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65500 === (4))){
var state_65499__$1 = state_65499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65499__$1,(7),in$);
} else {
if((state_val_65500 === (15))){
var inst_65484 = (state_65499[(2)]);
var state_65499__$1 = (function (){var statearr_65505 = state_65499;
(statearr_65505[(8)] = inst_65484);

return statearr_65505;
})();
var statearr_65506_65621 = state_65499__$1;
(statearr_65506_65621[(2)] = null);

(statearr_65506_65621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65500 === (13))){
var inst_65471 = (state_65499[(9)]);
var inst_65486 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65471,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_65499__$1 = state_65499;
if(inst_65486){
var statearr_65507_65622 = state_65499__$1;
(statearr_65507_65622[(1)] = (16));

} else {
var statearr_65508_65623 = state_65499__$1;
(statearr_65508_65623[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65500 === (6))){
var inst_65464 = (state_65499[(10)]);
var inst_65456 = (state_65499[(11)]);
var inst_65455 = (state_65499[(2)]);
var inst_65456__$1 = cljs.core.async.timeout(ms);
var inst_65464__$1 = in$;
var inst_65465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65466 = [inst_65464__$1,inst_65456__$1];
var inst_65467 = (new cljs.core.PersistentVector(null,2,(5),inst_65465,inst_65466,null));
var state_65499__$1 = (function (){var statearr_65511 = state_65499;
(statearr_65511[(10)] = inst_65464__$1);

(statearr_65511[(11)] = inst_65456__$1);

(statearr_65511[(12)] = inst_65455);

return statearr_65511;
})();
return cljs.core.async.ioc_alts_BANG_(state_65499__$1,(8),inst_65467);
} else {
if((state_val_65500 === (17))){
var state_65499__$1 = state_65499;
var statearr_65513_65627 = state_65499__$1;
(statearr_65513_65627[(2)] = null);

(statearr_65513_65627[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65500 === (3))){
var inst_65497 = (state_65499[(2)]);
var state_65499__$1 = state_65499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65499__$1,inst_65497);
} else {
if((state_val_65500 === (12))){
var inst_65455 = (state_65499[(12)]);
var state_65499__$1 = state_65499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65499__$1,(15),out,inst_65455);
} else {
if((state_val_65500 === (2))){
var inst_65447 = (state_65499[(7)]);
var inst_65449 = (inst_65447 == null);
var state_65499__$1 = state_65499;
if(cljs.core.truth_(inst_65449)){
var statearr_65517_65628 = state_65499__$1;
(statearr_65517_65628[(1)] = (4));

} else {
var statearr_65518_65629 = state_65499__$1;
(statearr_65518_65629[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65500 === (11))){
var inst_65494 = (state_65499[(2)]);
var inst_65447 = inst_65494;
var state_65499__$1 = (function (){var statearr_65519 = state_65499;
(statearr_65519[(7)] = inst_65447);

return statearr_65519;
})();
var statearr_65520_65630 = state_65499__$1;
(statearr_65520_65630[(2)] = null);

(statearr_65520_65630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65500 === (9))){
var inst_65469 = (state_65499[(13)]);
var inst_65478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65469,(0),null);
var inst_65479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65469,(1),null);
var state_65499__$1 = (function (){var statearr_65521 = state_65499;
(statearr_65521[(14)] = inst_65479);

return statearr_65521;
})();
var statearr_65522_65631 = state_65499__$1;
(statearr_65522_65631[(2)] = inst_65478);

(statearr_65522_65631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65500 === (5))){
var inst_65447 = (state_65499[(7)]);
var state_65499__$1 = state_65499;
var statearr_65523_65632 = state_65499__$1;
(statearr_65523_65632[(2)] = inst_65447);

(statearr_65523_65632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65500 === (14))){
var inst_65492 = (state_65499[(2)]);
var state_65499__$1 = state_65499;
var statearr_65524_65633 = state_65499__$1;
(statearr_65524_65633[(2)] = inst_65492);

(statearr_65524_65633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65500 === (16))){
var inst_65470 = (state_65499[(15)]);
var state_65499__$1 = state_65499;
var statearr_65525_65636 = state_65499__$1;
(statearr_65525_65636[(2)] = inst_65470);

(statearr_65525_65636[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65500 === (10))){
var inst_65471 = (state_65499[(9)]);
var inst_65456 = (state_65499[(11)]);
var inst_65481 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65471,inst_65456);
var state_65499__$1 = state_65499;
if(inst_65481){
var statearr_65527_65638 = state_65499__$1;
(statearr_65527_65638[(1)] = (12));

} else {
var statearr_65528_65639 = state_65499__$1;
(statearr_65528_65639[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65500 === (18))){
var inst_65490 = (state_65499[(2)]);
var state_65499__$1 = state_65499;
var statearr_65529_65640 = state_65499__$1;
(statearr_65529_65640[(2)] = inst_65490);

(statearr_65529_65640[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65500 === (8))){
var inst_65471 = (state_65499[(9)]);
var inst_65464 = (state_65499[(10)]);
var inst_65469 = (state_65499[(13)]);
var inst_65469__$1 = (state_65499[(2)]);
var inst_65470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65469__$1,(0),null);
var inst_65471__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65469__$1,(1),null);
var inst_65472 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65471__$1,inst_65464);
var state_65499__$1 = (function (){var statearr_65530 = state_65499;
(statearr_65530[(9)] = inst_65471__$1);

(statearr_65530[(15)] = inst_65470);

(statearr_65530[(13)] = inst_65469__$1);

return statearr_65530;
})();
if(inst_65472){
var statearr_65531_65641 = state_65499__$1;
(statearr_65531_65641[(1)] = (9));

} else {
var statearr_65532_65642 = state_65499__$1;
(statearr_65532_65642[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$debounce_$_state_machine__55616__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__55616__auto____0 = (function (){
var statearr_65533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65533[(0)] = re_com$typeahead$debounce_$_state_machine__55616__auto__);

(statearr_65533[(1)] = (1));

return statearr_65533;
});
var re_com$typeahead$debounce_$_state_machine__55616__auto____1 = (function (state_65499){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_65499);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e65534){var ex__55619__auto__ = e65534;
var statearr_65535_65643 = state_65499;
(statearr_65535_65643[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_65499[(4)]))){
var statearr_65536_65644 = state_65499;
(statearr_65536_65644[(1)] = cljs.core.first((state_65499[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65645 = state_65499;
state_65499 = G__65645;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__55616__auto__ = function(state_65499){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__55616__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__55616__auto____1.call(this,state_65499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__55616__auto____0;
re_com$typeahead$debounce_$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__55616__auto____1;
return re_com$typeahead$debounce_$_state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_65537 = f__55639__auto__();
(statearr_65537[(6)] = c__55638__auto___65618);

return statearr_65537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));


return out;
});

//# sourceMappingURL=re_com.typeahead.js.map
