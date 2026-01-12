"use strict";

let someVar = 0;
++someVar;

if (someVar) {
  console.log(someVar);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Пункт №${i}`);
}

if (2 * 20 <= 10 || (30 / 2 < 5 && 10 <= "10") || 20 === "20") {
  console.log("000");
}

function divider(a, b) {
  if (!a || !b) {
    return "Вы не ввели число";
  }

  return "Результат ділення: " + a / b;
}

console.log(divider(10, 5));

let someArrey = [3, "text", 10, 20, true];
someArrey.forEach((item) => {
  if (someArrey.includes(item === 10)) console.log(item);
});
