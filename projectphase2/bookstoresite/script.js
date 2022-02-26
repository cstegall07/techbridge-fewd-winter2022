// search through all books 
function searchBooks(){
    // declare variables
    var input, filter, title, book, txtValue
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    title = document.getElementsByClassName("title");
    book = document.getElementsByClassName("book");
    console.log(book);
    console.log(title);
    console.log(filter);

    // loop through book div, hide those who don't match
    for (i = 0; i < book.length; i++){
        if (book){
            txtValue = title[i].textContent || title[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1){
                book[i].style.display="";
            } else{
                book[i].style.display = "none";
            }
        }
    }
}

function homeSearch(){
    // declare variables
    var input, filter, title, book, txtValue
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    title = document.getElementsByClassName("title");
    book = document.getElementsByClassName("book");

    // loop through book div, hide those who don't match
    for (i = 0; i < book.length; i++){

        if (book){
            txtValue = title[i].textContent || title[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1){
                book[i].style.display = "inline";
            } else if (input = ""){
                book[i].style.display = "none"
            } else{
                book[i].style.display = "none";
            }
        }
    }
}

// sort books in alphabetical order
function sortBooks(){
    var title, book, switching, shouldSwitch;
    book = document.getElementsByClassName("book");
    switching = true;
    // loop through titles until switching is done
    while (switching){
        switching = false;
        title = document.getElementsByClassName("title");
        for (i = 0; i < (title.length -1); i++){
            shouldSwitch = false;

            if (title[i].innerHTML.toLowerCase()> title[i+1].innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;
            }
        }
        // switch the div containing the book info 
        if (shouldSwitch){
            book[i].parentNode.insertBefore(book[i+1], book[i]);
            switching = true;
        }
    }
}

//reset to before switch
function resetSort() {
    window.location.reload();
    return false;
}





