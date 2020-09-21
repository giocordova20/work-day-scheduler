
$(document).ready(function() {
    
    const today = moment();
    currentDate = today.format("LLLL");
    // console.log(currentDate);
    var currentTime = moment().format("h:mm:ss A");
    // console.log(currentTime);
    var hourLable = ["9AM","10AM","11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


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
            
            // Return data from local storage if it exists
            if (taskInStorage){
                timeSlotTask.text(taskInStorage);
                console.log(taskInStorage);
            }

            // Create event listener for each save button 
            saveBtn.on("click", function(event){
                // Get the lable of the hour column to use as the key, and content of the textarea
                // to save the task
                var hour = $(this).parent().siblings('textarea').prev().text();
                var task = $(this).parent().siblings('textarea').val();
                
                console.log("");
                console.log("save button has been clicked");

                // Add the task to local storage if there is an input
                if (task != ""){
                console.log('Sibling: ', $(this).parent().siblings('textarea').prev().text());
                console.log("hour: ", hour, "task: ", task);
                localStorage.setItem(hour, task);
                }
                console.log("");
            });
            
            timeSlotSave.append(saveBtn);                               // Append the save button to save column
            timeSlotRow.append(timeSlotHour,timeSlotTask,timeSlotSave); // Append the completed row to the table
            
            scheduleTableBody.append(timeSlotRow);
        }
        
        
    };
    
    

    loadtimeSlots();
});


