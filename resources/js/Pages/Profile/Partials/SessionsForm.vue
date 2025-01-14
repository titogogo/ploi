<script setup>
import {onMounted, ref} from "vue";
import {useForm} from "@inertiajs/vue3";
import SoftButton from "@/Components/SoftButton.vue";
import {Modal} from "bootstrap";

defineProps({
    sessions: Array,
});

const confirmingLogout = ref(false);
const passwordInput = ref(null);
const modal = ref(null)

onMounted(() => {
    modal.value = Modal.getOrCreateInstance('#modal-form');
})

const form = useForm({
    password: '',
});

const confirmLogout = () => {
    confirmingLogout.value = true;

    form.reset();

    setTimeout(() => passwordInput.value.focus(), 250);
};

const logoutOtherBrowserSessions = () => {
    form.delete(route('other-browser-sessions.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingLogout.value = false;

    form.reset();
};
</script>

<template>
    <div id="sessions" class="card mt-4" v-if="sessions.length > 0">
        <div class="card-header pb-3">
            <h5>Sessions</h5>
            <p class="text-sm"> This is a list of devices that have logged into your account. Remove those that you do
                not recognize.
            </p>
        </div>
        <div class="card-body pt-0">
            <template v-for="(session, i) in sessions"  :key="i">
                <div class="d-flex align-items-center">
                    <div class="text-center w-5"><i class="fas fa-desktop text-lg opacity-6" aria-hidden="true"></i></div>
                    <div class="my-auto ms-3">
                        <div class="h-100" v-if="session.is_current_device">
                            <p class="text-sm mb-1">
                                {{ session.agent.browser ? session.agent.browser : 'Unknown' }} on
                                {{ session.agent.platform ? session.agent.platform : 'Unknown' }}
                            </p>
                            <p class="mb-0 text-xs">Your current session</p>
                        </div>
                        <template v-else>
                            {{ session.agent.browser ? session.agent.browser : 'Unknown' }} on
                            {{ session.agent.platform ? session.agent.platform : 'Unknown' }}
                        </template>
                    </div>
                    <span v-if="session.is_current_device" class="badge bg-success badge-sm null null my-auto ms-auto me-3">Active</span>
                    <soft-button data-bs-toggle="modal" data-bs-target="#modal-form" @click="confirmLogout" v-if="!session.is_current_device" class="bg-gradient-danger btn-sm null null my-sm-auto mt-2 mb-0 ms-auto">Logout</soft-button>
                </div>
                <hr class="horizontal dark" v-if="i + 1 !== sessions.length">
            </template>
        </div>

        <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true" ref="modal">
            <div class="modal-dialog modal-dialog-centered modal-md" role="document">
                <div class="modal-content">
                    <div class="modal-body p-0">
                        <div class="card card-plain">
                            <div class="card-header pb-0 text-left">
                                <h3 class="font-weight-normal text-danger ">Log Out Other Browser Sessions</h3>
                                <p class="mb-0">Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices.</p>
                            </div>
                            <div class="card-body">
                                <form role="form" class="text-left" @submit.prevent="logoutOtherBrowserSessions">
                                    <label>Password</label>
                                    <div class="input-group mb-3">
                                        <input ref="passwordInput" v-model="form.password" type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon">
                                    </div>
                                    <div class="text-center">
                                        <soft-button class="bg-gradient-danger btn-lg w-100 mt-4 mb-0">Confirm</soft-button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
