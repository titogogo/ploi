<script setup>
import {defineProps, defineEmits} from 'vue'

const {modelValue} = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    size: {
        type: String,
        default: "default",
    },
    success: {
        type: Boolean,
        default: false,
    },
    error: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
        default: "",
    },
    iconDir: {
        type: String,
        default: "",
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
    type: {
        type: String,
        default: "text",
    },
    isRequired: {
        type: Boolean,
        default: false,
    },
    isDisabled: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(['update:modelValue'])

const getClasses = (size, success, error) => {
    let sizeValue, isValidValue;

    sizeValue = size ? `form-control-${size}` : null;

    if (error) {
        isValidValue = "is-invalid";
    } else if (success) {
        isValidValue = "is-valid";
    } else {
        isValidValue = "";
    }

    return `${sizeValue} ${isValidValue}`;
}
const getIcon = (icon) => (icon ? icon : null)
const hasIcon = (icon) => (icon ? "input-group" : null)

const onChange = (e) => {
    emit('update:modelValue', e.currentTarget.value);
}
</script>

<template>
    <div class="form-group">
        <div :class="hasIcon(icon)">
          <span v-if="iconDir === 'left'" class="input-group-text">
            <i :class="getIcon(icon)"></i>
          </span>
            <input
                :id="id"
                :type="type"
                class="form-control"
                :class="getClasses(size, success, error)"
                :name="name"
                :value="modelValue"
                :placeholder="placeholder"
                :required="isRequired"
                @input="onChange"
                :disabled="isDisabled"
            />
            <span v-if="iconDir === 'right'" class="input-group-text">
        <i :class="getIcon(icon)"></i>
      </span>
        </div>
    </div>
</template>
