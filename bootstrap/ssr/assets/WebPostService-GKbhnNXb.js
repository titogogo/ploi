import { inject, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./SoftInput-BWS2dL-g.js";
const _sfc_main = {
  __name: "WebPostService",
  __ssrInlineRender: true,
  props: {
    username: {
      type: String,
      required: true,
      nullable: true
    },
    password: {
      type: String,
      required: true,
      nullable: true
    }
  },
  setup(__props) {
    inject("$swal");
    const { username, password } = __props;
    const form = useForm({
      web_post_service_username: username,
      web_post_service_password: password
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "WebPostService",
        class: "card mt-4"
      }, _attrs))}><div class="card-header pb-3"><h5>Web Post Service</h5><p class="text-sm"> Web Post Service Settings </p></div><div class="card-body pt-0"><form role="form" class="text-left"><label class="form-label">Username</label><div class="form-group">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        id: "web_post_service_username",
        modelValue: unref(form).web_post_service_username,
        "onUpdate:modelValue": ($event) => unref(form).web_post_service_username = $event,
        type: "text",
        placeholder: "Username",
        name: "web_post_service_username",
        autofocus: "",
        error: unref(form).errors.hasOwnProperty("web_post_service_username")
      }, null, _parent));
      _push(`</div><label class="form-label">Password</label><div class="form-group">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        id: "web_post_service_password",
        modelValue: unref(form).web_post_service_password,
        "onUpdate:modelValue": ($event) => unref(form).web_post_service_password = $event,
        type: "text",
        placeholder: "Password",
        name: "web_post_service_password",
        autofocus: "",
        error: unref(form).errors.hasOwnProperty("web_post_service_password")
      }, null, _parent));
      _push(`</div><button class="btn bg-gradient-dark btn-sm null null float-end mt-3 mb-0">Save</button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Partials/WebPostService.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
