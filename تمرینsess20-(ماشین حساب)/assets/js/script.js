let _dis=document.getElementsByClassName('dis')[0];
function _data(data) {
_dis.value+=data;
}
function C(){
_dis.value="";
}
function del(){
let x=_dis.value.slice(0,-1)
_dis.value=x
}
function _eval(){
const result=eval(_dis.value)
_dis.value=result
}