//listen to click event on the get jokes button

//select the button, add the event listener

document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(event){
    //console.log("button clicked");

    const userNumber=document.querySelector('input[type="number"]').value;
    //get 
    fetch(`http://api.icndb.com/jokes/random/${userNumber}`)
    .then(function(response){
        console.log(response);
        return response.json();
    })

    .then(function(data){

        let output='';



        console.log(data.value);
        data.value.forEach(joke=>{
            output += `<li>=${joke.joke}</li>`;
        console.log(joke.joke);
    });

    document.querySelector('.jokes').innerHTML=output;
    });


    event.preventDefault();
}