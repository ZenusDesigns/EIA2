function FunktionPrompter() {
    var person:string = prompt("Bitte fügen Sie Ihren Namen ein", "Name");
    if (person != null) {   /* Prompter mit Textfeld, variable für Nameneingabe*/ 
      document.getElementById("PromptText").innerHTML =
      "Hallo " + person + "! Ich hoffe Du hast einen schönen Tag !";
    } /* Ausgabe des Begrüßungs */ 
    console.info ("Hallo " + person + "! Ich hoffe Du hast einen schönen Tag !");
  }