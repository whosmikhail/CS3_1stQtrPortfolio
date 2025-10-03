for (let i = 2; i <= 20; i = i + 2) {
    console.log(i);
}

let j = 1;
while (j <= 3) {
    console.log(j);
    j++
}

k = 19;
do{
    console.log(k)
    k--
}while(k >= 18)

fruits = ['banana', 'apple', 'kiwi', 'orange', 'pear']

for (let l = 0; l < fruits.length; l++) {
    console.log(fruits[l]);
}

for (let grade of fruits) {
    console.log(grade)
}

fruits.forEach(FRUITSHOW)

function FRUITSHOW(grade) {
    console.log(grade)
}

