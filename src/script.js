let no2 = '';
let no1 = '';
let showFormula = ' ';
let op = ' ';
let status = '1';



const clrAll = () => {
    document.getElementById('showNotice').innerHTML = '';
    document.getElementById('showAnswer').value = '';
    no1 = '';no2 = '';op = ''; status = 1;
}

const retFormula = () => {
    if(status == 3) {  
    clrAll();
    } else { 
        showFormula = no1 + op + no2;
        document.getElementById('showAnswer').value = showFormula; 
    }
  
}

document.getElementById('opAdd').addEventListener("click", () => {
    op = ' + ';
    status = 2;
    retFormula()
});
document.getElementById('opSub').addEventListener("click", () => {
    op = ' - ';
    status = 2;
    retFormula()
});

document.getElementById('opMul').addEventListener("click", () => {
    op = ' * ';
    status = 2;
    retFormula()
});
document.getElementById('opDiv').addEventListener("click", () => {
    op = ' / ';
    status = 2;
    retFormula()
});
document.getElementById('opMod').addEventListener("click", () => {
    op = ' % ';
    status = 2;
    retFormula()
});


document.getElementById('no1').addEventListener("click", 
() => {status == 1 ? no1 += '1' : no2 +=  '1'; retFormula(); });
document.getElementById('no2').addEventListener("click", 
() => {status == 1 ? no1 +=  '2' : no2 +=  '2'; retFormula(); });
document.getElementById('no3').addEventListener("click", 
() => {status == 1 ? no1 +=  '3' : no2 +=  '3'; retFormula(); });
document.getElementById('no4').addEventListener("click", 
() => {status == 1 ? no1 +=  '4' : no2 +=  '4'; retFormula(); });
document.getElementById('no5').addEventListener("click", 
() => {status == 1 ? no1 +=  '5' : no2 +=  '5'; retFormula(); });
document.getElementById('no6').addEventListener("click", 
() => {status == 1 ? no1 +=  '6' : no2 +=  '6'; retFormula(); });
document.getElementById('no7').addEventListener("click", 
() => {status == 1 ? no1 +=  '7' : no2 += '7'; retFormula(); });
document.getElementById('no8').addEventListener("click", 
() => {status == 1 ? no1 +=  '8' : no2 +=  '8'; retFormula(); });
document.getElementById('no9').addEventListener("click", 
() => {status == 1 ? no1 +=  '9' : no2 +=  '9'; retFormula(); });
document.getElementById('no0').addEventListener("click", 
() => {status == 1 ? no1 +=  '0' : no2 +=  '0'; retFormula(); });



document.getElementById('opClr').addEventListener("click", clrAll );

const solve = () => {
   let no1Num = parseFloat(no1); 
   let no2Num = parseFloat(no2);
   let ans = '';
   switch(op){
       case ' + ': ans = no1Num +  no2Num; break;
       case ' - ': ans = no1Num -  no2Num; break;
       case ' * ': ans = no1Num *  no2Num; break;
       case ' / ': ans = no1Num /  no2Num; break;
       case ' % ': ans = no1Num %  no2Num; break;
       default: ans = no1Num;
   }
   no1 = 0;
   document.getElementById('showAnswer').value = ans;
   document.getElementById('showNotice').style.display = 'block';
   document.getElementById('showNotice').innerHTML
   =  'Please click on any key to reset';
   no1 = ans;
   status = 3;
}

document.getElementById('ans').addEventListener('click', solve);