//data privacy
(function () {
  const curr_one = document.getElementById ('currency-one');
  const curr_two = document.getElementById ('currency-two');
  const amt_one = document.getElementById ('amount-one');
  const amt_two = document.getElementById ('amount-two');
  const exchange_rate = document.getElementById ('rate');

  //event listeners
  curr_one.addEventListener ('change', calculate);
  amt_one.addEventListener ('input', calculate);
  curr_two.addEventListener ('change', calculate);
  amt_two.addEventListener ('input', calculate);

  //fetch exchange rate from exchangerate-api.com
  function calculate () {
    currency_one = curr_one.value;
    currency_two = curr_two.value;

    //fetch exchange rates
    fetch (`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then (res => res.json ())
      .then (data => {
        const rate = data.rates[currency_two];
        console.log (`the rate is ${rate}`);
        amt_two.value = amt_one.value * rate;
        console.log (`the converted amount is ${amt_two}`);
      });
  }

  calculate ();
}) ();
