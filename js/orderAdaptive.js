const orderTabletQuery = window.matchMedia("(max-width: 1024px) and (min-width: 769px)");
const orderMobileQuery = window.matchMedia("(max-width: 768px)");

const trigger = document.querySelector(".ord-trigger__wrap");
const block = document.querySelector(".ord-b");
const subinfo = block.querySelector(".ord__subinfo");
const tags = block.querySelector(".ord__tags");
const table = block.querySelector(".ord__tbl");
const date = block.querySelector(".ord__date");
const statusEl = block.querySelector(".ord__status");
const title = block.querySelector(".ord__title");
const bigplates = block.querySelector(".ord__bigplates");
let allElems = [subinfo, tags, table, date, statusEl, title, bigplates]
let hiddenElems = [];

function handleTablet(e) {
  if (e.matches) {
    // console.log("tablet");
    hiddenElems.length = 0;
    hiddenElems.push(subinfo, tags, table);
    // console.log("hiddens on tablet", hiddenElems);
    hiddenElems.forEach(item => item.style.display = "none");
    block.classList.remove("opened");
    trigger.removeEventListener("click", handleBlock);
    trigger.addEventListener("click", handleBlock);
  } else {
    allElems.forEach(item => item.style.display = "");
  }
}

function handleMobile(e) {
  if (e.matches) {
    // console.log("mobile");
    hiddenElems.length = 0;
    hiddenElems.push(date, title, tags, table, bigplates);
    hiddenElems.forEach(item => item.style.display = "none");
    block.classList.remove("opened");
    trigger.removeEventListener("click", handleBlock);
    trigger.addEventListener("click", handleBlock);
  } else {
    allElems.forEach(item => item.style.display = "");
  }
}

function handleBlock() {
  // console.log("hiddens ", hiddenElems);
  block.classList.toggle("opened");
  trigger.classList.toggle("active");
  if (block.classList.contains("opened")) {
    hiddenElems.forEach(item => item.style.display = "");
  } else {
    hiddenElems.forEach(item => item.style.display = "none");
  }
}

orderTabletQuery.addListener(handleTablet)
handleTablet(orderTabletQuery);
orderMobileQuery.addListener(handleMobile)
handleMobile(orderMobileQuery);