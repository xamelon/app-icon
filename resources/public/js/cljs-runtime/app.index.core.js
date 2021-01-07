goog.provide('app.index.core');
if((typeof app !== 'undefined') && (typeof app.index !== 'undefined') && (typeof app.index.core !== 'undefined') && (typeof app.index.core.image !== 'undefined')){
} else {
app.index.core.image = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.index.core.on_click_file = (function app$index$core$on_click_file(){
return document.getElementById("icon-file").click();
});
app.index.core.on_read_file = (function app$index$core$on_read_file(e){
console.log(e);

var result = e.target.result;
return cljs.core.reset_BANG_(app.index.core.image,result);
});
app.index.core.on_load_file = (function app$index$core$on_load_file(event){
var file = document.getElementById("icon-file").files;
var reader = (new FileReader());
(reader.onload = (function (p1__58156_SHARP_){
return app.index.core.on_read_file(p1__58156_SHARP_);
}));

return reader.readAsDataURL(cljs.core.first(file));
});
app.index.core.draw_to_canvas = (function app$index$core$draw_to_canvas(e){
console.log(e);

var result = e.target.result;
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
var image = (new Image("1024px","1024px"));
(image.src = result);

context.drawImage(image,(0),(0),"1024px","1024px");

context.fillRect((20),(20),(20),(20));

var img = canvas.toDataURL();
var link = document.createElement("a");
(link.download = "filename.png");

(link.href = img);

return link.click();
});
app.index.core.generate_icons = (function app$index$core$generate_icons(){
var svg = document.getElementById("generated-app-icon");
var blob = (new Blob([svg.outerHTML],({"type": "image/svg+xml;charset=utf-8"})));
var reader = (new FileReader());
(reader.onloadend = (function (p1__58157_SHARP_){
return app.index.core.draw_to_canvas(p1__58157_SHARP_);
}));

return reader.readAsDataURL(blob);
});
app.index.core.core = (function app$index$core$core(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app_index_core-53-17","app_index_core-53-17",338216078)], null),"This is app icon generator"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.index.core.on_click_file();
}),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app_index_core-56-18","app_index_core-56-18",998487009)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"icon-file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__58158_SHARP_){
return app.index.core.on_load_file(p1__58158_SHARP_);
}),new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app_index_core-69-21","app_index_core-69-21",-1314403770)], null)], null),(cljs.core.truth_(cljs.core.deref(app.index.core.image))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"id","id",-1388402092),"generated-app-icon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.deref(app.index.core.image),new cljs.core.Keyword(null,"x","x",2099068185),"0",new cljs.core.Keyword(null,"y","y",-1757859776),"0",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-45 50 50)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),"grey",new cljs.core.Keyword(null,"width","width",-384071477),"150",new cljs.core.Keyword(null,"height","height",1025178622),"40",new cljs.core.Keyword(null,"x","x",2099068185),"-20"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),"53",new cljs.core.Keyword(null,"y","y",-1757859776),"23",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"alignment-baseline","alignment-baseline",-311060879),"middle",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null),"DEMO"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Drag and drop here",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"app_index_core-94-22","app_index_core-94-22",-1065543299)], null),"or clic to choose file"], null)], null))], null),(cljs.core.truth_(cljs.core.deref(app.index.core.image))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.index.core.generate_icons();
})], null),"Download"], null):null)], null);
});

//# sourceMappingURL=app.index.core.js.map
