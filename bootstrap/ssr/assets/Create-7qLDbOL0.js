import { inject, mergeProps, withCtx, unref, createTextVNode, createVNode, withModifiers, toDisplayString, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./InputError-BGJo5hu6.js";
import { _ as _sfc_main$3 } from "./SoftInput-BWS2dL-g.js";
import { useDropzone } from "vue3-dropzone";
import { S as SoftButton } from "./SoftButton-Ca5ZEi_O.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    method: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const swal = inject("$swal");
    const { method } = __props;
    const form = useForm({
      amount: 0,
      email: "",
      transaction_id: "",
      files: []
    });
    const onDrop = (acceptFiles, rejectReasons) => {
      form.files = acceptFiles;
    };
    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
      accept: [".jpg", ".jpeg", ".png"],
      onDrop
    });
    const submit = () => {
      form.post(route("manual-payments.store", method), {
        onSuccess: () => {
          swal.fire({
            title: "Success!",
            text: "Your payment is created successfully.",
            icon: "success"
          });
        }
        // onFinish: () => form.reset(),
      });
    };
    const removeFile = (index) => {
      if (form.files[index]) {
        form.files.splice(index, 1);
      }
    };
    const truncateString = (string = "", maxLength = 50) => string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Buy Credits" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="mx-auto col-lg-9 col-12"${_scopeId}><div class="mt-4 card card-body"${_scopeId}><form role="form"${_scopeId}><h6 class="mb-0"${_scopeId}>Buy Credits through ${ssrInterpolate(__props.method)}</h6><p class="mb-0 text-sm"${_scopeId}>Add funds to your account</p><hr class="my-3 horizontal dark"${_scopeId}><div class="row"${_scopeId}><label for="amount" class="form-label"${_scopeId}>Amount</label><div class="input-group"${_scopeId}><span class="input-group-text"${_scopeId}>$</span><input${ssrRenderAttr("value", unref(form).amount)} type="number" class="form-control" aria-label="Amount (to the nearest dollar)"${_scopeId}><span class="input-group-text"${_scopeId}>.00</span></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.amount
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-3 row"${_scopeId}><label${_scopeId}>Email</label>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              id: "email",
              type: "email",
              placeholder: "Email",
              "aria-label": "Email",
              error: unref(form).errors.hasOwnProperty("email"),
              "is-required": true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="row"${_scopeId}><label${_scopeId}>Transaction ID</label>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).transaction_id,
              "onUpdate:modelValue": ($event) => unref(form).transaction_id = $event,
              id: "transaction_id",
              type: "text",
              placeholder: "Transaction ID",
              "aria-label": "Transaction ID",
              error: unref(form).errors.hasOwnProperty("transaction_id"),
              "is-required": true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              message: unref(form).errors.transaction_id
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="row"${_scopeId}><div class="col-12"${_scopeId}><label${_scopeId}>Proof</label><div${ssrRenderAttrs(mergeProps({ class: "form-control dropzone dz-clickable" }, unref(getRootProps)()))}${_scopeId}><input${ssrRenderAttrs(unref(getInputProps)())}${_scopeId}><div class="dz-default dz-message"${_scopeId}>`);
            if (unref(isDragActive)) {
              _push2(`<p class="dz-button"${_scopeId}>Drop the files here ...</p>`);
            } else {
              _push2(`<p class="dz-button"${_scopeId}>Drag &#39;n&#39; drop some files here, or click to select files</p>`);
            }
            _push2(`</div></div><div class="mt-3 row"${_scopeId}><div class="col-12"${_scopeId}><!--[-->`);
            ssrRenderList(unref(form).files, (file, i) => {
              _push2(`<div class="border badge bg-success mx-1"${_scopeId}><span class="me-sm-2"${_scopeId}>${ssrInterpolate(truncateString(file.name, 10))}</span>`);
              _push2(ssrRenderComponent(SoftButton, {
                class: "btn btn-light btn-sm",
                onClick: ($event) => removeFile(i)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`X `);
                  } else {
                    return [
                      createTextVNode("X ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></div></div><div class="mt-4 d-flex justify-content-end"${_scopeId}><button type="submit" name="button" class="m-0 btn bg-gradient-success ms-2"${_scopeId}> Submit </button></div></form></div></div></div></div>`);
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
                        createVNode("h6", { class: "mb-0" }, "Buy Credits through " + toDisplayString(__props.method), 1),
                        createVNode("p", { class: "mb-0 text-sm" }, "Add funds to your account"),
                        createVNode("hr", { class: "my-3 horizontal dark" }),
                        createVNode("div", { class: "row" }, [
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
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-3 row" }, [
                          createVNode("label", null, "Email"),
                          createVNode(_sfc_main$3, {
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            id: "email",
                            type: "email",
                            placeholder: "Email",
                            "aria-label": "Email",
                            error: unref(form).errors.hasOwnProperty("email"),
                            "is-required": true
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                          createVNode(_sfc_main$2, {
                            message: unref(form).errors.email
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("label", null, "Transaction ID"),
                          createVNode(_sfc_main$3, {
                            modelValue: unref(form).transaction_id,
                            "onUpdate:modelValue": ($event) => unref(form).transaction_id = $event,
                            id: "transaction_id",
                            type: "text",
                            placeholder: "Transaction ID",
                            "aria-label": "Transaction ID",
                            error: unref(form).errors.hasOwnProperty("transaction_id"),
                            "is-required": true
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                          createVNode(_sfc_main$2, {
                            message: unref(form).errors.transaction_id
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-12" }, [
                            createVNode("label", null, "Proof"),
                            createVNode("div", mergeProps({ class: "form-control dropzone dz-clickable" }, unref(getRootProps)()), [
                              createVNode("input", unref(getInputProps)(), null, 16),
                              createVNode("div", { class: "dz-default dz-message" }, [
                                unref(isDragActive) ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "dz-button"
                                }, "Drop the files here ...")) : (openBlock(), createBlock("p", {
                                  key: 1,
                                  class: "dz-button"
                                }, "Drag 'n' drop some files here, or click to select files"))
                              ])
                            ], 16),
                            createVNode("div", { class: "mt-3 row" }, [
                              createVNode("div", { class: "col-12" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(form).files, (file, i) => {
                                  return openBlock(), createBlock("div", { class: "border badge bg-success mx-1" }, [
                                    createVNode("span", { class: "me-sm-2" }, toDisplayString(truncateString(file.name, 10)), 1),
                                    createVNode(SoftButton, {
                                      class: "btn btn-light btn-sm",
                                      onClick: withModifiers(($event) => removeFile(i), ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("X ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]);
                                }), 256))
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "mt-4 d-flex justify-content-end" }, [
                          createVNode("button", {
                            type: "submit",
                            name: "button",
                            class: "m-0 btn bg-gradient-success ms-2"
                          }, " Submit ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ManualPayment/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
