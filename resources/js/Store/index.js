import { reactive } from 'vue'

export const store = reactive({
    hideConfigButton: false,
    isPinned: false,
    showConfig: false,
    isTransparent: "",
    isRTL: false,
    color: "",
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    navbarFixed: "position-sticky blur shadow-blur left-auto top-1 z-index-sticky px-0 mx-4",
    absolute: "position-absolute px-4 mx-0 w-100 z-index-2",

    navbarMinimize() {
        const sidenav_show = document.querySelector(".g-sidenav-show");
        if (sidenav_show.classList.contains("g-sidenav-hidden")) {
            sidenav_show.classList.remove("g-sidenav-hidden");
            sidenav_show.classList.add("g-sidenav-pinned");
            this.isPinned = true;
        } else {
            sidenav_show.classList.add("g-sidenav-hidden");
            sidenav_show.classList.remove("g-sidenav-pinned");
            this.isPinned = false;
        }
    },
    sidebarType(payload) {
        this.isTransparent = payload;
    },
    cardBackground(payload) {
        this.color = payload;
    },
    toggleNavbarFixed() {
        this.isNavFixed = !this.isNavFixed;
    },
    toggleEveryDisplay(value = null) {
        this.showNavbar = value ?? !this.showNavbar;
        this.showSidenav = value ?? !this.showSidenav;
        this.showFooter = value ??!this.showFooter;
    },
    toggleHideConfig(value = null) {
        this.hideConfigButton = value ?? !this.hideConfigButton;
    },
})
