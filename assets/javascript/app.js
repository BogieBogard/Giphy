// Homework Steps
// 1. Transfer the animal buttons into an array that the below for loop can use
// 2. Create additional animal buttons
// 3. Provide a text bar that the user can use to add a custom item to the array and thus creates a new button
// 4. Add pause/play functionality to each gif result
console.log("Test");

// Creating an array for the animals that will be used to create buttons for each later
var animalArray = ["cats", "dog", "bird"];


//We'll need to create a for loop that creates a button for each value in the array
for (var i = 0; i < animalArray.length; i++) {
    console.log("animal name" + animalArray[i]);
    document.write("<button>" + animalArray[i] + "</button>");
  }

$("button").on("click", function(event){
  console.log("This is a test!");
})

    // // Adding click event listen listener to all buttons
    // $("button").on("click", function() {
    //   // Grabbing and storing the data-animal property value from the button
    //   var animal = $(this).attr("data-animal");

    //   // Constructing a queryURL using the animal name
    //   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //     animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    //   // Performing an AJAX request with the queryURL
    //   $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   })
    //     // After data comes back from the request
    //     .then(function(response) {

    //       // storing the data from the AJAX request in the results variable
    //       var results = response.data;

    //       // Looping through each result item
    //       for (var i = 0; i < results.length; i++) {

    //         // Creating and storing a div tag
    //         var animalDiv = $("<div>");
    //         console.log(animalDiv);
    //         // Creating a paragraph tag with the result item's rating
    //         var p = $("<p>").text("Rating: " + results[i].rating);

    //         // Creating and storing an image tag
    //         var animalImage = $("<img>");
    //         // Setting the src attribute of the image to a property pulled off the result item
    //         animalImage.attr("src", results[i].images.fixed_height.url);

    //         // Appending the paragraph and image tag to the animalDiv
    //         animalDiv.append(p);
    //         animalDiv.append(animalImage);

    //         // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
    //         $("#gifs-appear-here").prepend(animalDiv);
    //       }
    //     });
    // });