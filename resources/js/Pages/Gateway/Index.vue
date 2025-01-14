<script setup>
import {Link, router, useForm} from "@inertiajs/vue3";
import Layout from "@/Layouts/AppLayout.vue";
import {inject} from 'vue'
import SoftSwitch from "@/Components/SoftSwitch.vue";
import Datatable from "@/Components/Datatable.vue";

const swal = inject('$swal')

const {gateways} = defineProps({
    gateways: {
        type: Object,
        required: true
    }
})

const form = useForm({
    enabled: null,
});

const setStatus = (checked, id) => {
    form.enabled = checked

    form.post(route('change-gateway-status', id), {
        preserveScroll: true,
        preserveState: true,
    })
}

const columns = [
    'id',
    'name',
    'type',
    'limit',
    'status',
    'webhook_url',
]

const actions = [
    'delete',
    'edit',
]

const onPreviewClicked = (id) => {
    router.get(route('gateway.show', id), {preserveScroll: true})
}

const onEditClicked = (id) => {
    router.get(route('gateway.edit', id), {preserveScroll: true})
}

const onDeleteClicked = (id) => {
    router.delete(route('gateway.delete', id), {preserveScroll: true})
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
                                    <h5 class="mb-0">All Gateways</h5>
                                </div>
                                <div class="my-auto mt-4 ms-auto mt-lg-0">
                                    <div class="my-auto ms-auto">
                                        <Link :href="route('gateway.create')" class="mb-0 btn bg-gradient-success btn-sm">+&nbsp; New Gateway</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-0 pb-0 card-body">
                            <datatable
                                :data="gateways"
                                :columns="columns"
                                :actions="actions"
                                :checkbox="true"
                                @on-preview-clicked="onPreviewClicked"
                                @on-edit-clicked="onEditClicked"
                                @on-delete-clicked="onDeleteClicked"
                            >
                                <template #name="{data}">
                                    <h6 class="my-auto">{{data.name}}</h6>
                                </template>
                                <template #type="{data}">
                                    <span class="badge bg-success">
                                        {{ data.type }}
                                    </span>
                                </template>

                                <template #limit="{data}">
                                    <span class="text-danger">{{ data.limit }}</span> Per <span class="text-info">{{ data.delay }} {{ data.delay_type }}</span>
                                </template>

                                <template #status="{data}">
                                    <soft-switch id="status" name="status" :checked="data.enabled" @on-change="setStatus($event, data.id)" />
                                </template>
                            </datatable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
