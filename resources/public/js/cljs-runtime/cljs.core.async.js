goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__63181 = arguments.length;
switch (G__63181) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63188 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63188 = (function (f,blockable,meta63189){
this.f = f;
this.blockable = blockable;
this.meta63189 = meta63189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63190,meta63189__$1){
var self__ = this;
var _63190__$1 = this;
return (new cljs.core.async.t_cljs$core$async63188(self__.f,self__.blockable,meta63189__$1));
}));

(cljs.core.async.t_cljs$core$async63188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63190){
var self__ = this;
var _63190__$1 = this;
return self__.meta63189;
}));

(cljs.core.async.t_cljs$core$async63188.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63188.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async63188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async63188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta63189","meta63189",-982270113,null)], null);
}));

(cljs.core.async.t_cljs$core$async63188.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63188");

(cljs.core.async.t_cljs$core$async63188.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63188");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63188.
 */
cljs.core.async.__GT_t_cljs$core$async63188 = (function cljs$core$async$__GT_t_cljs$core$async63188(f__$1,blockable__$1,meta63189){
return (new cljs.core.async.t_cljs$core$async63188(f__$1,blockable__$1,meta63189));
});

}

return (new cljs.core.async.t_cljs$core$async63188(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__63206 = arguments.length;
switch (G__63206) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__63210 = arguments.length;
switch (G__63210) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__63215 = arguments.length;
switch (G__63215) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_65223 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_65223) : fn1.call(null,val_65223));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_65223) : fn1.call(null,val_65223));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__63223 = arguments.length;
switch (G__63223) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___65229 = n;
var x_65230 = (0);
while(true){
if((x_65230 < n__4613__auto___65229)){
(a[x_65230] = x_65230);

var G__65231 = (x_65230 + (1));
x_65230 = G__65231;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63233 = (function (flag,meta63234){
this.flag = flag;
this.meta63234 = meta63234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63235,meta63234__$1){
var self__ = this;
var _63235__$1 = this;
return (new cljs.core.async.t_cljs$core$async63233(self__.flag,meta63234__$1));
}));

(cljs.core.async.t_cljs$core$async63233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63235){
var self__ = this;
var _63235__$1 = this;
return self__.meta63234;
}));

(cljs.core.async.t_cljs$core$async63233.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63233.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async63233.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63233.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async63233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta63234","meta63234",-1274336174,null)], null);
}));

(cljs.core.async.t_cljs$core$async63233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63233");

(cljs.core.async.t_cljs$core$async63233.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63233.
 */
cljs.core.async.__GT_t_cljs$core$async63233 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async63233(flag__$1,meta63234){
return (new cljs.core.async.t_cljs$core$async63233(flag__$1,meta63234));
});

}

return (new cljs.core.async.t_cljs$core$async63233(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63244 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63244 = (function (flag,cb,meta63245){
this.flag = flag;
this.cb = cb;
this.meta63245 = meta63245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63246,meta63245__$1){
var self__ = this;
var _63246__$1 = this;
return (new cljs.core.async.t_cljs$core$async63244(self__.flag,self__.cb,meta63245__$1));
}));

(cljs.core.async.t_cljs$core$async63244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63246){
var self__ = this;
var _63246__$1 = this;
return self__.meta63245;
}));

(cljs.core.async.t_cljs$core$async63244.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async63244.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async63244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta63245","meta63245",-1747238849,null)], null);
}));

(cljs.core.async.t_cljs$core$async63244.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63244");

(cljs.core.async.t_cljs$core$async63244.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63244");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63244.
 */
cljs.core.async.__GT_t_cljs$core$async63244 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async63244(flag__$1,cb__$1,meta63245){
return (new cljs.core.async.t_cljs$core$async63244(flag__$1,cb__$1,meta63245));
});

}

