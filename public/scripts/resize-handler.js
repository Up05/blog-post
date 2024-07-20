window.addEventListener("resize", function(){
    const width = window.innerWidth, height = window.innerHeight;
    
    let mobile;

    // if(width < height || width < 1279)
    //     mobile = true;



    {
        const nav = document.getElementsByClassName("nav").item(0);
        if(mobile) {
            child(nav, 0).innerText = "🏠"
            child(nav, 1).innerText = "📄"
        } else {
            child(nav, 0).innerText = "Pagr. puslapis"
            child(nav, 1).innerText = "Tinklaraščiai"
        }

    }


})

window.resizeTo(window.innerWidth, window.innerHeight)


/**
 * @param {HTMLElement} node
 * @param {Number} index
 * @return {HTMLElement}
*/
function child(node, index){
    return node.children.item(index);
}
