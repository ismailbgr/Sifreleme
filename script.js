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
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
prompt("Sonuç",e)
}
}

function decode(){
var yazi = prompt("Şifresini Çözmek İstediğiniz Yazıyı Yazınız","")
var a = window.atob(yazi)
var b = window.atob(a)
var c = window.atob(b)
var d = window.atob(c)
var e = decodeURI(d)
console.log(yazi)
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
if(c=="null"){
console.log("null bulundu")
alert("Hata 01 Gönderilen Yazının İçeriği Boş")
}else{
prompt("Sonuç",e)
}
}
