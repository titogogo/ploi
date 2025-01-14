<script setup>
import {Link} from "@inertiajs/vue3";
import {computed} from "vue";
import House from "@/Components/Icon/House.vue";
import {store} from "@/Store/index.js";
import * as routeNames from '../../../resources/lang/routeNames.json'

const {currentPage} = defineProps({
    currentPage: {
        required: true,
    },
    textWhite: {
        type: String,
    },
})

const pageName = computed(() => {
    return routeNames.default[currentPage] ?? currentPage;
    // if (currentPage.indexOf('.') !== -1) {
    //     return currentPage.split('.')[0].replace('-', ' ')
    // }
    //
    // return currentPage.replace('-', ' ');
})


const toggleSidebar = () => {
    store.navbarMinimize()
}
</script>

<template>
    <nav aria-label="breadcrumb">
        <ol
            class="px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb"
            :class="store.isRTL ? '' : ' me-sm-6'"
        >
            <li class="text-sm breadcrumb-item" :class="textWhite">
                <Link :class="textWhite" class="opacity-3 text-dark" :href="route('dashboard')"><House /></Link>
            </li>
            <li
                class="text-sm breadcrumb-item active text-capitalize"
                :class="textWhite ? 'text-white' : 'text-dark'"
                aria-current="page"
            >
                {{ pageName }}
            </li>
        </ol>
        <h6 class="mb-0 font-weight-bolder text-capitalize" :class="textWhite ? 'text-white' : ''">
            {{ pageName }}
        </h6>
    </nav>
</template>
