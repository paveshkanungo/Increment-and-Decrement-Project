const countValue = document.querySelector('#counter');

const increment = function(){
    // let value = countValue.innerText;   aise me hume inner text string me milega
    // to convert string to int we have:-
    let value = parseInt(countValue.innerText);   //get the value from the UI
    value = value+1; //update the value
    countValue.innerText = value;  //change the content of the text
};

function decrement(){
    // let value = countValue.innerText;   aise me hume inner text string me milega
    // to convert string to int we have:-
    let value = parseInt(countValue.innerText);   //get the value from the UI
    value = value-1; //update the value
    countValue.innerText = value;  //change the content of the text
};