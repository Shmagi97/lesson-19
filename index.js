const submitClick = document.querySelector(".submitButton");
const formHtml = document.querySelector(".form");

const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");

const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const personalNumber = document.querySelector("#personal-number");
const personalNumberError = document.querySelector("#personal-number-error");

const mobileNumberInput = document.querySelector("#mobile-number");
const mobileNumberError = document.querySelector("#mobile-number-error");

const jobDescription = document.querySelector("#job-description");
const jobDescriptionError = document.querySelector("#job-description-error");

const userjs = document.querySelector("#username");
const userErrorjs = document.querySelector("#username-error");

function userFn() {
  if (/^\s*$/.test(userjs.value)) {
    userjs.classList.add("error");
    userjs.classList.remove("correct");
    userErrorjs.innerText = "შეავსეთ ველი";
    return false;
  } else {
    userjs.classList.remove("error");
    userjs.classList.add("correct");
    userErrorjs.innerText = "";
    return true;
  }
}

function passwordFn() {
  if (passwordInput.value.length < 10) {
    passwordInput.classList.add("error");
    passwordInput.classList.remove("correct");
    passwordError.innerText = "მინიმუმ 10 სიმბოლო";
    return false;
  } else {
    passwordInput.classList.remove("error");
    passwordInput.classList.add("correct");
    passwordError.innerText = "";
    return true;
  }
}

function gmailFn() {
  if (!/@gmail.com$/.test(emailInput.value)) {
    emailInput.classList.add("error");
    emailInput.classList.remove("correct");
    emailError.innerText = 'აუცილებელია დაბოლოება "@gmail.com"';
    return false;
  } else {
    emailError.innerText = "";
    emailInput.classList.remove("error");
    emailInput.classList.add("correct");
    return true;
  }
}

function personalNumberFn() {
  if (personalNumber.value.length !== 11) {
    personalNumberError.innerText = "სავალდებულოა 11 სიმბოლო";
    personalNumber.classList.add("error");
    personalNumber.classList.remove("correct");
    return false;
  } else if (!/^\d+$/.test(personalNumber.value)) {
    personalNumberError.innerText = "შეიყვანეთ მხოლოდ ციფრები";
    personalNumber.classList.add("error");
    personalNumber.classList.remove("correct");
    return false;
  } else {
    personalNumberError.innerText = "";
    personalNumber.classList.add("correct");
    personalNumber.classList.remove("error");
    return true;
  }
}

function mobileNumbeFn() {
  if (mobileNumberInput.value.length !== 9) {
    mobileNumberError.innerText = "სავალდებულოა 9 სიმბოლო";
    mobileNumberInput.classList.add("error");
    mobileNumberInput.classList.remove("correct");
    return false;
  } else if (!/^\d+$/.test(mobileNumberInput.value)) {
    mobileNumberInput.classList.add("error");
    mobileNumberInput.classList.remove("correct");
    mobileNumberError.innerText = "შეიყვანეთ მხოლოდ ციფრები";
    return false;
  } else {
    mobileNumberInput.classList.add("correct");
    mobileNumberInput.classList.remove("error");
    mobileNumberError.innerText = "";
    return true;
  }
}

function jobDescriptionFn() {
  if (!/^.{0,50}$/.test(jobDescription.value)) {
    jobDescription.classList.add("error");
    jobDescription.classList.remove("correct");
    jobDescriptionError.innerText = "შეიყვანეთვ მაქსიმუმ 50 სიმბოლო";
    return false;
  } else if (/^\s*$/.test(jobDescription.value)) {
    jobDescription.classList.add("error");
    jobDescription.classList.remove("correct");
    jobDescriptionError.innerText = "შეიყვანეთვ მაქსიმუმ 50 სიმბოლო";
    return false;
  } else {
    jobDescription.classList.remove("error");
    jobDescription.classList.add("correct");
    jobDescriptionError.innerText = "";
    return true;
  }
}

userjs.addEventListener("input", userFn);
emailInput.addEventListener("input", gmailFn);
personalNumber.addEventListener("input", personalNumberFn);
mobileNumberInput.addEventListener("input", mobileNumbeFn);
jobDescription.addEventListener("input", jobDescriptionFn);
passwordInput.addEventListener("input", passwordFn);

formHtml.addEventListener("submit", (element) => {
  element.preventDefault();

  const sumbmit1 = userFn();
  const sumbmit2 = passwordFn();
  const sumbmit3 = gmailFn();
  const sumbmit4 = personalNumberFn();
  const sumbmit5 = mobileNumbeFn();
  const sumbmit6 = jobDescriptionFn();

  if (sumbmit1 && sumbmit2 && sumbmit3 && sumbmit4 && sumbmit5 && sumbmit6) {
    formHtml.submit();
    formHtml.reset();
    console.log("hgdhsgdhsd");
  }
});
