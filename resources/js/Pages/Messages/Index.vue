<script setup>
import {Link, router} from '@inertiajs/vue3'
import Layout from "@/Layouts/AppLayout.vue";
import {onMounted} from "vue";
import initDatatable from "@/Plugins/simple-datatable.js";
import Datatable from "@/Components/Datatable.vue";

defineProps({
    messages: {
        type: Object,
        required: true
    }
})

const columns = ['sender_id', 'text', 'gateway', 'status', 'recipients_count']

const actions = [
    'preview',
]

const onPreviewClicked = (id) => {
    router.get(route('messages.responses', id))
}

const onRetryClicked = (id) => {
    router.post(route('messages.retry', id))
}

const onStopClicked = (id) => {
    router.post(route('messages.stop', id))
}

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
                                    <h5 class="mb-0">All Scheduled Messages</h5>
                                </div>
                                <div class="my-auto mt-4 ms-auto mt-lg-0">
                                    <div class="my-auto ms-auto">
                                        <Link class="mb-0 btn bg-gradient-success btn-sm" :href="route('messages.create')">+&nbsp; New Message</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-0 pb-0 card-body">
                            <datatable
                                :data="messages"
                                :columns="columns"
                                :actions="actions"
                                :checkbox="true"
                                @on-preview-clicked="onPreviewClicked"
                            >
                                <template #gateway="{data}">
                                    <h6 class="my-auto">{{ data.gateway?.name}}</h6>
                                </template>

                                <template #status="{data}">
                                    <div class="badge bg-danger" v-if="data.status === 'error'">
                                        {{ data.status }}
                                    </div>
                                    <div class="badge bg-info" v-if="data.status === 'pending'">
                                        {{ data.status }}
                                    </div>
                                    <div class="badge bg-warning" v-if="data.status === 'retrying'">
                                        {{ data.status }}
                                    </div>
                                    <div class="badge bg-primary" v-if="data.status === 'queued'">
                                        {{ data.status }}
                                    </div>
                                    <div class="badge bg-danger" v-if="data.status === 'completed_with_errors'">
                                        completed with errors
                                    </div>
                                    <div class="badge bg-success" v-if="data.status === 'completed'">
                                        {{ data.status }}
                                    </div>
                                    <div class="badge bg-warning" v-if="data.status === 'stopping'">
                                        {{ data.status }}
                                    </div>
                                    <div class="badge bg-info" v-if="data.status === 'stopped'">
                                        {{ data.status }}
                                    </div>
                                </template>

                                <template #actions="{data}">
                                    <a href="javascript:;" @click="onRetryClicked(data.id)" data-bs-toggle="tooltip" data-bs-original-title="Retry">
                                        <i class="fas fa-rotate text-secondary" aria-hidden="true"></i>
                                    </a>

                                    <a href="javascript:;" class="mx-3" @click="onPreviewClicked(data.id)" data-bs-toggle="tooltip" data-bs-original-title="Preview">
                                        <i class="fas fa-eye text-secondary" aria-hidden="true"></i>
                                    </a>

                                    <a href="javascript:;" @click="onStopClicked(data.id)" data-bs-toggle="tooltip" data-bs-original-title="Stop">
                                        <i class="fas fa-circle-stop text-secondary" aria-hidden="true"></i>
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
