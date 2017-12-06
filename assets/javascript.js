$("button").on("click", function() {
  var gifSelection = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSelection + "&api_key=dc6zaTOxFJmzC&limit=10";
      // calling ajax to get api//
  $.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {
      var results = response.data;
    // looping through results to generate divs with images
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div class='item'>");
        var gifImage = $("<img>");
            
    //assigning data to image
        gifImage.attr("src", results[i].images.fixed_height_still.url);
        gifImage.attr("data-still", results[i].images.fixed_height_still.url);
        gifImage.attr("data-state", "still");
        gifImage.attr("data-animate", results[i].images.fixed_height.url)
        gifImage.attr("id", "randGif");
 
    //creating a DOM div element
        gifDiv.prepend(gifImage);
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

$("#add-gif").on("click", function(event) {
  event.preventDefault();
        
  renderButtons();
});



function renderButtons() {
  
  var gifSelection = $("#gif-input").val().trim();
  var newGifButton = $("<button>");
  newGifButton.attr("data-name", gifSelection);
  newGifButton.text(gifSelection);

  $("#buttons").append(newGifButton);

  $("#buttons").on("click", function() {

  
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSelection + "&api_key=dc6zaTOxFJmzC&limit=10";
      // calling ajax to get api//
  $.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {
      var results = response.data;
    // looping through results to generate divs with images
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div class='item'>");
        var gifImage = $("<img>");
            
    //assigning data to image
        gifImage.attr("src", results[i].images.fixed_height_still.url);
        gifImage.attr("data-still", results[i].images.fixed_height_still.url);
        gifImage.attr("data-state", "still");
        gifImage.attr("data-animate", results[i].images.fixed_height.url)
        gifImage.attr("id", "randGif");
 


    //creating a DOM div element
        gifDiv.prepend(gifImage);
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
};
  






