<script setup>

import {defineEmits, defineProps} from "vue";

const {modelValue} = defineProps({
    modelValue: {
        type: Array,
        default: ''
    },
    size: {
        type: String,
        default: "default",
    },
    name: {
        type: String,
        default: "",
    },
    id: {
        type: String,
        default: "",
    },
    value: {
        type: String,
        default: "",
    },
    placeholder: {
        type: String,
        default: "Type here...",
    },
    error: {
        type: Boolean,
        default: false,
    },
})

const emit = defineEmits(['update:modelValue'])

const onChange = (event) => {
    const targetValue = event.target.value

    if (targetValue.includes(',')) {
        emit('update:modelValue', targetValue.split(','));
    } else {
        emit('update:modelValue', [targetValue]);
    }
}
</script>

<template>
    <input
        class="form-control"
        id="choices-tags"
        data-color="dark"
        type="text"
        placeholder="Numbers"
        @change="onChange"
    />
</template>

<style scoped>

</style>
