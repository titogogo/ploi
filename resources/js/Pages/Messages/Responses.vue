<script setup>
import {Link, router} from "@inertiajs/vue3";
import Layout from "@/Layouts/AppLayout.vue";
import {inject} from 'vue'
import Datatable from "@/Components/Datatable.vue";

const swal = inject('$swal')

const {responses} = defineProps({
    responses: {
        type: Object,
        required: true
    }
})

const columns = ['recipient', 'status']
const actions = ['retry']

const onRetryClicked = (id) => {

}
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
                                :data="responses"
                                :columns="columns"
                                :checkbox="true"
                                :actions="actions"
                            >
                                <template #recipient="{data}">
                                    {{ data.recipient?.phone ?? '-' }}
                                </template>

                                <template #status="{data}">
                                    <div class="badge bg-danger" v-if="data.status === 'error'">
                                        {{ data.status }}
                                    </div>
                                    <div class="badge bg-info" v-if="data.status === 'sent'">
                                        {{ data.status }}
                                    </div>
                                </template>

                                <template #actions="{data}">
                                    <a href="javascript:;" @click="onRetryClicked(data.id)" data-bs-toggle="tooltip" data-bs-original-title="Retry">
                                        <i class="fas fa-rotate text-secondary" aria-hidden="true"></i>
                                    </a>
                                </template>
                            </datatable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
