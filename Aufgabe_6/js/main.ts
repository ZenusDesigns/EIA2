namespace iceDealer_Mark_II {

    window.addEventListener("load", init);
    let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
    let legend: HTMLLegendElement = document.createElement("legend");

    function init(_event: Event): void {
        createFieldsetElement(iceCreamFlavour);
        insertBeforeExisting();
        fieldset.addEventListener("change", orderContent);
        execute();
    }
    /* Create new Fieldset-HTML Element*/
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

       /* Insert new HTML-Fieldset before existing HTML*/
       function insertBeforeExisting() { /**/
        var existingHTML = document.getElementById("IceKonfi");
        var newHTML = document.getElementById("newFieldset");
        existingHTML.appendChild(newHTML);

    }

    function orderContent(_event: Event): void {

        let start: number = 0;
        let orderSelections: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let content: HTMLElement = document.createElement("li");

        document.getElementById("iceSelections").innerHTML = "Sorten: ";
        document.getElementById("toppingSelections").innerHTML = "Extras: ";
        document.getElementById("containerSelections").innerHTML = "Behälter: ";
        document.getElementById("shippingSelections").innerHTML = "Versandart: ";

        for (let i: number = 0; i < orderSelections.length; i++) {
            if (orderSelections[i].checked == true && orderSelections[i].getAttribute("price")) {
                let price: number = Number(orderSelections[i].getAttribute("price")); start += price;
                document.getElementById("orderPrice").innerHTML = start.toString() + " " + "€"; content.innerHTML = `${orderSelections[i].name}`;document.getElementById("toppingSelections").appendChild(content);
            }
            if (orderSelections[i].checked == true && orderSelections[i].getAttribute("name") == "radiobutton") {
                document.getElementById("orderPrice").innerHTML = start.toString() + " " + "€";
                let form: HTMLElement = document.createElement("li"); form.innerHTML = `${orderSelections[i].getAttribute("bezeichnung")}`;document.getElementById("containerSelections").appendChild(form);
            }
            if (orderSelections[i].type == "number" && Number(orderSelections[i].value) > 0) {
                let price: number = Number(orderSelections[i].value); start += price;
                document.getElementById("orderPrice").innerHTML = start.toString() + " " + "€";
                let sorten: HTMLElement = document.createElement("li"); sorten.innerHTML = `${orderSelections[i].value} x ${orderSelections[i].name}`;document.getElementById("iceSelections").appendChild(sorten);
            }

            if (orderSelections[i].checked == true && orderSelections[i].name == "shipping") {
                let price: number = Number(orderSelections[i].getAttribute("EDprice")); start += price;
                document.getElementById("orderPrice").innerHTML = start.toString() + " " + "€";
                let shipping: HTMLElement = document.createElement("li"); shipping.innerHTML = `${orderSelections[i].getAttribute("alt")}`;document.getElementById("shippingSelections").appendChild(shipping);
            }
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
            input.setAttribute("name", _property.alt);
            input.setAttribute("step", "1");
            input.setAttribute("min", "0");
            input.setAttribute("value", "0");
        }
        fieldset.appendChild(input);
        fieldset.appendChild(label);
    }


    /*Execute OrderComplete-Check on button-click*/
    function execute(): void {

        document.getElementById("orderDone").addEventListener("click", orderComplete);
        /*Check Order on missing information*/
        function orderComplete(): void {
            let deliveryStatus: number = 0;
    
            let delivery1: HTMLInputElement = <HTMLInputElement>document.getElementById("normalShipping");
            let delivery2: HTMLInputElement = <HTMLInputElement>document.getElementById("expressShipping");
            let location: HTMLInputElement = <HTMLInputElement>document.getElementById("location");
            let street: HTMLInputElement = <HTMLInputElement>document.getElementById("street");
            let forename: HTMLInputElement = <HTMLInputElement>document.getElementById("forename");
            let surname: HTMLInputElement = <HTMLInputElement>document.getElementById("surname");
    
    
            if (delivery1.checked == true || delivery2.checked == true) {
                deliveryStatus = 1;
            }
            if (location.value == ""
                || street.value == ""
                || forename.value == ""
                || surname.value == ""
                || deliveryStatus == 0) {
                alert("Füllen Sie bitte alle Felder aus !");
            }
            else {
                alert("Ihre Bestellung wurde empfangen")
            }
        }
    }}