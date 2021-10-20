function basicStyle() {
  const html = document.querySelector("html");
  const body = document.querySelector("body");

  // html
  html.style.fontSize = "62.5%";
  // body
  body.style.display = "flex";
  body.style.fontSize = "1.6rem";
  body.style.fontFamily = "Roboto, sans-serif";
  body.style.background = "#000";

  body.style.boxSizing = "border-box";
  body.style.margin = "0";
  body.style.padding = "0";
}

basicStyle();

function formStyle(form) {
  form.style.width = "300px";
  form.style.display = "inline-block";
  form.style.margin = "7rem 0 0 4rem";
  form.style.textAlign = "center";
  form.style.background = "rgba(255,255,255, 0.7)";
  form.style.padding = "2.7rem";
  form.style.borderRadius = "8px";
  form.style.zIndex = "1999999";
}

function headerStyle(element) {
  element.style.fontSize = `3rem`;
  element.style.fontWeight = `Bold`;
  element.style.marginBottom = "2.7rem";
}

const form = document.querySelector("form");
function insertForm() {
  formStyle(form);
  // header
  const addUserEl = document.createElement("div");
  addUserEl.setAttribute("class", "add--user");
  addUserEl.textContent = "Add User";
  //   style the header
  headerStyle(addUserEl);
  form.appendChild(addUserEl);

  // input section
  const inputSection = document.createElement("div");

  inputSection.setAttribute("class", "input--section");

  // by modifying this array you can create a new input with the reqiured style

  // inputClassArr = [className, type , placeholder]
  const inputClassArr = [
    ["input--image", "text", "Give the image url"],
    ["input--firstName", "text", "First Name"],
    ["input--lastName", "text", "Last Name"],
    ["input--birthday", "date", "Birthday"],
    ["input--email", "email", "Email"],
    ["input--password", "password", "Password"],
  ]; // for setting up the classes and type and placeholder of each input field

  let inputContainer;
  inputClassArr.forEach((inputAttributeValue) => {
    const inputEl = document.createElement("input");
    //  set class name
    inputEl.setAttribute("class", inputAttributeValue[0]);
    //  set type
    inputEl.setAttribute("type", inputAttributeValue[1]);

    //  set placeholder

    inputEl.setAttribute("placeholder", inputAttributeValue[2]);

    //  style input
    inputStyle(inputEl);
    // get the section and the childern
    inputSection.appendChild(inputEl);
    inputContainer = inputSection;
  });

  inputStyleContainer(inputContainer);

  form.appendChild(inputContainer);
  //   submit btn

  const btnSubmit = document.createElement("button");
  btnSubmit.setAttribute("class", "btn--submit");
  btnSubmit.textContent = "SUBMIT";
  submitStyle(btnSubmit);

  form.appendChild(btnSubmit);
}

insertForm();

function submitStyle(btn) {
  btn.style.padding = "0.9rem 1.8rem";
  btn.style.marginTop = "1.9rem";
  btn.style.cursor = "pointer";
  btn.style.background = "#2a9d8f";
  btn.style.color = "#fff";
  btn.style.outline = "0";
  btn.style.border = "0";
  btn.style.borderRadius = "5px";
  btn.style.fontWeight = "bold";
  btn.style.boxShadow = " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
}

function inputStyleContainer(inputContent) {
  inputContent.style.display = "flex";
  inputContent.style.flexDirection = "column";
  inputContent.style.gap = "2.1rem";
}

function inputStyle(input) {
  input.style.outline = 0;
  input.style.border = 0;
  input.style.padding = "0.7rem 0";
  input.style.fontSize = "1.7rem";
  input.style.fontFamily = "Roboto";
  input.style.background = "none";
  input.style.borderBottom = "1px solid #2a9d8f";
}

function html(person) {
  return `
<div class="form--data">
<div class="form--image style="height:100%">
  <img src="${
    person.img ? person.img : "./image/man.jpg"
  }" style="width:100%; height:100%;" />
</div>

<div class="form--firstName">
First Name: <span>${person.firstName}</span>
</div>

<div class="form--lastname">
Last Name: <span>${person.lastName}</span>
</div>

<div class="form--birhtday">
Birthday: <span>${person.birthday}</span>
</div>

<div class="form--email">
Email: <span>${person.email}</span>
</div>

<div class="form--password">
Password: <span>${person.password}</span>
</div>
</div>
`;
}

function insertFormData(person = "") {
  const formDataContainer = document.querySelector(".form--data__container");

  formDataContainer.innerHTML = html(person);
  const formDataContent = document.querySelector(".form--data");
  //
  styleFormDataContent(formDataContent);
  styleFormDataContainer(formDataContainer);
}
insertFormData();

function styleFormDataContent(formDataContent) {
  formDataContent.style.display = "grid";
  formDataContent.style.gridTemplateRows = "300px auto";
  formDataContent.style.gap = "1rem";
  formDataContent.style.fontFamily = "Roboto";
}

function styleFormDataContainer(data) {
  data.style.margin = "7rem 0 0 4rem";
  data.style.width = "290px";
  data.style.background = "rgba(255,255,255, 0.7)";
  data.style.transition = "all 0.4s ease";
  data.style.transform = "translateX(-700px)";
  data.style.opacity = "0";
  data.style.zIndex = "0";
  data.style.padding = "1rem";
}

function submitValue(e) {
  e.preventDefault();
  const inputs = document.querySelector(".input--section").children;

  const inputValueArr = Array.from(inputs).map((el) => el.value);
  // checks if user has given all the data about him or her in the form
  if (inputValueArr.includes("")) return;

  //  defines the person data
  const person = {
    img: inputValueArr[0],
    firstName: inputValueArr[1],
    lastName: inputValueArr[2],
    birthday: inputValueArr[3],
    email: inputValueArr[4],
    password: inputValueArr[5],
  };

  // insert form data
  insertFormData(person);
  // activate the formdata when clicked
  activateForm();

  // setting the values to null
  Array.from(inputs).map((el) => (el.value = ""));
}

function activateForm() {
  const formDataContainer = document.querySelector(".form--data__container");

  formDataContainer.style.transform = "translateX(0)";
  formDataContainer.style.opacity = "1";
}

form.addEventListener("submit", submitValue);
