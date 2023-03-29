<!DOCTYPE html>
<html>
<head>
	<title>Taschenrechner mit KI-Funktion</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<header>
		<h1>Taschenrechner mit KI-Funktion</h1>
	</header>
	<main>
		<section>
			<h2>Taschenrechner</h2>
			<input type="text" id="input" placeholder="0">
			<div class="button-container">
				<button onclick="calculate('+')">+</button>
				<button onclick="calculate('-')">-</button>
				<button onclick="calculate('*')">*</button>
				<button onclick="calculate('/')">/</button>
				<button onclick="clearInput()">C</button>
				<button onclick="calculateResult()">=</button>
			</div>
		</section>
		<section>
			<h2>KI-Funktion</h2>
			<p>Geben Sie eine mathematische Formel ein, die Sie lösen möchten:</p>
			<input type="text" id="ki-input">
			<button onclick="solveFormula()">Lösen</button>
			<p id="ki-output"></p>
		</section>
		<section>
			<h2>Eingebettete Webseite</h2>
			<iframe src="https://www.example.com" width="100%" height="400px"></iframe>
		</section>
	</main>
	<footer>
		<p>© 2023 - Taschenrechner mit KI-Funktion Webseite</p>
		<div class="social-media-container">
			<a href="https://www.facebook.com"><img src="facebook-icon.png"></a>
			<a href="https://www.twitter.com"><img src="twitter-icon.png"></a>
			<a href="https://www.instagram.com"><img src="instagram-icon.png"></a>
		</div>
	</footer>
	<script src="script.js"></script>
</body>
</html>
