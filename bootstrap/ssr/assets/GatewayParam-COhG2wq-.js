import { reactive, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "GatewayParam",
  __ssrInlineRender: true,
  props: {
    index: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    hasName: {
      type: Boolean,
      default: true
    },
    hasValue: {
      type: Boolean,
      default: true
    },
    error: {
      type: String,
      nullable: true
    },
    deletable: {
      type: Boolean,
      default: true
    },
    nullable: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },
  emits: ["onRemove", "onChange"],
  setup(__props, { emit: __emit }) {
    const { type, index, name, value } = __props;
    const data = reactive({
      type,
      name,
      value
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-3 row align-items-center" }, _attrs))} data-v-0269c199><div class="col-2" data-v-0269c199><label class="text-capitalize" data-v-0269c199>${ssrInterpolate(__props.type)}</label></div><div class="col-9" data-v-0269c199><div class="row" data-v-0269c199><div class="col-6" data-v-0269c199><input id="param_name" name="param_name"${ssrRenderAttr("value", data.name)} placeholder="Parameter" class="${ssrRenderClass([{ "d-none": !__props.hasName }, "form-control multisteps-form__input"])}"${ssrIncludeBooleanAttr(!__props.nullable) ? " required" : ""} data-v-0269c199></div>`);
      if (__props.hasValue) {
        _push(`<div class="col-6" data-v-0269c199><input id="param_value" class="form-control multisteps-form__input" name="param_value"${ssrRenderAttr("value", data.value)} placeholder="Value" data-v-0269c199></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (__props.deletable) {
        _push(`<div class="col-sm" data-v-0269c199><button type="button" class="remove-btn" data-v-0269c199>X</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/GatewayParam.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GatewayParam = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0269c199"]]);
export {
  GatewayParam as G
};
