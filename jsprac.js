for (x = 1; x <= 9; x = x + 1) {
  for (y = 1; y <= 9; y = y + 1) console.log(x + " X " + y + " = " + x * y);
}

console.log("abc".repeat(3));

for (z = 1; z <= 5; z = z + 1) {
  console.log("*".repeat(z));
}

for (i = 1; i <= 5; i = i + 1) {
  console.log(" ".repeat(5 - i) + "*".repeat(i) + "*".repeat(i - 1));
}
