

//Sets current date
var setCurrentDate = function(){
    // formats date

    var month = moment().format("dddd, MMMM Do");
    var currentHour = moment().hour();

   
    //selects current day ID and inserts text into HTML
    $("#currentDay").text(month);

    var hours = $("h2[data-time]");
    
    

     //Loop through times to check if they are past current
    for(var i= 0; i < hours.length; i++){
         var timeBlockArr = hours[i].attributes[1].value;
         
        
         
        // Apply color background based on time.
         if(moment().hour() < timeBlockArr){
             //select parentElement and apply a class
             hours[i].parentElement.nextElementSibling.classList.value ="col-9 h-100 padding future";
            
         }
         else if(moment().hour() == timeBlockArr){
            hours[i].parentElement.nextElementSibling.classList.value ="col-9 h-100 padding present";


         }else{
            hours[i].parentElement.nextElementSibling.classList.value ="col-9 h-100 padding past";

         }

     }
    
    
    
}

$(".target").click(function(event){
    var event = event.target;
    var saveBtn = "saveBtn width-100 h-100 align-left";
    var lock = $("span[class=material-symbols-outline]");
    var eventTarget = event.classList.value;
    console.log(eventTarget)
    
    if(eventTarget === saveBtn){
        var testVar = event.$("textarea:first-of-type");
        console.log(testVar)
        var textAreaText = event.parentElement.parentElement.children[1].children.textArea.value;
        if(textAreaText){
            localStorage.setItem("information",JSON.stringify(textAreaText));
        }
    }
})

setCurrentDate();