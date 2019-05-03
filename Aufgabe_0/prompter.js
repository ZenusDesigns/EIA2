function FunktionPrompter() {
    var person = prompt("Bitte fügen Sie Ihren Namen ein", "Name");
    if (person != null) { /* Prompter mit Textfeld, Variable für Nameneingabe*/
        document.getElementById("PromptText").innerHTML =
            "Hallo " + person + "! Ich hoffe Du hast einen schönen Tag !";
    } /* Ausgabe des Begrüßungstext mit den Werten der Variable */
    console.info("Hallo " + person + "! Ich hoffe Du hast einen schönen Tag !");
} /* Ausgabe des Textes in der Konsole */
//# sourceMappingURL=prompter.js.map