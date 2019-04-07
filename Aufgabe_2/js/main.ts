interface Karten {
    Deck:boolean;
    Symbol:number; // 1 = Kreuz, 2 = Karo, 3 = Pik, 4 = Herz
    Wert:number;
}

let cr7:Karten={ //Kreuz
    Deck:true,
    Symbol:1,
    Wert:7,   
}

let cr8:Karten={
    Deck:true,
    Symbol:1,
    Wert:8,   
}

let cr9:Karten={
    Deck:true,
    Symbol:1,
    Wert:9,   
}

let cr10:Karten={
    Deck:true,
    Symbol:1,
    Wert:10,   
}

let crJ:Karten={
    Deck:true,
    Symbol:1,
    Wert:11,   
}

let crQ:Karten={
    Deck:true,
    Symbol:1,
    Wert:12,   
}

let crK:Karten={
    Deck:true,
    Symbol:1,
    Wert:13,   
}

let crA:Karten={
    Deck:true,
    Symbol:1,
    Wert:14,   
}

let di7:Karten={ //Karo
    Deck:true,
    Symbol:2,
    Wert:7,   
}

let di8:Karten={
    Deck:true,
    Symbol:2,
    Wert:8,   
}

let di9:Karten={
    Deck:true,
    Symbol:2,
    Wert:9,   
}

let di10:Karten={
    Deck:true,
    Symbol:2,
    Wert:10,   
}

let diJ:Karten={
    Deck:true,
    Symbol:2,
    Wert:11,   
}

let diQ:Karten={
    Deck:true,
    Symbol:2,
    Wert:12,   
}

let diK:Karten={
    Deck:true,
    Symbol:2,
    Wert:13,   
}

let diA:Karten={
    Deck:true,
    Symbol:2,
    Wert:14,   
}

let sp7:Karten={ //Pik
    Deck:true,
    Symbol:3,
    Wert:7,   
}

let sp8:Karten={
    Deck:true,
    Symbol:3,
    Wert:8,   
}

let sp9:Karten={
    Deck:true,
    Symbol:3,
    Wert:9,   
}

let sp10:Karten={
    Deck:true,
    Symbol:3,
    Wert:10,   
}

let spJ:Karten={
    Deck:true,
    Symbol:3,
    Wert:11,   
}

let spQ:Karten={
    Deck:true,
    Symbol:3,
    Wert:12,   
}

let spK:Karten={
    Deck:true,
    Symbol:3,
    Wert:13,   
}

let spA:Karten={
    Deck:true,
    Symbol:3,
    Wert:14,   
}

let he7:Karten={ //Herz
    Deck:true,
    Symbol:4,
    Wert:7,   
}

let he8:Karten={
    Deck:true,
    Symbol:4,
    Wert:8,   
}

let he9:Karten={
    Deck:true,
    Symbol:4,
    Wert:9,   
}

let he10:Karten={
    Deck:true,
    Symbol:4,
    Wert:10,   
}

let heJ:Karten={
    Deck:true,
    Symbol:4,
    Wert:11,   
}

let heQ:Karten={
    Deck:true,
    Symbol:4,
    Wert:12,   
}

let heK:Karten={
    Deck:true,
    Symbol:4,
    Wert:13,   
}

let heA:Karten={
    Deck:true,
    Symbol:4,
    Wert:14,   
}

let Deck:Karten[]=[cr7, cr8, cr9, cr10, crJ, crQ, crK, crA, di7, di8, di9, di10, diJ, diQ, diK, diA, sp7, sp8, sp9, sp10, spJ, spQ, spK, spA, he7, he8, he9, he10, heJ, heQ, heK, heA];

let Hand:Karten[]=[];

let ObersteKarte:Karten;


function DeckLaden(){
    document.getElementById("Deck").innerHTML = `<div class="KartenRand">
    <img src="img/cbg.jpeg" alt="Background Card" class="KartenRücken">
    </div>`;     
}


function KarteZiehen() {
    let n:number = Math.floor(Math.random() * 31); //Zufallsgenerator und prüfung auf Wiederholung
    while (Deck[n].Deck==false)   
        {
            n = Math.floor(Math.random() * 31);
        }
    Hand[Hand.length]=Deck[n]; //Karte zur Hand hinzugefügt und dem Deck entwendet.
    Deck[n].Deck = false;    
}

function StapelErzeugen(){
    let n:number = Math.floor(Math.random() * 31); 
    while (Deck[n].Deck==false)   
        {
            n = Math.floor(Math.random() * 31);
        }
    ObersteKarte=Deck[n]; 
    Deck[n].Deck = false;   
    
    let write:string = "";
        write += `<div class="KartenRand">`;

        switch (ObersteKarte.Symbol){
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

        switch (ObersteKarte.Wert){
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

function HandBlattErzeugen(){

    document.getElementById("HandBlatt").innerHTML = "";

    for (var i: number = 0; i < Hand.length; i++){
        let write:string = "";
        write += `<div class="KartenRand">`;

        switch (Hand[i].Symbol){
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

        switch (Hand[i].Wert){
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

function StartBlatt() {
    let HandAnzahl: number = 0;
    do  
        {
            HandAnzahl = parseInt(prompt("Karten pro Hand (Wert zwischen 4-8)"));
        } 
    while (isNaN(HandAnzahl) || HandAnzahl > 8 || HandAnzahl < 4); //Wiederholung bis Wert Vorgaben entspricht.

    console.log("HandAnzahl: "+HandAnzahl);

    for(let i:number=0;i<HandAnzahl;i++){
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