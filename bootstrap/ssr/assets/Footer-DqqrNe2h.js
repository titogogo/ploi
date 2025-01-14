import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "py-5 footer" }, _attrs))}><div class="container"><div class="row"><div class="mx-auto mt-1 text-center col-8"><p class="mb-0 text-secondary"> Copyright © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Sendroid by <a href="https://www.ateframadan.me" class="font-weight-bold" target="_blank">Atef Ramadan</a>. </p></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PageLayout/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AppFooter as A
};
