import { DataTable } from "simple-datatables";
function initDatatable(selector, options = {}) {
  new DataTable(selector, options ?? {
    searchable: true,
    fixedHeight: false,
    perPage: 7
  });
}
export {
  initDatatable as i
};
