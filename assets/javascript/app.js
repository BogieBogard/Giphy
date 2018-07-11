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

        // Capturing the gif's animated and still data in these variables so that we can access it later in the click function below to change the state
        var marvelAnimatedContent = (results[i].images.fixed_height.url);
        var marvelStillContent = (results[i].images.fixed_height_still.url);

        // Creating and storing an image tag
        var marvelImage = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
        marvelImage.attr("src", marvelStillContent);

        // Appending the image tag to the marvelDiv
        marvelDiv.append(marvelImage);

        // Prependng the marvelDiv to the HTML page in the "#gifs-appear-here" div
        $("#gifs-appear-here").prepend(marvelDiv);
      }

      // If a marvel gif is clicked then its state changes from a still gif to an animated gif
      $(marvelImage).on("click", function () {
        console.log("Marvel gif clicked");
        if ($(this).attr("src", marvelStillContent)) {
          console.log("YAS");
          $(this).attr("src", marvelAnimatedContent);
        } else {
          console.log("else triggered");
          $(this).attr("src", marvelStillContent);
        }
      });
    });
});

// The custom Array will be used to make buttons from the custom entries of the user.
var customArray = [];

// The below function handles the custom text content provided by the user
function customButtonFunction() {
  event.preventDefault();
  var userContent = document.getElementById("customInput");
  customArray.push(userContent.value);

  // The below code is essentially the same as the starting buttons
  // since the custom buttons should function in the same way
  // The only difference is that it uses the customArray var instead of the marvelArray var
  // And the comments and extra empty lines are deleted since they're redundant
  for (var i = 0; i < customArray.length; i++) {
    var newButtons = "<button character-name=" + customArray[i] + ">" + customArray[i] + "</button>";
    $("#marvelButtons").append(newButtons);
  }
  $("button").on("click", function (event) {
    var character = $(this).attr("character-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      character + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        console.log(queryURL);
        console.log(response);
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var marvelDiv = $("<div>");
          console.log(results[i]);
          var marvelImage = $("<img>");
          marvelImage.attr("src", results[i].images.fixed_height.url);
          marvelDiv.append(marvelImage);
          $("#gifs-appear-here").prepend(marvelDiv);
        }
      });
  });
};