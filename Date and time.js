var time = new Date()  
var hour = time.getHours()
var minutes = time.getMinutes()
var year = time.getFullYear()
var month = time.getMonth()
var day = time.getUTCDate()

document.write("<h4>" + hour + ":" + minutes +"<br>"+ month + "/" + day + "/" + year + "<h4>")