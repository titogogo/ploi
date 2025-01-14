import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = {
  __name: "SoftCheckbox",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-check" }, _attrs))}><input${ssrRenderAttr("id", __props.id)} class="form-check-input" type="checkbox"${ssrRenderAttr("name", __props.name)}${ssrIncludeBooleanAttr(__props.checked) ? " checked" : ""}><label${ssrRenderAttr("for", __props.id)} class="${ssrRenderClass([_ctx.$attrs.class, "custom-control-label"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</label></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SoftCheckbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
