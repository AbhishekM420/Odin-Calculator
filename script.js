let nine = document.querySelector("#nine");
let eight = document.querySelector("#eight");
let  seven = document.querySelector("#seven");
let six = document.querySelector("#six");
let five = document.querySelector("#five");
let four = document.querySelector("#four");
let  three = document.querySelector("#three");            //
let two = document.querySelector("#two");
let one = document.querySelector("#one");
let zero = document.querySelector("#zero");
let  plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");
let decimal = document.querySelector("#decimal");
let clear = document.querySelector("#clear");
const display = document.querySelector(".display")
const fv = document.querySelector(".fv");
const sv = document.querySelector(".sv");
const res = document.querySelector(".res");
const op = document.querySelector(".op");
const equal = document.querySelector("#eql")
const del = document.querySelector("#del")

nine.addEventListener("click",Nine);
eight.addEventListener("click",Eight);
seven.addEventListener("click",Seven);
six.addEventListener("click",Six);
five.addEventListener("click",Five);
four.addEventListener("click",Four);
three.addEventListener("click",Three);
two.addEventListener("click",Two);
one.addEventListener("click",One);
zero.addEventListener("click",Zero);
plus.addEventListener("click",Plus);
minus.addEventListener("click",Minus);
divide.addEventListener("click",Divide);
multiply.addEventListener("click",Multiply);
decimal.addEventListener("click",Decimal);
clear.addEventListener("click",Clear);
equal.addEventListener("click", Equal)
del.addEventListener("click",Dell)


function One(){
    fnum += 1;
    fv.textContent = fnum;
}
function Two(){
    fnum += 2;
    fv.textContent = fnum;
}
function Three(){
    fnum  += 3;
    fv.textContent = fnum;
}
function Four (){
    fnum  += 4;
    fv.textContent = fnum;
}
function Five(){
    fnum  += 5;
    fv.textContent = fnum;
}
function Six(){
    fnum += 6;
    fv.textContent = fnum;
}
function Seven(){
    fnum += 7;
    fv.textContent = fnum;
}
function Eight(){
    fnum += 8;
    fv.textContent = fnum;
}
function Nine(){
    fnum += 9;
    fv.textContent = fnum;
}
function Zero (){
    fnum += 0 ;
    fv.textContent = fnum;
}
function Divide(){
    if( opr !=0 && opr != "="){
        Equal();
    }
   
    op.textContent ="/";
    if( result ==0)
    snum = fnum;
    else snum = result;
    fnum = "";
    opr = "/";
    
    
}
function Multiply(){
    if( opr !=0 && opr != "="){
        Equal();
    }
    op.textContent ="*";
    if( result ==0)
    snum = fnum;
    else snum = result;
    fnum ="";
    opr = "*";
    
}
function Plus(){
    if( opr !=0 && opr != "="){
        Equal();
    }
    
    
    op.textContent ="+";
    if( result ==0)
    snum = fnum;
    else snum = result;
    fnum = "";
    opr = "+";
    
}
function Minus(){
    if( opr !=0 && opr != "="){
        Equal();
    }
    op.textContent ="-";
    if( result ==0)
    snum = fnum;
    else snum = result;
    fnum ="";
    opr = "-";
    
}
function Decimal(){
    
    fnum += "." ;
    fv.textContent = fnum;
}
function Clear(){
   fv.textContent = "";
   op.textContent = "";
   sv.textContent = "";
   res.textContent = "";
    snum = "";
    fnum = "";
    result = 0;
   
}
 
let fnum = "";
let snum = "";
let result = 0;
let opr = "";

function Equal(){
    if( opr == "/"){
        result =  Number(snum) / Number(fnum);
        console.log(result);
        res.textContent = result;
        snum = result;
        }
    else  if( opr == "*"){
        result =  Number(fnum) * Number(snum);
            console.log(result);
            res.textContent = result;
            snum = result;
    }
     else  if( opr == "+"){
                result =  Number(fnum)+ Number(snum);
                console.log(result);
                res.textContent = result;
                snum = result;
    }
    else  if( opr == "-"){
        result =  Number(snum) - Number(fnum);
        console.log(result);
        res.textContent = result;
        snum = result;
        }
        opr = "=";
}
function Dell(){
    fnum = fnum.substring(0,fnum.length-1)
    fv.textContent = fnum;
}
if( fnum != "" && snum!= ""){
    fv.textContent = fnum;
    sv.textContent = snum;
}
