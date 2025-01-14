<script setup>
import {Link, router} from "@inertiajs/vue3";
import Layout from "@/Layouts/AppLayout.vue";
import {inject} from 'vue'
import Datatable from "@/Components/Datatable.vue";

const swal = inject('$swal')

defineProps({
    templates: {
        type: Object,
        required: true
    }
})

const columns = ['id', 'name', 'content']

const actions = [
    'edit',
    'delete'
]

const onEditClicked = (id) => {
    router.get(route('templates.edit', id))
}

const onDeleteClicked = (id) => {
    router.delete(route('templates.destroy', id), {preserveScroll: true})
}
</script>

<template>
    <Layout title="Templates">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="pb-0 card-header">
                            <div class="d-lg-flex">
                                <div>
                                    <h5 class="mb-0">Templates</h5>
                                </div>
                                <div class="my-auto mt-4 ms-auto mt-lg-0">
                                    <div class="my-auto ms-auto">
                                        <Link class="mb-0 btn bg-gradient-success btn-sm" :href="route('templates.create')">+&nbsp; New Template</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-0 pb-0 card-body">
                            <datatable
                                :data="templates"
                                :columns="columns"
                                :checkbox="true"
                                :actions="actions"
                                @on-edit-clicked="onEditClicked"
                                @on-delete-clicked="onDeleteClicked"
                            >
                            </datatable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
