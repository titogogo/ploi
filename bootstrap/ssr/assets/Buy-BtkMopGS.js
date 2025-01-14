import { onMounted, mergeProps, withCtx, unref, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, toDisplayString, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_3, a as _imports_0, b as _imports_2, c as _imports_1 } from "./logo-binance-CFa3W3d9.js";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import { i as initChoices } from "./choices-BP0jR0_K.js";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./InputError-BGJo5hu6.js";
import "./SoftInput-BWS2dL-g.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
import "choices.js";
const _sfc_main = {
  __name: "Buy",
  __ssrInlineRender: true,
  props: {
    paymentMethods: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const { paymentMethods } = __props;
    const form = useForm({
      amount: "",
      payment_method: paymentMethods[0]
    });
    onMounted(() => {
      initChoices("choices-payment-methods");
    });
    const submit = () => {
      form.post(route("fund.store"), {
        // onFinish: () => form.reset(),
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Buy Credits" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="mx-auto col-lg-9 col-12"${_scopeId}><div class="mt-4 card card-body"${_scopeId}><form role="form"${_scopeId}><h6 class="mb-0"${_scopeId}>Buy Credits</h6><p class="mb-0 text-sm"${_scopeId}>Add funds to your account</p><hr class="my-3 horizontal dark"${_scopeId}><label for="amount" class="form-label"${_scopeId}>Amount</label><div class="input-group"${_scopeId}><span class="input-group-text"${_scopeId}>$</span><input${ssrRenderAttr("value", unref(form).amount)} type="number" class="form-control" aria-label="Amount (to the nearest dollar)"${_scopeId}><span class="input-group-text"${_scopeId}>.00</span></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.amount
            }, null, _parent2, _scopeId));
            _push2(`<label class="mt-4 form-label"${_scopeId}>Payment Method</label><select class="form-control" name="choices-payment-methods" id="choices-payment-methods" placeholder="Departure"${_scopeId}><!--[-->`);
            ssrRenderList(__props.paymentMethods, (method, i) => {
              _push2(`<option${ssrRenderAttr("value", method)}${_scopeId}>`);
              if (method === "Revolut") {
                _push2(`<img class="w-2"${ssrRenderAttr("src", _imports_3)} alt="revolut"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (method === "Paypal") {
                _push2(`<img class="w-2"${ssrRenderAttr("src", _imports_0)} alt="revolut"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (method === "Skrill") {
                _push2(`<img class="w-2"${ssrRenderAttr("src", _imports_2)} alt="revolut"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (method === "Binance") {
                _push2(`<img class="w-2"${ssrRenderAttr("src", _imports_1)} alt="revolut"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(method)}</option>`);
            });
            _push2(`<!--]--></select>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              message: unref(form).errors.payment_method
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-4 d-flex justify-content-end"${_scopeId}><button type="submit" name="button" class="m-0 btn bg-gradient-success ms-2"${_scopeId}> Proceed </button></div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4 container-fluid" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "mx-auto col-lg-9 col-12" }, [
                    createVNode("div", { class: "mt-4 card card-body" }, [
                      createVNode("form", {
                        role: "form",
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode("h6", { class: "mb-0" }, "Buy Credits"),
                        createVNode("p", { class: "mb-0 text-sm" }, "Add funds to your account"),
                        createVNode("hr", { class: "my-3 horizontal dark" }),
                        createVNode("label", {
                          for: "amount",
                          class: "form-label"
                        }, "Amount"),
                        createVNode("div", { class: "input-group" }, [
                          createVNode("span", { class: "input-group-text" }, "$"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                            type: "number",
                            class: "form-control",
                            "aria-label": "Amount (to the nearest dollar)"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).amount]
                          ]),
                          createVNode("span", { class: "input-group-text" }, ".00")
                        ]),
                        createVNode(_sfc_main$2, {
                          class: "mt-2",
                          message: unref(form).errors.amount
                        }, null, 8, ["message"]),
                        createVNode("label", { class: "mt-4 form-label" }, "Payment Method"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => unref(form).payment_method = $event,
                          class: "form-control",
                          name: "choices-payment-methods",
                          id: "choices-payment-methods",
                          placeholder: "Departure"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.paymentMethods, (method, i) => {
                            return openBlock(), createBlock("option", {
                              value: method,
                              key: i
                            }, [
                              method === "Revolut" ? (openBlock(), createBlock("img", {
                                key: 0,
                                class: "w-2",
                                src: _imports_3,
                                alt: "revolut"
                              })) : createCommentVNode("", true),
                              method === "Paypal" ? (openBlock(), createBlock("img", {
                                key: 1,
                                class: "w-2",
                                src: _imports_0,
                                alt: "revolut"
                              })) : createCommentVNode("", true),
                              method === "Skrill" ? (openBlock(), createBlock("img", {
                                key: 2,
                                class: "w-2",
                                src: _imports_2,
                                alt: "revolut"
                              })) : createCommentVNode("", true),
                              method === "Binance" ? (openBlock(), createBlock("img", {
                                key: 3,
                                class: "w-2",
                                src: _imports_1,
                                alt: "revolut"
                              })) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(method), 1)
                            ], 8, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(form).payment_method]
                        ]),
                        createVNode(_sfc_main$2, {
                          message: unref(form).errors.payment_method
                        }, null, 8, ["message"]),
                        createVNode("div", { class: "mt-4 d-flex justify-content-end" }, [
                          createVNode("button", {
                            type: "submit",
                            name: "button",
                            class: "m-0 btn bg-gradient-success ms-2"
                          }, " Proceed ")
                        ])
                      ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Fund/Buy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
