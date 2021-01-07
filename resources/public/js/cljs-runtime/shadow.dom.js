goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_66718 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_66718(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_66719 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_66719(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__66029 = coll;
var G__66030 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__66029,G__66030) : shadow.dom.lazy_native_coll_seq.call(null,G__66029,G__66030));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__66066 = arguments.length;
switch (G__66066) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__66074 = arguments.length;
switch (G__66074) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__66082 = arguments.length;
switch (G__66082) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__66092 = arguments.length;
switch (G__66092) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__66101 = arguments.length;
switch (G__66101) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__66111 = arguments.length;
switch (G__66111) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e66113){if((e66113 instanceof Object)){
var e = e66113;
return console.log("didnt support attachEvent",el,e);
} else {
throw e66113;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__66133 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__66134 = null;
var count__66135 = (0);
var i__66136 = (0);
while(true){
if((i__66136 < count__66135)){
var el = chunk__66134.cljs$core$IIndexed$_nth$arity$2(null,i__66136);
var handler_66728__$1 = ((function (seq__66133,chunk__66134,count__66135,i__66136,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__66133,chunk__66134,count__66135,i__66136,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_66728__$1);


var G__66729 = seq__66133;
var G__66730 = chunk__66134;
var G__66731 = count__66135;
var G__66732 = (i__66136 + (1));
seq__66133 = G__66729;
chunk__66134 = G__66730;
count__66135 = G__66731;
i__66136 = G__66732;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__66133);
if(temp__5720__auto__){
var seq__66133__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66133__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66133__$1);
var G__66733 = cljs.core.chunk_rest(seq__66133__$1);
var G__66734 = c__4556__auto__;
var G__66735 = cljs.core.count(c__4556__auto__);
var G__66736 = (0);
seq__66133 = G__66733;
chunk__66134 = G__66734;
count__66135 = G__66735;
i__66136 = G__66736;
continue;
} else {
var el = cljs.core.first(seq__66133__$1);
var handler_66737__$1 = ((function (seq__66133,chunk__66134,count__66135,i__66136,el,seq__66133__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__66133,chunk__66134,count__66135,i__66136,el,seq__66133__$1,temp__5720__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_66737__$1);


var G__66739 = cljs.core.next(seq__66133__$1);
var G__66740 = null;
var G__66741 = (0);
var G__66742 = (0);
seq__66133 = G__66739;
chunk__66134 = G__66740;
count__66135 = G__66741;
i__66136 = G__66742;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__66148 = arguments.length;
switch (G__66148) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__66169 = cljs.core.seq(events);
var chunk__66170 = null;
var count__66171 = (0);
var i__66172 = (0);
while(true){
if((i__66172 < count__66171)){
var vec__66188 = chunk__66170.cljs$core$IIndexed$_nth$arity$2(null,i__66172);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66188,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66188,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__66745 = seq__66169;
var G__66746 = chunk__66170;
var G__66747 = count__66171;
var G__66748 = (i__66172 + (1));
seq__66169 = G__66745;
chunk__66170 = G__66746;
count__66171 = G__66747;
i__66172 = G__66748;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__66169);
if(temp__5720__auto__){
var seq__66169__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66169__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66169__$1);
var G__66749 = cljs.core.chunk_rest(seq__66169__$1);
var G__66750 = c__4556__auto__;
var G__66751 = cljs.core.count(c__4556__auto__);
var G__66752 = (0);
seq__66169 = G__66749;
chunk__66170 = G__66750;
count__66171 = G__66751;
i__66172 = G__66752;
continue;
} else {
var vec__66199 = cljs.core.first(seq__66169__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66199,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66199,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__66753 = cljs.core.next(seq__66169__$1);
var G__66754 = null;
var G__66755 = (0);
var G__66756 = (0);
seq__66169 = G__66753;
chunk__66170 = G__66754;
count__66171 = G__66755;
i__66172 = G__66756;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__66203 = cljs.core.seq(styles);
var chunk__66204 = null;
var count__66205 = (0);
var i__66206 = (0);
while(true){
if((i__66206 < count__66205)){
var vec__66220 = chunk__66204.cljs$core$IIndexed$_nth$arity$2(null,i__66206);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66220,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66220,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__66758 = seq__66203;
var G__66759 = chunk__66204;
var G__66760 = count__66205;
var G__66761 = (i__66206 + (1));
seq__66203 = G__66758;
chunk__66204 = G__66759;
count__66205 = G__66760;
i__66206 = G__66761;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__66203);
if(temp__5720__auto__){
var seq__66203__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66203__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66203__$1);
var G__66763 = cljs.core.chunk_rest(seq__66203__$1);
var G__66764 = c__4556__auto__;
var G__66765 = cljs.core.count(c__4556__auto__);
var G__66766 = (0);
seq__66203 = G__66763;
chunk__66204 = G__66764;
count__66205 = G__66765;
i__66206 = G__66766;
continue;
} else {
var vec__66227 = cljs.core.first(seq__66203__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66227,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66227,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__66767 = cljs.core.next(seq__66203__$1);
var G__66768 = null;
var G__66769 = (0);
var G__66770 = (0);
seq__66203 = G__66767;
chunk__66204 = G__66768;
count__66205 = G__66769;
i__66206 = G__66770;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__66235_66773 = key;
var G__66235_66774__$1 = (((G__66235_66773 instanceof cljs.core.Keyword))?G__66235_66773.fqn:null);
switch (G__66235_66774__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_66780 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_66780,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_66780,"aria-");
}
})())){
el.setAttribute(ks_66780,value);
} else {
(el[ks_66780] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__66257){
var map__66258 = p__66257;
var map__66258__$1 = (((((!((map__66258 == null))))?(((((map__66258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66258):map__66258);
var props = map__66258__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66258__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__66262 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66262,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66262,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66262,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__66267 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__66267,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__66267;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__66270 = arguments.length;
switch (G__66270) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__66283){
var vec__66285 = p__66283;
var seq__66286 = cljs.core.seq(vec__66285);
var first__66287 = cljs.core.first(seq__66286);
var seq__66286__$1 = cljs.core.next(seq__66286);
var nn = first__66287;
var first__66287__$1 = cljs.core.first(seq__66286__$1);
var seq__66286__$2 = cljs.core.next(seq__66286__$1);
var np = first__66287__$1;
var nc = seq__66286__$2;
var node = vec__66285;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__66293 = nn;
var G__66294 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__66293,G__66294) : create_fn.call(null,G__66293,G__66294));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__66302 = nn;
var G__66303 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__66302,G__66303) : create_fn.call(null,G__66302,G__66303));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__66344 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66344,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66344,(1),null);
var seq__66347_66796 = cljs.core.seq(node_children);
var chunk__66348_66797 = null;
var count__66349_66798 = (0);
var i__66350_66799 = (0);
while(true){
if((i__66350_66799 < count__66349_66798)){
var child_struct_66800 = chunk__66348_66797.cljs$core$IIndexed$_nth$arity$2(null,i__66350_66799);
var children_66801 = shadow.dom.dom_node(child_struct_66800);
if(cljs.core.seq_QMARK_(children_66801)){
var seq__66389_66802 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66801));
var chunk__66391_66803 = null;
var count__66392_66804 = (0);
var i__66393_66805 = (0);
while(true){
if((i__66393_66805 < count__66392_66804)){
var child_66806 = chunk__66391_66803.cljs$core$IIndexed$_nth$arity$2(null,i__66393_66805);
if(cljs.core.truth_(child_66806)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66806);


var G__66807 = seq__66389_66802;
var G__66808 = chunk__66391_66803;
var G__66809 = count__66392_66804;
var G__66810 = (i__66393_66805 + (1));
seq__66389_66802 = G__66807;
chunk__66391_66803 = G__66808;
count__66392_66804 = G__66809;
i__66393_66805 = G__66810;
continue;
} else {
var G__66811 = seq__66389_66802;
var G__66812 = chunk__66391_66803;
var G__66813 = count__66392_66804;
var G__66814 = (i__66393_66805 + (1));
seq__66389_66802 = G__66811;
chunk__66391_66803 = G__66812;
count__66392_66804 = G__66813;
i__66393_66805 = G__66814;
continue;
}
} else {
var temp__5720__auto___66815 = cljs.core.seq(seq__66389_66802);
if(temp__5720__auto___66815){
var seq__66389_66816__$1 = temp__5720__auto___66815;
if(cljs.core.chunked_seq_QMARK_(seq__66389_66816__$1)){
var c__4556__auto___66817 = cljs.core.chunk_first(seq__66389_66816__$1);
var G__66818 = cljs.core.chunk_rest(seq__66389_66816__$1);
var G__66819 = c__4556__auto___66817;
var G__66820 = cljs.core.count(c__4556__auto___66817);
var G__66821 = (0);
seq__66389_66802 = G__66818;
chunk__66391_66803 = G__66819;
count__66392_66804 = G__66820;
i__66393_66805 = G__66821;
continue;
} else {
var child_66822 = cljs.core.first(seq__66389_66816__$1);
if(cljs.core.truth_(child_66822)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66822);


var G__66823 = cljs.core.next(seq__66389_66816__$1);
var G__66824 = null;
var G__66825 = (0);
var G__66826 = (0);
seq__66389_66802 = G__66823;
chunk__66391_66803 = G__66824;
count__66392_66804 = G__66825;
i__66393_66805 = G__66826;
continue;
} else {
var G__66827 = cljs.core.next(seq__66389_66816__$1);
var G__66828 = null;
var G__66829 = (0);
var G__66830 = (0);
seq__66389_66802 = G__66827;
chunk__66391_66803 = G__66828;
count__66392_66804 = G__66829;
i__66393_66805 = G__66830;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66801);
}


var G__66831 = seq__66347_66796;
var G__66832 = chunk__66348_66797;
var G__66833 = count__66349_66798;
var G__66834 = (i__66350_66799 + (1));
seq__66347_66796 = G__66831;
chunk__66348_66797 = G__66832;
count__66349_66798 = G__66833;
i__66350_66799 = G__66834;
continue;
} else {
var temp__5720__auto___66835 = cljs.core.seq(seq__66347_66796);
if(temp__5720__auto___66835){
var seq__66347_66836__$1 = temp__5720__auto___66835;
if(cljs.core.chunked_seq_QMARK_(seq__66347_66836__$1)){
var c__4556__auto___66837 = cljs.core.chunk_first(seq__66347_66836__$1);
var G__66838 = cljs.core.chunk_rest(seq__66347_66836__$1);
var G__66839 = c__4556__auto___66837;
var G__66840 = cljs.core.count(c__4556__auto___66837);
var G__66841 = (0);
seq__66347_66796 = G__66838;
chunk__66348_66797 = G__66839;
count__66349_66798 = G__66840;
i__66350_66799 = G__66841;
continue;
} else {
var child_struct_66842 = cljs.core.first(seq__66347_66836__$1);
var children_66843 = shadow.dom.dom_node(child_struct_66842);
if(cljs.core.seq_QMARK_(children_66843)){
var seq__66407_66844 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_66843));
var chunk__66409_66845 = null;
var count__66410_66846 = (0);
var i__66411_66847 = (0);
while(true){
if((i__66411_66847 < count__66410_66846)){
var child_66855 = chunk__66409_66845.cljs$core$IIndexed$_nth$arity$2(null,i__66411_66847);
if(cljs.core.truth_(child_66855)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66855);


var G__66856 = seq__66407_66844;
var G__66857 = chunk__66409_66845;
var G__66858 = count__66410_66846;
var G__66859 = (i__66411_66847 + (1));
seq__66407_66844 = G__66856;
chunk__66409_66845 = G__66857;
count__66410_66846 = G__66858;
i__66411_66847 = G__66859;
continue;
} else {
var G__66860 = seq__66407_66844;
var G__66861 = chunk__66409_66845;
var G__66862 = count__66410_66846;
var G__66863 = (i__66411_66847 + (1));
seq__66407_66844 = G__66860;
chunk__66409_66845 = G__66861;
count__66410_66846 = G__66862;
i__66411_66847 = G__66863;
continue;
}
} else {
var temp__5720__auto___66864__$1 = cljs.core.seq(seq__66407_66844);
if(temp__5720__auto___66864__$1){
var seq__66407_66865__$1 = temp__5720__auto___66864__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66407_66865__$1)){
var c__4556__auto___66866 = cljs.core.chunk_first(seq__66407_66865__$1);
var G__66867 = cljs.core.chunk_rest(seq__66407_66865__$1);
var G__66868 = c__4556__auto___66866;
var G__66869 = cljs.core.count(c__4556__auto___66866);
var G__66870 = (0);
seq__66407_66844 = G__66867;
chunk__66409_66845 = G__66868;
count__66410_66846 = G__66869;
i__66411_66847 = G__66870;
continue;
} else {
var child_66871 = cljs.core.first(seq__66407_66865__$1);
if(cljs.core.truth_(child_66871)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_66871);


var G__66872 = cljs.core.next(seq__66407_66865__$1);
var G__66873 = null;
var G__66874 = (0);
var G__66875 = (0);
seq__66407_66844 = G__66872;
chunk__66409_66845 = G__66873;
count__66410_66846 = G__66874;
i__66411_66847 = G__66875;
continue;
} else {
var G__66880 = cljs.core.next(seq__66407_66865__$1);
var G__66881 = null;
var G__66882 = (0);
var G__66883 = (0);
seq__66407_66844 = G__66880;
chunk__66409_66845 = G__66881;
count__66410_66846 = G__66882;
i__66411_66847 = G__66883;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_66843);
}


var G__66884 = cljs.core.next(seq__66347_66836__$1);
var G__66885 = null;
var G__66886 = (0);
var G__66887 = (0);
seq__66347_66796 = G__66884;
chunk__66348_66797 = G__66885;
count__66349_66798 = G__66886;
i__66350_66799 = G__66887;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__66422 = cljs.core.seq(node);
var chunk__66423 = null;
var count__66424 = (0);
var i__66425 = (0);
while(true){
if((i__66425 < count__66424)){
var n = chunk__66423.cljs$core$IIndexed$_nth$arity$2(null,i__66425);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66892 = seq__66422;
var G__66893 = chunk__66423;
var G__66894 = count__66424;
var G__66895 = (i__66425 + (1));
seq__66422 = G__66892;
chunk__66423 = G__66893;
count__66424 = G__66894;
i__66425 = G__66895;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__66422);
if(temp__5720__auto__){
var seq__66422__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66422__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66422__$1);
var G__66896 = cljs.core.chunk_rest(seq__66422__$1);
var G__66897 = c__4556__auto__;
var G__66898 = cljs.core.count(c__4556__auto__);
var G__66899 = (0);
seq__66422 = G__66896;
chunk__66423 = G__66897;
count__66424 = G__66898;
i__66425 = G__66899;
continue;
} else {
var n = cljs.core.first(seq__66422__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__66900 = cljs.core.next(seq__66422__$1);
var G__66901 = null;
var G__66902 = (0);
var G__66903 = (0);
seq__66422 = G__66900;
chunk__66423 = G__66901;
count__66424 = G__66902;
i__66425 = G__66903;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__66437 = arguments.length;
switch (G__66437) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__66467 = arguments.length;
switch (G__66467) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__66472 = arguments.length;
switch (G__66472) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66915 = arguments.length;
var i__4737__auto___66916 = (0);
while(true){
if((i__4737__auto___66916 < len__4736__auto___66915)){
args__4742__auto__.push((arguments[i__4737__auto___66916]));

var G__66917 = (i__4737__auto___66916 + (1));
i__4737__auto___66916 = G__66917;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__66479_66918 = cljs.core.seq(nodes);
var chunk__66480_66919 = null;
var count__66481_66920 = (0);
var i__66482_66921 = (0);
while(true){
if((i__66482_66921 < count__66481_66920)){
var node_66922 = chunk__66480_66919.cljs$core$IIndexed$_nth$arity$2(null,i__66482_66921);
fragment.appendChild(shadow.dom._to_dom(node_66922));


var G__66923 = seq__66479_66918;
var G__66924 = chunk__66480_66919;
var G__66925 = count__66481_66920;
var G__66926 = (i__66482_66921 + (1));
seq__66479_66918 = G__66923;
chunk__66480_66919 = G__66924;
count__66481_66920 = G__66925;
i__66482_66921 = G__66926;
continue;
} else {
var temp__5720__auto___66927 = cljs.core.seq(seq__66479_66918);
if(temp__5720__auto___66927){
var seq__66479_66928__$1 = temp__5720__auto___66927;
if(cljs.core.chunked_seq_QMARK_(seq__66479_66928__$1)){
var c__4556__auto___66929 = cljs.core.chunk_first(seq__66479_66928__$1);
var G__66930 = cljs.core.chunk_rest(seq__66479_66928__$1);
var G__66931 = c__4556__auto___66929;
var G__66932 = cljs.core.count(c__4556__auto___66929);
var G__66933 = (0);
seq__66479_66918 = G__66930;
chunk__66480_66919 = G__66931;
count__66481_66920 = G__66932;
i__66482_66921 = G__66933;
continue;
} else {
var node_66934 = cljs.core.first(seq__66479_66928__$1);
fragment.appendChild(shadow.dom._to_dom(node_66934));


var G__66935 = cljs.core.next(seq__66479_66928__$1);
var G__66936 = null;
var G__66937 = (0);
var G__66938 = (0);
seq__66479_66918 = G__66935;
chunk__66480_66919 = G__66936;
count__66481_66920 = G__66937;
i__66482_66921 = G__66938;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq66478){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66478));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__66503_66943 = cljs.core.seq(scripts);
var chunk__66504_66944 = null;
var count__66505_66945 = (0);
var i__66506_66946 = (0);
while(true){
if((i__66506_66946 < count__66505_66945)){
var vec__66522_66947 = chunk__66504_66944.cljs$core$IIndexed$_nth$arity$2(null,i__66506_66946);
var script_tag_66948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66522_66947,(0),null);
var script_body_66949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66522_66947,(1),null);
eval(script_body_66949);


var G__66951 = seq__66503_66943;
var G__66952 = chunk__66504_66944;
var G__66953 = count__66505_66945;
var G__66954 = (i__66506_66946 + (1));
seq__66503_66943 = G__66951;
chunk__66504_66944 = G__66952;
count__66505_66945 = G__66953;
i__66506_66946 = G__66954;
continue;
} else {
var temp__5720__auto___66955 = cljs.core.seq(seq__66503_66943);
if(temp__5720__auto___66955){
var seq__66503_66956__$1 = temp__5720__auto___66955;
if(cljs.core.chunked_seq_QMARK_(seq__66503_66956__$1)){
var c__4556__auto___66957 = cljs.core.chunk_first(seq__66503_66956__$1);
var G__66958 = cljs.core.chunk_rest(seq__66503_66956__$1);
var G__66959 = c__4556__auto___66957;
var G__66960 = cljs.core.count(c__4556__auto___66957);
var G__66961 = (0);
seq__66503_66943 = G__66958;
chunk__66504_66944 = G__66959;
count__66505_66945 = G__66960;
i__66506_66946 = G__66961;
continue;
} else {
var vec__66530_66975 = cljs.core.first(seq__66503_66956__$1);
var script_tag_66976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66530_66975,(0),null);
var script_body_66977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66530_66975,(1),null);
eval(script_body_66977);


var G__66978 = cljs.core.next(seq__66503_66956__$1);
var G__66979 = null;
var G__66980 = (0);
var G__66981 = (0);
seq__66503_66943 = G__66978;
chunk__66504_66944 = G__66979;
count__66505_66945 = G__66980;
i__66506_66946 = G__66981;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__66540){
var vec__66541 = p__66540;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66541,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66541,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__66548 = arguments.length;
switch (G__66548) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__66554 = cljs.core.seq(style_keys);
var chunk__66555 = null;
var count__66556 = (0);
var i__66557 = (0);
while(true){
if((i__66557 < count__66556)){
var it = chunk__66555.cljs$core$IIndexed$_nth$arity$2(null,i__66557);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__66992 = seq__66554;
var G__66993 = chunk__66555;
var G__66994 = count__66556;
var G__66995 = (i__66557 + (1));
seq__66554 = G__66992;
chunk__66555 = G__66993;
count__66556 = G__66994;
i__66557 = G__66995;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__66554);
if(temp__5720__auto__){
var seq__66554__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66554__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66554__$1);
var G__66996 = cljs.core.chunk_rest(seq__66554__$1);
var G__66997 = c__4556__auto__;
var G__66998 = cljs.core.count(c__4556__auto__);
var G__66999 = (0);
seq__66554 = G__66996;
chunk__66555 = G__66997;
count__66556 = G__66998;
i__66557 = G__66999;
continue;
} else {
var it = cljs.core.first(seq__66554__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__67000 = cljs.core.next(seq__66554__$1);
var G__67001 = null;
var G__67002 = (0);
var G__67003 = (0);
seq__66554 = G__67000;
chunk__66555 = G__67001;
count__66556 = G__67002;
i__66557 = G__67003;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k66559,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__66564 = k66559;
var G__66564__$1 = (((G__66564 instanceof cljs.core.Keyword))?G__66564.fqn:null);
switch (G__66564__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66559,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__66565){
var vec__66566 = p__66565;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66566,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66566,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66558){
var self__ = this;
var G__66558__$1 = this;
return (new cljs.core.RecordIter((0),G__66558__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66560,other66561){
var self__ = this;
var this66560__$1 = this;
return (((!((other66561 == null)))) && ((this66560__$1.constructor === other66561.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66560__$1.x,other66561.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66560__$1.y,other66561.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66560__$1.__extmap,other66561.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__66558){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__66616 = cljs.core.keyword_identical_QMARK_;
var expr__66617 = k__4388__auto__;
if(cljs.core.truth_((pred__66616.cljs$core$IFn$_invoke$arity$2 ? pred__66616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__66617) : pred__66616.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__66617)))){
return (new shadow.dom.Coordinate(G__66558,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66616.cljs$core$IFn$_invoke$arity$2 ? pred__66616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__66617) : pred__66616.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__66617)))){
return (new shadow.dom.Coordinate(self__.x,G__66558,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__66558),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__66558){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__66558,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__66563){
var extmap__4419__auto__ = (function (){var G__66620 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__66563,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__66563)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66620);
} else {
return G__66620;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__66563),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__66563),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k66622,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__66626 = k66622;
var G__66626__$1 = (((G__66626 instanceof cljs.core.Keyword))?G__66626.fqn:null);
switch (G__66626__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k66622,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__66627){
var vec__66628 = p__66627;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66628,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66628,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__66621){
var self__ = this;
var G__66621__$1 = this;
return (new cljs.core.RecordIter((0),G__66621__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66623,other66624){
var self__ = this;
var this66623__$1 = this;
return (((!((other66624 == null)))) && ((this66623__$1.constructor === other66624.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66623__$1.w,other66624.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66623__$1.h,other66624.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this66623__$1.__extmap,other66624.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__66621){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__66631 = cljs.core.keyword_identical_QMARK_;
var expr__66632 = k__4388__auto__;
if(cljs.core.truth_((pred__66631.cljs$core$IFn$_invoke$arity$2 ? pred__66631.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__66632) : pred__66631.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__66632)))){
return (new shadow.dom.Size(G__66621,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__66631.cljs$core$IFn$_invoke$arity$2 ? pred__66631.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__66632) : pred__66631.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__66632)))){
return (new shadow.dom.Size(self__.w,G__66621,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__66621),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__66621){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__66621,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__66625){
var extmap__4419__auto__ = (function (){var G__66634 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__66625,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__66625)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__66634);
} else {
return G__66634;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__66625),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__66625),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__67033 = (i + (1));
var G__67034 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__67033;
ret = G__67034;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66639){
var vec__66640 = p__66639;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66640,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66640,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__66644 = arguments.length;
switch (G__66644) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__67061 = ps;
var G__67062 = (i + (1));
el__$1 = G__67061;
i = G__67062;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__66645 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66645,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66645,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66645,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__66648_67073 = cljs.core.seq(props);
var chunk__66649_67074 = null;
var count__66650_67075 = (0);
var i__66651_67076 = (0);
while(true){
if((i__66651_67076 < count__66650_67075)){
var vec__66658_67077 = chunk__66649_67074.cljs$core$IIndexed$_nth$arity$2(null,i__66651_67076);
var k_67078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66658_67077,(0),null);
var v_67079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66658_67077,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_67078);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_67078),v_67079);


var G__67084 = seq__66648_67073;
var G__67085 = chunk__66649_67074;
var G__67086 = count__66650_67075;
var G__67087 = (i__66651_67076 + (1));
seq__66648_67073 = G__67084;
chunk__66649_67074 = G__67085;
count__66650_67075 = G__67086;
i__66651_67076 = G__67087;
continue;
} else {
var temp__5720__auto___67088 = cljs.core.seq(seq__66648_67073);
if(temp__5720__auto___67088){
var seq__66648_67089__$1 = temp__5720__auto___67088;
if(cljs.core.chunked_seq_QMARK_(seq__66648_67089__$1)){
var c__4556__auto___67090 = cljs.core.chunk_first(seq__66648_67089__$1);
var G__67091 = cljs.core.chunk_rest(seq__66648_67089__$1);
var G__67092 = c__4556__auto___67090;
var G__67093 = cljs.core.count(c__4556__auto___67090);
var G__67094 = (0);
seq__66648_67073 = G__67091;
chunk__66649_67074 = G__67092;
count__66650_67075 = G__67093;
i__66651_67076 = G__67094;
continue;
} else {
var vec__66661_67099 = cljs.core.first(seq__66648_67089__$1);
var k_67100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66661_67099,(0),null);
var v_67101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66661_67099,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_67100);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_67100),v_67101);


var G__67109 = cljs.core.next(seq__66648_67089__$1);
var G__67110 = null;
var G__67111 = (0);
var G__67112 = (0);
seq__66648_67073 = G__67109;
chunk__66649_67074 = G__67110;
count__66650_67075 = G__67111;
i__66651_67076 = G__67112;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__66665 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66665,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66665,(1),null);
var seq__66668_67123 = cljs.core.seq(node_children);
var chunk__66670_67124 = null;
var count__66671_67125 = (0);
var i__66672_67126 = (0);
while(true){
if((i__66672_67126 < count__66671_67125)){
var child_struct_67127 = chunk__66670_67124.cljs$core$IIndexed$_nth$arity$2(null,i__66672_67126);
if((!((child_struct_67127 == null)))){
if(typeof child_struct_67127 === 'string'){
var text_67128 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_67128),child_struct_67127].join(''));
} else {
var children_67129 = shadow.dom.svg_node(child_struct_67127);
if(cljs.core.seq_QMARK_(children_67129)){
var seq__66686_67130 = cljs.core.seq(children_67129);
var chunk__66688_67131 = null;
var count__66689_67132 = (0);
var i__66690_67133 = (0);
while(true){
if((i__66690_67133 < count__66689_67132)){
var child_67134 = chunk__66688_67131.cljs$core$IIndexed$_nth$arity$2(null,i__66690_67133);
if(cljs.core.truth_(child_67134)){
node.appendChild(child_67134);


var G__67139 = seq__66686_67130;
var G__67140 = chunk__66688_67131;
var G__67141 = count__66689_67132;
var G__67142 = (i__66690_67133 + (1));
seq__66686_67130 = G__67139;
chunk__66688_67131 = G__67140;
count__66689_67132 = G__67141;
i__66690_67133 = G__67142;
continue;
} else {
var G__67148 = seq__66686_67130;
var G__67149 = chunk__66688_67131;
var G__67150 = count__66689_67132;
var G__67151 = (i__66690_67133 + (1));
seq__66686_67130 = G__67148;
chunk__66688_67131 = G__67149;
count__66689_67132 = G__67150;
i__66690_67133 = G__67151;
continue;
}
} else {
var temp__5720__auto___67153 = cljs.core.seq(seq__66686_67130);
if(temp__5720__auto___67153){
var seq__66686_67155__$1 = temp__5720__auto___67153;
if(cljs.core.chunked_seq_QMARK_(seq__66686_67155__$1)){
var c__4556__auto___67161 = cljs.core.chunk_first(seq__66686_67155__$1);
var G__67162 = cljs.core.chunk_rest(seq__66686_67155__$1);
var G__67163 = c__4556__auto___67161;
var G__67164 = cljs.core.count(c__4556__auto___67161);
var G__67165 = (0);
seq__66686_67130 = G__67162;
chunk__66688_67131 = G__67163;
count__66689_67132 = G__67164;
i__66690_67133 = G__67165;
continue;
} else {
var child_67167 = cljs.core.first(seq__66686_67155__$1);
if(cljs.core.truth_(child_67167)){
node.appendChild(child_67167);


var G__67172 = cljs.core.next(seq__66686_67155__$1);
var G__67173 = null;
var G__67174 = (0);
var G__67175 = (0);
seq__66686_67130 = G__67172;
chunk__66688_67131 = G__67173;
count__66689_67132 = G__67174;
i__66690_67133 = G__67175;
continue;
} else {
var G__67176 = cljs.core.next(seq__66686_67155__$1);
var G__67177 = null;
var G__67178 = (0);
var G__67179 = (0);
seq__66686_67130 = G__67176;
chunk__66688_67131 = G__67177;
count__66689_67132 = G__67178;
i__66690_67133 = G__67179;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_67129);
}
}


var G__67180 = seq__66668_67123;
var G__67181 = chunk__66670_67124;
var G__67182 = count__66671_67125;
var G__67183 = (i__66672_67126 + (1));
seq__66668_67123 = G__67180;
chunk__66670_67124 = G__67181;
count__66671_67125 = G__67182;
i__66672_67126 = G__67183;
continue;
} else {
var G__67184 = seq__66668_67123;
var G__67185 = chunk__66670_67124;
var G__67186 = count__66671_67125;
var G__67187 = (i__66672_67126 + (1));
seq__66668_67123 = G__67184;
chunk__66670_67124 = G__67185;
count__66671_67125 = G__67186;
i__66672_67126 = G__67187;
continue;
}
} else {
var temp__5720__auto___67188 = cljs.core.seq(seq__66668_67123);
if(temp__5720__auto___67188){
var seq__66668_67189__$1 = temp__5720__auto___67188;
if(cljs.core.chunked_seq_QMARK_(seq__66668_67189__$1)){
var c__4556__auto___67190 = cljs.core.chunk_first(seq__66668_67189__$1);
var G__67191 = cljs.core.chunk_rest(seq__66668_67189__$1);
var G__67192 = c__4556__auto___67190;
var G__67193 = cljs.core.count(c__4556__auto___67190);
var G__67194 = (0);
seq__66668_67123 = G__67191;
chunk__66670_67124 = G__67192;
count__66671_67125 = G__67193;
i__66672_67126 = G__67194;
continue;
} else {
var child_struct_67195 = cljs.core.first(seq__66668_67189__$1);
if((!((child_struct_67195 == null)))){
if(typeof child_struct_67195 === 'string'){
var text_67196 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_67196),child_struct_67195].join(''));
} else {
var children_67197 = shadow.dom.svg_node(child_struct_67195);
if(cljs.core.seq_QMARK_(children_67197)){
var seq__66692_67201 = cljs.core.seq(children_67197);
var chunk__66694_67202 = null;
var count__66695_67203 = (0);
var i__66696_67204 = (0);
while(true){
if((i__66696_67204 < count__66695_67203)){
var child_67205 = chunk__66694_67202.cljs$core$IIndexed$_nth$arity$2(null,i__66696_67204);
if(cljs.core.truth_(child_67205)){
node.appendChild(child_67205);


var G__67206 = seq__66692_67201;
var G__67207 = chunk__66694_67202;
var G__67208 = count__66695_67203;
var G__67209 = (i__66696_67204 + (1));
seq__66692_67201 = G__67206;
chunk__66694_67202 = G__67207;
count__66695_67203 = G__67208;
i__66696_67204 = G__67209;
continue;
} else {
var G__67210 = seq__66692_67201;
var G__67211 = chunk__66694_67202;
var G__67212 = count__66695_67203;
var G__67213 = (i__66696_67204 + (1));
seq__66692_67201 = G__67210;
chunk__66694_67202 = G__67211;
count__66695_67203 = G__67212;
i__66696_67204 = G__67213;
continue;
}
} else {
var temp__5720__auto___67219__$1 = cljs.core.seq(seq__66692_67201);
if(temp__5720__auto___67219__$1){
var seq__66692_67224__$1 = temp__5720__auto___67219__$1;
if(cljs.core.chunked_seq_QMARK_(seq__66692_67224__$1)){
var c__4556__auto___67233 = cljs.core.chunk_first(seq__66692_67224__$1);
var G__67234 = cljs.core.chunk_rest(seq__66692_67224__$1);
var G__67235 = c__4556__auto___67233;
var G__67236 = cljs.core.count(c__4556__auto___67233);
var G__67237 = (0);
seq__66692_67201 = G__67234;
chunk__66694_67202 = G__67235;
count__66695_67203 = G__67236;
i__66696_67204 = G__67237;
continue;
} else {
var child_67242 = cljs.core.first(seq__66692_67224__$1);
if(cljs.core.truth_(child_67242)){
node.appendChild(child_67242);


var G__67243 = cljs.core.next(seq__66692_67224__$1);
var G__67244 = null;
var G__67245 = (0);
var G__67246 = (0);
seq__66692_67201 = G__67243;
chunk__66694_67202 = G__67244;
count__66695_67203 = G__67245;
i__66696_67204 = G__67246;
continue;
} else {
var G__67247 = cljs.core.next(seq__66692_67224__$1);
var G__67248 = null;
var G__67249 = (0);
var G__67250 = (0);
seq__66692_67201 = G__67247;
chunk__66694_67202 = G__67248;
count__66695_67203 = G__67249;
i__66696_67204 = G__67250;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_67197);
}
}


var G__67251 = cljs.core.next(seq__66668_67189__$1);
var G__67252 = null;
var G__67253 = (0);
var G__67254 = (0);
seq__66668_67123 = G__67251;
chunk__66670_67124 = G__67252;
count__66671_67125 = G__67253;
i__66672_67126 = G__67254;
continue;
} else {
var G__67255 = cljs.core.next(seq__66668_67189__$1);
var G__67256 = null;
var G__67257 = (0);
var G__67258 = (0);
seq__66668_67123 = G__67255;
chunk__66670_67124 = G__67256;
count__66671_67125 = G__67257;
i__66672_67126 = G__67258;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67260 = arguments.length;
var i__4737__auto___67261 = (0);
while(true){
if((i__4737__auto___67261 < len__4736__auto___67260)){
args__4742__auto__.push((arguments[i__4737__auto___67261]));

var G__67262 = (i__4737__auto___67261 + (1));
i__4737__auto___67261 = G__67262;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq66698){
var G__66699 = cljs.core.first(seq66698);
var seq66698__$1 = cljs.core.next(seq66698);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66699,seq66698__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__66701 = arguments.length;
switch (G__66701) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__55638__auto___67266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_66706){
var state_val_66707 = (state_66706[(1)]);
if((state_val_66707 === (1))){
var state_66706__$1 = state_66706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66706__$1,(2),once_or_cleanup);
} else {
if((state_val_66707 === (2))){
var inst_66703 = (state_66706[(2)]);
var inst_66704 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_66706__$1 = (function (){var statearr_66708 = state_66706;
(statearr_66708[(7)] = inst_66703);

return statearr_66708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66706__$1,inst_66704);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__55616__auto__ = null;
var shadow$dom$state_machine__55616__auto____0 = (function (){
var statearr_66709 = [null,null,null,null,null,null,null,null];
(statearr_66709[(0)] = shadow$dom$state_machine__55616__auto__);

(statearr_66709[(1)] = (1));

return statearr_66709;
});
var shadow$dom$state_machine__55616__auto____1 = (function (state_66706){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_66706);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e66710){var ex__55619__auto__ = e66710;
var statearr_66711_67267 = state_66706;
(statearr_66711_67267[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_66706[(4)]))){
var statearr_66712_67268 = state_66706;
(statearr_66712_67268[(1)] = cljs.core.first((state_66706[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67269 = state_66706;
state_66706 = G__67269;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
shadow$dom$state_machine__55616__auto__ = function(state_66706){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__55616__auto____0.call(this);
case 1:
return shadow$dom$state_machine__55616__auto____1.call(this,state_66706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__55616__auto____0;
shadow$dom$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__55616__auto____1;
return shadow$dom$state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_66713 = f__55639__auto__();
(statearr_66713[(6)] = c__55638__auto___67266);

return statearr_66713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
