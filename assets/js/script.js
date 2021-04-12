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



var eventContEl = $("#event-container")
var eventTemplate = ``
var _event = [
    {hour: 9, militaryTime: 9},
    {hour: 10, militaryTime: 10},
    {hour: 11, militaryTime: 11},
    {hour: 12, militaryTime: 12},
    {hour: 1,  militaryTime: 13},
    {hour: 2, militaryTime: 14},
    {hour: 3, militaryTime: 15},
    {hour: 4, militaryTime: 16},
    {hour: 5, militaryTime: 17}
]
var textAreaEl = null

// Color code rendering
var renderEventColorCode = function() {
    var currentHour = moment().format("HH")
    currentHour = parseInt(currentHour)
    for (let index = 0; index < _event.length; index++) {
        if(currentHour === _event[index].militaryTime){
            _event[index].time = "present"
        } else if(currentHour > _event[index].militaryTime) {
            _event[index].time = "past"
        } else if(currentHour < _event[index].militaryTime) {
            _event[index].time = "future"
        }
    }
}

var renderEvent = function() {
    for (let index = 0; index < 9; index++) {
        var meridiem =  (_event[index].hour >= 9 && _event[index].hour <= 12) ? "AM" : "PM"
        eventTemplate += `
            <div class="row d-flex align-items-stretch event" data-event-id="` + index + `">
                <div class="col-1 d-flex align-items-center justify-content-end">
                    <p id="time">` 
                        + _event[index].hour + meridiem + 
                    `</p>
                </div>
                <div class="col-10 px-0 d-flex align-items-center justify-content-center">
                    <textarea class="border-0 w-100 h-100 p-4 text ` + _event[index].time +` event-title">Change Event</textarea>
                </div>
                <div class="col-1 d-flex align-items-center justify-content-center saveBtn">
                    <i class="fas fa-save saveBtn"></i>
                </div>
            </div>
            `    
        eventContEl.html(eventTemplate)
        textAreaEl = $(".text")
    }
}



renderEventColorCode()
renderEvent()

var emptyClass = function() {
    for (let index = 0; index < 9; index++) {
        if(textAreaEl[index].classList.contains("past")) {
            textAreaEl[index].classList.remove("past")
        } else if(textAreaEl[index].classList.contains("present")){
            textAreaEl[index].classList.remove("present")
        } else if(textAreaEl[index].classList.contains("future")){
            textAreaEl[index].classList.remove("future")
        }
    }
}

var renderClassColorCode = function() {
    var currentHour = moment().format("HH")
    currentHour = parseInt(currentHour)
    for (let index = 0; index < _event.length; index++) {
        if(currentHour === _event[index].militaryTime){
            textAreaEl[index].classList.add("present") 
        } else if(currentHour > _event[index].militaryTime) {
            textAreaEl[index].classList.add("past")
        } else if(currentHour < _event[index].militaryTime) {
            textAreaEl[index].classList.add("future")
        }
    }
}

setInterval(function(){
    emptyClass()
    renderClassColorCode()
}, 1000)



// Create Event
$(".event-title").on("blur", function(){
    var id = $(this)
        .closest("div.event")
        .attr("data-event-id")
    var textContent = $(this).val().trim()
    console.log(textContent)
})