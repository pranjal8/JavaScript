function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; // 650
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let res = sumSalaries(salaries);
console.log(res)
