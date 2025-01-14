<script setup>
import Layout from "@/Layouts/AppLayout.vue";
import Document from "@/Components/Icon/Document.vue";
import SoftInput from "@/Components/SoftInput.vue";
import SoftSwitch from "@/Components/SoftSwitch.vue";
import {useForm} from "@inertiajs/vue3";
import {inject} from 'vue'

const swal = inject('$swal')

const {settings} = defineProps({
    settings: {
        type: Object,
        required: true,
    },
})


const form = useForm({
    paypal: settings.paypal,
    skrill: settings.skrill,
    revolut: settings.paypal,
    binance: settings.binance,
});

const submit = () => {
    form.post(route('settings.store'), {
        onSuccess: () => {
            swal.fire({
                title: "Saved!",
                text: "Settings is saved successfully!",
                icon: "success"
            });
        },
    })
}
</script>

<template>
    <Layout title="Profile">
        <div class="container-fluid mt-4">
            <div class="row mb-5">
                <div class="col-lg-3">
                    <div class="card position-sticky top-1 mt-4">
                        <ul class="nav flex-column bg-white border-radius-lg p-3">
                            <li class="nav-item">
                                <a class="nav-link text-body" data-scroll="" href="#payment">
                                    <div class="icon me-2">
                                        <document class="text-dark mb-1" width="16px" height="16px"/>
                                    </div>
                                    <span class="text-sm">Payments</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9 mt-lg-0 mt-4">
                    <div id="payment" class="card mt-4">
                        <div class="card-header pb-3">
                            <h5>Payments</h5>
                            <p class="text-sm">
                                Enable or disable payment method
                            </p>
                        </div>
                        <div class="card-body pt-0">

                            <form role="form" @submit.prevent="submit">
                                <div class="d-flex">
                                    <img class="width-48-px"
                                         src="../../../images/small-logos/logo-paypal.svg"
                                         alt="logo_paypal">
                                    <div class="my-auto ms-3">
                                        <div class="h-100">
                                            <h5 class="mb-0">Paypal</h5>
                                            <p class="mb-0 text-sm"></p>
                                        </div>
                                    </div>
                                    <p class="text-sm text-secondary ms-auto me-3 my-auto">
                                        {{ form.paypal ? 'Enabled' : 'Disabled' }}</p>
                                    <div class="form-check form-switch my-auto">
                                        <input
                                            v-model="form.paypal"
                                            class="form-check-input"
                                            type="checkbox"
                                            id="flexSwitchCheckDefault2"
                                        >
                                    </div>
                                </div>
                                <hr class="horizontal dark">

                                <div class="d-flex">
                                    <img class="width-48-px"
                                         src="../../../images/small-logos/logo-binance.svg"
                                         alt="logo_binance">
                                    <div class="my-auto ms-3">
                                        <div class="h-100">
                                            <h5 class="mb-0">Binance</h5>
                                            <p class="mb-0 text-sm"></p>
                                        </div>
                                    </div>
                                    <p class="text-sm text-secondary ms-auto me-3 my-auto">
                                        {{ form.binance ? 'Enabled' : 'Disabled' }}</p>
                                    <div class="form-check form-switch my-auto">
                                        <input
                                            v-model="form.binance"
                                            class="form-check-input"
                                            type="checkbox"
                                            id="flexSwitchCheckDefault2"
                                        >
                                    </div>
                                </div>

                                <hr class="horizontal dark">
                                <div class="d-flex">
                                    <img class="width-48-px"
                                         src="../../../images/small-logos/logo-skrill.svg"
                                         alt="logo_skrill">
                                    <div class="my-auto ms-3">
                                        <div class="h-100">
                                            <h5 class="mb-0">Skrill</h5>
                                            <p class="mb-0 text-sm"></p>
                                        </div>
                                    </div>
                                    <p class="text-sm text-secondary ms-auto me-3 my-auto">
                                        {{ form.skrill ? 'Enabled' : 'Disabled' }}</p>
                                    <div class="form-check form-switch my-auto">
                                        <input
                                            v-model="form.skrill"
                                            class="form-check-input"
                                            type="checkbox"
                                            id="flexSwitchCheckDefault2"
                                        >
                                    </div>
                                </div>
                                <hr class="horizontal dark">

                                <div class="d-flex">
                                    <img class="width-48-px"
                                         src="../../../images/small-logos/logo-revolut.svg"
                                         alt="logo_skrill">
                                    <div class="my-auto ms-3">
                                        <div class="h-100">
                                            <h5 class="mb-0">Revolut</h5>
                                            <p class="mb-0 text-sm"></p>
                                        </div>
                                    </div>
                                    <p class="text-sm text-secondary ms-auto me-3 my-auto">
                                        {{ form.revolut ? 'Enabled' : 'Disabled' }}</p>
                                    <div class="form-check form-switch my-auto">
                                        <input
                                            v-model="form.revolut"
                                            class="form-check-input"
                                            type="checkbox"
                                            id="flexSwitchCheckDefault2"
                                        >
                                    </div>
                                </div>
                                <hr class="horizontal dark">

                                <button class="btn bg-gradient-dark btn-sm null null float-end mt-4 mb-0">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
