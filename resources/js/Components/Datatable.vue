<script setup>
import {Link, router, usePage} from "@inertiajs/vue3";
import {computed, onMounted, reactive, ref, watch} from "vue";

const {data, columns, actions, checkbox} = defineProps({
    data: {
        type: Object,
        required: true,
    },
    checkbox: {
        type: Boolean,
        default: false,
    },
    sorting: {
        type: Boolean,
        default: true,
    },
    columns: {
        type: Array,
        required: true,
    },
    actions: {
        type: Array,
        default: [],
    },
})

const emit = defineEmits(['onPreviewClicked', 'onEditClicked', 'onDeleteClicked', 'onDeleteManyClicked'])

const urlData = reactive({
    page: data.current_page,
})

const changePerPage = (event) => {
    urlData.per_page = event.target.value
}

const nextPage = () => {
    urlData.page = urlData.page + 1;
}

const setCurrentPage = (page) => {
    urlData.page = page
}

const prevPage = () => {
    urlData.page = urlData.page - 1;
}

const allCheckbox = ref(null)
const selectedItems = ref([])

const selectAll = (event) => {
    for (let i = 0; i < data.data.length; i++) {
        selectedItems.value[i] = event.target.checked
    }
}

const unselectAll = () => {
    allCheckbox.value.checked = false

    selectedItems.value = []
}

watch(urlData, async () => {
    unselectAll()
    router.visit(route(route().current()), {
        method: 'get',
        data: urlData,
        preserveState: true,
    })
})

const sort = (column) => {
    if (urlData.sort !== column && urlData.sort !== '-' + column) {
        urlData.sort = column
        return
    }

    if (!urlData.sort) {
        urlData.sort = column
        return
    }

    if (urlData.sort === column) {
        urlData.sort = '-' + column
        return
    }

    urlData.sort = undefined
}

const columnsCount = computed(() => {
    let count = columns.length

    if (checkbox) {
        count = count + 1;
    }

    if (actions.length > 0) {
        count = count + 1;
    }

    return count
})

const onSearchChange = (event) => {
    urlData.filter = {
        q: event.target.value
    }
}

const checkedItems = computed(() => {
    const items = []
    for (let i = 0; i < selectedItems.value.length; i++) {
        if (selectedItems.value[i])
        {
            items[i] = data.data[i].id
        }
    }

    return items
})
</script>
<template>
    <div class="table-responsive">
        <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
            <div class="dataTable-top">
                <div class="dataTable-dropdown">
                    <label>
                        <select class="dataTable-selector" @change="changePerPage">
                            <option value="5" :selected="data.per_page === 5">5</option>
                            <option value="10" :selected="data.per_page === 10">10</option>
                            <option value="15" :selected="data.per_page === 15">15</option>
                            <option value="20" :selected="data.per_page === 20">20</option>
                            <option value="25" :selected="data.per_page === 25">25</option>
                        </select>
                        entries per page
                    </label>
                </div>
                <div class="dataTable-search">
                    <input class="dataTable-input" placeholder="Search..." type="text" @input="onSearchChange">

                    <div class="dropdown d-inline-block" v-if="checkedItems.length > 0 && actions.includes('delete-many')">
                        <button class="btn btn-outline-secondary btn-sm mb-0 ms-2" id="navbarDropdownMenuLink1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Actions <i class="fa fa-ellipsis-v ms-2" aria-hidden="true"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end me-sm-n4 me-n3" aria-labelledby="navbarDropdownMenuLink1" style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 46px);" data-popper-placement="bottom-end">
                            <a class="dropdown-item text-danger" href="javascript:;" @click.prevent="$emit('onDeleteManyClicked', checkedItems)">Delete Selected</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dataTable-container">
                <table class="table dataTable-table">
                    <thead class="thead-light">
                    <tr>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            style="width: 20px;" v-if="checkbox">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="all-checkbox" @change="selectAll"
                                       ref="allCheckbox" style="width: 1.9em;height: 1.9em;">
                            </div>
                        </th>
                        <th
                            :class="{
                                'asc': urlData.sort === column,
                                'desc': urlData.sort === '-' + column,
                            }"
                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            v-for="(column, i) in columns"
                            @click="sort(column)"
                        >
                            <a href="javascript:;" class="dataTable-sorter" v-if="sorting">{{
                                    column.replace('_', ' ')
                                }}</a>
                            <template v-else>
                                {{ column.replace('_', '') }}
                            </template>
                        </th>
                        <th style="width: 8.19775%;" v-if="actions.length > 0">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr v-for="(item, i) in data.data" :key="i" v-if="data.data.length > 0">
                        <td v-if="checkbox">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" :id="`checkbox${i}`" v-model="selectedItems[i]">
                            </div>
                        </td>
                        <td class="text-sm font-weight-normal" v-for="(column, i) in columns">
                            <slot :name="column" :data="item">
                                {{ item[column] }}
                            </slot>
                        </td>

                        <td class="text-sm">
                            <slot name="actions" :data="item">
                                <a href="javascript:;" @click.prevent="$emit('onPreviewClicked', item.id)" data-bs-toggle="tooltip"
                                   data-bs-original-title="Preview" v-if="actions.includes('preview')">
                                    <i class="fas fa-eye text-secondary" aria-hidden="true"></i>
                                </a>
                                <a href="javascript:;" @click.prevent="$emit('onEditClicked', item.id)" class="ms-3"
                                   data-bs-toggle="tooltip" data-bs-original-title="Edit"
                                   v-if="actions.includes('edit')">
                                    <i class="fas fa-user-edit text-secondary" aria-hidden="true"></i>
                                </a>
                                <a href="javascript:;" @click.prevent="$emit('onDeleteClicked', item.id)" class="ms-3" data-bs-toggle="tooltip"
                                   data-bs-original-title="Delete" v-if="actions.includes('delete')">
                                    <i class="fas fa-trash text-secondary" aria-hidden="true"></i>
                                </a>
                            </slot>
                        </td>
                    </tr>

                    <tr v-else>
                        <td class="dataTables-empty" :colspan="columnsCount">No entries found</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="dataTable-bottom">
                <div class="dataTable-info">Showing {{
                        data.total > 0 ? (data.current_page > 1 ? (data.per_page * data.current_page) - data.per_page + 1 : data.current_page) : 0
                    }} to {{
                        data.total < (data.per_page * data.current_page) ? data.total : (data.per_page * data.current_page)
                    }} of {{ data.total }} entries
                </div>
                <nav class="dataTable-pagination">
                    <ul class="dataTable-pagination-list" v-if="data.links.length > 3">
                        <li class="pager" v-if="data.current_page > 1">
                            <a href="#" @click.prevent="prevPage">‹</a>
                        </li>
                        <li :class="{'active': page === data.current_page}" v-for="page in data.last_page" :key="page">
                            <a href="#" @click.prevent="setCurrentPage(page)">{{ page }}</a>
                        </li>
                        <li class="pager" v-if="data.current_page < data.last_page">
                            <a href="#" @click.prevent="nextPage">›</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>
