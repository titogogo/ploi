import { inject, onMounted, mergeProps, withCtx, unref, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import { i as initMultiStepForm } from "./multistep-form-Dn7WrQ-x.js";
import "@vueup/vue-quill";
import { _ as _sfc_main$3 } from "./InputError-BGJo5hu6.js";
import { useDropzone } from "vue3-dropzone";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./SoftInput-BWS2dL-g.js";
import { S as SoftButton } from "./SoftButton-Ca5ZEi_O.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const swal = inject("$swal");
    onMounted(() => {
      initMultiStepForm();
    });
    const form = useForm({
      name: "",
      notes: "",
      files: []
    });
    const onDrop = (acceptFiles, rejectReasons) => {
      form.files = acceptFiles;
    };
    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
      accept: ".txt",
      onDrop
    });
    const submit = () => {
      form.post(route("address-books.store"), {
        onSuccess: () => {
          swal.fire({
            title: "Success!",
            text: "Address book is created successfully.!",
            icon: "success"
          });
        }
      });
    };
    const removeFile = (index) => {
      if (form.files[index]) {
        form.files.splice(index, 1);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Create address book" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="multisteps-form"${_scopeId}><div class="row"${_scopeId}><div class="mx-auto mt-4 mb-3 col-12 col-lg-8 mb-sm-5"${_scopeId}><div class="multisteps-form__progress"${_scopeId}><button class="multisteps-form__progress-btn js-active js-active position-relative" type="button" title="Address Book Info"${_scopeId}><span${_scopeId}>1. Address Book Info</span></button><button class="multisteps-form__progress-btn" type="button" title="Media"${_scopeId}> 2. Contacts </button></div></div></div><div class="row"${_scopeId}><div class="m-auto col-12 col-lg-8"${_scopeId}><form class="mb-8 multisteps-form__form" role="form"${_scopeId}><div class="p-3 bg-white card multisteps-form__panel border-radius-xl js-active position-relative" data-animation="FadeIn"${_scopeId}><h5 class="font-weight-bolder"${_scopeId}>Address Book Information</h5><div class="multisteps-form__content"${_scopeId}><div class="mt-3 row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label${_scopeId}>Name</label>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "multisteps-form__input",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              id: "name",
              type: "text",
              placeholder: "eg. Customers",
              "aria-label": "Name",
              error: unref(form).errors.hasOwnProperty("name")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="row"${_scopeId}><div class="col-sm-12"${_scopeId}><label class="mt-4"${_scopeId}>Notes</label><p class="text-xs form-text text-muted ms-1 d-inline"${_scopeId}>(optional)</p><textarea class="form-control multisteps-form__textarea" rows="5"${_scopeId}>${ssrInterpolate(unref(form).notes)}</textarea></div></div><div class="mt-4 button-row d-flex col-12"${_scopeId}><button class="btn mb-0 bg-gradient-dark btn-md null null mb-0 ms-auto js-btn-next" type="button" title="Next"${_scopeId}>Next </button></div></div></div><div class="p-3 bg-white card multisteps-form__panel border-radius-xl" data-animation="FadeIn"${_scopeId}><h5 class="font-weight-bolder"${_scopeId}>Contacts</h5><div class="multisteps-form__content"${_scopeId}><div class="mt-3 row"${_scopeId}><div class="col-12"${_scopeId}><!--[-->`);
            ssrRenderList(unref(form).files, (file, i) => {
              _push2(`<div class="border badge bg-dark mx-1"${_scopeId}><span class="me-sm-2"${_scopeId}>${ssrInterpolate(file.name)}</span>`);
              _push2(ssrRenderComponent(SoftButton, {
                class: "btn btn-light btn-sm",
                onClick: ($event) => removeFile(i)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`X`);
                  } else {
                    return [
                      createTextVNode("X")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div><div class="mt-3 row"${_scopeId}><div class="col-12"${_scopeId}><label${_scopeId}>Address book contacts</label><div class="form-control dropzone dz-clickable"${_scopeId}><div${ssrRenderAttrs(unref(getRootProps)())}${_scopeId}><input${ssrRenderAttrs(unref(getInputProps)())}${_scopeId}><div class="dz-default dz-message"${_scopeId}>`);
            if (unref(isDragActive)) {
              _push2(`<p class="dz-button"${_scopeId}>Drop the files here ...</p>`);
            } else {
              _push2(`<p class="dz-button"${_scopeId}>Drag &#39;n&#39; drop some files here, or click to select files</p>`);
            }
            _push2(`</div></div></div></div></div><div class="mt-4 button-row d-flex col-12"${_scopeId}><button class="btn mb-0 bg-gradient-secondary btn-md null null mb-0 js-btn-prev" title="Prev"${_scopeId}>Prev </button>`);
            _push2(ssrRenderComponent(SoftButton, {
              color: "dark",
              variant: "gradient",
              class: "btn mb-0 bg-gradient-dark btn-md null null mb-0 ms-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Create`);
                } else {
                  return [
                    createTextVNode("Create")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></form></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4 container-fluid" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-12" }, [
                    createVNode("div", { class: "multisteps-form" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "mx-auto mt-4 mb-3 col-12 col-lg-8 mb-sm-5" }, [
                          createVNode("div", { class: "multisteps-form__progress" }, [
                            createVNode("button", {
                              class: "multisteps-form__progress-btn js-active js-active position-relative",
                              type: "button",
                              title: "Address Book Info"
                            }, [
                              createVNode("span", null, "1. Address Book Info")
                            ]),
                            createVNode("button", {
                              class: "multisteps-form__progress-btn",
                              type: "button",
                              title: "Media"
                            }, " 2. Contacts ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "m-auto col-12 col-lg-8" }, [
                          createVNode("form", {
                            class: "mb-8 multisteps-form__form",
                            role: "form",
                            onSubmit: withModifiers(submit, ["prevent"])
                          }, [
                            createVNode("div", {
                              class: "p-3 bg-white card multisteps-form__panel border-radius-xl js-active position-relative",
                              "data-animation": "FadeIn"
                            }, [
                              createVNode("h5", { class: "font-weight-bolder" }, "Address Book Information"),
                              createVNode("div", { class: "multisteps-form__content" }, [
                                createVNode("div", { class: "mt-3 row" }, [
                                  createVNode("div", { class: "col-12 col-sm-12" }, [
                                    createVNode("label", null, "Name"),
                                    createVNode(_sfc_main$2, {
                                      class: "multisteps-form__input",
                                      modelValue: unref(form).name,
                                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                      id: "name",
                                      type: "text",
                                      placeholder: "eg. Customers",
                                      "aria-label": "Name",
                                      error: unref(form).errors.hasOwnProperty("name")
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                    createVNode(_sfc_main$3, {
                                      class: "mt-2",
                                      message: unref(form).errors.name
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                createVNode("div", { class: "row" }, [
                                  createVNode("div", { class: "col-sm-12" }, [
                                    createVNode("label", { class: "mt-4" }, "Notes"),
                                    createVNode("p", { class: "text-xs form-text text-muted ms-1 d-inline" }, "(optional)"),
                                    withDirectives(createVNode("textarea", {
                                      "onUpdate:modelValue": ($event) => unref(form).notes = $event,
                                      class: "form-control multisteps-form__textarea",
                                      rows: "5"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, unref(form).notes]
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 button-row d-flex col-12" }, [
                                  createVNode("button", {
                                    class: "btn mb-0 bg-gradient-dark btn-md null null mb-0 ms-auto js-btn-next",
                                    type: "button",
                                    title: "Next"
                                  }, "Next ")
                                ])
                              ])
                            ]),
                            createVNode("div", {
                              class: "p-3 bg-white card multisteps-form__panel border-radius-xl",
                              "data-animation": "FadeIn"
                            }, [
                              createVNode("h5", { class: "font-weight-bolder" }, "Contacts"),
                              createVNode("div", { class: "multisteps-form__content" }, [
                                createVNode("div", { class: "mt-3 row" }, [
                                  createVNode("div", { class: "col-12" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(form).files, (file, i) => {
                                      return openBlock(), createBlock("div", { class: "border badge bg-dark mx-1" }, [
                                        createVNode("span", { class: "me-sm-2" }, toDisplayString(file.name), 1),
                                        createVNode(SoftButton, {
                                          class: "btn btn-light btn-sm",
                                          onClick: withModifiers(($event) => removeFile(i), ["prevent"])
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("X")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ]);
                                    }), 256))
                                  ])
                                ]),
                                createVNode("div", { class: "mt-3 row" }, [
                                  createVNode("div", { class: "col-12" }, [
                                    createVNode("label", null, "Address book contacts"),
                                    createVNode("div", { class: "form-control dropzone dz-clickable" }, [
                                      createVNode("div", unref(getRootProps)(), [
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
                                      ], 16)
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 button-row d-flex col-12" }, [
                                  createVNode("button", {
                                    class: "btn mb-0 bg-gradient-secondary btn-md null null mb-0 js-btn-prev",
                                    title: "Prev"
                                  }, "Prev "),
                                  createVNode(SoftButton, {
                                    color: "dark",
                                    variant: "gradient",
                                    class: "btn mb-0 bg-gradient-dark btn-md null null mb-0 ms-auto"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Create")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ])
                          ], 32)
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AddressBook/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
