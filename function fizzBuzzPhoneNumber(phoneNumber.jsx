function fizzBuzzPhoneNumber(phoneNumber) {
    
    const phoneNumberSum = phoneNumber.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    
    for (let i = 1; i <= phoneNumberSum; i++) {
      if (i % 4 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 4 == 0) {
        console.log('Fizz');
      } else if (i % 5 == 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }
  