import { inject, mergeProps, withCtx, unref, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./InputError-BGJo5hu6.js";
import { _ as _sfc_main$2 } from "./SoftInput-BWS2dL-g.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    template: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const swal = inject("$swal");
    const { template } = __props;
    const form = useForm({
      name: template.name,
      content: template.content
    });
    const submit = () => {
      form.patch(route("templates.update", template.id), {
        onSuccess: () => {
          swal.fire({
            title: "Created!",
            text: "Template is edited successfully.",
            icon: "success"
          });
          form.reset();
        },
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "New Template" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="mx-auto col-lg-9 col-12"${_scopeId}><div class="mt-4 card card-body"${_scopeId}><form role="form"${_scopeId}><h6 class="mb-0"${_scopeId}>Create new template</h6><p class="mb-0 text-sm"${_scopeId}>Create message template</p><hr class="my-3 horizontal dark"${_scopeId}><div class="row"${_scopeId}><label${_scopeId}>Name</label>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              id: "name",
              type: "text",
              placeholder: "Name",
              "aria-label": "Name",
              error: unref(form).errors.hasOwnProperty("name"),
              "is-required": true
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="row"${_scopeId}><div class="form-group"${_scopeId}><label${_scopeId}>Content</label><textarea class="form-control" rows="5"${_scopeId}>${ssrInterpolate(unref(form).content)}</textarea>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-4 d-flex justify-content-end"${_scopeId}><button type="submit" name="button" class="m-0 btn bg-gradient-success ms-2"${_scopeId}> Submit </button></div></form></div></div></div></div>`);
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
                        createVNode("h6", { class: "mb-0" }, "Create new template"),
                        createVNode("p", { class: "mb-0 text-sm" }, "Create message template"),
                        createVNode("hr", { class: "my-3 horizontal dark" }),
                        createVNode("div", { class: "row" }, [
                          createVNode("label", null, "Name"),
                          createVNode(_sfc_main$2, {
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            id: "name",
                            type: "text",
                            placeholder: "Name",
                            "aria-label": "Name",
                            error: unref(form).errors.hasOwnProperty("name"),
                            "is-required": true
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                          createVNode(_sfc_main$3, {
                            message: unref(form).errors.name
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "row" }, [
                          createVNode("div", { class: "form-group" }, [
                            createVNode("label", null, "Content"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(form).content = $event,
                              class: "form-control",
                              rows: "5"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).content]
                            ]),
                            createVNode(_sfc_main$3, {
                              message: unref(form).errors.name
                            }, null, 8, ["message"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Template/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
