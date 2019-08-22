


let group = {
        Amy: 20,
        Bill: 15,
        Chris: 10
}
splitTheBill = group => {
        const average = Object.values(group).reduce((total, amount, index, values) => total + (amount / values.length), 0);
        return Object.keys(group).reduce((total, person) => {
            total[person] = Math.round(((average - group[person])));
            return total;
        }, {});
    


} 



console.log(splitTheBill(group)); // => { Amy: -5, Bill: 0, Chris: 5 }
