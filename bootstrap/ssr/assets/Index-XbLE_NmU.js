import { inject, mergeProps, withCtx, unref, createVNode, withModifiers, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import { useForm, usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./InputError-BGJo5hu6.js";
import { _ as _sfc_main$2 } from "./SoftInput-BWS2dL-g.js";
import { copyText } from "vue3-clipboard";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    tokens: Array,
    availablePermissions: Array,
    defaultPermissions: Array
  },
  setup(__props) {
    const swal = inject("$swal");
    const props = __props;
    const createApiTokenForm = useForm({
      name: "",
      permissions: props.defaultPermissions
    });
    const deleteApiTokenForm = useForm({});
    const page = usePage();
    const createApiToken = () => {
      createApiTokenForm.post(route("api-tokens.store"), {
        preserveScroll: true,
        onSuccess: async () => {
          await swal.fire({
            title: "API Token",
            input: "text",
            html: `<span class='text-sm text-danger'>Please copy your new API token. For your security, it won't be shown again.</span>`,
            inputLabel: "Your API Token",
            inputValue: page.props.jetstream.flash.token,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: `<i class="fa-solid fa-copy"></i> Copy!`
          });
          copyText(page.props.jetstream.flash.token, page.props.jetstream.flash.token, () => {
          });
          createApiTokenForm.reset();
        }
      });
    };
    const deleteApiToken = (id) => {
      deleteApiTokenForm.delete(route("api-tokens.destroy", id), {
        preserveScroll: true,
        preserveState: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "History" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="card"${_scopeId}><div class="pb-0 card-header"${_scopeId}><h6 class="mb-0"${_scopeId}>API Tokens</h6><p class="mb-0 text-sm"${_scopeId}>Create API Token</p><hr class="my-3 horizontal dark"${_scopeId}></div><div class="card-body"${_scopeId}><form role="form"${_scopeId}><label${_scopeId}>Name</label>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              modelValue: unref(createApiTokenForm).name,
              "onUpdate:modelValue": ($event) => unref(createApiTokenForm).name = $event,
              id: "name",
              type: "text",
              placeholder: "Name",
              "aria-label": "Name",
              error: unref(createApiTokenForm).errors.hasOwnProperty("name")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(createApiTokenForm).errors.name
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-4 d-flex justify-content-end"${_scopeId}><button type="submit" name="button" class="m-0 btn bg-gradient-success ms-2"${_scopeId}> Create </button></div></form></div></div><div class="card mt-4" id="2fa"${_scopeId}><div class="card-header"${_scopeId}><h5 class="mb-0"${_scopeId}>Manage API Tokens</h5><span class="mt-2 text-sm ms-auto"${_scopeId}>You may delete any of your existing tokens if they are no longer needed.</span></div><hr class="my-3 horizontal dark"${_scopeId}><div class="card-body"${_scopeId}>`);
            if (__props.tokens.length === 0) {
              _push2(`<div${_scopeId}> No Tokens </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(__props.tokens, (token, i) => {
              _push2(`<!--[--><div class="d-flex"${_scopeId}><p class="my-auto"${_scopeId}>${ssrInterpolate(token.name)}</p><p class="text-secondary text-sm ms-auto my-auto me-3"${_scopeId}>`);
              if (token.last_used_ago) {
                _push2(`<!--[--> Last used ${ssrInterpolate(token.last_used_ago)}<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</p><button class="btn btn-sm btn-danger mb-0" type="button"${_scopeId}>Delete </button></div>`);
              if (i + 1 !== __props.tokens.length) {
                _push2(`<hr class="horizontal dark"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4 container-fluid" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-12" }, [
                    createVNode("div", { class: "card" }, [
                      createVNode("div", { class: "pb-0 card-header" }, [
                        createVNode("h6", { class: "mb-0" }, "API Tokens"),
                        createVNode("p", { class: "mb-0 text-sm" }, "Create API Token"),
                        createVNode("hr", { class: "my-3 horizontal dark" })
                      ]),
                      createVNode("div", { class: "card-body" }, [
                        createVNode("form", {
                          role: "form",
                          onSubmit: withModifiers(createApiToken, ["prevent"])
                        }, [
                          createVNode("label", null, "Name"),
                          createVNode(_sfc_main$2, {
                            modelValue: unref(createApiTokenForm).name,
                            "onUpdate:modelValue": ($event) => unref(createApiTokenForm).name = $event,
                            id: "name",
                            type: "text",
                            placeholder: "Name",
                            "aria-label": "Name",
                            error: unref(createApiTokenForm).errors.hasOwnProperty("name")
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                          createVNode(_sfc_main$3, {
                            message: unref(createApiTokenForm).errors.name
                          }, null, 8, ["message"]),
                          createVNode("div", { class: "mt-4 d-flex justify-content-end" }, [
                            createVNode("button", {
                              type: "submit",
                              name: "button",
                              class: "m-0 btn bg-gradient-success ms-2"
                            }, " Create ")
                          ])
                        ], 32)
                      ])
                    ]),
                    createVNode("div", {
                      class: "card mt-4",
                      id: "2fa"
                    }, [
                      createVNode("div", { class: "card-header" }, [
                        createVNode("h5", { class: "mb-0" }, "Manage API Tokens"),
                        createVNode("span", { class: "mt-2 text-sm ms-auto" }, "You may delete any of your existing tokens if they are no longer needed.")
                      ]),
                      createVNode("hr", { class: "my-3 horizontal dark" }),
                      createVNode("div", { class: "card-body" }, [
                        __props.tokens.length === 0 ? (openBlock(), createBlock("div", { key: 0 }, " No Tokens ")) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.tokens, (token, i) => {
                          return openBlock(), createBlock(Fragment, null, [
                            createVNode("div", { class: "d-flex" }, [
                              createVNode("p", { class: "my-auto" }, toDisplayString(token.name), 1),
                              createVNode("p", { class: "text-secondary text-sm ms-auto my-auto me-3" }, [
                                token.last_used_ago ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createTextVNode(" Last used " + toDisplayString(token.last_used_ago), 1)
                                ], 64)) : createCommentVNode("", true)
                              ]),
                              createVNode("button", {
                                class: "btn btn-sm btn-danger mb-0",
                                type: "button",
                                onClick: ($event) => deleteApiToken(token.id)
                              }, "Delete ", 8, ["onClick"])
                            ]),
                            i + 1 !== __props.tokens.length ? (openBlock(), createBlock("hr", {
                              key: 0,
                              class: "horizontal dark"
                            })) : createCommentVNode("", true)
                          ], 64);
                        }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
