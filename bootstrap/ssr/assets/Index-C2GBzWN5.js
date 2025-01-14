import { mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import "simple-datatables";
import { _ as _sfc_main$2 } from "./Datatable-CPLQOAGE.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    messages: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const columns = ["sender_id", "text", "gateway", "status", "recipients_count"];
    const actions = [
      "preview"
    ];
    const onPreviewClicked = (id) => {
      router.get(route("messages.responses", id));
    };
    const onRetryClicked = (id) => {
      router.post(route("messages.retry", id));
    };
    const onStopClicked = (id) => {
      router.post(route("messages.stop", id));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "History" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="card"${_scopeId}><div class="pb-0 card-header"${_scopeId}><div class="d-lg-flex"${_scopeId}><div${_scopeId}><h5 class="mb-0"${_scopeId}>All Scheduled Messages</h5></div><div class="my-auto mt-4 ms-auto mt-lg-0"${_scopeId}><div class="my-auto ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "mb-0 btn bg-gradient-success btn-sm",
              href: _ctx.route("messages.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`+  New Message`);
                } else {
                  return [
                    createTextVNode("+  New Message")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div><div class="px-0 pb-0 card-body"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              data: __props.messages,
              columns,
              actions,
              checkbox: true,
              onOnPreviewClicked: onPreviewClicked
            }, {
              gateway: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<h6 class="my-auto"${_scopeId2}>${ssrInterpolate((_a = data.gateway) == null ? void 0 : _a.name)}</h6>`);
                } else {
                  return [
                    createVNode("h6", { class: "my-auto" }, toDisplayString((_b = data.gateway) == null ? void 0 : _b.name), 1)
                  ];
                }
              }),
              status: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (data.status === "error") {
                    _push3(`<div class="badge bg-danger"${_scopeId2}>${ssrInterpolate(data.status)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (data.status === "pending") {
                    _push3(`<div class="badge bg-info"${_scopeId2}>${ssrInterpolate(data.status)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (data.status === "retrying") {
                    _push3(`<div class="badge bg-warning"${_scopeId2}>${ssrInterpolate(data.status)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (data.status === "queued") {
                    _push3(`<div class="badge bg-primary"${_scopeId2}>${ssrInterpolate(data.status)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (data.status === "completed_with_errors") {
                    _push3(`<div class="badge bg-danger"${_scopeId2}> completed with errors </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (data.status === "completed") {
                    _push3(`<div class="badge bg-success"${_scopeId2}>${ssrInterpolate(data.status)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (data.status === "stopping") {
                    _push3(`<div class="badge bg-warning"${_scopeId2}>${ssrInterpolate(data.status)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (data.status === "stopped") {
                    _push3(`<div class="badge bg-info"${_scopeId2}>${ssrInterpolate(data.status)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    data.status === "error" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "badge bg-danger"
                    }, toDisplayString(data.status), 1)) : createCommentVNode("", true),
                    data.status === "pending" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "badge bg-info"
                    }, toDisplayString(data.status), 1)) : createCommentVNode("", true),
                    data.status === "retrying" ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "badge bg-warning"
                    }, toDisplayString(data.status), 1)) : createCommentVNode("", true),
                    data.status === "queued" ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "badge bg-primary"
                    }, toDisplayString(data.status), 1)) : createCommentVNode("", true),
                    data.status === "completed_with_errors" ? (openBlock(), createBlock("div", {
                      key: 4,
                      class: "badge bg-danger"
                    }, " completed with errors ")) : createCommentVNode("", true),
                    data.status === "completed" ? (openBlock(), createBlock("div", {
                      key: 5,
                      class: "badge bg-success"
                    }, toDisplayString(data.status), 1)) : createCommentVNode("", true),
                    data.status === "stopping" ? (openBlock(), createBlock("div", {
                      key: 6,
                      class: "badge bg-warning"
                    }, toDisplayString(data.status), 1)) : createCommentVNode("", true),
                    data.status === "stopped" ? (openBlock(), createBlock("div", {
                      key: 7,
                      class: "badge bg-info"
                    }, toDisplayString(data.status), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              actions: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Retry"${_scopeId2}><i class="fas fa-rotate text-secondary" aria-hidden="true"${_scopeId2}></i></a><a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Preview"${_scopeId2}><i class="fas fa-eye text-secondary" aria-hidden="true"${_scopeId2}></i></a><a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Stop"${_scopeId2}><i class="fas fa-circle-stop text-secondary" aria-hidden="true"${_scopeId2}></i></a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: "javascript:;",
                      onClick: ($event) => onRetryClicked(data.id),
                      "data-bs-toggle": "tooltip",
                      "data-bs-original-title": "Retry"
                    }, [
                      createVNode("i", {
                        class: "fas fa-rotate text-secondary",
                        "aria-hidden": "true"
                      })
                    ], 8, ["onClick"]),
                    createVNode("a", {
                      href: "javascript:;",
                      class: "mx-3",
                      onClick: ($event) => onPreviewClicked(data.id),
                      "data-bs-toggle": "tooltip",
                      "data-bs-original-title": "Preview"
                    }, [
                      createVNode("i", {
                        class: "fas fa-eye text-secondary",
                        "aria-hidden": "true"
                      })
                    ], 8, ["onClick"]),
                    createVNode("a", {
                      href: "javascript:;",
                      onClick: ($event) => onStopClicked(data.id),
                      "data-bs-toggle": "tooltip",
                      "data-bs-original-title": "Stop"
                    }, [
                      createVNode("i", {
                        class: "fas fa-circle-stop text-secondary",
                        "aria-hidden": "true"
                      })
                    ], 8, ["onClick"])
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
                            createVNode("h5", { class: "mb-0" }, "All Scheduled Messages")
                          ]),
                          createVNode("div", { class: "my-auto mt-4 ms-auto mt-lg-0" }, [
                            createVNode("div", { class: "my-auto ms-auto" }, [
                              createVNode(unref(Link), {
                                class: "mb-0 btn bg-gradient-success btn-sm",
                                href: _ctx.route("messages.create")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("+  New Message")
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "px-0 pb-0 card-body" }, [
                        createVNode(_sfc_main$2, {
                          data: __props.messages,
                          columns,
                          actions,
                          checkbox: true,
                          onOnPreviewClicked: onPreviewClicked
                        }, {
                          gateway: withCtx(({ data }) => {
                            var _a;
                            return [
                              createVNode("h6", { class: "my-auto" }, toDisplayString((_a = data.gateway) == null ? void 0 : _a.name), 1)
                            ];
                          }),
                          status: withCtx(({ data }) => [
                            data.status === "error" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "badge bg-danger"
                            }, toDisplayString(data.status), 1)) : createCommentVNode("", true),
                            data.status === "pending" ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "badge bg-info"
                            }, toDisplayString(data.status), 1)) : createCommentVNode("", true),
                            data.status === "retrying" ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "badge bg-warning"
                            }, toDisplayString(data.status), 1)) : createCommentVNode("", true),
                            data.status === "queued" ? (openBlock(), createBlock("div", {
                              key: 3,
                              class: "badge bg-primary"
                            }, toDisplayString(data.status), 1)) : createCommentVNode("", true),
                            data.status === "completed_with_errors" ? (openBlock(), createBlock("div", {
                              key: 4,
                              class: "badge bg-danger"
                            }, " completed with errors ")) : createCommentVNode("", true),
                            data.status === "completed" ? (openBlock(), createBlock("div", {
                              key: 5,
                              class: "badge bg-success"
                            }, toDisplayString(data.status), 1)) : createCommentVNode("", true),
                            data.status === "stopping" ? (openBlock(), createBlock("div", {
                              key: 6,
                              class: "badge bg-warning"
                            }, toDisplayString(data.status), 1)) : createCommentVNode("", true),
                            data.status === "stopped" ? (openBlock(), createBlock("div", {
                              key: 7,
                              class: "badge bg-info"
                            }, toDisplayString(data.status), 1)) : createCommentVNode("", true)
                          ]),
                          actions: withCtx(({ data }) => [
                            createVNode("a", {
                              href: "javascript:;",
                              onClick: ($event) => onRetryClicked(data.id),
                              "data-bs-toggle": "tooltip",
                              "data-bs-original-title": "Retry"
                            }, [
                              createVNode("i", {
                                class: "fas fa-rotate text-secondary",
                                "aria-hidden": "true"
                              })
                            ], 8, ["onClick"]),
                            createVNode("a", {
                              href: "javascript:;",
                              class: "mx-3",
                              onClick: ($event) => onPreviewClicked(data.id),
                              "data-bs-toggle": "tooltip",
                              "data-bs-original-title": "Preview"
                            }, [
                              createVNode("i", {
                                class: "fas fa-eye text-secondary",
                                "aria-hidden": "true"
                              })
                            ], 8, ["onClick"]),
                            createVNode("a", {
                              href: "javascript:;",
                              onClick: ($event) => onStopClicked(data.id),
                              "data-bs-toggle": "tooltip",
                              "data-bs-original-title": "Stop"
                            }, [
                              createVNode("i", {
                                class: "fas fa-circle-stop text-secondary",
                                "aria-hidden": "true"
                              })
                            ], 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Messages/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
