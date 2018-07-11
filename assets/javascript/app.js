// Homework Steps
// 1. Transfer the marvel buttons into an array that the below for loop can use
// 2. Create additional marvel buttons
// 3. Provide a text bar that the user can use to add a custom item to the array and thus creates a new button
// 4. Add pause/play functionality to each gif result

// Creating an array for the marvel characters that will be used to create buttons for each later
var marvelArray = ["spiderman", "wolverine", "deadpool"];

//Creating a for loop that creates a button for each value in the array
for (var i = 0; i < marvelArray.length; i++) {
  var newButtons = "<button character-name=" + marvelArray[i] + ">" + marvelArray[i] + "</button>";
  $("#marvelButtons").append(newButtons);
}

$("button").on("click", function (event) {
  var character = $(this).attr("character-name");

  // Constructing a queryURL using the marvel name
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    character + "&api_key=dc6zaTOxFJmzC&limit=10";

  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function (response) {
      console.log(queryURL);

      console.log(response);
      // storing the data from the AJAX request in the results variable
      var results = response.data;

      // Looping through each result item
      for (var i = 0; i < results.length; i++) {

        // Creating and storing a div tag
        var marvelDiv = $("<div>");
        console.log(results[i]);

        // Creating and storing an image tag
        var marvelImage = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
        marvelImage.attr("src", results[i].images.fixed_height_still.url);

        // Capturing the gif's animated data in this variable so that we can access it later in the click function below to change the state
        var marvelAnimatedContent = (results[i].images.fixed_height.url);

        // Appending the image tag to the marvelDiv
        marvelDiv.append(marvelImage);

        // Prependng the marvelDiv to the HTML page in the "#gifs-appear-here" div
        $("#gifs-appear-here").prepend(marvelDiv);
      }
      // If a marvel gif is clicked then its state changes from a still gif to an animated gif
      $(marvelImage).on("click", function () {
        console.log("Marvel button clicked");
        console.log(marvelAnimatedContent);
        marvelImage.attr("src", marvelAnimatedContent);
      });
    });
});

// The custom Array will be used to make buttons from the custom entries of the user.
var customArray = [];

// This function handles the custom text content provided by the user
function customButtonFunction() {
  event.preventDefault();
  console.log("Custom content received");
  var userContent = document.getElementById("customInput");
  console.log(userContent.value);
  console.log(customArray);
  customArray.push(userContent.value);
  console.log(customArray);

  for (var i = 0; i < customArray.length; i++) {
    var newButtons = "<button character-name=" + customArray[i] + ">" + customArray[i] + "</button>";
    $("#marvelButtons").append(newButtons);
  }

  $("button").on("click", function (event) {
    var character = $(this).attr("character-name");

    // Constructing a queryURL using the marvel name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      character + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function (response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var marvelDiv = $("<div>");
          console.log(results[i]);

          // Creating and storing an image tag
          var marvelImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          marvelImage.attr("src", results[i].images.fixed_height.url);

          // Appending the image tag to the marvelDiv
          marvelDiv.append(marvelImage);

          // Prependng the marvelDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifs-appear-here").prepend(marvelDiv);
        }
      });
  });
};