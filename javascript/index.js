const obj = [
  { phase: "phase1", step: "step1", tast: "task1" },
  { phase: "phase2", step: "step1", tast: "task1" },
  { phase: "phase2", step: "step1", tast: "task1" },
  { phase: "phase1", step: "step1", tast: "task1" },
  { phase: "phase2", step: "step1", tast: "task1" },
];

function sort(obj) {
  const res = {};
  obj.map((key) => {
    if (!res[key.phase]) res[key.phase] = [];
    res[key.phase].push(key);
  });
  return res;
}

const res = sort(obj);
console.log(res);
