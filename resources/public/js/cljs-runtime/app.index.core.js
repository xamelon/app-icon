goog.provide('app.index.core');
app.index.core.on_click_file = (function app$index$core$on_click_file(){
return document.getElementById("icon-file").click();
});
app.index.core.on_load_file = (function app$index$core$on_load_file(event){
var file = document.getElementById("icon-file").files();
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file], 0));
});
app.index.core.core = (function app$index$core$core(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app_index_core-19-17","app_index_core-19-17",35043461)], null),"This is app icon generator"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.index.core.on_click_file();
}),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app_index_core-21-18","app_index_core-21-18",1307991588)], null),"Drag and drop here",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app_index_core-33-19","app_index_core-33-19",916064381)], null),"or clic to choose file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"icon-file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__73495_SHARP_){
return app.index.core.on_load_file(p1__73495_SHARP_);
}),new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app_index_core-38-21","app_index_core-38-21",1772807171)], null)], null)], null)], null);
});

//# sourceMappingURL=app.index.core.js.map
