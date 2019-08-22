//simialr to object keys


function objectValue(obj) {
    valueArray = []

    for (let key in obj) {
        valueArray.push(obj[key])
    }
    return valueArray


}

const obj1 = {
    'keyCode': 'JS',
    2: 'Program Paradigm',
    Target: 'Browser',
};

console.log(objectValue(obj1))