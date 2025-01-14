<script setup>
import Layout from "@/Layouts/AppLayout.vue";
import {onMounted} from "vue";
import initChoices from "@/Plugins/choices.js";
import {useForm} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import SoftInput from "@/Components/SoftInput.vue";

const {paymentMethods} = defineProps({
    paymentMethods: {
        type: Array,
        required: true,
    }
})

const form = useForm({
    amount: '',
    payment_method: paymentMethods[0],
});


onMounted(() => {
    initChoices('choices-payment-methods')
})

const submit = () => {
    form.post(route('fund.store'), {
        // onFinish: () => form.reset(),
    });
};
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
                        <label for="amount" class="form-label">Amount</label>
                        <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input v-model="form.amount" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
                            <span class="input-group-text">.00</span>
                        </div>
                        <InputError class="mt-2" :message="form.errors.amount" />

                        <label class="mt-4 form-label">Payment Method</label>
                        <select v-model="form.payment_method" class="form-control" name="choices-payment-methods" id="choices-payment-methods" placeholder="Departure">
                            <option :value="method" v-for="(method, i) in paymentMethods" :key="i">
                                <img class="w-2" src="../../../images/small-logos/logo-revolut.svg" alt="revolut" v-if="method === 'Revolut'">
                                <img class="w-2" src="../../../images/small-logos/logo-paypal.svg" alt="revolut" v-if="method === 'Paypal'">
                                <img class="w-2" src="../../../images/small-logos/logo-skrill.svg" alt="revolut" v-if="method === 'Skrill'">
                                <img class="w-2" src="../../../images/small-logos/logo-binance.svg" alt="revolut" v-if="method === 'Binance'">
                                {{ method }}
                            </option>
                        </select>
                        <InputError :message="form.errors.payment_method" />

                        <div class="mt-4 d-flex justify-content-end">
                            <button type="submit" name="button" class="m-0 btn bg-gradient-success ms-2"> Proceed </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </layout>
</template>
