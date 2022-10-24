<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Portfolio | Salim ATALLA" />
    <title>Portfolio | Salim ATALLA</title>
    <link rel="stylesheet" href="./assets/css/style.css" />

    <!-- Font Awesome -->
    <link rel="stylesheet" href="./assets/css/all.min.css" />

    <!-- Google Fonts: Cairo -->
    <!-- <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;800&display=swap"
      rel="stylesheet"
    /> -->
  </head>
  <body>
    <!-- Start Header -->
    <header id="header" class="header">
      <!-- Start Navbar -->
      <nav class="navbar">
        <div class="container">
          <a href="#" class="logo"><h1>Portfolio</h1></a>
          <div class="menu-btn hide">
            <i class="fa-regular fa-bars menu-icon"></i>
          </div>
          <ul class="nav-links">
            <li><a class="menu-item" href="#profile">Home</a></li>
            <li><a class="menu-item" href="#services">Services</a></li>
            <li><a class="menu-item" href="#projects">Projects</a></li>
            <li><a class="menu-item" href="#about">About</a></li>
            <li><a class="menu-item" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <!-- End Navbar -->

      <!-- Start Profile -->
      <section id="profile" class="profile">
        <div class="container">
          <div class="col-left">
            <div class="image">
              <img src="./assets/imgs/profile.JPG" alt="Profile Photo" />
            </div>
          </div>
          <div class="text">
            <h2 class="main-title">Salim ATALLA</h2>
            <h3 class="profession">Web Developer</h3>
            <p class="bref-bio">
              Highly skilled web developer with good experience making websites
              using HTML/CSS/JS with or without a framework such as Reactjs.
              <br />
              I've done many API interfaces and web applications. I also had a
              nice experience with back-end development using PHP and MySQL.
            </p>
          </div>
        </div>
      </section>
      <!-- End Profile -->
    </header>
    <!-- End Header -->

    <!-- Start The Main Content -->
    <main class="main-content">
      <!-- Start Services -->
      <section id="services" class="services">
        <div class="main-section-title">
          <span class="horizontal"></span>
          <span class="vertical"></span>
          <h2>Services</h2>
        </div>
        <div class="container">
          <div class="box">
            <i class="fa-solid fa-code fa-3x"></i>
            <div class="text">
              <h3>Web Dev.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis
                non saepe dolore voluptatem molestiae eius error quasi, ut
                veniam.
              </p>
            </div>
          </div>
          <div class="box">
            <i class="fa-brands fa-react fa-3x" style="font-weight: 900"></i>
            <div class="text">
              <h3>Reactjs</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis
                non saepe dolore voluptatem molestiae eius error quasi, ut
                veniam.
              </p>
            </div>
          </div>
          <div class="box">
            <i class="fa-regular fa-sitemap fa-3x" style="font-weight: 900"></i>
            <div class="text">
              <h3>API</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis
                non saepe dolore voluptatem molestiae eius error quasi, ut
                veniam.
              </p>
            </div>
          </div>
          <div class="box">
            <i class="fas fa-cog fa-3x"></i>
            <div class="text">
              <h3>Back-end</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis
                non saepe dolore voluptatem molestiae eius error quasi, ut
                veniam.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- End Services -->

      <!-- Start Projects -->
      <div class="projects" id="projects">
        <div class="main-section-title">
          <span class="horizontal"></span>
          <span class="vertical"></span>
          <h2>Projects</h2>
        </div>

        <div class="carousel-wrapper">
          <span class="left-arrow"
            ><i class="fas fa-angle-left fa-2x change-background left-arrow"></i
          ></span>
          <span class="right-arrow">
            <i
              class="fas fa-angle-right fa-2x change-background right-arrow"
            ></i>
          </span>
          <div class="carousel">
            <div class="cards"></div>
          </div>
        </div>
      </div>
      <!-- End Projects -->

      <!-- Start About -->

      <section id="about" class="about">
        <div class="main-section-title">
          <span class="horizontal"></span>
          <span class="vertical"></span>
          <h2>About</h2>
        </div>
        <div class="container">
          <div class="text">
            <h3>Who I'm I ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              sit quia animi. Deserunt explicabo natus porro sapiente atque,
              corporis totam nesciunt eius possimus illum, vel itaque maxime
              adipisci sit autem aperiam. Odit voluptate cumque incidunt
              delectus deleniti fuga facilis hic praesentium asperiores?
              Nesciunt alias enim voluptatem hic itaque, ut, rerum reiciendis
              explicabo rem earum architecto commodi repellat recusandae ipsum
              velit nisi dignissimos eum! Iure ipsa aperiam illum impedit cumque
              porro, itaque nobis maxime quae. Repudiandae in eius laborum,
              reprehenderit quidem cum nulla facilis, cupiditate corrupti natus
              vitae. Magni similique distinctio dignissimos placeat temporibus
              tempora. Est dignissimos itaque reprehenderit repudiandae
              accusamus.
            </p>
          </div>
          <ul class="history"></ul>
        </div>
      </section>
      <!-- End About -->

      <!-- Start Contact -->
      <section id="contact" class="contact">
        <div class="main-section-title">
          <span class="horizontal"></span>
          <span class="vertical"></span>
          <h2>Contact</h2>
        </div>
        <div class="container">
          <div class="image">
            <img src="./assets/imgs/contact.svg" alt="Contact image" />
          </div>
          <form action="index.php" method="POST" name="">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="First Name"
            />
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </section>
      <!-- End Contact -->
    </main>
    <!-- End The Main Content -->

    <script src="./assets/js/script.js"></script>
  </body>
</html>


<?php

  if ($_SERVER['REQUEST_METHOD'] === "POST") {

    // First Name Validation
    if (empty($_POST['first-name'])) {
      $firstNameError = 'First name is empty';
    } else {
      $firstName = $_POST['first-name'];
    }

    // Last Name Validation
    if (empty($_POST['last-name'])) {
      $lastNameError = 'Last name is empty';
    } else {
      $lastName = $_POST['last-name'];
    }

    // Email Validation
    if (empty($_POST['email'])) {
      $emailError = 'Email is empty';
    } else {
      $email = $_POST['email'];
      // validating the email
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailError = 'Invalid email';
      }
    }

    // Subject Validation
    if (empty($_POST['subject'])) {
      $subjectError = 'Subject is empty';
    } else {
      $subject = $_POST['subject'];
    }

    // Message Validation
    if (empty($_POST['message'])) {
      $messageError = 'Message is empty';
    } else {
      $message = $_POST['message'];
    }
  }

  // if (isset($firstName) && isset($lastName) && isset($email) && isset($subject) && isset($message)) {
  //   echo "firstName: " . $firstName . ", lastName: " . $lastName . "<br>";
  //   echo "email: " . $email . "<br>";
  //   echo "subject: " . $subject . "<br>";
  //   echo "message: " . $message . "<br>";
  // }
  