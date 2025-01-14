<script setup>
import Sidenav from "@/Components/Sidenav/index.vue";
import Navbar from "@/Components/Navbars/Navbar.vue";
import AppFooter from "@/Components/Footer.vue";
import {Head} from "@inertiajs/vue3";
import {onBeforeMount, onMounted, onUnmounted, ref} from "vue";
import {store} from "@/Store/index.js";
import { Tooltip } from 'bootstrap'

defineProps({
    title: String,
});

onBeforeMount(() => {
    if (store.isPinned) {
        store.navbarMinimize();
        store.sidebarType("bg-white");
    } else {
        store.isTransparent = 'bg-transparent';
    }
})


onMounted(() => {
   new Tooltip(document.body, {
        selector: "[data-bs-toggle='tooltip']",
        trigger : 'hover',
        container: document.body,
    })
})

</script>

<template>
    <Head :title="title"/>

    <sidenav
        :custom_class="store.mcolor"
        :class="[
            'fixed-start',
            store.isTransparent,
            store.isRTL ? 'fixed-end' : 'fixed-start',
        ]"
        v-if="store.showSidenav"
    />
    <main
        class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
        :style="store.isRTL ? 'overflow-x: hidden' : ''"
    >
        <!-- nav -->
        <navbar
            :textWhite="store.isAbsolute ? 'text-white opacity-8' : ''"
            :minNav="store.navbarMinimize"
            v-if="store.showNavbar"
        />
        <slot/>
        <app-footer v-show="store.showFooter"/>
    </main>
</template>
