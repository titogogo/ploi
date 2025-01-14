<script setup>
import {Link} from "@inertiajs/vue3";
import Layout from "@/Layouts/AppLayout.vue";
import Document from "@/Components/Icon/Document.vue";
import SoftInput from "@/Components/SoftInput.vue";
import SoftSwitch from "@/Components/SoftSwitch.vue";
import {useForm} from "@inertiajs/vue3";
import {inject, ref} from 'vue'
import InputError from "@/Components/InputError.vue";

const swal = inject('$swal')

const {user} = defineProps({
    user: {
        type: Object,
        required: true,
    },
    transactions: {
        type: Object,
        required: true
    }
})

const form = useForm({
    enabled: user.enabled,
    api_enabled: user.api_enabled,
});

const onStatusChange = () => {
    form.post(route('user.set-status', user.id), {
        preserveScroll: true,
        preserveState: true,
    })
}

const onApiStatusChange = () => {
    form.post(route('user.set-status', user.id), {
        preserveScroll: true,
        preserveState: true,
    })
}

const showDeduct = ref(false)
const showPasswordForm = ref(false)

const deductForm = useForm({
    amount: 0
})

const changePasswordForm = useForm({
    password: '',
    password_confirmation: '',
});

const submit = () => {
    deductForm.post(route('users.deduct', user.id), {
        onSuccess: () => {
            swal.fire({
                title: "Success!",
                text: "Credits was deducted successfully!",
                icon: "success"
            });

            deductForm.reset()
        },
        onFinish: () => deductForm.reset(),
    });
}

const submitChangePassword = () => {
    changePasswordForm.post(route('users.set-password', user.id), {
        onSuccess: () => {
            swal.fire({
                title: "Success!",
                text: "Password changed successfully!",
                icon: "success"
            });

            changePasswordForm.reset()
        },
        onFinish: () => changePasswordForm.reset(),
    });
}

</script>

