(()=>{"use strict";function e(){const e=document.querySelector("#content"),t=document.createElement("h1");t.textContent="This is a really good restaurant.";const n=document.createElement("p");n.textContent="No, really, this restaurant is really, really good.",e.appendChild(t),e.appendChild(n)}document.querySelector("nav");const t=document.querySelector("#content"),n=document.querySelector("#home"),o=document.querySelector("#menu"),c=document.querySelector("#contact");n.addEventListener("click",(()=>{t.textContent="",e()})),o.addEventListener("click",(()=>{t.textContent="",function(){const e=document.querySelector("#content"),t=document.createElement("h1");t.textContent="This is the menu.";const n=document.createElement("p");n.textContent="There will be food.",e.appendChild(t),e.appendChild(n)}()})),c.addEventListener("click",(()=>{t.textContent="",function(){const e=document.querySelector("#content"),t=document.createElement("h1");t.textContent="Contact us.";const n=document.createElement("p");n.textContent="Here is our contact info.",e.appendChild(t),e.appendChild(n)}()})),e()})();