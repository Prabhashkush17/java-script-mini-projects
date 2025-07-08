

let principal = document.querySelector('#loanamtinput');
let interest = document.querySelector('#intrestrateinput');
let timetopay = document.querySelector('#timeintervalinput');
let calculate = document.querySelector('#Calculate');
let emi = document.querySelector('#emi');

console.log(principal, interest, timetopay);

function calculateEMI(){
    if(principal.value === '' || interest.value === '' || timetopay.value === ''){
        alert('Please Enter all the values');
        return;
    }
    else{
        let p = principal.value;
        let r = interest.value / 1200;
        let n = timetopay.value;
        let emiValue = (p * r * (1+r) ** n) / ((1+r) ** n - 1);
        emi.textContent = emiValue.toFixed(2);
    }
}

calculate.addEventListener('click', calculateEMI);
