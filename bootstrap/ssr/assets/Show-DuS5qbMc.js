import { inject, ref, onMounted, onUnmounted, mergeProps, withCtx, unref, createVNode, withModifiers, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, withDirectives, vModelText, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_3, a as _imports_0, b as _imports_2, c as _imports_1 } from "./logo-binance-CFa3W3d9.js";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./InputError-BGJo5hu6.js";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    payment: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const swal = inject("$swal");
    const { payment } = __props;
    const lightbox = ref();
    onMounted(() => {
      if (!lightbox.value) {
        lightbox.value = new PhotoSwipeLightbox({
          gallery: "#my-gallery",
          children: "a",
          pswpModule: () => import("photoswipe")
        });
        lightbox.value.init();
      }
    });
    onUnmounted(() => {
      if (lightbox.value) {
        lightbox.value.destroy();
        lightbox.value = null;
      }
    });
    const form = useForm({
      amount: payment.amount.amount / 100
    });
    const submit = () => {
      form.post(route("manual-payments.approve", payment.id), {
        onSuccess: () => {
          swal.fire({
            title: "Success!",
            text: "Payment is approved.",
            icon: "success"
          });
          form.reset();
        },
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Manual Payment Details" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container-fluid py-4"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><h5 class="mb-4"${_scopeId}>Manual Payment Details</h5><form role="form"${_scopeId}><div class="row"${_scopeId}><div class="col-lg-5"${_scopeId}><h5 class="mt-lg-0 mt-4"${_scopeId}>`);
            if (__props.payment.method === "Revolut") {
              _push2(`<img class="w-8"${ssrRenderAttr("src", _imports_3)} alt="revolut"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.payment.method === "Paypal") {
              _push2(`<img class="w-8"${ssrRenderAttr("src", _imports_0)} alt="paypal"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.payment.method === "Skrill") {
              _push2(`<img class="w-8"${ssrRenderAttr("src", _imports_2)} alt="paypal"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.payment.method === "Binance") {
              _push2(`<img class="w-8"${ssrRenderAttr("src", _imports_1)} alt="paypal"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(__props.payment.method)} - <small${_scopeId}>`);
            if (__props.payment.status === "pending") {
              _push2(`<span class="badge bg-info"${_scopeId}>${ssrInterpolate(__props.payment.status)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.payment.status === "completed") {
              _push2(`<span class="badge bg-success"${_scopeId}>${ssrInterpolate(__props.payment.status)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</small></h5><br${_scopeId}><h6 class="mb-0 mt-3"${_scopeId}>Transaction ID</h6><span${_scopeId}>${ssrInterpolate(__props.payment.transaction_id)}</span><h6 class="mb-0 mt-3"${_scopeId}>Email</h6><span${_scopeId}>${ssrInterpolate(__props.payment.email)}</span><br${_scopeId}><br${_scopeId}><h6 class="mb-0 mt-3"${_scopeId}>Amount</h6><span class="badge bg-success"${_scopeId}>${ssrInterpolate(__props.payment.amount.formatted)}</span><br${_scopeId}><h6 class="mb-0 mt-3"${_scopeId}>User</h6><span${_scopeId}>${ssrInterpolate(__props.payment.user.name)} - ${ssrInterpolate(__props.payment.user.email)}</span><br${_scopeId}><div class="row mt-4"${_scopeId}><div class="col-lg-12 mt-lg-0 mt-2"${_scopeId}><label for="amount" class="form-label"${_scopeId}>Amount</label><div class="input-group"${_scopeId}><span class="input-group-text"${_scopeId}>$</span><input${ssrRenderAttr("value", unref(form).amount)} type="number" class="form-control" aria-label="Amount (to the nearest dollar)"${_scopeId}><span class="input-group-text"${_scopeId}>.00</span></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2",
              message: unref(form).errors.amount
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="row mt-4"${_scopeId}><div class="col-lg-5"${_scopeId}><button class="btn bg-gradient-primary mb-0 mt-lg-auto w-100" type="submit" name="button"${_scopeId}>Approve </button></div></div></div><div class="col-xl-5 col-lg-6 text-center mx-auto"${_scopeId}><img class="w-100 border-radius-lg shadow-lg mx-auto"${ssrRenderAttr("src", `/storage/` + __props.payment.files[0])} alt="Proof"${_scopeId}><div id="my-gallery" class="my-gallery d-flex mt-4 pt-2" itemscope="" itemtype="http://schema.org/ImageGallery" data-pswp-uid="1"${_scopeId}><!--[-->`);
            ssrRenderList(__props.payment.files, (image, i) => {
              _push2(`<figure itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject"${_scopeId}><a${ssrRenderAttr("href", `/storage/` + image)} data-pswp-width="1280" data-pswp-height="720" target="_blank" rel="noreferrer"${_scopeId}><img class="w-75 min-height-100 max-height-100 border-radius-lg shadow"${ssrRenderAttr("src", `/storage/` + image)} alt="Image description"${_scopeId}></a></figure>`);
            });
            _push2(`<!--]--></div></div></div></form></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container-fluid py-4" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-12" }, [
                    createVNode("div", { class: "card" }, [
                      createVNode("div", { class: "card-body" }, [
                        createVNode("h5", { class: "mb-4" }, "Manual Payment Details"),
                        createVNode("form", {
                          role: "form",
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, [
                          createVNode("div", { class: "row" }, [
                            createVNode("div", { class: "col-lg-5" }, [
                              createVNode("h5", { class: "mt-lg-0 mt-4" }, [
                                __props.payment.method === "Revolut" ? (openBlock(), createBlock("img", {
                                  key: 0,
                                  class: "w-8",
                                  src: _imports_3,
                                  alt: "revolut"
                                })) : createCommentVNode("", true),
                                __props.payment.method === "Paypal" ? (openBlock(), createBlock("img", {
                                  key: 1,
                                  class: "w-8",
                                  src: _imports_0,
                                  alt: "paypal"
                                })) : createCommentVNode("", true),
                                __props.payment.method === "Skrill" ? (openBlock(), createBlock("img", {
                                  key: 2,
                                  class: "w-8",
                                  src: _imports_2,
                                  alt: "paypal"
                                })) : createCommentVNode("", true),
                                __props.payment.method === "Binance" ? (openBlock(), createBlock("img", {
                                  key: 3,
                                  class: "w-8",
                                  src: _imports_1,
                                  alt: "paypal"
                                })) : createCommentVNode("", true),
                                createTextVNode(" " + toDisplayString(__props.payment.method) + " - ", 1),
                                createVNode("small", null, [
                                  __props.payment.status === "pending" ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "badge bg-info"
                                  }, toDisplayString(__props.payment.status), 1)) : createCommentVNode("", true),
                                  __props.payment.status === "completed" ? (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "badge bg-success"
                                  }, toDisplayString(__props.payment.status), 1)) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("br"),
                              createVNode("h6", { class: "mb-0 mt-3" }, "Transaction ID"),
                              createVNode("span", null, toDisplayString(__props.payment.transaction_id), 1),
                              createVNode("h6", { class: "mb-0 mt-3" }, "Email"),
                              createVNode("span", null, toDisplayString(__props.payment.email), 1),
                              createVNode("br"),
                              createVNode("br"),
                              createVNode("h6", { class: "mb-0 mt-3" }, "Amount"),
                              createVNode("span", { class: "badge bg-success" }, toDisplayString(__props.payment.amount.formatted), 1),
                              createVNode("br"),
                              createVNode("h6", { class: "mb-0 mt-3" }, "User"),
                              createVNode("span", null, toDisplayString(__props.payment.user.name) + " - " + toDisplayString(__props.payment.user.email), 1),
                              createVNode("br"),
                              createVNode("div", { class: "row mt-4" }, [
                                createVNode("div", { class: "col-lg-12 mt-lg-0 mt-2" }, [
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
                                ])
                              ]),
                              createVNode("div", { class: "row mt-4" }, [
                                createVNode("div", { class: "col-lg-5" }, [
                                  createVNode("button", {
                                    class: "btn bg-gradient-primary mb-0 mt-lg-auto w-100",
                                    type: "submit",
                                    name: "button"
                                  }, "Approve ")
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "col-xl-5 col-lg-6 text-center mx-auto" }, [
                              createVNode("img", {
                                class: "w-100 border-radius-lg shadow-lg mx-auto",
                                src: `/storage/` + __props.payment.files[0],
                                alt: "Proof"
                              }, null, 8, ["src"]),
                              createVNode("div", {
                                id: "my-gallery",
                                class: "my-gallery d-flex mt-4 pt-2",
                                itemscope: "",
                                itemtype: "http://schema.org/ImageGallery",
                                "data-pswp-uid": "1"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.payment.files, (image, i) => {
                                  return openBlock(), createBlock("figure", {
                                    itemprop: "associatedMedia",
                                    itemscope: "",
                                    itemtype: "http://schema.org/ImageObject"
                                  }, [
                                    createVNode("a", {
                                      href: `/storage/` + image,
                                      "data-pswp-width": "1280",
                                      "data-pswp-height": "720",
                                      target: "_blank",
                                      rel: "noreferrer"
                                    }, [
                                      createVNode("img", {
                                        class: "w-75 min-height-100 max-height-100 border-radius-lg shadow",
                                        src: `/storage/` + image,
                                        alt: "Image description"
                                      }, null, 8, ["src"])
                                    ], 8, ["href"])
                                  ]);
                                }), 256))
                              ])
                            ])
                          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ManualPayment/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
