import { onMounted, computed, mergeProps, withCtx, unref, createVNode, withModifiers, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import { i as initChoices } from "./choices-BP0jR0_K.js";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./InputError-BGJo5hu6.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
import "choices.js";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    countries: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { countries } = __props;
    const form = useForm({
      rate: "",
      operator_prefix: 0,
      type: "text",
      country: null
    });
    onMounted(() => {
      initChoices("choices-country");
    });
    const submit = () => {
      form.post(route("coverage.store"));
    };
    const carriers = computed(() => {
      var _a;
      if (form.country != null) {
        return (_a = countries[form.country]) == null ? void 0 : _a.carriers;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Buy Credits" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="mx-auto col-lg-9 col-12"${_scopeId}><div class="mt-4 card card-body"${_scopeId}><form role="form"${_scopeId}><h6 class="mb-0"${_scopeId}>Buy Credits</h6><p class="mb-0 text-sm"${_scopeId}>Add funds to your account</p><hr class="my-3 horizontal dark"${_scopeId}><label class="form-label"${_scopeId}>Country</label><select class="form-control" name="choices-country" id="choices-country" placeholder="Departure"${_scopeId}><!--[-->`);
            ssrRenderList(__props.countries, (country, i) => {
              _push2(`<option${ssrRenderAttr("value", country.key)}${_scopeId}>${ssrInterpolate(country.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.country
            }, null, _parent2, _scopeId));
            _push2(`<label class="form-label"${_scopeId}>Operator Prefix</label><select class="form-control" name="choices-operator-prefix" id="choices-operator-prefix" placeholder="Departure"${_scopeId}><option${ssrRenderAttr("value", 0)} selected${_scopeId}> Any </option><!--[-->`);
            ssrRenderList(carriers.value, (carrier, i) => {
              _push2(`<option${ssrRenderAttr("value", carrier.code)}${_scopeId}>${ssrInterpolate(carrier.code + ` - ` + carrier.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.operator_prefix
            }, null, _parent2, _scopeId));
            _push2(`<label class="mt-3 form-label"${_scopeId}>Country</label><select class="form-control" name="choices-type" id="choices-type" placeholder="Departure"${_scopeId}><option value="text"${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "text") : ssrLooseEqual(unref(form).type, "text")) ? " selected" : ""}${_scopeId}>TEXT</option><option value="unicode"${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "unicode") : ssrLooseEqual(unref(form).type, "unicode")) ? " selected" : ""}${_scopeId}>Unicode</option></select>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.type
            }, null, _parent2, _scopeId));
            _push2(`<label for="amount" class="mt-3 form-label"${_scopeId}>Rate</label><div class="input-group"${_scopeId}><span class="input-group-text"${_scopeId}>$</span><input${ssrRenderAttr("value", unref(form).rate)} type="number" class="form-control" aria-label="Amount (to the nearest dollar)" pattern="^\\d+\\.\\d{2}$" step="00.01"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.rate
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
                        createVNode("label", { class: "form-label" }, "Country"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => unref(form).country = $event,
                          class: "form-control",
                          name: "choices-country",
                          id: "choices-country",
                          placeholder: "Departure"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.countries, (country, i) => {
                            return openBlock(), createBlock("option", {
                              value: country.key,
                              key: i
                            }, toDisplayString(country.name), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(form).country]
                        ]),
                        createVNode(_sfc_main$2, {
                          class: "mt-2",
                          message: unref(form).errors.country
                        }, null, 8, ["message"]),
                        createVNode("label", { class: "form-label" }, "Operator Prefix"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => unref(form).operator_prefix = $event,
                          class: "form-control",
                          name: "choices-operator-prefix",
                          id: "choices-operator-prefix",
                          placeholder: "Departure"
                        }, [
                          createVNode("option", {
                            value: 0,
                            selected: ""
                          }, " Any "),
                          (openBlock(true), createBlock(Fragment, null, renderList(carriers.value, (carrier, i) => {
                            return openBlock(), createBlock("option", {
                              value: carrier.code,
                              key: i
                            }, toDisplayString(carrier.code + ` - ` + carrier.name), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(form).operator_prefix]
                        ]),
                        createVNode(_sfc_main$2, {
                          class: "mt-2",
                          message: unref(form).errors.operator_prefix
                        }, null, 8, ["message"]),
                        createVNode("label", { class: "mt-3 form-label" }, "Country"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          class: "form-control",
                          name: "choices-type",
                          id: "choices-type",
                          placeholder: "Departure"
                        }, [
                          createVNode("option", { value: "text" }, "TEXT"),
                          createVNode("option", { value: "unicode" }, "Unicode")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, unref(form).type]
                        ]),
                        createVNode(_sfc_main$2, {
                          class: "mt-2",
                          message: unref(form).errors.type
                        }, null, 8, ["message"]),
                        createVNode("label", {
                          for: "amount",
                          class: "mt-3 form-label"
                        }, "Rate"),
                        createVNode("div", { class: "input-group" }, [
                          createVNode("span", { class: "input-group-text" }, "$"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).rate = $event,
                            type: "number",
                            class: "form-control",
                            "aria-label": "Amount (to the nearest dollar)",
                            pattern: "^\\d+\\.\\d{2}$",
                            step: "00.01"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).rate]
                          ])
                        ]),
                        createVNode(_sfc_main$2, {
                          class: "mt-2",
                          message: unref(form).errors.rate
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Coverage/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
