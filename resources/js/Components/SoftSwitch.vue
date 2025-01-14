<script setup>
import {defineEmits} from "vue";

defineProps({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        default: false,
    },
    labelClass: {
        type: String,
        default: "",
    },
})

const emit = defineEmits(['update:modelValue', 'onChange'])

const onChange = (e) => {
    emit('update:modelValue', e.currentTarget.checked);
    emit('onChange', e.currentTarget.checked)
}
</script>

<template>
  <div class="form-check form-switch">
    <input
      :id="id"
      class="form-check-input"
      :class="$attrs.class"
      type="checkbox"
      :name="name"
      :checked="checked"
      @change="onChange"
    />
    <label class="form-check-label" :class="labelClass" :for="id">
      <slot />
    </label>
  </div>
</template>
