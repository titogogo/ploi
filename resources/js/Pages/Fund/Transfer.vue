<script setup>
import Layout from "@/Layouts/AppLayout.vue";
import SoftInput from "@/Components/SoftInput.vue";
import InputError from "@/Components/InputError.vue";
import {useForm} from "@inertiajs/vue3";
import { inject } from 'vue'
const swal = inject('$swal')

const form = useForm({
    email: '',
    amount: 0,
    password: '',
});

const submit = () => {
    form.post(route('transfer-funds.store'), {
        onSuccess: () => {
            swal.fire({
                title: "Success!",
                text: "Credits was transferred successfully!",
                icon: "success"
            });
        },
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <layout title="Transfer Funds">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="mx-auto col-lg-9 col-12">
                    <div class="mt-4 card card-body">
                        <form role="form" @submit.prevent="submit">
                            <h6 class="mb-0">Transfer Funds</h6>
                            <p class="mb-0 text-sm">Transfer credits to another account</p>
                            <hr class="my-3 horizontal dark">
                            <label for="amount" class="form-label">Amount</label>
                            <div class="input-group" :class="{'is-invalid': form.errors.hasOwnProperty('amount')}">
                                <span class="input-group-text">$</span>
                                <input v-model="form.amount" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
                                <span class="input-group-text">.00</span>
                            </div>
                            <InputError class="mt-3" :message="form.errors.amount"/>


                            <div class="mt-3 row">
                                <label>Email</label>
                                <soft-input
                                    v-model="form.email"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    aria-label="Email"
                                    :error="form.errors.hasOwnProperty('email')"
                                />
                                <InputError :message="form.errors.email"/>
                            </div>

                            <div class="mt-1 row">
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
                                <InputError :message="form.errors.password"/>
                            </div>
                            <div class="mt-4 d-flex justify-content-end">
                                <button type="submit" name="button" class="m-0 btn bg-gradient-success ms-2"> Transfer </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<style scoped>
.input-group.is-invalid {
    border: 1px solid #fd5c70;
    padding-right: unset;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23fd5c70' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23fd5c70' stroke='none'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1rem 1rem;
}
</style>
