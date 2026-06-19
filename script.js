const hamburger = document.getElementById('hamburger');
const crossIcon = document.getElementById('crossIcon');
const navSidebar = document.getElementById('navSidebar');
const featuredBtns = document.querySelectorAll('[data-tab-btn]');
const sidebarBtn = document.querySelectorAll('.sidebar-btn');
const loginOverlay = document.querySelector('.login-overlay');
const closeLoginButton = document.querySelector('.close-login-button');
const navBackground = document.querySelector('.nav-sidebar-overlay-background')

const loginBtn = document.querySelector('.login-btn');  
hamburger.addEventListener(('click'), () => {
    navSidebar.classList.toggle('sidebar-active')
})
crossIcon.addEventListener(('click'), () => {
    navSidebar.classList.remove('sidebar-active')
})
navBackground.addEventListener('click', ()=>{
      navSidebar.classList.remove('sidebar-active')
})
sidebarBtn.forEach((btn) => {
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
loginBtn.addEventListener(('click'), () => {
    loginOverlay.classList.add('login-overlay-active');

})
closeLoginButton.addEventListener(('click'), () => {
    loginOverlay.classList.remove('login-overlay-active');
})
loginOverlay.addEventListener('click', (e) => {
    const overlay = e.target.classList.contains('login-overlay');
    if (overlay) {
        loginOverlay.classList.remove('login-overlay-active');
    }
})

// swiper js 
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
const categoryswiper = new Swiper('.categoryswiper', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 1,      
    spaceBetween: 20,
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30, 
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    },

    pagination: {
        el: '.categoryswiper-pagination',
        clickable: true,
    },

});
const heroswiper = new Swiper('.heroswiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.heroswiper-pagination',
        clickable: true,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});