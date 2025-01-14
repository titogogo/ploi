import { inject, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
    users: {
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
      form.post(route("user.set-status", id), {
        preserveScroll: true,
        preserveState: true
      });
    };
    const columns = [
      "name",
      "email",
      "balance",
      "active"
    ];
    const actions = [
      "preview"
    ];
    const onPreviewClicked = (id) => {
      router.get(route("users.show", id));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Users" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="card"${_scopeId}><div class="pb-0 card-header"${_scopeId}><div class="d-lg-flex"${_scopeId}><div${_scopeId}><h5 class="mb-0"${_scopeId}>All Users</h5></div><div class="my-auto mt-4 ms-auto mt-lg-0"${_scopeId}></div></div></div><div class="px-0 pb-0 card-body"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              data: __props.users,
              columns,
              actions,
              checkbox: true,
              onOnPreviewClicked: onPreviewClicked
            }, {
              name: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (data.profile_photo_path) {
                    _push3(`<div class="d-flex"${_scopeId2}><img class="w-10 ms-3"${ssrRenderAttr("src", data.profile_photo_path)}${ssrRenderAttr("alt", data.name)}${_scopeId2}></div>`);
                  } else {
                    _push3(`<h6 class="my-auto"${_scopeId2}>${ssrInterpolate(data.name)} `);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("impersonate", { id: data.id }),
                      class: "ms-2"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<i class="fa-solid fa-user-secret"${_scopeId3}></i>`);
                        } else {
                          return [
                            createVNode("i", { class: "fa-solid fa-user-secret" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</h6>`);
                  }
                } else {
                  return [
                    data.profile_photo_path ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "d-flex"
                    }, [
                      createVNode("img", {
                        class: "w-10 ms-3",
                        src: data.profile_photo_path,
                        alt: data.name
                      }, null, 8, ["src", "alt"])
                    ])) : (openBlock(), createBlock("h6", {
                      key: 1,
                      class: "my-auto"
                    }, [
                      createTextVNode(toDisplayString(data.name) + " ", 1),
                      createVNode(unref(Link), {
                        href: _ctx.route("impersonate", { id: data.id }),
                        class: "ms-2"
                      }, {
                        default: withCtx(() => [
                          createVNode("i", { class: "fa-solid fa-user-secret" })
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ]))
                  ];
                }
              }),
              balance: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(data.balance.formatted)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(data.balance.formatted), 1)
                  ];
                }
              }),
              active: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    id: "enabled",
                    name: "enabled",
                    checked: data.enabled,
                    onOnChange: ($event) => setStatus($event, data.id)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      id: "enabled",
                      name: "enabled",
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
                            createVNode("h5", { class: "mb-0" }, "All Users")
                          ]),
                          createVNode("div", { class: "my-auto mt-4 ms-auto mt-lg-0" })
                        ])
                      ]),
                      createVNode("div", { class: "px-0 pb-0 card-body" }, [
                        createVNode(_sfc_main$2, {
                          data: __props.users,
                          columns,
                          actions,
                          checkbox: true,
                          onOnPreviewClicked: onPreviewClicked
                        }, {
                          name: withCtx(({ data }) => [
                            data.profile_photo_path ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "d-flex"
                            }, [
                              createVNode("img", {
                                class: "w-10 ms-3",
                                src: data.profile_photo_path,
                                alt: data.name
                              }, null, 8, ["src", "alt"])
                            ])) : (openBlock(), createBlock("h6", {
                              key: 1,
                              class: "my-auto"
                            }, [
                              createTextVNode(toDisplayString(data.name) + " ", 1),
                              createVNode(unref(Link), {
                                href: _ctx.route("impersonate", { id: data.id }),
                                class: "ms-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fa-solid fa-user-secret" })
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ]))
                          ]),
                          balance: withCtx(({ data }) => [
                            createTextVNode(toDisplayString(data.balance.formatted), 1)
                          ]),
                          active: withCtx(({ data }) => [
                            createVNode(_sfc_main$3, {
                              id: "enabled",
                              name: "enabled",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
