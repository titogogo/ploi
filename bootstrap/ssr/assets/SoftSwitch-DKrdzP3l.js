import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = {
  __name: "SoftSwitch",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    labelClass: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "onChange"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-check form-switch" }, _attrs))}><input${ssrRenderAttr("id", __props.id)} class="${ssrRenderClass([_ctx.$attrs.class, "form-check-input"])}" type="checkbox"${ssrRenderAttr("name", __props.name)}${ssrIncludeBooleanAttr(__props.checked) ? " checked" : ""}><label class="${ssrRenderClass([__props.labelClass, "form-check-label"])}"${ssrRenderAttr("for", __props.id)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</label></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SoftSwitch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
