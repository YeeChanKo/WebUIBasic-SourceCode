var wrapdiv = document.getElementById("wrap");
var target = wrapdiv.children[0].children[2];
var newnode = document.createElement("li");
newnode.textContent = "쇼핑";
wrapdiv.children[0].insertBefore(newnode, target);