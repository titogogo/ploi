<script setup>
import {Link} from '@inertiajs/vue3';
import {computed, ref} from "vue";

const {links} = defineProps({
    navText: {
        type: String,
        required: true,
    },
    links: {
        type: Array,
        required: true
    }
})

const isActive = computed(() => {
    return links.find((link) => route().current(link.to)) !== undefined;
})

const show = ref(false)
</script>

<template>
    <a
        data-bs-toggle="collapse"
        :href="`#${navText.replace(' ', '-')}`"
        :aria-controls="`${navText.replace(' ', '-')}`"
        aria-expanded="false"
        class="nav-link"
        :class="{'active': isActive}"
        type="button"
        @click="show = !show"
    >
        <div
            class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center me-2">
            <slot name="icon"></slot>
        </div>
        <span class="nav-link-text ms-1">{{ navText }}</span>
    </a>
    <div :id="navText.replace(' ', '-')" class="collapse" :class="{'show': show || isActive}">
        <ul class="nav ms-4 ps-3">
            <li class="nav-item" v-for="(link, index) in links" :key="index">
                <Link :href="route(link.to)" class="nav-link" :class="{ 'active router-link-exact-active': route().current(link.to)}" aria-current="page">
                    <span class="sidenav-mini-icon">{{ link.icon }}</span>
                    <span class="sidenav-normal">{{ link.text }}</span>
                </Link>
            </li>
        </ul>
    </div>
</template>
