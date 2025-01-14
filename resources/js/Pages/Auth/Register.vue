<script setup>
import {Head, Link, useForm} from '@inertiajs/vue3';
import AppFooter from "@/Components/PageLayout/Footer.vue";
import SoftInput from "@/Components/SoftInput.vue";
import SoftCheckbox from "@/Components/SoftCheckbox.vue";
import SoftButton from "@/Components/SoftButton.vue";
import {store} from "@/Store/index.js";
import {onBeforeMount} from "vue";
import Curved6 from "../../../images/curved-images/curved6.jpg";
import InputError from '@/Components/InputError.vue';

store.toggleEveryDisplay()
store.toggleHideConfig()

onBeforeMount(() => {
    store.toggleEveryDisplay()
    store.toggleHideConfig()
})

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: true,
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <Head title="Register" />
    <div
        class="pt-5 m-3 page-header align-items-start min-vh-50 pb-11 border-radius-lg"
        :style="{
      backgroundImage:
        'url(' + Curved6 + ')',
    }"
    >
        <span class="mask bg-gradient-dark opacity-6"></span>
        <div class="container">
            <div class="row justify-content-center">
                <div class="mx-auto text-center col-lg-5">
                    <h1 class="mt-5 mb-2 text-white">Welcome!</h1>
                    <p class="text-white text-lead">
                       Sendroid
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7">
                <div class="card z-index-0">
                    <div class="card-body">
                        <form role="form" @submit.prevent="submit">
                            <div class="mb-3">
                                <soft-input
                                    v-model="form.name"
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    aria-label="Name"
                                    :error="form.errors.hasOwnProperty('name')"
                                />
                                <InputError class="mt-2" :message="form.errors.name" />
                            </div>
                            <div class="mb-3">
                                <soft-input
                                    v-model="form.email"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    aria-label="Email"
                                    :error="form.errors.hasOwnProperty('email')"
                                />
                                <InputError class="mt-2" :message="form.errors.email" />
                            </div>
                            <div class="mb-3">
                                <soft-input
                                    v-model="form.password"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    aria-label="Password"
                                    :error="form.errors.hasOwnProperty('password')"
                                />
                                <InputError class="mt-2" :message="form.errors.password" />
                            </div>
                            <div class="mb-3">
                                <soft-input
                                    v-model="form.password_confirmation"
                                    id="password_confirmation"
                                    type="password"
                                    placeholder="Password Confirmation"
                                    aria-label="Password Confirmation"
                                    :error="form.errors.hasOwnProperty('password_confirmation')"
                                />
                                <InputError class="mt-2" :message="form.errors.password_confirmation" />
                            </div>
                            <soft-checkbox
                                v-model="form.terms"
                                id="flexCheckDefault"
                                name="flexCheckDefault"
                                class="font-weight-light"
                                checked
                            >
                                I agree the
                                <a href="javascript:;" class="text-dark font-weight-bolder"
                                >Terms and Conditions</a
                                >
                            </soft-checkbox>
                            <InputError class="mt-2" :message="form.errors.terms" />

                            <div class="text-center">
                                <soft-button
                                    color="dark"
                                    full-width
                                    variant="gradient"
                                    class="my-4 mb-2"
                                >Sign up</soft-button>
                            </div>
                            <p class="text-sm mt-3 mb-0">
                                Already have an account?
                                <Link
                                    :href="route('login')"
                                    class="text-dark font-weight-bolder"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <app-footer />
</template>
