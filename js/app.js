// Created a function that creates a cookie and takes one argument.
// We are using the onClick attribute to call this function. Doing so will create and store our cookie on the webpage.
// An argument that is the value of the cookie will be passed through the function.
function selectItem(selectedCharacter) {
    Cookies.set("selection", selectedCharacter);
}
