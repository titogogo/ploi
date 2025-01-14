import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  name: "SoftButton",
  props: {
    color: {
      type: String,
      default: "success"
    },
    size: {
      type: String,
      default: "md"
    },
    variant: {
      type: String,
      default: "fill"
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getClasses: (variant, color, size, fullWidth, active) => {
      let colorValue, sizeValue, fullWidthValue, activeValue;
      if (variant === "gradient") {
        colorValue = `bg-gradient-${color}`;
      } else if (variant === "outline") {
        colorValue = `btn-outline-${color}`;
      } else {
        colorValue = `btn-${color}`;
      }
      sizeValue = size ? `btn-${size}` : null;
      fullWidthValue = fullWidth ? `w-100` : null;
      activeValue = active ? `active` : null;
      return `${colorValue} ${sizeValue} ${fullWidthValue} ${activeValue}`;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: ["btn mb-0", $options.getClasses($props.variant, $props.color, $props.size, $props.fullWidth, $props.active)]
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SoftButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SoftButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SoftButton as S
};