return (new cljs.core.async.t_cljs$core$async63244(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__63251_SHARP_){
var G__63255 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__63251_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__63255) : fret.call(null,G__63255));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__63252_SHARP_){
var G__63257 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__63252_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__63257) : fret.call(null,G__63257));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__65251 = (i + (1));
i = G__65251;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65254 = arguments.length;
var i__4737__auto___65255 = (0);
while(true){
if((i__4737__auto___65255 < len__4736__auto___65254)){
args__4742__auto__.push((arguments[i__4737__auto___65255]));

var G__65256 = (i__4737__auto___65255 + (1));
i__4737__auto___65255 = G__65256;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__63270){
var map__63271 = p__63270;
var map__63271__$1 = (((((!((map__63271 == null))))?(((((map__63271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63271):map__63271);
var opts = map__63271__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq63263){
var G__63264 = cljs.core.first(seq63263);
var seq63263__$1 = cljs.core.next(seq63263);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63264,seq63263__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__63289 = arguments.length;
switch (G__63289) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__55638__auto___65258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_63330){
var state_val_63331 = (state_63330[(1)]);
if((state_val_63331 === (7))){
var inst_63326 = (state_63330[(2)]);
var state_63330__$1 = state_63330;
var statearr_63335_65259 = state_63330__$1;
(statearr_63335_65259[(2)] = inst_63326);

(statearr_63335_65259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63331 === (1))){
var state_63330__$1 = state_63330;
var statearr_63336_65262 = state_63330__$1;
(statearr_63336_65262[(2)] = null);

(statearr_63336_65262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63331 === (4))){
var inst_63308 = (state_63330[(7)]);
var inst_63308__$1 = (state_63330[(2)]);
var inst_63310 = (inst_63308__$1 == null);
var state_63330__$1 = (function (){var statearr_63337 = state_63330;
(statearr_63337[(7)] = inst_63308__$1);

return statearr_63337;
})();
if(cljs.core.truth_(inst_63310)){
var statearr_63340_65267 = state_63330__$1;
(statearr_63340_65267[(1)] = (5));

} else {
var statearr_63342_65268 = state_63330__$1;
(statearr_63342_65268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63331 === (13))){
var state_63330__$1 = state_63330;
var statearr_63343_65269 = state_63330__$1;
(statearr_63343_65269[(2)] = null);

(statearr_63343_65269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63331 === (6))){
var inst_63308 = (state_63330[(7)]);
var state_63330__$1 = state_63330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63330__$1,(11),to,inst_63308);
} else {
if((state_val_63331 === (3))){
var inst_63328 = (state_63330[(2)]);
var state_63330__$1 = state_63330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63330__$1,inst_63328);
} else {
if((state_val_63331 === (12))){
var state_63330__$1 = state_63330;
var statearr_63346_65271 = state_63330__$1;
(statearr_63346_65271[(2)] = null);

(statearr_63346_65271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63331 === (2))){
var state_63330__$1 = state_63330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63330__$1,(4),from);
} else {
if((state_val_63331 === (11))){
var inst_63319 = (state_63330[(2)]);
var state_63330__$1 = state_63330;
if(cljs.core.truth_(inst_63319)){
var statearr_63347_65276 = state_63330__$1;
(statearr_63347_65276[(1)] = (12));

} else {
var statearr_63348_65277 = state_63330__$1;
(statearr_63348_65277[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63331 === (9))){
var state_63330__$1 = state_63330;
var statearr_63349_65279 = state_63330__$1;
(statearr_63349_65279[(2)] = null);

(statearr_63349_65279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63331 === (5))){
var state_63330__$1 = state_63330;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63350_65282 = state_63330__$1;
(statearr_63350_65282[(1)] = (8));

} else {
var statearr_63351_65283 = state_63330__$1;
(statearr_63351_65283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63331 === (14))){
var inst_63324 = (state_63330[(2)]);
var state_63330__$1 = state_63330;
var statearr_63352_65286 = state_63330__$1;
(statearr_63352_65286[(2)] = inst_63324);

(statearr_63352_65286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63331 === (10))){
var inst_63316 = (state_63330[(2)]);
var state_63330__$1 = state_63330;
var statearr_63353_65288 = state_63330__$1;
(statearr_63353_65288[(2)] = inst_63316);

(statearr_63353_65288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63331 === (8))){
var inst_63313 = cljs.core.async.close_BANG_(to);
var state_63330__$1 = state_63330;
var statearr_63354_65289 = state_63330__$1;
(statearr_63354_65289[(2)] = inst_63313);

(statearr_63354_65289[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__55616__auto__ = null;
var cljs$core$async$state_machine__55616__auto____0 = (function (){
var statearr_63356 = [null,null,null,null,null,null,null,null];
(statearr_63356[(0)] = cljs$core$async$state_machine__55616__auto__);

(statearr_63356[(1)] = (1));

return statearr_63356;
});
var cljs$core$async$state_machine__55616__auto____1 = (function (state_63330){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_63330);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e63357){var ex__55619__auto__ = e63357;
var statearr_63358_65293 = state_63330;
(statearr_63358_65293[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_63330[(4)]))){
var statearr_63362_65294 = state_63330;
(statearr_63362_65294[(1)] = cljs.core.first((state_63330[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65295 = state_63330;
state_63330 = G__65295;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$state_machine__55616__auto__ = function(state_63330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55616__auto____1.call(this,state_63330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55616__auto____0;
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55616__auto____1;
return cljs$core$async$state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_63366 = f__55639__auto__();
(statearr_63366[(6)] = c__55638__auto___65258);

return statearr_63366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__63379){
var vec__63380 = p__63379;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63380,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63380,(1),null);
var job = vec__63380;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__55638__auto___65304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_63389){
var state_val_63390 = (state_63389[(1)]);
if((state_val_63390 === (1))){
var state_63389__$1 = state_63389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63389__$1,(2),res,v);
} else {
if((state_val_63390 === (2))){
var inst_63385 = (state_63389[(2)]);
var inst_63386 = cljs.core.async.close_BANG_(res);
var state_63389__$1 = (function (){var statearr_63394 = state_63389;
(statearr_63394[(7)] = inst_63385);

return statearr_63394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63389__$1,inst_63386);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____0 = (function (){
var statearr_63395 = [null,null,null,null,null,null,null,null];
(statearr_63395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__);

(statearr_63395[(1)] = (1));

return statearr_63395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____1 = (function (state_63389){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_63389);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e63398){var ex__55619__auto__ = e63398;
var statearr_63399_65305 = state_63389;
(statearr_63399_65305[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_63389[(4)]))){
var statearr_63401_65306 = state_63389;
(statearr_63401_65306[(1)] = cljs.core.first((state_63389[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65308 = state_63389;
state_63389 = G__65308;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__ = function(state_63389){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____1.call(this,state_63389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_63403 = f__55639__auto__();
(statearr_63403[(6)] = c__55638__auto___65304);

return statearr_63403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__63406){
var vec__63407 = p__63406;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63407,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63407,(1),null);
var job = vec__63407;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___65315 = n;
var __65316 = (0);
while(true){
if((__65316 < n__4613__auto___65315)){
var G__63413_65318 = type;
var G__63413_65319__$1 = (((G__63413_65318 instanceof cljs.core.Keyword))?G__63413_65318.fqn:null);
switch (G__63413_65319__$1) {
case "compute":
var c__55638__auto___65322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__65316,c__55638__auto___65322,G__63413_65318,G__63413_65319__$1,n__4613__auto___65315,jobs,results,process,async){
return (function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = ((function (__65316,c__55638__auto___65322,G__63413_65318,G__63413_65319__$1,n__4613__auto___65315,jobs,results,process,async){
return (function (state_63427){
var state_val_63428 = (state_63427[(1)]);
if((state_val_63428 === (1))){
var state_63427__$1 = state_63427;
var statearr_63429_65323 = state_63427__$1;
(statearr_63429_65323[(2)] = null);

(statearr_63429_65323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63428 === (2))){
var state_63427__$1 = state_63427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63427__$1,(4),jobs);
} else {
if((state_val_63428 === (3))){
var inst_63425 = (state_63427[(2)]);
var state_63427__$1 = state_63427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63427__$1,inst_63425);
} else {
if((state_val_63428 === (4))){
var inst_63417 = (state_63427[(2)]);
var inst_63418 = process(inst_63417);
var state_63427__$1 = state_63427;
if(cljs.core.truth_(inst_63418)){
var statearr_63432_65324 = state_63427__$1;
(statearr_63432_65324[(1)] = (5));

} else {
var statearr_63433_65325 = state_63427__$1;
(statearr_63433_65325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63428 === (5))){
var state_63427__$1 = state_63427;
var statearr_63438_65327 = state_63427__$1;
(statearr_63438_65327[(2)] = null);

(statearr_63438_65327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63428 === (6))){
var state_63427__$1 = state_63427;
var statearr_63442_65331 = state_63427__$1;
(statearr_63442_65331[(2)] = null);

(statearr_63442_65331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63428 === (7))){
var inst_63423 = (state_63427[(2)]);
var state_63427__$1 = state_63427;
var statearr_63443_65335 = state_63427__$1;
(statearr_63443_65335[(2)] = inst_63423);

(statearr_63443_65335[(1)] = (3));


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
});})(__65316,c__55638__auto___65322,G__63413_65318,G__63413_65319__$1,n__4613__auto___65315,jobs,results,process,async))
;
return ((function (__65316,switch__55615__auto__,c__55638__auto___65322,G__63413_65318,G__63413_65319__$1,n__4613__auto___65315,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____0 = (function (){
var statearr_63444 = [null,null,null,null,null,null,null];
(statearr_63444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__);

(statearr_63444[(1)] = (1));

return statearr_63444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____1 = (function (state_63427){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_63427);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e63445){var ex__55619__auto__ = e63445;
var statearr_63446_65352 = state_63427;
(statearr_63446_65352[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_63427[(4)]))){
var statearr_63447_65353 = state_63427;
(statearr_63447_65353[(1)] = cljs.core.first((state_63427[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65355 = state_63427;
state_63427 = G__65355;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__ = function(state_63427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____1.call(this,state_63427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__;
})()
;})(__65316,switch__55615__auto__,c__55638__auto___65322,G__63413_65318,G__63413_65319__$1,n__4613__auto___65315,jobs,results,process,async))
})();
var state__55640__auto__ = (function (){var statearr_63448 = f__55639__auto__();
(statearr_63448[(6)] = c__55638__auto___65322);

return statearr_63448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
});})(__65316,c__55638__auto___65322,G__63413_65318,G__63413_65319__$1,n__4613__auto___65315,jobs,results,process,async))
);


break;
case "async":
var c__55638__auto___65356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__65316,c__55638__auto___65356,G__63413_65318,G__63413_65319__$1,n__4613__auto___65315,jobs,results,process,async){
return (function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = ((function (__65316,c__55638__auto___65356,G__63413_65318,G__63413_65319__$1,n__4613__auto___65315,jobs,results,process,async){
return (function (state_63461){
var state_val_63462 = (state_63461[(1)]);
if((state_val_63462 === (1))){
var state_63461__$1 = state_63461;
var statearr_63463_65359 = state_63461__$1;
(statearr_63463_65359[(2)] = null);

(statearr_63463_65359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63462 === (2))){
var state_63461__$1 = state_63461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63461__$1,(4),jobs);
} else {
if((state_val_63462 === (3))){
var inst_63459 = (state_63461[(2)]);
var state_63461__$1 = state_63461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63461__$1,inst_63459);
} else {
if((state_val_63462 === (4))){
var inst_63451 = (state_63461[(2)]);
var inst_63452 = async(inst_63451);
var state_63461__$1 = state_63461;
if(cljs.core.truth_(inst_63452)){
var statearr_63466_65362 = state_63461__$1;
(statearr_63466_65362[(1)] = (5));

} else {
var statearr_63467_65364 = state_63461__$1;
(statearr_63467_65364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63462 === (5))){
var state_63461__$1 = state_63461;
var statearr_63469_65366 = state_63461__$1;
(statearr_63469_65366[(2)] = null);

(statearr_63469_65366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63462 === (6))){
var state_63461__$1 = state_63461;
var statearr_63470_65368 = state_63461__$1;
(statearr_63470_65368[(2)] = null);

(statearr_63470_65368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63462 === (7))){
var inst_63457 = (state_63461[(2)]);
var state_63461__$1 = state_63461;
var statearr_63471_65371 = state_63461__$1;
(statearr_63471_65371[(2)] = inst_63457);

(statearr_63471_65371[(1)] = (3));


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
});})(__65316,c__55638__auto___65356,G__63413_65318,G__63413_65319__$1,n__4613__auto___65315,jobs,results,process,async))
;
return ((function (__65316,switch__55615__auto__,c__55638__auto___65356,G__63413_65318,G__63413_65319__$1,n__4613__auto___65315,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____0 = (function (){
var statearr_63472 = [null,null,null,null,null,null,null];
(statearr_63472[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__);

(statearr_63472[(1)] = (1));

return statearr_63472;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____1 = (function (state_63461){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_63461);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e63473){var ex__55619__auto__ = e63473;
var statearr_63474_65377 = state_63461;
(statearr_63474_65377[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_63461[(4)]))){
var statearr_63475_65378 = state_63461;
(statearr_63475_65378[(1)] = cljs.core.first((state_63461[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65381 = state_63461;
state_63461 = G__65381;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__ = function(state_63461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____1.call(this,state_63461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__;
})()
;})(__65316,switch__55615__auto__,c__55638__auto___65356,G__63413_65318,G__63413_65319__$1,n__4613__auto___65315,jobs,results,process,async))
})();
var state__55640__auto__ = (function (){var statearr_63476 = f__55639__auto__();
(statearr_63476[(6)] = c__55638__auto___65356);

return statearr_63476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
});})(__65316,c__55638__auto___65356,G__63413_65318,G__63413_65319__$1,n__4613__auto___65315,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63413_65319__$1)].join('')));

}

var G__65386 = (__65316 + (1));
__65316 = G__65386;
continue;
} else {
}
break;
}

var c__55638__auto___65387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_63501){
var state_val_63502 = (state_63501[(1)]);
if((state_val_63502 === (7))){
var inst_63497 = (state_63501[(2)]);
var state_63501__$1 = state_63501;
var statearr_63503_65391 = state_63501__$1;
(statearr_63503_65391[(2)] = inst_63497);

(statearr_63503_65391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63502 === (1))){
var state_63501__$1 = state_63501;
var statearr_63504_65393 = state_63501__$1;
(statearr_63504_65393[(2)] = null);

(statearr_63504_65393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63502 === (4))){
var inst_63481 = (state_63501[(7)]);
var inst_63481__$1 = (state_63501[(2)]);
var inst_63482 = (inst_63481__$1 == null);
var state_63501__$1 = (function (){var statearr_63505 = state_63501;
(statearr_63505[(7)] = inst_63481__$1);

return statearr_63505;
})();
if(cljs.core.truth_(inst_63482)){
var statearr_63506_65394 = state_63501__$1;
(statearr_63506_65394[(1)] = (5));

} else {
var statearr_63507_65395 = state_63501__$1;
(statearr_63507_65395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63502 === (6))){
var inst_63487 = (state_63501[(8)]);
var inst_63481 = (state_63501[(7)]);
var inst_63487__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_63488 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63489 = [inst_63481,inst_63487__$1];
var inst_63490 = (new cljs.core.PersistentVector(null,2,(5),inst_63488,inst_63489,null));
var state_63501__$1 = (function (){var statearr_63508 = state_63501;
(statearr_63508[(8)] = inst_63487__$1);

return statearr_63508;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63501__$1,(8),jobs,inst_63490);
} else {
if((state_val_63502 === (3))){
var inst_63499 = (state_63501[(2)]);
var state_63501__$1 = state_63501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63501__$1,inst_63499);
} else {
if((state_val_63502 === (2))){
var state_63501__$1 = state_63501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63501__$1,(4),from);
} else {
if((state_val_63502 === (9))){
var inst_63494 = (state_63501[(2)]);
var state_63501__$1 = (function (){var statearr_63511 = state_63501;
(statearr_63511[(9)] = inst_63494);

return statearr_63511;
})();
var statearr_63513_65398 = state_63501__$1;
(statearr_63513_65398[(2)] = null);

(statearr_63513_65398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63502 === (5))){
var inst_63485 = cljs.core.async.close_BANG_(jobs);
var state_63501__$1 = state_63501;
var statearr_63514_65399 = state_63501__$1;
(statearr_63514_65399[(2)] = inst_63485);

(statearr_63514_65399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63502 === (8))){
var inst_63487 = (state_63501[(8)]);
var inst_63492 = (state_63501[(2)]);
var state_63501__$1 = (function (){var statearr_63515 = state_63501;
(statearr_63515[(10)] = inst_63492);

return statearr_63515;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63501__$1,(9),results,inst_63487);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____0 = (function (){
var statearr_63516 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__);

(statearr_63516[(1)] = (1));

return statearr_63516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____1 = (function (state_63501){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_63501);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e63517){var ex__55619__auto__ = e63517;
var statearr_63518_65403 = state_63501;
(statearr_63518_65403[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_63501[(4)]))){
var statearr_63519_65406 = state_63501;
(statearr_63519_65406[(1)] = cljs.core.first((state_63501[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65407 = state_63501;
state_63501 = G__65407;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__ = function(state_63501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____1.call(this,state_63501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_63520 = f__55639__auto__();
(statearr_63520[(6)] = c__55638__auto___65387);

return statearr_63520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));


var c__55638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_63559){
var state_val_63560 = (state_63559[(1)]);
if((state_val_63560 === (7))){
var inst_63555 = (state_63559[(2)]);
var state_63559__$1 = state_63559;
var statearr_63563_65410 = state_63559__$1;
(statearr_63563_65410[(2)] = inst_63555);

(statearr_63563_65410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63560 === (20))){
var state_63559__$1 = state_63559;
var statearr_63564_65412 = state_63559__$1;
(statearr_63564_65412[(2)] = null);

(statearr_63564_65412[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63560 === (1))){
var state_63559__$1 = state_63559;
var statearr_63565_65413 = state_63559__$1;
(statearr_63565_65413[(2)] = null);

(statearr_63565_65413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63560 === (4))){
var inst_63523 = (state_63559[(7)]);
var inst_63523__$1 = (state_63559[(2)]);
var inst_63524 = (inst_63523__$1 == null);
var state_63559__$1 = (function (){var statearr_63566 = state_63559;
(statearr_63566[(7)] = inst_63523__$1);

return statearr_63566;
})();
if(cljs.core.truth_(inst_63524)){
var statearr_63567_65414 = state_63559__$1;
(statearr_63567_65414[(1)] = (5));

} else {
var statearr_63568_65415 = state_63559__$1;
(statearr_63568_65415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63560 === (15))){
var inst_63536 = (state_63559[(8)]);
var state_63559__$1 = state_63559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63559__$1,(18),to,inst_63536);
} else {
if((state_val_63560 === (21))){
var inst_63550 = (state_63559[(2)]);
var state_63559__$1 = state_63559;
var statearr_63572_65416 = state_63559__$1;
(statearr_63572_65416[(2)] = inst_63550);

(statearr_63572_65416[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63560 === (13))){
var inst_63552 = (state_63559[(2)]);
var state_63559__$1 = (function (){var statearr_63573 = state_63559;
(statearr_63573[(9)] = inst_63552);

return statearr_63573;
})();
var statearr_63574_65419 = state_63559__$1;
(statearr_63574_65419[(2)] = null);

(statearr_63574_65419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63560 === (6))){
var inst_63523 = (state_63559[(7)]);
var state_63559__$1 = state_63559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63559__$1,(11),inst_63523);
} else {
if((state_val_63560 === (17))){
var inst_63545 = (state_63559[(2)]);
var state_63559__$1 = state_63559;
if(cljs.core.truth_(inst_63545)){
var statearr_63575_65420 = state_63559__$1;
(statearr_63575_65420[(1)] = (19));

} else {
var statearr_63576_65421 = state_63559__$1;
(statearr_63576_65421[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63560 === (3))){
var inst_63557 = (state_63559[(2)]);
var state_63559__$1 = state_63559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63559__$1,inst_63557);
} else {
if((state_val_63560 === (12))){
var inst_63533 = (state_63559[(10)]);
var state_63559__$1 = state_63559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63559__$1,(14),inst_63533);
} else {
if((state_val_63560 === (2))){
var state_63559__$1 = state_63559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63559__$1,(4),results);
} else {
if((state_val_63560 === (19))){
var state_63559__$1 = state_63559;
var statearr_63578_65422 = state_63559__$1;
(statearr_63578_65422[(2)] = null);

(statearr_63578_65422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63560 === (11))){
var inst_63533 = (state_63559[(2)]);
var state_63559__$1 = (function (){var statearr_63580 = state_63559;
(statearr_63580[(10)] = inst_63533);

return statearr_63580;
})();
var statearr_63581_65423 = state_63559__$1;
(statearr_63581_65423[(2)] = null);

(statearr_63581_65423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63560 === (9))){
var state_63559__$1 = state_63559;
var statearr_63584_65428 = state_63559__$1;
(statearr_63584_65428[(2)] = null);

(statearr_63584_65428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63560 === (5))){
var state_63559__$1 = state_63559;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63588_65429 = state_63559__$1;
(statearr_63588_65429[(1)] = (8));

} else {
var statearr_63589_65430 = state_63559__$1;
(statearr_63589_65430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63560 === (14))){
var inst_63536 = (state_63559[(8)]);
var inst_63536__$1 = (state_63559[(2)]);
var inst_63538 = (inst_63536__$1 == null);
var inst_63539 = cljs.core.not(inst_63538);
var state_63559__$1 = (function (){var statearr_63594 = state_63559;
(statearr_63594[(8)] = inst_63536__$1);

return statearr_63594;
})();
if(inst_63539){
var statearr_63599_65431 = state_63559__$1;
(statearr_63599_65431[(1)] = (15));

} else {
var statearr_63600_65432 = state_63559__$1;
(statearr_63600_65432[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63560 === (16))){
var state_63559__$1 = state_63559;
var statearr_63601_65436 = state_63559__$1;
(statearr_63601_65436[(2)] = false);

(statearr_63601_65436[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63560 === (10))){
var inst_63530 = (state_63559[(2)]);
var state_63559__$1 = state_63559;
var statearr_63602_65437 = state_63559__$1;
(statearr_63602_65437[(2)] = inst_63530);

(statearr_63602_65437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63560 === (18))){
var inst_63542 = (state_63559[(2)]);
var state_63559__$1 = state_63559;
var statearr_63603_65438 = state_63559__$1;
(statearr_63603_65438[(2)] = inst_63542);

(statearr_63603_65438[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63560 === (8))){
var inst_63527 = cljs.core.async.close_BANG_(to);
var state_63559__$1 = state_63559;
var statearr_63604_65439 = state_63559__$1;
(statearr_63604_65439[(2)] = inst_63527);

(statearr_63604_65439[(1)] = (10));


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
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____0 = (function (){
var statearr_63605 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63605[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__);

(statearr_63605[(1)] = (1));

return statearr_63605;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____1 = (function (state_63559){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_63559);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e63606){var ex__55619__auto__ = e63606;
var statearr_63607_65443 = state_63559;
(statearr_63607_65443[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_63559[(4)]))){
var statearr_63608_65444 = state_63559;
(statearr_63608_65444[(1)] = cljs.core.first((state_63559[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65445 = state_63559;
state_63559 = G__65445;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__ = function(state_63559){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____1.call(this,state_63559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_63609 = f__55639__auto__();
(statearr_63609[(6)] = c__55638__auto__);

return statearr_63609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));

return c__55638__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__63613 = arguments.length;
switch (G__63613) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__63622 = arguments.length;
switch (G__63622) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__63631 = arguments.length;
switch (G__63631) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__55638__auto___65509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_63664){
var state_val_63665 = (state_63664[(1)]);
if((state_val_63665 === (7))){
var inst_63658 = (state_63664[(2)]);
var state_63664__$1 = state_63664;
var statearr_63670_65510 = state_63664__$1;
(statearr_63670_65510[(2)] = inst_63658);

(statearr_63670_65510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63665 === (1))){
var state_63664__$1 = state_63664;
var statearr_63671_65512 = state_63664__$1;
(statearr_63671_65512[(2)] = null);

(statearr_63671_65512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63665 === (4))){
var inst_63637 = (state_63664[(7)]);
var inst_63637__$1 = (state_63664[(2)]);
var inst_63638 = (inst_63637__$1 == null);
var state_63664__$1 = (function (){var statearr_63672 = state_63664;
(statearr_63672[(7)] = inst_63637__$1);

return statearr_63672;
})();
if(cljs.core.truth_(inst_63638)){
var statearr_63673_65514 = state_63664__$1;
(statearr_63673_65514[(1)] = (5));

} else {
var statearr_63674_65515 = state_63664__$1;
(statearr_63674_65515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63665 === (13))){
var state_63664__$1 = state_63664;
var statearr_63675_65516 = state_63664__$1;
(statearr_63675_65516[(2)] = null);

(statearr_63675_65516[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63665 === (6))){
var inst_63637 = (state_63664[(7)]);
var inst_63645 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_63637) : p.call(null,inst_63637));
var state_63664__$1 = state_63664;
if(cljs.core.truth_(inst_63645)){
var statearr_63677_65540 = state_63664__$1;
(statearr_63677_65540[(1)] = (9));

} else {
var statearr_63678_65541 = state_63664__$1;
(statearr_63678_65541[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63665 === (3))){
var inst_63661 = (state_63664[(2)]);
var state_63664__$1 = state_63664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63664__$1,inst_63661);
} else {
if((state_val_63665 === (12))){
var state_63664__$1 = state_63664;
var statearr_63701_65542 = state_63664__$1;
(statearr_63701_65542[(2)] = null);

(statearr_63701_65542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63665 === (2))){
var state_63664__$1 = state_63664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63664__$1,(4),ch);
} else {
if((state_val_63665 === (11))){
var inst_63637 = (state_63664[(7)]);
var inst_63649 = (state_63664[(2)]);
var state_63664__$1 = state_63664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63664__$1,(8),inst_63649,inst_63637);
} else {
if((state_val_63665 === (9))){
var state_63664__$1 = state_63664;
var statearr_63702_65543 = state_63664__$1;
(statearr_63702_65543[(2)] = tc);

(statearr_63702_65543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63665 === (5))){
var inst_63640 = cljs.core.async.close_BANG_(tc);
var inst_63641 = cljs.core.async.close_BANG_(fc);
var state_63664__$1 = (function (){var statearr_63703 = state_63664;
(statearr_63703[(8)] = inst_63640);

return statearr_63703;
})();
var statearr_63704_65544 = state_63664__$1;
(statearr_63704_65544[(2)] = inst_63641);

(statearr_63704_65544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63665 === (14))){
var inst_63656 = (state_63664[(2)]);
var state_63664__$1 = state_63664;
var statearr_63705_65545 = state_63664__$1;
(statearr_63705_65545[(2)] = inst_63656);

(statearr_63705_65545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63665 === (10))){
var state_63664__$1 = state_63664;
var statearr_63706_65546 = state_63664__$1;
(statearr_63706_65546[(2)] = fc);

(statearr_63706_65546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63665 === (8))){
var inst_63651 = (state_63664[(2)]);
var state_63664__$1 = state_63664;
if(cljs.core.truth_(inst_63651)){
var statearr_63707_65547 = state_63664__$1;
(statearr_63707_65547[(1)] = (12));

} else {
var statearr_63708_65548 = state_63664__$1;
(statearr_63708_65548[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__55616__auto__ = null;
var cljs$core$async$state_machine__55616__auto____0 = (function (){
var statearr_63709 = [null,null,null,null,null,null,null,null,null];
(statearr_63709[(0)] = cljs$core$async$state_machine__55616__auto__);

(statearr_63709[(1)] = (1));

return statearr_63709;
});
var cljs$core$async$state_machine__55616__auto____1 = (function (state_63664){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_63664);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e63710){var ex__55619__auto__ = e63710;
var statearr_63711_65549 = state_63664;
(statearr_63711_65549[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_63664[(4)]))){
var statearr_63712_65550 = state_63664;
(statearr_63712_65550[(1)] = cljs.core.first((state_63664[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65551 = state_63664;
state_63664 = G__65551;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$state_machine__55616__auto__ = function(state_63664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55616__auto____1.call(this,state_63664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55616__auto____0;
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55616__auto____1;
return cljs$core$async$state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_63713 = f__55639__auto__();
(statearr_63713[(6)] = c__55638__auto___65509);

return statearr_63713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__55638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_63735){
var state_val_63736 = (state_63735[(1)]);
if((state_val_63736 === (7))){
var inst_63731 = (state_63735[(2)]);
var state_63735__$1 = state_63735;
var statearr_63737_65556 = state_63735__$1;
(statearr_63737_65556[(2)] = inst_63731);

(statearr_63737_65556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63736 === (1))){
var inst_63714 = init;
var inst_63715 = inst_63714;
var state_63735__$1 = (function (){var statearr_63738 = state_63735;
(statearr_63738[(7)] = inst_63715);

return statearr_63738;
})();
var statearr_63739_65582 = state_63735__$1;
(statearr_63739_65582[(2)] = null);

(statearr_63739_65582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63736 === (4))){
var inst_63718 = (state_63735[(8)]);
var inst_63718__$1 = (state_63735[(2)]);
var inst_63719 = (inst_63718__$1 == null);
var state_63735__$1 = (function (){var statearr_63740 = state_63735;
(statearr_63740[(8)] = inst_63718__$1);

return statearr_63740;
})();
if(cljs.core.truth_(inst_63719)){
var statearr_63741_65584 = state_63735__$1;
(statearr_63741_65584[(1)] = (5));

} else {
var statearr_63742_65585 = state_63735__$1;
(statearr_63742_65585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63736 === (6))){
var inst_63722 = (state_63735[(9)]);
var inst_63718 = (state_63735[(8)]);
var inst_63715 = (state_63735[(7)]);
var inst_63722__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_63715,inst_63718) : f.call(null,inst_63715,inst_63718));
var inst_63723 = cljs.core.reduced_QMARK_(inst_63722__$1);
var state_63735__$1 = (function (){var statearr_63743 = state_63735;
(statearr_63743[(9)] = inst_63722__$1);

return statearr_63743;
})();
if(inst_63723){
var statearr_63744_65592 = state_63735__$1;
(statearr_63744_65592[(1)] = (8));

} else {
var statearr_63745_65596 = state_63735__$1;
(statearr_63745_65596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63736 === (3))){
var inst_63733 = (state_63735[(2)]);
var state_63735__$1 = state_63735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63735__$1,inst_63733);
} else {
if((state_val_63736 === (2))){
var state_63735__$1 = state_63735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63735__$1,(4),ch);
} else {
if((state_val_63736 === (9))){
var inst_63722 = (state_63735[(9)]);
var inst_63715 = inst_63722;
var state_63735__$1 = (function (){var statearr_63750 = state_63735;
(statearr_63750[(7)] = inst_63715);

return statearr_63750;
})();
var statearr_63752_65597 = state_63735__$1;
(statearr_63752_65597[(2)] = null);

(statearr_63752_65597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63736 === (5))){
var inst_63715 = (state_63735[(7)]);
var state_63735__$1 = state_63735;
var statearr_63755_65601 = state_63735__$1;
(statearr_63755_65601[(2)] = inst_63715);

(statearr_63755_65601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63736 === (10))){
var inst_63729 = (state_63735[(2)]);
var state_63735__$1 = state_63735;
var statearr_63757_65602 = state_63735__$1;
(statearr_63757_65602[(2)] = inst_63729);

(statearr_63757_65602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63736 === (8))){
var inst_63722 = (state_63735[(9)]);
var inst_63725 = cljs.core.deref(inst_63722);
var state_63735__$1 = state_63735;
var statearr_63760_65603 = state_63735__$1;
(statearr_63760_65603[(2)] = inst_63725);

(statearr_63760_65603[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__55616__auto__ = null;
var cljs$core$async$reduce_$_state_machine__55616__auto____0 = (function (){
var statearr_63761 = [null,null,null,null,null,null,null,null,null,null];
(statearr_63761[(0)] = cljs$core$async$reduce_$_state_machine__55616__auto__);

(statearr_63761[(1)] = (1));

return statearr_63761;
});
var cljs$core$async$reduce_$_state_machine__55616__auto____1 = (function (state_63735){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_63735);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e63762){var ex__55619__auto__ = e63762;
var statearr_63763_65606 = state_63735;
(statearr_63763_65606[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_63735[(4)]))){
var statearr_63764_65612 = state_63735;
(statearr_63764_65612[(1)] = cljs.core.first((state_63735[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65664 = state_63735;
state_63735 = G__65664;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__55616__auto__ = function(state_63735){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__55616__auto____1.call(this,state_63735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__55616__auto____0;
cljs$core$async$reduce_$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__55616__auto____1;
return cljs$core$async$reduce_$_state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_63765 = f__55639__auto__();
(statearr_63765[(6)] = c__55638__auto__);

return statearr_63765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));

return c__55638__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__55638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_63777){
var state_val_63778 = (state_63777[(1)]);
if((state_val_63778 === (1))){
var inst_63772 = cljs.core.async.reduce(f__$1,init,ch);
var state_63777__$1 = state_63777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63777__$1,(2),inst_63772);
} else {
if((state_val_63778 === (2))){
var inst_63774 = (state_63777[(2)]);
var inst_63775 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_63774) : f__$1.call(null,inst_63774));
var state_63777__$1 = state_63777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63777__$1,inst_63775);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__55616__auto__ = null;
var cljs$core$async$transduce_$_state_machine__55616__auto____0 = (function (){
var statearr_63783 = [null,null,null,null,null,null,null];
(statearr_63783[(0)] = cljs$core$async$transduce_$_state_machine__55616__auto__);

(statearr_63783[(1)] = (1));

return statearr_63783;
});
var cljs$core$async$transduce_$_state_machine__55616__auto____1 = (function (state_63777){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_63777);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e63784){var ex__55619__auto__ = e63784;
var statearr_63785_65675 = state_63777;
(statearr_63785_65675[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_63777[(4)]))){
var statearr_63786_65676 = state_63777;
(statearr_63786_65676[(1)] = cljs.core.first((state_63777[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65678 = state_63777;
state_63777 = G__65678;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__55616__auto__ = function(state_63777){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__55616__auto____1.call(this,state_63777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__55616__auto____0;
cljs$core$async$transduce_$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__55616__auto____1;
return cljs$core$async$transduce_$_state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_63791 = f__55639__auto__();
(statearr_63791[(6)] = c__55638__auto__);

return statearr_63791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));

return c__55638__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__63793 = arguments.length;
switch (G__63793) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__55638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_63821){
var state_val_63822 = (state_63821[(1)]);
if((state_val_63822 === (7))){
var inst_63800 = (state_63821[(2)]);
var state_63821__$1 = state_63821;
var statearr_63823_65684 = state_63821__$1;
(statearr_63823_65684[(2)] = inst_63800);

(statearr_63823_65684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (1))){
var inst_63794 = cljs.core.seq(coll);
var inst_63795 = inst_63794;
var state_63821__$1 = (function (){var statearr_63824 = state_63821;
(statearr_63824[(7)] = inst_63795);

return statearr_63824;
})();
var statearr_63825_65686 = state_63821__$1;
(statearr_63825_65686[(2)] = null);

(statearr_63825_65686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (4))){
var inst_63795 = (state_63821[(7)]);
var inst_63798 = cljs.core.first(inst_63795);
var state_63821__$1 = state_63821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63821__$1,(7),ch,inst_63798);
} else {
if((state_val_63822 === (13))){
var inst_63815 = (state_63821[(2)]);
var state_63821__$1 = state_63821;
var statearr_63829_65690 = state_63821__$1;
(statearr_63829_65690[(2)] = inst_63815);

(statearr_63829_65690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (6))){
var inst_63805 = (state_63821[(2)]);
var state_63821__$1 = state_63821;
if(cljs.core.truth_(inst_63805)){
var statearr_63830_65691 = state_63821__$1;
(statearr_63830_65691[(1)] = (8));

} else {
var statearr_63831_65692 = state_63821__$1;
(statearr_63831_65692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (3))){
var inst_63819 = (state_63821[(2)]);
var state_63821__$1 = state_63821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63821__$1,inst_63819);
} else {
if((state_val_63822 === (12))){
var state_63821__$1 = state_63821;
var statearr_63832_65694 = state_63821__$1;
(statearr_63832_65694[(2)] = null);

(statearr_63832_65694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (2))){
var inst_63795 = (state_63821[(7)]);
var state_63821__$1 = state_63821;
if(cljs.core.truth_(inst_63795)){
var statearr_63833_65696 = state_63821__$1;
(statearr_63833_65696[(1)] = (4));

} else {
var statearr_63834_65697 = state_63821__$1;
(statearr_63834_65697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (11))){
var inst_63812 = cljs.core.async.close_BANG_(ch);
var state_63821__$1 = state_63821;
var statearr_63835_65698 = state_63821__$1;
(statearr_63835_65698[(2)] = inst_63812);

(statearr_63835_65698[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (9))){
var state_63821__$1 = state_63821;
if(cljs.core.truth_(close_QMARK_)){
var statearr_63836_65708 = state_63821__$1;
(statearr_63836_65708[(1)] = (11));

} else {
var statearr_63837_65709 = state_63821__$1;
(statearr_63837_65709[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (5))){
var inst_63795 = (state_63821[(7)]);
var state_63821__$1 = state_63821;
var statearr_63838_65710 = state_63821__$1;
(statearr_63838_65710[(2)] = inst_63795);

(statearr_63838_65710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (10))){
var inst_63817 = (state_63821[(2)]);
var state_63821__$1 = state_63821;
var statearr_63840_65711 = state_63821__$1;
(statearr_63840_65711[(2)] = inst_63817);

(statearr_63840_65711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63822 === (8))){
var inst_63795 = (state_63821[(7)]);
var inst_63808 = cljs.core.next(inst_63795);
var inst_63795__$1 = inst_63808;
var state_63821__$1 = (function (){var statearr_63841 = state_63821;
(statearr_63841[(7)] = inst_63795__$1);

return statearr_63841;
})();
var statearr_63842_65713 = state_63821__$1;
(statearr_63842_65713[(2)] = null);

(statearr_63842_65713[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__55616__auto__ = null;
var cljs$core$async$state_machine__55616__auto____0 = (function (){
var statearr_63843 = [null,null,null,null,null,null,null,null];
(statearr_63843[(0)] = cljs$core$async$state_machine__55616__auto__);

(statearr_63843[(1)] = (1));

return statearr_63843;
});
var cljs$core$async$state_machine__55616__auto____1 = (function (state_63821){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_63821);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e63844){var ex__55619__auto__ = e63844;
var statearr_63845_65717 = state_63821;
(statearr_63845_65717[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_63821[(4)]))){
var statearr_63846_65720 = state_63821;
(statearr_63846_65720[(1)] = cljs.core.first((state_63821[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65722 = state_63821;
state_63821 = G__65722;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$state_machine__55616__auto__ = function(state_63821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55616__auto____1.call(this,state_63821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55616__auto____0;
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55616__auto____1;
return cljs$core$async$state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_63850 = f__55639__auto__();
(statearr_63850[(6)] = c__55638__auto__);

return statearr_63850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));

return c__55638__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__63853 = arguments.length;
switch (G__63853) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_65749 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_65749(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_65750 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_65750(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_65754 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_65754(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_65757 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_65757(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63873 = (function (ch,cs,meta63874){
this.ch = ch;
this.cs = cs;
this.meta63874 = meta63874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63875,meta63874__$1){
var self__ = this;
var _63875__$1 = this;
return (new cljs.core.async.t_cljs$core$async63873(self__.ch,self__.cs,meta63874__$1));
}));

(cljs.core.async.t_cljs$core$async63873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63875){
var self__ = this;
var _63875__$1 = this;
return self__.meta63874;
}));

(cljs.core.async.t_cljs$core$async63873.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63873.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63873.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async63873.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async63873.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async63873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta63874","meta63874",-1045377805,null)], null);
}));

(cljs.core.async.t_cljs$core$async63873.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63873");

(cljs.core.async.t_cljs$core$async63873.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async63873");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63873.
 */
cljs.core.async.__GT_t_cljs$core$async63873 = (function cljs$core$async$mult_$___GT_t_cljs$core$async63873(ch__$1,cs__$1,meta63874){
return (new cljs.core.async.t_cljs$core$async63873(ch__$1,cs__$1,meta63874));
});

}

return (new cljs.core.async.t_cljs$core$async63873(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__55638__auto___65758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_64021){
var state_val_64022 = (state_64021[(1)]);
if((state_val_64022 === (7))){
var inst_64017 = (state_64021[(2)]);
var state_64021__$1 = state_64021;
var statearr_64023_65760 = state_64021__$1;
(statearr_64023_65760[(2)] = inst_64017);

(statearr_64023_65760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (20))){
var inst_63919 = (state_64021[(7)]);
var inst_63931 = cljs.core.first(inst_63919);
var inst_63932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63931,(0),null);
var inst_63933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63931,(1),null);
var state_64021__$1 = (function (){var statearr_64024 = state_64021;
(statearr_64024[(8)] = inst_63932);

return statearr_64024;
})();
if(cljs.core.truth_(inst_63933)){
var statearr_64025_65761 = state_64021__$1;
(statearr_64025_65761[(1)] = (22));

} else {
var statearr_64026_65762 = state_64021__$1;
(statearr_64026_65762[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (27))){
var inst_63961 = (state_64021[(9)]);
var inst_63885 = (state_64021[(10)]);
var inst_63963 = (state_64021[(11)]);
var inst_63968 = (state_64021[(12)]);
var inst_63968__$1 = cljs.core._nth(inst_63961,inst_63963);
var inst_63969 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63968__$1,inst_63885,done);
var state_64021__$1 = (function (){var statearr_64027 = state_64021;
(statearr_64027[(12)] = inst_63968__$1);

return statearr_64027;
})();
if(cljs.core.truth_(inst_63969)){
var statearr_64028_65763 = state_64021__$1;
(statearr_64028_65763[(1)] = (30));

} else {
var statearr_64029_65764 = state_64021__$1;
(statearr_64029_65764[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (1))){
var state_64021__$1 = state_64021;
var statearr_64030_65765 = state_64021__$1;
(statearr_64030_65765[(2)] = null);

(statearr_64030_65765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (24))){
var inst_63919 = (state_64021[(7)]);
var inst_63938 = (state_64021[(2)]);
var inst_63939 = cljs.core.next(inst_63919);
var inst_63894 = inst_63939;
var inst_63895 = null;
var inst_63896 = (0);
var inst_63897 = (0);
var state_64021__$1 = (function (){var statearr_64031 = state_64021;
(statearr_64031[(13)] = inst_63894);

(statearr_64031[(14)] = inst_63938);

(statearr_64031[(15)] = inst_63896);

(statearr_64031[(16)] = inst_63897);

(statearr_64031[(17)] = inst_63895);

return statearr_64031;
})();
var statearr_64032_65766 = state_64021__$1;
(statearr_64032_65766[(2)] = null);

(statearr_64032_65766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (39))){
var state_64021__$1 = state_64021;
var statearr_64036_65767 = state_64021__$1;
(statearr_64036_65767[(2)] = null);

(statearr_64036_65767[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (4))){
var inst_63885 = (state_64021[(10)]);
var inst_63885__$1 = (state_64021[(2)]);
var inst_63886 = (inst_63885__$1 == null);
var state_64021__$1 = (function (){var statearr_64038 = state_64021;
(statearr_64038[(10)] = inst_63885__$1);

return statearr_64038;
})();
if(cljs.core.truth_(inst_63886)){
var statearr_64039_65768 = state_64021__$1;
(statearr_64039_65768[(1)] = (5));

} else {
var statearr_64040_65769 = state_64021__$1;
(statearr_64040_65769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (15))){
var inst_63894 = (state_64021[(13)]);
var inst_63896 = (state_64021[(15)]);
var inst_63897 = (state_64021[(16)]);
var inst_63895 = (state_64021[(17)]);
var inst_63912 = (state_64021[(2)]);
var inst_63913 = (inst_63897 + (1));
var tmp64033 = inst_63894;
var tmp64034 = inst_63896;
var tmp64035 = inst_63895;
var inst_63894__$1 = tmp64033;
var inst_63895__$1 = tmp64035;
var inst_63896__$1 = tmp64034;
var inst_63897__$1 = inst_63913;
var state_64021__$1 = (function (){var statearr_64041 = state_64021;
(statearr_64041[(13)] = inst_63894__$1);

(statearr_64041[(18)] = inst_63912);

(statearr_64041[(15)] = inst_63896__$1);

(statearr_64041[(16)] = inst_63897__$1);

(statearr_64041[(17)] = inst_63895__$1);

return statearr_64041;
})();
var statearr_64042_65770 = state_64021__$1;
(statearr_64042_65770[(2)] = null);

(statearr_64042_65770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (21))){
var inst_63942 = (state_64021[(2)]);
var state_64021__$1 = state_64021;
var statearr_64046_65771 = state_64021__$1;
(statearr_64046_65771[(2)] = inst_63942);

(statearr_64046_65771[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (31))){
var inst_63968 = (state_64021[(12)]);
var inst_63974 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63968);
var state_64021__$1 = state_64021;
var statearr_64047_65772 = state_64021__$1;
(statearr_64047_65772[(2)] = inst_63974);

(statearr_64047_65772[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (32))){
var inst_63962 = (state_64021[(19)]);
var inst_63960 = (state_64021[(20)]);
var inst_63961 = (state_64021[(9)]);
var inst_63963 = (state_64021[(11)]);
var inst_63976 = (state_64021[(2)]);
var inst_63978 = (inst_63963 + (1));
var tmp64043 = inst_63962;
var tmp64044 = inst_63960;
var tmp64045 = inst_63961;
var inst_63960__$1 = tmp64044;
var inst_63961__$1 = tmp64045;
var inst_63962__$1 = tmp64043;
var inst_63963__$1 = inst_63978;
var state_64021__$1 = (function (){var statearr_64048 = state_64021;
(statearr_64048[(19)] = inst_63962__$1);

(statearr_64048[(20)] = inst_63960__$1);

(statearr_64048[(9)] = inst_63961__$1);

(statearr_64048[(21)] = inst_63976);

(statearr_64048[(11)] = inst_63963__$1);

return statearr_64048;
})();
var statearr_64049_65773 = state_64021__$1;
(statearr_64049_65773[(2)] = null);

(statearr_64049_65773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (40))){
var inst_63990 = (state_64021[(22)]);
var inst_63994 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_63990);
var state_64021__$1 = state_64021;
var statearr_64050_65774 = state_64021__$1;
(statearr_64050_65774[(2)] = inst_63994);

(statearr_64050_65774[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (33))){
var inst_63981 = (state_64021[(23)]);
var inst_63983 = cljs.core.chunked_seq_QMARK_(inst_63981);
var state_64021__$1 = state_64021;
if(inst_63983){
var statearr_64051_65775 = state_64021__$1;
(statearr_64051_65775[(1)] = (36));

} else {
var statearr_64052_65776 = state_64021__$1;
(statearr_64052_65776[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (13))){
var inst_63906 = (state_64021[(24)]);
var inst_63909 = cljs.core.async.close_BANG_(inst_63906);
var state_64021__$1 = state_64021;
var statearr_64053_65777 = state_64021__$1;
(statearr_64053_65777[(2)] = inst_63909);

(statearr_64053_65777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (22))){
var inst_63932 = (state_64021[(8)]);
var inst_63935 = cljs.core.async.close_BANG_(inst_63932);
var state_64021__$1 = state_64021;
var statearr_64054_65778 = state_64021__$1;
(statearr_64054_65778[(2)] = inst_63935);

(statearr_64054_65778[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (36))){
var inst_63981 = (state_64021[(23)]);
var inst_63985 = cljs.core.chunk_first(inst_63981);
var inst_63986 = cljs.core.chunk_rest(inst_63981);
var inst_63987 = cljs.core.count(inst_63985);
var inst_63960 = inst_63986;
var inst_63961 = inst_63985;
var inst_63962 = inst_63987;
var inst_63963 = (0);
var state_64021__$1 = (function (){var statearr_64055 = state_64021;
(statearr_64055[(19)] = inst_63962);

(statearr_64055[(20)] = inst_63960);

(statearr_64055[(9)] = inst_63961);

(statearr_64055[(11)] = inst_63963);

return statearr_64055;
})();
var statearr_64056_65779 = state_64021__$1;
(statearr_64056_65779[(2)] = null);

(statearr_64056_65779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (41))){
var inst_63981 = (state_64021[(23)]);
var inst_63996 = (state_64021[(2)]);
var inst_63997 = cljs.core.next(inst_63981);
var inst_63960 = inst_63997;
var inst_63961 = null;
var inst_63962 = (0);
var inst_63963 = (0);
var state_64021__$1 = (function (){var statearr_64057 = state_64021;
(statearr_64057[(25)] = inst_63996);

(statearr_64057[(19)] = inst_63962);

(statearr_64057[(20)] = inst_63960);

(statearr_64057[(9)] = inst_63961);

(statearr_64057[(11)] = inst_63963);

return statearr_64057;
})();
var statearr_64058_65780 = state_64021__$1;
(statearr_64058_65780[(2)] = null);

(statearr_64058_65780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (43))){
var state_64021__$1 = state_64021;
var statearr_64059_65781 = state_64021__$1;
(statearr_64059_65781[(2)] = null);

(statearr_64059_65781[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (29))){
var inst_64005 = (state_64021[(2)]);
var state_64021__$1 = state_64021;
var statearr_64060_65782 = state_64021__$1;
(statearr_64060_65782[(2)] = inst_64005);

(statearr_64060_65782[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (44))){
var inst_64014 = (state_64021[(2)]);
var state_64021__$1 = (function (){var statearr_64061 = state_64021;
(statearr_64061[(26)] = inst_64014);

return statearr_64061;
})();
var statearr_64062_65783 = state_64021__$1;
(statearr_64062_65783[(2)] = null);

(statearr_64062_65783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (6))){
var inst_63952 = (state_64021[(27)]);
var inst_63951 = cljs.core.deref(cs);
var inst_63952__$1 = cljs.core.keys(inst_63951);
var inst_63953 = cljs.core.count(inst_63952__$1);
var inst_63954 = cljs.core.reset_BANG_(dctr,inst_63953);
var inst_63959 = cljs.core.seq(inst_63952__$1);
var inst_63960 = inst_63959;
var inst_63961 = null;
var inst_63962 = (0);
var inst_63963 = (0);
var state_64021__$1 = (function (){var statearr_64063 = state_64021;
(statearr_64063[(27)] = inst_63952__$1);

(statearr_64063[(19)] = inst_63962);

(statearr_64063[(28)] = inst_63954);

(statearr_64063[(20)] = inst_63960);

(statearr_64063[(9)] = inst_63961);

(statearr_64063[(11)] = inst_63963);

return statearr_64063;
})();
var statearr_64064_65784 = state_64021__$1;
(statearr_64064_65784[(2)] = null);

(statearr_64064_65784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (28))){
var inst_63981 = (state_64021[(23)]);
var inst_63960 = (state_64021[(20)]);
var inst_63981__$1 = cljs.core.seq(inst_63960);
var state_64021__$1 = (function (){var statearr_64065 = state_64021;
(statearr_64065[(23)] = inst_63981__$1);

return statearr_64065;
})();
if(inst_63981__$1){
var statearr_64066_65785 = state_64021__$1;
(statearr_64066_65785[(1)] = (33));

} else {
var statearr_64067_65786 = state_64021__$1;
(statearr_64067_65786[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (25))){
var inst_63962 = (state_64021[(19)]);
var inst_63963 = (state_64021[(11)]);
var inst_63965 = (inst_63963 < inst_63962);
var inst_63966 = inst_63965;
var state_64021__$1 = state_64021;
if(cljs.core.truth_(inst_63966)){
var statearr_64068_65787 = state_64021__$1;
(statearr_64068_65787[(1)] = (27));

} else {
var statearr_64069_65788 = state_64021__$1;
(statearr_64069_65788[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (34))){
var state_64021__$1 = state_64021;
var statearr_64070_65789 = state_64021__$1;
(statearr_64070_65789[(2)] = null);

(statearr_64070_65789[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (17))){
var state_64021__$1 = state_64021;
var statearr_64071_65790 = state_64021__$1;
(statearr_64071_65790[(2)] = null);

(statearr_64071_65790[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (3))){
var inst_64019 = (state_64021[(2)]);
var state_64021__$1 = state_64021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64021__$1,inst_64019);
} else {
if((state_val_64022 === (12))){
var inst_63947 = (state_64021[(2)]);
var state_64021__$1 = state_64021;
var statearr_64072_65793 = state_64021__$1;
(statearr_64072_65793[(2)] = inst_63947);

(statearr_64072_65793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (2))){
var state_64021__$1 = state_64021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64021__$1,(4),ch);
} else {
if((state_val_64022 === (23))){
var state_64021__$1 = state_64021;
var statearr_64073_65794 = state_64021__$1;
(statearr_64073_65794[(2)] = null);

(statearr_64073_65794[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (35))){
var inst_64003 = (state_64021[(2)]);
var state_64021__$1 = state_64021;
var statearr_64074_65795 = state_64021__$1;
(statearr_64074_65795[(2)] = inst_64003);

(statearr_64074_65795[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (19))){
var inst_63919 = (state_64021[(7)]);
var inst_63923 = cljs.core.chunk_first(inst_63919);
var inst_63924 = cljs.core.chunk_rest(inst_63919);
var inst_63925 = cljs.core.count(inst_63923);
var inst_63894 = inst_63924;
var inst_63895 = inst_63923;
var inst_63896 = inst_63925;
var inst_63897 = (0);
var state_64021__$1 = (function (){var statearr_64075 = state_64021;
(statearr_64075[(13)] = inst_63894);

(statearr_64075[(15)] = inst_63896);

(statearr_64075[(16)] = inst_63897);

(statearr_64075[(17)] = inst_63895);

return statearr_64075;
})();
var statearr_64076_65800 = state_64021__$1;
(statearr_64076_65800[(2)] = null);

(statearr_64076_65800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (11))){
var inst_63894 = (state_64021[(13)]);
var inst_63919 = (state_64021[(7)]);
var inst_63919__$1 = cljs.core.seq(inst_63894);
var state_64021__$1 = (function (){var statearr_64077 = state_64021;
(statearr_64077[(7)] = inst_63919__$1);

return statearr_64077;
})();
if(inst_63919__$1){
var statearr_64078_65801 = state_64021__$1;
(statearr_64078_65801[(1)] = (16));

} else {
var statearr_64079_65802 = state_64021__$1;
(statearr_64079_65802[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (9))){
var inst_63949 = (state_64021[(2)]);
var state_64021__$1 = state_64021;
var statearr_64080_65803 = state_64021__$1;
(statearr_64080_65803[(2)] = inst_63949);

(statearr_64080_65803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (5))){
var inst_63892 = cljs.core.deref(cs);
var inst_63893 = cljs.core.seq(inst_63892);
var inst_63894 = inst_63893;
var inst_63895 = null;
var inst_63896 = (0);
var inst_63897 = (0);
var state_64021__$1 = (function (){var statearr_64081 = state_64021;
(statearr_64081[(13)] = inst_63894);

(statearr_64081[(15)] = inst_63896);

(statearr_64081[(16)] = inst_63897);

(statearr_64081[(17)] = inst_63895);

return statearr_64081;
})();
var statearr_64082_65806 = state_64021__$1;
(statearr_64082_65806[(2)] = null);

(statearr_64082_65806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (14))){
var state_64021__$1 = state_64021;
var statearr_64083_65807 = state_64021__$1;
(statearr_64083_65807[(2)] = null);

(statearr_64083_65807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (45))){
var inst_64011 = (state_64021[(2)]);
var state_64021__$1 = state_64021;
var statearr_64084_65808 = state_64021__$1;
(statearr_64084_65808[(2)] = inst_64011);

(statearr_64084_65808[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (26))){
var inst_63952 = (state_64021[(27)]);
var inst_64007 = (state_64021[(2)]);
var inst_64008 = cljs.core.seq(inst_63952);
var state_64021__$1 = (function (){var statearr_64085 = state_64021;
(statearr_64085[(29)] = inst_64007);

return statearr_64085;
})();
if(inst_64008){
var statearr_64086_65811 = state_64021__$1;
(statearr_64086_65811[(1)] = (42));

} else {
var statearr_64087_65812 = state_64021__$1;
(statearr_64087_65812[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (16))){
var inst_63919 = (state_64021[(7)]);
var inst_63921 = cljs.core.chunked_seq_QMARK_(inst_63919);
var state_64021__$1 = state_64021;
if(inst_63921){
var statearr_64088_65815 = state_64021__$1;
(statearr_64088_65815[(1)] = (19));

} else {
var statearr_64089_65816 = state_64021__$1;
(statearr_64089_65816[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (38))){
var inst_64000 = (state_64021[(2)]);
var state_64021__$1 = state_64021;
var statearr_64090_65817 = state_64021__$1;
(statearr_64090_65817[(2)] = inst_64000);

(statearr_64090_65817[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (30))){
var state_64021__$1 = state_64021;
var statearr_64091_65819 = state_64021__$1;
(statearr_64091_65819[(2)] = null);

(statearr_64091_65819[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (10))){
var inst_63897 = (state_64021[(16)]);
var inst_63895 = (state_64021[(17)]);
var inst_63905 = cljs.core._nth(inst_63895,inst_63897);
var inst_63906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63905,(0),null);
var inst_63907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63905,(1),null);
var state_64021__$1 = (function (){var statearr_64092 = state_64021;
(statearr_64092[(24)] = inst_63906);

return statearr_64092;
})();
if(cljs.core.truth_(inst_63907)){
var statearr_64093_65821 = state_64021__$1;
(statearr_64093_65821[(1)] = (13));

} else {
var statearr_64094_65822 = state_64021__$1;
(statearr_64094_65822[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (18))){
var inst_63945 = (state_64021[(2)]);
var state_64021__$1 = state_64021;
var statearr_64095_65825 = state_64021__$1;
(statearr_64095_65825[(2)] = inst_63945);

(statearr_64095_65825[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (42))){
var state_64021__$1 = state_64021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64021__$1,(45),dchan);
} else {
if((state_val_64022 === (37))){
var inst_63981 = (state_64021[(23)]);
var inst_63990 = (state_64021[(22)]);
var inst_63885 = (state_64021[(10)]);
var inst_63990__$1 = cljs.core.first(inst_63981);
var inst_63991 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_63990__$1,inst_63885,done);
var state_64021__$1 = (function (){var statearr_64096 = state_64021;
(statearr_64096[(22)] = inst_63990__$1);

return statearr_64096;
})();
if(cljs.core.truth_(inst_63991)){
var statearr_64097_65827 = state_64021__$1;
(statearr_64097_65827[(1)] = (39));

} else {
var statearr_64098_65828 = state_64021__$1;
(statearr_64098_65828[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64022 === (8))){
var inst_63896 = (state_64021[(15)]);
var inst_63897 = (state_64021[(16)]);
var inst_63899 = (inst_63897 < inst_63896);
var inst_63900 = inst_63899;
var state_64021__$1 = state_64021;
if(cljs.core.truth_(inst_63900)){
var statearr_64099_65829 = state_64021__$1;
(statearr_64099_65829[(1)] = (10));

} else {
var statearr_64100_65830 = state_64021__$1;
(statearr_64100_65830[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__55616__auto__ = null;
var cljs$core$async$mult_$_state_machine__55616__auto____0 = (function (){
var statearr_64102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64102[(0)] = cljs$core$async$mult_$_state_machine__55616__auto__);

(statearr_64102[(1)] = (1));

return statearr_64102;
});
var cljs$core$async$mult_$_state_machine__55616__auto____1 = (function (state_64021){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_64021);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e64103){var ex__55619__auto__ = e64103;
var statearr_64104_65831 = state_64021;
(statearr_64104_65831[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_64021[(4)]))){
var statearr_64105_65832 = state_64021;
(statearr_64105_65832[(1)] = cljs.core.first((state_64021[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65833 = state_64021;
state_64021 = G__65833;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__55616__auto__ = function(state_64021){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__55616__auto____1.call(this,state_64021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__55616__auto____0;
cljs$core$async$mult_$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__55616__auto____1;
return cljs$core$async$mult_$_state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_64106 = f__55639__auto__();
(statearr_64106[(6)] = c__55638__auto___65758);

return statearr_64106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__64111 = arguments.length;
switch (G__64111) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_65835 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_65835(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_65836 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_65836(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_65837 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_65837(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_65838 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_65838(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_65839 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_65839(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65840 = arguments.length;
var i__4737__auto___65841 = (0);
while(true){
if((i__4737__auto___65841 < len__4736__auto___65840)){
args__4742__auto__.push((arguments[i__4737__auto___65841]));

var G__65842 = (i__4737__auto___65841 + (1));
i__4737__auto___65841 = G__65842;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__64125){
var map__64127 = p__64125;
var map__64127__$1 = (((((!((map__64127 == null))))?(((((map__64127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64127):map__64127);
var opts = map__64127__$1;
var statearr_64130_65843 = state;
(statearr_64130_65843[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts((function (val){
var statearr_64132_65845 = state;
(statearr_64132_65845[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_64133_65846 = state;
(statearr_64133_65846[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq64120){
var G__64121 = cljs.core.first(seq64120);
var seq64120__$1 = cljs.core.next(seq64120);
var G__64122 = cljs.core.first(seq64120__$1);
var seq64120__$2 = cljs.core.next(seq64120__$1);
var G__64123 = cljs.core.first(seq64120__$2);
var seq64120__$3 = cljs.core.next(seq64120__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64121,G__64122,G__64123,seq64120__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64139 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64139 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta64140){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta64140 = meta64140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64141,meta64140__$1){
var self__ = this;
var _64141__$1 = this;
return (new cljs.core.async.t_cljs$core$async64139(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta64140__$1));
}));

(cljs.core.async.t_cljs$core$async64139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64141){
var self__ = this;
var _64141__$1 = this;
return self__.meta64140;
}));

(cljs.core.async.t_cljs$core$async64139.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64139.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async64139.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64139.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64139.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64139.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64139.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64139.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async64139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta64140","meta64140",-257018385,null)], null);
}));

(cljs.core.async.t_cljs$core$async64139.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64139");

(cljs.core.async.t_cljs$core$async64139.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async64139");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64139.
 */
cljs.core.async.__GT_t_cljs$core$async64139 = (function cljs$core$async$mix_$___GT_t_cljs$core$async64139(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta64140){
return (new cljs.core.async.t_cljs$core$async64139(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta64140));
});

}

return (new cljs.core.async.t_cljs$core$async64139(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__55638__auto___65854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_64251){
var state_val_64252 = (state_64251[(1)]);
if((state_val_64252 === (7))){
var inst_64164 = (state_64251[(2)]);
var state_64251__$1 = state_64251;
var statearr_64254_65855 = state_64251__$1;
(statearr_64254_65855[(2)] = inst_64164);

(statearr_64254_65855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (20))){
var inst_64176 = (state_64251[(7)]);
var state_64251__$1 = state_64251;
var statearr_64255_65856 = state_64251__$1;
(statearr_64255_65856[(2)] = inst_64176);

(statearr_64255_65856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (27))){
var state_64251__$1 = state_64251;
var statearr_64256_65857 = state_64251__$1;
(statearr_64256_65857[(2)] = null);

(statearr_64256_65857[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (1))){
var inst_64149 = (state_64251[(8)]);
var inst_64149__$1 = calc_state();
var inst_64151 = (inst_64149__$1 == null);
var inst_64152 = cljs.core.not(inst_64151);
var state_64251__$1 = (function (){var statearr_64258 = state_64251;
(statearr_64258[(8)] = inst_64149__$1);

return statearr_64258;
})();
if(inst_64152){
var statearr_64259_65858 = state_64251__$1;
(statearr_64259_65858[(1)] = (2));

} else {
var statearr_64260_65859 = state_64251__$1;
(statearr_64260_65859[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (24))){
var inst_64225 = (state_64251[(9)]);
var inst_64209 = (state_64251[(10)]);
var inst_64200 = (state_64251[(11)]);
var inst_64225__$1 = (inst_64200.cljs$core$IFn$_invoke$arity$1 ? inst_64200.cljs$core$IFn$_invoke$arity$1(inst_64209) : inst_64200.call(null,inst_64209));
var state_64251__$1 = (function (){var statearr_64261 = state_64251;
(statearr_64261[(9)] = inst_64225__$1);

return statearr_64261;
})();
if(cljs.core.truth_(inst_64225__$1)){
var statearr_64262_65860 = state_64251__$1;
(statearr_64262_65860[(1)] = (29));

} else {
var statearr_64263_65861 = state_64251__$1;
(statearr_64263_65861[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (4))){
var inst_64167 = (state_64251[(2)]);
var state_64251__$1 = state_64251;
if(cljs.core.truth_(inst_64167)){
var statearr_64265_65862 = state_64251__$1;
(statearr_64265_65862[(1)] = (8));

} else {
var statearr_64266_65863 = state_64251__$1;
(statearr_64266_65863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (15))){
var inst_64194 = (state_64251[(2)]);
var state_64251__$1 = state_64251;
if(cljs.core.truth_(inst_64194)){
var statearr_64267_65864 = state_64251__$1;
(statearr_64267_65864[(1)] = (19));

} else {
var statearr_64268_65865 = state_64251__$1;
(statearr_64268_65865[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (21))){
var inst_64199 = (state_64251[(12)]);
var inst_64199__$1 = (state_64251[(2)]);
var inst_64200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64199__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_64201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64199__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_64202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64199__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_64251__$1 = (function (){var statearr_64269 = state_64251;
(statearr_64269[(13)] = inst_64201);

(statearr_64269[(12)] = inst_64199__$1);

(statearr_64269[(11)] = inst_64200);

return statearr_64269;
})();
return cljs.core.async.ioc_alts_BANG_(state_64251__$1,(22),inst_64202);
} else {
if((state_val_64252 === (31))){
var inst_64233 = (state_64251[(2)]);
var state_64251__$1 = state_64251;
if(cljs.core.truth_(inst_64233)){
var statearr_64272_65866 = state_64251__$1;
(statearr_64272_65866[(1)] = (32));

} else {
var statearr_64273_65867 = state_64251__$1;
(statearr_64273_65867[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (32))){
var inst_64208 = (state_64251[(14)]);
var state_64251__$1 = state_64251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64251__$1,(35),out,inst_64208);
} else {
if((state_val_64252 === (33))){
var inst_64199 = (state_64251[(12)]);
var inst_64176 = inst_64199;
var state_64251__$1 = (function (){var statearr_64277 = state_64251;
(statearr_64277[(7)] = inst_64176);

return statearr_64277;
})();
var statearr_64278_65868 = state_64251__$1;
(statearr_64278_65868[(2)] = null);

(statearr_64278_65868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (13))){
var inst_64176 = (state_64251[(7)]);
var inst_64183 = inst_64176.cljs$lang$protocol_mask$partition0$;
var inst_64184 = (inst_64183 & (64));
var inst_64185 = inst_64176.cljs$core$ISeq$;
var inst_64186 = (cljs.core.PROTOCOL_SENTINEL === inst_64185);
var inst_64187 = ((inst_64184) || (inst_64186));
var state_64251__$1 = state_64251;
if(cljs.core.truth_(inst_64187)){
var statearr_64279_65869 = state_64251__$1;
(statearr_64279_65869[(1)] = (16));

} else {
var statearr_64280_65870 = state_64251__$1;
(statearr_64280_65870[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (22))){
var inst_64208 = (state_64251[(14)]);
var inst_64209 = (state_64251[(10)]);
var inst_64207 = (state_64251[(2)]);
var inst_64208__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64207,(0),null);
var inst_64209__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64207,(1),null);
var inst_64210 = (inst_64208__$1 == null);
var inst_64211 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64209__$1,change);
var inst_64212 = ((inst_64210) || (inst_64211));
var state_64251__$1 = (function (){var statearr_64282 = state_64251;
(statearr_64282[(14)] = inst_64208__$1);

(statearr_64282[(10)] = inst_64209__$1);

return statearr_64282;
})();
if(cljs.core.truth_(inst_64212)){
var statearr_64283_65871 = state_64251__$1;
(statearr_64283_65871[(1)] = (23));

} else {
var statearr_64284_65872 = state_64251__$1;
(statearr_64284_65872[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (36))){
var inst_64199 = (state_64251[(12)]);
var inst_64176 = inst_64199;
var state_64251__$1 = (function (){var statearr_64285 = state_64251;
(statearr_64285[(7)] = inst_64176);

return statearr_64285;
})();
var statearr_64286_65873 = state_64251__$1;
(statearr_64286_65873[(2)] = null);

(statearr_64286_65873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (29))){
var inst_64225 = (state_64251[(9)]);
var state_64251__$1 = state_64251;
var statearr_64287_65874 = state_64251__$1;
(statearr_64287_65874[(2)] = inst_64225);

(statearr_64287_65874[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (6))){
var state_64251__$1 = state_64251;
var statearr_64288_65875 = state_64251__$1;
(statearr_64288_65875[(2)] = false);

(statearr_64288_65875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (28))){
var inst_64220 = (state_64251[(2)]);
var inst_64221 = calc_state();
var inst_64176 = inst_64221;
var state_64251__$1 = (function (){var statearr_64289 = state_64251;
(statearr_64289[(15)] = inst_64220);

(statearr_64289[(7)] = inst_64176);

return statearr_64289;
})();
var statearr_64290_65876 = state_64251__$1;
(statearr_64290_65876[(2)] = null);

(statearr_64290_65876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (25))){
var inst_64247 = (state_64251[(2)]);
var state_64251__$1 = state_64251;
var statearr_64291_65877 = state_64251__$1;
(statearr_64291_65877[(2)] = inst_64247);

(statearr_64291_65877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (34))){
var inst_64245 = (state_64251[(2)]);
var state_64251__$1 = state_64251;
var statearr_64292_65878 = state_64251__$1;
(statearr_64292_65878[(2)] = inst_64245);

(statearr_64292_65878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (17))){
var state_64251__$1 = state_64251;
var statearr_64293_65879 = state_64251__$1;
(statearr_64293_65879[(2)] = false);

(statearr_64293_65879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (3))){
var state_64251__$1 = state_64251;
var statearr_64294_65880 = state_64251__$1;
(statearr_64294_65880[(2)] = false);

(statearr_64294_65880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (12))){
var inst_64249 = (state_64251[(2)]);
var state_64251__$1 = state_64251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64251__$1,inst_64249);
} else {
if((state_val_64252 === (2))){
var inst_64149 = (state_64251[(8)]);
var inst_64156 = inst_64149.cljs$lang$protocol_mask$partition0$;
var inst_64157 = (inst_64156 & (64));
var inst_64158 = inst_64149.cljs$core$ISeq$;
var inst_64159 = (cljs.core.PROTOCOL_SENTINEL === inst_64158);
var inst_64160 = ((inst_64157) || (inst_64159));
var state_64251__$1 = state_64251;
if(cljs.core.truth_(inst_64160)){
var statearr_64295_65882 = state_64251__$1;
(statearr_64295_65882[(1)] = (5));

} else {
var statearr_64296_65884 = state_64251__$1;
(statearr_64296_65884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (23))){
var inst_64208 = (state_64251[(14)]);
var inst_64214 = (inst_64208 == null);
var state_64251__$1 = state_64251;
if(cljs.core.truth_(inst_64214)){
var statearr_64297_65885 = state_64251__$1;
(statearr_64297_65885[(1)] = (26));

} else {
var statearr_64298_65886 = state_64251__$1;
(statearr_64298_65886[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (35))){
var inst_64236 = (state_64251[(2)]);
var state_64251__$1 = state_64251;
if(cljs.core.truth_(inst_64236)){
var statearr_64299_65887 = state_64251__$1;
(statearr_64299_65887[(1)] = (36));

} else {
var statearr_64300_65888 = state_64251__$1;
(statearr_64300_65888[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (19))){
var inst_64176 = (state_64251[(7)]);
var inst_64196 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64176);
var state_64251__$1 = state_64251;
var statearr_64301_65889 = state_64251__$1;
(statearr_64301_65889[(2)] = inst_64196);

(statearr_64301_65889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (11))){
var inst_64176 = (state_64251[(7)]);
var inst_64180 = (inst_64176 == null);
var inst_64181 = cljs.core.not(inst_64180);
var state_64251__$1 = state_64251;
if(inst_64181){
var statearr_64302_65890 = state_64251__$1;
(statearr_64302_65890[(1)] = (13));

} else {
var statearr_64303_65891 = state_64251__$1;
(statearr_64303_65891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (9))){
var inst_64149 = (state_64251[(8)]);
var state_64251__$1 = state_64251;
var statearr_64304_65892 = state_64251__$1;
(statearr_64304_65892[(2)] = inst_64149);

(statearr_64304_65892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (5))){
var state_64251__$1 = state_64251;
var statearr_64305_65893 = state_64251__$1;
(statearr_64305_65893[(2)] = true);

(statearr_64305_65893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (14))){
var state_64251__$1 = state_64251;
var statearr_64306_65894 = state_64251__$1;
(statearr_64306_65894[(2)] = false);

(statearr_64306_65894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (26))){
var inst_64209 = (state_64251[(10)]);
var inst_64217 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_64209);
var state_64251__$1 = state_64251;
var statearr_64307_65895 = state_64251__$1;
(statearr_64307_65895[(2)] = inst_64217);

(statearr_64307_65895[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (16))){
var state_64251__$1 = state_64251;
var statearr_64308_65896 = state_64251__$1;
(statearr_64308_65896[(2)] = true);

(statearr_64308_65896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (38))){
var inst_64241 = (state_64251[(2)]);
var state_64251__$1 = state_64251;
var statearr_64309_65897 = state_64251__$1;
(statearr_64309_65897[(2)] = inst_64241);

(statearr_64309_65897[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (30))){
var inst_64201 = (state_64251[(13)]);
var inst_64209 = (state_64251[(10)]);
var inst_64200 = (state_64251[(11)]);
var inst_64228 = cljs.core.empty_QMARK_(inst_64200);
var inst_64229 = (inst_64201.cljs$core$IFn$_invoke$arity$1 ? inst_64201.cljs$core$IFn$_invoke$arity$1(inst_64209) : inst_64201.call(null,inst_64209));
var inst_64230 = cljs.core.not(inst_64229);
var inst_64231 = ((inst_64228) && (inst_64230));
var state_64251__$1 = state_64251;
var statearr_64310_65898 = state_64251__$1;
(statearr_64310_65898[(2)] = inst_64231);

(statearr_64310_65898[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (10))){
var inst_64149 = (state_64251[(8)]);
var inst_64172 = (state_64251[(2)]);
var inst_64173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64172,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_64174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64172,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_64175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64172,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_64176 = inst_64149;
var state_64251__$1 = (function (){var statearr_64311 = state_64251;
(statearr_64311[(16)] = inst_64175);

(statearr_64311[(17)] = inst_64173);

(statearr_64311[(7)] = inst_64176);

(statearr_64311[(18)] = inst_64174);

return statearr_64311;
})();
var statearr_64312_65899 = state_64251__$1;
(statearr_64312_65899[(2)] = null);

(statearr_64312_65899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (18))){
var inst_64191 = (state_64251[(2)]);
var state_64251__$1 = state_64251;
var statearr_64313_65900 = state_64251__$1;
(statearr_64313_65900[(2)] = inst_64191);

(statearr_64313_65900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (37))){
var state_64251__$1 = state_64251;
var statearr_64314_65901 = state_64251__$1;
(statearr_64314_65901[(2)] = null);

(statearr_64314_65901[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64252 === (8))){
var inst_64149 = (state_64251[(8)]);
var inst_64169 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64149);
var state_64251__$1 = state_64251;
var statearr_64315_65902 = state_64251__$1;
(statearr_64315_65902[(2)] = inst_64169);

(statearr_64315_65902[(1)] = (10));


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
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__55616__auto__ = null;
var cljs$core$async$mix_$_state_machine__55616__auto____0 = (function (){
var statearr_64316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64316[(0)] = cljs$core$async$mix_$_state_machine__55616__auto__);

(statearr_64316[(1)] = (1));

return statearr_64316;
});
var cljs$core$async$mix_$_state_machine__55616__auto____1 = (function (state_64251){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_64251);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e64321){var ex__55619__auto__ = e64321;
var statearr_64322_65903 = state_64251;
(statearr_64322_65903[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_64251[(4)]))){
var statearr_64323_65904 = state_64251;
(statearr_64323_65904[(1)] = cljs.core.first((state_64251[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65905 = state_64251;
state_64251 = G__65905;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__55616__auto__ = function(state_64251){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__55616__auto____1.call(this,state_64251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__55616__auto____0;
cljs$core$async$mix_$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__55616__auto____1;
return cljs$core$async$mix_$_state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_64327 = f__55639__auto__();
(statearr_64327[(6)] = c__55638__auto___65854);

return statearr_64327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_65906 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_65906(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_65907 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_65907(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_65908 = (function() {
var G__65909 = null;
var G__65909__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__65909__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__65909 = function(p,v){
switch(arguments.length){
case 1:
return G__65909__1.call(this,p);
case 2:
return G__65909__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65909.cljs$core$IFn$_invoke$arity$1 = G__65909__1;
G__65909.cljs$core$IFn$_invoke$arity$2 = G__65909__2;
return G__65909;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__64358 = arguments.length;
switch (G__64358) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_65908(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_65908(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__64368 = arguments.length;
switch (G__64368) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__64366_SHARP_){
if(cljs.core.truth_((p1__64366_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__64366_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__64366_SHARP_.call(null,topic)))){
return p1__64366_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__64366_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64375 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta64376){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta64376 = meta64376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64377,meta64376__$1){
var self__ = this;
var _64377__$1 = this;
return (new cljs.core.async.t_cljs$core$async64375(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta64376__$1));
}));

(cljs.core.async.t_cljs$core$async64375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64377){
var self__ = this;
var _64377__$1 = this;
return self__.meta64376;
}));

(cljs.core.async.t_cljs$core$async64375.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64375.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async64375.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64375.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async64375.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async64375.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async64375.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async64375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta64376","meta64376",-1493217039,null)], null);
}));

(cljs.core.async.t_cljs$core$async64375.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64375");

(cljs.core.async.t_cljs$core$async64375.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async64375");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64375.
 */
cljs.core.async.__GT_t_cljs$core$async64375 = (function cljs$core$async$__GT_t_cljs$core$async64375(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta64376){
return (new cljs.core.async.t_cljs$core$async64375(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta64376));
});

}

return (new cljs.core.async.t_cljs$core$async64375(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__55638__auto___65912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_64460){
var state_val_64461 = (state_64460[(1)]);
if((state_val_64461 === (7))){
var inst_64456 = (state_64460[(2)]);
var state_64460__$1 = state_64460;
var statearr_64462_65913 = state_64460__$1;
(statearr_64462_65913[(2)] = inst_64456);

(statearr_64462_65913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (20))){
var state_64460__$1 = state_64460;
var statearr_64463_65914 = state_64460__$1;
(statearr_64463_65914[(2)] = null);

(statearr_64463_65914[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (1))){
var state_64460__$1 = state_64460;
var statearr_64464_65915 = state_64460__$1;
(statearr_64464_65915[(2)] = null);

(statearr_64464_65915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (24))){
var inst_64439 = (state_64460[(7)]);
var inst_64448 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_64439);
var state_64460__$1 = state_64460;
var statearr_64465_65916 = state_64460__$1;
(statearr_64465_65916[(2)] = inst_64448);

(statearr_64465_65916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (4))){
var inst_64389 = (state_64460[(8)]);
var inst_64389__$1 = (state_64460[(2)]);
var inst_64390 = (inst_64389__$1 == null);
var state_64460__$1 = (function (){var statearr_64466 = state_64460;
(statearr_64466[(8)] = inst_64389__$1);

return statearr_64466;
})();
if(cljs.core.truth_(inst_64390)){
var statearr_64467_65917 = state_64460__$1;
(statearr_64467_65917[(1)] = (5));

} else {
var statearr_64468_65918 = state_64460__$1;
(statearr_64468_65918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (15))){
var inst_64433 = (state_64460[(2)]);
var state_64460__$1 = state_64460;
var statearr_64469_65919 = state_64460__$1;
(statearr_64469_65919[(2)] = inst_64433);

(statearr_64469_65919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (21))){
var inst_64453 = (state_64460[(2)]);
var state_64460__$1 = (function (){var statearr_64470 = state_64460;
(statearr_64470[(9)] = inst_64453);

return statearr_64470;
})();
var statearr_64471_65920 = state_64460__$1;
(statearr_64471_65920[(2)] = null);

(statearr_64471_65920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (13))){
var inst_64415 = (state_64460[(10)]);
var inst_64417 = cljs.core.chunked_seq_QMARK_(inst_64415);
var state_64460__$1 = state_64460;
if(inst_64417){
var statearr_64472_65921 = state_64460__$1;
(statearr_64472_65921[(1)] = (16));

} else {
var statearr_64473_65922 = state_64460__$1;
(statearr_64473_65922[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (22))){
var inst_64445 = (state_64460[(2)]);
var state_64460__$1 = state_64460;
if(cljs.core.truth_(inst_64445)){
var statearr_64474_65923 = state_64460__$1;
(statearr_64474_65923[(1)] = (23));

} else {
var statearr_64475_65924 = state_64460__$1;
(statearr_64475_65924[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (6))){
var inst_64441 = (state_64460[(11)]);
var inst_64439 = (state_64460[(7)]);
var inst_64389 = (state_64460[(8)]);
var inst_64439__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_64389) : topic_fn.call(null,inst_64389));
var inst_64440 = cljs.core.deref(mults);
var inst_64441__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64440,inst_64439__$1);
var state_64460__$1 = (function (){var statearr_64476 = state_64460;
(statearr_64476[(11)] = inst_64441__$1);

(statearr_64476[(7)] = inst_64439__$1);

return statearr_64476;
})();
if(cljs.core.truth_(inst_64441__$1)){
var statearr_64477_65927 = state_64460__$1;
(statearr_64477_65927[(1)] = (19));

} else {
var statearr_64478_65928 = state_64460__$1;
(statearr_64478_65928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (25))){
var inst_64450 = (state_64460[(2)]);
var state_64460__$1 = state_64460;
var statearr_64479_65930 = state_64460__$1;
(statearr_64479_65930[(2)] = inst_64450);

(statearr_64479_65930[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (17))){
var inst_64415 = (state_64460[(10)]);
var inst_64424 = cljs.core.first(inst_64415);
var inst_64425 = cljs.core.async.muxch_STAR_(inst_64424);
var inst_64426 = cljs.core.async.close_BANG_(inst_64425);
var inst_64427 = cljs.core.next(inst_64415);
var inst_64399 = inst_64427;
var inst_64400 = null;
var inst_64401 = (0);
var inst_64402 = (0);
var state_64460__$1 = (function (){var statearr_64480 = state_64460;
(statearr_64480[(12)] = inst_64401);

(statearr_64480[(13)] = inst_64426);

(statearr_64480[(14)] = inst_64399);

(statearr_64480[(15)] = inst_64402);

(statearr_64480[(16)] = inst_64400);

return statearr_64480;
})();
var statearr_64481_65931 = state_64460__$1;
(statearr_64481_65931[(2)] = null);

(statearr_64481_65931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (3))){
var inst_64458 = (state_64460[(2)]);
var state_64460__$1 = state_64460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64460__$1,inst_64458);
} else {
if((state_val_64461 === (12))){
var inst_64435 = (state_64460[(2)]);
var state_64460__$1 = state_64460;
var statearr_64482_65932 = state_64460__$1;
(statearr_64482_65932[(2)] = inst_64435);

(statearr_64482_65932[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (2))){
var state_64460__$1 = state_64460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64460__$1,(4),ch);
} else {
if((state_val_64461 === (23))){
var state_64460__$1 = state_64460;
var statearr_64483_65933 = state_64460__$1;
(statearr_64483_65933[(2)] = null);

(statearr_64483_65933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (19))){
var inst_64441 = (state_64460[(11)]);
var inst_64389 = (state_64460[(8)]);
var inst_64443 = cljs.core.async.muxch_STAR_(inst_64441);
var state_64460__$1 = state_64460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64460__$1,(22),inst_64443,inst_64389);
} else {
if((state_val_64461 === (11))){
var inst_64399 = (state_64460[(14)]);
var inst_64415 = (state_64460[(10)]);
var inst_64415__$1 = cljs.core.seq(inst_64399);
var state_64460__$1 = (function (){var statearr_64484 = state_64460;
(statearr_64484[(10)] = inst_64415__$1);

return statearr_64484;
})();
if(inst_64415__$1){
var statearr_64485_65935 = state_64460__$1;
(statearr_64485_65935[(1)] = (13));

} else {
var statearr_64486_65938 = state_64460__$1;
(statearr_64486_65938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (9))){
var inst_64437 = (state_64460[(2)]);
var state_64460__$1 = state_64460;
var statearr_64487_65942 = state_64460__$1;
(statearr_64487_65942[(2)] = inst_64437);

(statearr_64487_65942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (5))){
var inst_64396 = cljs.core.deref(mults);
var inst_64397 = cljs.core.vals(inst_64396);
var inst_64398 = cljs.core.seq(inst_64397);
var inst_64399 = inst_64398;
var inst_64400 = null;
var inst_64401 = (0);
var inst_64402 = (0);
var state_64460__$1 = (function (){var statearr_64488 = state_64460;
(statearr_64488[(12)] = inst_64401);

(statearr_64488[(14)] = inst_64399);

(statearr_64488[(15)] = inst_64402);

(statearr_64488[(16)] = inst_64400);

return statearr_64488;
})();
var statearr_64489_65947 = state_64460__$1;
(statearr_64489_65947[(2)] = null);

(statearr_64489_65947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (14))){
var state_64460__$1 = state_64460;
var statearr_64493_65949 = state_64460__$1;
(statearr_64493_65949[(2)] = null);

(statearr_64493_65949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (16))){
var inst_64415 = (state_64460[(10)]);
var inst_64419 = cljs.core.chunk_first(inst_64415);
var inst_64420 = cljs.core.chunk_rest(inst_64415);
var inst_64421 = cljs.core.count(inst_64419);
var inst_64399 = inst_64420;
var inst_64400 = inst_64419;
var inst_64401 = inst_64421;
var inst_64402 = (0);
var state_64460__$1 = (function (){var statearr_64494 = state_64460;
(statearr_64494[(12)] = inst_64401);

(statearr_64494[(14)] = inst_64399);

(statearr_64494[(15)] = inst_64402);

(statearr_64494[(16)] = inst_64400);

return statearr_64494;
})();
var statearr_64495_65954 = state_64460__$1;
(statearr_64495_65954[(2)] = null);

(statearr_64495_65954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (10))){
var inst_64401 = (state_64460[(12)]);
var inst_64399 = (state_64460[(14)]);
var inst_64402 = (state_64460[(15)]);
var inst_64400 = (state_64460[(16)]);
var inst_64408 = cljs.core._nth(inst_64400,inst_64402);
var inst_64409 = cljs.core.async.muxch_STAR_(inst_64408);
var inst_64410 = cljs.core.async.close_BANG_(inst_64409);
var inst_64412 = (inst_64402 + (1));
var tmp64490 = inst_64401;
var tmp64491 = inst_64399;
var tmp64492 = inst_64400;
var inst_64399__$1 = tmp64491;
var inst_64400__$1 = tmp64492;
var inst_64401__$1 = tmp64490;
var inst_64402__$1 = inst_64412;
var state_64460__$1 = (function (){var statearr_64496 = state_64460;
(statearr_64496[(12)] = inst_64401__$1);

(statearr_64496[(14)] = inst_64399__$1);

(statearr_64496[(15)] = inst_64402__$1);

(statearr_64496[(16)] = inst_64400__$1);

(statearr_64496[(17)] = inst_64410);

return statearr_64496;
})();
var statearr_64497_65956 = state_64460__$1;
(statearr_64497_65956[(2)] = null);

(statearr_64497_65956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (18))){
var inst_64430 = (state_64460[(2)]);
var state_64460__$1 = state_64460;
var statearr_64498_65958 = state_64460__$1;
(statearr_64498_65958[(2)] = inst_64430);

(statearr_64498_65958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64461 === (8))){
var inst_64401 = (state_64460[(12)]);
var inst_64402 = (state_64460[(15)]);
var inst_64404 = (inst_64402 < inst_64401);
var inst_64405 = inst_64404;
var state_64460__$1 = state_64460;
if(cljs.core.truth_(inst_64405)){
var statearr_64499_65959 = state_64460__$1;
(statearr_64499_65959[(1)] = (10));

} else {
var statearr_64500_65960 = state_64460__$1;
(statearr_64500_65960[(1)] = (11));

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55616__auto__ = null;
var cljs$core$async$state_machine__55616__auto____0 = (function (){
var statearr_64501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64501[(0)] = cljs$core$async$state_machine__55616__auto__);

(statearr_64501[(1)] = (1));

return statearr_64501;
});
var cljs$core$async$state_machine__55616__auto____1 = (function (state_64460){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_64460);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e64502){var ex__55619__auto__ = e64502;
var statearr_64503_65961 = state_64460;
(statearr_64503_65961[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_64460[(4)]))){
var statearr_64504_65962 = state_64460;
(statearr_64504_65962[(1)] = cljs.core.first((state_64460[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65963 = state_64460;
state_64460 = G__65963;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$state_machine__55616__auto__ = function(state_64460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55616__auto____1.call(this,state_64460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55616__auto____0;
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55616__auto____1;
return cljs$core$async$state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_64505 = f__55639__auto__();
(statearr_64505[(6)] = c__55638__auto___65912);

return statearr_64505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__64507 = arguments.length;
switch (G__64507) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__64509 = arguments.length;
switch (G__64509) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__64511 = arguments.length;
switch (G__64511) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__55638__auto___65999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_64575){
var state_val_64576 = (state_64575[(1)]);
if((state_val_64576 === (7))){
var state_64575__$1 = state_64575;
var statearr_64577_66000 = state_64575__$1;
(statearr_64577_66000[(2)] = null);

(statearr_64577_66000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64576 === (1))){
var state_64575__$1 = state_64575;
var statearr_64584_66001 = state_64575__$1;
(statearr_64584_66001[(2)] = null);

(statearr_64584_66001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64576 === (4))){
var inst_64529 = (state_64575[(7)]);
var inst_64530 = (state_64575[(8)]);
var inst_64532 = (inst_64530 < inst_64529);
var state_64575__$1 = state_64575;
if(cljs.core.truth_(inst_64532)){
var statearr_64585_66002 = state_64575__$1;
(statearr_64585_66002[(1)] = (6));

} else {
var statearr_64586_66003 = state_64575__$1;
(statearr_64586_66003[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64576 === (15))){
var inst_64561 = (state_64575[(9)]);
var inst_64566 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_64561);
var state_64575__$1 = state_64575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64575__$1,(17),out,inst_64566);
} else {
if((state_val_64576 === (13))){
var inst_64561 = (state_64575[(9)]);
var inst_64561__$1 = (state_64575[(2)]);
var inst_64562 = cljs.core.some(cljs.core.nil_QMARK_,inst_64561__$1);
var state_64575__$1 = (function (){var statearr_64587 = state_64575;
(statearr_64587[(9)] = inst_64561__$1);

return statearr_64587;
})();
if(cljs.core.truth_(inst_64562)){
var statearr_64588_66004 = state_64575__$1;
(statearr_64588_66004[(1)] = (14));

} else {
var statearr_64589_66005 = state_64575__$1;
(statearr_64589_66005[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64576 === (6))){
var state_64575__$1 = state_64575;
var statearr_64591_66006 = state_64575__$1;
(statearr_64591_66006[(2)] = null);

(statearr_64591_66006[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64576 === (17))){
var inst_64568 = (state_64575[(2)]);
var state_64575__$1 = (function (){var statearr_64594 = state_64575;
(statearr_64594[(10)] = inst_64568);

return statearr_64594;
})();
var statearr_64595_66007 = state_64575__$1;
(statearr_64595_66007[(2)] = null);

(statearr_64595_66007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64576 === (3))){
var inst_64573 = (state_64575[(2)]);
var state_64575__$1 = state_64575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64575__$1,inst_64573);
} else {
if((state_val_64576 === (12))){
var _ = (function (){var statearr_64597 = state_64575;
(statearr_64597[(4)] = cljs.core.rest((state_64575[(4)])));

return statearr_64597;
})();
var state_64575__$1 = state_64575;
var ex64593 = (state_64575__$1[(2)]);
var statearr_64598_66008 = state_64575__$1;
(statearr_64598_66008[(5)] = ex64593);


if((ex64593 instanceof Object)){
var statearr_64599_66009 = state_64575__$1;
(statearr_64599_66009[(1)] = (11));

(statearr_64599_66009[(5)] = null);

} else {
throw ex64593;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64576 === (2))){
var inst_64528 = cljs.core.reset_BANG_(dctr,cnt);
var inst_64529 = cnt;
var inst_64530 = (0);
var state_64575__$1 = (function (){var statearr_64602 = state_64575;
(statearr_64602[(7)] = inst_64529);

(statearr_64602[(11)] = inst_64528);

(statearr_64602[(8)] = inst_64530);

return statearr_64602;
})();
var statearr_64603_66010 = state_64575__$1;
(statearr_64603_66010[(2)] = null);

(statearr_64603_66010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64576 === (11))){
var inst_64540 = (state_64575[(2)]);
var inst_64541 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_64575__$1 = (function (){var statearr_64605 = state_64575;
(statearr_64605[(12)] = inst_64540);

return statearr_64605;
})();
var statearr_64606_66011 = state_64575__$1;
(statearr_64606_66011[(2)] = inst_64541);

(statearr_64606_66011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64576 === (9))){
var inst_64530 = (state_64575[(8)]);
var _ = (function (){var statearr_64607 = state_64575;
(statearr_64607[(4)] = cljs.core.cons((12),(state_64575[(4)])));

return statearr_64607;
})();
var inst_64547 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_64530) : chs__$1.call(null,inst_64530));
var inst_64548 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_64530) : done.call(null,inst_64530));
var inst_64549 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_64547,inst_64548);
var ___$1 = (function (){var statearr_64608 = state_64575;
(statearr_64608[(4)] = cljs.core.rest((state_64575[(4)])));

return statearr_64608;
})();
var state_64575__$1 = state_64575;
var statearr_64609_66012 = state_64575__$1;
(statearr_64609_66012[(2)] = inst_64549);

(statearr_64609_66012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64576 === (5))){
var inst_64559 = (state_64575[(2)]);
var state_64575__$1 = (function (){var statearr_64610 = state_64575;
(statearr_64610[(13)] = inst_64559);

return statearr_64610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64575__$1,(13),dchan);
} else {
if((state_val_64576 === (14))){
var inst_64564 = cljs.core.async.close_BANG_(out);
var state_64575__$1 = state_64575;
var statearr_64614_66013 = state_64575__$1;
(statearr_64614_66013[(2)] = inst_64564);

(statearr_64614_66013[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64576 === (16))){
var inst_64571 = (state_64575[(2)]);
var state_64575__$1 = state_64575;
var statearr_64615_66014 = state_64575__$1;
(statearr_64615_66014[(2)] = inst_64571);

(statearr_64615_66014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64576 === (10))){
var inst_64530 = (state_64575[(8)]);
var inst_64552 = (state_64575[(2)]);
var inst_64553 = (inst_64530 + (1));
var inst_64530__$1 = inst_64553;
var state_64575__$1 = (function (){var statearr_64616 = state_64575;
(statearr_64616[(14)] = inst_64552);

(statearr_64616[(8)] = inst_64530__$1);

return statearr_64616;
})();
var statearr_64617_66015 = state_64575__$1;
(statearr_64617_66015[(2)] = null);

(statearr_64617_66015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64576 === (8))){
var inst_64557 = (state_64575[(2)]);
var state_64575__$1 = state_64575;
var statearr_64618_66016 = state_64575__$1;
(statearr_64618_66016[(2)] = inst_64557);

(statearr_64618_66016[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__55616__auto__ = null;
var cljs$core$async$state_machine__55616__auto____0 = (function (){
var statearr_64619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64619[(0)] = cljs$core$async$state_machine__55616__auto__);

(statearr_64619[(1)] = (1));

return statearr_64619;
});
var cljs$core$async$state_machine__55616__auto____1 = (function (state_64575){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_64575);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e64620){var ex__55619__auto__ = e64620;
var statearr_64621_66017 = state_64575;
(statearr_64621_66017[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_64575[(4)]))){
var statearr_64622_66018 = state_64575;
(statearr_64622_66018[(1)] = cljs.core.first((state_64575[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66023 = state_64575;
state_64575 = G__66023;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$state_machine__55616__auto__ = function(state_64575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55616__auto____1.call(this,state_64575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55616__auto____0;
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55616__auto____1;
return cljs$core$async$state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_64627 = f__55639__auto__();
(statearr_64627[(6)] = c__55638__auto___65999);

return statearr_64627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__64630 = arguments.length;
switch (G__64630) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55638__auto___66038 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_64662){
var state_val_64663 = (state_64662[(1)]);
if((state_val_64663 === (7))){
var inst_64641 = (state_64662[(7)]);
var inst_64642 = (state_64662[(8)]);
var inst_64641__$1 = (state_64662[(2)]);
var inst_64642__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64641__$1,(0),null);
var inst_64643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64641__$1,(1),null);
var inst_64644 = (inst_64642__$1 == null);
var state_64662__$1 = (function (){var statearr_64666 = state_64662;
(statearr_64666[(7)] = inst_64641__$1);

(statearr_64666[(8)] = inst_64642__$1);

(statearr_64666[(9)] = inst_64643);

return statearr_64666;
})();
if(cljs.core.truth_(inst_64644)){
var statearr_64667_66040 = state_64662__$1;
(statearr_64667_66040[(1)] = (8));

} else {
var statearr_64668_66041 = state_64662__$1;
(statearr_64668_66041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64663 === (1))){
var inst_64631 = cljs.core.vec(chs);
var inst_64632 = inst_64631;
var state_64662__$1 = (function (){var statearr_64669 = state_64662;
(statearr_64669[(10)] = inst_64632);

return statearr_64669;
})();
var statearr_64670_66042 = state_64662__$1;
(statearr_64670_66042[(2)] = null);

(statearr_64670_66042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64663 === (4))){
var inst_64632 = (state_64662[(10)]);
var state_64662__$1 = state_64662;
return cljs.core.async.ioc_alts_BANG_(state_64662__$1,(7),inst_64632);
} else {
if((state_val_64663 === (6))){
var inst_64658 = (state_64662[(2)]);
var state_64662__$1 = state_64662;
var statearr_64672_66043 = state_64662__$1;
(statearr_64672_66043[(2)] = inst_64658);

(statearr_64672_66043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64663 === (3))){
var inst_64660 = (state_64662[(2)]);
var state_64662__$1 = state_64662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64662__$1,inst_64660);
} else {
if((state_val_64663 === (2))){
var inst_64632 = (state_64662[(10)]);
var inst_64634 = cljs.core.count(inst_64632);
var inst_64635 = (inst_64634 > (0));
var state_64662__$1 = state_64662;
if(cljs.core.truth_(inst_64635)){
var statearr_64676_66046 = state_64662__$1;
(statearr_64676_66046[(1)] = (4));

} else {
var statearr_64677_66047 = state_64662__$1;
(statearr_64677_66047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64663 === (11))){
var inst_64632 = (state_64662[(10)]);
var inst_64651 = (state_64662[(2)]);
var tmp64674 = inst_64632;
var inst_64632__$1 = tmp64674;
var state_64662__$1 = (function (){var statearr_64678 = state_64662;
(statearr_64678[(10)] = inst_64632__$1);

(statearr_64678[(11)] = inst_64651);

return statearr_64678;
})();
var statearr_64679_66051 = state_64662__$1;
(statearr_64679_66051[(2)] = null);

(statearr_64679_66051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64663 === (9))){
var inst_64642 = (state_64662[(8)]);
var state_64662__$1 = state_64662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64662__$1,(11),out,inst_64642);
} else {
if((state_val_64663 === (5))){
var inst_64656 = cljs.core.async.close_BANG_(out);
var state_64662__$1 = state_64662;
var statearr_64681_66052 = state_64662__$1;
(statearr_64681_66052[(2)] = inst_64656);

(statearr_64681_66052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64663 === (10))){
var inst_64654 = (state_64662[(2)]);
var state_64662__$1 = state_64662;
var statearr_64683_66053 = state_64662__$1;
(statearr_64683_66053[(2)] = inst_64654);

(statearr_64683_66053[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64663 === (8))){
var inst_64641 = (state_64662[(7)]);
var inst_64642 = (state_64662[(8)]);
var inst_64643 = (state_64662[(9)]);
var inst_64632 = (state_64662[(10)]);
var inst_64646 = (function (){var cs = inst_64632;
var vec__64637 = inst_64641;
var v = inst_64642;
var c = inst_64643;
return (function (p1__64628_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__64628_SHARP_);
});
})();
var inst_64647 = cljs.core.filterv(inst_64646,inst_64632);
var inst_64632__$1 = inst_64647;
var state_64662__$1 = (function (){var statearr_64684 = state_64662;
(statearr_64684[(10)] = inst_64632__$1);

return statearr_64684;
})();
var statearr_64685_66055 = state_64662__$1;
(statearr_64685_66055[(2)] = null);

(statearr_64685_66055[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__55616__auto__ = null;
var cljs$core$async$state_machine__55616__auto____0 = (function (){
var statearr_64686 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64686[(0)] = cljs$core$async$state_machine__55616__auto__);

(statearr_64686[(1)] = (1));

return statearr_64686;
});
var cljs$core$async$state_machine__55616__auto____1 = (function (state_64662){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_64662);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e64687){var ex__55619__auto__ = e64687;
var statearr_64688_66058 = state_64662;
(statearr_64688_66058[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_64662[(4)]))){
var statearr_64689_66059 = state_64662;
(statearr_64689_66059[(1)] = cljs.core.first((state_64662[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66060 = state_64662;
state_64662 = G__66060;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$state_machine__55616__auto__ = function(state_64662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55616__auto____1.call(this,state_64662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55616__auto____0;
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55616__auto____1;
return cljs$core$async$state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_64691 = f__55639__auto__();
(statearr_64691[(6)] = c__55638__auto___66038);

return statearr_64691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__64693 = arguments.length;
switch (G__64693) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55638__auto___66075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_64722){
var state_val_64723 = (state_64722[(1)]);
if((state_val_64723 === (7))){
var inst_64704 = (state_64722[(7)]);
var inst_64704__$1 = (state_64722[(2)]);
var inst_64705 = (inst_64704__$1 == null);
var inst_64706 = cljs.core.not(inst_64705);
var state_64722__$1 = (function (){var statearr_64725 = state_64722;
(statearr_64725[(7)] = inst_64704__$1);

return statearr_64725;
})();
if(inst_64706){
var statearr_64729_66077 = state_64722__$1;
(statearr_64729_66077[(1)] = (8));

} else {
var statearr_64730_66078 = state_64722__$1;
(statearr_64730_66078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64723 === (1))){
var inst_64698 = (0);
var state_64722__$1 = (function (){var statearr_64732 = state_64722;
(statearr_64732[(8)] = inst_64698);

return statearr_64732;
})();
var statearr_64733_66079 = state_64722__$1;
(statearr_64733_66079[(2)] = null);

(statearr_64733_66079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64723 === (4))){
var state_64722__$1 = state_64722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64722__$1,(7),ch);
} else {
if((state_val_64723 === (6))){
var inst_64717 = (state_64722[(2)]);
var state_64722__$1 = state_64722;
var statearr_64735_66080 = state_64722__$1;
(statearr_64735_66080[(2)] = inst_64717);

(statearr_64735_66080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64723 === (3))){
var inst_64719 = (state_64722[(2)]);
var inst_64720 = cljs.core.async.close_BANG_(out);
var state_64722__$1 = (function (){var statearr_64742 = state_64722;
(statearr_64742[(9)] = inst_64719);

return statearr_64742;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64722__$1,inst_64720);
} else {
if((state_val_64723 === (2))){
var inst_64698 = (state_64722[(8)]);
var inst_64700 = (inst_64698 < n);
var state_64722__$1 = state_64722;
if(cljs.core.truth_(inst_64700)){
var statearr_64743_66084 = state_64722__$1;
(statearr_64743_66084[(1)] = (4));

} else {
var statearr_64744_66087 = state_64722__$1;
(statearr_64744_66087[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64723 === (11))){
var inst_64698 = (state_64722[(8)]);
var inst_64709 = (state_64722[(2)]);
var inst_64710 = (inst_64698 + (1));
var inst_64698__$1 = inst_64710;
var state_64722__$1 = (function (){var statearr_64745 = state_64722;
(statearr_64745[(10)] = inst_64709);

(statearr_64745[(8)] = inst_64698__$1);

return statearr_64745;
})();
var statearr_64747_66088 = state_64722__$1;
(statearr_64747_66088[(2)] = null);

(statearr_64747_66088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64723 === (9))){
var state_64722__$1 = state_64722;
var statearr_64748_66089 = state_64722__$1;
(statearr_64748_66089[(2)] = null);

(statearr_64748_66089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64723 === (5))){
var state_64722__$1 = state_64722;
var statearr_64750_66091 = state_64722__$1;
(statearr_64750_66091[(2)] = null);

(statearr_64750_66091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64723 === (10))){
var inst_64714 = (state_64722[(2)]);
var state_64722__$1 = state_64722;
var statearr_64751_66093 = state_64722__$1;
(statearr_64751_66093[(2)] = inst_64714);

(statearr_64751_66093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64723 === (8))){
var inst_64704 = (state_64722[(7)]);
var state_64722__$1 = state_64722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64722__$1,(11),out,inst_64704);
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
});
return (function() {
var cljs$core$async$state_machine__55616__auto__ = null;
var cljs$core$async$state_machine__55616__auto____0 = (function (){
var statearr_64752 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64752[(0)] = cljs$core$async$state_machine__55616__auto__);

(statearr_64752[(1)] = (1));

return statearr_64752;
});
var cljs$core$async$state_machine__55616__auto____1 = (function (state_64722){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_64722);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e64753){var ex__55619__auto__ = e64753;
var statearr_64754_66096 = state_64722;
(statearr_64754_66096[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_64722[(4)]))){
var statearr_64755_66097 = state_64722;
(statearr_64755_66097[(1)] = cljs.core.first((state_64722[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66098 = state_64722;
state_64722 = G__66098;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$state_machine__55616__auto__ = function(state_64722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55616__auto____1.call(this,state_64722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55616__auto____0;
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55616__auto____1;
return cljs$core$async$state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_64756 = f__55639__auto__();
(statearr_64756[(6)] = c__55638__auto___66075);

return statearr_64756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64760 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64760 = (function (f,ch,meta64761){
this.f = f;
this.ch = ch;
this.meta64761 = meta64761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64762,meta64761__$1){
var self__ = this;
var _64762__$1 = this;
return (new cljs.core.async.t_cljs$core$async64760(self__.f,self__.ch,meta64761__$1));
}));

(cljs.core.async.t_cljs$core$async64760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64762){
var self__ = this;
var _64762__$1 = this;
return self__.meta64761;
}));

(cljs.core.async.t_cljs$core$async64760.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64760.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64760.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64760.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64760.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64782 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64782 = (function (f,ch,meta64761,_,fn1,meta64783){
this.f = f;
this.ch = ch;
this.meta64761 = meta64761;
this._ = _;
this.fn1 = fn1;
this.meta64783 = meta64783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64784,meta64783__$1){
var self__ = this;
var _64784__$1 = this;
return (new cljs.core.async.t_cljs$core$async64782(self__.f,self__.ch,self__.meta64761,self__._,self__.fn1,meta64783__$1));
}));

(cljs.core.async.t_cljs$core$async64782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64784){
var self__ = this;
var _64784__$1 = this;
return self__.meta64783;
}));

(cljs.core.async.t_cljs$core$async64782.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async64782.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async64782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__64757_SHARP_){
var G__64786 = (((p1__64757_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__64757_SHARP_) : self__.f.call(null,p1__64757_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__64786) : f1.call(null,G__64786));
});
}));

(cljs.core.async.t_cljs$core$async64782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64761","meta64761",-1254652677,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async64760","cljs.core.async/t_cljs$core$async64760",1828244464,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta64783","meta64783",1952054818,null)], null);
}));

(cljs.core.async.t_cljs$core$async64782.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64782");

(cljs.core.async.t_cljs$core$async64782.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async64782");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64782.
 */
cljs.core.async.__GT_t_cljs$core$async64782 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async64782(f__$1,ch__$1,meta64761__$1,___$2,fn1__$1,meta64783){
return (new cljs.core.async.t_cljs$core$async64782(f__$1,ch__$1,meta64761__$1,___$2,fn1__$1,meta64783));
});

}

return (new cljs.core.async.t_cljs$core$async64782(self__.f,self__.ch,self__.meta64761,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__64789 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__64789) : self__.f.call(null,G__64789));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async64760.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64760.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async64760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64761","meta64761",-1254652677,null)], null);
}));

(cljs.core.async.t_cljs$core$async64760.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64760");

(cljs.core.async.t_cljs$core$async64760.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async64760");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64760.
 */
cljs.core.async.__GT_t_cljs$core$async64760 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async64760(f__$1,ch__$1,meta64761){
return (new cljs.core.async.t_cljs$core$async64760(f__$1,ch__$1,meta64761));
});

}

return (new cljs.core.async.t_cljs$core$async64760(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64792 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64792 = (function (f,ch,meta64793){
this.f = f;
this.ch = ch;
this.meta64793 = meta64793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64794,meta64793__$1){
var self__ = this;
var _64794__$1 = this;
return (new cljs.core.async.t_cljs$core$async64792(self__.f,self__.ch,meta64793__$1));
}));

(cljs.core.async.t_cljs$core$async64792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64794){
var self__ = this;
var _64794__$1 = this;
return self__.meta64793;
}));

(cljs.core.async.t_cljs$core$async64792.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64792.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async64792.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async64792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64793","meta64793",1924669859,null)], null);
}));

(cljs.core.async.t_cljs$core$async64792.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64792");

(cljs.core.async.t_cljs$core$async64792.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async64792");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64792.
 */
cljs.core.async.__GT_t_cljs$core$async64792 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async64792(f__$1,ch__$1,meta64793){
return (new cljs.core.async.t_cljs$core$async64792(f__$1,ch__$1,meta64793));
});

}

return (new cljs.core.async.t_cljs$core$async64792(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64803 = (function (p,ch,meta64804){
this.p = p;
this.ch = ch;
this.meta64804 = meta64804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64805,meta64804__$1){
var self__ = this;
var _64805__$1 = this;
return (new cljs.core.async.t_cljs$core$async64803(self__.p,self__.ch,meta64804__$1));
}));

(cljs.core.async.t_cljs$core$async64803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64805){
var self__ = this;
var _64805__$1 = this;
return self__.meta64804;
}));

(cljs.core.async.t_cljs$core$async64803.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64803.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async64803.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async64803.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async64803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64804","meta64804",2016071024,null)], null);
}));

(cljs.core.async.t_cljs$core$async64803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64803");

(cljs.core.async.t_cljs$core$async64803.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async64803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64803.
 */
cljs.core.async.__GT_t_cljs$core$async64803 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async64803(p__$1,ch__$1,meta64804){
return (new cljs.core.async.t_cljs$core$async64803(p__$1,ch__$1,meta64804));
});

}

return (new cljs.core.async.t_cljs$core$async64803(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__64808 = arguments.length;
switch (G__64808) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55638__auto___66149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_64829){
var state_val_64830 = (state_64829[(1)]);
if((state_val_64830 === (7))){
var inst_64825 = (state_64829[(2)]);
var state_64829__$1 = state_64829;
var statearr_64831_66150 = state_64829__$1;
(statearr_64831_66150[(2)] = inst_64825);

(statearr_64831_66150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64830 === (1))){
var state_64829__$1 = state_64829;
var statearr_64832_66151 = state_64829__$1;
(statearr_64832_66151[(2)] = null);

(statearr_64832_66151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64830 === (4))){
var inst_64811 = (state_64829[(7)]);
var inst_64811__$1 = (state_64829[(2)]);
var inst_64812 = (inst_64811__$1 == null);
var state_64829__$1 = (function (){var statearr_64833 = state_64829;
(statearr_64833[(7)] = inst_64811__$1);

return statearr_64833;
})();
if(cljs.core.truth_(inst_64812)){
var statearr_64834_66153 = state_64829__$1;
(statearr_64834_66153[(1)] = (5));

} else {
var statearr_64835_66156 = state_64829__$1;
(statearr_64835_66156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64830 === (6))){
var inst_64811 = (state_64829[(7)]);
var inst_64816 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_64811) : p.call(null,inst_64811));
var state_64829__$1 = state_64829;
if(cljs.core.truth_(inst_64816)){
var statearr_64836_66157 = state_64829__$1;
(statearr_64836_66157[(1)] = (8));

} else {
var statearr_64837_66162 = state_64829__$1;
(statearr_64837_66162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64830 === (3))){
var inst_64827 = (state_64829[(2)]);
var state_64829__$1 = state_64829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64829__$1,inst_64827);
} else {
if((state_val_64830 === (2))){
var state_64829__$1 = state_64829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64829__$1,(4),ch);
} else {
if((state_val_64830 === (11))){
var inst_64819 = (state_64829[(2)]);
var state_64829__$1 = state_64829;
var statearr_64838_66173 = state_64829__$1;
(statearr_64838_66173[(2)] = inst_64819);

(statearr_64838_66173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64830 === (9))){
var state_64829__$1 = state_64829;
var statearr_64840_66177 = state_64829__$1;
(statearr_64840_66177[(2)] = null);

(statearr_64840_66177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64830 === (5))){
var inst_64814 = cljs.core.async.close_BANG_(out);
var state_64829__$1 = state_64829;
var statearr_64843_66180 = state_64829__$1;
(statearr_64843_66180[(2)] = inst_64814);

(statearr_64843_66180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64830 === (10))){
var inst_64822 = (state_64829[(2)]);
var state_64829__$1 = (function (){var statearr_64844 = state_64829;
(statearr_64844[(8)] = inst_64822);

return statearr_64844;
})();
var statearr_64845_66181 = state_64829__$1;
(statearr_64845_66181[(2)] = null);

(statearr_64845_66181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64830 === (8))){
var inst_64811 = (state_64829[(7)]);
var state_64829__$1 = state_64829;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64829__$1,(11),out,inst_64811);
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
});
return (function() {
var cljs$core$async$state_machine__55616__auto__ = null;
var cljs$core$async$state_machine__55616__auto____0 = (function (){
var statearr_64847 = [null,null,null,null,null,null,null,null,null];
(statearr_64847[(0)] = cljs$core$async$state_machine__55616__auto__);

(statearr_64847[(1)] = (1));

return statearr_64847;
});
var cljs$core$async$state_machine__55616__auto____1 = (function (state_64829){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_64829);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e64848){var ex__55619__auto__ = e64848;
var statearr_64849_66196 = state_64829;
(statearr_64849_66196[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_64829[(4)]))){
var statearr_64850_66197 = state_64829;
(statearr_64850_66197[(1)] = cljs.core.first((state_64829[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66198 = state_64829;
state_64829 = G__66198;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$state_machine__55616__auto__ = function(state_64829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55616__auto____1.call(this,state_64829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55616__auto____0;
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55616__auto____1;
return cljs$core$async$state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_64851 = f__55639__auto__();
(statearr_64851[(6)] = c__55638__auto___66149);

return statearr_64851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__64853 = arguments.length;
switch (G__64853) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__55638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_64916){
var state_val_64917 = (state_64916[(1)]);
if((state_val_64917 === (7))){
var inst_64912 = (state_64916[(2)]);
var state_64916__$1 = state_64916;
var statearr_64918_66210 = state_64916__$1;
(statearr_64918_66210[(2)] = inst_64912);

(statearr_64918_66210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (20))){
var inst_64881 = (state_64916[(7)]);
var inst_64893 = (state_64916[(2)]);
var inst_64894 = cljs.core.next(inst_64881);
var inst_64867 = inst_64894;
var inst_64868 = null;
var inst_64869 = (0);
var inst_64870 = (0);
var state_64916__$1 = (function (){var statearr_64919 = state_64916;
(statearr_64919[(8)] = inst_64867);

(statearr_64919[(9)] = inst_64869);

(statearr_64919[(10)] = inst_64870);

(statearr_64919[(11)] = inst_64868);

(statearr_64919[(12)] = inst_64893);

return statearr_64919;
})();
var statearr_64922_66219 = state_64916__$1;
(statearr_64922_66219[(2)] = null);

(statearr_64922_66219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (1))){
var state_64916__$1 = state_64916;
var statearr_64923_66223 = state_64916__$1;
(statearr_64923_66223[(2)] = null);

(statearr_64923_66223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (4))){
var inst_64856 = (state_64916[(13)]);
var inst_64856__$1 = (state_64916[(2)]);
var inst_64857 = (inst_64856__$1 == null);
var state_64916__$1 = (function (){var statearr_64924 = state_64916;
(statearr_64924[(13)] = inst_64856__$1);

return statearr_64924;
})();
if(cljs.core.truth_(inst_64857)){
var statearr_64925_66230 = state_64916__$1;
(statearr_64925_66230[(1)] = (5));

} else {
var statearr_64926_66231 = state_64916__$1;
(statearr_64926_66231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (15))){
var state_64916__$1 = state_64916;
var statearr_64931_66233 = state_64916__$1;
(statearr_64931_66233[(2)] = null);

(statearr_64931_66233[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (21))){
var state_64916__$1 = state_64916;
var statearr_64932_66234 = state_64916__$1;
(statearr_64932_66234[(2)] = null);

(statearr_64932_66234[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (13))){
var inst_64867 = (state_64916[(8)]);
var inst_64869 = (state_64916[(9)]);
var inst_64870 = (state_64916[(10)]);
var inst_64868 = (state_64916[(11)]);
var inst_64877 = (state_64916[(2)]);
var inst_64878 = (inst_64870 + (1));
var tmp64927 = inst_64867;
var tmp64928 = inst_64869;
var tmp64929 = inst_64868;
var inst_64867__$1 = tmp64927;
var inst_64868__$1 = tmp64929;
var inst_64869__$1 = tmp64928;
var inst_64870__$1 = inst_64878;
var state_64916__$1 = (function (){var statearr_64934 = state_64916;
(statearr_64934[(8)] = inst_64867__$1);

(statearr_64934[(14)] = inst_64877);

(statearr_64934[(9)] = inst_64869__$1);

(statearr_64934[(10)] = inst_64870__$1);

(statearr_64934[(11)] = inst_64868__$1);

return statearr_64934;
})();
var statearr_64935_66237 = state_64916__$1;
(statearr_64935_66237[(2)] = null);

(statearr_64935_66237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (22))){
var state_64916__$1 = state_64916;
var statearr_64936_66238 = state_64916__$1;
(statearr_64936_66238[(2)] = null);

(statearr_64936_66238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (6))){
var inst_64856 = (state_64916[(13)]);
var inst_64865 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_64856) : f.call(null,inst_64856));
var inst_64866 = cljs.core.seq(inst_64865);
var inst_64867 = inst_64866;
var inst_64868 = null;
var inst_64869 = (0);
var inst_64870 = (0);
var state_64916__$1 = (function (){var statearr_64937 = state_64916;
(statearr_64937[(8)] = inst_64867);

(statearr_64937[(9)] = inst_64869);

(statearr_64937[(10)] = inst_64870);

(statearr_64937[(11)] = inst_64868);

return statearr_64937;
})();
var statearr_64938_66240 = state_64916__$1;
(statearr_64938_66240[(2)] = null);

(statearr_64938_66240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (17))){
var inst_64881 = (state_64916[(7)]);
var inst_64885 = cljs.core.chunk_first(inst_64881);
var inst_64886 = cljs.core.chunk_rest(inst_64881);
var inst_64887 = cljs.core.count(inst_64885);
var inst_64867 = inst_64886;
var inst_64868 = inst_64885;
var inst_64869 = inst_64887;
var inst_64870 = (0);
var state_64916__$1 = (function (){var statearr_64939 = state_64916;
(statearr_64939[(8)] = inst_64867);

(statearr_64939[(9)] = inst_64869);

(statearr_64939[(10)] = inst_64870);

(statearr_64939[(11)] = inst_64868);

return statearr_64939;
})();
var statearr_64941_66241 = state_64916__$1;
(statearr_64941_66241[(2)] = null);

(statearr_64941_66241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (3))){
var inst_64914 = (state_64916[(2)]);
var state_64916__$1 = state_64916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64916__$1,inst_64914);
} else {
if((state_val_64917 === (12))){
var inst_64902 = (state_64916[(2)]);
var state_64916__$1 = state_64916;
var statearr_64942_66242 = state_64916__$1;
(statearr_64942_66242[(2)] = inst_64902);

(statearr_64942_66242[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (2))){
var state_64916__$1 = state_64916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64916__$1,(4),in$);
} else {
if((state_val_64917 === (23))){
var inst_64910 = (state_64916[(2)]);
var state_64916__$1 = state_64916;
var statearr_64944_66244 = state_64916__$1;
(statearr_64944_66244[(2)] = inst_64910);

(statearr_64944_66244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (19))){
var inst_64897 = (state_64916[(2)]);
var state_64916__$1 = state_64916;
var statearr_64945_66246 = state_64916__$1;
(statearr_64945_66246[(2)] = inst_64897);

(statearr_64945_66246[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (11))){
var inst_64867 = (state_64916[(8)]);
var inst_64881 = (state_64916[(7)]);
var inst_64881__$1 = cljs.core.seq(inst_64867);
var state_64916__$1 = (function (){var statearr_64946 = state_64916;
(statearr_64946[(7)] = inst_64881__$1);

return statearr_64946;
})();
if(inst_64881__$1){
var statearr_64947_66248 = state_64916__$1;
(statearr_64947_66248[(1)] = (14));

} else {
var statearr_64948_66249 = state_64916__$1;
(statearr_64948_66249[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (9))){
var inst_64904 = (state_64916[(2)]);
var inst_64905 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_64916__$1 = (function (){var statearr_64950 = state_64916;
(statearr_64950[(15)] = inst_64904);

return statearr_64950;
})();
if(cljs.core.truth_(inst_64905)){
var statearr_64951_66250 = state_64916__$1;
(statearr_64951_66250[(1)] = (21));

} else {
var statearr_64952_66251 = state_64916__$1;
(statearr_64952_66251[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (5))){
var inst_64859 = cljs.core.async.close_BANG_(out);
var state_64916__$1 = state_64916;
var statearr_64955_66252 = state_64916__$1;
(statearr_64955_66252[(2)] = inst_64859);

(statearr_64955_66252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (14))){
var inst_64881 = (state_64916[(7)]);
var inst_64883 = cljs.core.chunked_seq_QMARK_(inst_64881);
var state_64916__$1 = state_64916;
if(inst_64883){
var statearr_64956_66254 = state_64916__$1;
(statearr_64956_66254[(1)] = (17));

} else {
var statearr_64957_66255 = state_64916__$1;
(statearr_64957_66255[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (16))){
var inst_64900 = (state_64916[(2)]);
var state_64916__$1 = state_64916;
var statearr_64958_66256 = state_64916__$1;
(statearr_64958_66256[(2)] = inst_64900);

(statearr_64958_66256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64917 === (10))){
var inst_64870 = (state_64916[(10)]);
var inst_64868 = (state_64916[(11)]);
var inst_64875 = cljs.core._nth(inst_64868,inst_64870);
var state_64916__$1 = state_64916;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64916__$1,(13),out,inst_64875);
} else {
if((state_val_64917 === (18))){
var inst_64881 = (state_64916[(7)]);
var inst_64891 = cljs.core.first(inst_64881);
var state_64916__$1 = state_64916;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64916__$1,(20),out,inst_64891);
} else {
if((state_val_64917 === (8))){
var inst_64869 = (state_64916[(9)]);
var inst_64870 = (state_64916[(10)]);
var inst_64872 = (inst_64870 < inst_64869);
var inst_64873 = inst_64872;
var state_64916__$1 = state_64916;
if(cljs.core.truth_(inst_64873)){
var statearr_64959_66260 = state_64916__$1;
(statearr_64959_66260[(1)] = (10));

} else {
var statearr_64960_66261 = state_64916__$1;
(statearr_64960_66261[(1)] = (11));

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__55616__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__55616__auto____0 = (function (){
var statearr_64961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64961[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__55616__auto__);

(statearr_64961[(1)] = (1));

return statearr_64961;
});
var cljs$core$async$mapcat_STAR__$_state_machine__55616__auto____1 = (function (state_64916){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_64916);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e64962){var ex__55619__auto__ = e64962;
var statearr_64963_66265 = state_64916;
(statearr_64963_66265[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_64916[(4)]))){
var statearr_64964_66266 = state_64916;
(statearr_64964_66266[(1)] = cljs.core.first((state_64916[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66268 = state_64916;
state_64916 = G__66268;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__55616__auto__ = function(state_64916){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__55616__auto____1.call(this,state_64916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__55616__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__55616__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_64965 = f__55639__auto__();
(statearr_64965[(6)] = c__55638__auto__);

return statearr_64965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));

return c__55638__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__64967 = arguments.length;
switch (G__64967) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__64972 = arguments.length;
switch (G__64972) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__64975 = arguments.length;
switch (G__64975) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55638__auto___66275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_65004){
var state_val_65005 = (state_65004[(1)]);
if((state_val_65005 === (7))){
var inst_64998 = (state_65004[(2)]);
var state_65004__$1 = state_65004;
var statearr_65007_66276 = state_65004__$1;
(statearr_65007_66276[(2)] = inst_64998);

(statearr_65007_66276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65005 === (1))){
var inst_64980 = null;
var state_65004__$1 = (function (){var statearr_65008 = state_65004;
(statearr_65008[(7)] = inst_64980);

return statearr_65008;
})();
var statearr_65009_66278 = state_65004__$1;
(statearr_65009_66278[(2)] = null);

(statearr_65009_66278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65005 === (4))){
var inst_64983 = (state_65004[(8)]);
var inst_64983__$1 = (state_65004[(2)]);
var inst_64984 = (inst_64983__$1 == null);
var inst_64985 = cljs.core.not(inst_64984);
var state_65004__$1 = (function (){var statearr_65010 = state_65004;
(statearr_65010[(8)] = inst_64983__$1);

return statearr_65010;
})();
if(inst_64985){
var statearr_65012_66279 = state_65004__$1;
(statearr_65012_66279[(1)] = (5));

} else {
var statearr_65013_66280 = state_65004__$1;
(statearr_65013_66280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65005 === (6))){
var state_65004__$1 = state_65004;
var statearr_65015_66282 = state_65004__$1;
(statearr_65015_66282[(2)] = null);

(statearr_65015_66282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65005 === (3))){
var inst_65000 = (state_65004[(2)]);
var inst_65001 = cljs.core.async.close_BANG_(out);
var state_65004__$1 = (function (){var statearr_65016 = state_65004;
(statearr_65016[(9)] = inst_65000);

return statearr_65016;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65004__$1,inst_65001);
} else {
if((state_val_65005 === (2))){
var state_65004__$1 = state_65004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65004__$1,(4),ch);
} else {
if((state_val_65005 === (11))){
var inst_64983 = (state_65004[(8)]);
var inst_64992 = (state_65004[(2)]);
var inst_64980 = inst_64983;
var state_65004__$1 = (function (){var statearr_65017 = state_65004;
(statearr_65017[(10)] = inst_64992);

(statearr_65017[(7)] = inst_64980);

return statearr_65017;
})();
var statearr_65018_66288 = state_65004__$1;
(statearr_65018_66288[(2)] = null);

(statearr_65018_66288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65005 === (9))){
var inst_64983 = (state_65004[(8)]);
var state_65004__$1 = state_65004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65004__$1,(11),out,inst_64983);
} else {
if((state_val_65005 === (5))){
var inst_64983 = (state_65004[(8)]);
var inst_64980 = (state_65004[(7)]);
var inst_64987 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_64983,inst_64980);
var state_65004__$1 = state_65004;
if(inst_64987){
var statearr_65020_66289 = state_65004__$1;
(statearr_65020_66289[(1)] = (8));

} else {
var statearr_65021_66290 = state_65004__$1;
(statearr_65021_66290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65005 === (10))){
var inst_64995 = (state_65004[(2)]);
var state_65004__$1 = state_65004;
var statearr_65022_66291 = state_65004__$1;
(statearr_65022_66291[(2)] = inst_64995);

(statearr_65022_66291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65005 === (8))){
var inst_64980 = (state_65004[(7)]);
var tmp65019 = inst_64980;
var inst_64980__$1 = tmp65019;
var state_65004__$1 = (function (){var statearr_65023 = state_65004;
(statearr_65023[(7)] = inst_64980__$1);

return statearr_65023;
})();
var statearr_65024_66292 = state_65004__$1;
(statearr_65024_66292[(2)] = null);

(statearr_65024_66292[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__55616__auto__ = null;
var cljs$core$async$state_machine__55616__auto____0 = (function (){
var statearr_65025 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65025[(0)] = cljs$core$async$state_machine__55616__auto__);

(statearr_65025[(1)] = (1));

return statearr_65025;
});
var cljs$core$async$state_machine__55616__auto____1 = (function (state_65004){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_65004);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e65026){var ex__55619__auto__ = e65026;
var statearr_65027_66295 = state_65004;
(statearr_65027_66295[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_65004[(4)]))){
var statearr_65028_66296 = state_65004;
(statearr_65028_66296[(1)] = cljs.core.first((state_65004[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66301 = state_65004;
state_65004 = G__66301;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$state_machine__55616__auto__ = function(state_65004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55616__auto____1.call(this,state_65004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55616__auto____0;
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55616__auto____1;
return cljs$core$async$state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_65029 = f__55639__auto__();
(statearr_65029[(6)] = c__55638__auto___66275);

return statearr_65029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__65031 = arguments.length;
switch (G__65031) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55638__auto___66313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_65072){
var state_val_65073 = (state_65072[(1)]);
if((state_val_65073 === (7))){
var inst_65067 = (state_65072[(2)]);
var state_65072__$1 = state_65072;
var statearr_65074_66314 = state_65072__$1;
(statearr_65074_66314[(2)] = inst_65067);

(statearr_65074_66314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65073 === (1))){
var inst_65033 = (new Array(n));
var inst_65034 = inst_65033;
var inst_65035 = (0);
var state_65072__$1 = (function (){var statearr_65076 = state_65072;
(statearr_65076[(7)] = inst_65035);

(statearr_65076[(8)] = inst_65034);

return statearr_65076;
})();
var statearr_65078_66315 = state_65072__$1;
(statearr_65078_66315[(2)] = null);

(statearr_65078_66315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65073 === (4))){
var inst_65038 = (state_65072[(9)]);
var inst_65038__$1 = (state_65072[(2)]);
var inst_65039 = (inst_65038__$1 == null);
var inst_65040 = cljs.core.not(inst_65039);
var state_65072__$1 = (function (){var statearr_65080 = state_65072;
(statearr_65080[(9)] = inst_65038__$1);

return statearr_65080;
})();
if(inst_65040){
var statearr_65081_66321 = state_65072__$1;
(statearr_65081_66321[(1)] = (5));

} else {
var statearr_65082_66322 = state_65072__$1;
(statearr_65082_66322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65073 === (15))){
var inst_65061 = (state_65072[(2)]);
var state_65072__$1 = state_65072;
var statearr_65086_66327 = state_65072__$1;
(statearr_65086_66327[(2)] = inst_65061);

(statearr_65086_66327[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65073 === (13))){
var state_65072__$1 = state_65072;
var statearr_65087_66330 = state_65072__$1;
(statearr_65087_66330[(2)] = null);

(statearr_65087_66330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65073 === (6))){
var inst_65035 = (state_65072[(7)]);
var inst_65057 = (inst_65035 > (0));
var state_65072__$1 = state_65072;
if(cljs.core.truth_(inst_65057)){
var statearr_65090_66337 = state_65072__$1;
(statearr_65090_66337[(1)] = (12));

} else {
var statearr_65091_66338 = state_65072__$1;
(statearr_65091_66338[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65073 === (3))){
var inst_65069 = (state_65072[(2)]);
var state_65072__$1 = state_65072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65072__$1,inst_65069);
} else {
if((state_val_65073 === (12))){
var inst_65034 = (state_65072[(8)]);
var inst_65059 = cljs.core.vec(inst_65034);
var state_65072__$1 = state_65072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65072__$1,(15),out,inst_65059);
} else {
if((state_val_65073 === (2))){
var state_65072__$1 = state_65072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65072__$1,(4),ch);
} else {
if((state_val_65073 === (11))){
var inst_65051 = (state_65072[(2)]);
var inst_65052 = (new Array(n));
var inst_65034 = inst_65052;
var inst_65035 = (0);
var state_65072__$1 = (function (){var statearr_65097 = state_65072;
(statearr_65097[(7)] = inst_65035);

(statearr_65097[(10)] = inst_65051);

(statearr_65097[(8)] = inst_65034);

return statearr_65097;
})();
var statearr_65098_66343 = state_65072__$1;
(statearr_65098_66343[(2)] = null);

(statearr_65098_66343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65073 === (9))){
var inst_65034 = (state_65072[(8)]);
var inst_65049 = cljs.core.vec(inst_65034);
var state_65072__$1 = state_65072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65072__$1,(11),out,inst_65049);
} else {
if((state_val_65073 === (5))){
var inst_65044 = (state_65072[(11)]);
var inst_65035 = (state_65072[(7)]);
var inst_65038 = (state_65072[(9)]);
var inst_65034 = (state_65072[(8)]);
var inst_65043 = (inst_65034[inst_65035] = inst_65038);
var inst_65044__$1 = (inst_65035 + (1));
var inst_65045 = (inst_65044__$1 < n);
var state_65072__$1 = (function (){var statearr_65103 = state_65072;
(statearr_65103[(11)] = inst_65044__$1);

(statearr_65103[(12)] = inst_65043);

return statearr_65103;
})();
if(cljs.core.truth_(inst_65045)){
var statearr_65104_66351 = state_65072__$1;
(statearr_65104_66351[(1)] = (8));

} else {
var statearr_65105_66352 = state_65072__$1;
(statearr_65105_66352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65073 === (14))){
var inst_65064 = (state_65072[(2)]);
var inst_65065 = cljs.core.async.close_BANG_(out);
var state_65072__$1 = (function (){var statearr_65109 = state_65072;
(statearr_65109[(13)] = inst_65064);

return statearr_65109;
})();
var statearr_65110_66353 = state_65072__$1;
(statearr_65110_66353[(2)] = inst_65065);

(statearr_65110_66353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65073 === (10))){
var inst_65055 = (state_65072[(2)]);
var state_65072__$1 = state_65072;
var statearr_65111_66355 = state_65072__$1;
(statearr_65111_66355[(2)] = inst_65055);

(statearr_65111_66355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65073 === (8))){
var inst_65044 = (state_65072[(11)]);
var inst_65034 = (state_65072[(8)]);
var tmp65106 = inst_65034;
var inst_65034__$1 = tmp65106;
var inst_65035 = inst_65044;
var state_65072__$1 = (function (){var statearr_65112 = state_65072;
(statearr_65112[(7)] = inst_65035);

(statearr_65112[(8)] = inst_65034__$1);

return statearr_65112;
})();
var statearr_65113_66356 = state_65072__$1;
(statearr_65113_66356[(2)] = null);

(statearr_65113_66356[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__55616__auto__ = null;
var cljs$core$async$state_machine__55616__auto____0 = (function (){
var statearr_65115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65115[(0)] = cljs$core$async$state_machine__55616__auto__);

(statearr_65115[(1)] = (1));

return statearr_65115;
});
var cljs$core$async$state_machine__55616__auto____1 = (function (state_65072){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_65072);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e65117){var ex__55619__auto__ = e65117;
var statearr_65118_66363 = state_65072;
(statearr_65118_66363[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_65072[(4)]))){
var statearr_65119_66364 = state_65072;
(statearr_65119_66364[(1)] = cljs.core.first((state_65072[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66365 = state_65072;
state_65072 = G__66365;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$state_machine__55616__auto__ = function(state_65072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55616__auto____1.call(this,state_65072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55616__auto____0;
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55616__auto____1;
return cljs$core$async$state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_65122 = f__55639__auto__();
(statearr_65122[(6)] = c__55638__auto___66313);

return statearr_65122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__65124 = arguments.length;
switch (G__65124) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55638__auto___66367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55639__auto__ = (function (){var switch__55615__auto__ = (function (state_65166){
var state_val_65167 = (state_65166[(1)]);
if((state_val_65167 === (7))){
var inst_65162 = (state_65166[(2)]);
var state_65166__$1 = state_65166;
var statearr_65169_66369 = state_65166__$1;
(statearr_65169_66369[(2)] = inst_65162);

(statearr_65169_66369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65167 === (1))){
var inst_65125 = [];
var inst_65126 = inst_65125;
var inst_65127 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_65166__$1 = (function (){var statearr_65172 = state_65166;
(statearr_65172[(7)] = inst_65127);

(statearr_65172[(8)] = inst_65126);

return statearr_65172;
})();
var statearr_65173_66371 = state_65166__$1;
(statearr_65173_66371[(2)] = null);

(statearr_65173_66371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65167 === (4))){
var inst_65130 = (state_65166[(9)]);
var inst_65130__$1 = (state_65166[(2)]);
var inst_65131 = (inst_65130__$1 == null);
var inst_65132 = cljs.core.not(inst_65131);
var state_65166__$1 = (function (){var statearr_65175 = state_65166;
(statearr_65175[(9)] = inst_65130__$1);

return statearr_65175;
})();
if(inst_65132){
var statearr_65176_66374 = state_65166__$1;
(statearr_65176_66374[(1)] = (5));

} else {
var statearr_65177_66375 = state_65166__$1;
(statearr_65177_66375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65167 === (15))){
var inst_65156 = (state_65166[(2)]);
var state_65166__$1 = state_65166;
var statearr_65178_66376 = state_65166__$1;
(statearr_65178_66376[(2)] = inst_65156);

(statearr_65178_66376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65167 === (13))){
var state_65166__$1 = state_65166;
var statearr_65180_66377 = state_65166__$1;
(statearr_65180_66377[(2)] = null);

(statearr_65180_66377[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65167 === (6))){
var inst_65126 = (state_65166[(8)]);
var inst_65151 = inst_65126.length;
var inst_65152 = (inst_65151 > (0));
var state_65166__$1 = state_65166;
if(cljs.core.truth_(inst_65152)){
var statearr_65185_66378 = state_65166__$1;
(statearr_65185_66378[(1)] = (12));

} else {
var statearr_65186_66379 = state_65166__$1;
(statearr_65186_66379[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65167 === (3))){
var inst_65164 = (state_65166[(2)]);
var state_65166__$1 = state_65166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65166__$1,inst_65164);
} else {
if((state_val_65167 === (12))){
var inst_65126 = (state_65166[(8)]);
var inst_65154 = cljs.core.vec(inst_65126);
var state_65166__$1 = state_65166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65166__$1,(15),out,inst_65154);
} else {
if((state_val_65167 === (2))){
var state_65166__$1 = state_65166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65166__$1,(4),ch);
} else {
if((state_val_65167 === (11))){
var inst_65130 = (state_65166[(9)]);
var inst_65134 = (state_65166[(10)]);
var inst_65144 = (state_65166[(2)]);
var inst_65145 = [];
var inst_65146 = inst_65145.push(inst_65130);
var inst_65126 = inst_65145;
var inst_65127 = inst_65134;
var state_65166__$1 = (function (){var statearr_65188 = state_65166;
(statearr_65188[(7)] = inst_65127);

(statearr_65188[(11)] = inst_65146);

(statearr_65188[(8)] = inst_65126);

(statearr_65188[(12)] = inst_65144);

return statearr_65188;
})();
var statearr_65189_66380 = state_65166__$1;
(statearr_65189_66380[(2)] = null);

(statearr_65189_66380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65167 === (9))){
var inst_65126 = (state_65166[(8)]);
var inst_65142 = cljs.core.vec(inst_65126);
var state_65166__$1 = state_65166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65166__$1,(11),out,inst_65142);
} else {
if((state_val_65167 === (5))){
var inst_65130 = (state_65166[(9)]);
var inst_65127 = (state_65166[(7)]);
var inst_65134 = (state_65166[(10)]);
var inst_65134__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_65130) : f.call(null,inst_65130));
var inst_65135 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65134__$1,inst_65127);
var inst_65136 = cljs.core.keyword_identical_QMARK_(inst_65127,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_65137 = ((inst_65135) || (inst_65136));
var state_65166__$1 = (function (){var statearr_65190 = state_65166;
(statearr_65190[(10)] = inst_65134__$1);

return statearr_65190;
})();
if(cljs.core.truth_(inst_65137)){
var statearr_65191_66445 = state_65166__$1;
(statearr_65191_66445[(1)] = (8));

} else {
var statearr_65192_66447 = state_65166__$1;
(statearr_65192_66447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65167 === (14))){
var inst_65159 = (state_65166[(2)]);
var inst_65160 = cljs.core.async.close_BANG_(out);
var state_65166__$1 = (function (){var statearr_65194 = state_65166;
(statearr_65194[(13)] = inst_65159);

return statearr_65194;
})();
var statearr_65195_66452 = state_65166__$1;
(statearr_65195_66452[(2)] = inst_65160);

(statearr_65195_66452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65167 === (10))){
var inst_65149 = (state_65166[(2)]);
var state_65166__$1 = state_65166;
var statearr_65196_66454 = state_65166__$1;
(statearr_65196_66454[(2)] = inst_65149);

(statearr_65196_66454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65167 === (8))){
var inst_65130 = (state_65166[(9)]);
var inst_65134 = (state_65166[(10)]);
var inst_65126 = (state_65166[(8)]);
var inst_65139 = inst_65126.push(inst_65130);
var tmp65193 = inst_65126;
var inst_65126__$1 = tmp65193;
var inst_65127 = inst_65134;
var state_65166__$1 = (function (){var statearr_65197 = state_65166;
(statearr_65197[(7)] = inst_65127);

(statearr_65197[(8)] = inst_65126__$1);

(statearr_65197[(14)] = inst_65139);

return statearr_65197;
})();
var statearr_65198_66455 = state_65166__$1;
(statearr_65198_66455[(2)] = null);

(statearr_65198_66455[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__55616__auto__ = null;
var cljs$core$async$state_machine__55616__auto____0 = (function (){
var statearr_65199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65199[(0)] = cljs$core$async$state_machine__55616__auto__);

(statearr_65199[(1)] = (1));

return statearr_65199;
});
var cljs$core$async$state_machine__55616__auto____1 = (function (state_65166){
while(true){
var ret_value__55617__auto__ = (function (){try{while(true){
var result__55618__auto__ = switch__55615__auto__(state_65166);
if(cljs.core.keyword_identical_QMARK_(result__55618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55618__auto__;
}
break;
}
}catch (e65200){var ex__55619__auto__ = e65200;
var statearr_65201_66457 = state_65166;
(statearr_65201_66457[(2)] = ex__55619__auto__);


if(cljs.core.seq((state_65166[(4)]))){
var statearr_65202_66459 = state_65166;
(statearr_65202_66459[(1)] = cljs.core.first((state_65166[(4)])));

} else {
throw ex__55619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66460 = state_65166;
state_65166 = G__66460;
continue;
} else {
return ret_value__55617__auto__;
}
break;
}
});
cljs$core$async$state_machine__55616__auto__ = function(state_65166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55616__auto____1.call(this,state_65166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55616__auto____0;
cljs$core$async$state_machine__55616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55616__auto____1;
return cljs$core$async$state_machine__55616__auto__;
})()
})();
var state__55640__auto__ = (function (){var statearr_65203 = f__55639__auto__();
(statearr_65203[(6)] = c__55638__auto___66367);

return statearr_65203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55640__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
