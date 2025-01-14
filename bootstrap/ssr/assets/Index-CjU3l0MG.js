import { inject, mergeProps, withCtx, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, createVNode, createCommentVNode, useSSRContext } from "vue";
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
    rates: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    inject("$swal");
    const columns = [
      "country_name",
      "country_code",
      "operator_prefix",
      "type",
      "rate"
    ];
    const actions = [
      "delete"
    ];
    const onDeleteClicked = (id) => {
      router.delete(route("coverage.destroy", id), { preserveScroll: true });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "SMS Coverage & Pricing" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="card"${_scopeId}><div class="pb-0 card-header"${_scopeId}><div class="d-lg-flex"${_scopeId}><div${_scopeId}><h5 class="mb-0"${_scopeId}>SMS Coverage &amp; Pricing</h5></div><div class="my-auto mt-4 ms-auto mt-lg-0"${_scopeId}><div class="my-auto ms-auto"${_scopeId}>`);
            if (_ctx.$page.props.auth.user.admin) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("coverage.create"),
                class: "mb-0 btn bg-gradient-success btn-sm"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`+  Add Rating`);
                  } else {
                    return [
                      createTextVNode("+  Add Rating")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div><div class="px-0 pb-0 card-body"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              data: __props.rates,
              columns,
              actions,
              checkbox: true,
              onOnDeleteClicked: onDeleteClicked
            }, {
              rate: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(data.rate.formatted)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(data.rate.formatted), 1)
                  ];
                }
              }),
              operator_prefix: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (data.operator_prefix === 0) {
                    _push3(`<!--[--> Any <!--]-->`);
                  } else {
                    _push3(`<!--[-->${ssrInterpolate(data.operator_prefix)}<!--]-->`);
                  }
                } else {
                  return [
                    data.operator_prefix === 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode(" Any ")
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(data.operator_prefix), 1)
                    ], 64))
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
                            createVNode("h5", { class: "mb-0" }, "SMS Coverage & Pricing")
                          ]),
                          createVNode("div", { class: "my-auto mt-4 ms-auto mt-lg-0" }, [
                            createVNode("div", { class: "my-auto ms-auto" }, [
                              _ctx.$page.props.auth.user.admin ? (openBlock(), createBlock(unref(Link), {
                                key: 0,
                                href: _ctx.route("coverage.create"),
                                class: "mb-0 btn bg-gradient-success btn-sm"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("+  Add Rating")
                                ]),
                                _: 1
                              }, 8, ["href"])) : createCommentVNode("", true)
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "px-0 pb-0 card-body" }, [
                        createVNode(_sfc_main$2, {
                          data: __props.rates,
                          columns,
                          actions,
                          checkbox: true,
                          onOnDeleteClicked: onDeleteClicked
                        }, {
                          rate: withCtx(({ data }) => [
                            createTextVNode(toDisplayString(data.rate.formatted), 1)
                          ]),
                          operator_prefix: withCtx(({ data }) => [
                            data.operator_prefix === 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(" Any ")
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(data.operator_prefix), 1)
                            ], 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Coverage/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
