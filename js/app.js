function getPin() {
    const pin = Math.round(Math.random() * 10000);
    if (pin.toString().length == 4) {
        return pin;
    } else {
        // console.log("3 digite pin");
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById("key-pad").addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calInput = document.getElementById("typed-numbers");
    if (isNaN(number)) {
        if(number=='C'){
            calInput.value = '';
        }
    } else {
        
        const previousNumber = calInput.value;
        const newNumber = previousNumber + number;
        calInput.value = newNumber;
    }
});

function vrerifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typePin = document.getElementById('typed-numbers').value;
    if(pin==typePin){
        document.getElementById("notify-sucess").style.display= 'block';
        document.getElementById("notify-fail").style.display = 'none';
    }
    else{
        document.getElementById("notify-fail").style.display = 'block';
        document.getElementById("notify-sucess").style.display= 'none';
    }
}


