<script setup>
import Layout from "@/Layouts/AppLayout.vue";
import {computed, onMounted} from "vue";
import initChoices from "@/Plugins/choices.js";
import {useForm} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";

const {countries} = defineProps({
    countries: {
        type: Object,
        required: true
    }
})

const form = useForm({
    rate: '',
    operator_prefix: 0,
    type: 'text',
    country: null,
});


onMounted(() => {
    initChoices('choices-country')
})

const submit = () => {
    form.post(route('coverage.store'));
}

const carriers = computed(() => {
    if (form.country != null) {
        return countries[form.country]?.carriers
    }

    return []
})
</script>

<template>
    <layout title="Buy Credits">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="mx-auto col-lg-9 col-12">
                    <div class="mt-4 card card-body">
                        <form role="form" @submit.prevent="submit">
                            <h6 class="mb-0">Buy Credits</h6>
                            <p class="mb-0 text-sm">Add funds to your account</p>
                            <hr class="my-3 horizontal dark">

                            <label class="form-label">Country</label>
                            <select v-model="form.country" class="form-control" name="choices-country"
                                    id="choices-country" placeholder="Departure">
                                <option :value="country.key" v-for="(country, i) in countries" :key="i">
                                    {{ country.name }}
                                </option>
                            </select>
                            <InputError class="mt-2" :message="form.errors.country"/>

                            <label class="form-label">Operator Prefix</label>
                            <select v-model="form.operator_prefix" class="form-control" name="choices-operator-prefix"
                                    id="choices-operator-prefix" placeholder="Departure">

                                <option :value="0" selected>
                                    Any
                                </option>

                                <option :value="carrier.code" v-for="(carrier, i) in carriers" :key="i">
                                    {{ carrier.code + ` - ` + carrier.name }}
                                </option>
                            </select>
                            <InputError class="mt-2" :message="form.errors.operator_prefix"/>

                            <label class="mt-3 form-label">Country</label>
                            <select v-model="form.type" class="form-control" name="choices-type" id="choices-type"
                                    placeholder="Departure">
                                <option value="text">TEXT</option>
                                <option value="unicode">Unicode</option>
                            </select>
                            <InputError class="mt-2" :message="form.errors.type"/>

                            <label for="amount" class="mt-3 form-label">Rate</label>
                            <div class="input-group">
                                <span class="input-group-text">$</span>
                                <input v-model="form.rate" type="number" class="form-control"
                                       aria-label="Amount (to the nearest dollar)" pattern="^\d+\.\d{2}$" step="00.01">
                            </div>
                            <InputError class="mt-2" :message="form.errors.rate"/>

                            <div class="mt-4 d-flex justify-content-end">
                                <button type="submit" name="button" class="m-0 btn bg-gradient-success ms-2"> Proceed
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>
