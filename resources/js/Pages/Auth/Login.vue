<script setup>
import {Head, Link, useForm} from '@inertiajs/vue3';
import Curved9 from "../../../images/curved-images/curved9.jpg";
import AppFooter from "@/Components/PageLayout/Footer.vue";
import SoftInput from "@/Components/SoftInput.vue";
import SoftSwitch from "@/Components/SoftSwitch.vue";
import SoftButton from "@/Components/SoftButton.vue";

const body = document.getElementsByTagName("body")[0];
import {onBeforeUnmount} from "vue";
import {store} from "@/Store/index.js";
import InputError from "@/Components/InputError.vue";

body.classList.remove("bg-gray-100");

onBeforeUnmount(() => {
    body.classList.add("bg-gray-100");
})

const form = useForm({
    email: '',
    password: '',
    remember: true,
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};

store.toggleEveryDisplay()
store.toggleHideConfig();

onBeforeUnmount(() => {
    store.toggleEveryDisplay()
    store.toggleHideConfig();
})

</script>

<template>
    <Head title="Login" />

    <main class="mt-0 main-content main-content-bg">
        <section>
            <div class="page-header min-vh-75">
                <div class="container">
                    <div class="row">
                        <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
                            <div class="mt-8 card card-plain">
                                <div class="pb-0 card-header text-start">
                                    <h3 class="font-weight-bolder text-success text-gradient">
                                        Welcome back
                                    </h3>
                                    <p class="mb-0">Enter your email and password to sign in</p>
                                </div>
                                <div class="card-body">
                                    <form role="form" class="text-start" @submit.prevent="submit">
                                        <label>Email</label>
                                        <soft-input
                                            id="email"
                                            v-model="form.email"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            autofocus
                                            autocomplete="username"
                                            :error="form.errors.hasOwnProperty('email')"
                                        />
                                        <InputError class="mt-2" :message="form.errors.email" />
                                        <label>Password</label>
                                        <soft-input
                                            id="password"
                                            v-model="form.password"
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            required
                                            autocomplete="current-password"
                                            :error="form.errors.hasOwnProperty('password')"
                                        />
                                        <InputError class="mt-2" :message="form.errors.password" />

                                        <soft-switch v-model="form.remember" id="rememberMe" name="rememberMe" checked>
                                            Remember me
                                        </soft-switch>
                                        <div class="text-center">
                                            <soft-button
                                                class="my-4 mb-2"
                                                variant="gradient"
                                                color="success"
                                                full-width
                                                :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                            >Sign in
                                            </soft-button>
                                        </div>
                                    </form>
                                </div>
                                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                                    <p class="mx-auto mb-4 text-sm">
                                        Don't have an account?
                                        <Link
                                            :href="route('register')"
                                            class="text-success text-gradient font-weight-bold">Sign up
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div
                                class="top-0 oblique position-absolute h-100 d-md-block d-none me-n8"
                            >
                                <div
                                    class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                                    :style="{
                                        backgroundImage: 'url(' + Curved9 + ')'
                                    }"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <app-footer />
</template>
