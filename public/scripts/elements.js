const id = ( id => document.getElementById(id) )

let modes = {
    dark: 0,
    light: 1,
    fun: 2
};

let mode = modes.dark;
let back = 0;
if(window.localStorage.getItem("mode") !== null){
    mode = window.localStorage.getItem("mode");
    
} else {  
    mode = window.matchMedia("(prefers-color-scheme: dark)").matches ? modes.dark : modes.light
    window.localStorage.setItem("mode", mode);
}

let wooshable = true;
const wooshSfx = new Audio("/fun/woosh.wav")
document.addEventListener("mousemove", e => {
    if(screen.width > screen.height) // I'm pretty sure, this isn't orientation dependant and, if you use a thing that has a tappable landscape screen, you've already failed.
        if(e.movementX + e.movementY > 80 && wooshable) {
            wooshSfx.volume = 0.02
            wooshSfx.play();
            wooshable = false;
            setTimeout(function(){wooshable = true}, 100);
        }
})

function modechanged(){
    if(mode == modes.dark) {
        document.documentElement.style.setProperty("--main-bg-col",   " rgb(30, 27, 27)    ");
        document.documentElement.style.setProperty("--secd-bg-col",   " #222               ");
        document.documentElement.style.setProperty("--dark-bg-col",   " #181818            ");
        document.documentElement.style.setProperty("--border-col",    " rgb(101, 100, 100) ");
        document.documentElement.style.setProperty("--main-text-col", " rgb(199, 193, 193) ");
        document.documentElement.style.setProperty("--e-col",         " green              ");
        document.documentElement.style.setProperty("--code-bg-col",   " rgb(45, 42, 42)    ");
        document.documentElement.style.setProperty("--code-col",      " #c0cec0            ");
        document.documentElement.style.setProperty("--a-col",         " #5050ff            ");
        if(id("code-style"))
            id("code-style").href = "/lib/highlight/styles/dark.min.css"
        id("mode-toggle").innerText = '☼'
        
    } else if(mode == modes.light) {
        document.documentElement.style.setProperty("--main-bg-col",   " #ddd               ");
        document.documentElement.style.setProperty("--secd-bg-col",   " #eee               ");
        document.documentElement.style.setProperty("--dark-bg-col",   " #d6d6d6            ");
        document.documentElement.style.setProperty("--border-col",    " rgb(161, 130, 130) ");
        document.documentElement.style.setProperty("--main-text-col", " #111               ");
        document.documentElement.style.setProperty("--e-col",         " green              ");
        document.documentElement.style.setProperty("--code-bg-col",   " #dddddd            ");
        document.documentElement.style.setProperty("--code-col",      " #000               ");
        document.documentElement.style.setProperty("--a-col",         " #0000ff            ");
        if(id("code-style"))
            id("code-style").href = "/lib/highlight/styles/docco.min.css"
        id("mode-toggle").innerText = '\\'

    } else if(mode == modes.fun) {
        document.documentElement.style.setProperty("--main-bg-col",   " #000              ");
        document.documentElement.style.setProperty("--secd-bg-col",   " #000              ");
        document.documentElement.style.setProperty("--dark-bg-col",   " #040404           ");
        document.documentElement.style.setProperty("--border-col",    " #f00              ");
        document.documentElement.style.setProperty("--main-text-col", " #ddd              ");
        document.documentElement.style.setProperty("--e-col",         " green             ");
        document.documentElement.style.setProperty("--code-bg-col",   " #150010           ");
        document.documentElement.style.setProperty("--code-col",      " #0f0              ");
        document.documentElement.style.setProperty("--a-col",         " #5050ff           ");


        if(id("code-style"))
            id("code-style").href = "/lib/highlight/styles/qtcreator-dark.min.css"
        id("mode-toggle").innerText = '☽︎'
    }

    for(let elt of document.getElementsByClassName("canvas"))
        if(mode == modes.dark) elt.editor.setTheme("ace/theme/gruvbox")
        else if(mode == modes.light) elt.editor.setTheme("ace/theme/tomorrow")
        else if(mode == modes.fun) elt.editor.setTheme("ace/theme/vibrant_ink")

    window.localStorage.setItem("mode", mode);
}