

// get an input element

// write a placeholder value inside the field when the required value is invalid



$(document).ready(function(event){
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


// function oddSums(num) {
//   num = [2,4,8,9,11];
//   var sum = 0;
//   for(var i = 0; i <= num.length; i++ ) {
//     if (num[i]%2 == 1)  {
//       // sum.push(num[i]);
//       sum = sum + num[i];
//       console.log('Array ' + Number(i+1)  + '\n'+'\n' + sum);
//     }else if(num[i]%2 == 0) {
//       console.log(0)
//       sum.push(num[i]);
//       console.log('Array' + Number(i+1) + '\n' + '\n' + sum)
//       console.log('At least one even number in the Array');
//      } else{console.log('what is this ' + num)}
//   }

//    const a = 9000;
//    const b = 2;
//    let div = a%b;
//    console.log(div);

// }

// oddSums();





// function sumOfOddNumbers(num) {
//   var oddNumbers = [];
//   var sum = 0;

//   for (var i = 0; i <= num.length; i++) {

//     if (num[i]%2 === 1) { 

//       oddNumbers.push(num[i]);

//       sum = sum + oddNumbers.pop(i);

//       // console.log('You get ' + sum);
//     }
//     else if (num[i]%2 === 0 && sum%2 != 1) {
//       // console.log(oddNumbers)
//       alert(0);
//     }
//   }
//   console.log(sum)
// }

// sumOfOddNumbers([9,3,4]);


// function bigger_filter (array, size) {
//   var holder = [];
//   for(var i = 0; i <= array.length; i++) {
//     if (array[i] > size){
//       holder.push(array[i]);
//       console.log(holder) 
//     }
//   }
// }
// bigger_filter([1,2,3],2)


// function strange_words(strArr){
//   var holder = [];
//   var empty = []
//   var holderArrayLength;
//   var eachHolderString;
//   var eachHolderStringLength;
//   for (var i = 0; i < strArr.length; i++) {
//     holder.push(strArr[i]);

//     holderArrayLength = holder.length;

//     eachHolderString = holder[i];

//     eachHolderStringLength = eachHolderString.length;

    // console.log(holder);

    // console.log(holderArrayLength);

    // console.log(eachHolderString);

    // console.log(eachHolderStringLength);

    // if ( (eachHolderString[0] == 'e' && eachHolderStringLength > 5) || (eachHolderString[0] != 'e' && eachHolderStringLength < 6 ) ) {

    //   console.log(eachHolderString + '\t' + ' ' );
    // }
    // else {
      // console.log(empty)
      // return;
//     }
//   }
// }

// strange_words(['eating','proper','key','earth'])


// function strange_words (word) {
//   var wLength;
//   wLength = word.length;
//   console.log(wLength);
//   if(wLength > 9) {
//     console.log('I can\'t come out');
//   }
//   else{
//     console.log(word);
//     console.log(word[0]);
//   }
// }
// strange_words('elephant')








// tests for strange_words
// 'taco','eggs','excellent','exponential','artistic','cat','eat'
// 'mountain','ether'