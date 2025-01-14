import { inject, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import { _ as _sfc_main$2 } from "./Datatable-CPLQOAGE.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    addressBooks: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    inject("$swal");
    const columns = ["name", "notes", "contacts_count"];
    const actions = [
      "preview",
      "edit",
      "delete"
    ];
    const onPreviewClicked = (id) => {
      router.get(route("address-books.show", id));
    };
    const onEditClicked = (id) => {
      router.get(route("address-books.edit", id));
    };
    const onDeleteClicked = (id) => {
      router.delete(route("address-books.delete", id), { preserveScroll: true });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "History" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="card"${_scopeId}><div class="pb-0 card-header"${_scopeId}><div class="d-lg-flex"${_scopeId}><div${_scopeId}><h5 class="mb-0"${_scopeId}>All Address Books</h5></div><div class="my-auto mt-4 ms-auto mt-lg-0"${_scopeId}><div class="my-auto ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              to: _ctx.route("address-books.create"),
              class: "mb-0 btn bg-gradient-success btn-sm",
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`+  New Address Book`);
                } else {
                  return [
                    createTextVNode("+  New Address Book")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div><div class="px-0 pb-0 card-body"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              data: __props.addressBooks,
              columns,
              actions,
              checkbox: true,
              onOnPreviewClicked: onPreviewClicked,
              onOnEditClicked: onEditClicked,
              onOnDeleteClicked: onDeleteClicked
            }, {
              name: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h6 class="my-auto"${_scopeId2}>${ssrInterpolate(data.name)}</h6>`);
                } else {
                  return [
                    createVNode("h6", { class: "my-auto" }, toDisplayString(data.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4 container-fluid" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-12" }, [
                    createVNode("div", { class: "card" }, [
                      createVNode("div", { class: "pb-0 card-header" }, [
                        createVNode("div", { class: "d-lg-flex" }, [
                          createVNode("div", null, [
                            createVNode("h5", { class: "mb-0" }, "All Address Books")
                          ]),
                          createVNode("div", { class: "my-auto mt-4 ms-auto mt-lg-0" }, [
                            createVNode("div", { class: "my-auto ms-auto" }, [
                              createVNode(unref(Link), {
                                to: _ctx.route("address-books.create"),
                                class: "mb-0 btn bg-gradient-success btn-sm",
                                target: "_blank"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("+  New Address Book")
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "px-0 pb-0 card-body" }, [
                        createVNode(_sfc_main$2, {
                          data: __props.addressBooks,
                          columns,
                          actions,
                          checkbox: true,
                          onOnPreviewClicked: onPreviewClicked,
                          onOnEditClicked: onEditClicked,
                          onOnDeleteClicked: onDeleteClicked
                        }, {
                          name: withCtx(({ data }) => [
                            createVNode("h6", { class: "my-auto" }, toDisplayString(data.name), 1)
                          ]),
                          _: 1
                        }, 8, ["data"])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AddressBook/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
