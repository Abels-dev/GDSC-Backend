// Q1 building star triangles

for (let i = 0; i < 5; i++) {
   let star = "";
   for (let j = 0; j <= i; j++) {
      star += "*";
   }
   console.log(star);
}

// Q2 finding gcf

const findGcf = (num1, num2) => {
   if (num1 > num2) {
      let temp = num1;
      num1 = num2;
      num2 = temp;
   }
   let gcf = 1;
   for (let i = 1; i < num2; i++) {
      if (num1 % i == 0 && num2 % i == 0) gcf = i;
   }
   return gcf;
};
console.log(findGcf(12, 28));

