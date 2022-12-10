// Get the start_menu
var start_menu = document.getElementById("StartMenu");

// Get the button that opens the start_menu
var win_button = document.getElementById("WinButton");

// When the user clicks on the button, open the start_menu
win_button.onclick = function() {
    if (start_menu.style.display == "block") {
        start_menu.style.display = "none";
    } else {
        start_menu.style.display = "block";
    }
}

// When the user clicks anywhere outside of the start_menu, close it
window.onclick = function(event) {
  if (event.currentTarget == start_menu) {
    start_menu.style.display = "none";
  }
}


// Allow windows to be dragged
var draggableElements = document.getElementsByClassName("window_header");

for(var i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i].parentElement);
}

// Allow windows to be closed
var closeButtons = document.getElementsByClassName("window_close_button");

for(var i = 0; i < closeButtons.length; i++){
    closeButtons[i].onclick = function(event) {
        event.currentTarget.parentElement.parentElement.style.display = "none";
    }
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        return false;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - parseInt(e.clientX);
        pos2 = pos4 - parseInt(e.clientY);
        pos3 = parseInt(e.clientX);
        pos4 = parseInt(e.clientY);
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}