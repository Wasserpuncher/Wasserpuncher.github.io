// Zufällig entscheiden, ob der Text angezeigt wird oder ein 404 Fehlercode zurückgegeben wird
const showText = Math.random() < 0.5;

if (showText) {
    // Den Text anzeigen
    document.getElementById("text").style.display = "block";
} else {
    // Einen HTTP 404 Fehlercode zurückgeben und das Bild einfügen
    document.body.innerHTML = `
        <h1>404 - Seite nicht gefunden</h1>
        <img id="ERROR" src="404.jpg" alt="404 Error">
    `;
    document.body.style.textAlign = "center";
    document.body.style.fontFamily = "Arial, sans-serif";
    document.getElementById("error-image").style.display = "block"; // Das Bild anzeigen
}
