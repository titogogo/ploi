import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
const _sfc_main = {
  __name: "SoftInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    size: {
      type: String,
      default: "default"
    },
    success: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    iconDir: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Type here..."
    },
    type: {
      type: String,
      default: "text"
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const getClasses = (size, success, error) => {
      let sizeValue, isValidValue;
      sizeValue = size ? `form-control-${size}` : null;
      if (error) {
        isValidValue = "is-invalid";
      } else if (success) {
        isValidValue = "is-valid";
      } else {
        isValidValue = "";
      }
      return `${sizeValue} ${isValidValue}`;
    };
    const getIcon = (icon) => icon ? icon : null;
    const hasIcon = (icon) => icon ? "input-group" : null;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-group" }, _attrs))}><div class="${ssrRenderClass(hasIcon(__props.icon))}">`);
      if (__props.iconDir === "left") {
        _push(`<span class="input-group-text"><i class="${ssrRenderClass(getIcon(__props.icon))}"></i></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("type", __props.type)} class="${ssrRenderClass([getClasses(__props.size, __props.success, __props.error), "form-control"])}"${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.isRequired) ? " required" : ""}${ssrIncludeBooleanAttr(__props.isDisabled) ? " disabled" : ""}>`);
      if (__props.iconDir === "right") {
        _push(`<span class="input-group-text"><i class="${ssrRenderClass(getIcon(__props.icon))}"></i></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SoftInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
