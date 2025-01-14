import { inject, mergeProps, withCtx, unref, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import { _ as _sfc_main$3 } from "./SoftInput-BWS2dL-g.js";
import { _ as _sfc_main$2 } from "./InputError-BGJo5hu6.js";
import { useForm } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
const _sfc_main = {
  __name: "Transfer",
  __ssrInlineRender: true,
  setup(__props) {
    const swal = inject("$swal");
    const form = useForm({
      email: "",
      amount: 0,
      password: ""
    });
    const submit = () => {
      form.post(route("transfer-funds.store"), {
        onSuccess: () => {
          swal.fire({
            title: "Success!",
            text: "Credits was transferred successfully!",
            icon: "success"
          });
        },
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Transfer Funds" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid" data-v-ab4a4338${_scopeId}><div class="row" data-v-ab4a4338${_scopeId}><div class="mx-auto col-lg-9 col-12" data-v-ab4a4338${_scopeId}><div class="mt-4 card card-body" data-v-ab4a4338${_scopeId}><form role="form" data-v-ab4a4338${_scopeId}><h6 class="mb-0" data-v-ab4a4338${_scopeId}>Transfer Funds</h6><p class="mb-0 text-sm" data-v-ab4a4338${_scopeId}>Transfer credits to another account</p><hr class="my-3 horizontal dark" data-v-ab4a4338${_scopeId}><label for="amount" class="form-label" data-v-ab4a4338${_scopeId}>Amount</label><div class="${ssrRenderClass([{ "is-invalid": unref(form).errors.hasOwnProperty("amount") }, "input-group"])}" data-v-ab4a4338${_scopeId}><span class="input-group-text" data-v-ab4a4338${_scopeId}>$</span><input${ssrRenderAttr("value", unref(form).amount)} type="number" class="form-control" aria-label="Amount (to the nearest dollar)" data-v-ab4a4338${_scopeId}><span class="input-group-text" data-v-ab4a4338${_scopeId}>.00</span></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-3",
              message: unref(form).errors.amount
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-3 row" data-v-ab4a4338${_scopeId}><label data-v-ab4a4338${_scopeId}>Email</label>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              id: "email",
              type: "email",
              placeholder: "Email",
              "aria-label": "Email",
              error: unref(form).errors.hasOwnProperty("email")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-1 row" data-v-ab4a4338${_scopeId}><label data-v-ab4a4338${_scopeId}>Password</label>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              placeholder: "Password",
              name: "password",
              required: "",
              autocomplete: "current-password",
              error: unref(form).errors.hasOwnProperty("password")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 d-flex justify-content-end" data-v-ab4a4338${_scopeId}><button type="submit" name="button" class="m-0 btn bg-gradient-success ms-2" data-v-ab4a4338${_scopeId}> Transfer </button></div></form></div></div></div></div>`);
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
                        createVNode("h6", { class: "mb-0" }, "Transfer Funds"),
                        createVNode("p", { class: "mb-0 text-sm" }, "Transfer credits to another account"),
                        createVNode("hr", { class: "my-3 horizontal dark" }),
                        createVNode("label", {
                          for: "amount",
                          class: "form-label"
                        }, "Amount"),
                        createVNode("div", {
                          class: ["input-group", { "is-invalid": unref(form).errors.hasOwnProperty("amount") }]
                        }, [
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
                        ], 2),
                        createVNode(_sfc_main$2, {
                          class: "mt-3",
                          message: unref(form).errors.amount
                        }, null, 8, ["message"]),
                        createVNode("div", { class: "mt-3 row" }, [
                          createVNode("label", null, "Email"),
                          createVNode(_sfc_main$3, {
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            id: "email",
                            type: "email",
                            placeholder: "Email",
                            "aria-label": "Email",
                            error: unref(form).errors.hasOwnProperty("email")
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                          createVNode(_sfc_main$2, {
                            message: unref(form).errors.email
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-1 row" }, [
                          createVNode("label", null, "Password"),
                          createVNode(_sfc_main$3, {
                            id: "password",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            type: "password",
                            placeholder: "Password",
                            name: "password",
                            required: "",
                            autocomplete: "current-password",
                            error: unref(form).errors.hasOwnProperty("password")
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                          createVNode(_sfc_main$2, {
                            message: unref(form).errors.password
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-4 d-flex justify-content-end" }, [
                          createVNode("button", {
                            type: "submit",
                            name: "button",
                            class: "m-0 btn bg-gradient-success ms-2"
                          }, " Transfer ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Fund/Transfer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Transfer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ab4a4338"]]);
export {
  Transfer as default
};
