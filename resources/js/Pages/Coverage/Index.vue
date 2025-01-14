<script setup>
import {Link, router, useForm} from "@inertiajs/vue3";
import Layout from "@/Layouts/AppLayout.vue";
import {inject} from 'vue'
import Datatable from "@/Components/Datatable.vue";

const swal = inject('$swal')

defineProps({
    rates: {
        type: Object,
        required: true
    }
})

const columns = [
    'country_name',
    'country_code',
    'operator_prefix',
    'type',
    'rate',
]

const actions = [
    'delete',
]

const onDeleteClicked = (id) => {
    router.delete(route('coverage.destroy', id), {preserveScroll: true})
}

</script>

<template>
    <Layout title="SMS Coverage & Pricing">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="pb-0 card-header">
                            <div class="d-lg-flex">
                                <div>
                                    <h5 class="mb-0">SMS Coverage & Pricing</h5>
                                </div>
                                <div class="my-auto mt-4 ms-auto mt-lg-0">
                                    <div class="my-auto ms-auto">
                                        <Link :href="route('coverage.create')" class="mb-0 btn bg-gradient-success btn-sm" v-if="$page.props.auth.user.admin">+&nbsp; Add Rating</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-0 pb-0 card-body">
                            <datatable
                                :data="rates"
                                :columns="columns"
                                :actions="actions"
                                :checkbox="true"
                                @on-delete-clicked="onDeleteClicked"
                            >
                                <template #rate="{data}">
                                    {{data.rate.formatted}}
                                </template>

                                <template #operator_prefix="{data}">
                                    <template v-if="data.operator_prefix === 0">
                                        Any
                                    </template>

                                    <template v-else>
                                        {{ data.operator_prefix }}
                                    </template>
                                </template>
                            </datatable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
