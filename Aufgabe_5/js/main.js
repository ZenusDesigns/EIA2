var iceDealer_Mark_II;
(function (iceDealer_Mark_II) {
    window.addEventListener("load", init);
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    function init(_event) {
        fieldset.addEventListener("change", orderContent);
        fieldset.addEventListener("change", orderPrice);
        createFieldsetElement(iceDealer_Mark_II.iceCreamFlavour);
        insertBeforeExisting();
    }
    function orderPrice(_event) {
        let orderSum = 0;
        let orderPrice = 0;
        let orderSelections = document.getElementsByTagName("input");
        for (let i = 0; i < orderSelections.length; i++) {
            if (orderSelections[i].checked == true
                || Number(orderSelections[i].value) > 0) {
                orderPrice = Number(orderSelections[i].value);
                orderSum += orderPrice;
            }
        }
        document.getElementById("orderPrice").innerHTML = `Bestellzusammenfassung:  ${orderSum} €`;
    }
    /* Insert new HTML-Fieldset before existing HTML*/
    function insertBeforeExisting() {
        var existingHTML = document.getElementById("header");
        var newHTML = document.getElementById("newFieldset");
        existingHTML.appendChild(newHTML);
        var main = document.getElementById("main");
        main.insertBefore(existingHTML, main.childNodes[0]);
    }
    /*Create new Fieldset-HTML Element*/
    function createFieldsetElement(_cat) {
        document.body.appendChild(fieldset);
        legend.innerHTML = "Wähle Dein Eis";
        fieldset.appendChild(legend);
        for (let flavour in _cat) {
            let value = _cat[flavour];
            for (let i = 0; i < value.length; i++)
                fieldsetInsert(value[i]);
        }
    }
    /* Fill new HTML-Fieldset with Information*/
    function fieldsetInsert(_property) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.setAttribute("for", _property.name);
        label.innerHTML = _property.name;
        fieldset.setAttribute("id", "newFieldset");
        switch (_property.type) {
            case "radio":
                input.setAttribute("type", _property.type);
                input.setAttribute("price", _property.price);
                input.setAttribute("alt", _property.name);
                input.setAttribute("name", "radiobutton");
                break;
            case "number":
                input.setAttribute("type", _property.type);
                input.setAttribute("price", _property.price);
                input.setAttribute("name", _property.name);
                input.setAttribute("step", "1");
                input.setAttribute("min", "0");
                input.setAttribute("value", "0");
                break;
            case "checkbox":
                input.setAttribute("type", _property.type);
                input.setAttribute("price", _property.price);
                input.setAttribute("name", _property.name);
                break;
        }
        fieldset.appendChild(input);
        fieldset.appendChild(label);
    }
    /*Execute OrderComplete-Check on button-click*/
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
    function orderContent(_event) {
        let orderSelections = document.getElementsByTagName("input");
        document.getElementById("orderDone").addEventListener("click", orderComplete);
        let fieldsets = document.getElementsByTagName("fieldset");
        document.getElementById("iceSelections").innerHTML = "Sorten: ";
        document.getElementById("toppingSelections").innerHTML = "Extras: ";
        document.getElementById("containerSelections").innerHTML = "Behälter: ";
        document.getElementById("shippingSelections").innerHTML = "Versandart: ";
        for (let i = 0; i < orderSelections.length && i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", orderContent);
            if (orderSelections[i].checked == true) {
                if (orderSelections[i].name == "Schokolade"
                    || orderSelections[i].name == "Streusel"
                    || orderSelections[i].name == "Sahne") {
                    let target = document.createElement("ul");
                    target.innerHTML = `${orderSelections[i].name}, `;
                    document.getElementById("toppingSelections").appendChild(target);
                }
                else if (orderSelections[i].name == "Waffel" || orderSelections[i].name == "Becher") {
                    let target = document.createElement("ul");
                    target.innerHTML = `${orderSelections[i].name}`;
                    document.getElementById("containerSelections").appendChild(target);
                }
                else if (orderSelections[i].name == "shipping") {
                    let target = document.createElement("ul");
                    target.innerHTML = `${orderSelections[i].alt}`;
                    document.getElementById("shippingSelections").appendChild(target);
                }
            }
            if (Number(orderSelections[i].value)) {
                let target = document.createElement("li");
                target.innerHTML = `${orderSelections[i].value} Kugel (n) ${orderSelections[i].name}, `;
                document.getElementById("iceSelections").appendChild(target);
            }
        }
    }
})(iceDealer_Mark_II || (iceDealer_Mark_II = {}));
//# sourceMappingURL=main.js.map