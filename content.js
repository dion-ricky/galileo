// function getElementByXpath(path) {
//   return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
// }

let interval = setInterval(() => {
  toolbar = document.getElementsByTagName('mat-toolbar')[3];
  
  if (toolbar) {
    div = toolbar.getElementsByTagName('div')[2];
    title = div.children[0].children[0].children[0].children[0];
    title.innerText = 'Hello world';
    addMenu();

    clearInterval(interval);
  }
}, 1000);

function addMenu() {
  tabs = document.getElementsByClassName('mat-mdc-tab-labels')[0];
  const button = document.createElement("button");
  button.textContent = "Lineage by DE";
  button.addEventListener("click", () => {
    window.open("https://www.blibli.com", "_blank");
  });
  tabs.appendChild(button);
}

// const observeUrlChange = () => {
// const oldHref = document.location.href;
// const body = document.querySelector("body");
// const observer = new MutationObserver(mutations => {
//     mutations.forEach(() => {
//       if (oldHref !== document.location.href) {
//         oldHref = document.location.href;
//         /* Changed ! your code here */
//       }
//     });
//   });
//   observer.observe(body, { childList: true, subtree: true });
// };

// window.onload = observeUrlChange;