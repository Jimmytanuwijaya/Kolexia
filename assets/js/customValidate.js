$(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions

		$('.regsite').validate({
	    rules: {
	      username: {
	        required: true
	      },
	      password: {
	      	minlength: 6,
	        required: true
	      },
	      confirmation: {
	      	minlength: 6,
	      	equalTo: "#password"
	      },
	      name: {
	      	required:true
	      },
	      email: {
	        required: true,
	        email: true
	      },
	    },
		success: function(element) {
			element
			.text('OK!').addClass('valid')
		}
	  });

});