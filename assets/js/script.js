var date = moment()

// Get the day name
var dayPosition = date.day()
var dayName = date._locale._weekdays[dayPosition]

// Get the month
var monthPosition = date.month()
var month = date._locale._months[monthPosition]

// Get the day
var day = date.format("DD")

// Customized date format
var currentDay = dayName + ", " + month + " " + day

$("#currentDay").text(currentDay)