/**
 * !write a code for memorize function;
 */
/*
function catching(n) {
  const obj = {};
  return function (n) {
    if (n in obj) {
      return obj[n];
    } else {
      obj[n] = n * n;
      return obj[n];
    }
  };
}
const res = catching(5);

console.log(res(5));
console.log(res(5));
*/

/**
 * !create custome debouncing function;
 */

/*
function customeDebounce(func, delay) {
  let interval;
  return function (...args) {
    clearInterval(interval);
    interval = setTimeout(() => func(...args), delay);
  };
}

function apiCall(arg) {
  console.log("api call" + arg);
}

const debouncing = customeDebounce(apiCall, 1000);

document
  .getElementById("input")
  .addEventListener("input", (e) => debouncing(e.target.value));
*/

/**
 * !implemention throathling
 */

/*
function throathling(func, delay) {
  let intila = 0;
  return function () {
    let curr = Date.now();
    if (curr - intila > delay) {
      func();
      intila = curr;
    }
  };
}

function formSubmit() {
  console.log("form submit");
}

const throatlle = throathling(formSubmit, 5000);

document.querySelector("button").addEventListener("click", throatlle);
*/

