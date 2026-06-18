const hamburger = document.getElementById('hamburger');
const crossIcon = document.getElementById('crossIcon');
const navSidebar = document.getElementById('navSidebar');
const featuredBtns = document.querySelectorAll('[data-tab-btn]');
const sidebarBtn = document.querySelectorAll('.sidebar-btn');
hamburger.addEventListener(('click'), () => {
    navSidebar.classList.add('sidebar-active')
})
crossIcon.addEventListener(('click'), () => {
    navSidebar.classList.remove('sidebar-active')
})
sidebarBtn.forEach((btn)=>{
    btn.addEventListener(('click'), () => {
    navSidebar.classList.remove('sidebar-active')
})
})
const removeActiveClassBtn = (sectionContainer) => {
    const btns = sectionContainer.querySelectorAll("[data-tab-btn]");
    btns.forEach((Btn) => {
        Btn.classList.remove("active")
    })
}

featuredBtns.forEach((button) => {
    button.addEventListener('click', () => {
        const targetsection = button.parentElement.parentElement;
        removeActiveClassBtn(targetsection);
        const tabContents = targetsection.querySelectorAll('[data-tab-content]');
        const targetTab = button.getAttribute("data-tab");
        button.classList.add('active')
        tabContents.forEach((content) => {
            const target = content.getAttribute('data-tab');
            if (targetTab === target) {
                content.classList.add('active')
            } else {
                content.classList.remove('active')
            }
        })
    })
})
