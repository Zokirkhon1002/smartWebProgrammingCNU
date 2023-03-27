const checkbox = document.getElementById("check");
const itemsInArr = Array.from(document.querySelectorAll(".item"));
const listUl = document.querySelector(".list");
const closeBtn = document.getElementById("close");
const openBtn = document.getElementById("open");

if(window.matchMedia("max-width: 620px")){
   items.forEach(item => {
    item.addEventListener("click" => {
    if (checkbox.checked){
      listUl.style.top = "-120%";
      closeBtn.style.opacity = "0";
      closeBtn.style.transform = "scale(0)";
    }
    checkbox.checked = false;
    openBtn.style.transform = "scale(1)";
    // position
  })
})

}

function scrollOff() {
  document.body.style.overflow = "hidden";
}
function scrollOn() {
  document.body.style.overflow = "auto";
}
