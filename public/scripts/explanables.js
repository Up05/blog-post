
const explanations = JSON.parse(localStorage.getItem("explanations"), mapReviver) || new Map();

window.addEventListener("load", function(__e) {

    for(let _e of document.getElementsByTagName("e"))
        if(_e.getAttribute("expl"))
            explanations.set(keyify(_e.innerText), _e.getAttribute("expl"))

    document.addEventListener("click", function(_e) {

        // ? ¯\_(ツ)_/¯ 

        if(_e.target.tagName === 'E'){
            const e = _e.target;
            const p = document.createElement("p")
            p.className = "explanation"
            p.innerHTML = 
                   e.getAttribute("expl") 
                || explanations.get(keyify(e.innerText)) 
                || "¯\\_(ツ)_/¯<br><strong><i>Užmiršau parašyti paaiškinimą!</i></strong>" + "<br><br>" + google(e.innerText)
    
            e.p = p;
            p.e = e;

            e.p.style.left = _e.pageX + "px";
            e.p.style.top  = _e.pageY + 5 + "px";

            const _width = (window.innerWidth > 480) ? 512 : 720;

            if(_e.pageX + _width + 40 > window.innerWidth){
                console.log(_e.pageX, e.p.style._width, _width, _e.pageX - _width + "px")
                e.p.style.left = _e.pageX - _width + "px"
            }

            document.body.appendChild(e.p);

            explanations.set(keyify(e.innerText), p.innerHTML)
            localStorage.setItem("explanations", JSON.stringify(explanations, mapReplacer))

        } else if(_e.target.className !== "explanation"){
            const col = document.getElementsByClassName("explanation");
            for(let i = col.length - 1; i >= 0; i --)
                if (col.item(i))
                    col.item(i).remove()
        }
    })

})

function keyify(str){
    return str.replace(/\s/g, "").toLowerCase();
}

function google(search){
    const url = "https://www.google.com/search?q=" + search
    return "<a href='" + url + "'>Paieškokite naudodami Google!</a>" 
}

function mapReplacer(_, value) { // from: https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map
    if(value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries())
        };
    } else {
        return value;
    }
}

function mapReviver(_, value) { // from: https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map
    if(typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;
}