let button = document.querySelector(".searchButton");
button.addEventListener("click", onClick);

let input = document.getElementById("search");



function onClick(event) {
    event.preventDefault();
    console.log('button has been toggled')
    input.value = "";

}




let db = firebase.database().ref();


let buttonSub = document.getElementById('buttonSubscribe')

buttonSub.addEventListener('click', updatedb);

function updatedb(data) {
    data.preventDefault();
    let inputSub = document.querySelector(".inputSubscribe")

    const email = inputSub.value;


    inputSub.value = "";


    console.log(email + " : " + "great job!");

    //Update database here
    let value = {
        NAME: email,

    };

    db.push(value);

}