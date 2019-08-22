const test = require('tape');
const exercises = require('./exercises.js');


test('Testing isString method', t => {
    t.equal(true, exercises.isString('Test'))
    t.equal(true, exercises.isString(''))
    t.equal(false, exercises.isString({}))
    t.equal(false, exercises.isString([]))
    t.equal(false, exercises.isString(12))
    t.end()
})
