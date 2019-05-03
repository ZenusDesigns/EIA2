namespace iceDealer_Mark_II {

    window.addEventListener("load", init);
    let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
    let legend: HTMLLegendElement = document.createElement("legend");


    
    function init(_event: Event): void {
        fieldset.addEventListener("change", orderContent);
        fieldset.addEventListener("change", orderPrice);
        createFieldsetElement(iceCreamFlavour);
        insertBeforeExisting();
    }

    function orderPrice(_event: Event): void {
        let orderSum: number = 0;
        let orderPrice: number = 0;
        let orderSelections: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < orderSelections.length; i++) {
            if (orderSelections[i].checked == true
                || Number(orderSelections[i].value) > 0) {
                orderPrice = Number(orderSelections[i].value);
                orderSum += orderPrice;
            }
        }
        document.getElementById("orderPrice").innerHTML = `Bestellzusammenfassung:  ${orderSum} €`;
    }

    /* Insert new HTML-Fieldset before existing HTML*/
    function insertBeforeExisting() { /**/
        var existingHTML = document.getElementById("header");
        var newHTML = document.getElementById("newFieldset");
        existingHTML.appendChild(newHTML);

        var main = document.getElementById("main");
        main.insertBefore(existingHTML, main.childNodes[0]);
    }

    /*Create new Fieldset-HTML Element*/
    function createFieldsetElement(_cat: key_iceDealer_Mark_II): void {

        document.getElementById("formID").appendChild(fieldset);
        document.body.appendChild(fieldset);
        legend.innerHTML = "Wähle Dein Eis";
        fieldset.appendChild(legend);

        for (let flavour in _cat) {
            let value: iceCreamFlavour[] = _cat[flavour];
            for (let i: number = 0; i < value.length; i++)
                fieldsetInsert(value[i]);
        }
    }

    /* Fill new HTML-Fieldset with Information*/
    function fieldsetInsert(_property: iceCreamFlavour): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

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

    function orderComplete(): void {
        let deliveryStatus: number = 0;

        let delivery1: HTMLInputElement = <HTMLInputElement>document.getElementById("normalShipping");
        let delivery2: HTMLInputElement = <HTMLInputElement>document.getElementById("expressShipping");
        let location: HTMLInputElement = <HTMLInputElement>document.getElementById("location");
        let street: HTMLInputElement = <HTMLInputElement>document.getElementById("street");
        let forename: HTMLInputElement = <HTMLInputElement>document.getElementById("forename");
        let surename: HTMLInputElement = <HTMLInputElement>document.getElementById("surename");


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



    function orderContent(_event: Event): void { /* Optionbereich des Dropdowns bisher nicht ansprechbar*/
        let orderSelections: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        document.getElementById("orderDone").addEventListener("click", orderComplete);
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        document.getElementById("iceSelections").innerHTML = "Sorten: ";
        document.getElementById("toppingSelections").innerHTML = "Extras: ";
        document.getElementById("containerSelections").innerHTML = "Behälter: ";
        document.getElementById("shippingSelections").innerHTML = "Versandart: ";
        for (let i: number = 0; i < orderSelections.length && i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", orderContent);
            if (orderSelections[i].checked == true) {
                if (orderSelections[i].name == "Schokolade"
                    || orderSelections[i].name == "Streusel"
                    || orderSelections[i].name == "Sahne") {
                    let target = document.createElement("ul");
                    target.innerHTML = `${orderSelections[i].name}, `;
                    document.getElementById("toppingSelections").appendChild(target);
                } else if (orderSelections[i].name == "Waffel" || orderSelections[i].name == "Becher") {
                    let target = document.createElement("ul");
                    target.innerHTML = `${orderSelections[i].name}`;
                    document.getElementById("containerSelections").appendChild(target);
                } else if (orderSelections[i].name == "shipping") {
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

}