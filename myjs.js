

// get an input element

// write a placeholder value inside the field when the required value is invalid



$(document).ready(function () {
  const info = "email@example/com";
  const emailInput = document.getElementById('email');
  const firstNameInput = document.getElementById('firstname');
  const lastNameInput = document.getElementById('lastname');
  const passwordInput = document.getElementById('password');
  const button = document.querySelector('button');


  function addPlaceHolder () {
    emailInput.attributes.placeholder.value = info ;
  }

  addPlaceHolder();

  button.addEventListener('click', function () {
    $('input:invalid').css('border', '1px solid hsl(0, 100%, 74%)');
    $('input:invalid+i').css({
      'color': 'hsl(0, 100%, 74%)',
      'font-size': '12px',
      'font-weight': '400',
      // 'border': '1px solid green',
      'float': 'right',
      'margin-bottom': '15px',
      'display': 'block'
    });
  });


  firstNameInput.addEventListener('input', function (event) {
    event.preventDefault();
    console.log('Your first name');
    if (this.value != "") {
      console.log('I am not empty');
      $('input:valid').css('border', '1px solid hsl(154, 59%, 51%)');
      $('input:valid+i').css('display','none')
    }
    else{
      console.log('Nothing here');
      $('#firstname:invalid').css('border', '1px solid hsl(0, 100%, 74%)');
      $('#firstname:invalid+i').css({
        'color': 'hsl(0, 100%, 74%)',
        'font-size': '12px',
        'font-weight': '400',
        'float': 'right',
        'margin-bottom': '15px',
        'display': 'block'
      });
    }
  });

  lastNameInput.addEventListener('input', function () {
    console.log('Your last name');
    if (this.value != "") {
      console.log('I am not empty');
      $('input:valid').css('border', '1px solid hsl(154, 59%, 51%)');
      $('input:valid+i').css('display','none')
    }
    else{
      console.log('Nothing here');
      $('#lastname:invalid').css('border', '1px solid hsl(0, 100%, 74%)');
      $('#lastname:invalid+i').css({
        'color': 'hsl(0, 100%, 74%)',
        'font-size': '12px',
        'font-weight': '400',
        'float': 'right',
        'margin-bottom': '15px',
        'display': 'block'
      });
    }
  });


  emailInput.addEventListener('input', function () {
    console.log('Your email');
    if (this.value != "") {
      console.log('I am not empty');
      $('#email:valid').css('border', '1px solid hsl(154, 59%, 51%)');
      $('#email:valid+i').css('display','none');
      $('#email:invalid').css('border', '1px solid hsl(0, 100%, 74%')
      $('#email:invalid+i').css({
        'color': 'hsl(0, 100%, 74%)',
        'font-size': '12px',
        'font-weight': '400',
        'float': 'right',
        'margin-bottom': '15px',
        'display': 'block'
      });
    }

    else {
      console.log('Nothing here');
      $('#email:invalid').css('border', '1px solid hsl(0, 100%, 74%)');
      $('#email:invalid+i').css({
        'color': 'hsl(0, 100%, 74%)',
        'font-size': '12px',
        'font-weight': '400',
        'float': 'right',
        'margin-bottom': '15px',
        'display': 'block'
      });
      $('#email').addClass('redplaceholder');
    }
  });

  passwordInput.addEventListener('input', function () {
    console.log('Your password');
    if (this.value != "") {
      console.log('I am not empty');
      $('input:valid').css('border', '1px solid hsl(154, 59%, 51%)');
      $('input:valid+i').css('display','none')
    }
    else{
      console.log('Nothing here');
      $('#password:invalid').css('border', '1px solid hsl(0, 100%, 74%)');
      $('#password:invalid+i').css({
        'color': 'hsl(0, 100%, 74%)',
        'font-size': '12px',
        'font-weight': '400',
        'float': 'right',
        'margin-bottom': '15px',
        'display': 'block'
      });
    }
  });
});

