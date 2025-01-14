import { inject, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, withModifiers, withDirectives, vModelText, createCommentVNode, vModelCheckbox, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import { _ as _sfc_main$3 } from "./SoftInput-BWS2dL-g.js";
import "./SoftSwitch-DKrdzP3l.js";
import { _ as _sfc_main$2 } from "./InputError-BGJo5hu6.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object,
      required: true
    },
    transactions: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const swal = inject("$swal");
    const { user } = __props;
    const form = useForm({
      enabled: user.enabled,
      api_enabled: user.api_enabled
    });
    const onStatusChange = () => {
      form.post(route("user.set-status", user.id), {
        preserveScroll: true,
        preserveState: true
      });
    };
    const onApiStatusChange = () => {
      form.post(route("user.set-status", user.id), {
        preserveScroll: true,
        preserveState: true
      });
    };
    const showDeduct = ref(false);
    const showPasswordForm = ref(false);
    const deductForm = useForm({
      amount: 0
    });
    const changePasswordForm = useForm({
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      deductForm.post(route("users.deduct", user.id), {
        onSuccess: () => {
          swal.fire({
            title: "Success!",
            text: "Credits was deducted successfully!",
            icon: "success"
          });
          deductForm.reset();
        },
        onFinish: () => deductForm.reset()
      });
    };
    const submitChangePassword = () => {
      changePasswordForm.post(route("users.set-password", user.id), {
        onSuccess: () => {
          swal.fire({
            title: "Success!",
            text: "Password changed successfully!",
            icon: "success"
          });
          changePasswordForm.reset();
        },
        onFinish: () => changePasswordForm.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Preview User" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container-fluid mt-4"${_scopeId}><div class="row mb-5"${_scopeId}><div class="col-lg-12 mt-lg-0 mt-4"${_scopeId}><div class="card card-body" id="profile"${_scopeId}><div class="row justify-content-center align-items-center"${_scopeId}><div class="col-sm-auto col-4"${_scopeId}><div class="avatar avatar-xl position-relative"${_scopeId}><img${ssrRenderAttr("src", __props.user.profile_photo_path)}${ssrRenderAttr("alt", __props.user.name)} class="w-100 border-radius-lg shadow-sm"${_scopeId}></div></div><div class="col-sm-auto col-8 my-auto"${_scopeId}><div class="h-100"${_scopeId}><h5 class="mb-1 font-weight-bolder"${_scopeId}>${ssrInterpolate(__props.user.name)}</h5><p class="mb-0 font-weight-bold text-sm"${_scopeId}> Balance: ${ssrInterpolate(__props.user.balance.formatted)} <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;"${_scopeId}><i class="fas fa-minus text-dark me-2" aria-hidden="true"${_scopeId}></i>Deduct </a></p></div></div><div class="col-sm-auto ms-sm-auto mt-sm-0 mt-3 d-flex"${_scopeId}><a class="btn btn-link text-dark px-3 mb-0" href="javascript:;"${_scopeId}><i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"${_scopeId}></i>Edit </a></div></div>`);
            if (showDeduct.value) {
              _push2(`<div class="row mt-4 flex"${_scopeId}><form class="form-inline"${_scopeId}><div class="g-3 mt-lg-0 mt-2 d-inline-flex flex-row justify-content-start"${_scopeId}><div class="${ssrRenderClass([{ "is-invalid": unref(deductForm).errors.hasOwnProperty("amount") }, "col-auto input-group"])}"${_scopeId}><span class="input-group-text"${_scopeId}>$</span><input${ssrRenderAttr("value", unref(deductForm).amount)} type="number" class="form-control" aria-label="Amount (to the nearest dollar)"${_scopeId}></div><div class="col-auto"${_scopeId}><button type="submit" name="button" class="m-0 btn bg-gradient-success ms-2"${_scopeId}> Submit </button></div></div>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                class: "mt-3",
                message: unref(deductForm).errors.amount
              }, null, _parent2, _scopeId));
              _push2(`</form></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (showPasswordForm.value) {
              _push2(`<div class="row mt-4 flex"${_scopeId}><form${_scopeId}><div class="row col-5"${_scopeId}><label${_scopeId}>Password</label>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                modelValue: unref(changePasswordForm).password,
                "onUpdate:modelValue": ($event) => unref(changePasswordForm).password = $event,
                id: "password",
                type: "password",
                placeholder: "Password",
                "aria-label": "Password",
                error: unref(changePasswordForm).errors.hasOwnProperty("password")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                class: "mt-2",
                message: unref(changePasswordForm).errors.password
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="row col-5"${_scopeId}><label${_scopeId}>Confirm Password</label>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                modelValue: unref(changePasswordForm).password_confirmation,
                "onUpdate:modelValue": ($event) => unref(changePasswordForm).password_confirmation = $event,
                id: "password_confirmation",
                type: "password",
                placeholder: "Password Confirmation",
                "aria-label": "Password Confirmation",
                error: unref(changePasswordForm).errors.hasOwnProperty("password_confirmation")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                class: "mt-2",
                message: unref(changePasswordForm).errors.password_confirmation
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="col-auto"${_scopeId}><button type="submit" name="button" class="m-0 btn bg-gradient-success"${_scopeId}> Submit </button></div></form></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="col-lg-6 mt-lg-0 mt-4"${_scopeId}><div class="card mt-4"${_scopeId}><div class="card-header"${_scopeId}><h5${_scopeId}>User Settings</h5><p class="text-sm"${_scopeId}>Control user settings</p></div><div class="card-body pt-0"${_scopeId}><div class="table-responsive"${_scopeId}><table class="table mb-0"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="ps-1" colspan="4"${_scopeId}><p class="mb-0"${_scopeId}>Setting</p></th><th class="text-center"${_scopeId}><p class="mb-0"${_scopeId}>Status</p></th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td class="ps-1" colspan="4"${_scopeId}><div class="my-auto"${_scopeId}><span class="text-dark d-block text-sm"${_scopeId}>API</span><span class="text-xs font-weight-normal"${_scopeId}>Enable or forbid the user from using API.</span></div></td><td${_scopeId}><div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).api_enabled) ? ssrLooseContain(unref(form).api_enabled, null) : unref(form).api_enabled) ? " checked" : ""} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault12"${_scopeId}></div></td></tr><tr${_scopeId}><td class="ps-1" colspan="4"${_scopeId}><div class="my-auto"${_scopeId}><span class="text-dark d-block text-sm"${_scopeId}>Active</span><span class="text-xs font-weight-normal"${_scopeId}>Enable or disable user from logging in and using the system.</span></div></td><td${_scopeId}><div class="form-check form-switch mb-0 d-flex align-items-center justify-content-center"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).enabled) ? ssrLooseContain(unref(form).enabled, null) : unref(form).enabled) ? " checked" : ""} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault11"${_scopeId}></div></td></tr></tbody></table></div></div></div></div><div class="col-lg-6 mt-lg-0 mt-4"${_scopeId}><div class="card mt-4"${_scopeId}><div class="card-header"${_scopeId}><div class="row"${_scopeId}><div class="col-md-6"${_scopeId}><h5${_scopeId}>Transactions</h5></div><div class="col-md-6 d-flex justify-content-end align-items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("user.transactions", __props.user.id)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<small${_scopeId2}>More <i class="fa fa-chevron-right ms-2" aria-hidden="true"${_scopeId2}></i></small>`);
                } else {
                  return [
                    createVNode("small", null, [
                      createTextVNode("More "),
                      createVNode("i", {
                        class: "fa fa-chevron-right ms-2",
                        "aria-hidden": "true"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="card-body pt-0"${_scopeId}>`);
            if (__props.transactions.total > 0) {
              _push2(`<div class="table-responsive"${_scopeId}><ul class="list-group"${_scopeId}><!--[-->`);
              ssrRenderList(__props.transactions.data, (transaction, i) => {
                _push2(`<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"${_scopeId}><div class="d-flex align-items-center"${_scopeId}><span class="${ssrRenderClass([{
                  "btn-outline-success": transaction.direction === "in",
                  "btn-outline-danger": transaction.direction === "out"
                }, "btn btn-icon-only btn-rounded mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"])}"${_scopeId}>`);
                if (transaction.direction === "in") {
                  _push2(`<i class="fas fa-arrow-up" aria-hidden="true"${_scopeId}></i>`);
                } else {
                  _push2(`<!---->`);
                }
                if (transaction.direction === "out") {
                  _push2(`<i class="fas fa-arrow-down" aria-hidden="true"${_scopeId}></i>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span><div class="d-flex flex-column"${_scopeId}>`);
                if (transaction.type === "internal") {
                  _push2(`<h6 class="mb-1 text-dark text-sm text-capitalize"${_scopeId}>${ssrInterpolate(transaction.type)}</h6>`);
                } else {
                  _push2(`<h6 class="mb-1 text-dark text-sm text-capitalize"${_scopeId}>${ssrInterpolate(transaction.payment_method)}</h6>`);
                }
                _push2(`<span class="text-xs"${_scopeId}>${ssrInterpolate(transaction.formatted_created_at)}</span></div></div>`);
                if (transaction.direction === "in") {
                  _push2(`<div class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"${_scopeId}> + ${ssrInterpolate(transaction.amount.formatted)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (transaction.direction === "out") {
                  _push2(`<div class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold"${_scopeId}> - ${ssrInterpolate(transaction.amount.formatted)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</li>`);
              });
              _push2(`<!--]--></ul></div>`);
            } else {
              _push2(`<div${_scopeId}><small${_scopeId}>No Transactions</small></div>`);
            }
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container-fluid mt-4" }, [
                createVNode("div", { class: "row mb-5" }, [
                  createVNode("div", { class: "col-lg-12 mt-lg-0 mt-4" }, [
                    createVNode("div", {
                      class: "card card-body",
                      id: "profile"
                    }, [
                      createVNode("div", { class: "row justify-content-center align-items-center" }, [
                        createVNode("div", { class: "col-sm-auto col-4" }, [
                          createVNode("div", { class: "avatar avatar-xl position-relative" }, [
                            createVNode("img", {
                              src: __props.user.profile_photo_path,
                              alt: __props.user.name,
                              class: "w-100 border-radius-lg shadow-sm"
                            }, null, 8, ["src", "alt"])
                          ])
                        ]),
                        createVNode("div", { class: "col-sm-auto col-8 my-auto" }, [
                          createVNode("div", { class: "h-100" }, [
                            createVNode("h5", { class: "mb-1 font-weight-bolder" }, toDisplayString(__props.user.name), 1),
                            createVNode("p", { class: "mb-0 font-weight-bold text-sm" }, [
                              createTextVNode(" Balance: " + toDisplayString(__props.user.balance.formatted) + " ", 1),
                              createVNode("a", {
                                class: "btn btn-link text-dark px-3 mb-0",
                                href: "javascript:;",
                                onClick: ($event) => showDeduct.value = !showDeduct.value
                              }, [
                                createVNode("i", {
                                  class: "fas fa-minus text-dark me-2",
                                  "aria-hidden": "true"
                                }),
                                createTextVNode("Deduct ")
                              ], 8, ["onClick"])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-sm-auto ms-sm-auto mt-sm-0 mt-3 d-flex" }, [
                          createVNode("a", {
                            class: "btn btn-link text-dark px-3 mb-0",
                            href: "javascript:;",
                            onClick: ($event) => showPasswordForm.value = !showPasswordForm.value
                          }, [
                            createVNode("i", {
                              class: "fas fa-pencil-alt text-dark me-2",
                              "aria-hidden": "true"
                            }),
                            createTextVNode("Edit ")
                          ], 8, ["onClick"])
                        ])
                      ]),
                      showDeduct.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "row mt-4 flex"
                      }, [
                        createVNode("form", {
                          class: "form-inline",
                          onSubmit: withModifiers(submit, ["prevent"])
                        }, [
                          createVNode("div", { class: "g-3 mt-lg-0 mt-2 d-inline-flex flex-row justify-content-start" }, [
                            createVNode("div", {
                              class: ["col-auto input-group", { "is-invalid": unref(deductForm).errors.hasOwnProperty("amount") }]
                            }, [
                              createVNode("span", { class: "input-group-text" }, "$"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(deductForm).amount = $event,
                                type: "number",
                                class: "form-control",
                                "aria-label": "Amount (to the nearest dollar)"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(deductForm).amount]
                              ])
                            ], 2),
                            createVNode("div", { class: "col-auto" }, [
                              createVNode("button", {
                                type: "submit",
                                name: "button",
                                class: "m-0 btn bg-gradient-success ms-2"
                              }, " Submit ")
                            ])
                          ]),
                          createVNode(_sfc_main$2, {
                            class: "mt-3",
                            message: unref(deductForm).errors.amount
                          }, null, 8, ["message"])
                        ], 32)
                      ])) : createCommentVNode("", true),
                      showPasswordForm.value ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "row mt-4 flex"
                      }, [
                        createVNode("form", {
                          onSubmit: withModifiers(submitChangePassword, ["prevent"])
                        }, [
                          createVNode("div", { class: "row col-5" }, [
                            createVNode("label", null, "Password"),
                            createVNode(_sfc_main$3, {
                              modelValue: unref(changePasswordForm).password,
                              "onUpdate:modelValue": ($event) => unref(changePasswordForm).password = $event,
                              id: "password",
                              type: "password",
                              placeholder: "Password",
                              "aria-label": "Password",
                              error: unref(changePasswordForm).errors.hasOwnProperty("password")
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                            createVNode(_sfc_main$2, {
                              class: "mt-2",
                              message: unref(changePasswordForm).errors.password
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "row col-5" }, [
                            createVNode("label", null, "Confirm Password"),
                            createVNode(_sfc_main$3, {
                              modelValue: unref(changePasswordForm).password_confirmation,
                              "onUpdate:modelValue": ($event) => unref(changePasswordForm).password_confirmation = $event,
                              id: "password_confirmation",
                              type: "password",
                              placeholder: "Password Confirmation",
                              "aria-label": "Password Confirmation",
                              error: unref(changePasswordForm).errors.hasOwnProperty("password_confirmation")
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                            createVNode(_sfc_main$2, {
                              class: "mt-2",
                              message: unref(changePasswordForm).errors.password_confirmation
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "col-auto" }, [
                            createVNode("button", {
                              type: "submit",
                              name: "button",
                              class: "m-0 btn bg-gradient-success"
                            }, " Submit ")
                          ])
                        ], 32)
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "col-lg-6 mt-lg-0 mt-4" }, [
                    createVNode("div", { class: "card mt-4" }, [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("h5", null, "User Settings"),
                        createVNode("p", { class: "text-sm" }, "Control user settings")
                      ]),
                      createVNode("div", { class: "card-body pt-0" }, [
                        createVNode("div", { class: "table-responsive" }, [
                          createVNode("table", { class: "table mb-0" }, [
                            createVNode("thead", null, [
                              createVNode("tr", null, [
                                createVNode("th", {
                                  class: "ps-1",
                                  colspan: "4"
                                }, [
                                  createVNode("p", { class: "mb-0" }, "Setting")
                                ]),
                                createVNode("th", { class: "text-center" }, [
                                  createVNode("p", { class: "mb-0" }, "Status")
                                ])
                              ])
                            ]),
                            createVNode("tbody", null, [
                              createVNode("tr", null, [
                                createVNode("td", {
                                  class: "ps-1",
                                  colspan: "4"
                                }, [
                                  createVNode("div", { class: "my-auto" }, [
                                    createVNode("span", { class: "text-dark d-block text-sm" }, "API"),
                                    createVNode("span", { class: "text-xs font-weight-normal" }, "Enable or forbid the user from using API.")
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "form-check form-switch mb-0 d-flex align-items-center justify-content-center" }, [
                                    withDirectives(createVNode("input", {
                                      "onUpdate:modelValue": ($event) => unref(form).api_enabled = $event,
                                      class: "form-check-input",
                                      type: "checkbox",
                                      id: "flexSwitchCheckDefault12",
                                      onChange: onApiStatusChange
                                    }, null, 40, ["onUpdate:modelValue"]), [
                                      [vModelCheckbox, unref(form).api_enabled]
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("tr", null, [
                                createVNode("td", {
                                  class: "ps-1",
                                  colspan: "4"
                                }, [
                                  createVNode("div", { class: "my-auto" }, [
                                    createVNode("span", { class: "text-dark d-block text-sm" }, "Active"),
                                    createVNode("span", { class: "text-xs font-weight-normal" }, "Enable or disable user from logging in and using the system.")
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode("div", { class: "form-check form-switch mb-0 d-flex align-items-center justify-content-center" }, [
                                    withDirectives(createVNode("input", {
                                      "onUpdate:modelValue": ($event) => unref(form).enabled = $event,
                                      class: "form-check-input",
                                      type: "checkbox",
                                      id: "flexSwitchCheckDefault11",
                                      onChange: onStatusChange
                                    }, null, 40, ["onUpdate:modelValue"]), [
                                      [vModelCheckbox, unref(form).enabled]
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-lg-6 mt-lg-0 mt-4" }, [
                    createVNode("div", { class: "card mt-4" }, [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "col-md-6" }, [
                            createVNode("h5", null, "Transactions")
                          ]),
                          createVNode("div", { class: "col-md-6 d-flex justify-content-end align-items-center" }, [
                            createVNode(unref(Link), {
                              href: _ctx.route("user.transactions", __props.user.id)
                            }, {
                              default: withCtx(() => [
                                createVNode("small", null, [
                                  createTextVNode("More "),
                                  createVNode("i", {
                                    class: "fa fa-chevron-right ms-2",
                                    "aria-hidden": "true"
                                  })
                                ])
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "card-body pt-0" }, [
                        __props.transactions.total > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "table-responsive"
                        }, [
                          createVNode("ul", { class: "list-group" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.transactions.data, (transaction, i) => {
                              return openBlock(), createBlock("li", { class: "list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg" }, [
                                createVNode("div", { class: "d-flex align-items-center" }, [
                                  createVNode("span", {
                                    class: ["btn btn-icon-only btn-rounded mb-0 me-3 btn-sm d-flex align-items-center justify-content-center", {
                                      "btn-outline-success": transaction.direction === "in",
                                      "btn-outline-danger": transaction.direction === "out"
                                    }]
                                  }, [
                                    transaction.direction === "in" ? (openBlock(), createBlock("i", {
                                      key: 0,
                                      class: "fas fa-arrow-up",
                                      "aria-hidden": "true"
                                    })) : createCommentVNode("", true),
                                    transaction.direction === "out" ? (openBlock(), createBlock("i", {
                                      key: 1,
                                      class: "fas fa-arrow-down",
                                      "aria-hidden": "true"
                                    })) : createCommentVNode("", true)
                                  ], 2),
                                  createVNode("div", { class: "d-flex flex-column" }, [
                                    transaction.type === "internal" ? (openBlock(), createBlock("h6", {
                                      key: 0,
                                      class: "mb-1 text-dark text-sm text-capitalize"
                                    }, toDisplayString(transaction.type), 1)) : (openBlock(), createBlock("h6", {
                                      key: 1,
                                      class: "mb-1 text-dark text-sm text-capitalize"
                                    }, toDisplayString(transaction.payment_method), 1)),
                                    createVNode("span", { class: "text-xs" }, toDisplayString(transaction.formatted_created_at), 1)
                                  ])
                                ]),
                                transaction.direction === "in" ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
                                }, " + " + toDisplayString(transaction.amount.formatted), 1)) : createCommentVNode("", true),
                                transaction.direction === "out" ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "d-flex align-items-center text-danger text-gradient text-sm font-weight-bold"
                                }, " - " + toDisplayString(transaction.amount.formatted), 1)) : createCommentVNode("", true)
                              ]);
                            }), 256))
                          ])
                        ])) : (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode("small", null, "No Transactions")
                        ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
