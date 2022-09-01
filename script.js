function display(val){
    document.getElementById("scr").innerText += `${val}`;

    
}
function clearScreen(){
    document.getElementById("scr").innerText = "";


}
function result(){
    x = document.getElementById("scr").innerText;
    clearScreen();
    display(eval(x));

}
function del(){
    x=[];
    x = document.getElementById("scr").innerText;
    y = x.length;
    clearScreen();
    for(let i=0;i<y-1;i++){
        display(x[i]);
    }


}
