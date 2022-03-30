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
            txtValue = book[i].textContent || book[i].innerText;
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
            txtValue = book[i].textContent || book[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1){
                book[i].style.display = "inline";
            } else{
                book[i].style.display = "none";
            }
        }
    }
}

// sort books in alphabetical order
function sortBooks(n){
    var row, book,x,y, switching, dir, shouldSwitch, switchCount = 0;;
    book = document.getElementsByClassName("book");
    switching = true;

    dir = "asc"
    // loop through titles until switching is done
    while (switching){
        switching = false;
        row = document.getElementsByTagName("TR");
        for (i = 1; i < (row.length -1); i++){
            shouldSwitch = false;

            x = row[i].getElementsByTagName("TD")[n];
            y = row[i + 1].getElementsByTagName("TD")[n];

            if (dir == "asc"){

                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc"){
                if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
                    shouldSwitch = true;
                    break;
                }
            }
        }
        // switch the div containing the book info 
        if (shouldSwitch){
            row[i].parentNode.insertBefore(row[i+1], row[i]);
            switching = true;
            switchCount++;
        } else{
            if(switchCount == 0 && dir == "asc") {
                dirr = "desc";
                switching = true;
            }
        }
    }
}

//reset to before switch
function resetSort() {
    window.location.reload();
    return false;
}





