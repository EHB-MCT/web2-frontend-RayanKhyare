(()=>{"use strict";window.onload=function(){const e="1f10bd3195bf40e7b89a3c607aefcdef";async function a(){const a=await fetch(`https://api.rawg.io/api/games?key=${e}`);return await a.json()}(async function(){const a=await fetch(`https://api.rawg.io/api/games?key=${e}&metacritic=75,100&dates=2021-11-01,2021-12-01`);return await a.json()})().then((e=>{console.log(e),e.results.forEach((e=>{console.log(e);let a=e.name,t=e.background_image,n=(e.metacritic,"");n+=`   <div class="gamesection">\n       <img src="${t}" alt="Avatar" style="width:100%">\n\n       <div class="gametext">\n            <p class="gametitle"><b>${a}</b></p>\n             <p><b class="gamerelease">Release date : ${e.released}</b></p>\n       </div>\n\n    </div>`,document.getElementById("novembergotm").insertAdjacentHTML("beforeend",n)}))})),async function(){const a=await fetch(`https://api.rawg.io/api/games?key=${e}&dates=2021-01-01,2021-12-31&ordering=-added`);return await a.json()}().then((e=>{console.log(e),e.results.forEach((e=>{console.log(e);let a=e.name,t=e.background_image,n=(e.metacritic,"");n+=`   <div class="gamesection">\n            <img src="${t}" alt="Avatar" style="width:100%">\n\n            <div class="gametext">\n                <p class="gametitle"><b>${a}</b></p>\n                <p><b class="gamerelease">Release date : ${e.released}</b></p>\n\n            </div>\n\n        </div>`,document.getElementById("populargames").insertAdjacentHTML("beforeend",n)}))})),a().then((e=>{console.log(e),e.results.forEach((e=>{console.log(e);let a=e.name,t=e.background_image,n=(e.metacritic,"");n+=`   <div class="gamesection">\n            <img src="${t}" alt="Avatar" style="width:100%">\n\n            <div class="gametext">\n                <p class="gametitle"><b>${a}</b></p>\n                <p><b class="gamerelease">Release date : ${e.released}</b></p>\n\n            </div>\n\n        </div>`,document.getElementById("allgames").insertAdjacentHTML("beforeend",n)}))})),a().then((e=>{console.log(e),e.results.forEach((e=>{console.log(e);let a=e.name,t=e.background_image,n=(e.metacritic,"");n+=`<div class="allgamesection">\n            <img src="${t}" alt="Avatar" style="width:100%">\n\n            <div class="allgametext">\n                <p class="allgametitle"><b>${a}</b></p>\n                <p><b class="allgamerelease">Release date : ${e.released}</b></p>\n\n            </div>\n\n        </div>`,document.getElementById("allgamescontainer").insertAdjacentHTML("beforeend",n)}))}))}})();