<template>
    <Layout title="Preview User">
        <div class="container-fluid mt-4">
            <div class="row mb-5">
                <div class="col-lg-12 mt-lg-0 mt-4">

                    <div class="card card-body" id="profile">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-sm-auto col-4">
                                <div class="avatar avatar-xl position-relative">
                                    <img :src="user.profile_photo_path" :alt="user.name"
                                         class="w-100 border-radius-lg shadow-sm">
                                </div>
                            </div>
                            <div class="col-sm-auto col-8 my-auto">
                                <div class="h-100">
                                    <h5 class="mb-1 font-weight-bolder">
                                        {{ user.name }}
                                    </h5>
                                    <p class="mb-0 font-weight-bold text-sm">
                                        Balance: {{ user.balance.formatted }}
                                        <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;" @click="showDeduct = !showDeduct">
                                            <i class="fas fa-minus text-dark me-2" aria-hidden="true"></i>Deduct
                                        </a>
                                    </p>
                                </div>

                            </div>

                            <div class="col-sm-auto ms-sm-auto mt-sm-0 mt-3 d-flex">
                                <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;" @click="showPasswordForm = !showPasswordForm">
                                    <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit
                                </a>
                            </div>
                        </div>

                        <div v-if="showDeduct" class="row mt-4 flex">
                            <form class="form-inline" @submit.prevent="submit">
                                <div class="g-3 mt-lg-0 mt-2 d-inline-flex flex-row justify-content-start">
                                    <div class="col-auto input-group" :class="{'is-invalid': deductForm.errors.hasOwnProperty('amount')}">
                                        <span class="input-group-text">$</span>
                                        <input v-model="deductForm.amount" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
                                    </div>

                                    <div class="col-auto">
                                        <button type="submit" name="button" class="m-0 btn bg-gradient-success ms-2"> Submit </button>
                                    </div>
                                </div>

                                <InputError class="mt-3" :message="deductForm.errors.amount"/>
                            </form>
                        </div>

                        <div v-if="showPasswordForm" class="row mt-4 flex">
                            <form @submit.prevent="submitChangePassword">
                                <div class="row col-5">
                                    <label>Password</label>
                                    <soft-input
                                        v-model="changePasswordForm.password"
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        aria-label="Password"
                                        :error="changePasswordForm.errors.hasOwnProperty('password')"
                                    />
                                    <InputError class="mt-2" :message="changePasswordForm.errors.password" />
                                </div>
                                <div class="row col-5">
                                    <label>Confirm Password</label>
                                    <soft-input
                                        v-model="changePasswordForm.password_confirmation"
                                        id="password_confirmation"
                                        type="password"
                                        placeholder="Password Confirmation"
                                        aria-label="Password Confirmation"
                                        :error="changePasswordForm.errors.hasOwnProperty('password_confirmation')"
                                    />
                                    <InputError class="mt-2" :message="changePasswordForm.errors.password_confirmation" />

                                </div>

                                <div class="col-auto">
                                    <button type="submit" name="button" class="m-0 btn bg-gradient-success"> Submit </button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>

                <div class="col-lg-6 mt-lg-0 mt-4">
                    <div class="card mt-4">
                        <div class="card-header">
                            <h5>User Settings</h5>
                            <p class="text-sm">Control user settings</p>
                        </div>
                        <div class="card-body pt-0">
                            <div class="table-responsive">
                                <table class="table mb-0">
                                    <thead>
                                    <tr>
                                        <th class="ps-1" colspan="4">
                                            <p class="mb-0">Setting</p>
                                        </th>
                                        <th class="text-center">
                                            <p class="mb-0">Status</p>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td class="ps-1" colspan="4">
                                            <div class="my-auto">
                                                <span class="text-dark d-block text-sm">API</span>
                                                <span class="text-xs font-weight-normal">Enable or forbid the user from using API.</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                                                <input
                                                    v-model="form.api_enabled"
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    id="flexSwitchCheckDefault12"
                                                    @change="onApiStatusChange"
                                                >
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="ps-1" colspan="4">
                                            <div class="my-auto">
                                                <span class="text-dark d-block text-sm">Active</span>
                                                <span class="text-xs font-weight-normal">Enable or disable user from logging in and using the system.</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                class="form-check form-switch mb-0 d-flex align-items-center justify-content-center">
                                                <input
                                                    v-model="form.enabled"
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    id="flexSwitchCheckDefault11"
                                                    @change="onStatusChange"
                                                >
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 mt-lg-0 mt-4">
                    <div class="card mt-4">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5>Transactions</h5>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end align-items-center">
                                    <Link :href="route('user.transactions', user.id)">
                                        <small>More <i class="fa fa-chevron-right ms-2" aria-hidden="true"></i></small>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div class="card-body pt-0">
                            <div class="table-responsive" v-if="transactions.total > 0">
                                <ul class="list-group">
                                    <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
                                        v-for="(transaction, i) in transactions.data">
                                        <div class="d-flex align-items-center">
                                            <span
                                                class="btn btn-icon-only btn-rounded mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"
                                                :class="{
                                                    'btn-outline-success': transaction.direction === 'in',
                                                    'btn-outline-danger': transaction.direction === 'out',
                                                }"
                                            >
                                                <i class="fas fa-arrow-up" aria-hidden="true" v-if="transaction.direction === 'in'"></i>
                                                <i class="fas fa-arrow-down" aria-hidden="true" v-if="transaction.direction === 'out'"></i>
                                            </span>

                                            <div class="d-flex flex-column">
                                                <h6 class="mb-1 text-dark text-sm text-capitalize" v-if="transaction.type === 'internal'">{{ transaction.type }}</h6>
                                                <h6 class="mb-1 text-dark text-sm text-capitalize" v-else>{{ transaction.payment_method }}</h6>
                                                <span class="text-xs">{{ transaction.formatted_created_at }}</span>
                                            </div>
                                        </div>
                                        <div
                                            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
                                            v-if="transaction.direction === 'in'">
                                            + {{ transaction.amount.formatted }}
                                        </div>
                                        <div
                                            class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold"
                                            v-if="transaction.direction === 'out'">
                                            - {{ transaction.amount.formatted }}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div v-else>
                                <small>No Transactions</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
