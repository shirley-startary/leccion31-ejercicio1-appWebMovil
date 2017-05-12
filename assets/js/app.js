var menupequeno = document.getElementById("menupequeno");
var nav = document.getElementById("navegador")
console.log(nav);
menupequeno.addEventListener("click",mostrarbarra);

function mostrarbarra(){
  console.log(nav);
  if(nav.style.display=="none"){
    nav.style.display="block";
  }else{
    nav.style.block="none";
  }
  // menupequeno.style.display="block";
}
