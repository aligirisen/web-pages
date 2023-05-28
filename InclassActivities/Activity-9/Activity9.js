$(document).ready(function() {
	// Preload images
	$("#image_list a").each(function() {
	  var swappedImage = new Image();
	  swappedImage.src = $(this).attr("href");
	});
	
	// Set up event handlers for links    
	$("#image_list a").click(function(evt) {
	  evt.preventDefault(); 
  
	  var imageURL = $(this).attr("href");
	  var caption = $(this).attr("title");
	  
	  $("#caption, #image").fadeOut(2000, function() {
		$("#image").attr("src", imageURL);
		$("#caption").text(caption);
		
		$("#caption, #image").fadeIn(2000);
	  });
	}); // end click
	
	// Move focus to the first thumbnail
	$("li:first-child a").focus();
  });// end ready
  