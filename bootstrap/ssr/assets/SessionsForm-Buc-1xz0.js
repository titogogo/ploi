import { ref, onMounted, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { S as SoftButton } from "./SoftButton-Ca5ZEi_O.js";
import { Modal } from "bootstrap";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "SessionsForm",
  __ssrInlineRender: true,
  props: {
    sessions: Array
  },
  setup(__props) {
    const confirmingLogout = ref(false);
    const passwordInput = ref(null);
    const modal = ref(null);
    onMounted(() => {
      modal.value = Modal.getOrCreateInstance("#modal-form");
    });
    const form = useForm({
      password: ""
    });
    const confirmLogout = () => {
      confirmingLogout.value = true;
      form.reset();
      setTimeout(() => passwordInput.value.focus(), 250);
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.sessions.length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          id: "sessions",
          class: "card mt-4"
        }, _attrs))}><div class="card-header pb-3"><h5>Sessions</h5><p class="text-sm"> This is a list of devices that have logged into your account. Remove those that you do not recognize. </p></div><div class="card-body pt-0"><!--[-->`);
        ssrRenderList(__props.sessions, (session, i) => {
          _push(`<!--[--><div class="d-flex align-items-center"><div class="text-center w-5"><i class="fas fa-desktop text-lg opacity-6" aria-hidden="true"></i></div><div class="my-auto ms-3">`);
          if (session.is_current_device) {
            _push(`<div class="h-100"><p class="text-sm mb-1">${ssrInterpolate(session.agent.browser ? session.agent.browser : "Unknown")} on ${ssrInterpolate(session.agent.platform ? session.agent.platform : "Unknown")}</p><p class="mb-0 text-xs">Your current session</p></div>`);
          } else {
            _push(`<!--[-->${ssrInterpolate(session.agent.browser ? session.agent.browser : "Unknown")} on ${ssrInterpolate(session.agent.platform ? session.agent.platform : "Unknown")}<!--]-->`);
          }
          _push(`</div>`);
          if (session.is_current_device) {
            _push(`<span class="badge bg-success badge-sm null null my-auto ms-auto me-3">Active</span>`);
          } else {
            _push(`<!---->`);
          }
          if (!session.is_current_device) {
            _push(ssrRenderComponent(SoftButton, {
              "data-bs-toggle": "modal",
              "data-bs-target": "#modal-form",
              onClick: confirmLogout,
              class: "bg-gradient-danger btn-sm null null my-sm-auto mt-2 mb-0 ms-auto"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`Logout`);
                } else {
                  return [
                    createTextVNode("Logout")
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (i + 1 !== __props.sessions.length) {
            _push(`<hr class="horizontal dark">`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div><div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-md" role="document"><div class="modal-content"><div class="modal-body p-0"><div class="card card-plain"><div class="card-header pb-0 text-left"><h3 class="font-weight-normal text-danger">Log Out Other Browser Sessions</h3><p class="mb-0">Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices.</p></div><div class="card-body"><form role="form" class="text-left"><label>Password</label><div class="input-group mb-3"><input${ssrRenderAttr("value", unref(form).password)} type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon"></div><div class="text-center">`);
        _push(ssrRenderComponent(SoftButton, { class: "bg-gradient-danger btn-lg w-100 mt-4 mb-0" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Confirm`);
            } else {
              return [
                createTextVNode("Confirm")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></form></div></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/SessionsForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
