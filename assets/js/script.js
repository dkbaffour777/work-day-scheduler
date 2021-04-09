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
var businessHours = [9, 10, 11, 12, 1, 2, 3, 4, 5]

for (let index = 0; index < 9; index++) {
    var meridiem =  (businessHours[index] >= 9 && businessHours[index] <= 12) ? "AM" : "PM"
    eventTemplate += `
        <div id="event-cont" class="row d-flex align-items-stretch" data-event-id="` + index + `">
            <div class="col-1 d-flex align-items-center justify-content-end">
                <p id="time">` 
                    + businessHours[index] + meridiem + 
                `</p>
            </div>
            <div class="col-10 px-0 d-flex align-items-center justify-content-center">
                <textarea id="event-title" class="border-0 w-100 h-100 p-4 present">Change Event</textarea>
            </div>
            <div class="col-1 d-flex align-items-center justify-content-center saveBtn">
                <i id="saveBtn" class="fas fa-save"></i>
            </div>
        </div>
    `    
}

eventContEl.html(eventTemplate)


