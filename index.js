let num;
let sno=0;
text=document.getElementsByClassName('input2')[0]
function getval(num){
    text.value+=num;


}

function clr() {
    text.value='';
}

function getsum(){
    total=eval(text.value);
    text.value=total;    
}

    function onoff(){
        sno=sno+1;
        if(sno%2==0){
            console.log(sno);
        }
        else{
            console.log('hello');
        }
    }
    