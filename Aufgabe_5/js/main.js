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
        let insert = document.getElementById("span");
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
        if (flavour == 0 || container == 0 || orderStatus.length == 0) {
            insert.innerHTML = ("Du musst noch die Felder ${orderStatus} ausfüllen");
        }
        else {
            insert.innerHTML = ("Du musst noch die Felder ${orderStatus} ausfüllen");
        }
    }
    function orderContent(_event) {
        let orderSelections = document.getElementsByTagName("input");
        document.getElementById("iceSelections").innerHTML = "Sorten: ";
        document.getElementById("toppingSelections").innerHTML = "Extras: ";
        document.getElementById("containerSelections").innerHTML = "Behälter: ";
        document.getElementById("shippingSelections").innerHTML = "Versandart: ";
        for (let i = 0; i < orderSelections.length; i++) {
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