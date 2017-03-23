function fibonacci(num) {
  if (typeof num != 'number' || num % 1 != 0) {
    throw new Error("Bad input");
  } else if (num <= 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

var x = 5;
try {
  console.log("Fibonacci number #" + x + " is " + fibonacci(x));
} catch (error) {
  console.log("Encountered error: " + error);
}
