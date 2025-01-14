import { mergeProps, useSSRContext, resolveComponent, ref, reactive, withCtx, unref, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$9 } from "./AppLayout-DAr8Wy3D.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import Chart from "chart.js/auto/auto.esm.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import bootstrap from "bootstrap/dist/js/bootstrap.js";
import { faUsers, faHandPointer, faCreditCard, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import "@inertiajs/vue3";
import "./index-H4OGLnSd.js";
import "bootstrap";
const _sfc_main$8 = {
  name: "MiniStatisticsCard",
  props: {
    directionReverse: {
      type: Boolean,
      default: false
    },
    title: {
      type: [Object, String],
      default: null,
      text: {
        type: String
      },
      color: {
        type: String
      }
    },
    value: {
      type: [Object, String, Number],
      required: true,
      text: {
        type: [String, Number]
      },
      color: {
        type: String
      }
    },
    percentage: {
      type: [Object, String],
      value: {
        type: String
      },
      color: {
        type: String
      },
      default: () => ({
        color: "text-success"
      })
    },
    icon: {
      type: [String, Object],
      component: {
        type: String
      },
      background: {
        type: String
      },
      default: () => ({
        background: "bg-white"
      })
    },
    classContent: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      reverseDirection: "flex-row-reverse justify-content-between"
    };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-4 card" }, _attrs))}><div class="p-3 card-body"><div class="${ssrRenderClass([$props.directionReverse ? $data.reverseDirection : "", "d-flex"])}"><div><div class="${ssrRenderClass([typeof $props.icon === "object" ? $props.icon.background : "", "text-center shadow icon icon-shape border-radius-md"])}"><i class="${ssrRenderClass([typeof $props.icon === "string" ? $props.icon : $props.icon.component, "text-lg opacity-10"])}" aria-hidden="true"></i></div></div><div class="${ssrRenderClass($props.classContent)}"><div class="numbers"><p class="${ssrRenderClass([$props.title.color, "mb-0 text-sm text-capitalize font-weight-bold"])}">${ssrInterpolate(typeof $props.title === "string" ? $props.title : $props.title.text)}</p><h5 class="${ssrRenderClass([$props.value.color, "mb-0 font-weight-bolder"])}">${ssrInterpolate(typeof $props.value === "string" || typeof $props.value === "number" ? $props.value : $props.value.text)} <span class="${ssrRenderClass([$props.percentage.color, "text-sm font-weight-bolder"])}">${ssrInterpolate(typeof $props.percentage === "number" || typeof $props.percentage === "string" ? `${$props.percentage}` : "")} ${ssrInterpolate($props.percentage && $props.percentage === "object" ? `${$props.percentage.value}` : "")}</span></h5></div></div></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/examples/Cards/MiniStatisticsCard.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const MiniStatisticsCard = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$7 = {
  name: "ReportsBarChart",
  components: {
    FontAwesomeIcon
  },
  props: {
    id: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "dark"
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    chart: {
      type: Object,
      required: true,
      labels: Array,
      datasets: {
        type: Object,
        label: String,
        data: Array
      }
    },
    items: {
      type: Array,
      default: () => {
      }
    }
  },
  mounted() {
    var ctx = document.getElementById(this.id).getContext("2d");
    let chartStatus = Chart.getChart(this.id);
    if (chartStatus != void 0) {
      chartStatus.destroy();
    }
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: this.chart.labels,
        datasets: [
          {
            label: this.chart.datasets.label,
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: "#fff",
            data: this.chart.datasets.data,
            maxBarThickness: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        interaction: {
          intersect: false,
          mode: "index"
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 500,
              beginAtZero: true,
              padding: 15,
              font: {
                size: 14,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2
              },
              color: "#fff"
            }
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false
            },
            ticks: {
              display: false
            }
          }
        }
      }
    });
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<!--[--><div class="${ssrRenderClass([`bg-gradient-${$props.color}`, "py-3 mb-3 border-radius-lg pe-1"])}"><div class="chart"><canvas${ssrRenderAttr("id", $props.id)} class="chart-canvas" height="170"></canvas></div></div><h6 class="mt-4 mb-0 ms-2">${ssrInterpolate($props.title)}</h6><p class="text-sm ms-2">${$props.description}</p><div class="container border-radius-lg"><div class="row"><!--[-->`);
  ssrRenderList($props.items, ({
    label,
    progress: { content, percentage },
    icon: { color: colour, component }
  }, index) => {
    _push(`<div class="py-3 col-3 ps-0"><div class="mb-2 d-flex"><div class="${ssrRenderClass([`bg-gradient-${colour}`, "text-center shadow icon icon-shape icon-xxs border-radius-sm me-2 d-flex align-items-center justify-content-center"])}">`);
    _push(ssrRenderComponent(_component_font_awesome_icon, {
      icon: component,
      size: "xs",
      style: { color: "white" }
    }, null, _parent));
    _push(`</div><p class="mt-1 mb-0 text-xs font-weight-bold">${ssrInterpolate(label)}</p></div><h4 class="font-weight-bolder">${ssrInterpolate(content)}</h4><div class="progress w-75"><div class="${ssrRenderClass([`w-${percentage}`, "progress-bar bg-dark"])}" role="progressbar"${ssrRenderAttr("aria-valuenow", percentage)} aria-valuemin="0" aria-valuemax="100"></div></div></div>`);
  });
  _push(`<!--]--></div></div><!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/examples/Charts/ReportsBarChart.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ReportsBarChart = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {
  name: "GradientLineChart",
  props: {
    id: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: "300"
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    chart: {
      type: Object,
      required: true,
      labels: Array,
      datasets: {
        type: Array,
        label: String,
        data: Array
      }
    }
  },
  mounted() {
    var ctx = document.getElementById(this.id).getContext("2d");
    var gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke1.addColorStop(1, "rgba(203,12,159,0.2)");
    gradientStroke1.addColorStop(0.2, "rgba(72,72,176,0.0)");
    gradientStroke1.addColorStop(0, "rgba(203,12,159,0)");
    let chartStatus = Chart.getChart(this.id);
    if (chartStatus != void 0) {
      chartStatus.destroy();
    }
    new Chart(ctx, {
      type: "line",
      data: {
        labels: this.chart.labels,
        datasets: [
          {
            label: this.chart.datasets[0].label,
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#cb0c9f",
            // eslint-disable-next-line no-dupe-keys
            borderWidth: 3,
            backgroundColor: gradientStroke1,
            fill: true,
            data: this.chart.datasets[0].data,
            maxBarThickness: 6
          },
          {
            label: this.chart.datasets[1].label,
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#3A416F",
            // eslint-disable-next-line no-dupe-keys
            borderWidth: 3,
            backgroundColor: gradientStroke1,
            fill: true,
            data: this.chart.datasets[1].data,
            maxBarThickness: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        interaction: {
          intersect: false,
          mode: "index"
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#b2b9bf",
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2
              }
            }
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              color: "#b2b9bf",
              padding: 20,
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2
              }
            }
          }
        }
      }
    });
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="p-3 pb-0 card-header"><h6>${ssrInterpolate($props.title)}</h6>`);
  if ($props.description) {
    _push(`<p class="text-sm">${$props.description}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="p-3 card-body"><div class="chart"><canvas${ssrRenderAttr("id", $props.id)} class="chart-canvas"${ssrRenderAttr("height", $props.height)}></canvas></div></div><!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/examples/Charts/GradientLineChart.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const GradientLineChart = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {
  name: "TimelineList",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    darkMode: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["card", $props.darkMode ? "bg-gradient-dark" : ""]
  }, _attrs))}><div class="${ssrRenderClass([$props.darkMode ? "bg-transparent" : "", "pb-0 card-header"])}"><h6 class="${ssrRenderClass($props.darkMode ? "text-white" : "")}">${ssrInterpolate($props.title)}</h6><p class="text-sm">${$props.description}</p></div><div class="p-3 card-body"><div class="timeline timeline-one-side"${ssrRenderAttr("data-timeline-axis-style", $props.darkMode ? "dashed" : "dotted")}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TimelineList.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const TimelineList = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {
  name: "TimelineItem",
  props: {
    color: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    dateTime: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    badges: {
      type: Array,
      default: () => []
    },
    darkMode: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["mb-3 timeline-block", $props.darkMode]
  }, _attrs))}><span class="${ssrRenderClass([$props.darkMode ? "bg-dark" : "", "timeline-step"])}"><i class="${ssrRenderClass([`ni-${$props.icon} text-${$props.color}`, "ni text-gradient"])}"></i></span><div class="timeline-content"><h6 class="${ssrRenderClass([$props.darkMode ? "text-white" : "text-dark", "mb-0 text-sm font-weight-bold"])}">${ssrInterpolate($props.title)}</h6><p class="mt-1 mb-0 text-xs text-secondary font-weight-bold">${ssrInterpolate($props.dateTime)}</p>`);
  if ($props.description) {
    _push(`<p class="mt-3 mb-2 text-sm">${ssrInterpolate($props.description)}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--[-->`);
  ssrRenderList($props.badges, (badge, index) => {
    _push(`<span class="${ssrRenderClass([`bg-gradient-${$props.color}`, "badge badge-sm me-1"])}">${ssrInterpolate(badge)}</span>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TimelineItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TimelineItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
function setTooltip() {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}
const _sfc_main$3 = {
  name: "SoftAvatar",
  props: {
    img: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: null
    },
    shadow: {
      type: String,
      default: null
    },
    borderRadius: {
      type: String,
      default: null
    },
    circular: Boolean
  },
  methods: {
    getSize: (size) => size ? `avatar-${size}` : null,
    getClasses: (shadow, circular, borderRadius) => {
      let shadowValue, circularValue, borderRadiusValue;
      if (shadow) {
        shadowValue = shadow === "regular" ? "shadow" : `shadow-${shadow}`;
      } else {
        shadowValue = null;
      }
      circularValue = circular ? "rounded-circle" : null;
      borderRadiusValue = borderRadius ? `border-radius-${borderRadius}` : null;
      return `${shadowValue} ${circularValue} ${borderRadiusValue}`;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["avatar", $options.getSize($props.size)]
  }, _attrs))}><img${ssrRenderAttr("src", $props.img)}${ssrRenderAttr("alt", $props.alt)} class="${ssrRenderClass([$options.getClasses($props.shadow, $props.circular, $props.borderRadius)])}"></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SoftAvatar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SoftAvatar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  name: "SoftProgress",
  props: {
    color: {
      type: String,
      default: "success"
    },
    variant: {
      type: String,
      default: "fill"
    },
    percentage: {
      type: Number,
      required: true
    }
  },
  methods: {
    getClasses: (color, variant) => {
      let colorValue;
      if (variant === "gradient") {
        colorValue = `bg-gradient-${color}`;
      } else {
        colorValue = `bg-${color}`;
      }
      return `${colorValue}`;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "progress" }, _attrs))}><div class="${ssrRenderClass([$options.getClasses($props.color, $props.variant), "progress-bar"])}" style="${ssrRenderStyle({ width: $props.percentage + "%" })}"></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SoftProgress.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SoftProgress = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const img1 = "/build/assets/logo-xd-CtYhpXZR.svg";
