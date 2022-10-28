const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   sendEmail();
  //   reset();
  //   return false;

  // Sending an error msg
  createErrorMsg();
});

// ------------------------------------------------------

function createErrorMsg() {
  const errorMsg = document.createElement("p");
  errorMsg.style = `
  color: red;
  margin: 20px auto auto;
  text-align: center;
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  `;
  errorMsg.innerHTML = `This contact form is not working for the moment,<br> please contact me on social media`;
  document.getElementById("contact-form").appendChild(errorMsg);
}

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: "emailTo",
    From: "emailFrom",
    Subject: `From: ${document.getElementById("first-name").value} ${
      document.getElementById("last-name").value
    } <${document.getElementById("email").value}>, Subject: ${
      document.getElementById("subject").value
    }`,
    Body: document.getElementById("message").value,
  }).then((message) => alert("Your Message Was Received Successfully"));
}
