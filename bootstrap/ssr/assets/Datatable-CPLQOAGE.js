import { reactive, ref, watch, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrLooseContain, ssrRenderSlot } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Datatable",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      required: true
    },
    checkbox: {
      type: Boolean,
      default: false
    },
    sorting: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      required: true
    },
    actions: {
      type: Array,
      default: []
    }
  },
  emits: ["onPreviewClicked", "onEditClicked", "onDeleteClicked", "onDeleteManyClicked"],
  setup(__props, { emit: __emit }) {
    const { data, columns, actions, checkbox } = __props;
    const urlData = reactive({
      page: data.current_page
    });
    const allCheckbox = ref(null);
    const selectedItems = ref([]);
    const unselectAll = () => {
      allCheckbox.value.checked = false;
      selectedItems.value = [];
    };
    watch(urlData, async () => {
      unselectAll();
      router.visit(route(route().current()), {
        method: "get",
        data: urlData,
        preserveState: true
      });
    });
    const columnsCount = computed(() => {
      let count = columns.length;
      if (checkbox) {
        count = count + 1;
      }
      if (actions.length > 0) {
        count = count + 1;
      }
      return count;
    });
    const checkedItems = computed(() => {
      const items = [];
      for (let i = 0; i < selectedItems.value.length; i++) {
        if (selectedItems.value[i]) {
          items[i] = data.data[i].id;
        }
      }
      return items;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "table-responsive" }, _attrs))}><div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns"><div class="dataTable-top"><div class="dataTable-dropdown"><label><select class="dataTable-selector"><option value="5"${ssrIncludeBooleanAttr(__props.data.per_page === 5) ? " selected" : ""}>5</option><option value="10"${ssrIncludeBooleanAttr(__props.data.per_page === 10) ? " selected" : ""}>10</option><option value="15"${ssrIncludeBooleanAttr(__props.data.per_page === 15) ? " selected" : ""}>15</option><option value="20"${ssrIncludeBooleanAttr(__props.data.per_page === 20) ? " selected" : ""}>20</option><option value="25"${ssrIncludeBooleanAttr(__props.data.per_page === 25) ? " selected" : ""}>25</option></select> entries per page </label></div><div class="dataTable-search"><input class="dataTable-input" placeholder="Search..." type="text">`);
      if (checkedItems.value.length > 0 && __props.actions.includes("delete-many")) {
        _push(`<div class="dropdown d-inline-block"><button class="btn btn-outline-secondary btn-sm mb-0 ms-2" id="navbarDropdownMenuLink1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> Actions <i class="fa fa-ellipsis-v ms-2" aria-hidden="true"></i></button><div class="dropdown-menu dropdown-menu-end me-sm-n4 me-n3" aria-labelledby="navbarDropdownMenuLink1" style="${ssrRenderStyle({ "position": "absolute", "inset": "0px 0px auto auto", "margin": "0px", "transform": "translate(0px, 46px)" })}" data-popper-placement="bottom-end"><a class="dropdown-item text-danger" href="javascript:;">Delete Selected</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="dataTable-container"><table class="table dataTable-table"><thead class="thead-light"><tr>`);
      if (__props.checkbox) {
        _push(`<th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7" style="${ssrRenderStyle({ "width": "20px" })}"><div class="form-check"><input class="form-check-input" type="checkbox" id="all-checkbox" style="${ssrRenderStyle({ "width": "1.9em", "height": "1.9em" })}"></div></th>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.columns, (column, i) => {
        _push(`<th class="${ssrRenderClass([{
          "asc": urlData.sort === column,
          "desc": urlData.sort === "-" + column
        }, "text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"])}">`);
        if (__props.sorting) {
          _push(`<a href="javascript:;" class="dataTable-sorter">${ssrInterpolate(column.replace("_", " "))}</a>`);
        } else {
          _push(`<!--[-->${ssrInterpolate(column.replace("_", ""))}<!--]-->`);
        }
        _push(`</th>`);
      });
      _push(`<!--]-->`);
      if (__props.actions.length > 0) {
        _push(`<th style="${ssrRenderStyle({ "width": "8.19775%" })}"> Action </th>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</tr></thead><tbody>`);
      if (__props.data.data.length > 0) {
        _push(`<!--[-->`);
        ssrRenderList(__props.data.data, (item, i) => {
          _push(`<tr>`);
          if (__props.checkbox) {
            _push(`<td><div class="form-check"><input class="form-check-input" type="checkbox"${ssrRenderAttr("id", `checkbox${i}`)}${ssrIncludeBooleanAttr(Array.isArray(selectedItems.value[i]) ? ssrLooseContain(selectedItems.value[i], null) : selectedItems.value[i]) ? " checked" : ""}></div></td>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(__props.columns, (column, i2) => {
            _push(`<td class="text-sm font-weight-normal">`);
            ssrRenderSlot(_ctx.$slots, column, { data: item }, () => {
              _push(`${ssrInterpolate(item[column])}`);
            }, _push, _parent);
            _push(`</td>`);
          });
          _push(`<!--]--><td class="text-sm">`);
          ssrRenderSlot(_ctx.$slots, "actions", { data: item }, () => {
            if (__props.actions.includes("preview")) {
              _push(`<a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview"><i class="fas fa-eye text-secondary" aria-hidden="true"></i></a>`);
            } else {
              _push(`<!---->`);
            }
            if (__props.actions.includes("edit")) {
              _push(`<a href="javascript:;" class="ms-3" data-bs-toggle="tooltip" data-bs-original-title="Edit"><i class="fas fa-user-edit text-secondary" aria-hidden="true"></i></a>`);
            } else {
              _push(`<!---->`);
            }
            if (__props.actions.includes("delete")) {
              _push(`<a href="javascript:;" class="ms-3" data-bs-toggle="tooltip" data-bs-original-title="Delete"><i class="fas fa-trash text-secondary" aria-hidden="true"></i></a>`);
            } else {
              _push(`<!---->`);
            }
          }, _push, _parent);
          _push(`</td></tr>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<tr><td class="dataTables-empty"${ssrRenderAttr("colspan", columnsCount.value)}>No entries found</td></tr>`);
      }
      _push(`</tbody></table></div><div class="dataTable-bottom"><div class="dataTable-info">Showing ${ssrInterpolate(__props.data.total > 0 ? __props.data.current_page > 1 ? __props.data.per_page * __props.data.current_page - __props.data.per_page + 1 : __props.data.current_page : 0)} to ${ssrInterpolate(__props.data.total < __props.data.per_page * __props.data.current_page ? __props.data.total : __props.data.per_page * __props.data.current_page)} of ${ssrInterpolate(__props.data.total)} entries </div><nav class="dataTable-pagination">`);
      if (__props.data.links.length > 3) {
        _push(`<ul class="dataTable-pagination-list">`);
        if (__props.data.current_page > 1) {
          _push(`<li class="pager"><a href="#">‹</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(__props.data.last_page, (page) => {
          _push(`<li class="${ssrRenderClass({ "active": page === __props.data.current_page })}"><a href="#">${ssrInterpolate(page)}</a></li>`);
        });
        _push(`<!--]-->`);
        if (__props.data.current_page < __props.data.last_page) {
          _push(`<li class="pager"><a href="#">›</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Datatable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
