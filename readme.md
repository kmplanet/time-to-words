# Pair Programming exercise 

Write an function that converts time into the corresponding english words - eg. '8:30' -> 'half past eight'

## Examples

- '0:00' > 'midnight'
- '12:00' > 'midday'
- '2:00' > 'two o'clock'
- '2:03' > 'three past two'
- '2:11' > 'eleven past two'
- '2:15' > 'quarter past two' 
- '2:30' > 'half past two'
- '2:33' > 'twenty seven to three'
- '2:40' > 'twenty to three'
- '2:45' > 'quarter to three' 
- '2:55' > 'five to three'


/*

// min = 00, hour= input hh
// min > 0 but < 30, hour = input hh , min 
// min = 30 half past , hour = input
// min = 45 "quarter" to hour = +1
// min > 45 < 60, min= 60-min , to hour = +1


*/