const img20 = "/build/assets/team-1-DJIoI-3F.jpg";
const img7 = "/build/assets/team-2-DPziwPGc.jpg";
const img14 = "/build/assets/team-3-8tDraA6p.jpg";
const img21 = "/build/assets/team-4-hb0duPmq.jpg";
const img6 = "/build/assets/logo-atlassian-DT088Bvp.svg";
const img9 = "/build/assets/logo-slack-DBJRpEeG.svg";
const img12 = "/build/assets/logo-spotify-DNh7JtjD.svg";
const img17 = "/build/assets/logo-jira-DA05amXi.svg";
const img19 = "/build/assets/logo-invision-DpcBDFfE.svg";
const _sfc_main$1 = {
  name: "projects-card",
  data() {
    return {
      img1,
      img2: img20,
      img3: img7,
      img4: img14,
      img5: img21,
      img6,
      img7,
      img8: img21,
      img9,
      img10: img14,
      img11: img20,
      img12,
      img13: img21,
      img14,
      img15: img21,
      img16: img20,
      img17,
      img18: img21,
      img19,
      img20,
      img21
    };
  },
  components: {
    SoftAvatar,
    SoftProgress
  },
  mounted() {
    setTooltip();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_soft_avatar = resolveComponent("soft-avatar");
  const _component_soft_progress = resolveComponent("soft-progress");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="card-header pb-0"><div class="row"><div class="col-lg-6 col-7"><h6>Projects</h6><p class="text-sm mb-0"><i class="fa fa-check text-info" aria-hidden="true"></i><span class="font-weight-bold ms-1">30 done</span> this month </p></div><div class="col-lg-6 col-5 my-auto text-end"><div class="dropdown float-lg-end pe-4"><a class="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v text-secondary" aria-hidden="true"></i></a><ul class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable"><li><a class="dropdown-item border-radius-md" href="javascript:;">Action</a></li><li><a class="dropdown-item border-radius-md" href="javascript:;">Another action</a></li><li><a class="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li></ul></div></div></div></div><div class="card-body px-0 pb-2"><div class="table-responsive"><table class="table align-items-center mb-0"><thead><tr><th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Companies </th><th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"> Members </th><th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Budget </th><th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Completion </th></tr></thead><tbody><tr><td><div class="d-flex px-2 py-1"><div>`);
  _push(ssrRenderComponent(_component_soft_avatar, {
    img: $data.img1,
    size: "sm",
    class: "me-3",
    alt: "xd"
  }, null, _parent));
  _push(`</div><div class="d-flex flex-column justify-content-center"><h6 class="mb-0 text-sm">Soft UI XD Version</h6></div></div></td><td><div class="avatar-group mt-2"><a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Ryan Tompson"><img${ssrRenderAttr("src", $data.img2)} rounded-circle alt="team1"></a><a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Romina Hadid"><img${ssrRenderAttr("src", $data.img3)} alt="team2"></a><a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Alexander Smith"><img${ssrRenderAttr("src", $data.img4)} alt="team3"></a><a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Jessica Doe"><img${ssrRenderAttr("src", $data.img5)} rounded-circle alt="team4"></a></div></td><td class="align-middle text-center text-sm"><span class="text-xs font-weight-bold">$14,000</span></td><td class="align-middle"><div class="d-flex align-items-center justify-content-center"><span class="text-xs font-weight-bold mx-2">60%</span><div>`);
  _push(ssrRenderComponent(_component_soft_progress, {
    color: "info",
    class: "mx-auto",
    variant: "gradient",
    percentage: 60
  }, null, _parent));
  _push(`</div></div></td></tr><tr><td><div class="d-flex px-2 py-1"><div>`);
  _push(ssrRenderComponent(_component_soft_avatar, {
    img: $data.img6,
    size: "sm",
    class: "me-3",
    alt: "atlassian"
  }, null, _parent));
  _push(`</div><div class="d-flex flex-column justify-content-center"><h6 class="mb-0 text-sm">Add Progress Track</h6></div></div></td><td><div class="avatar-group mt-2"><a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Romina Hadid"><img${ssrRenderAttr("src", $data.img7)} alt="team5"></a><a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Jessica Doe"><img${ssrRenderAttr("src", $data.img8)} alt="team6"></a></div></td><td class="align-middle text-center text-sm"><span class="text-xs font-weight-bold">$3,000</span></td><td class="align-middle"><div class="d-flex align-items-center justify-content-center"><span class="text-xs font-weight-bold mx-2">10%</span><div>`);
  _push(ssrRenderComponent(_component_soft_progress, {
    color: "info",
    class: "mx-auto",
    variant: "gradient",
    percentage: 10
  }, null, _parent));
  _push(`</div></div></td></tr><tr><td><div class="d-flex px-2 py-1"><div>`);
  _push(ssrRenderComponent(_component_soft_avatar, {
    img: $data.img9,
    size: "sm",
    class: "me-3",
    alt: "team7"
  }, null, _parent));
  _push(`</div><div class="d-flex flex-column justify-content-center"><h6 class="mb-0 text-sm">Fix Platform Errors</h6></div></div></td><td><div class="avatar-group mt-2"><a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Romina Hadid"><img${ssrRenderAttr("src", $data.img10)} alt="team8"></a><a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Jessica Doe"><img${ssrRenderAttr("src", $data.img11)} alt="team9"></a></div></td><td class="align-middle text-center text-sm"><span class="text-xs font-weight-bold">Not set</span></td><td class="align-middle"><div class="d-flex align-items-center justify-content-center"><span class="text-xs font-weight-bold mx-2">100%</span><div>`);
  _push(ssrRenderComponent(_component_soft_progress, {
    color: "success",
    class: "mx-auto",
    variant: "gradient",
    percentage: 100
  }, null, _parent));
  _push(`</div></div></td></tr><tr><td><div class="d-flex px-2 py-1"><div>`);
  _push(ssrRenderComponent(_component_soft_avatar, {
    img: $data.img12,
    class: "me-3",
    size: "sm",
    alt: "spotify"
  }, null, _parent));
  _push(`</div><div class="d-flex flex-column justify-content-center"><h6 class="mb-0 text-sm">Launch our Mobile App</h6></div></div></td><td><div class="avatar-group mt-2"><a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Ryan Tompson"><img${ssrRenderAttr("src", $data.img13)} alt="user1"></a><a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Romina Hadid"><img${ssrRenderAttr("src", $data.img14)} alt="user2"></a><a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Alexander Smith"><img${ssrRenderAttr("src", $data.img15)} alt="user3"></a><a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Jessica Doe"><img${ssrRenderAttr("src", $data.img16)} alt="user4"></a></div></td><td class="align-middle text-center text-sm"><span class="text-xs font-weight-bold">$20,500</span></td><td class="align-middle"><div class="d-flex align-items-center justify-content-center"><span class="text-xs font-weight-bold mx-2">100%</span><div>`);
  _push(ssrRenderComponent(_component_soft_progress, {
    color: "success",
    class: "mx-auto",
    variant: "gradient",
    percentage: 100
  }, null, _parent));
  _push(`</div></div></td></tr><tr><td><div class="d-flex px-2 py-1"><div>`);
  _push(ssrRenderComponent(_component_soft_avatar, {
    img: $data.img17,
    "rounded-circle": "",
    class: "me-3",
    size: "sm",
    alt: "jira"
  }, null, _parent));
  _push(`</div><div class="d-flex flex-column justify-content-center"><h6 class="mb-0 text-sm">Add the New Pricing Page</h6></div></div></td><td><div class="avatar-group mt-2"><a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Ryan Tompson"><img${ssrRenderAttr("src", $data.img18)} alt="user5"></a></div></td><td class="align-middle text-center text-sm"><span class="text-xs font-weight-bold">$500</span></td><td class="align-middle"><div class="d-flex align-items-center justify-content-center"><span class="text-xs font-weight-bold mx-2">25%</span><div>`);
  _push(ssrRenderComponent(_component_soft_progress, {
    color: "info",
    class: "mx-auto",
    variant: "gradient",
    percentage: 25
  }, null, _parent));
  _push(`</div></div></td></tr><tr><td><div class="d-flex px-2 py-1"><div>`);
  _push(ssrRenderComponent(_component_soft_avatar, {
    img: $data.img19,
    class: "me-3",
    size: "sm",
    alt: "invision"
  }, null, _parent));
  _push(`</div><div class="d-flex flex-column justify-content-center"><h6 class="mb-0 text-sm">Redesign New Online Shop</h6></div></div></td><td><div class="avatar-group mt-2"><a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Ryan Tompson"><img${ssrRenderAttr("src", $data.img20)} alt="user6"></a><a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Jessica Doe"><img${ssrRenderAttr("src", $data.img21)} alt="user7"></a></div></td><td class="align-middle text-center text-sm"><span class="text-xs font-weight-bold">$2,000</span></td><td class="align-middle"><div class="d-flex align-items-center justify-content-center"><span class="text-xs font-weight-bold mx-2">40%</span><div>`);
  _push(ssrRenderComponent(_component_soft_progress, {
    color: "info",
    class: "mx-auto",
    variant: "gradient",
    percentage: 40
  }, null, _parent));
  _push(`</div></div></td></tr></tbody></table></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProjectsCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectsCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const US = "/build/assets/US-DOLT39Qo.png";
const DE = "/build/assets/DE-D-rZTz8y.png";
const GB = "/build/assets/GB-Dm4BLsRM.png";
const BR = "/build/assets/BR-EY1Adfmm.png";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    totalSales: {
      type: Number,
      required: String
    },
    todaySales: {
      type: Number,
      required: String
    },
    usersCount: {
      type: Number,
      required: false
    },
    newUsers: {
      type: Number,
      required: false
    }
  },
  setup(__props) {
    const iconBackground = ref("bg-gradient-success");
    reactive({
      us: {
        country: "United States",
        sales: 2500,
        value: "$230,900",
        bounce: "29.9%",
        flag: US
      },
      germany: {
        country: "Germany",
        sales: "3.900",
        value: "$440,000",
        bounce: "40.22%",
        flag: DE
      },
      britain: {
        country: "Great Britain",
        sales: "1.400",
        value: "$190,700",
        bounce: "23.44%",
        flag: GB
      },
      brasil: {
        country: "Brasil",
        sales: "562",
        value: "$143,960",
        bounce: "32.14%",
        flag: BR
      }
    });
    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$9, mergeProps({ title: "Dashboard" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="col-xl-3 col-sm-6 mb-xl-0 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(MiniStatisticsCard, {
              title: "Today's Money",
              value: `+` + __props.todaySales,
              percentage: {
                value: "+505%",
                color: "text-success"
              },
              icon: {
                component: "ni ni-money-coins",
                background: iconBackground.value
              },
              "direction-reverse": ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-xl-3 col-sm-6 mb-xl-0 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(MiniStatisticsCard, {
              title: "Today's Users",
              value: numberWithCommas(__props.usersCount),
              percentage: {
                value: "+3%",
                color: "text-success"
              },
              icon: {
                component: " ni ni-world",
                background: iconBackground.value
              },
              "direction-reverse": ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-xl-3 col-sm-6 mb-xl-0 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(MiniStatisticsCard, {
              title: "New Users",
              value: `+` + numberWithCommas(__props.newUsers),
              percentage: {
                value: "-2%",
                color: "text-danger"
              },
              icon: {
                component: "ni ni-paper-diploma",
                background: iconBackground.value
              },
              "direction-reverse": ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-xl-3 col-sm-6 mb-xl-0"${_scopeId}>`);
            _push2(ssrRenderComponent(MiniStatisticsCard, {
              title: "Sales",
              value: __props.totalSales,
              percentage: {
                value: "+5%",
                color: "text-success"
              },
              icon: {
                component: "ni ni-cart",
                background: iconBackground.value
              },
              "direction-reverse": ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-4 row"${_scopeId}><div class="mb-4 col-lg-5 mb-lg-0"${_scopeId}><div class="card z-index-2"${_scopeId}><div class="p-3 card-body"${_scopeId}>`);
            _push2(ssrRenderComponent(ReportsBarChart, {
              id: "chart-bar",
              title: "active Users",
              description: "(<strong>+23%</strong>) than last week",
              chart: {
                labels: [
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec"
                ],
                datasets: {
                  label: "Sales",
                  data: [450, 200, 100, 220, 500, 100, 400, 230, 500]
                }
              },
              items: [
                {
                  icon: {
                    color: "primary",
                    component: unref(faUsers)
                  },
                  label: "users",
                  progress: { content: "37K", percentage: 60 }
                },
                {
                  icon: { color: "info", component: unref(faHandPointer) },
                  label: "clicks",
                  progress: { content: "2m", percentage: 90 }
                },
                {
                  icon: { color: "warning", component: unref(faCreditCard) },
                  label: "Sales",
                  progress: { content: "435$", percentage: 30 }
                },
                {
                  icon: { color: "danger", component: unref(faScrewdriverWrench) },
                  label: "Items",
                  progress: { content: "43", percentage: 50 }
                }
              ]
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="col-lg-7"${_scopeId}><div class="card z-index-2"${_scopeId}>`);
            _push2(ssrRenderComponent(GradientLineChart, {
              id: "chart-line",
              title: "Gradient Line Chart",
              description: "<i class='fa fa-arrow-up text-success'></i>\n      <span class='font-weight-bold'>4% more</span> in 2021",
              chart: {
                labels: [
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec"
                ],
                datasets: [
                  {
                    label: "Mobile Apps",
                    data: [50, 40, 300, 220, 500, 250, 400, 230, 500]
                  },
                  {
                    label: "Websites",
                    data: [30, 90, 40, 140, 290, 290, 340, 230, 400]
                  }
                ]
              }
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="row my-4"${_scopeId}><div class="col-lg-8 col-md-6 mb-md-0 mb-4"${_scopeId}>`);
            _push2(ssrRenderComponent(ProjectsCard, null, null, _parent2, _scopeId));
            _push2(`</div><div class="col-lg-4 col-md-6"${_scopeId}>`);
            _push2(ssrRenderComponent(TimelineList, {
              class: "h-100",
              title: "Orders overview",
              description: "<i class='fa fa-arrow-up text-success' aria-hidden='true'></i>\n        <span class='font-weight-bold'>24%</span> this month"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TimelineItem, {
                    color: "success",
                    icon: "bell-55",
                    title: "$2400 Design changes",
                    "date-time": "22 DEC 7:20 PM"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(TimelineItem, {
                    color: "danger",
                    icon: "html5",
                    title: "New order #1832412",
                    "date-time": "21 DEC 11 PM"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(TimelineItem, {
                    color: "info",
                    icon: "cart",
                    title: "Server payments for April",
                    "date-time": "21 DEC 9:34 PM"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(TimelineItem, {
                    color: "warning",
                    icon: "credit-card",
                    title: "New card added for order #4395133",
                    "date-time": "20 DEC 2:20 AM"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(TimelineItem, {
                    color: "primary",
                    icon: "key-25",
                    title: "Unlock packages for development",
                    "date-time": "18 DEC 4:54 AM"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(TimelineItem, {
                    color: "info",
                    icon: "check-bold",
                    title: "Notifications unread",
                    "date-time": "15 DEC"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TimelineItem, {
                      color: "success",
                      icon: "bell-55",
                      title: "$2400 Design changes",
                      "date-time": "22 DEC 7:20 PM"
                    }),
                    createVNode(TimelineItem, {
                      color: "danger",
                      icon: "html5",
                      title: "New order #1832412",
                      "date-time": "21 DEC 11 PM"
                    }),
                    createVNode(TimelineItem, {
                      color: "info",
                      icon: "cart",
                      title: "Server payments for April",
                      "date-time": "21 DEC 9:34 PM"
                    }),
                    createVNode(TimelineItem, {
                      color: "warning",
                      icon: "credit-card",
                      title: "New card added for order #4395133",
                      "date-time": "20 DEC 2:20 AM"
                    }),
                    createVNode(TimelineItem, {
                      color: "primary",
                      icon: "key-25",
                      title: "Unlock packages for development",
                      "date-time": "18 DEC 4:54 AM"
                    }),
                    createVNode(TimelineItem, {
                      color: "info",
                      icon: "check-bold",
                      title: "Notifications unread",
                      "date-time": "15 DEC"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4 container-fluid" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-xl-3 col-sm-6 mb-xl-0 mb-4" }, [
                    createVNode(MiniStatisticsCard, {
                      title: "Today's Money",
                      value: `+` + __props.todaySales,
                      percentage: {
                        value: "+505%",
                        color: "text-success"
                      },
                      icon: {
                        component: "ni ni-money-coins",
                        background: iconBackground.value
                      },
                      "direction-reverse": ""
                    }, null, 8, ["value", "icon"])
                  ]),
                  createVNode("div", { class: "col-xl-3 col-sm-6 mb-xl-0 mb-4" }, [
                    createVNode(MiniStatisticsCard, {
                      title: "Today's Users",
                      value: numberWithCommas(__props.usersCount),
                      percentage: {
                        value: "+3%",
                        color: "text-success"
                      },
                      icon: {
                        component: " ni ni-world",
                        background: iconBackground.value
                      },
                      "direction-reverse": ""
                    }, null, 8, ["value", "icon"])
                  ]),
                  createVNode("div", { class: "col-xl-3 col-sm-6 mb-xl-0 mb-4" }, [
                    createVNode(MiniStatisticsCard, {
                      title: "New Users",
                      value: `+` + numberWithCommas(__props.newUsers),
                      percentage: {
                        value: "-2%",
                        color: "text-danger"
                      },
                      icon: {
                        component: "ni ni-paper-diploma",
                        background: iconBackground.value
                      },
                      "direction-reverse": ""
                    }, null, 8, ["value", "icon"])
                  ]),
                  createVNode("div", { class: "col-xl-3 col-sm-6 mb-xl-0" }, [
                    createVNode(MiniStatisticsCard, {
                      title: "Sales",
                      value: __props.totalSales,
                      percentage: {
                        value: "+5%",
                        color: "text-success"
                      },
                      icon: {
                        component: "ni ni-cart",
                        background: iconBackground.value
                      },
                      "direction-reverse": ""
                    }, null, 8, ["value", "icon"])
                  ])
                ]),
                createVNode("div", { class: "mt-4 row" }, [
                  createVNode("div", { class: "mb-4 col-lg-5 mb-lg-0" }, [
                    createVNode("div", { class: "card z-index-2" }, [
                      createVNode("div", { class: "p-3 card-body" }, [
                        createVNode(ReportsBarChart, {
                          id: "chart-bar",
                          title: "active Users",
                          description: "(<strong>+23%</strong>) than last week",
                          chart: {
                            labels: [
                              "Apr",
                              "May",
                              "Jun",
                              "Jul",
                              "Aug",
                              "Sep",
                              "Oct",
                              "Nov",
                              "Dec"
                            ],
                            datasets: {
                              label: "Sales",
                              data: [450, 200, 100, 220, 500, 100, 400, 230, 500]
                            }
                          },
                          items: [
                            {
                              icon: {
                                color: "primary",
                                component: unref(faUsers)
                              },
                              label: "users",
                              progress: { content: "37K", percentage: 60 }
                            },
                            {
                              icon: { color: "info", component: unref(faHandPointer) },
                              label: "clicks",
                              progress: { content: "2m", percentage: 90 }
                            },
                            {
                              icon: { color: "warning", component: unref(faCreditCard) },
                              label: "Sales",
                              progress: { content: "435$", percentage: 30 }
                            },
                            {
                              icon: { color: "danger", component: unref(faScrewdriverWrench) },
                              label: "Items",
                              progress: { content: "43", percentage: 50 }
                            }
                          ]
                        }, null, 8, ["items"])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-lg-7" }, [
                    createVNode("div", { class: "card z-index-2" }, [
                      createVNode(GradientLineChart, {
                        id: "chart-line",
                        title: "Gradient Line Chart",
                        description: "<i class='fa fa-arrow-up text-success'></i>\n      <span class='font-weight-bold'>4% more</span> in 2021",
                        chart: {
                          labels: [
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec"
                          ],
                          datasets: [
                            {
                              label: "Mobile Apps",
                              data: [50, 40, 300, 220, 500, 250, 400, 230, 500]
                            },
                            {
                              label: "Websites",
                              data: [30, 90, 40, 140, 290, 290, 340, 230, 400]
                            }
                          ]
                        }
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "row my-4" }, [
                  createVNode("div", { class: "col-lg-8 col-md-6 mb-md-0 mb-4" }, [
                    createVNode(ProjectsCard)
                  ]),
                  createVNode("div", { class: "col-lg-4 col-md-6" }, [
                    createVNode(TimelineList, {
                      class: "h-100",
                      title: "Orders overview",
                      description: "<i class='fa fa-arrow-up text-success' aria-hidden='true'></i>\n        <span class='font-weight-bold'>24%</span> this month"
                    }, {
                      default: withCtx(() => [
                        createVNode(TimelineItem, {
                          color: "success",
                          icon: "bell-55",
                          title: "$2400 Design changes",
                          "date-time": "22 DEC 7:20 PM"
                        }),
                        createVNode(TimelineItem, {
                          color: "danger",
                          icon: "html5",
                          title: "New order #1832412",
                          "date-time": "21 DEC 11 PM"
                        }),
                        createVNode(TimelineItem, {
                          color: "info",
                          icon: "cart",
                          title: "Server payments for April",
                          "date-time": "21 DEC 9:34 PM"
                        }),
                        createVNode(TimelineItem, {
                          color: "warning",
                          icon: "credit-card",
                          title: "New card added for order #4395133",
                          "date-time": "20 DEC 2:20 AM"
                        }),
                        createVNode(TimelineItem, {
                          color: "primary",
                          icon: "key-25",
                          title: "Unlock packages for development",
                          "date-time": "18 DEC 4:54 AM"
                        }),
                        createVNode(TimelineItem, {
                          color: "info",
                          icon: "check-bold",
                          title: "Notifications unread",
                          "date-time": "15 DEC"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
