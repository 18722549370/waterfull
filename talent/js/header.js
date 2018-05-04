var Header=document.getElementById("header");
window.addEventListener("scroll",function(){
    var scrollH=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollH > 0){
    Header.className="add";
}else{
    Header.className="";

    }
});

var Pbtn=document.getElementById("phone");
var flag=false;
Pbtn.onclick=function(){
    flag=!flag;
    if(flag){
    this.className='navbar-icons open';
}else{
    this.className='navbar-icons';
}

}

