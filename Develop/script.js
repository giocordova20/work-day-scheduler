

function loadtimeSlots() {
    var scheduleTable = $("<table>");
    var scheduleTableBody = $("<tbody>");
    
    scheduleTable.append(scheduleTableBody);
    scheduleTable.addClass("table");
    
    $(".container").append(scheduleTable);
    
    var hourLable = ["9AM","10AM","11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    
    for (i = 0; i < 9; i++) {
        // var timeSlotRow = $("<tr>");
        // var timeSlotHour = $("<td>"+i+"        </td>");
        // var timeSlotTask = $("<td>"+i+"    This is the task   </td>");
        // var timeSlotSave = $("<td>"+i+"    This is the Save    </td>");
        
        // timeSlotRow.append(timeSlotHour, timeSlotTask, timeSlotSave);
        // timeSlotRow.addClass("row");
        // timeSlotHour.addClass("hour");
        // timeSlotTask.addClass("task");
        // timeSlotSave.addClass("saveBtn");
        // scheduleTable.append(timeSlotRow);
        
        // $(".container").append("<tr>").addClass("row").append("<td>"+i+"</td>").addClass("hour").append("<td>"+i+"</td>").append("<td>"+i+"</td>");
        
        
        
        var timeSlotRow = $("<div>");
        var timeSlotHour = $("<div>");
        console.log("    hourLable  ",hourLable[i]);
        timeSlotHour.text(hourLable[i]);
        var timeSlotTask = $("<div>");
        var timeSlotSave = $("<div>");

        timeSlotRow.append(timeSlotHour,timeSlotTask,timeSlotSave);
        timeSlotRow.addClass("row");
        timeSlotHour.addClass("col-1 text hour");
        

        timeSlotTask.addClass("col task");
        timeSlotSave.addClass("col-1 saveBtn");


        scheduleTableBody.append(timeSlotRow);


        
        
        
    }
    
    // var hourLable = ["9AM","10AM","11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    // $.each(hourLable, function(index,val){
    //     console.log(index + " " + val);
    //     timeSlotHour.text(val);
    // });    
    
     

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
