jQuery(() => {
  $.validator.addMethod(
    "isChecked",
    (value, element) => {
      if (element.checked) return true;
      else return false;
    },
    "Please agree the term to continue."
  );
  $(".form").validate({
    rules: {
      userName: {
        required: true,
        minlength: 3,
        maxlength: 150,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 20,
      },
      confirmPassword: {
        required: true,
        minlength: 6,
        maxlength: 20,
        equalTo: "#password",
      },
      checkbox: {
        isChecked: true,
      },
    },
  });
});

$(":checkbox").click(() => {
  const checkbox = $(".form-check-input");
});
