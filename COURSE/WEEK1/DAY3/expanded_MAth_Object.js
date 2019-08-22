

let myMath = Object.create(Math)



myMath.randomInt = function (...args) {
    if (args.length === 1) {
        return Math.floor(this.random() * args[0])
    }
    else if (args.length === 2) {
        return Math.floor(this.random() * (args[0] - args[1] + 1) + args[1])
        // explnation here: https://teamtreehouse.com/community/mathfloor-mathrandom-max-min-1-min-explanation
    }// also use Math.floor and not math random, otherwise we get an uneven distribution, since numbers will be rounded depending on the randomness of the decimal point of each of them
}

console.log(myMath.randomInt(5)); // 3 for example
console.log(myMath.randomInt(10)); // 10 for example
console.log(myMath.random()); // some random number between 0 and 1
console.log(myMath.round(0.5));
console.log(myMath.randomInt(10, -4)); // -3 for example