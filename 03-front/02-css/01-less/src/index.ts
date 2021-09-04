import "./style/index.less";

const ballEl = document.querySelector(".ball") as HTMLDivElement;

document.addEventListener("click", ()=> {ballEl.style.margin = "200px"})