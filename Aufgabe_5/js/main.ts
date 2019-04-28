
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
        var existingHTML = document.getElementById("header");
        var newHTML = document.getElementById("newFieldset");
        existingHTML.appendChild(newHTML);

        var main = document.getElementById("main");
        main.insertBefore(existingHTML, main.childNodes[0]);
    }

    /* Fill new HTML-Fieldset with Information*/
    function fieldsetInsert(_property: iceCreamFlavour): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.setAttribute("for", _property.name);
        label.innerHTML = _property.name;

        fieldset.setAttribute("id", "newFieldset");

        switch (_property.type) {
            case "radio":
                input.setAttribute("type", _property.type);
                input.setAttribute("price", _property.price);
                input.setAttribute("alt", _property.name)
                input.setAttribute("name", "radiobutton");break;
            case "number":
                input.setAttribute("type", _property.type);
                input.setAttribute("price", _property.price);
                input.setAttribute("name", _property.name);
                input.setAttribute("step", "1");
                input.setAttribute("min", "0");
                input.setAttribute("value", "0");break;
            case "checkbox":
                input.setAttribute("type", _property.type);
                input.setAttribute("price", _property.price);
                input.setAttribute("name", _property.name);break;
        }
        fieldset.appendChild(input);
        fieldset.appendChild(label);
    }

    /*Execute OrderComplete-Check on button-click*/
    function execute(): void {

        document.getElementById("orderDone").addEventListener("click", orderComplete);
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", orderContent);
        }
    }

    /*Check Order on missing information*/
    function orderComplete(): void {

        let orderStatus: string[] = [];
        let missing: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let flavour: number = 0;
        let container: number = 0;
        let insert: HTMLElement = document.getElementById ("span")
        for (let i: number = 0; i < missing.length; i++) {
            if (missing[i].type == "text")
                if (missing[i].value == "") {
                    let feldName: string = missing[i].name;
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


function orderContent(_event: Event): void { /* Optionbereich des Dropdowns bisher nicht ansprechbar*/ 
    let orderSelections: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    document.getElementById("iceSelections").innerHTML = "Sorten: ";
    document.getElementById("toppingSelections").innerHTML = "Extras: ";
    document.getElementById("containerSelections").innerHTML = "Behälter: ";
    document.getElementById("shippingSelections").innerHTML = "Versandart: ";
    for (let i: number = 0; i < orderSelections.length; i++) {
        if (orderSelections[i].checked == true) {
            if (orderSelections[i].name == "Schokolade" 
            || orderSelections[i].name == "Streusel" 
            || orderSelections[i].name == "Sahne") {
                let target = document.createElement("ul");
                target.innerHTML = `${orderSelections[i].name}, `;
                document.getElementById("toppingSelections").appendChild(target);
            } else if (orderSelections[i].name == "Waffel" || orderSelections[i].name == "Becher") {
                let target =document.createElement("ul");
                target.innerHTML=`${orderSelections[i].name}`;
                        document.getElementById("containerSelections").appendChild(target);
            } else if (orderSelections[i].name == "shipping") {
                let target =document.createElement("ul");
                target.innerHTML=`${orderSelections[i].alt}`;
                        document.getElementById("shippingSelections").appendChild(target);
            }
        }
        if (Number(orderSelections[i].value) ){

            let target = document.createElement("li");
            target.innerHTML = `${orderSelections[i].value} Kugel (n) ${orderSelections[i].name}, `;
            document.getElementById("iceSelections").appendChild(target);
        }
    }
}
    
}