const h1 = document.createElement("h1");
h1.className = "h1-element";
h1.id = "h1-element";
h1.setAttribute("style", "border: 2px solid blue; padding: 15px; margin-top: 15px;");
h1.style.color = "green";
h1.appendChild(document.createTextNode('Hello Star!!'));

const createHereDiv = document.getElementById("create-here");
createHereDiv.appendChild(h1);

// document.body.appendChild(h1);
