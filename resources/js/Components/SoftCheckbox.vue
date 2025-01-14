<script setup>
import {defineEmits} from "vue";

defineProps({
    name: {
        type: String,
        default: "",
    },
    id: {
        type: String,
        default: "",
    },
    checked: {
        type: Boolean,
        default: false,
    },
})

const emit = defineEmits(['update:modelValue'])

const onChange = (e) => {
    emit('update:modelValue', e.currentTarget.checked);
}
</script>

<template>
  <div class="form-check">
    <input
      :id="id"
      class="form-check-input"
      type="checkbox"
      :name="name"
      :checked="checked"
      @change="onChange"
      @input="onChange"
    />
    <label :for="id" class="custom-control-label" :class="$attrs.class">
      <slot />
    </label>
  </div>
</template>
