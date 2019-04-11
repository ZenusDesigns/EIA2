let cr7 = {
    Symbol: 1,
    Wert: 7,
};
let cr8 = {
    Symbol: 1,
    Wert: 8,
};
let cr9 = {
    Symbol: 1,
    Wert: 9,
};
let cr10 = {
    Symbol: 1,
    Wert: 10,
};
let crJ = {
    Symbol: 1,
    Wert: 11,
};
let crQ = {
    Symbol: 1,
    Wert: 12,
};
let crK = {
    Symbol: 1,
    Wert: 13,
};
let crA = {
    Symbol: 1,
    Wert: 14,
};
let di7 = {
    Symbol: 2,
    Wert: 7,
};
let di8 = {
    Symbol: 2,
    Wert: 8,
};
let di9 = {
    Symbol: 2,
    Wert: 9,
};
let di10 = {
    Symbol: 2,
    Wert: 10,
};
let diJ = {
    Symbol: 2,
    Wert: 11,
};
let diQ = {
    Symbol: 2,
    Wert: 12,
};
let diK = {
    Symbol: 2,
    Wert: 13,
};
let diA = {
    Symbol: 2,
    Wert: 14,
};
let sp7 = {
    Symbol: 3,
    Wert: 7,
};
let sp8 = {
    Symbol: 3,
    Wert: 8,
};
let sp9 = {
    Symbol: 3,
    Wert: 9,
};
let sp10 = {
    Symbol: 3,
    Wert: 10,
};
let spJ = {
    Symbol: 3,
    Wert: 11,
};
let spQ = {
    Symbol: 3,
    Wert: 12,
};
let spK = {
    Symbol: 3,
    Wert: 13,
};
let spA = {
    Symbol: 3,
    Wert: 14,
};
let he7 = {
    Symbol: 4,
    Wert: 7,
};
let he8 = {
    Symbol: 4,
    Wert: 8,
};
let he9 = {
    Symbol: 4,
    Wert: 9,
};
let he10 = {
    Symbol: 4,
    Wert: 10,
};
let heJ = {
    Symbol: 4,
    Wert: 11,
};
let heQ = {
    Symbol: 4,
    Wert: 12,
};
let heK = {
    Symbol: 4,
    Wert: 13,
};
let heA = {
    Symbol: 4,
    Wert: 14,
};
let Deck = [cr7, cr8, cr9, cr10, crJ, crQ, crK, crA, di7, di8, di9, di10, diJ, diQ, diK, diA, sp7, sp8, sp9, sp10, spJ, spQ, spK, spA, he7, he8, he9, he10, heJ, heQ, heK, heA];
let Hand = [];
let obersteKarte;
function deckLaden() {
    document.getElementById("Deck").innerHTML = `<div class="KartenRand">
    <img src="img/cbg.jpeg" alt="Background Card" class="KartenRücken">
    </div>`;
}
function karteZiehen() {
    let n = Math.floor(Math.random() * (Deck.length - 1)); //Zufallsgenerator und prüfung auf Wiederholung
    Hand.push(Deck[n]); // Karte -> Hand
    Deck.splice(n, 1);
}
function stapelErzeugen() {
    let n = Math.floor(Math.random() * (Deck.length - 1)); //Zufallsgenerator und prüfung auf Wiederholung
    Deck.splice(n, 1);
    obersteKarte = Deck[n];
    let write = "";
    write += `<div class="KartenRand">`;
    switch (obersteKarte.Symbol) {
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
    switch (obersteKarte.Wert) {
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
function handBlattErzeugen() {
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
function startBlatt() {
    let handAnzahl = 0;
    do {
        handAnzahl = parseInt(prompt("Karten pro Hand (Wert zwischen 4-8)"));
    } while (isNaN(handAnzahl) || handAnzahl > 8 || handAnzahl < 4); //Wiederholung bis Wert Vorgaben entspricht.
    console.log("HandAnzahl: " + handAnzahl);
    for (let i = 0; i < handAnzahl; i++) {
        karteZiehen();
    }
    console.log(Hand);
    deckLaden();
    stapelErzeugen();
    handBlattErzeugen();
}
function init() {
    startBlatt();
}
document.addEventListener("DOMContentLoaded", init);
//# sourceMappingURL=main.js.map