interface Karten {
    Symbol: number; // 1 = Kreuz, 2 = Karo, 3 = Pik, 4 = Herz
    Wert: number;
    location: string;
}

let cr7: Karten = { //Kreuz
    Symbol: 1,
    Wert: 7,
    location: "empty",
}

let cr8: Karten = {
    Symbol: 1,
    Wert: 8,
    location: "empty",
}

let cr9: Karten = {
    Symbol: 1,
    Wert: 9,
    location: "empty",
}

let cr10: Karten = {
    Symbol: 1,
    Wert: 10,
    location: "empty",
}

let crJ: Karten = {
    Symbol: 1,
    Wert: 11,
    location: "empty",
}

let crQ: Karten = {
    Symbol: 1,
    Wert: 12,
    location: "empty",
}

let crK: Karten = {
    Symbol: 1,
    Wert: 13,
    location: "empty",
}

let crA: Karten = {
    Symbol: 1,
    Wert: 14,
    location: "empty",
}

let di7: Karten = { //Karo
    Symbol: 2,
    Wert: 7,
    location: "empty",
}

let di8: Karten = {
    Symbol: 2,
    Wert: 8,
    location: "empty",
}

let di9: Karten = {
    Symbol: 2,
    Wert: 9,
    location: "empty",
}

let di10: Karten = {
    Symbol: 2,
    Wert: 10,
    location: "empty",
}

let diJ: Karten = {
    Symbol: 2,
    Wert: 11,
    location: "empty",
}

let diQ: Karten = {
    Symbol: 2,
    Wert: 12,
    location: "empty",
}

let diK: Karten = {
    Symbol: 2,
    Wert: 13,
    location: "empty",
}

let diA: Karten = {
    Symbol: 2,
    Wert: 14,
    location: "empty",
}

let sp7: Karten = { //Pik
    Symbol: 3,
    Wert: 7,
    location: "empty",
}

let sp8: Karten = {
    Symbol: 3,
    Wert: 8,
    location: "empty",
}

let sp9: Karten = {
    Symbol: 3,
    Wert: 9,
    location: "empty",
}

let sp10: Karten = {
    Symbol: 3,
    Wert: 10,
    location: "empty",
}

let spJ: Karten = {
    Symbol: 3,
    Wert: 11,
    location: "empty",
}

let spQ: Karten = {
    Symbol: 3,
    Wert: 12,
    location: "empty",
}

let spK: Karten = {
    Symbol: 3,
    Wert: 13,
    location: "empty",
}

let spA: Karten = {
    Symbol: 3,
    Wert: 14,
    location: "empty",
}

let he7: Karten = { //Herz
    Symbol: 4,
    Wert: 7,
    location: "empty",
}

let he8: Karten = {
    Symbol: 4,
    Wert: 8,
    location: "empty",
}

let he9: Karten = {
    Symbol: 4,
    Wert: 9,
    location: "empty",
}

let he10: Karten = {
    Symbol: 4,
    Wert: 10,
    location: "empty",
}

let heJ: Karten = {
    Symbol: 4,
    Wert: 11,
    location: "empty",
}

let heQ: Karten = {
    Symbol: 4,
    Wert: 12,
    location: "empty",
}

let heK: Karten = {
    Symbol: 4,
    Wert: 13,
    location: "empty",
}

let heA: Karten = {
    Symbol: 4,
    Wert: 14,
    location: "empty",
}

let Deck: Karten[] = [cr7, cr8, cr9, cr10, crJ, crQ, crK, crA, di7, di8, di9, di10, diJ, diQ, diK, diA, sp7, sp8, sp9, sp10, spJ, spQ, spK, spA, he7, he8, he9, he10, heJ, heQ, heK, heA];

let Hand: Karten[] = [];
let Ablagestapel: Karten[] = [];

let obersteKarte: Karten;


function deckLaden(): void {
    document.getElementById("Deck").addEventListener("click", karteZiehen)
    document.getElementById("Deck").innerHTML = `<div class="KartenRand">
    <img src="img/cbg.jpeg" alt="Background Card" class="KartenRücken">
    </div>`;
}



