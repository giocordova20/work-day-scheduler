
$(document).ready(function() {
    
    const today = moment();
    currentDate = today.format("LLLL");
    // console.log(today.format("h"));
    var currentHour = today.hour();
    // console.log(currentTime);
    var hourLable = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    var hourLable24 = [9, 10, 11, 12, 13, 14, 15, 16, 17];


    var currentDay = $("#currentDay");
    currentDay.text(currentDate);
    var saveIcon = $("<i>")
    saveIcon.addClass=("fas fa-save");

    function loadtimeSlots() {
        // Create the table to hold hour, task, and save button
        var scheduleTable = $("<table>");
        var scheduleTableBody = $("<tbody>");
        scheduleTable.append(scheduleTableBody);
        scheduleTable.addClass("table");
        $(".container").append(scheduleTable);

        // Create the rows for each hour slot
        for (i = 0; i < 9; i++) {        
            var timeSlotRow = $("<div class='row'>");                   // Create div for the row
            var timeSlotHour = $("<div class='col-1 text hour'>");      // Create div for the hour column
            var timeSlotTask = $("<textarea>");                         // create columnn for textarea
            timeSlotTask.addClass('col task '+hourLable[i]);            // Add the task class to textarea
            var timeSlotSave = $("<div class='col-1 saveBtn text-center pt-4'>");   // Create div for the save button
            var saveBtn =$("<i>").addClass("save-task fas fa-save save"+i);         // Create the save button with fontawesome
            timeSlotHour.text(hourLable[i]);                            // Add hour lable to the hour column
            var taskInStorage = localStorage.getItem(hourLable[i]);     // Task in local storage for the specified hour
            
            console.log(hourLable24[i], currentHour);
            
            if (currentHour > hourLable24[i]){
                timeSlotTask.addClass("past")
            }else if (currentHour == hourLable24[i]){
                timeSlotTask.addClass("present")
            }else if(currentHour < hourLable24[i]){
                timeSlotTask.addClass("future")
            }

            // Return data from local storage if it exists
            if (taskInStorage){
                timeSlotTask.text(taskInStorage);
            }


            // Create event listener for each save button 
            saveBtn.on("click", function(event){
                var hour = $(this).parent().siblings('textarea').prev().text();
                var task = $(this).parent().siblings('textarea').val();
                
                if (task != ""){
                localStorage.setItem(hour, task);
                }
                alert("You Task Has Been Saved");
            });
            
            timeSlotSave.append(saveBtn);                               // Append the save button to save column
            timeSlotRow.append(timeSlotHour,timeSlotTask,timeSlotSave); // Append the completed row to the table

            scheduleTableBody.append(timeSlotRow);
        }
        
        
    };
    


    loadtimeSlots();
});


