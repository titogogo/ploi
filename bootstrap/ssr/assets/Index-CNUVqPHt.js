import { inject, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_3, a as _imports_0, b as _imports_2, c as _imports_1 } from "./logo-binance-CFa3W3d9.js";
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
    manualPayments: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    inject("$swal");
    const columns = ["method", "email", "transaction_id", "amount", "status", "user", "created_at"];
    const actions = ["preview"];
    const onPreviewClick = (id) => {
      router.get(route("manual-payments.show", id));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Manual Payments" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="card"${_scopeId}><div class="pb-0 card-header"${_scopeId}><div class="d-lg-flex"${_scopeId}><div${_scopeId}><h5 class="mb-0"${_scopeId}>Manual Payments</h5></div></div></div><div class="px-0 pb-0 card-body"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              data: __props.manualPayments,
              columns,
              checkbox: true,
              actions,
              onOnPreviewClicked: onPreviewClick
            }, {
              method: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex"${_scopeId2}>`);
                  if (data.method === "Revolut") {
                    _push3(`<img class="w-10"${ssrRenderAttr("src", _imports_3)} alt="revolut"${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (data.method === "Paypal") {
                    _push3(`<img class="w-10"${ssrRenderAttr("src", _imports_0)} alt="paypal"${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (data.method === "Skrill") {
                    _push3(`<img class="w-10"${ssrRenderAttr("src", _imports_2)} alt="paypal"${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (data.method === "Binance") {
                    _push3(`<img class="w-10"${ssrRenderAttr("src", _imports_1)} alt="paypal"${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<h6 class="ms-3 my-auto"${_scopeId2}>${ssrInterpolate(data.method)}</h6></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex" }, [
                      data.method === "Revolut" ? (openBlock(), createBlock("img", {
                        key: 0,
                        class: "w-10",
                        src: _imports_3,
                        alt: "revolut"
                      })) : createCommentVNode("", true),
                      data.method === "Paypal" ? (openBlock(), createBlock("img", {
                        key: 1,
                        class: "w-10",
                        src: _imports_0,
                        alt: "paypal"
                      })) : createCommentVNode("", true),
                      data.method === "Skrill" ? (openBlock(), createBlock("img", {
                        key: 2,
                        class: "w-10",
                        src: _imports_2,
                        alt: "paypal"
                      })) : createCommentVNode("", true),
                      data.method === "Binance" ? (openBlock(), createBlock("img", {
                        key: 3,
                        class: "w-10",
                        src: _imports_1,
                        alt: "paypal"
                      })) : createCommentVNode("", true),
                      createVNode("h6", { class: "ms-3 my-auto" }, toDisplayString(data.method), 1)
                    ])
                  ];
                }
              }),
              payment_id: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(data.provider_id)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(data.provider_id), 1)
                  ];
                }
              }),
              status: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (data.status === "pending") {
                    _push3(`<div class="badge bg-info"${_scopeId2}>${ssrInterpolate(data.status)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (data.status === "completed") {
                    _push3(`<div class="badge bg-success"${_scopeId2}>${ssrInterpolate(data.status)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    data.status === "pending" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "badge bg-info"
                    }, toDisplayString(data.status), 1)) : createCommentVNode("", true),
                    data.status === "completed" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "badge bg-success"
                    }, toDisplayString(data.status), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              amount: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(data.amount.formatted)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(data.amount.formatted), 1)
                  ];
                }
              }),
              created_at: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(data.formatted_created_at)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(data.formatted_created_at), 1)
                  ];
                }
              }),
              user: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (data.user) {
                    _push3(`<h6 class="my-auto"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("users.show", data.user_id)
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(data.user.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(data.user.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</h6>`);
                  } else {
                    _push3(`<span${_scopeId2}>-</span>`);
                  }
                } else {
                  return [
                    data.user ? (openBlock(), createBlock("h6", {
                      key: 0,
                      class: "my-auto"
                    }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("users.show", data.user_id)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(data.user.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ])) : (openBlock(), createBlock("span", { key: 1 }, "-"))
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
                            createVNode("h5", { class: "mb-0" }, "Manual Payments")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "px-0 pb-0 card-body" }, [
                        createVNode(_sfc_main$2, {
                          data: __props.manualPayments,
                          columns,
                          checkbox: true,
                          actions,
                          onOnPreviewClicked: onPreviewClick
                        }, {
                          method: withCtx(({ data }) => [
                            createVNode("div", { class: "d-flex" }, [
                              data.method === "Revolut" ? (openBlock(), createBlock("img", {
                                key: 0,
                                class: "w-10",
                                src: _imports_3,
                                alt: "revolut"
                              })) : createCommentVNode("", true),
                              data.method === "Paypal" ? (openBlock(), createBlock("img", {
                                key: 1,
                                class: "w-10",
                                src: _imports_0,
                                alt: "paypal"
                              })) : createCommentVNode("", true),
                              data.method === "Skrill" ? (openBlock(), createBlock("img", {
                                key: 2,
                                class: "w-10",
                                src: _imports_2,
                                alt: "paypal"
                              })) : createCommentVNode("", true),
                              data.method === "Binance" ? (openBlock(), createBlock("img", {
                                key: 3,
                                class: "w-10",
                                src: _imports_1,
                                alt: "paypal"
                              })) : createCommentVNode("", true),
                              createVNode("h6", { class: "ms-3 my-auto" }, toDisplayString(data.method), 1)
                            ])
                          ]),
                          payment_id: withCtx(({ data }) => [
                            createTextVNode(toDisplayString(data.provider_id), 1)
                          ]),
                          status: withCtx(({ data }) => [
                            data.status === "pending" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "badge bg-info"
                            }, toDisplayString(data.status), 1)) : createCommentVNode("", true),
                            data.status === "completed" ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "badge bg-success"
                            }, toDisplayString(data.status), 1)) : createCommentVNode("", true)
                          ]),
                          amount: withCtx(({ data }) => [
                            createTextVNode(toDisplayString(data.amount.formatted), 1)
                          ]),
                          created_at: withCtx(({ data }) => [
                            createTextVNode(toDisplayString(data.formatted_created_at), 1)
                          ]),
                          user: withCtx(({ data }) => [
                            data.user ? (openBlock(), createBlock("h6", {
                              key: 0,
                              class: "my-auto"
                            }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("users.show", data.user_id)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(data.user.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ])) : (openBlock(), createBlock("span", { key: 1 }, "-"))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ManualPayment/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
