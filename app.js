// Variables
let maxPossibleNumber = 100;
let secretNumber = Math.floor(Math.random() * maxPossibleNumber) + 1;
let userNumber = 0;
let attempts = 1;
let maxAttempts = 6;

while (userNumber !== secretNumber) {
  userNumber = parseInt(
    prompt(`Please enter a number between 1 and ${maxPossibleNumber}:`)
  );

  console.log(typeof userNumber);
  if (userNumber === secretNumber) {
    // Guessed correctly
    alert(
      `Congratulations, the number is: ${userNumber}. You did it in ${attempts} ${
        attempts === 1 ? "attempt" : "attempts"
      }`
    );
  } else {
    if (userNumber > secretNumber) {
      alert("The secret number is lower");
    } else {
      alert("The secret number is higher");
    }
    // Increment the counter when the guess is incorrect
    attempts++;

    if (attempts > maxAttempts) {
      alert(`You've reached the maximum number of ${maxAttempts} attempts.`);
      break;
    }
  }
}
