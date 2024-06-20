function otpGenerator() {
    let numbers = "0123456789";
    let OTP = "";
    for (i = 0; i < 6; i++) {
      OTP += numbers[Math.floor(Math.random() * numbers.length)];
    }
    console.log(OTP);
  }
  
  window.addEventListener("load", otpGenerator);