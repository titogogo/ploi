<script setup>
import {Link, router} from "@inertiajs/vue3";
import Layout from "@/Layouts/AppLayout.vue";
import {inject} from 'vue'
import Datatable from "@/Components/Datatable.vue";

const swal = inject('$swal')

const {manualPayments} = defineProps({
    manualPayments: {
        type: Object,
        required: true
    }
})

const columns = ['method', 'email', 'transaction_id', 'amount', 'status', 'user', 'created_at']
const actions = ['preview']

const onPreviewClick = (id) => {
    router.get(route('manual-payments.show', id))
}
</script>

<template>
    <Layout title="Manual Payments">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="pb-0 card-header">
                            <div class="d-lg-flex">
                                <div>
                                    <h5 class="mb-0">Manual Payments</h5>
                                </div>
                            </div>
                        </div>
                        <div class="px-0 pb-0 card-body">
                            <datatable
                                :data="manualPayments"
                                :columns="columns"
                                :checkbox="true"
                                :actions="actions"
                                @on-preview-clicked="onPreviewClick"
                            >
                                <template #method="{data}">
                                    <div class="d-flex">
                                        <img class="w-10" src="../../../images/small-logos/logo-revolut.svg" alt="revolut" v-if="data.method === 'Revolut'">
                                        <img class="w-10" src="../../../images/small-logos/logo-paypal.svg" alt="paypal" v-if="data.method === 'Paypal'">
                                        <img class="w-10" src="../../../images/small-logos/logo-skrill.svg" alt="paypal" v-if="data.method === 'Skrill'">
                                        <img class="w-10" src="../../../images/small-logos/logo-binance.svg" alt="paypal" v-if="data.method === 'Binance'">
                                        <h6 class="ms-3 my-auto">{{ data.method }}</h6>
                                    </div>
                                </template>
                                <template #payment_id="{data}">
                                    {{ data.provider_id }}
                                </template>
                                <template #status="{data}">
                                    <div class="badge bg-info" v-if="data.status === 'pending'">
                                        {{ data.status }}
                                    </div>
                                    <div class="badge bg-success" v-if="data.status === 'completed'">
                                        {{ data.status }}
                                    </div>
                                </template>
                                <template #amount="{data}">
                                    {{ data.amount.formatted }}
                                </template>
                                <template #created_at="{data}">
                                    {{ data.formatted_created_at }}
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
