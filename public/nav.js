document.body.innerHTML += `
  <nav class="nav" > 
    <a class="home"  href="/index.html">Pagr. puslapis</a>
    <a class="blogs" href="/blogs.html">Tinklaraščiai</a>
    <a class="appl"  href="/software.html">Programos</a>
    <a class="faq"   href="/faq.html">FAQ</a>
    <button id="mode-toggle" 
      onclick =       "mode ++; if(mode > Object.values(modes).pop()) mode = 0; modechanged();" 
      oncontextmenu = "mode --; if(mode < 0) mode = Object.values(modes).pop(); modechanged(); return false;"
    ></button>
  </nav>`

// ! ಥ_ಥ