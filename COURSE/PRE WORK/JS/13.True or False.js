function is_it_true(args) {

    if(typeof args === typeof true) {
        return true}
        else return false
       
}

is_it_true(true) // true
is_it_true(false) // true
is_it_true('true') // false
is_it_true(1) // false
is_it_true('false') // false