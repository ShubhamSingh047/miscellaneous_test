/* -------- Unique Array Set ---------- */
// const obj = [
//   { phase: "phase1", step: "step1", tast: "task1" },
//   { phase: "phase2", step: "step1", tast: "task1" },
//   { phase: "phase2", step: "step1", tast: "task1" },
//   { phase: "phase1", step: "step1", tast: "task1" },
//   { phase: "phase2", step: "step1", tast: "task1" },
// ];

// function sort(obj) {
//   const res = {};
//   obj.map((key) => {
//     if (!res[key.phase]) res[key.phase] = [];
//     res[key.phase].push(key);
//   });
//   return res;
// }

// const res = sort(obj);
// console.log(res);

/* -------- function -- to flat an array*/
// const arr = [[1], [[2], [3]], 4];

// const res = arr.flat(Infinity);
// console.log(res);

// function customeflat(arr) {
//   if (arr.length == 0) return arr;
//   const test = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) test.push(...customeflat(arr[i]));
//     else test.push(arr[i]);
//   }
//   return test;
// }
// const resarr = customeflat(arr);
// console.log(resarr);

let resolve;

const hanleBtn = (res) => {
  res();
};

const myPromise = new Promise((res, rej) => {
  resolve = res;
});

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => hanleBtn(res));

myPromise.then(() => console.log("resolved"));

/**
 * *cretaing promise withouth using new key word
 */

async function promises() {
  const promiseobj = new Promise((res, rej) => {});
  return promiseobj;
}

console.log(promises(), "await");
