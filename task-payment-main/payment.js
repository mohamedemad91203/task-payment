var public_payment = document.querySelector('.public_payment');
var card = document.querySelector('.card_payment');
var cash = document.querySelector('.cash_payment');
var form = document.querySelector('.form_payment');
var paymentMethod = document.getElementById('paymentMethod');
var confirm = document.querySelector('#payment_confirm');


function submit_method(){
    if(paymentMethod.value === 'card'){
    card.style.display='block';
    public_payment.style.display= 'none';
    form.style.height= '94%';
    form.style.top= '3%';
    confirm.style.height = '8%';
} else if (paymentMethod.value === 'cashback'){
    cash.style.display='block';
    public_payment.style.display= 'none';
}
   confirm.style.display='block'
}