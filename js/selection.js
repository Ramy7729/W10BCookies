// Retrieving cookies using the Cookies.get function.
var selection = Cookies.get("selection");
var selectionContainer = document.getElementById("selectionContainer");
selectionContainer.innerHTML = `You've chosen ${selection}`;

// This variable will be used to create an image element. This will be used to append our image and for our conditional statements.
var image = document.createElement("img");
selectionContainer.append(image);

// This is just for styling purposes. :)
var textOption =document.querySelector("a");
textOption.style.color = "#FF8100";
textOption.style.fontSize = "2em";



// These conditional statements will show a specific image depending on what is clicked as long as a cookie is set.
// An else acts as a catcher if the cookie isn't set. To test this, once a cookie is deleted on the selection page. The message will appear.
if(selection === "Ryu") {
    image.setAttribute("src", "/images/ryu.png");
    image.setAttribute("alt", "Ryu from Street Fighter")
} else if(selection === "Guile") {
    image.setAttribute("src", "/images/guile.png");
    image.setAttribute("alt", "Guile from Street Fighter")
} else if(selection === "Cookie Monster") {
    image.setAttribute("src", "/images/cookieMonster.png");
    image.setAttribute("alt", "The Cookie Monster from Sesame Street")
} else {
    document.getElementById("selectionContainer").innerHTML = "Go make a selection";
}

// Created a function to delete a cookie using the Cookies.remove function.
// The onClick attribute will call upon this function on the selection.html page.
// This is used with an a tag so when the user clicks on the link they will be redirected to the home page without the cookie.
function removeCookies(cookieKeyName){
    Cookies.remove(cookieKeyName);
}
