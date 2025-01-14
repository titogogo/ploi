import { onBeforeUnmount, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { A as AppFooter } from "./Footer-DqqrNe2h.js";
import { _ as _sfc_main$1 } from "./SoftInput-BWS2dL-g.js";
import { _ as _sfc_main$3 } from "./SoftSwitch-DKrdzP3l.js";
import { S as SoftButton } from "./SoftButton-Ca5ZEi_O.js";
import { s as store } from "./index-H4OGLnSd.js";
import { _ as _sfc_main$2 } from "./InputError-BGJo5hu6.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const Curved9 = "/build/assets/curved9-n-AzhRnc.jpg";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-gray-100");
    onBeforeUnmount(() => {
      body.classList.add("bg-gray-100");
    });
    const form = useForm({
      email: "",
      password: "",
      remember: true
    });
    store.toggleEveryDisplay();
    store.toggleHideConfig();
    onBeforeUnmount(() => {
      store.toggleEveryDisplay();
      store.toggleHideConfig();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Login" }, null, _parent));
      _push(`<main class="mt-0 main-content main-content-bg"><section><div class="page-header min-vh-75"><div class="container"><div class="row"><div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column"><div class="mt-8 card card-plain"><div class="pb-0 card-header text-start"><h3 class="font-weight-bolder text-success text-gradient"> Welcome back </h3><p class="mb-0">Enter your email and password to sign in</p></div><div class="card-body"><form role="form" class="text-start"><label>Email</label>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        id: "email",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        type: "email",
        placeholder: "Email",
        name: "email",
        autofocus: "",
        autocomplete: "username",
        error: unref(form).errors.hasOwnProperty("email")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`<label>Password</label>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        id: "password",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        placeholder: "Password",
        name: "password",
        required: "",
        autocomplete: "current-password",
        error: unref(form).errors.hasOwnProperty("password")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        class: "mt-2",
        message: unref(form).errors.password
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: unref(form).remember,
        "onUpdate:modelValue": ($event) => unref(form).remember = $event,
        id: "rememberMe",
        name: "rememberMe",
        checked: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Remember me `);
          } else {
            return [
              createTextVNode(" Remember me ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-center">`);
      _push(ssrRenderComponent(SoftButton, {
        class: ["my-4 mb-2", { "opacity-25": unref(form).processing }],
        variant: "gradient",
        color: "success",
        "full-width": "",
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign in `);
          } else {
            return [
              createTextVNode("Sign in ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div><div class="px-1 pt-0 text-center card-footer px-lg-2"><p class="mx-auto mb-4 text-sm"> Don&#39;t have an account? `);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("register"),
        class: "text-success text-gradient font-weight-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign up `);
          } else {
            return [
              createTextVNode("Sign up ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div></div><div class="col-md-6"><div class="top-0 oblique position-absolute h-100 d-md-block d-none me-n8"><div class="bg-cover oblique-image position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style="${ssrRenderStyle({
        backgroundImage: "url(" + unref(Curved9) + ")"
      })}"></div></div></div></div></div></div></section></main>`);
      _push(ssrRenderComponent(AppFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
