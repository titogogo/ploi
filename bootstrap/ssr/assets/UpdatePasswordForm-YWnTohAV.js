import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "password",
        class: "card mt-4"
      }, _attrs))}><div class="card-header"><h5>Change Password</h5></div><div class="card-body pt-0"><form role="form" class="text-left"><label class="form-label">Current password</label><div class="form-group"><div class=""><input id="currentPassword"${ssrRenderAttr("value", unref(form).current_password)} type="password" class="form-control form-control-default" name="" placeholder="Current Password" isrequired="false"></div></div><label class="form-label">New password</label><div class="form-group"><div class=""><input id="newPassword"${ssrRenderAttr("value", unref(form).password)} type="password" class="form-control form-control-default" name="" placeholder="New Password" isrequired="false"></div></div><label class="form-label">Confirm new password</label><div class="form-group"><div class=""><input id="confirmPassword" type="password"${ssrRenderAttr("value", unref(form).password_confirmation)} class="form-control form-control-default" name="" placeholder="Confirm password" isrequired="false"></div></div><h5 class="mt-5">Password requirements</h5><p class="text-muted mb-2"> Please follow this guide for a strong password: </p><ul class="text-muted ps-4 mb-0 float-start"><li><span class="text-sm">One special characters</span></li><li><span class="text-sm">Min 6 characters</span></li><li><span class="text-sm">One number (2 are recommended)</span></li><li><span class="text-sm">Change it often</span></li></ul><button class="btn mb-0 bg-gradient-dark btn-sm null null float-end mt-6 mb-0">Update password</button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
