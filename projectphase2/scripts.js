//scripts for problems
function resetFindInGrid() {
    //set tbNumberToFind to blank
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    tbNumberToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}

function resetFindInList() {
     //set tbTextToFind to blank
    let tbTextToFind = document.getElementById("tbTextToFind");
    tbTextToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}



function reloadPage() {
    window.location.reload();
    return false;
}


function findInGrid() {
 let span = document.getElementsByTagName('span');
 console.log(span);

 let tbNumberToFind = document.getElementById('tbNumberToFind').value;
 console.log(tbNumberToFind);

 for(let i = 0; i < span.length; i++){
 let spanText = span[i].innerText;
 console.log(spanText);

 if(spanText === tbNumberToFind && tbNumberToFind == 1){
    console.log('Found 1 in grid!');
    document.getElementById('span1-1').classList.add('spanHighlighted');
} else if (spanText === tbNumberToFind && tbNumberToFind == 4){
    console.log('Found 4 in grid!');
    document.getElementById('span1-2').classList.add('spanHighlighted');
}  else if (spanText === tbNumberToFind && tbNumberToFind == 9){
    console.log('Found 9 in grid!');
    document.getElementById('span1-3').classList.add('spanHighlighted');
}  else if (spanText === tbNumberToFind && tbNumberToFind == 8){
    console.log('Found 8 in grid!');
    document.getElementById('span2-1').classList.add('spanHighlighted');
}  else if (spanText === tbNumberToFind && tbNumberToFind == 2){
    console.log('Found 2 in grid!');
    document.getElementById('span2-2').classList.add('spanHighlighted');
}  else if (spanText === tbNumberToFind && tbNumberToFind == 5){
    console.log('Found 5 in grid!');
    document.getElementById('span2-3').classList.add('spanHighlighted');
}  else if (spanText === tbNumberToFind && tbNumberToFind == 6){
    console.log('Found 6 in grid!');
    document.getElementById('span3-1').classList.add('spanHighlighted');
}  else if (spanText === tbNumberToFind && tbNumberToFind == 3){
    console.log('Found 3 in grid!');
    document.getElementById('span3-3').classList.add('spanHighlighted');
} 

let results = document.getElementById('results')
results.innerHTML = '';
try{
    if(tbNumberToFind == "") throw "empty";
    if(tbNumberToFind < 1) throw "invalid.";
    if(tbNumberToFind == 7) throw "not in grid.";
    if(tbNumberToFind > 9) throw "too large for grid.";
}

catch(err){
    results.innerHTML = "Input is " + err;
}

}
}

function findInList() {
    // declare and assign the span that contains the numbers
    let span = document.getElementsByTagName('span');
    console.log(span);

    // assign variable tbTextToFind to the element for input
    let tbTextToFind = document.getElementById('tbTextToFind').value;
    console.log(tbTextToFind);

    // assign span inner text and loop through all the spanText 
    for(let i = 0; i < span.length; i++){
        let spanText = span[i].innerText;
        console.log(spanText);

        // if else statements for each condition
        if( spanText == tbTextToFind && tbTextToFind == 1){
            console.log('Found 1 in list!');
            document.getElementById('span1-1').classList.add('spanHighlighted');
        } else if (spanText === tbTextToFind && tbTextToFind == 4){
            console.log('Found 4 in list!');
            document.getElementById('span1-2').classList.add('spanHighlighted');
        }  else if (spanText === tbTextToFind && tbTextToFind == 9){
            console.log('Found 9 in list!');
            document.getElementById('span1-3').classList.add('spanHighlighted');
        }  else if (spanText === tbTextToFind && tbTextToFind == 8){
            console.log('Found 8 in list!');
            document.getElementById('span2-1').classList.add('spanHighlighted');
        }  else if (spanText === tbTextToFind && tbTextToFind == 2){
            console.log('Found 2 in list!');
            document.getElementById('span2-2').classList.add('spanHighlighted');
        }  else if (spanText === tbTextToFind && tbTextToFind == 5){
            console.log('Found 5 in list!');
            document.getElementById('span2-3').classList.add('spanHighlighted');
        }  else if (spanText === tbTextToFind && tbTextToFind == 6){
            console.log('Found 6 in list!');
            document.getElementById('span3-1').classList.add('spanHighlighted');
        }  else if (spanText === tbTextToFind && tbTextToFind == 'A'){
            console.log('Found A in list!');
            document.getElementById('span3-2').classList.add('spanHighlighted');
        } else if (spanText === tbTextToFind && tbTextToFind == 3){
            console.log('Found 3 in list!');
            document.getElementById('span3-3').classList.add('spanHighlighted');
        } 
    }
    let results = document.getElementById('results')
    results.innerHTML = '';
    try{
        if(tbTextToFind == "") throw "empty";
        if(tbTextToFind < 1 ) throw "invalid.";
        if(tbTextToFind == 7) throw "not in list.";
        if(tbTextToFind > 9 ) throw "too large for list.";
        //if(tbTextToFind != 'A'  && tbTextToFind == isNaN()) throw "a letter(s) not in list."

    }
    
    catch(err){
        results.innerHTML = "Input is " + err;
    }  
  
}

function sortIt() {
   var row0, switching, div, shouldSwitch;
   row0 = document.getElementById("row0");
   div = row0.getElementsByTagName("div");
   switching = true;

   while (switching){
       switching = false;
       for (i =0; i< (div.length -1); i++) {
           shouldSwitch = false;
         if (div[i].innerText > div[i + 1].innerText) {
             shouldSwitch = true;
             break;
         }
       }
       if (shouldSwitch) {
           div[i].parentNode.insertBefore(div[i + 1], div[i]);
           switching = true;
       }
   }
}

// if it is less than 1 and in a red box place before other red... same for blue and yellow

    
// while (switching){
//     switching = false;
//    span = row0.getElementsByTagName("span");
//     console.log (span)
//     for (i =0; i< (span.length -1); i++) {
//         shouldSwitch = false;
//       if (span[i].innerHTML > span[i + 1].innerHTML) {
//           shouldSwitch = true;
//           break;
//       }
//     }
//     if (shouldSwitch) {
//         span[i].parentNode.insertBefore(span[i + 1], span[i]);
//         switching = true;
//     }
// }



   /*let spanColor = [document.getElementsByClassName("column center blue"), document.getElementsByClassName("column center red"), document.getElementsByClassName("column center yellow")];
    console.log(spanColor);

    let spanRed = document.getElementsByClassName('column center red')
    console.log(spanRed)
    let spanBlue = document.getElementsByClassName('column center blue')
    console.log(spanBlue)
    let spanYellow = document.getElementsByClassName('column center yellow')
    console.log(spanYellow)*/

  

   /*      let span = document.getElementsByTagName('span');
        console.log(span);
    let spanArr = [];
    for(let i = 0; i < span.length; i++){
        let spanText = (span[i].innerText);
        spanArr.push(spanText);
        console.log(spanArr)
        spanArr.sort();
        console.log(spanArr);
    }*/



/*let arr = [4,6,9];
console.log(arr)
}

let spanText = Array.from(span[i].innerText);
let spanTextArr = [];
spanTextArr.push(...spanText);
console.log(spanText);
console.log(spanTextArr);*/
