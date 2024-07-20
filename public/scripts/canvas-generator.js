// this is gonna be the best file, isn't it...

window.addEventListener("load", function(e) {
    
    const canvasClassElts = document.getElementsByClassName("canvas");
    // console.log(canvasClassElts)

    /** 
                 * @param {String} string  
                 * @param {...String} strs
                */
    const containsButBetter = function(string, ...strs){
        for(let str of strs)
            if(new String(string).toLowerCase().includes(new String(str).toLowerCase())) return true;
    }       // string.toLowerCase() -> "Tf is that!?"
            // string.toLowerCase() -> "ok"
            // just JS things...


    for(let elt of canvasClassElts){

        elt.editor = ace.edit(elt.children.item(0), { mode: "ace/mode/javascript" });
        elt.editor.setTheme("ace/theme/gruvbox");
        elt.editor.session.setMode("ace/mode/javascript");

        const playButton = document.createElement("button");
        playButton.innerText = "▶︎"
        elt.appendChild(playButton);

        // continue;
        playButton.onclick = function() {
            output = ""

            const bad_bad_badies = ["Worker", "WebSocket", "fetch", "XMLHttpRequest", "importScripts", "File"]
            if(containsButBetter(elt.editor.getValue(), bad_bad_badies))
                elt.innerHTML += "<p class=\"error-message\">Vienas iš naudojamų raktažodžių yra labai labai blogas, ah. Sarašas blogų žodžių: " + bad_bad_badies + "</p>"

            output += "function __ (p5) { "
            output += "  with (p5){"
            output += elt.editor.getValue()
            output += "  }"
            output += '}'

            output = output.replace("function setup()", "p5.setup = function()")
            output = output.replace("function draw()",  "p5.draw = function()")


            eval(output);
            if(elt.p5) elt.p5.remove();
            elt.p5 = new p5(__, elt)
            // hljs.highlightElement(input);
        };
        playButton.click();
    
    }
    
    

})