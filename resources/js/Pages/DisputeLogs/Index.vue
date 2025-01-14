<script setup>
import {Link, router} from "@inertiajs/vue3";
import Layout from "@/Layouts/AppLayout.vue";
import {inject} from 'vue'
import Datatable from "@/Components/Datatable.vue";

const swal = inject('$swal')

const {disputeLogs} = defineProps({
    disputeLogs: {
        type: Object,
        required: true
    }
})

const columns = ['provider', 'dispute_id', 'transaction_id', 'amount', 'status', 'user']
</script>

<template>
    <Layout title="Dispute Logs">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="pb-0 card-header">
                            <div class="d-lg-flex">
                                <div>
                                    <h5 class="mb-0">Dispute Logs</h5>
                                </div>
                            </div>
                        </div>
                        <div class="px-0 pb-0 card-body">
                            <datatable
                                :data="disputeLogs"
                                :columns="columns"
                                :checkbox="true"
                            >
                                <template #provider="{data}">
                                    {{ data.provider }}
                                </template>
                                <template #payment_id="{data}">
                                    {{ data.provider_id }}
                                </template>
                                <template #status="{data}">
                                    <div class="badge bg-danger" v-if="data.status === 'OPEN'">
                                        {{ data.status }}
                                    </div>
                                    <div class="badge bg-info" v-if="data.status === 'UPDATED'">
                                        {{ data.status }}
                                    </div>
                                    <div class="badge bg-success" v-if="data.status === 'RESOLVED'">
                                        {{ data.status }}
                                    </div>
                                </template>
                                <template #amount="{data}">
                                    {{ data.amount.formatted }}
                                </template>
                                <template #user="{data}">
                                    <h6 class="my-auto" v-if="data.user">
                                        <Link :href="route('users.show', data.user_id)">{{ data.user.name }}</Link>
                                    </h6>
                                    <span v-else>-</span>
                                </template>
                            </datatable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
