# Bookstore Project

Employees at a rare bookstore need to be able to access a system where 
they can store the inventory for the store. 

## Table of Contents
- [Design Thinking](#phase-1-design-thinking-process)
  - [Empathise](#stage-1-empathise)
  - [Define](#stage-2-define)
  - [Ideate](#stage-3-ideate)
  - [Prototype](#stage-4-prototyping)
- [Search and Sort](#phase-2-search-and-sorting)
   - [Testing](#testing)
   - [Search Books](#search-books)
   - [Sort Books](#sort-books)
- [Login](#login)



 
## Phase 1: Design Thinking Process 
 
### Stage 1: Empathise
Based on what was discussed in the interview I have created profiles for each employee.

<details> <summary>Employee Types: </summary>
 
 
**Owner**

1. Responsibilities: Oversee inventory at multiple locations, review inventory reports, and the ability to do complete his employee responsibilities
2. Current system frustrations: Must compile all lists on paper to track inventory
3. Task timeline: Quarterly basis or as need be
4. Changing the system would improve efficiency leading to satisfaction.

**Manager**

1. Responsibilities: Enter new books into the system, delete books due to error or at their discretion, track sub-employees usage of the site, and add new employees to the system 
2. Current system frustrations: Has to edit inventory on paper and keep track of paperwork
3. Task timeline: Daily
4. Changing the system would decrease the time it takes to update and delete inventory which would make the Manager happy.

**Staff**

1. Responsibilities: Any available staff member can add books to the system and update information if need be
2. Current system frustrations: Every book that is added to inventory must be written down
3. Task timeline: Daily
4. Changing the system would mean faster processing times leading to staff happiness
 
</details>

### Stage 2: Define
I defined the prominent problems that the client wishes to address after the interview.

<details> <summary> Problems: </summary>

1. Create an inventory system that allows the owner to track inventory at multiple locations
2. Adapt a login interface that allows all users(owner, manager, and staff) to utilize the site with unique usernames and passwords. 
3. Create an automated system that marks items as sold by staff as quantity decreases until sold out while remaining in the system unless deleted by managers.
4. Define search parameters that can be used by managers and staff to look up books and pricing.
5. Adapt security features such as locking when idle for when managers and staff walk away from the screen.
6. Create a form that allows managers and staff to add information about books to the site.
7. Create an admin login for the owner to utilize and assign usernames to managers.
8. Create a system that allows managers to create and delete  usernames for staff 
9. Create a specific page with only access granted to managers to see how staff uses the website
 </details>

### Stage 3: Ideate

<details> <summary> For further details click here </summary>

- Initial Login Page
  - Create an admin profile with a temporary password for the owner
  - Give him the ability to create profiles upon logging in
- Secondary Login Page
  - With the profiles created by the owner, managers will be able to log in with temporary passwords
- Initial Login Page Op2
  - Owner and managers can create usernames and passwords and be given special permissions such as creating sub-profiles for staff that have limited access
- Login page
  - Each user will have the ability to log in and out with ease after the initial logins
  - It will include a box to enter username and password
  - The ability to reset passwords if they forget
  - Usernames can not be changed
- Inventory addition
  - When adding new books to inventory, a form will appear with the fields title, picture, genre, binding type, retail price, author, publisher, publishing date, and quantity
  - A submit button can be found at the bottom once every required field is completed. The user will have to confirm the submission
  - The page will recognize which user is logging the book
- Inventory deletion
  - Once a book is added a delete button will be found at the bottom of the screen only available to manager and owner users
  - The owner and manager users  will have to enter their password to delete the book permanently 
- Search
  - The search button can be found at the top of every page the user navigates to streamline searching for products 
  - Searches can be completed using information such as title, author, and genre
  - Searches can be organized by pricing, binding type, and dates published
  - Searches will appear after hitting enter
 
 </details>

## Stage 4: Prototyping
Refer to the [images](https://github.com/cstegall07/techbridge-fewd-winter2022/tree/main/Phase1-Brainstorm) in the Phase1-Brainstorm Folder
 

## Phase 2: Search and Sorting

### Testing
The Rare Bookstore client has indicated that they will require the ability to view a list
of their books. The ability to search through the list to find books based on their price,
Author’s name, and Book’s title has been requested. They would also like to sort the list
based on the book details that they provided during the interviews in Phase 1.
I have devised a set of tests to validate the ability to search through visual lists
and grids to find a value. I also have devised a test to validate sorting a visual list.
 
 <details> <summary> Testing solutions: </summary>
 
 ### Find In Grid
 
 Make the Find In Grid button operational.
 You can view the results [here](https://cstegall07.github.io/techbridge-fewd-winter2022/projectphase2/FindInGrid.html).
 
  ### Find In List
 
 Make the Find In List button operational.
 You can view the results [here](https://cstegall07.github.io/techbridge-fewd-winter2022/projectphase2/FindInList.html).
 
  ### Sort Items
 
 Make the Sort Items button operational.
 You can view the results [here](https://cstegall07.github.io/techbridge-fewd-winter2022/projectphase2/SortItems.html).
 
 </details>
 
 ### Search Books
 After completing tests, I implemented a search feature on the website. On the homepage any user can search through titles to see if they have in stock. Once a user navigates to the main inventory page, a user can search books and see all the information available such as title, ISBN, author, and publisher. View code below to see how I achieved this.
 
 <details> <summary> Code: </summary>
 
 ```javascript
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
 ```
 </details>
 
 **Note:** The implementation for the home page is sligtly different. You can find the code on lines 26-46 in the script.js [file](https://github.com/cstegall07/techbridge-fewd-winter2022/blob/main/script.js)
 
 
 ### Sort Books
 
 To sort through books on the page, the user can click on table headers to sort the table based on the header selection.
 
 <details> <summary> Code: </summary>
 
 ```javascript
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
```
</details>
 
 ## Login 


**To Login onto the site [(click here)](https://cstegall07.github.io/techbridge-fewd-winter2022/) you must utilize these usernames and passwords**

Refer to the Design Thinking process to understand the different login types.

> Employee- username: anicole; password: firstuser
 
> Manager- username: jwilson; password: secuser 

> Owner- username: mlamb; password: owner
 
 &nbsp; 
 
