// Restart Game Button 
var restart = document.querySelector('#b');


// Grabs all the squares
var box = document.querySelectorAll('td')


// Clear squares
function clearBoxes(){
    for (let i = 0; i < box.length; i++) {
        box[i].textContent = ""
        
    }
}

restart.addEventListener('click', clearBoxes)
// Check square marker
function changeMarker(){
    if (this.textContent === "") {
        this.textContent = "X"
    } else if(this.textContent === "X"){
        this.textContent = "O"
    }else{
        this.textContent = ""
    }
}


// For loop to add event listener to all squares
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', changeMarker)
    
}