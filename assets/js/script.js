// current day date stamp 
var currentDay = moment().format("dddd - MMMM Do, YYYY")
$("#currentDay").text(currentDay)

var currentTime = moment().format("h:mm a")
$('#currentTime').text(currentTime)


function saveHandler(){
    var calText = $(this).siblings("textarea").val()
    var timeSlot = $(this).parent().attr("id")
    localStorage.setItem(timeSlot, calText)
}

// changing time block colors based on current time - past, current, future
function timeBlocks() {
var calTime = $(this).attr("id") 
console.log(calTime)
console.log(moment().format("HH"))
if (calTime > moment().format("HH")) { 
        $(this).addClass("future")
} else if(calTime === moment().format("HH")){
    $(this).addClass("present")
} else {
    $(this).addClass("past")
}}     
$(".time-block").each(timeBlocks);

//saving entries for each time-block to local storage
$(".saveBtn").on('click', saveHandler)
$("#09").children("textarea").val(localStorage.getItem("09"))
$("#10").children("textarea").val(localStorage.getItem("10"))
$("#11").children("textarea").val(localStorage.getItem("11"))
$("#12").children("textarea").val(localStorage.getItem("12"))
$("#13").children("textarea").val(localStorage.getItem("13"))
$("#14").children("textarea").val(localStorage.getItem("14"))
$("#15").children("textarea").val(localStorage.getItem("15"))
$("#16").children("textarea").val(localStorage.getItem("16"))
$("#17").children("textarea").val(localStorage.getItem("17"))

