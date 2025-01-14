<script setup>
import {Link} from "@inertiajs/vue3";
import Layout from "@/Layouts/AppLayout.vue";
import {onMounted} from "vue";
import initDatatable from "@/Plugins/simple-datatable.js";

const {addressBook} = defineProps({
    addressBook: {
        type: Object,
        required: true
    }
})

onMounted(() => {
    initDatatable('table')
})
</script>

<template>
    <Layout title="Address Book Details">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="pb-0 card-header">
                            <div class="d-lg-flex">
                                <div>
                                    <h5 class="mb-0">Address Book Details</h5>
                                </div>
                                <div class="my-auto mt-4 ms-auto mt-lg-0">
                                    <div class="my-auto ms-auto">
                                        <Link :to="route('address-books.create')"
                                           class="mb-0 btn bg-gradient-success btn-sm"
                                           target="_blank">+&nbsp; New Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-0 pb-0 card-body">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead class="thead-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(contact, index) in addressBook.contacts" :key="index">
                                        <td>
                                            {{ contact.id }}
                                        </td>
                                        <td>
                                            {{ contact.name }}
                                        </td>
                                        <td>{{ contact.phone }}</td>
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
