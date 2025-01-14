<script setup>
import {Link} from '@inertiajs/vue3';
import {ref} from "vue";

defineProps({
    to: {
        type: [Object, String],
        required: true,
    },
    navText: {
        type: String,
        required: true,
    },
})

const isExpanded = ref(false)
</script>

<template>
    <Link
        class="nav-link"
        :class="{ 'active router-link-exact-active': route().current(to)}"
        :href="route(to)"
        v-bind="$attrs"
    >
        <div
            class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center me-2"
        >
            <slot name="icon"></slot>
        </div>
        <span class="nav-link-text ms-1">{{ navText }}</span>
    </Link>
</template>
