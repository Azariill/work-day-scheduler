var dataBtnValue = "";

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


//listener for save button click
$(".target").click(function(event){
    // save that click item to var
    var event = event.target;
    //define save button 
    var saveBtn = "saveBtn width-100 h-100 align-left";
    // define what the lock is
    var lock = $("span[class=material-symbols-outline]");
    //find the even targets class list
    var eventTarget = event.classList.value;
    
    // compare event target class list to save button or lock
    if(eventTarget === saveBtn || lock){
         dataBtnValue = event.attributes[1].value;
        var textAText = $(`textarea[data-txtArea=${dataBtnValue}]`).val();
        
        if(textAText){
            localStorage.setItem(`data-textArea=${dataBtnValue}`,JSON.stringify(textAText));
        }
        else{
            return false;
        }
    }
})

var checkForSaves = function(){
    var testTextArea = $("textarea#textArea");
    
    //var savedData = localStorage.getItem()
    //var storageItem = localStorage.getItem(`data-textArea=${dataValue}`);
    //console.log(JSON.parse(storageItem));

    console.log(testTextArea[0]);

    // loop through text areas to see if there is saved data
    for(var i = 0; i < 9; i++){
        var dataValue = testTextArea[i].attributes[1].nodeValue;
        var storageItem = localStorage.getItem(`data-textArea=${dataValue}`);
        if(storageItem){
            testTextArea[i].textContent = JSON.parse(storageItem);

        }

    }
    
}

checkForSaves();
setCurrentDate();