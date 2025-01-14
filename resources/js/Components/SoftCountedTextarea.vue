<script setup>
import {defineEmits, ref} from "vue";

defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    id: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        default: "Your text here...",
    },
    disabled: {
        type: Boolean,
        default: false,
    }
})

const charactersCount = ref(0)
const messagesCount = ref(1)
const emit = defineEmits(['update:modelValue'])

const onChange = (e) => {
    charactersCount.value = e.currentTarget.value.length
    messagesCount.value = Math.round(charactersCount.value / 160);
    messagesCount.value = messagesCount.value === 0 ? 1 : messagesCount.value;

    emit('update:modelValue', e.currentTarget.value);
}

const pluralize = (count, noun, suffix = 's') =>
    `${count} ${noun}${count !== 1 ? suffix : ''}`;



</script>

<template>
    <div class="form-group">
        <label :for="id">
            <slot/>
        </label>
        <textarea
            :id="id"
            class="form-control"
            rows="5"
            :value="modelValue"
            :placeholder="placeholder"
            @input="onChange"
            :disabled="disabled"
        ></textarea>
        <div style="margin-top: 0.25rem; text-align: right" id="counter">
            {{ charactersCount }} / 160

            ({{ pluralize(messagesCount, 'Message') }})
        </div>
    </div>
</template>
