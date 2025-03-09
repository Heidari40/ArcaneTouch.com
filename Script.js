const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnicon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnicon.className = isOpen
        ? 'lni lni-xmark'
        : 'lni lni-dashboard-square-1';
};