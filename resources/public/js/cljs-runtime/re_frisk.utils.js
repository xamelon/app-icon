goog.provide('re_frisk.utils');
re_frisk.utils.sort_map = (function re_frisk$utils$sort_map(value,checkbox_val,checkbox){
if(cljs.core.truth_((function (){var and__4115__auto__ = checkbox_val;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.map_QMARK_(value);
} else {
return and__4115__auto__;
}
})())){
try{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),value);
}catch (e65526){var e = e65526;
cljs.core.reset_BANG_(checkbox,false);

return value;
}} else {
return value;
}
});
re_frisk.utils.on_change_sort = (function re_frisk$utils$on_change_sort(value,checkbox_val,key){
return (function (val){
cljs.core.reset_BANG_(checkbox_val,val);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(value,cljs.core.assoc,key,true);

return setTimeout((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(value,cljs.core.dissoc,key);
}),(100));
});
});
re_frisk.utils.filter_event = (function re_frisk$utils$filter_event(text){
return (function (item){
var or__4126__auto__ = new cljs.core.Keyword(null,"trace?","trace?",1730690679).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var name = clojure.string.lower_case(cljs.core.name(cljs.core.first(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(item))));
var text__$1 = clojure.string.lower_case(text);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(name,text__$1),null);
}
});
});
re_frisk.utils.truncate_name = (function re_frisk$utils$truncate_name(event){
var namespace = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(event,/:/,""),/\//);
if((cljs.core.count(namespace) > (1))){
return [":",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(namespace),/\./))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(namespace))].join('');
} else {
return event;
}
});
re_frisk.utils.normalize_draggable = (function re_frisk$utils$normalize_draggable(x){
if(cljs.core.truth_(x)){
if((x < (80))){
return (80);
} else {
if((x > (window.innerWidth - (30)))){
return (window.innerWidth - (30));
} else {
return x;

}
}
} else {
return null;
}
});
re_frisk.utils.closed_QMARK_ = (function re_frisk$utils$closed_QMARK_(left){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(left,(window.innerWidth - (30)));
});
re_frisk.utils.str_ms = (function re_frisk$utils$str_ms(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%.2f",value))," ms"].join('');
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.utils !== 'undefined') && (typeof re_frisk.utils.call_state !== 'undefined')){
} else {
re_frisk.utils.call_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk.utils.call_and_chill = (function re_frisk$utils$call_and_chill(handler,time){
if(cljs.core.truth_(cljs.core.deref(re_frisk.utils.call_state))){
return cljs.core.reset_BANG_(re_frisk.utils.call_state,new cljs.core.Keyword(null,"call","call",-519999866));
} else {
cljs.core.reset_BANG_(re_frisk.utils.call_state,new cljs.core.Keyword(null,"chill","chill",-2000479862));

setTimeout(re_frisk.utils.call_timeout,time,handler,time);

return (handler.cljs$core$IFn$_invoke$arity$0 ? handler.cljs$core$IFn$_invoke$arity$0() : handler.call(null));
}
});
re_frisk.utils.call_timeout = (function re_frisk$utils$call_timeout(handler,time){
var state = cljs.core.deref(re_frisk.utils.call_state);
cljs.core.reset_BANG_(re_frisk.utils.call_state,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"call","call",-519999866))){
return re_frisk.utils.call_and_chill(handler,time);
} else {
return null;
}
});

//# sourceMappingURL=re_frisk.utils.js.map
