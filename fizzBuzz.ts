function fizzBuzz(max: number) {
  for (let idx = 1; idx <= max; idx++) {
    let str = "";
    if (idx % 3 === 0) str += "Fizz";
    if (idx % 5 === 0) str += "Buzz";

    console.log(str || idx);
  }
}

fizzBuzz(50);
