import { onMounted, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import { i as initDatatable } from "./simple-datatable-x_kI3Qph.js";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
import "simple-datatables";
const _sfc_main = {
  __name: "History",
  __ssrInlineRender: true,
  props: {
    transactions: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    onMounted(() => {
      initDatatable("table");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "History" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="card"${_scopeId}><div class="pb-0 card-header"${_scopeId}><div class="d-lg-flex"${_scopeId}><div${_scopeId}><h5 class="mb-0"${_scopeId}>All Transactions</h5></div></div></div><div class="px-0 pb-0 card-body"${_scopeId}><div class="table-responsive"${_scopeId}><table class="table table-striped"${_scopeId}><thead class="thead-light"${_scopeId}><tr${_scopeId}><th${_scopeId}></th><th${_scopeId}>From</th><th${_scopeId}>Amount</th><th${_scopeId}>Date</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.transactions, (transaction, i) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>`);
              if (transaction.direction === "out") {
                _push2(`<button class="p-3 mb-0 btn btn-icon-only btn-rounded me-3 btn-sm d-flex align-items-center justify-content-center btn-outline-danger"${_scopeId}><i class="fas fa-arrow-down" aria-hidden="true"${_scopeId}></i></button>`);
              } else {
                _push2(`<!---->`);
              }
              if (transaction.direction === "in") {
                _push2(`<button class="p-3 mb-0 btn btn-icon-only btn-rounded me-3 btn-sm d-flex align-items-center justify-content-center btn-outline-success"${_scopeId}><i class="fas fa-arrow-up" aria-hidden="true"${_scopeId}></i></button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td><td${_scopeId}>`);
              if (transaction.type === "external") {
                _push2(`<!--[-->${ssrInterpolate(transaction.payment_method)}<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              if (transaction.type === "internal") {
                _push2(`<!--[-->${ssrInterpolate(transaction.from_user.name)}<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td><td${_scopeId}>`);
              if (transaction.direction === "in") {
                _push2(`<div class="text-sm d-flex align-items-center font-weight-bold ms-auto text-success"${_scopeId}>+ ${ssrInterpolate(transaction.amount.formatted)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (transaction.direction === "out") {
                _push2(`<div class="text-sm d-flex align-items-center font-weight-bold ms-auto text-danger"${_scopeId}>- ${ssrInterpolate(transaction.amount.formatted)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td><td class="text-sm"${_scopeId}>${ssrInterpolate(transaction.formatted_created_at)}</td></tr>`);
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
                            createVNode("h5", { class: "mb-0" }, "All Transactions")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "px-0 pb-0 card-body" }, [
                        createVNode("div", { class: "table-responsive" }, [
                          createVNode("table", { class: "table table-striped" }, [
                            createVNode("thead", { class: "thead-light" }, [
                              createVNode("tr", null, [
                                createVNode("th"),
                                createVNode("th", null, "From"),
                                createVNode("th", null, "Amount"),
                                createVNode("th", null, "Date")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.transactions, (transaction, i) => {
                                return openBlock(), createBlock("tr", { key: i }, [
                                  createVNode("td", null, [
                                    transaction.direction === "out" ? (openBlock(), createBlock("button", {
                                      key: 0,
                                      class: "p-3 mb-0 btn btn-icon-only btn-rounded me-3 btn-sm d-flex align-items-center justify-content-center btn-outline-danger"
                                    }, [
                                      createVNode("i", {
                                        class: "fas fa-arrow-down",
                                        "aria-hidden": "true"
                                      })
                                    ])) : createCommentVNode("", true),
                                    transaction.direction === "in" ? (openBlock(), createBlock("button", {
                                      key: 1,
                                      class: "p-3 mb-0 btn btn-icon-only btn-rounded me-3 btn-sm d-flex align-items-center justify-content-center btn-outline-success"
                                    }, [
                                      createVNode("i", {
                                        class: "fas fa-arrow-up",
                                        "aria-hidden": "true"
                                      })
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  createVNode("td", null, [
                                    transaction.type === "external" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createTextVNode(toDisplayString(transaction.payment_method), 1)
                                    ], 64)) : createCommentVNode("", true),
                                    transaction.type === "internal" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      createTextVNode(toDisplayString(transaction.from_user.name), 1)
                                    ], 64)) : createCommentVNode("", true)
                                  ]),
                                  createVNode("td", null, [
                                    transaction.direction === "in" ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "text-sm d-flex align-items-center font-weight-bold ms-auto text-success"
                                    }, "+ " + toDisplayString(transaction.amount.formatted), 1)) : createCommentVNode("", true),
                                    transaction.direction === "out" ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "text-sm d-flex align-items-center font-weight-bold ms-auto text-danger"
                                    }, "- " + toDisplayString(transaction.amount.formatted), 1)) : createCommentVNode("", true)
                                  ]),
                                  createVNode("td", { class: "text-sm" }, toDisplayString(transaction.formatted_created_at), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Fund/History.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
