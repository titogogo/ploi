import { inject, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import { _ as _sfc_main$2 } from "./Datatable-CPLQOAGE.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
const _sfc_main = {
  __name: "Responses",
  __ssrInlineRender: true,
  props: {
    responses: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    inject("$swal");
    const columns = ["recipient", "status"];
    const actions = ["retry"];
    const onRetryClicked = (id) => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Dispute Logs" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="card"${_scopeId}><div class="pb-0 card-header"${_scopeId}><div class="d-lg-flex"${_scopeId}><div${_scopeId}><h5 class="mb-0"${_scopeId}>Dispute Logs</h5></div></div></div><div class="px-0 pb-0 card-body"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              data: __props.responses,
              columns,
              checkbox: true,
              actions
            }, {
              recipient: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`${ssrInterpolate(((_a = data.recipient) == null ? void 0 : _a.phone) ?? "-")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(((_b = data.recipient) == null ? void 0 : _b.phone) ?? "-"), 1)
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
                  if (data.status === "sent") {
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
                    data.status === "sent" ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "badge bg-info"
                    }, toDisplayString(data.status), 1)) : createCommentVNode("", true)
                  ];
                }
              }),
              actions: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Retry"${_scopeId2}><i class="fas fa-rotate text-secondary" aria-hidden="true"${_scopeId2}></i></a>`);
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
                            createVNode("h5", { class: "mb-0" }, "Dispute Logs")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "px-0 pb-0 card-body" }, [
                        createVNode(_sfc_main$2, {
                          data: __props.responses,
                          columns,
                          checkbox: true,
                          actions
                        }, {
                          recipient: withCtx(({ data }) => {
                            var _a;
                            return [
                              createTextVNode(toDisplayString(((_a = data.recipient) == null ? void 0 : _a.phone) ?? "-"), 1)
                            ];
                          }),
                          status: withCtx(({ data }) => [
                            data.status === "error" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "badge bg-danger"
                            }, toDisplayString(data.status), 1)) : createCommentVNode("", true),
                            data.status === "sent" ? (openBlock(), createBlock("div", {
                              key: 1,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Messages/Responses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
