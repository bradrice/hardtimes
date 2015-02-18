
$(document).ready( function() {
	var specialwords = [
	"Abdominoperineal Resection", "abiraterone \\(Zytiga®\\)", "ABVD", "acetaminophen", "Acquired Immunodeficiency Syndrome \\(AIDs\\)", "active surveillance", 
	"acute lymphocytic leukemia \\(ALL\\)", "acute lymphocytic leukemia \\(ALL\\)", "acute myelogenous leukemia \\(AML\\)"
	];


$.each(specialwords, function(i, value){
	var re = new RegExp("("+value+")","g");
	$("body:contains('"+value+"')").html(function(_, html) {
   	return html.replace(re, '<span class="sw">$1</span>');
	});
});

})
