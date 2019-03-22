function FunktionPrompter() {
    var person = prompt("Bitte fügen Sie Ihren Namen ein", "Name");
    if (person != null) {
        document.getElementById("PromptText").innerHTML =
            "Hallo " + person + "! Ich hoffe Du hast einen schönen Tag !";
    }
    console.info("Hallo " + person + "! Ich hoffe Du hast einen schönen Tag !");
}
//# sourceMappingURL=prompter.js.map