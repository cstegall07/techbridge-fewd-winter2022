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
    <button class="update" onclick="openUpdateModal()"> Update </button>
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
};

/* <th>Title</th>
<th>Author</th>
<th>Publisher</th>
<th>Dates Published</th>
<th>Genre</th>
<th>ISBN</th>
<th>Cover</th>
<th>Quantity</th> */

//  update book


var updateModal = document.getElementById("modalUpdateBook");

var updateBtn = document.getElementsByClassName("update")

console.log(updateBtn)

openUpdateModal = () => {
  updateModal.style.display = "block";
  console.log("I clicked the update button");

  var table = document.getElementById("inventoryListTable");

  var tRow = table.rows;
  console.log(tRow);

  var btnRow = updateBtn.parentElement.parentElement
  

  // for (var i = 1; i < tRow.length; i++){
  //   var tCells = tRow[i].cells;

  //   if(updateBtn.parentElement.parentElement[i] == tRow[i]) {

  //     var uTitle = document.getElementById("butitle");
  //     var uAuthor = document.getElementById("buauthor");
  //     var uPublisher = document.getElementById("bupublisher" );
  //     var uDate = document.getElementById("budatep");
  //     var uIsbn = document.getElementById("buisbn");
  //     var uGenre = document.getElementById("bugenre");
  //     var uCover = document.getElementById("bucover");
  //     var uQuantity = document.getElementById("buquantity");

  //     uTitle.value = tCells[0].innerHTML;
  //     uAuthor.value = tCells[1].innerHTML;
  //     uPublisher.value = tCells[2].innerHTML;
  //     uDate.value = tCells[3].innerHTML;
  //     uGenre.value = tCells[4].innerHTML;
  //     uIsbn.value = tCells[5].innerHTML;
  //     uCover.value = tCells[6].innerHTML;
  //     uQuantity.value = tCells[7].innerHTML;
  //   }
    
    
  // };
 


  // for (var i=1; i < rows.length; i++) {
  //   if (rows[i]) {
      
  //   var cells = rows.cells; //cells collection
  //   var uTitle = document.getElementById("butitle");
  //   var uAuthor = document.getElementById("buauthor");
  //   var uPublisher = document.getElementById("bupublisher" );
  //   var uDate = document.getElementById("budatep");
  //   var uIsbn = document.getElementById("buisbn");
  //   var uGenre = document.getElementById("bugenre");

  //   uTitle.value = cells[0].innerHTML;
  //   uAuthor.value = cells[1].innerHTML;
  //   uPublisher.value = cells[2].innerHTML;
  //   uDate.value = cells[3].innerHTML;
  //   uIsbn.value = cells[4].innerHTML;
  //   uGenre.value = cells[5].innerHTML;
  // }  
}

var span = document.getElementsByClassName("close")[1];



span.onclick = function() {
  updateModal.style.display = "none";
 
};


window.onclick = function(e) {
  if (e.target == updateModal) {
    updateModal.style.display = "none";
  }
};


// var updateBookBtn = document.getElementById("updatebooklist")
// updateBookBtn.onclick = function(){
//   updateModal.style.display = "none";
//     var table = document.getElementById("inventoryListTable");
//     var row = table.getElementsByTagName("tr");
//     console.log(row);

//     var cells = document.querySelectorAll("cell")
//     console.log(cells)

   

// //  for (i=1; i < row.length; i++){
// //       document.getElementById("butitle").value = this.cell[0].innerHTML
// //     }

//     // var title = document.querySelectorAll("td.title");
//     // console.log(title);
//     // var author = document.querySelectorAll("td.author");
//     // var publisher = document.querySelectorAll("td.publisher");
//     // var dates = document.querySelectorAll("td.dates");
//     // var genre = document.querySelectorAll("td.genre");
//     // var isbn = document.querySelectorAll("td.isbn");
//     // var cover = document.querySelectorAll("td.cover");
//     // var quantity = document.querySelectorAll("td.quantity");

   
    
//     // title.innerHTML = document.getElementById("btitle").value
//     // author.innerHTML = document.getElementById("author").value
//     // publisher.innerHTML = document.getElementById("publisher").value
//     // dates.innerHTML = document.getElementById("datep").value
//     // genre.innerHTML = document.getElementById("genre").value
//     // isbn.innerHTML = document.getElementById("isbn").value
//     // cover.innerHTML = document.getElementById("bcover").value
//     // quantity.innerHTML = document.getElementById("bquantity").value
