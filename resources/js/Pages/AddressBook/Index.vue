<script setup>
import {Link, router} from "@inertiajs/vue3";
import Layout from "@/Layouts/AppLayout.vue";
import {inject} from 'vue'
import Datatable from "@/Components/Datatable.vue";

const swal = inject('$swal')

const {addressBooks} = defineProps({
    addressBooks: {
        type: Object,
        required: true
    }
})

const columns = ['name', 'notes', 'contacts_count']

const actions = [
    'preview',
    'edit',
    'delete',
]

const onPreviewClicked = (id) => {
    router.get(route('address-books.show', id))
}

const onEditClicked = (id) => {
    router.get(route('address-books.edit', id))
}

const onDeleteClicked = (id) => {
    router.delete(route('address-books.delete', id), {preserveScroll: true})
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
                                    <h5 class="mb-0">All Address Books</h5>
                                </div>
                                <div class="my-auto mt-4 ms-auto mt-lg-0">
                                    <div class="my-auto ms-auto">
                                        <Link :to="route('address-books.create')"
                                           class="mb-0 btn bg-gradient-success btn-sm"
                                           target="_blank">+&nbsp; New Address Book</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-0 pb-0 card-body">
                            <datatable
                                :data="addressBooks"
                                :columns="columns"
                                :actions="actions"
                                :checkbox="true"
                                @on-preview-clicked="onPreviewClicked"
                                @on-edit-clicked="onEditClicked"
                                @on-delete-clicked="onDeleteClicked"
                            >
                                <template #name="{data}">
                                    <h6 class="my-auto">{{ data.name }}</h6>
                                </template>
                            </datatable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
