// "Code inside will run once the DOM is ready for JavaScript code to execute."
$(document).ready(function() {
  
  let time = moment(); // Moment.js
  $("#currentDay").text(time.format("LLLL")); // Displays current date and time the page was loaded.

  $(".saveBtn").on("click", function() {
    // $(this) references .saveBtn through DOM Traversal.
    const text = $(this).siblings(".description").val();
    time = $(this).parent().attr("id");
    // Displays "Key"(time) and "Value"(text) assigned by User in the Console.
    console.log(time, text);
    // Displays "Key"(time) and "Value"(text) assigned by User in Local Storage.
    localStorage.setItem(time, text);
    // Resets Local Storage and Reloads Page after Save
    $(".clearBtn").on("click", function(){
      localStorage.clear();
      location.reload();
    }) 
  })

  // Work Hours -- getItem prevents Clearing on Refresh after Save
  $("#hour5am .description").val(localStorage.getItem("hour5am"));
  $("#hour6am .description").val(localStorage.getItem("hour6am"));
  $("#hour7am .description").val(localStorage.getItem("hour7am"));
  $("#hour8am .description").val(localStorage.getItem("hour8am"));
  $("#hour9am .description").val(localStorage.getItem("hour9am"));
  $("#hour10am .description").val(localStorage.getItem("hour10am"));
  $("#hour11am .description").val(localStorage.getItem("hour11am"));
  $("#hour12pm .description").val(localStorage.getItem("hour12pm"));
  $("#hour13pm .description").val(localStorage.getItem("hour13pm"));
  $("#hour14pm .description").val(localStorage.getItem("hour14pm"));
  $("#hour15pm .description").val(localStorage.getItem("hour15pm"));
  $("#hour16pm .description").val(localStorage.getItem("hour16pm"));
  $("#hour17pm .description").val(localStorage.getItem("hour17pm"));

  // Timeblock Styling
  function planner() {
    let currentTime = moment().hour(); // Moment.js -- Sets Hour as a Number (Military Time 1-24)

    $(".time-block").each(function() {
      const blockHour = parseInt($(this).attr("id").split("hour")[1]);

      if (blockHour < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } else if (blockHour === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  // Runs the Function
  planner();
})