const nums = ("1, 9, 3, 7, 2, 5")
console.log(highAndLow(nums))

function highAndLow(numbers) {
    numbers = numbers.split(" ");
    return Math.max(...numbers) + " " + Math.min(...numbers);

}