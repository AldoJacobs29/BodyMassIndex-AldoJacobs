const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const message = document.querySelector("#message");

  if (height === "" || height < 0 || isNaN(height)) {
    //NaN !== NaN
    results.innerHTML = "Please provide a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please provide a valid weight";
  } else {
    // Calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Display the results
    results.innerHTML = `${bmi}`;

    // Display End Message
    if (bmi < 18.5) {
      message.innerHTML = " This Mean You are <b>underweight</b>";
    } else if (bmi > 18.5 && bmi < 24.9) {
      message.innerHTML = " This Mean You Are <b>Normal</b>";
    } else if (bmi > 25 && bmi < 29.9) {
      message.innerHTML = " This Mean You are <b>Overweight</b>";
    } else if (bmi > 30) {
      message.innerHTML = " This Mean You are <b>Obesity</b>";
    }
  }
});
