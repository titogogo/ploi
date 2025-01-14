import { mergeProps, withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
const success = "/build/assets/success-Ca-cp_6i.png";
const _sfc_main = {
  __name: "Success",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Payment Success" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="mx-auto col-lg-9 col-12"${_scopeId}><div class="mt-4 card card-body"${_scopeId}><img class="mt-3 mx-auto"${ssrRenderAttr("src", unref(success))} alt="Payment Success" width="82"${_scopeId}><h6 class="mx-auto mt-3"${_scopeId}>Your payment succeeded.</h6><p class="mx-auto mb-5 text-sm"${_scopeId}>Your order is succeeded and being processed your funds will be added shortly.</p></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4 container-fluid" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "mx-auto col-lg-9 col-12" }, [
                    createVNode("div", { class: "mt-4 card card-body" }, [
                      createVNode("img", {
                        class: "mt-3 mx-auto",
                        src: unref(success),
                        alt: "Payment Success",
                        width: "82"
                      }, null, 8, ["src"]),
                      createVNode("h6", { class: "mx-auto mt-3" }, "Your payment succeeded."),
                      createVNode("p", { class: "mx-auto mb-5 text-sm" }, "Your order is succeeded and being processed your funds will be added shortly.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Payment/Success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
