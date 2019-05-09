
namespace iceDealer_Mark_II {
    export interface iceCreamFlavour {
        name: string;
        price: string;
        type: string;
        alt: string;
    }

    export interface key_iceDealer_Mark_II {
        [flavour: string]: iceCreamFlavour[];
    }

    export let iceCreamFlavour: key_iceDealer_Mark_II = {
        "ice": [
            { name: "Schokolade", type: "number" , alt: "Schokolade", price: "1"},
            { name: "Vanille", type: "number" ,alt: "Vanille", price: "1"},
            { name: "Zitrone", type: "number" ,alt: "Zitrone", price: "1"},
            { name: "Joghurt", type: "number" ,alt: "Joghurt", price: "1"},
            { name: "Haselnuss", type: "number" ,alt: "Haselnuss", price: "1"}
        ],
        "toppings": [
            { name: "Schokolade", type: "checkbox" ,alt: "Schokolade", price: "0.8"},
            { name: "Streusel", type: "checkbox",alt: "Streusel", price: "0.8"},
            { name: "Sahne", type: "checkbox",alt: "Sahne", price: "0.8"}
        ],
        "container": [
            { name: "Becher", type: "radio",alt: "Becher", price: "0"},
            { name: "Waffel", type: "radio",alt: "Waffel", price: "0"}
        ],
}}