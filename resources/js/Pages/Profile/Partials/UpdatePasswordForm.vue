<script setup>
import {ref} from 'vue';
import {useForm} from '@inertiajs/vue3';

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('user-password.update'), {
        errorBag: 'updatePassword',
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value.focus();
            }

            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
        },
    });
};
</script>

<template>
    <div id="password" class="card mt-4">
        <div class="card-header">
            <h5>Change Password</h5>
        </div>
        <div class="card-body pt-0">
            <form role="form" class="text-left" @submit.prevent="updatePassword">
                <label class="form-label">Current password</label>
                <div class="form-group">
                    <div class="">
                        <input id="currentPassword" ref="currentPasswordInput" v-model="form.current_password"
                               type="password" class="form-control form-control-default" name=""
                               placeholder="Current Password" isrequired="false"><!---->
                    </div>
                </div>
                <label class="form-label">New password</label>
                <div class="form-group">
                    <div class="">
                        <input id="newPassword" ref="passwordInput" v-model="form.password" type="password"
                               class="form-control form-control-default" name="" placeholder="New Password"
                               isrequired="false"><!---->
                    </div>
                </div>
                <label class="form-label">Confirm new password</label>
                <div class="form-group">
                    <div class="">
                        <input id="confirmPassword" type="password" v-model="form.password_confirmation"
                               class="form-control form-control-default" name="" placeholder="Confirm password"
                               isrequired="false"><!---->
                    </div>
                </div>
                <h5 class="mt-5">Password requirements</h5>
                <p class="text-muted mb-2"> Please follow this guide for a strong password: </p>
                <ul class="text-muted ps-4 mb-0 float-start">
                    <li><span class="text-sm">One special characters</span></li>
                    <li><span class="text-sm">Min 6 characters</span></li>
                    <li><span class="text-sm">One number (2 are recommended)</span></li>
                    <li><span class="text-sm">Change it often</span></li>
                </ul>
                <button class="btn mb-0 bg-gradient-dark btn-sm null null float-end mt-6 mb-0">Update password</button>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>
