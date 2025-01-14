<script setup>
import {useForm} from "@inertiajs/vue3";
import SoftInput from "@/Components/SoftInput.vue";
import {inject} from 'vue'
const swal = inject('$swal')

const {username, password} = defineProps({
    username: {
        type: String,
        required: true,
        nullable: true,
    },
    password: {
        type: String,
        required: true,
        nullable: true,
    },
});

const form = useForm({
    web_post_service_username: username,
    web_post_service_password: password,
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
    <div id="WebPostService" class="card mt-4">
        <div class="card-header pb-3">
            <h5>Web Post Service</h5>
            <p class="text-sm">
                Web Post Service Settings
            </p>
        </div>
        <div class="card-body pt-0">
            <form role="form" class="text-left" @submit.prevent="submit">
                <label class="form-label">Username</label>
                <div class="form-group">
                    <soft-input
                        id="web_post_service_username"
                        v-model="form.web_post_service_username"
                        type="text"
                        placeholder="Username"
                        name="web_post_service_username"
                        autofocus
                        :error="form.errors.hasOwnProperty('web_post_service_username')"
                    />
                </div>

                <label class="form-label">Password</label>
                <div class="form-group">
                    <soft-input
                        id="web_post_service_password"
                        v-model="form.web_post_service_password"
                        type="text"
                        placeholder="Password"
                        name="web_post_service_password"
                        autofocus
                        :error="form.errors.hasOwnProperty('web_post_service_password')"
                    />
                </div>

                <button class="btn bg-gradient-dark btn-sm null null float-end mt-3 mb-0">Save</button>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>
