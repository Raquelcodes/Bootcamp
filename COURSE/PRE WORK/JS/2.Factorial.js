function factorial(n) {
    if (n==0){return 1}
    else if (n<0){return "n must be > or = to 0"}
    else return (n*factorial(n-1))
}

factorial(5) // 120
factorial(4) // 24
factorial(0) // 1
factorial(-1) // "n must be > or = to 0"
