<script setup>
import {Link, router, useForm} from "@inertiajs/vue3";
import Layout from "@/Layouts/AppLayout.vue";
import {inject} from 'vue'
import SoftSwitch from "@/Components/SoftSwitch.vue";
import Datatable from "@/Components/Datatable.vue";

const swal = inject('$swal')

const {users} = defineProps({
    users: {
        type: Object,
        required: true
    }
})

const form = useForm({
    enabled: null,
});

const setStatus = (checked, id) => {
    form.enabled = checked

    form.post(route('user.set-status', id), {
        preserveScroll: true,
        preserveState: true,
    })
}

const columns = [
    'name',
    'email',
    'balance',
    'active',
]

const actions = [
    'preview',
]

const onPreviewClicked = (id) => {
    router.get(route('users.show', id))
}
</script>

<template>
    <Layout title="Users">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="pb-0 card-header">
                            <div class="d-lg-flex">
                                <div>
                                    <h5 class="mb-0">All Users</h5>
                                </div>
                                <div class="my-auto mt-4 ms-auto mt-lg-0">

                                </div>
                            </div>
                        </div>
                        <div class="px-0 pb-0 card-body">
                            <datatable
                                :data="users"
                                :columns="columns"
                                :actions="actions"
                                :checkbox="true"
                                @on-preview-clicked="onPreviewClicked"
                            >
                                <template #name="{data}">
                                    <div class="d-flex" v-if="data.profile_photo_path">
                                        <img class="w-10 ms-3" :src="data.profile_photo_path" :alt="data.name" >
                                    </div>
                                    <h6 v-else class="my-auto">{{ data.name}}

                                        <Link :href="route('impersonate', {id: data.id})" class="ms-2">
                                            <i class="fa-solid fa-user-secret"></i>
                                        </Link>
                                    </h6>

                                </template>

                                <template #balance="{data}">
                                    {{ data.balance.formatted}}
                                </template>

                                <template #active="{data}">
                                    <soft-switch id="enabled" name="enabled" :checked="data.enabled" @on-change="setStatus($event, data.id)" />
                                </template>
                            </datatable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
