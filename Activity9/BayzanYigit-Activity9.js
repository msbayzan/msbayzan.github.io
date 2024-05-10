$(document).ready(function() {

	// set up event handlers for links   
	$("#image_list a").click(function(evt) {
	  evt.preventDefault();
  
	  // get the new image URL and caption
	  var imageURL = $(this).attr("href");
	  var caption = $(this).attr("title");
  
	  // fade out the old image and caption
	  $("#image, #caption").fadeOut(1000, function() {
  
		// set the new image URL and caption
		$("#image").attr("src", imageURL);
		$("#caption").text(caption);
  
		// fade in the new image and caption
		$("#image, #caption").fadeIn(1000);
	  });
	});
  
	// move focus to first thumbnail
	$("li:first-child a").focus();
  
  }); // end ready