const today = moment();
currentDate = today.format("LLLL");
// console.log(currentDate);

var currentTime = moment().format("h:mm:ss A");
// console.log(currentTime);


var currentDay = $("#currentDay");
currentDay.text(currentDate);
var saveIcon = $("<i>")
saveIcon.addClass=("fas fa-save");

function loadtimeSlots() {
    var scheduleTable = $("<table>");
    var scheduleTableBody = $("<tbody>");
    scheduleTable.append(scheduleTableBody);
    scheduleTable.addClass("table");
    
    $(".container").append(scheduleTable);
    var hourLable = ["9AM","10AM","11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    
    // Create the rows for each hour slot
    for (i = 0; i < 9; i++) {        
        var timeSlotRow = $("<div>");
        var timeSlotHour = $("<div>");
        timeSlotHour.text(hourLable[i]);
        var timeSlotTask = $("<div>");
        var timeSlotSave = $("<div>");
        timeSlotSave.append($("<i>").addClass("fas fa-save save"+i));

        timeSlotRow.append(timeSlotHour,timeSlotTask,timeSlotSave);
        timeSlotRow.addClass("row");
        timeSlotHour.addClass("col-1 text hour");
        timeSlotTask.addClass("col task");
        timeSlotSave.addClass("col-1 saveBtn text-center pt-4");

        scheduleTableBody.append(timeSlotRow);
        
    }
     

};

// var timeSlot = [
//   { 9: 'Task for 9am', 10: 'Task for 10:00am', 11: 'Task for 11:00am' },
// ]
// var timeSlot = {
//   '9am': 'Task for 9am',
//   10: 'Task for 10:00am',
//   11: 'Task for 11:00am',
// }
// var timeSlot = [
//   { '9am': { task1: 'Task for 9am', task2: 'Task for 9am' } },
//   { 10: 'Task for 10:00am' },
//   { 11: 'Task for 11:00am' },
// ];

// var customer = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 25,
//   address: {
//     streetAddress: '21 2nd Street',
//     city: 'New York',
//     state: 'NY',
//     postalCode: '10021',
//   },
//   phoneNumber: [
//     {
//       type: 'home',
//       number: '212 555-1234',
//     },
//     {
//       type: 'fax',
//       number: '646 555-4567',
//     },
//   ],
// ;}




loadtimeSlots();
