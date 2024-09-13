const display=document.getElementById("display");

function hisoblash(){
   display.value=eval(display.value);
}


function del(){
    display.value=display.value.slice(0,-1);
}