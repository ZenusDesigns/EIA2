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
    /* Fill new HTML-Fieldset with Information*/
    function fieldsetInsert(_ice) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.setAttribute("for", _ice.name);
        label.innerHTML = _ice.name;
        fieldset.setAttribute("id", "newFieldset");
        switch (_ice.type) {
            case "radio":
                input.setAttribute("type", _ice.type);
                input.setAttribute("price", _ice.price);
                input.setAttribute("bezeichnung", _ice.name);
                input.setAttribute("name", "radiobutton");
                break;
            case "number":
                input.setAttribute("type", _ice.type);
                input.setAttribute("price", _ice.price);
                input.setAttribute("name", _ice.name);
                input.setAttribute("step", "1");
                input.setAttribute("min", "0");
                input.setAttribute("value", "0");
                break;
            case "checkbox":
                input.setAttribute("type", _ice.type);
                input.setAttribute("price", _ice.price);
                input.setAttribute("name", _ice.name);
                break;
        }
        fieldset.appendChild(input);
        fieldset.appendChild(label);
    }
    /*Execute OrderComplete-Check on button-click*/
    function execute() {
        document.getElementById("orderDone").addEventListener("click", orderComplete);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", orderContent);
        }
    }
    /*Check Order on missing information*/
    function orderComplete() {
        let orderStatus = [];
        let missing = document.getElementsByTagName("input");
        let flavour = 0;
        let container = 0;
        for (let i = 0; i < missing.length; i++) {
            if (missing[i].type == "text")
                if (missing[i].value == "") {
                    let feldName = missing[i].name;
                    orderStatus.push(feldName);
                }
            if (missing[i].type == "number") {
                if (Number(missing[i].value) > 0) {
                    flavour = 1;
                }
            }
            if (missing[i].type == "radio") {
                if (missing[i].checked == true) {
                    container = 1;
                }
            }
        }
        if (flavour == 0) {
            alert("Du musst noch eine Eissorte auswählen");
        }
        if (container == 0) {
            alert("Du musst noch einen Behälter auswählen");
        }
        if (orderStatus.length == 0) {
            alert("Deine Bestellung wurde empfangen!");
        }
        else {
            alert(`Du musst noch die Felder ${orderStatus} ausfüllen`);
        }
    }
    /**/
    function orderContent(_event) {
        let start = 0;
        let orderSelections = document.getElementsByTagName("input");
        let content = document.createElement("li");
        document.getElementById("iceSelections").innerHTML = "Sorten: ";
        document.getElementById("toppingSelections").innerHTML = "Extras: ";
        document.getElementById("containerSelections").innerHTML = "Behälter: ";
        document.getElementById("shippingSelections").innerHTML = "Versandart: ";
        for (let i = 0; i < orderSelections.length; i++) {
            if (orderSelections[i].checked == true && orderSelections[i].getAttribute("price") == "0.8") {
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
})(iceDealer_Mark_II || (iceDealer_Mark_II = {}));
//# sourceMappingURL=main.js.map