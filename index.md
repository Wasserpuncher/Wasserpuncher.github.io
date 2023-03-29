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





<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Meine Webseite</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			background-color: #f2f2f2;
			color: #333;
		}
    
    	header {
		background-color: #333;
		color: #fff;
		padding: 20px;
		text-align: center;
	}
	
	nav {
		background-color: #444;
		color: #fff;
		padding: 10px;
	}
	
	nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: space-between;
	}












