var iceDealer_Mark_II;
(function (iceDealer_Mark_II) {
    window.addEventListener("load", init);
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    function init(_event) {
        createFieldsetElement(iceDealer_Mark_II.iceCreamFlavour);
        insertBeforeExisting();
        fieldset.addEventListener("change", orderContent);
        execute();
    }
    /* Create new Fieldset-HTML Element*/
    function createFieldsetElement(_cat) {
        document.getElementById("formID").appendChild(fieldset);
        document.body.appendChild(fieldset);
        legend.innerHTML = "Wähle Dein Eis";
        fieldset.appendChild(legend);
        for (let flavour in _cat) {
            let value = _cat[flavour];
            for (let i = 0; i < value.length; i++)
                fieldsetInsert(value[i]);
        }
    }
    /* Insert new HTML-Fieldset before existing HTML*/
    function insertBeforeExisting() {
        var existingHTML = document.getElementById("header");
        var newHTML = document.getElementById("newFieldset");
        existingHTML.appendChild(newHTML);
        var main = document.getElementById("main");
        main.insertBefore(existingHTML, main.childNodes[0]);
    }
    function orderContent(_event) {
        let start = 0;
        let orderSelections = document.getElementsByTagName("input");
        let content = document.createElement("li");
        document.getElementById("iceSelections").innerHTML = "Sorten: ";
        document.getElementById("toppingSelections").innerHTML = "Extras: ";
        document.getElementById("containerSelections").innerHTML = "Behälter: ";
        document.getElementById("shippingSelections").innerHTML = "Versandart: ";
        for (let i = 0; i < orderSelections.length; i++) {
            if (orderSelections[i].checked == true && orderSelections[i].getAttribute("price")) {
                let price = Number(orderSelections[i].getAttribute("price"));
                start += price;
                document.getElementById("orderPrice").innerHTML = start.toString() + " " + "€";
                content.innerHTML = `${orderSelections[i].name}`;
                document.getElementById("toppingSelections").appendChild(content);
            }
            if (orderSelections[i].checked == true && orderSelections[i].getAttribute("name") == "radiobutton") {
                document.getElementById("orderPrice").innerHTML = start.toString() + " " + "€";
                let form = document.createElement("li");
                form.innerHTML = `${orderSelections[i].getAttribute("bezeichnung")}`;
                document.getElementById("containerSelections").appendChild(form);
            }
            if (orderSelections[i].type == "number" && Number(orderSelections[i].value) > 0) {
                let price = Number(orderSelections[i].value);
                start += price;
                document.getElementById("orderPrice").innerHTML = start.toString() + " " + "€";
                let sorten = document.createElement("li");
                sorten.innerHTML = `${orderSelections[i].value} x ${orderSelections[i].name}`;
                document.getElementById("iceSelections").appendChild(sorten);
            }
            if (orderSelections[i].checked == true && orderSelections[i].name == "shipping") {
                let price = Number(orderSelections[i].getAttribute("EDprice"));
                start += price;
                document.getElementById("orderPrice").innerHTML = start.toString() + " " + "€";
                let shipping = document.createElement("li");
                shipping.innerHTML = `${orderSelections[i].getAttribute("alt")}`;
                document.getElementById("shippingSelections").appendChild(shipping);
            }
        }
    }
    /* Fill new HTML-Fieldset with Information*/
    function fieldsetInsert(_property) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.setAttribute("for", _property.name);
        label.innerHTML = _property.name;
        fieldset.setAttribute("id", "newFieldset");
        if (_property.type == "radio" || "number" || "checkbox") {
            input.setAttribute("type", _property.type);
            input.setAttribute("price", _property.price);
            input.setAttribute("alt", _property.name);
            input.setAttribute("name", _property.name);
            input.setAttribute("step", "1");
            input.setAttribute("min", "0");
            input.setAttribute("value", "0");
        }
        fieldset.appendChild(input);
        fieldset.appendChild(label);
    }
    /*Execute OrderComplete-Check on button-click*/
    function execute() {
        document.getElementById("orderDone").addEventListener("click", orderComplete);
        /*Check Order on missing information*/
        function orderComplete() {
            let deliveryStatus = 0;
            let delivery1 = document.getElementById("normalShipping");
            let delivery2 = document.getElementById("expressShipping");
            let location = document.getElementById("location");
            let street = document.getElementById("street");
            let forename = document.getElementById("forename");
            let surename = document.getElementById("surname");
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
            else {
                alert("Ihre Bestellung wurde empfangen");
            }
        }
    }
})(iceDealer_Mark_II || (iceDealer_Mark_II = {}));
//# sourceMappingURL=main.js.map