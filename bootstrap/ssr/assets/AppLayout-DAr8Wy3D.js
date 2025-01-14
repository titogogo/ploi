import { ref, unref, mergeProps, withCtx, createVNode, renderSlot, toDisplayString, useSSRContext, computed, reactive, onUpdated, onBeforeMount, onMounted } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { Link, router, Head } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { s as store } from "./index-H4OGLnSd.js";
import { Tooltip } from "bootstrap";
const _sfc_main$e = {
  __name: "SidenavCollapse",
  __ssrInlineRender: true,
  props: {
    to: {
      type: [Object, String],
      required: true
    },
    navText: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        class: ["nav-link", { "active router-link-exact-active": _ctx.route().current(__props.to) }],
        href: _ctx.route(__props.to)
      }, _ctx.$attrs, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center me-2"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><span class="nav-link-text ms-1"${_scopeId}>${ssrInterpolate(__props.navText)}</span>`);
          } else {
            return [
              createVNode("div", { class: "text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center me-2" }, [
                renderSlot(_ctx.$slots, "icon")
              ]),
              createVNode("span", { class: "nav-link-text ms-1" }, toDisplayString(__props.navText), 1)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sidenav/SidenavCollapse.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  props: {
    color: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "12px",
    height: "12px",
    viewBox: "0 0 45 40",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><title>shop</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fill-rule="nonzero"><g transform="translate(1716.000000, 291.000000)"><g transform="translate(0.000000, 148.000000)"><path class="color-background" d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z" opacity="0.598981585"></path><path class="color-background" d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"></path></g></g></g></g></svg>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/Shop.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Shop = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$c = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "12px",
    height: "12px",
    viewBox: "0 0 43 36",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><title>credit-card</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero"><g transform="translate(1716.000000, 291.000000)"><g transform="translate(453.000000, 454.000000)"><path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path><path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path></g></g></g></g></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/CreditCard.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const CreditCard = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$b = {
  props: {
    height: {
      type: String,
      default: "12px"
    },
    width: {
      type: String,
      default: "12px"
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: $props.width,
    height: $props.height,
    viewBox: "0 0 40 44",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><title>document</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fill-rule="nonzero"><g transform="translate(1716.000000, 291.000000)"><g transform="translate(154.000000, 300.000000)"><path class="color-background" d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z" opacity="0.603585379"></path><path class="color-background" d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"></path></g></g></g></g></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/Document.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Document = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$a = {
  props: {
    height: {
      type: String,
      default: "12px"
    },
    width: {
      type: String,
      default: "12px"
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
    width: $props.width,
    height: $props.height,
    viewBox: "0 0 40 40",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><title>spaceship</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF" fill-rule="nonzero"><g transform="translate(1716.000000, 291.000000)"><g transform="translate(4.000000, 301.000000)"><path class="color-background" d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"></path><path class="color-background" d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"></path><path class="color-background" d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z" opacity="0.598539807"></path><path class="color-background" d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z" opacity="0.598539807"></path></g></g></g></g></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/Spaceship.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Spaceship = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$9 = {
  props: {
    height: {
      type: String,
      default: "12px"
    },
    width: {
      type: String,
      default: "12px"
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: $props.width,
    height: $props.height,
    viewBox: "0 0 40 40",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><title>settings</title><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fill-rule="nonzero"><g transform="translate(1716.000000, 291.000000)"><g transform="translate(304.000000, 151.000000)"><polygon class="color-background" opacity="0.596981957" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon><path class="color-background" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" opacity="0.596981957"></path><path class="color-background" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"></path></g></g></g></g></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/Settings.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    style: { "enable-background": "new 0 0 24 24" },
    version: "1.1",
    viewBox: "0 0 24 24",
    "xml:space": "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><g id="info"></g><g id="icons"><g id="exit2"><path class="color-background" d="M12,10c1.1,0,2-0.9,2-2V4c0-1.1-0.9-2-2-2s-2,0.9-2,2v4C10,9.1,10.9,10,12,10z"></path><path class="color-background" d="M19.1,4.9L19.1,4.9c-0.3-0.3-0.6-0.4-1.1-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.4,0.2,0.8,0.4,1.1l0,0c0,0,0,0,0,0c0,0,0,0,0,0    c1.3,1.3,2,3,2,4.9c0,3.9-3.1,7-7,7s-7-3.1-7-7c0-1.9,0.8-3.7,2.1-4.9l0,0C7.3,6.8,7.5,6.4,7.5,6c0-0.8-0.7-1.5-1.5-1.5    c-0.4,0-0.8,0.2-1.1,0.4l0,0C3.1,6.7,2,9.2,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,9.2,20.9,6.7,19.1,4.9z"></path></g></g></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/Logout.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const LogoutIcon = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$7 = {
  __name: "SidenavDropdown",
  __ssrInlineRender: true,
  props: {
    navText: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const { links } = __props;
    const isActive = computed(() => {
      return links.find((link) => route().current(link.to)) !== void 0;
    });
    const show = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><a data-bs-toggle="collapse"${ssrRenderAttr("href", `#${__props.navText.replace(" ", "-")}`)}${ssrRenderAttr("aria-controls", `${__props.navText.replace(" ", "-")}`)} aria-expanded="false" class="${ssrRenderClass([{ "active": isActive.value }, "nav-link"])}" type="button"><div class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center me-2">`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`</div><span class="nav-link-text ms-1">${ssrInterpolate(__props.navText)}</span></a><div${ssrRenderAttr("id", __props.navText.replace(" ", "-"))} class="${ssrRenderClass([{ "show": show.value || isActive.value }, "collapse"])}"><ul class="nav ms-4 ps-3"><!--[-->`);
      ssrRenderList(__props.links, (link, index) => {
        _push(`<li class="nav-item">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route(link.to),
          class: ["nav-link", { "active router-link-exact-active": _ctx.route().current(link.to) }],
          "aria-current": "page"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="sidenav-mini-icon"${_scopeId}>${ssrInterpolate(link.icon)}</span><span class="sidenav-normal"${_scopeId}>${ssrInterpolate(link.text)}</span>`);
            } else {
              return [
                createVNode("span", { class: "sidenav-mini-icon" }, toDisplayString(link.icon), 1),
                createVNode("span", { class: "sidenav-normal" }, toDisplayString(link.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sidenav/SidenavDropdown.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "SidenavList",
  __ssrInlineRender: true,
  props: {
    cardBg: {
      type: String
    }
  },
  setup(__props) {
    ref("test");
    ref("dashboardsExamples");
    ref("active");
    const messagesMenuLinks = reactive([
      {
        to: "messages.create",
        icon: "S",
        text: "Send"
      },
      {
        to: "messages.index",
        icon: "SM",
        text: "History"
      },
      {
        to: "templates.index",
        icon: "T",
        text: "Templates"
      }
    ]);
    const contactsMenuLinks = reactive([
      {
        to: "address-books.create",
        icon: "N",
        text: "New"
      },
      {
        to: "address-books.index",
        icon: "L",
        text: "List"
      }
    ]);
    const fundsMenuLinks = reactive([
      {
        to: "coverage.index",
        icon: "C",
        text: "Coverage & Pricing"
      },
      {
        to: "fund.index",
        icon: "H",
        text: "History"
      },
      {
        to: "transfer-funds.index",
        icon: "T",
        text: "Transfer"
      }
    ]);
    const settingsMenuLinks = reactive([
      {
        to: "users.index",
        icon: "U",
        text: "Users"
      },
      {
        to: "settings.index",
        icon: "S",
        text: "Settings"
      },
      {
        to: "gateway.index",
        icon: "G",
        text: "Gateways"
      },
      {
        to: "manual-payments.index",
        icon: "MP",
        text: "Manual Payments"
      },
      {
        to: "payment.index",
        icon: "P",
        text: "Payment Logs"
      },
      {
        to: "dispute-logs.index",
        icon: "DL",
        text: "Dispute Logs"
      }
    ]);
    const logout = () => {
      router.post(route("logout"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100",
        id: "sidenav-collapse-main"
      }, _attrs))}><ul class="navbar-nav"><li class="nav-item">`);
      _push(ssrRenderComponent(_sfc_main$e, {
        navText: "Dashboard",
        to: "dashboard"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Shop, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Shop)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_sfc_main$e, {
        navText: "Buy Credits",
        to: "fund.create"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(CreditCard, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(CreditCard)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (_ctx.$page.props.auth.user.api_enabled) {
        _push(`<li class="nav-item">`);
        _push(ssrRenderComponent(_sfc_main$e, {
          navText: "API",
          to: "api-tokens.index"
        }, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fa-brands fa-connectdevelop"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "fa-brands fa-connectdevelop" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li class="nav-item">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        navText: "Messages",
        links: messagesMenuLinks
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Spaceship, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Spaceship)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        navText: "Address Books",
        links: contactsMenuLinks
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Document, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Document)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        navText: "Funds",
        links: fundsMenuLinks
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(CreditCard, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(CreditCard)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_sfc_main$e, {
        navText: "Settings",
        to: "profile.show"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Settings, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Settings)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (_ctx.$page.props.auth.user.admin) {
        _push(`<li class="nav-item">`);
        _push(ssrRenderComponent(_sfc_main$7, {
          navText: "Admin",
          links: settingsMenuLinks
        }, {
          icon: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(Settings, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(Settings)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li class="nav-item">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "nav-link",
        href: "#",
        onClick: logout
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center me-2"${_scopeId}>`);
            _push2(ssrRenderComponent(LogoutIcon, null, null, _parent2, _scopeId));
            _push2(`</div><span class="nav-link-text ms-1"${_scopeId}>Logout</span>`);
          } else {
            return [
              createVNode("div", { class: "text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center me-2" }, [
                createVNode(LogoutIcon)
              ]),
              createVNode("span", { class: "nav-link-text ms-1" }, "Logout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sidenav/SidenavList.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const logo = "/build/assets/logo-ct-CkMmw3U3.png";
const _sfc_main$5 = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    customClass: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: "my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl ms-3",
        id: "sidenav-main"
      }, _attrs))}><div class="sidenav-header"><i class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i><a class="m-0 navbar-brand" href="/"><img${ssrRenderAttr("src", unref(logo))} class="navbar-brand-img h-100" alt="main_logo"><span class="ms-1 font-weight-bold">Sendroid</span></a></div><hr class="mt-0 horizontal dark">`);
      _push(ssrRenderComponent(_sfc_main$6, { cardBg: __props.customClass }, null, _parent));
      _push(`</aside>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sidenav/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  props: {
    height: {
      type: String,
      default: "12px"
    },
    width: {
      type: String,
      default: "12px"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: $props.width,
    height: $props.height,
    class: "svg-inline--fa fa-house",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "house",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, _attrs))}><path class="" fill="currentColor" d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon/House.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const House = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const routeNames = {
  "fund.create": "Buy Credits",
  "messages.create": "New Message",
  "messages.index": "Scheduled Messages",
  "address-books.create": "New Address Book",
  "address-books.index": "Address Books",
  "fund.index": "Transactions",
  "transfer-funds.index": "Transfer Funds",
  "profile.show": "Settings",
  "coverage.index": "Coverage & Pricing",
  "coverage.create": "Create Coverage Rate",
  "settings.index": "Site Settings",
  "gateway.create": "Create new gateway",
  "gateway.index": "Gateways",
  "address-books.show": "Address Book Details",
  "dispute-logs.index": "Dispute Logs",
  "payment.index": "Payment Logs",
  "users.index": "Users",
  "users.show": "View User",
  "payment.show": "Submit manual payment",
  "manual-payments.index": "Manual Payments",
  "manual-payments.create": "Submit Manual Payment",
  "messages.responses": "Scheduled Message Responses",
  "templates.index": "Templates",
  "templates.create": "New Template",
  "templates.edit": "Edit Template",
  "manual-payments.show": "Manual Payment Details",
  "payment.success": "Payment Success",
  "api-tokens.index": "API Tokens",
  "gateway.edit": "Edit Gateway"
};
const _sfc_main$3 = {
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    currentPage: {
      required: true
    },
    textWhite: {
      type: String
    }
  },
  setup(__props) {
    const { currentPage } = __props;
    const pageName = computed(() => {
      return routeNames[currentPage] ?? currentPage;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ "aria-label": "breadcrumb" }, _attrs))}><ol class="${ssrRenderClass([unref(store).isRTL ? "" : " me-sm-6", "px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb"])}"><li class="${ssrRenderClass([__props.textWhite, "text-sm breadcrumb-item"])}">`);
      _push(ssrRenderComponent(unref(Link), {
        class: [__props.textWhite, "opacity-3 text-dark"],
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(House, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(House)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="${ssrRenderClass([__props.textWhite ? "text-white" : "text-dark", "text-sm breadcrumb-item active text-capitalize"])}" aria-current="page">${ssrInterpolate(pageName.value)}</li></ol><h6 class="${ssrRenderClass([__props.textWhite ? "text-white" : "", "mb-0 font-weight-bolder text-capitalize"])}">${ssrInterpolate(pageName.value)}</h6></nav>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Breadcrumbs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: {
    minNav: {
      type: Function
    },
    textWhite: {
      type: String
    }
  },
  setup(__props) {
    ref(false);
    const currentRouteName = computed(() => {
      return route().current();
    });
    const navClasses = computed(() => {
      return {
        "position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky": store.isNavFixed,
        "position-absolute px-4 mx-0 w-100 z-index-2": store.isAbsolute,
        "px-0 mx-4 mt-4": !store.isAbsolute
      };
    });
    onUpdated(() => {
      const navbar = document.getElementById("navbarBlur");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 10 && store.isNavFixed) {
          navbar.classList.add("blur");
          navbar.classList.add("position-sticky");
          navbar.classList.add("shadow-blur");
        } else {
          navbar.classList.remove("blur");
          navbar.classList.remove("position-sticky");
          navbar.classList.remove("shadow-blur");
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: ["shadow-none navbar navbar-main navbar-expand-lg border-radius-xl", navClasses.value]
      }, _ctx.$attrs, {
        id: "navbarBlur",
        "data-scroll": "true"
      }, _attrs))}><div class="px-3 py-1 container-fluid">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        currentPage: currentRouteName.value,
        textWhite: __props.textWhite
      }, null, _parent));
      _push(`<div class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4" id="navbar"><div class="pe-md-3 d-flex align-items-center ms-md-auto"><div class="input-group"><span class="input-group-text text-body"><i class="fas fa-search" aria-hidden="true"></i></span><input type="text" class="form-control" placeholder="Type here..."></div></div><ul class="navbar-nav justify-content-end"><li class="nav-item d-flex align-items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("profile.show"),
        class: ["px-0 nav-link font-weight-bold", __props.textWhite ? __props.textWhite : "text-body"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa fa-user me-sm-1"${_scopeId}></i><span class="d-sm-inline d-none"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} ( ${ssrInterpolate(_ctx.$page.props.auth.user.balance.formatted)} )</span>`);
          } else {
            return [
              createVNode("i", { class: "fa fa-user me-sm-1" }),
              createVNode("span", { class: "d-sm-inline d-none" }, toDisplayString(_ctx.$page.props.auth.user.name) + " ( " + toDisplayString(_ctx.$page.props.auth.user.balance.formatted) + " )", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item d-xl-none ps-3 d-flex align-items-center"><a href="#" class="p-0 nav-link text-body" id="iconNavbarSidenav"><div class="sidenav-toggler-inner"><i class="sidenav-toggler-line"></i><i class="sidenav-toggler-line"></i><i class="sidenav-toggler-line"></i></div></a></li>`);
      if (_ctx.$page.props.is_impersonating) {
        _push(`<li class="px-3 nav-item dropdown d-flex align-items-center pe-2">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("impersonate.leave"),
          class: "p-0 nav-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fa-solid fa-user-secret"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "fa-solid fa-user-secret" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navbars/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "py-3 footer" }, _attrs))}><div class="container-fluid"><div class="row align-items-center justify-content-lg-between"><div class="mb-4 col-lg-6 mb-lg-0"><div class="text-sm text-center copyright text-muted text-lg-start"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}, by <a href="https://www.ateframadan.me" class="font-weight-bold" target="_blank">Atef Ramadan</a></div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    onBeforeMount(() => {
      if (store.isPinned) {
        store.navbarMinimize();
        store.sidebarType("bg-white");
      } else {
        store.isTransparent = "bg-transparent";
      }
    });
    onMounted(() => {
      new Tooltip(document.body, {
        selector: "[data-bs-toggle='tooltip']",
        trigger: "hover",
        container: document.body
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      if (unref(store).showSidenav) {
        _push(ssrRenderComponent(_sfc_main$5, {
          custom_class: unref(store).mcolor,
          class: [
            "fixed-start",
            unref(store).isTransparent,
            unref(store).isRTL ? "fixed-end" : "fixed-start"
          ]
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg" style="${ssrRenderStyle(unref(store).isRTL ? "overflow-x: hidden" : "")}">`);
      if (unref(store).showNavbar) {
        _push(ssrRenderComponent(_sfc_main$2, {
          textWhite: unref(store).isAbsolute ? "text-white opacity-8" : "",
          minNav: unref(store).navbarMinimize
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(AppFooter, {
        style: unref(store).showFooter ? null : { display: "none" }
      }, null, _parent));
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  Document as D,
  House as H,
  _sfc_main as _
};
