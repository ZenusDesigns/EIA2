var EisdDealer;
(function (EisdDealer) {
    window.addEventListener("load", init);
    document.addEventListener("load", init);
    document.getElementById("orderDone").addEventListener("click", orderComplete);
})(EisdDealer || (EisdDealer = {}));
function init(_event) {
    console.log(init);
    let fieldsets = document.getElementsByTagName("fieldset");
    for (let i = 0; i < fieldsets.length; i++) {
        let fieldset = fieldsets[i];
        fieldset.addEventListener("change", orderContent);
        fieldset.addEventListener("change", orderPrice);
        console.log(fieldset);
    }
}
function orderPrice() {
    let orderSelections = document.getElementsByTagName("input");
    let orderSum = 0;
    console.log(orderPrice.valueOf);
    document.getElementById("orderPrice").innerHTML = "Preis: ";
    for (let i = 0; i < orderSelections.length; i++) {
        if (orderSelections[i].checked == true) {
            orderSum = Number(orderSelections[i].value);
            console.log(orderSum);
        }
    }
    document.getElementById("orderPrice").innerHTML = `Bestellzusammenfassung:   ${orderSum} €`;
}
function orderContent(_event) {
    let orderSelections = document.getElementsByTagName("input");
    document.getElementById("iceSelections").innerHTML = "Sorten: ";
    document.getElementById("toppingSelections").innerHTML = "Extras: ";
    document.getElementById("containerSelections").innerHTML = "Behälter: ";
    document.getElementById("shippingSelections").innerHTML = "Versandart: ";
    for (let i = 0; i < orderSelections.length; i++) {
        if (orderSelections[i].checked == true) {
            if (orderSelections[i].name == "toppingSelect1"
                || orderSelections[i].name == "toppingSelect2"
                || orderSelections[i].name == "toppingSelect3") {
                let target = document.createElement("ul");
                target.innerHTML = `${orderSelections[i].alt}, `;
                document.getElementById("toppingSelections").appendChild(target);
            }
            else if (orderSelections[i].name == "container") {
                let target = document.createElement("ul");
                target.innerHTML = `${orderSelections[i].alt}`;
                document.getElementById("containerSelections").appendChild(target);
            }
            else if (orderSelections[i].name == "shipping") {
                let target = document.createElement("ul");
                target.innerHTML = `${orderSelections[i].alt}`;
                document.getElementById("shippingSelections").appendChild(target);
            }
        }
        if (orderSelections[i].name == "Schokolade"
            || orderSelections[i].name == "Vanille"
            || orderSelections[i].name == "Erdbeere"
            || orderSelections[i].name == "Zitrone"
            || orderSelections[i].name == "Joghurt"
            || orderSelections[i].name == "Haselnuss") {
            let target = document.createElement("li");
            target.innerHTML = `${orderSelections[i].value}, `;
            document.getElementById("iceSelect").appendChild(target);
        }
    }
}
function orderComplete() {
    let deliveryStatus = 0;
    let delivery1 = document.getElementById("normalShipping");
    let delivery2 = document.getElementById("expressShipping");
    let location = document.getElementById("location");
    let street = document.getElementById("street");
    let forename = document.getElementById("forename");
    let surename = document.getElementById("surename");
    if (delivery1.checked == true || delivery2.checked == true) {
        deliveryStatus = 1;
    }
    if (location.value == ""
        || street.value == ""
        || forename.value == ""
        || surename.value == ""
        || deliveryStatus == 0) {
        alert("Füllen Sie bitte alle Felder aus !");
    }
}
//# sourceMappingURL=main.js.map