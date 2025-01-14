import {DataTable} from "simple-datatables"

export default function initDatatable(selector, options = {}) {
    new DataTable(selector, options ?? {
        searchable: true,
        fixedHeight: false,
        perPage: 7,
    });
}