function kartenSortieren(){
    Hand.sort(wertSortieren);
    Hand.sort(bildSortieren);
    handBlattErzeugen();
}

function wertSortieren(_a: Karten, _b: Karten): number {
    let value_a: number = _a.Wert;
    let value_b: number = _b.Wert;
    if (value_a < value_b) return -1;
    if (value_a > value_b) return 1;
    if (value_a == value_b) return 0;
}

function bildSortieren(_a: Karten, _b: Karten): number {
    let pic_a: number = _a.Symbol;
    let pic_b: number = _b.Symbol;
    if (pic_a < pic_b) return -1;
    if (pic_a > pic_b) return 1;
    if (pic_a == pic_b) return 0;
}


function welcheTaste(event: KeyboardEvent): void {
    if (event.keyCode == 32) karteZiehen();
}


function karteZiehen(): void {
    if (Deck.length > 0) {
        let n: number = Math.floor(Math.random() * (Deck.length)); //Zufallsgenerator und prüfung auf Wiederholung
        Hand.push(Deck[n]); // Karte -> Hand
        Deck.splice(n, 1)
        handBlattErzeugen();
        console.log(Hand);
    }
    else {
        alert("Es gibt keine Karten mehr zum ziehen !")
    }
}

function stapelErzeugen(): void {

    let write: string = "";
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
            console.log("Fehler beim Symbol laden")
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
            console.log("Fehler beim Werte laden")
    }
    write += `</div>`
    document.getElementById("Stapel").innerHTML = `${write}`;
}

function handBlattErzeugen(): void {

    document.getElementById("HandBlatt").addEventListener("click", spieleKarte);
    document.getElementById("HandBlatt").innerHTML = "";

    for (let i: number = 0; i < Hand.length; i++) {
        Hand[i].location = "location" + i;
        let write: string = "";
        write += `<div class="KartenRand" id="location${i}">`;

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
                console.log("Fehler beim Symbol laden")
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
                console.log("Fehler beim Wert laden")
        }
        write += `</div>`
        document.getElementById("HandBlatt").innerHTML += `${write}`;
    }
}

function spieleKarte(): void {
    console.log();

    let ausgewählteKartenID: HTMLElement = <HTMLElement>event.target;
    for (let i = 0; i < Hand.length; i++) {
        if (String(ausgewählteKartenID.getAttribute("id")) == Hand[i].location) {
            if (Hand[i].Symbol == obersteKarte.Symbol || Hand[i].Wert == obersteKarte.Wert) {
                Ablagestapel.push(obersteKarte);
                obersteKarte = Hand[i];
                Hand[i].location = "Empty";
                Hand.splice(i, 1);
                handBlattErzeugen();
                stapelErzeugen();

            }
            else {
                alert("Diese Karte darf nicht abgelegt werden!")
            }
        }
    }
}




function startBlatt(): void {
    let handAnzahl: number = 0;
    do {
        handAnzahl = parseInt(prompt("Karten pro Hand (Wert zwischen 4-8)"));
    }
    while (isNaN(handAnzahl) || handAnzahl > 8 || handAnzahl < 4); //Wiederholung bis Wert Vorgaben entspricht.

    console.log("HandAnzahl: " + handAnzahl);

    for (let i: number = 0; i < handAnzahl; i++) {
        karteZiehen();
    }
    console.log(Hand);

    deckLaden();

    let n: number = Math.floor(Math.random() * (Deck.length)); //Zufallsgenerator und prüfung auf Wiederholung
    Deck.splice(n, 1);
    obersteKarte = Deck[n];

    stapelErzeugen();
    handBlattErzeugen();
    document.getElementById("Sortieren").addEventListener("click", kartenSortieren)
}



function init() {
    startBlatt();
}


document.addEventListener("keydown", welcheTaste);


document.addEventListener("DOMContentLoaded", init);