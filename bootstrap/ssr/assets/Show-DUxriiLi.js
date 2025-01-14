import { onMounted, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import { i as initDatatable } from "./simple-datatable-x_kI3Qph.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
import "simple-datatables";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    addressBook: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    onMounted(() => {
      initDatatable("table");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Address Book Details" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="card"${_scopeId}><div class="pb-0 card-header"${_scopeId}><div class="d-lg-flex"${_scopeId}><div${_scopeId}><h5 class="mb-0"${_scopeId}>Address Book Details</h5></div><div class="my-auto mt-4 ms-auto mt-lg-0"${_scopeId}><div class="my-auto ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              to: _ctx.route("address-books.create"),
              class: "mb-0 btn bg-gradient-success btn-sm",
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`+  New Contact`);
                } else {
                  return [
                    createTextVNode("+  New Contact")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div><div class="px-0 pb-0 card-body"${_scopeId}><div class="table-responsive"${_scopeId}><table class="table table-striped"${_scopeId}><thead class="thead-light"${_scopeId}><tr${_scopeId}><th${_scopeId}>#</th><th${_scopeId}>Name</th><th${_scopeId}>Phone</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.addressBook.contacts, (contact, index) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(contact.id)}</td><td${_scopeId}>${ssrInterpolate(contact.name)}</td><td${_scopeId}>${ssrInterpolate(contact.phone)}</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4 container-fluid" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-12" }, [
                    createVNode("div", { class: "card" }, [
                      createVNode("div", { class: "pb-0 card-header" }, [
                        createVNode("div", { class: "d-lg-flex" }, [
                          createVNode("div", null, [
                            createVNode("h5", { class: "mb-0" }, "Address Book Details")
                          ]),
                          createVNode("div", { class: "my-auto mt-4 ms-auto mt-lg-0" }, [
                            createVNode("div", { class: "my-auto ms-auto" }, [
                              createVNode(unref(Link), {
                                to: _ctx.route("address-books.create"),
                                class: "mb-0 btn bg-gradient-success btn-sm",
                                target: "_blank"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("+  New Contact")
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "px-0 pb-0 card-body" }, [
                        createVNode("div", { class: "table-responsive" }, [
                          createVNode("table", { class: "table table-striped" }, [
                            createVNode("thead", { class: "thead-light" }, [
                              createVNode("tr", null, [
                                createVNode("th", null, "#"),
                                createVNode("th", null, "Name"),
                                createVNode("th", null, "Phone")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.addressBook.contacts, (contact, index) => {
                                return openBlock(), createBlock("tr", { key: index }, [
                                  createVNode("td", null, toDisplayString(contact.id), 1),
                                  createVNode("td", null, toDisplayString(contact.name), 1),
                                  createVNode("td", null, toDisplayString(contact.phone), 1)
                                ]);
                              }), 128))
                            ])
                          ])
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AddressBook/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
