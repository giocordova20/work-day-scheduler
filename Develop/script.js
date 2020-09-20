
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
        var scheduleTable = $("<table>");
        var scheduleTableBody = $("<tbody>");
        scheduleTable.append(scheduleTableBody);
        scheduleTable.addClass("table");
        
        $(".container").append(scheduleTable);
        // var hourLable = ["9AM","10AM","11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
        
        // Create the rows for each hour slot
        for (i = 0; i < 9; i++) {        
            var timeSlotRow = $("<div class='row'>");
            var timeSlotHour = $("<div class='col-1 text hour'>");
            timeSlotHour.text(hourLable[i]);

            var timeSlotTask = $("<textarea>");
            timeSlotTask.addClass('col task '+hourLable[i]);
            var timeSlotSave = $("<div class='col-1 saveBtn text-center pt-4'>");
            var saveBtn =$("<i>").addClass("save-task fas fa-save save"+i);

            saveBtn.on("click", function(event){
                // alert("HI");
                console.log("");
                console.log("save button has been clicked");
                // console.log('Sibling Task: ', $(this).parent().siblings('textarea').val());
                console.log('Sibling: ', $(this).parent().siblings('textarea').prev().text());
                var hour = $(this).parent().siblings('textarea').prev().text();
                var task = $(this).parent().siblings('textarea').val();
                console.log("hour: ", hour, "task: ", task);
                localStorage.setItem(hour, task);
                console.log("");
            });
            
            
            timeSlotSave.append(saveBtn);
            timeSlotRow.append(timeSlotHour,timeSlotTask,timeSlotSave);
            
            scheduleTableBody.append(timeSlotRow);
        }
        
        
    };
    
    function getTask(hour){
        if (localStorage.getItem("9AM")){
            alert("There is data in local storage for 9AM")
            console.log(localStorage.getItem("9AM"));
            

        }
        if (localStorage.getItem("10AM")){
            alert("There is data in local storage for 10AM")
        }
        if (localStorage.getItem("10AM")){
            alert("There is data in local storage for 11AM")
        }
    }
    
    getTask("9AM");

    // $(".saveBtn1").on("click", function(event) {
    //     event.preventDefault();
        
    //     // create user object from submission
    //     var user = {
    //       time: "9AM",
    //       task: $("task").value()
    //     };
      
    //     console.log(user);


        
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
});


