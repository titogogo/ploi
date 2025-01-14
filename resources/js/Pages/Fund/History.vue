<script setup>
import Layout from "@/Layouts/AppLayout.vue";
import {onMounted} from "vue";
import initDatatable from "@/Plugins/simple-datatable.js";

defineProps({
    transactions: {
        type: Array,
        required: true
    }
})

onMounted(() => {
    initDatatable('table')
})

</script>

<template>
    <Layout title="History">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="pb-0 card-header">
                            <div class="d-lg-flex">
                                <div>
                                    <h5 class="mb-0">All Transactions</h5>
                                </div>
                            </div>
                        </div>
                        <div class="px-0 pb-0 card-body">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead class="thead-light">
                                    <tr>
                                        <th></th>
                                        <th>From</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(transaction, i) in transactions" :key="i">
                                        <td>
                                            <button v-if="transaction.direction === 'out'" class="p-3 mb-0 btn btn-icon-only btn-rounded me-3 btn-sm d-flex align-items-center justify-content-center btn-outline-danger">
                                                <i class="fas fa-arrow-down" aria-hidden="true"></i>
                                            </button>

                                            <button v-if="transaction.direction === 'in'" class="p-3 mb-0 btn btn-icon-only btn-rounded me-3 btn-sm d-flex align-items-center justify-content-center btn-outline-success">
                                                <i class="fas fa-arrow-up" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                        <td>
                                            <template v-if="transaction.type === 'external'">
                                                {{ transaction.payment_method }}
                                            </template>

                                            <template v-if="transaction.type === 'internal'">
                                                {{ transaction.from_user.name }}
                                            </template>
                                        </td>
                                        <td>
                                            <div v-if="transaction.direction === 'in'" class="text-sm d-flex align-items-center  font-weight-bold ms-auto text-success">+ {{ transaction.amount.formatted }}</div>

                                            <div v-if="transaction.direction === 'out'"  class="text-sm d-flex align-items-center  font-weight-bold ms-auto text-danger">- {{ transaction.amount.formatted }}</div>
                                        </td>
                                        <td class="text-sm">
                                            {{ transaction.formatted_created_at }}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
