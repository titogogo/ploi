import { inject, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./SoftInput-BWS2dL-g.js";
const _sfc_main = {
  __name: "SmsSend",
  __ssrInlineRender: true,
  props: {
    apiKey: {
      type: String,
      required: true,
      nullable: true
    }
  },
  setup(__props) {
    inject("$swal");
    const { apiKey } = __props;
    const form = useForm({
      sms_send_co_key: apiKey
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "sms-send",
        class: "card mt-4"
      }, _attrs))}><div class="card-header pb-3"><h5>SMS-Send.co</h5><p class="text-sm"> sms-send.co settings will be here </p></div><div class="card-body pt-0"><form role="form" class="text-left"><label class="form-label">API Key</label><div class="form-group">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        id: "key",
        modelValue: unref(form).sms_send_co_key,
        "onUpdate:modelValue": ($event) => unref(form).sms_send_co_key = $event,
        type: "text",
        placeholder: "API Key",
        name: "key",
        autofocus: "",
        error: unref(form).errors.hasOwnProperty("sms_send_co_key")
      }, null, _parent));
      _push(`</div><button class="btn bg-gradient-dark btn-sm null null float-end mt-3 mb-0">Save</button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Settings/Partials/SmsSend.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
