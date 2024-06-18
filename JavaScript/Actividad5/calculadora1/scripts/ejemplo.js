let getSiblings = function (e) {
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  if (!e.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling = e.parentNode.firstChild;
  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};
let menu = getSiblings(document.querySelector(".section-a"));
const siblingText = menu.map((e) => e.innerHTML);
console.log(siblingText);

let btn = document.querySelector(".section-a > button");

btn.addEventListener("click", function (event) {
  console.log("The button was clicked!");
  console.log(event);
  console.log(btn);
  event.stopPropagation();
});

document.body.addEventListener("click", function (event) {
  console.log("The body was clicked!");
  event.stopPropagation();
});
