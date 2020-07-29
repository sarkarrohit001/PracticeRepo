
const formvar = document.getElementById('loan-form');
formvar.addEventListener('submit', function(e)
{
    //Hide Results
    document.getElementById('results').style.display = 'none';

    //Show Loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults , 2000);
    

    e.preventDefault();
});

function calculateResults()
{

    

const amount =  document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthPay = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) / 100 / 12;
const calculatedPayment = parseFloat(years.value) * 12;

const x = Math.pow(1+calculatedInterest, calculatedPayment);
const monthly = (principal*x*calculatedInterest) / (x-1);

if(isFinite(monthly))
{
    monthPay.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    totalInterest.value = ((monthly*calculatedPayment) - principal).toFixed(2);
    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';

}

else{


    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
    showError('Please check your numbers');


}



}




function showError(error)
{
    const errDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errDiv.className = 'alert alert-danger';
    errDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errDiv, heading);

    setTimeout(clearError, 3000);
}

function clearError()
{
    document.querySelector('.alert').remove();
}