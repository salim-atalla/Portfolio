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

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  //   sendEmail();
  //   reset();
  //   return false;
});

const errorMsg = document.createElement("p");
errorMsg.style = `
  color: red;
  margin-top: 20px;
  text-align: right
`;
errorMsg.innerHTML = `This contact form is not working for the moment, please contact me on social media`;
document.getElementById("contact-form").appendChild(errorMsg);
