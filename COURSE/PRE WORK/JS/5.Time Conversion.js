function time_conversion(minutes) {
    var hour=minutes/60
    var integerHour= Math.floor(hour)
    var minutes= (hour-integerHour)*60
    var integerMinutes= Math.round(minutes)
    return  ("0" + integerHour).slice(-2) + ":" + ("0" + integerMinutes).slice(-2)
    
}

time_conversion(155) // "02:35"
time_conversion(61) // "01:01"
time_conversion(60) // "01:00"
time_conversion(59) // "00:59"