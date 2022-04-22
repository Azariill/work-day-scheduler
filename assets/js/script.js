

//Sets current date
var setCurrentDate = function(){
    // formats date

    var month = moment().format("dddd, MMMM Do");
    var currentHour = moment().hour();

    console.log(currentHour);
    //selects current day ID and inserts text into HTML
    $("#currentDay").text(month);

    var hours = $("h2[data-time]");
    
    

     //Loop through times to check if they are past current
    for(var i= 0; i < hours.length; i++){
         var timeBlockArr = hours[i].attributes[1].value;
        
         
         //check current time vs time block
         if(moment().hour() < timeBlockArr){
             //select parentElement and apply a class
             
             //hours[i].parentElement.attributes.class.value = "row past";
         }

     }
    
    
    
}

setCurrentDate();