<script setup>
import {useForm} from "@inertiajs/vue3";
import SoftInput from "@/Components/SoftInput.vue";
import {inject} from 'vue'
const swal = inject('$swal')

const {apiKey} = defineProps({
    apiKey: {
        type: String,
        required: true,
        nullable: true,
    },
});

const form = useForm({
    sms_send_co_key: apiKey,
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
    <div id="sms-send" class="card mt-4">
        <div class="card-header pb-3">
            <h5>SMS-Send.co</h5>
            <p class="text-sm">
                sms-send.co settings will be here
            </p>
        </div>
        <div class="card-body pt-0">
            <form role="form" class="text-left" @submit.prevent="submit">
                <label class="form-label">API Key</label>
                <div class="form-group">
                    <soft-input
                        id="key"
                        v-model="form.sms_send_co_key"
                        type="text"
                        placeholder="API Key"
                        name="key"
                        autofocus
                        :error="form.errors.hasOwnProperty('sms_send_co_key')"
                    />
                </div>

                <button class="btn bg-gradient-dark btn-sm null null float-end mt-3 mb-0">Save</button>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>
