Hello Together
                      
### About me
I live in Würzburg (Germany). <br>
I am interested in Python programming. 
I am relatively new to GitHub.
I have also programmed a few things on a Raspberrypi. 
So in the programming world I am not quite so inexperienced. 
In terms of Java or so I have no idea. 




                   Social Media                              

                   My Twitter account: https://twitter.com/PftKai 
                   My Twitch: twitch.tv/wasserpuncher
                   My Subreddit: https://www.reddit.com/r/Wasserpunchergithub
                   Bio Link: https://bio.link/kai60tfa 





 

  






  
  
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
  
  

  








