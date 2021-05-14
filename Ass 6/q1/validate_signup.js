$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // here specified validation rules
      rules: {

        uname: "required",
        email: {
          required: true,
          // It will match bu default email input pattern
          email: true
        },
        password: {
          required: true,
          minlength: 8
        },
        repassword: {
            equalTo : "#password"
          }
      },
      // error messages for not valid input
      messages: {
        email: "Please enter your email",
        uname: "Please enter your user name",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long"
        },
        email: "Please enter a valid email address"
      },
      // this is to make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when all data are valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });