var addBookBtn = document.getElementById("addbooklist")
addBookBtn.onclick = function(){
    modal.style.display = "none";
    var table = document.getElementById("inventoryListTable")
    var row = table.insertRow(-1);
    var title = row.insertCell(0);
    var author = row.insertCell(1);
    var publisher = row.insertCell(2);
    var dates = row.insertCell(3);
    var genre = row.insertCell(4);
    var isbn = row.insertCell(5);
    var cover = row.insertCell(6);
    var quantity = row.insertCell(7);
    var update = row.insertCell(8);

    var updateButton=`<td>
    <button class="update"> Update </button>
    </td>`;

    title.innerHTML = document.getElementById("btitle").value
    author.innerHTML = document.getElementById("author").value
    publisher.innerHTML = document.getElementById("publisher").value
    dates.innerHTML = document.getElementById("datep").value
    genre.innerHTML = document.getElementById("genre").value
    isbn.innerHTML = document.getElementById("isbn").value
    cover.innerHTML = document.getElementById("bcover").value
    quantity.innerHTML = document.getElementById("bquantity").value
    update.innerHTML += updateButton

    row.classList.add("book")
    title.classList.add("title")
    author.classList.add("author")
    publisher.classList.add("publisher")
    dates.classList.add("dates")
    genre.classList.add("genre")
    cover.classList.add("cover")
    quantity.classList.add("quantity")
    
  



    return false; 

}

// Get the modal
var modal = document.getElementById("modalAddBook");

// Get the button that opens the modal
var btn = document.getElementById("add");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
 
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* <th>Title</th>
<th>Author</th>
<th>Publisher</th>
<th>Dates Published</th>
<th>Genre</th>
<th>ISBN</th>
<th>Cover</th>
<th>Quantity</th> */

//  update book
// var updatemodal = document.getElementById("modalUpdateBook");

// var updatebtn = document.getElementsByClassName("update");

// updatebtn.onclick = function() {
//   updatemodal.style.display = "block";
// }

