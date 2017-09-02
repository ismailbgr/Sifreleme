function encode(){
var yazi = prompt("Kodlamak İstediğiniz Yazıyı Yazınız","")
if(yazi == null){
console.log("null engellendi")
}else{

var a = encodeURI(yazi)
var b = window.btoa(a)
var c = window.btoa(b)
var d = window.btoa(c)
var e = window.btoa(d)
var f = window.btoa(e)
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
prompt("Sonuç",f)
}
}

function decode(){
var yazi = prompt("Şifresini Çözmek İstediğiniz Yazıyı Yazınız","")
var a = window.atob(yazi)
var b = window.atob(a)
var c = window.atob(b)
var d = window.atob(c)
var e = window.atob(d)
var f = decodeURI(e)
console.log(yazi)
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
if(c=="null"){
console.log("null bulundu")
alert("Hata 01 Gönderilen Yazının İçeriği Boş")
}else{
prompt("Sonuç",f)
}
}
