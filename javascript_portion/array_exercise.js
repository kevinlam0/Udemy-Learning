var roster = []

var start = prompt("Would you like ot start the roster web app? y/n")
if(start == "y"){var action = prompt("what would you like to do")}


    
    while (action == "add" || action == "display" || action == "remove" && start == "y") {
    if (action == "add") {
        var fname = prompt("What name?");
        roster.push(fname)
        var action = prompt("Select what you want to do: add, remove, display, or quit");
    } 
    else if (action == "remove") {
        var fname = prompt("What name?");
         var index = roster.indexOf(fname);
        if (index > -1) { // only splice array when item is found
        roster.splice(index, 1); // 2nd parameter means remove one item only
}       var action = prompt("Select what you want to do: add, remove, display, or quit");
    }
    else if (action == "display") {
        console.log(roster);
        var action = prompt("Select what you want to do: add, remove, display, or quit");
    }
    else if (action == "quit"){break}
    }

if (start == "n" || action == "quit"){
    alert("Refresh to start over:)");
}
    
    

    



