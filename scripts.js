document.getElementById("JokeSubmit").addEventListener("click", function(event) {
    event.preventDefault();

    
    const url = "https://official-joke-api.appspot.com/random_joke";

    fetch(url)
      .then(function(response) {
        console.log(response);
        return response.json();
      }).then(function(json) {	

        let ThisisJoke = "";
        ThisisJoke += "<h1> " + json.setup + "</h1>";

        document.getElementById("JokeContent").innerHTML = ThisisJoke;

        let Punch = "<p>" +json.punchline + "</p>";

        document.getElementById("delayedText").innerHTML = Punch;


  });
});

