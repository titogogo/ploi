<script setup>
import {Link, router} from "@inertiajs/vue3";
import Layout from "@/Layouts/AppLayout.vue";
import {inject} from 'vue'
import Datatable from "@/Components/Datatable.vue";

const swal = inject('$swal')

defineProps({
    paymentLogs: {
        type: Object,
        required: true
    }
})

const columns = ['provider', 'transaction_id', 'amount', 'status', 'user']

const actions = [
    'preview',
    'delete-many',
]

const onDeleteManyClicked = (ids) => {
    router.post(route('payments.destroy-many'), {ids})
}
</script>

<template>
    <Layout title="Payment Logs">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="pb-0 card-header">
                            <div class="d-lg-flex">
                                <div>
                                    <h5 class="mb-0">Payment Logs</h5>
                                </div>
                            </div>
                        </div>
                        <div class="px-0 pb-0 card-body">
                            <datatable
                                :data="paymentLogs"
                                :columns="columns"
                                :checkbox="true"
                                :actions="actions"
                                @on-delete-many-clicked="onDeleteManyClicked"
                            >
                                <template #provider="{data}">
                                    {{ data.provider }}
                                </template>
                                <template #payment_id="{data}">
                                    {{ data.provider_id }}
                                </template>
                                <template #status="{data}">
                                    <div class="badge bg-success" v-if="data.status === 'APPROVED'">
                                        {{ data.status }}
                                    </div>
                                    <div v-else class="badge bg-info">
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
