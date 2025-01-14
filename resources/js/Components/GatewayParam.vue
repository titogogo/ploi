<script setup>
import {reactive} from "vue";

const {type, index, name, value} = defineProps({
    index: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    hasName: {
        type: Boolean,
        default: true,
    },
    hasValue: {
        type: Boolean,
        default: true,
    },
    error: {
        type: String,
        nullable: true,
    },
    deletable: {
        type: Boolean,
        default: true,
    },
    nullable: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        default: '',
    },
    value: {
        type: String,
        default: '',
    },
})

const emit = defineEmits(['onRemove', 'onChange'])

const data = reactive({
    type,
    name: name,
    value: value,
})

const onNameChange = (event) => {
    data.name = event.target.value

    emit('onChange', index, data);
}

const onValueChange = (event) => {
    data.value = event.target.value

    emit('onChange', index, data);
}

</script>

<template>
    <div class="mt-3 row align-items-center">
        <div class="col-2">
            <label class="text-capitalize">{{ type }}</label>
        </div>




        <div class="col-9">
            <div class="row">
                <div class="col-6">
                    <input
                        id="param_name"
                        class="form-control multisteps-form__input"
                        name="param_name"
                        :value="data.name"
                        placeholder="Parameter"
                        @input="onNameChange"
                        :class="{'d-none': !hasName}"
                        :required="!nullable"
                    />
                </div>

                <div class="col-6" v-if="hasValue">
                    <input
                        id="param_value"
                        class="form-control multisteps-form__input"
                        name="param_value"
                        :value="data.value"
                        placeholder="Value"
                        @input="onValueChange"
                    />
                </div>
            </div>
        </div>

        <div class="col-sm" v-if="deletable">
            <button @click="$emit('onRemove', index)" type="button" class="remove-btn">X</button>
        </div>
    </div>

</template>

<style scoped>
.remove-btn {
    outline: 0;
    border: 0;
    background-image: linear-gradient(310deg, #ea0606, #ff667c);
    color: white;
    padding: .3rem 1rem;
    border-radius: .5rem;
}
</style>
