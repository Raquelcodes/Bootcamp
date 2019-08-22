function objectKeys(obj) {
    keyArray = []

    for (let key in obj) {
        keyArray.push(key)
    }
    return keyArray


}

const obj1 = {
    'keyCode': 'JS',
    2: 'Program Paradigm',
    Target: 'Browser',
};

console.log(objectKeys(obj1))