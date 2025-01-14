import { onBeforeMount, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { A as AppFooter } from "./Footer-DqqrNe2h.js";
import { _ as _sfc_main$1 } from "./SoftInput-BWS2dL-g.js";
import { _ as _sfc_main$3 } from "./SoftCheckbox-wi7PFum8.js";
import { S as SoftButton } from "./SoftButton-Ca5ZEi_O.js";
import { s as store } from "./index-H4OGLnSd.js";
import { _ as _sfc_main$2 } from "./InputError-BGJo5hu6.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const Curved6 = "/build/assets/curved6-DOI-bjvK.jpg";
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    store.toggleEveryDisplay();
    store.toggleHideConfig();
    onBeforeMount(() => {
      store.toggleEveryDisplay();
      store.toggleHideConfig();
    });
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent));
      _push(`<div class="pt-5 m-3 page-header align-items-start min-vh-50 pb-11 border-radius-lg" style="${ssrRenderStyle({
        backgroundImage: "url(" + unref(Curved6) + ")"
      })}"><span class="mask bg-gradient-dark opacity-6"></span><div class="container"><div class="row justify-content-center"><div class="mx-auto text-center col-lg-5"><h1 class="mt-5 mb-2 text-white">Welcome!</h1><p class="text-white text-lead"> Sendroid </p></div></div></div></div><div class="container"><div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center"><div class="mx-auto col-xl-4 col-lg-5 col-md-7"><div class="card z-index-0"><div class="card-body"><form role="form"><div class="mb-3">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        id: "name",
        type: "text",
        placeholder: "Name",
        "aria-label": "Name",
        error: unref(form).errors.hasOwnProperty("name")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "mt-2",
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div><div class="mb-3">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        id: "email",
        type: "email",
        placeholder: "Email",
        "aria-label": "Email",
        error: unref(form).errors.hasOwnProperty("email")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="mb-3">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        id: "password",
        type: "password",
        placeholder: "Password",
        "aria-label": "Password",
        error: unref(form).errors.hasOwnProperty("password")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "mt-2",
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div><div class="mb-3">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        id: "password_confirmation",
        type: "password",
        placeholder: "Password Confirmation",
        "aria-label": "Password Confirmation",
        error: unref(form).errors.hasOwnProperty("password_confirmation")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "mt-2",
        message: unref(form).errors.password_confirmation
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(form).terms,
        "onUpdate:modelValue": ($event) => unref(form).terms = $event,
        id: "flexCheckDefault",
        name: "flexCheckDefault",
        class: "font-weight-light",
        checked: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` I agree the <a href="javascript:;" class="text-dark font-weight-bolder"${_scopeId}>Terms and Conditions</a>`);
          } else {
            return [
              createTextVNode(" I agree the "),
              createVNode("a", {
                href: "javascript:;",
                class: "text-dark font-weight-bolder"
              }, "Terms and Conditions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "mt-2",
        message: unref(form).errors.terms
      }, null, _parent));
      _push(`<div class="text-center">`);
      _push(ssrRenderComponent(SoftButton, {
        color: "dark",
        "full-width": "",
        variant: "gradient",
        class: "my-4 mb-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign up`);
          } else {
            return [
              createTextVNode("Sign up")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-sm mt-3 mb-0"> Already have an account? `);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("login"),
        class: "text-dark font-weight-bolder"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign in `);
          } else {
            return [
              createTextVNode(" Sign in ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></form></div></div></div></div></div>`);
      _push(ssrRenderComponent(AppFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
