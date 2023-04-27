<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Meine Webseite</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="#">Startseite</a></li>
        <li><a href="#">Über mich</a></li>
        <li><a href="#">Kontakt</a></li>
        <li><a href="#">Impressum</a></li>
      </ul>
    </nav>
    
    <div class="container">
      <h1>Willkommen auf meiner Webseite!</h1>
      <p>Hier kannst du mich auf meinen Sozialen Netzwerken finden:</p>
      <ul class="social-links">
        <li><a href="https://www.facebook.com/">Facebook</a></li>
        <li><a href="https://www.twitter.com/">Twitter</a></li>
        <li><a href="https://www.instagram.com/">Instagram</a></li>
      </ul>
    </div>
    
    <script src="script.js"></script>
  </body>
</html>


nav {
  background-color: #333;
  color: #fff;
  height: 50px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline-block;
  margin-right: 20px;
  line-height: 50px;
}

nav ul li:last-child {
  margin-right: 0;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 0 10px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 50px;
}

.social-links {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.social-links li {
  display: inline-block;
  margin-right: 20px;
}

.social-links li:last-child {
  margin-right: 0;
}

.social-links li a {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  text-decoration: none;
}
console.log("Hello, world!");
