import { inject, mergeProps, withCtx, unref, createVNode, withModifiers, toDisplayString, withDirectives, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { a as _imports_0, c as _imports_1, b as _imports_2, _ as _imports_3 } from "./logo-binance-CFa3W3d9.js";
import { _ as _sfc_main$1, D as Document } from "./AppLayout-DAr8Wy3D.js";
import "./SoftInput-BWS2dL-g.js";
import "./SoftSwitch-DKrdzP3l.js";
import { useForm } from "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    settings: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const swal = inject("$swal");
    const { settings } = __props;
    const form = useForm({
      paypal: settings.paypal,
      skrill: settings.skrill,
      revolut: settings.paypal,
      binance: settings.binance
    });
    const submit = () => {
      form.post(route("settings.store"), {
        onSuccess: () => {
          swal.fire({
            title: "Saved!",
            text: "Settings is saved successfully!",
            icon: "success"
          });
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Profile" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container-fluid mt-4"${_scopeId}><div class="row mb-5"${_scopeId}><div class="col-lg-3"${_scopeId}><div class="card position-sticky top-1 mt-4"${_scopeId}><ul class="nav flex-column bg-white border-radius-lg p-3"${_scopeId}><li class="nav-item"${_scopeId}><a class="nav-link text-body" data-scroll="" href="#payment"${_scopeId}><div class="icon me-2"${_scopeId}>`);
            _push2(ssrRenderComponent(Document, {
              class: "text-dark mb-1",
              width: "16px",
              height: "16px"
            }, null, _parent2, _scopeId));
            _push2(`</div><span class="text-sm"${_scopeId}>Payments</span></a></li></ul></div></div><div class="col-lg-9 mt-lg-0 mt-4"${_scopeId}><div id="payment" class="card mt-4"${_scopeId}><div class="card-header pb-3"${_scopeId}><h5${_scopeId}>Payments</h5><p class="text-sm"${_scopeId}> Enable or disable payment method </p></div><div class="card-body pt-0"${_scopeId}><form role="form"${_scopeId}><div class="d-flex"${_scopeId}><img class="width-48-px"${ssrRenderAttr("src", _imports_0)} alt="logo_paypal"${_scopeId}><div class="my-auto ms-3"${_scopeId}><div class="h-100"${_scopeId}><h5 class="mb-0"${_scopeId}>Paypal</h5><p class="mb-0 text-sm"${_scopeId}></p></div></div><p class="text-sm text-secondary ms-auto me-3 my-auto"${_scopeId}>${ssrInterpolate(unref(form).paypal ? "Enabled" : "Disabled")}</p><div class="form-check form-switch my-auto"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).paypal) ? ssrLooseContain(unref(form).paypal, null) : unref(form).paypal) ? " checked" : ""} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault2"${_scopeId}></div></div><hr class="horizontal dark"${_scopeId}><div class="d-flex"${_scopeId}><img class="width-48-px"${ssrRenderAttr("src", _imports_1)} alt="logo_binance"${_scopeId}><div class="my-auto ms-3"${_scopeId}><div class="h-100"${_scopeId}><h5 class="mb-0"${_scopeId}>Binance</h5><p class="mb-0 text-sm"${_scopeId}></p></div></div><p class="text-sm text-secondary ms-auto me-3 my-auto"${_scopeId}>${ssrInterpolate(unref(form).binance ? "Enabled" : "Disabled")}</p><div class="form-check form-switch my-auto"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).binance) ? ssrLooseContain(unref(form).binance, null) : unref(form).binance) ? " checked" : ""} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault2"${_scopeId}></div></div><hr class="horizontal dark"${_scopeId}><div class="d-flex"${_scopeId}><img class="width-48-px"${ssrRenderAttr("src", _imports_2)} alt="logo_skrill"${_scopeId}><div class="my-auto ms-3"${_scopeId}><div class="h-100"${_scopeId}><h5 class="mb-0"${_scopeId}>Skrill</h5><p class="mb-0 text-sm"${_scopeId}></p></div></div><p class="text-sm text-secondary ms-auto me-3 my-auto"${_scopeId}>${ssrInterpolate(unref(form).skrill ? "Enabled" : "Disabled")}</p><div class="form-check form-switch my-auto"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).skrill) ? ssrLooseContain(unref(form).skrill, null) : unref(form).skrill) ? " checked" : ""} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault2"${_scopeId}></div></div><hr class="horizontal dark"${_scopeId}><div class="d-flex"${_scopeId}><img class="width-48-px"${ssrRenderAttr("src", _imports_3)} alt="logo_skrill"${_scopeId}><div class="my-auto ms-3"${_scopeId}><div class="h-100"${_scopeId}><h5 class="mb-0"${_scopeId}>Revolut</h5><p class="mb-0 text-sm"${_scopeId}></p></div></div><p class="text-sm text-secondary ms-auto me-3 my-auto"${_scopeId}>${ssrInterpolate(unref(form).revolut ? "Enabled" : "Disabled")}</p><div class="form-check form-switch my-auto"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).revolut) ? ssrLooseContain(unref(form).revolut, null) : unref(form).revolut) ? " checked" : ""} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault2"${_scopeId}></div></div><hr class="horizontal dark"${_scopeId}><button class="btn bg-gradient-dark btn-sm null null float-end mt-4 mb-0"${_scopeId}>Save</button></form></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container-fluid mt-4" }, [
                createVNode("div", { class: "row mb-5" }, [
                  createVNode("div", { class: "col-lg-3" }, [
                    createVNode("div", { class: "card position-sticky top-1 mt-4" }, [
                      createVNode("ul", { class: "nav flex-column bg-white border-radius-lg p-3" }, [
                        createVNode("li", { class: "nav-item" }, [
                          createVNode("a", {
                            class: "nav-link text-body",
                            "data-scroll": "",
                            href: "#payment"
                          }, [
                            createVNode("div", { class: "icon me-2" }, [
                              createVNode(Document, {
                                class: "text-dark mb-1",
                                width: "16px",
                                height: "16px"
                              })
                            ]),
                            createVNode("span", { class: "text-sm" }, "Payments")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-lg-9 mt-lg-0 mt-4" }, [
                    createVNode("div", {
                      id: "payment",
                      class: "card mt-4"
                    }, [
                      createVNode("div", { class: "card-header pb-3" }, [
                        createVNode("h5", null, "Payments"),
                        createVNode("p", { class: "text-sm" }, " Enable or disable payment method ")
                      ]),
                      createVNode("div", { class: "card-body pt-0" }, [
                        createVNode("form", {
                          role: "form",
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, [
                          createVNode("div", { class: "d-flex" }, [
                            createVNode("img", {
                              class: "width-48-px",
                              src: _imports_0,
                              alt: "logo_paypal"
                            }),
                            createVNode("div", { class: "my-auto ms-3" }, [
                              createVNode("div", { class: "h-100" }, [
                                createVNode("h5", { class: "mb-0" }, "Paypal"),
                                createVNode("p", { class: "mb-0 text-sm" })
                              ])
                            ]),
                            createVNode("p", { class: "text-sm text-secondary ms-auto me-3 my-auto" }, toDisplayString(unref(form).paypal ? "Enabled" : "Disabled"), 1),
                            createVNode("div", { class: "form-check form-switch my-auto" }, [
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).paypal = $event,
                                class: "form-check-input",
                                type: "checkbox",
                                id: "flexSwitchCheckDefault2"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(form).paypal]
                              ])
                            ])
                          ]),
                          createVNode("hr", { class: "horizontal dark" }),
                          createVNode("div", { class: "d-flex" }, [
                            createVNode("img", {
                              class: "width-48-px",
                              src: _imports_1,
                              alt: "logo_binance"
                            }),
                            createVNode("div", { class: "my-auto ms-3" }, [
                              createVNode("div", { class: "h-100" }, [
                                createVNode("h5", { class: "mb-0" }, "Binance"),
                                createVNode("p", { class: "mb-0 text-sm" })
                              ])
                            ]),
                            createVNode("p", { class: "text-sm text-secondary ms-auto me-3 my-auto" }, toDisplayString(unref(form).binance ? "Enabled" : "Disabled"), 1),
                            createVNode("div", { class: "form-check form-switch my-auto" }, [
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).binance = $event,
                                class: "form-check-input",
                                type: "checkbox",
                                id: "flexSwitchCheckDefault2"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(form).binance]
                              ])
                            ])
                          ]),
                          createVNode("hr", { class: "horizontal dark" }),
                          createVNode("div", { class: "d-flex" }, [
                            createVNode("img", {
                              class: "width-48-px",
                              src: _imports_2,
                              alt: "logo_skrill"
                            }),
                            createVNode("div", { class: "my-auto ms-3" }, [
                              createVNode("div", { class: "h-100" }, [
                                createVNode("h5", { class: "mb-0" }, "Skrill"),
                                createVNode("p", { class: "mb-0 text-sm" })
                              ])
                            ]),
                            createVNode("p", { class: "text-sm text-secondary ms-auto me-3 my-auto" }, toDisplayString(unref(form).skrill ? "Enabled" : "Disabled"), 1),
                            createVNode("div", { class: "form-check form-switch my-auto" }, [
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).skrill = $event,
                                class: "form-check-input",
                                type: "checkbox",
                                id: "flexSwitchCheckDefault2"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(form).skrill]
                              ])
                            ])
                          ]),
                          createVNode("hr", { class: "horizontal dark" }),
                          createVNode("div", { class: "d-flex" }, [
                            createVNode("img", {
                              class: "width-48-px",
                              src: _imports_3,
                              alt: "logo_skrill"
                            }),
                            createVNode("div", { class: "my-auto ms-3" }, [
                              createVNode("div", { class: "h-100" }, [
                                createVNode("h5", { class: "mb-0" }, "Revolut"),
                                createVNode("p", { class: "mb-0 text-sm" })
                              ])
                            ]),
                            createVNode("p", { class: "text-sm text-secondary ms-auto me-3 my-auto" }, toDisplayString(unref(form).revolut ? "Enabled" : "Disabled"), 1),
                            createVNode("div", { class: "form-check form-switch my-auto" }, [
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).revolut = $event,
                                class: "form-check-input",
                                type: "checkbox",
                                id: "flexSwitchCheckDefault2"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(form).revolut]
                              ])
                            ])
                          ]),
                          createVNode("hr", { class: "horizontal dark" }),
                          createVNode("button", { class: "btn bg-gradient-dark btn-sm null null float-end mt-4 mb-0" }, "Save")
                        ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
