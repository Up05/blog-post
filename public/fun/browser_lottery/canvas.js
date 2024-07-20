"use strict";
let c, w = 0; 

let vel = Math.random() * 20 + 60;
let acc = vel / 100;

let latestTicker = -1

let x = 0;

const rects = [];

// const tick = new Audio("fun/browser_lottery/tick.wav") 

const links = [
    "logos/firefox.png",
    "logos/brave.png",
    "logos/firefox-developer-edition.png",
    "logos/google-chrome.png",
    "logos/cmd.png",
    "logos/opera.png",
    "logos/firefox-nightly-edition.png",
    "logos/safari.png",
    "logos/netscape-navigator.png",
    "logos/vivaldi.png"
]

const descs = [
    "PASISEKĖ! Nenaudoja \"Chromium\" interneto naršyklių pagrindo. atviroji programinė įranga ir sukurta kompanijos kuri sukūrė MDN ir Rust!",
    
    "Man atrodo, ši interneto naršyklė - skirta privatumui, ar panašiai... Nesu tikras.",

    "PASISEKĖ! \"Firefox\", bet geriau. Man atrodo, gali naudoti savo \"papildinius\" ir lengviau elgtis su CORS pragaru. Plius dar keli gerumai. Bet už tai jūs paaukojate TRUPUTI savo saugumo.",

    "Populiariausė interneto naršyklė, jau daugelį metų, ir ne šiaip sau.",
    
    "Netik interneto naršyklė, bet dar ir konsolė jūsų kompiuteriui! Naudokite \"curl\" komandą naršyti internete. ir \"color\" komandą - būti kietam!",
    
    "¯\\_(ツ)_/¯ interneto naršyklė naudojanti \"Chromium\". Man atrodo \"Opera\" yra tiesiog truputi blogesnė už \"Google Chrome\". Ji ateina su reklamų blokavimu, kas neblogai, bet nelabai sunku įsigyti su kitomis naršyklėmis...",
    
    "\"Firefox\", bet gali būti, kad kažkados, kažkodėl, kažkaip susidursite su defektu. Greičiausia, kad ne, tik gausite naujausius \"Firefox\" atnaujinimus.",

    "\"Mac-intosh\" kompiuteriai ateina su šia interneto naršykle ir \"Apple\" apie viskas... Kaip ir \"Firefox\", tai yra atviroji programinė įranga.",

    "Būsite šaunūs keliems žmonės naudodami interneto naršyklę sukurtą ir naudotą 90-aisiais. Nesitikėkite matyti interneto puslapius taip, kaip jų dizaineriai juos išsivaizdavo.",

    "\"Google Chrome\", bet keiskite ką norit! plius minus... Na gerai, gal kelius daiktus, bet daug... Ar mažai, ar nieko nekeiskite, nes retam reikia pakeisti daiktus interneto naršyklėse po \"geriausia, nes aš padariau.\" ir pradinio puslapio nuorodos."
]

const icons = []
const count = links.length - 1;

function preload(){
    for(let link of links)
        icons.push(loadImage("fun/browser_lottery/" + link))
}

function setup(){
    c = createCanvas(window.innerWidth * 0.75, 500)
    w = width / count


    for(let i = 0; i < count + 1; i ++)
        rects.push(new Rect(i))
}

function draw(){

    for(let i = 0; i ++ < 1;){

        background("#111")

        acc /= 1.01
        vel -= acc;

        if(vel > 0.15)
            x += vel;
        else
            VICTORYYYY();

        for(let r of rects){
            r.loop();
            if(r.hasTicked()){
                // tick.play()
                new Audio("fun/browser_lottery/tick.wav").play()
            }
        }

    }

    if(frameCount % 64 < 32)
        document.getElementsByTagName("canvas").item(0).style.borderColor = "#fa0"
    else
        document.getElementsByTagName("canvas").item(0).style.borderColor = "#f05"



    push()
        if(frameCount % 64 < 32)
            stroke("#fa0");
        else
            stroke("#f05");
        strokeWeight(10)
        line(width / 2, 0, width / 2, height)
    pop()

    

    

}

function VICTORYYYY(){ // or loss
    frameRate(0);
    const b = document.getElementById("b") 
    b.style.visibility = "visible"

    document.getElementById("name").innerText = links[latestTicker].replace("logos/", '').replace(".png",'').replace(/-/g, ' ').toLocaleUpperCase()
    document.getElementById("logo").src = "fun/browser_lottery/" + links[latestTicker]
    document.getElementById("desc").innerText = descs[latestTicker]

    b.animate([
        { transform: 'rotate(0) scale(0)' },
        { transform: 'rotate(720deg) scale(1)' }
    ], {duration: 2000, iterations: 1,})
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
    // TIKSLIAI ko man reikia, reikėjo pakeisti tik (scale(1) -> scale(0))*2!

}



class Rect {

    constructor(i){
        this.col = {
            r: random(255),
            g: random(255),
            b: random(255),
        }

        this.i = i;
    }

    loop (){

        // const 
        //     _x0 = x + (w * this.i),
        //     _x1 = _x0 % (width + 2*w),
        //     _x2 = _x1 - w;

        const a = 
            ( 
                (
                    x + 
                    (w * this.i)
                ) 
                % (width + w)
            ) - w

        image(icons[this.i], a, height / 2 - w/2, w, w)


    }

    hasTicked(){
        const a = ( (x + (w * this.i)) % (width + w) ) - w;

        if(a + w > width / 2 && a - vel + w < width / 2) {
            latestTicker = this.i;
            return true;
        }
        return false;

    }

}

// class Tick {

//     constructor(){
//         this.a = 0.785 * 2;

//     }

//     throw(){
//         if(this.a > 0.785)
//             this.a -= map(vel, 0, 50, 0, PI / 4)

//     }

//     loop (){
//         if(this.a > 0.785 * 2)
//             this.a -= 0.1;
//         else
//             this.a += 0.1;


//     }

//     draw(){

//         let xs = cos(this.a) * height / 2,
//             ys = sin(this.a) * height / 2;

//         push()
//             stroke(255);
//             strokeWeight(10)
//             line(width / 2, 0, width / 2 + xs, ys)
//         pop()

//     }


// }