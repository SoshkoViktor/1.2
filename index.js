const screenTotalWidth = screen.width;
const sidebar = document.querySelector(".sidebar");
const displaysList = document.querySelector(".displays-list");
const title  = document.getElementById('title');

function toggleSidebar() {

    if (screenTotalWidth > 375) {
      return;
    }
    document.getElementById('logo').classList.toggle("hidden");
    document.getElementById('list').classList.toggle("hidden");

    if (title.classList.contains('closed')) {
        title.classList.replace('closed','opened')
    } else {
      title.classList.replace('opened', 'closed')
    }

}

sidebar.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target.classList.contains("displays-list-item")) {
    if (e.target.classList.contains("active")) {
      return;
    }

    let active = document.querySelector(".active");
    let unselectedBlock = document.getElementById(
      active.getAttribute("component")
    );

    let idSelector = e.target.getAttribute("component");
    let selectedBlock = document.getElementById(idSelector);

    selectedBlock.classList.toggle("hidden");
    unselectedBlock.classList.toggle("hidden");
    e.target.classList.toggle("active");
    active.classList.toggle("active");

    toggleSidebar();
  }

    if (e.target.classList.contains("sidebar-title")) {
       toggleSidebar();
    }

});
