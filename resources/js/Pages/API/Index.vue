<script setup>
import Layout from "@/Layouts/AppLayout.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import SoftInput from "@/Components/SoftInput.vue";
import { copyText } from 'vue3-clipboard'
import {inject} from 'vue'

const swal = inject('$swal')

const props = defineProps({
    tokens: Array,
    availablePermissions: Array,
    defaultPermissions: Array,
});


const createApiTokenForm = useForm({
    name: '',
    permissions: props.defaultPermissions,
});

const deleteApiTokenForm = useForm({});
const page = usePage()

const createApiToken = () => {
    createApiTokenForm.post(route('api-tokens.store'), {
        preserveScroll: true,
        onSuccess: async () => {
            await swal.fire({
                title: "API Token",
                input: "text",
                html: `<span class='text-sm text-danger'>Please copy your new API token. For your security, it won't be shown again.</span>`,
                inputLabel: "Your API Token",
                inputValue: page.props.jetstream.flash.token,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: `<i class="fa-solid fa-copy"></i> Copy!`
            });

            copyText(page.props.jetstream.flash.token, page.props.jetstream.flash.token, () => {

            })

            createApiTokenForm.reset();
        },
    });
};

const deleteApiToken = (id) => {
    deleteApiTokenForm.delete(route('api-tokens.destroy', id), {
        preserveScroll: true,
        preserveState: true,
    });
};
</script>

<template>
    <Layout title="History">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="pb-0 card-header">
                            <h6 class="mb-0">API Tokens</h6>
                            <p class="mb-0 text-sm">Create API Token</p>
                            <hr class="my-3 horizontal dark">
                        </div>

                        <div class="card-body">
                            <form role="form" @submit.prevent="createApiToken">
                                <label>Name</label>
                                <soft-input
                                    v-model="createApiTokenForm.name"
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    aria-label="Name"
                                    :error="createApiTokenForm.errors.hasOwnProperty('name')"
                                />
                                <InputError :message="createApiTokenForm.errors.name"/>

                                <div class="mt-4 d-flex justify-content-end">
                                    <button type="submit" name="button" class="m-0 btn bg-gradient-success ms-2">
                                        Create
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>

                    <div class="card mt-4" id="2fa">
                        <div class="card-header">
                            <h5 class="mb-0">Manage API Tokens</h5>
                            <span class="mt-2 text-sm ms-auto">You may delete any of your existing tokens if they are no longer needed.</span>
                        </div>

                        <hr class="my-3 horizontal dark">

                        <div class="card-body">
                            <div v-if="tokens.length === 0">
                                No Tokens
                            </div>
                            <template v-for="(token, i) in tokens">
                                <div class="d-flex">
                                    <p class="my-auto">{{ token.name }}</p>
                                    <p class="text-secondary text-sm ms-auto my-auto me-3">
                                        <template v-if="token.last_used_ago">
                                            Last used {{ token.last_used_ago }}
                                        </template>
                                    </p>
                                    <button class="btn btn-sm btn-danger mb-0" type="button"
                                            @click="deleteApiToken(token.id)">Delete
                                    </button>
                                </div>

                                <hr class="horizontal dark" v-if="i + 1 !== tokens.length">
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
