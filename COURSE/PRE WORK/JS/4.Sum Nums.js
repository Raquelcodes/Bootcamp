function sum_nums(num) {
    if (num==0){return 0}
    else
    return (num+sum_nums(num-1))
}

sum_nums(6) // 21
sum_nums(1) // 1
sum_nums(0) // 0
