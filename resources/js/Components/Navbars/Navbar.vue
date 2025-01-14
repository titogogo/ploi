<script setup>
import {Link} from '@inertiajs/vue3';
import Breadcrumbs from "../Breadcrumbs.vue";
import {store} from '@/Store'
import {computed, onUpdated, ref} from "vue";

defineProps({
    minNav: {
        type: Function,
    },
    textWhite: {
        type: String,
    },
})

const showMenu = ref(false);

const toggleSidebar = () => {
    store.sidebarType("bg-white");
    store.navbarMinimize()
}

const currentRouteName = computed(() => {
    return route().current();
});

const navClasses = computed(() => {
    return {
        "position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky": store.isNavFixed,
        "position-absolute px-4 mx-0 w-100 z-index-2": store.isAbsolute,
        "px-0 mx-4 mt-4": !store.isAbsolute,
    };
})

onUpdated(() => {
    const navbar = document.getElementById("navbarBlur");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10 && store.isNavFixed) {
            navbar.classList.add("blur");
            navbar.classList.add("position-sticky");
            navbar.classList.add("shadow-blur");
        } else {
            navbar.classList.remove("blur");
            navbar.classList.remove("position-sticky");
            navbar.classList.remove("shadow-blur");
        }
    });
})
</script>

<template>
    <nav
        class="shadow-none navbar navbar-main navbar-expand-lg border-radius-xl"
        :class="navClasses"
        v-bind="$attrs"
        id="navbarBlur"
        data-scroll="true"
    >
        <div class="px-3 py-1 container-fluid">
            <breadcrumbs :currentPage="currentRouteName" :textWhite="textWhite"/>

            <div
                class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4 "
                id="navbar"
            >
                <div
                    class="pe-md-3 d-flex align-items-center ms-md-auto"
                >
                    <div class="input-group">
                        <span class="input-group-text text-body">
                            <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Type here..."
                        />
                    </div>
                </div>
                <ul class="navbar-nav justify-content-end">
                    <li class="nav-item d-flex align-items-center">
                        <Link
                            :href="route('profile.show')"
                            class="px-0 nav-link font-weight-bold"
                            :class="textWhite ? textWhite : 'text-body'"
                        >
                            <i
                                class="fa fa-user me-sm-1"
                            ></i>
                            <span class="d-sm-inline d-none">{{ $page.props.auth.user.name }} ( {{ $page.props.auth.user.balance.formatted }} )</span>
                        </Link>
                    </li>
                    <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                        <a
                            href="#"
                            @click="toggleSidebar"
                            class="p-0 nav-link text-body"
                            id="iconNavbarSidenav"
                        >
                            <div class="sidenav-toggler-inner">
                                <i class="sidenav-toggler-line"></i>
                                <i class="sidenav-toggler-line"></i>
                                <i class="sidenav-toggler-line"></i>
                            </div>
                        </a>
                    </li>
                    <li
                        class="px-3 nav-item dropdown d-flex align-items-center pe-2"
                        v-if="$page.props.is_impersonating"
                    >
                        <Link
                            :href="route('impersonate.leave')"
                            class="p-0 nav-link"
                        >
                            <i class="fa-solid fa-user-secret"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
