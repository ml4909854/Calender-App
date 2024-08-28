
const date = document.getElementById("date")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")

const currentDate = new Date()
const weekDays = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday", "Friday", "Saturday"]
const Allmonths = ["january" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" ,"October" , "November" , "December"] 

function Current(){
    date.innerHTML = currentDate.getDate()
    day.innerHTML = weekDays[currentDate.getDay()]
    month.innerHTML = Allmonths[currentDate.getMonth()]
    year.innerHTML = currentDate.getFullYear()
}
Current()