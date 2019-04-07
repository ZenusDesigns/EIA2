let cr7 = {
    Deck: true,
    Symbol: 1,
    Wert: 7,
};
let cr8 = {
    Deck: true,
    Symbol: 1,
    Wert: 8,
};
let cr9 = {
    Deck: true,
    Symbol: 1,
    Wert: 9,
};
let cr10 = {
    Deck: true,
    Symbol: 1,
    Wert: 10,
};
let crJ = {
    Deck: true,
    Symbol: 1,
    Wert: 11,
};
let crQ = {
    Deck: true,
    Symbol: 1,
    Wert: 12,
};
let crK = {
    Deck: true,
    Symbol: 1,
    Wert: 13,
};
let crA = {
    Deck: true,
    Symbol: 1,
    Wert: 14,
};
let di7 = {
    Deck: true,
    Symbol: 2,
    Wert: 7,
};
let di8 = {
    Deck: true,
    Symbol: 2,
    Wert: 8,
};
let di9 = {
    Deck: true,
    Symbol: 2,
    Wert: 9,
};
let di10 = {
    Deck: true,
    Symbol: 2,
    Wert: 10,
};
let diJ = {
    Deck: true,
    Symbol: 2,
    Wert: 11,
};
let diQ = {
    Deck: true,
    Symbol: 2,
    Wert: 12,
};
let diK = {
    Deck: true,
    Symbol: 2,
    Wert: 13,
};
let diA = {
    Deck: true,
    Symbol: 2,
    Wert: 14,
};
let sp7 = {
    Deck: true,
    Symbol: 3,
    Wert: 7,
};
let sp8 = {
    Deck: true,
    Symbol: 3,
    Wert: 8,
};
let sp9 = {
    Deck: true,
    Symbol: 3,
    Wert: 9,
};
let sp10 = {
    Deck: true,
    Symbol: 3,
    Wert: 10,
};
let spJ = {
    Deck: true,
    Symbol: 3,
    Wert: 11,
};
let spQ = {
    Deck: true,
    Symbol: 3,
    Wert: 12,
};
let spK = {
    Deck: true,
    Symbol: 3,
    Wert: 13,
};
let spA = {
    Deck: true,
    Symbol: 3,
    Wert: 14,
};
let he7 = {
    Deck: true,
    Symbol: 4,
    Wert: 7,
};
let he8 = {
    Deck: true,
    Symbol: 4,
    Wert: 8,
};
let he9 = {
    Deck: true,
    Symbol: 4,
    Wert: 9,
};
let he10 = {
    Deck: true,
    Symbol: 4,
    Wert: 10,
};
let heJ = {
    Deck: true,
    Symbol: 4,
    Wert: 11,
};
let heQ = {
    Deck: true,
    Symbol: 4,
    Wert: 12,
};
let heK = {
    Deck: true,
    Symbol: 4,
    Wert: 13,
};
let heA = {
    Deck: true,
    Symbol: 4,
    Wert: 14,
};
let Deck = [cr7, cr8, cr9, cr10, crJ, crQ, crK, crA, di7, di8, di9, di10, diJ, diQ, diK, diA, sp7, sp8, sp9, sp10, spJ, spQ, spK, spA, he7, he8, he9, he10, heJ, heQ, heK, heA];
let Hand = [];
let ObersteKarte;
function DeckLaden() {
    document.getElementById("Deck").innerHTML = `<div class="KartenRand">
    <img src="img/cbg.jpeg" alt="Background Card" class="KartenRücken">
    </div>`;
}
function KarteZiehen() {
    let n = Math.floor(Math.random() * 31); //Zufallsgenerator und prüfung auf Wiederholung
    while (Deck[n].Deck == false) {
        n = Math.floor(Math.random() * 31);
    }
    Hand[Hand.length] = Deck[n]; //Karte zur Hand hinzugefügt und dem Deck entwendet.
    Deck[n].Deck = false;
}
function StapelErzeugen() {
    let n = Math.floor(Math.random() * 31);
    while (Deck[n].Deck == false) {
        n = Math.floor(Math.random() * 31);
    }
    ObersteKarte = Deck[n];
    Deck[n].Deck = false;
    let write = "";
    write += `<div class="KartenRand">`;
    switch (ObersteKarte.Symbol) {
        case 1:
            write += `<img src="img/kreuz.png" class="Symbol" alt="♣">
                <div class="Schwarz">`; // = ♣
            break;
        case 2:
            write += `<img src="img/caro.png" class="Symbol" alt="♦">
                <div class="Rot">`; // = ♦
            break;
        case 3:
            write += `<img src="img/pick.png" class="Symbol" alt="♠">
                <div class="Schwarz">`; // = ♠
            break;
        case 4:
            write += `<img src="img/herz.png" class="Symbol" alt="♥">
                <div class="Rot">`; // = ♥
            break;
        default:
            console.log("Fehler beim Symbol laden");
    }
    switch (ObersteKarte.Wert) {
        case 7:
            write += `7</div>`;
            break;
        case 8:
            write += `8</div>`;
            break;
        case 9:
            write += `9</div>`;
            break;
        case 10:
            write += `10</div>`;
            break;
        case 11:
            write += `J</div>`; // 11 = Bube (J)
            break;
        case 12:
            write += `Q</div>`; // 12 = Dame (Q)
            break;
        case 13:
            write += `K</div>`; // 13 = König (K)
            break;
        case 14:
            write += `A</div>`; // 14 = Ass (A)
            break;
        default:
            console.log("Fehler beim Werte laden");
    }
    write += `</div>`;
    document.getElementById("Stapel").innerHTML = `${write}`;
}
function HandBlattErzeugen() {
    document.getElementById("HandBlatt").innerHTML = "";
    for (var i = 0; i < Hand.length; i++) {
        let write = "";
        write += `<div class="KartenRand">`;
        switch (Hand[i].Symbol) {
            case 1:
                write += `<img src="img/kreuz.png" class="Symbol" alt="♣">
                <div class="Black">`; // = ♣
                break;
            case 2:
                write += `<img src="img/caro.png" class="Symbol" alt="♦">
                <div class="Red">`; // = ♦
                break;
            case 3:
                write += `<img src="img/pick.png" class="Symbol" alt="♠">
                <div class="Black">`; // = ♠
                break;
            case 4:
                write += `<img src="img/herz.png" class="Symbol" alt="♥">
                <div class="Red">`; // = ♥
                break;
            default:
                console.log("Fehler beim Symbol laden");
        }
        switch (Hand[i].Wert) {
            case 7:
                write += `7</div>`;
                break;
            case 8:
                write += `8</div>`;
                break;
            case 9:
                write += `9</div>`;
                break;
            case 10:
                write += `10</div>`;
                break;
            case 11:
                write += `J</div>`; // 11 = Bube (J)
                break;
            case 12:
                write += `Q</div>`; // 12 = Dame (Q)
                break;
            case 13:
                write += `K</div>`; // 13 = König (K)
                break;
            case 14:
                write += `A</div>`; // 14 = Ass (A)
                break;
            default:
                console.log("Fehler beim Wert laden");
        }
        write += `</div>`;
        document.getElementById("HandBlatt").innerHTML += `${write}`;
    }
}
function StartBlatt() {
    let HandAnzahl = 0;
    do {
        HandAnzahl = parseInt(prompt("Karten pro Hand (Wert zwischen 4-8)"));
    } while (isNaN(HandAnzahl) || HandAnzahl > 8 || HandAnzahl < 4); //Wiederholung bis Wert Vorgaben entspricht.
    console.log("HandAnzahl: " + HandAnzahl);
    for (let i = 0; i < HandAnzahl; i++) {
        KarteZiehen();
    }
    console.log(Hand);
    DeckLaden();
    StapelErzeugen();
    HandBlattErzeugen();
}
function init() {
    StartBlatt();
}
document.addEventListener("DOMContentLoaded", init);
//# sourceMappingURL=main.js.map