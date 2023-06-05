$(document).ready(function() {
    $("#nav_list a").click(function(event) {
      event.preventDefault();

      $("main").empty();
  
      var fileName = $(this).attr("title");
  
      var jsonUrl = "json_files/" + fileName + ".json";
      var imageUrl = "images/" + fileName + ".jpg";

      $.getJSON(jsonUrl, function(data) {
        var speakerData = data.speakers[0]; 
  
        var speakerContainer = $("<div>");
        speakerContainer.addClass("speaker-container");
  
        var speakerImage = $("<img>");
        speakerImage.attr("src", imageUrl);

        var speakerTitle = $("<h1>").text(speakerData.title);

        var speakerMonth = $("<h2>").text(speakerData.month);
  
        var speakerName = $("<h2>").text(speakerData.speaker);
  
        var speakerBio = $("<p>").text(speakerData.text);
        speakerContainer.append(speakerImage, speakerTitle, speakerMonth, speakerName, speakerBio);
  
        $("main").append(speakerContainer);
      }).fail(function() {
        console.log("Failed to load JSON data for " + fileName);
      });
    });
  });
  