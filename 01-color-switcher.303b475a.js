const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");let a;t.disabled=!0,e.addEventListener("click",(function(o){t.disabled=!1,a=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;d.style.backgroundColor=e}),1e3),e.disabled=!0})),t.addEventListener("click",(function(d){clearInterval(a),t.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.303b475a.js.map