import { inject, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useForm, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import { _ as _sfc_main$3 } from "./SoftSwitch-DKrdzP3l.js";
import { _ as _sfc_main$2 } from "./Datatable-CPLQOAGE.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    gateways: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    inject("$swal");
    const form = useForm({
      enabled: null
    });
    const setStatus = (checked, id) => {
      form.enabled = checked;
      form.post(route("change-gateway-status", id), {
        preserveScroll: true,
        preserveState: true
      });
    };
    const columns = [
      "id",
      "name",
      "type",
      "limit",
      "status",
      "webhook_url"
    ];
    const actions = [
      "delete",
      "edit"
    ];
    const onPreviewClicked = (id) => {
      router.get(route("gateway.show", id), { preserveScroll: true });
    };
    const onEditClicked = (id) => {
      router.get(route("gateway.edit", id), { preserveScroll: true });
    };
    const onDeleteClicked = (id) => {
      router.delete(route("gateway.delete", id), { preserveScroll: true });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "History" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="card"${_scopeId}><div class="pb-0 card-header"${_scopeId}><div class="d-lg-flex"${_scopeId}><div${_scopeId}><h5 class="mb-0"${_scopeId}>All Gateways</h5></div><div class="my-auto mt-4 ms-auto mt-lg-0"${_scopeId}><div class="my-auto ms-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("gateway.create"),
              class: "mb-0 btn bg-gradient-success btn-sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`+  New Gateway`);
                } else {
                  return [
                    createTextVNode("+  New Gateway")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div><div class="px-0 pb-0 card-body"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              data: __props.gateways,
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
              type: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="badge bg-success"${_scopeId2}>${ssrInterpolate(data.type)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "badge bg-success" }, toDisplayString(data.type), 1)
                  ];
                }
              }),
              limit: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-danger"${_scopeId2}>${ssrInterpolate(data.limit)}</span> Per <span class="text-info"${_scopeId2}>${ssrInterpolate(data.delay)} ${ssrInterpolate(data.delay_type)}</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-danger" }, toDisplayString(data.limit), 1),
                    createTextVNode(" Per "),
                    createVNode("span", { class: "text-info" }, toDisplayString(data.delay) + " " + toDisplayString(data.delay_type), 1)
                  ];
                }
              }),
              status: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    id: "status",
                    name: "status",
                    checked: data.enabled,
                    onOnChange: ($event) => setStatus($event, data.id)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      id: "status",
                      name: "status",
                      checked: data.enabled,
                      onOnChange: ($event) => setStatus($event, data.id)
                    }, null, 8, ["checked", "onOnChange"])
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
                            createVNode("h5", { class: "mb-0" }, "All Gateways")
                          ]),
                          createVNode("div", { class: "my-auto mt-4 ms-auto mt-lg-0" }, [
                            createVNode("div", { class: "my-auto ms-auto" }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("gateway.create"),
                                class: "mb-0 btn bg-gradient-success btn-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("+  New Gateway")
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "px-0 pb-0 card-body" }, [
                        createVNode(_sfc_main$2, {
                          data: __props.gateways,
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
                          type: withCtx(({ data }) => [
                            createVNode("span", { class: "badge bg-success" }, toDisplayString(data.type), 1)
                          ]),
                          limit: withCtx(({ data }) => [
                            createVNode("span", { class: "text-danger" }, toDisplayString(data.limit), 1),
                            createTextVNode(" Per "),
                            createVNode("span", { class: "text-info" }, toDisplayString(data.delay) + " " + toDisplayString(data.delay_type), 1)
                          ]),
                          status: withCtx(({ data }) => [
                            createVNode(_sfc_main$3, {
                              id: "status",
                              name: "status",
                              checked: data.enabled,
                              onOnChange: ($event) => setStatus($event, data.id)
                            }, null, 8, ["checked", "onOnChange"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Gateway/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
