$("button").on("click", function() {
      var person = $(this).attr("data-person");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";
      // calling ajax to get api//
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;
    // looping through results to generate divs with images
          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");
            var personImage = $("<img>");
            
    //assigning data to image
            personImage.attr("src", results[i].images.fixed_height_still.url);
            personImage.attr("data-still", results[i].images.fixed_height_still.url);
            personImage.attr("data-state", "still");
            personImage.attr("data-animate", results[i].images.fixed_height.url)
            personImage.attr("id", "randGif");
 
    //creating a DOM div element
            gifDiv.prepend(personImage);
    //putting image into div
            $("#gifs-appear-here").prepend(gifDiv);
    // listener for gif click to start/stop/restart gif
            $("#randGif").on('click', function () {

              var state = $(this).attr("data-state");
              
              if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
              } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
              };

            });
          }


        });
    });

$("#add-movie").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var movie = $("#movie-input").val().trim();

        // The movie from the textbox is then added to our array
        
        movies.push(movie);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });


