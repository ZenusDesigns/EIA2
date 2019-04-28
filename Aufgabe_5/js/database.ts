
namespace iceDealer_Mark_II {
    export interface iceCreamFlavour {
        name: string;
        price: string;
        type: string;
    }

    export interface key_iceDealer_Mark_II {
        [flavour: string]: iceCreamFlavour[];
    }

    export let iceCreamFlavour: key_iceDealer_Mark_II = {
        "eisSorten": [
            { name: "Schokolade", type: "number" , price: "1"},
            { name: "Vanille", type: "number" , price: "1"},
            { name: "Zitrone", type: "number" , price: "1"},
            { name: "Joghurt", type: "number" , price: "1"},
            { name: "Haselnuss", type: "number" , price: "1"}
        ],
        "toppings": [
            { name: "Schokolade", type: "checkbox" , price: "0.8"},
            { name: "Streusel", type: "checkbox", price: "0.8"},
            { name: "Sahne", type: "checkbox", price: "0.8"}
        ],
        "container": [
            { name: "Waffel", type: "radio", price: "0"},
            { name: "Becher", type: "radio", price: "0"}
        ]
    };
}