<html>
  <head>
    <title>Taschenrechner</title>
  </head>
  <body>
    <h1>Taschenrechner</h1>
    <form>
      <label for="number1">Zahl 1:</label>
      <input type="number" id="number1" name="number1"><br><br>
      <label for="number2">Zahl 2:</label>
      <input type="number" id="number2" name="number2"><br><br>
      <input type="button" value="Addition" onclick="add()">
      <input type="button" value="Subtraktion" onclick="subtract()">
      <input type="button" value="Multiplikation" onclick="multiply()">
      <input type="button" value="Division" onclick="divide()">
    </form>
    <br>
    <h2>Ergebnis:</h2>
    <p id="result"></p>

    <script>
      function add() {
        var num1 = parseInt(document.getElementById("number1").value);
        var num2 = parseInt(document.getElementById("number2").value);
        var result = num1 + num2;
        document.getElementById("result").innerHTML = result;
      }

      function subtract() {
        var num1 = parseInt(document.getElementById("number1").value);
        var num2 = parseInt(document.getElementById("number2").value);
        var result = num1 - num2;
        document.getElementById("result").innerHTML = result;
      }

      function multiply() {
        var num1 = parseInt(document.getElementById("number1").value);
        var num2 = parseInt(document.getElementById("number2").value);
        var result = num1 * num2;
        document.getElementById("result").innerHTML = result;
      }

      function divide() {
        var num1 = parseInt(document.getElementById("number1").value);
        var num2 = parseInt(document.getElementById("number2").value);
        var result = num1 / num2;
        document.getElementById("result").innerHTML = result;
      }
    </script>
  </body>
</html>














<html>
  <head>
    <title>Internet Geschwindigkeit messen</title>
  </head>
  <body>
    <h1>Internet Geschwindigkeit messen</h1>
    <p>Klicken Sie auf den untenstehenden Button, um Ihre Internetgeschwindigkeit zu messen:</p>
    <button onclick="measureSpeed()">Messen</button>
    <p id="result"></p>

    <script>
      function measureSpeed() {
        var startTime, endTime;
        var fileSize = 5 * 1024 * 1024; // 5 MB
        var download = new Image();
        download.onload = function() {
          endTime = (new Date()).getTime();
          showResults(fileSize, startTime, endTime);
        }

        startTime = (new Date()).getTime();
        var cacheBuster = "?nnn=" + startTime;
        download.src = "https://example.com/speedtest/sample.jpg" + cacheBuster;
      }

      function showResults(fileSize, startTime, endTime) {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = fileSize * 8;
        var speedBps = bitsLoaded / duration;
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);

        var resultElement = document.getElementById("result





