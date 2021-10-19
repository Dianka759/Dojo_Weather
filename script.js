//  Upon clicking "I accept", the cookies window gets eaten. I mean disappears.
var cookies = document.querySelector("#cookies")
function remove() {
    cookies.remove()
}



// step 1, determine what the user clicks on F or C 
// step 2, perform calculation (°C × 9/5) + 32 = °F / (°F − 32) × 5/9 = °C
// update what shows on the browser 
// Thanks Seeso!! 

var menu = document.querySelector("#menu");

function changeChoice(element) {
    var degrees = document.getElementsByClassName("degrees")
    if (element.value == "f") {
        for (i = 0; i < degrees.length; i++) {
            degrees[i].innerText = Math.round((degrees[i].innerText * 9/5) + 32) ;
        } 
    } else {
        for (i = 0; i < degrees.length; i++) {
            degrees[i].innerText =  Math.round((degrees[i].innerText - 32) * 5/9);
        }
    }
}