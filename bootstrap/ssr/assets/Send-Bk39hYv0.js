import { ref, mergeProps, useSSRContext, inject, onMounted, withCtx, unref, createTextVNode, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, withModifiers, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$3, H as House } from "./AppLayout-DAr8Wy3D.js";
import { _ as _sfc_main$5 } from "./SoftInput-BWS2dL-g.js";
import { useForm } from "@inertiajs/vue3";
import { useDropzone } from "vue3-dropzone";
import { i as initChoices } from "./choices-BP0jR0_K.js";
import { _ as _sfc_main$7 } from "./SoftSwitch-DKrdzP3l.js";
import flatPickr from "vue-flatpickr-component";
import { _ as _sfc_main$4 } from "./InputError-BGJo5hu6.js";
import { S as SoftButton } from "./SoftButton-Ca5ZEi_O.js";
import { _ as _sfc_main$6 } from "./SoftCheckbox-wi7PFum8.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
import "choices.js";
const _sfc_main$2 = {
  __name: "SoftCountedTextarea",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: "Your text here..."
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const charactersCount = ref(0);
    const messagesCount = ref(1);
    const pluralize = (count, noun, suffix = "s") => `${count} ${noun}${count !== 1 ? suffix : ""}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-group" }, _attrs))}><label${ssrRenderAttr("for", __props.id)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</label><textarea${ssrRenderAttr("id", __props.id)} class="form-control" rows="5"${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}>${ssrInterpolate(__props.modelValue)}</textarea><div style="${ssrRenderStyle({ "margin-top": "0.25rem", "text-align": "right" })}" id="counter">${ssrInterpolate(charactersCount.value)} / 160 (${ssrInterpolate(pluralize(messagesCount.value, "Message"))}) </div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SoftCountedTextarea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function setNavPills() {
  var total = document.querySelectorAll(".nav-pills");
  function initNavs() {
    total.forEach(function(item, i) {
      var moving_div = document.createElement("div");
      var first_li = item.querySelector("li:first-child .nav-link");
      var tab = first_li.cloneNode();
      tab.innerHTML = "-";
      moving_div.classList.add("moving-tab", "position-absolute", "nav-link");
      moving_div.appendChild(tab);
      item.appendChild(moving_div);
      item.getElementsByTagName("li").length;
      moving_div.style.padding = "0px";
      moving_div.style.width = item.querySelector("li:nth-child(1)").offsetWidth + "px";
      moving_div.style.transform = "translate3d(0px, 0px, 0px)";
      moving_div.style.transition = ".5s ease";
      item.onmouseover = function(event) {
        let target = getEventTarget(event);
        let li = target.closest("li");
        if (li) {
          let nodes = Array.from(li.closest("ul").children);
          let index = nodes.indexOf(li) + 1;
          item.querySelector("li:nth-child(" + index + ") .nav-link").onclick = function() {
            moving_div = item.querySelector(".moving-tab");
            let sum = 0;
            if (item.classList.contains("flex-column")) {
              for (var j = 1; j <= nodes.indexOf(li); j++) {
                sum += item.querySelector("li:nth-child(" + j + ")").offsetHeight;
              }
              moving_div.style.transform = "translate3d(0px," + sum + "px, 0px)";
              moving_div.style.height = item.querySelector("li:nth-child(" + j + ")").offsetHeight;
            } else {
              for (var j = 1; j <= nodes.indexOf(li); j++) {
                sum += item.querySelector("li:nth-child(" + j + ")").offsetWidth;
              }
              moving_div.style.transform = "translate3d(" + sum + "px, 0px, 0px)";
              moving_div.style.width = item.querySelector("li:nth-child(" + index + ")").offsetWidth + "px";
            }
          };
        }
      };
    });
  }
  setTimeout(function() {
    initNavs();
  }, 100);
  window.addEventListener("resize", function(event) {
    total.forEach(function(item, i) {
      item.querySelector(".moving-tab").remove();
      var moving_div = document.createElement("div");
      var tab = item.querySelector(".nav-link.active").cloneNode();
      tab.innerHTML = "-";
      moving_div.classList.add("moving-tab", "position-absolute", "nav-link");
      moving_div.appendChild(tab);
      item.appendChild(moving_div);
      moving_div.style.padding = "0px";
      moving_div.style.transition = ".5s ease";
      let li = item.querySelector(".nav-link.active").parentElement;
      if (li) {
        let nodes = Array.from(li.closest("ul").children);
        let index = nodes.indexOf(li) + 1;
        let sum = 0;
        if (item.classList.contains("flex-column")) {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector("li:nth-child(" + j + ")").offsetHeight;
          }
          moving_div.style.transform = "translate3d(0px," + sum + "px, 0px)";
          moving_div.style.width = item.querySelector("li:nth-child(" + index + ")").offsetWidth + "px";
          moving_div.style.height = item.querySelector("li:nth-child(" + j + ")").offsetHeight;
        } else {
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector("li:nth-child(" + j + ")").offsetWidth;
          }
          moving_div.style.transform = "translate3d(" + sum + "px, 0px, 0px)";
          moving_div.style.width = item.querySelector("li:nth-child(" + index + ")").offsetWidth + "px";
        }
      }
    });
    if (window.innerWidth < 991) {
      total.forEach(function(item, i) {
        if (!item.classList.contains("flex-column")) {
          item.classList.remove("flex-row");
          item.classList.add("flex-column", "on-resize");
          let li = item.querySelector(".nav-link.active").parentElement;
          let nodes = Array.from(li.closest("ul").children);
          nodes.indexOf(li) + 1;
          let sum = 0;
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector("li:nth-child(" + j + ")").offsetHeight;
          }
          var moving_div = document.querySelector(".moving-tab");
          moving_div.style.width = item.querySelector("li:nth-child(1)").offsetWidth + "px";
          moving_div.style.transform = "translate3d(0px," + sum + "px, 0px)";
        }
      });
    } else {
      total.forEach(function(item, i) {
        if (item.classList.contains("on-resize")) {
          item.classList.remove("flex-column", "on-resize");
          item.classList.add("flex-row");
          let li = item.querySelector(".nav-link.active").parentElement;
          let nodes = Array.from(li.closest("ul").children);
          let index = nodes.indexOf(li) + 1;
          let sum = 0;
          for (var j = 1; j <= nodes.indexOf(li); j++) {
            sum += item.querySelector("li:nth-child(" + j + ")").offsetWidth;
          }
          var moving_div = document.querySelector(".moving-tab");
          moving_div.style.transform = "translate3d(" + sum + "px, 0px, 0px)";
          moving_div.style.width = item.querySelector("li:nth-child(" + index + ")").offsetWidth + "px";
        }
      });
    }
  });
  if (window.innerWidth < 991) {
    total.forEach(function(item, i) {
      if (item.classList.contains("flex-row")) {
        item.classList.remove("flex-row");
        item.classList.add("flex-column", "on-resize");
      }
    });
  }
  function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
  }
}
const _sfc_main$1 = {
  __name: "ChoicesTagsInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Array,
      default: ""
    },
    size: {
      type: String,
      default: "default"
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
    error: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        class: "form-control",
        id: "choices-tags",
        "data-color": "dark",
        type: "text",
        placeholder: "Numbers"
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ChoicesTagsInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Send",
  __ssrInlineRender: true,
  props: {
    addressBooks: {
      type: Array,
      required: true
    },
    gateways: {
      type: Array,
      required: true
    },
    templates: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const swal = inject("$swal");
    const { gateways, templates } = __props;
    const form = useForm({
      gateway_id: gateways[0] ? gateways[0].id : null,
      sender_id: "",
      message: "",
      recipients_type: "numbers",
      recipients: null,
      address_book: null,
      recipients_files: null,
      schedule: false,
      schedule_date: null
    });
    const useTemplate = ref(false);
    onMounted(() => {
      setNavPills();
      initChoices("choices-tags", "tags");
      initChoices("choices-address-book");
      initChoices("choices-gateways");
    });
    const onDrop = (acceptFiles, rejectReasons) => {
      form.recipients_files = acceptFiles;
    };
    const { getRootProps, getInputProps, open } = useDropzone({ onDrop });
    const config = ref({
      enableTime: true,
      wrap: true,
      // set wrap to true only when using 'input-group'
      altFormat: "M j, Y H:i",
      altInput: true,
      dateFormat: "Y-m-d H:i",
      minDate: "today"
    });
    const errors = ref({});
    const sendForm = () => {
      errors.value = {};
      form.post(route("messages.store"), {
        preserveScroll: true,
        onSuccess: () => {
          swal.fire({
            title: "Success!",
            text: "Message is scheduled successfully.!",
            icon: "success"
          });
        },
        onError: (errs) => {
          errors.value = errs;
        }
      });
    };
    const removeFile = (index) => {
      if (form.recipients_files[index]) {
        form.recipients_files.splice(index, 1);
      }
    };
    const truncateString = (string = "", maxLength = 50) => string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;
    const onTemplateChange = (event) => {
      const template = templates.find((x) => x.id === Number(event.target.value));
      if (template) {
        form.message = template.content;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({ title: "Send a message" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="mx-auto col-lg-9 col-12"${_scopeId}><div class="mt-4 card card-body"${_scopeId}><h6 class="mb-0"${_scopeId}>New Message</h6><p class="mb-0 text-sm"${_scopeId}>Send a new message</p><hr class="my-3 horizontal dark"${_scopeId}><label class="form-label"${_scopeId}>Gateway</label><select class="form-control" name="choices-gateways" id="choices-gateways"${_scopeId}><!--[-->`);
            ssrRenderList(__props.gateways, (gateway, i) => {
              _push2(`<option${ssrRenderAttr("value", gateway.id)}${_scopeId}>${ssrInterpolate(gateway.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.gateway_id
            }, null, _parent2, _scopeId));
            _push2(`<label${_scopeId}>Sender ID</label>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              id: "sender_id",
              modelValue: unref(form).sender_id,
              "onUpdate:modelValue": ($event) => unref(form).sender_id = $event,
              type: "text",
              placeholder: "Sender ID",
              name: "sender_id",
              autofocus: "",
              error: errors.value.hasOwnProperty("sender_id")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: errors.value.sender_id
            }, null, _parent2, _scopeId));
            _push2(`<div class="nav-wrapper position-relative end-0"${_scopeId}><ul class="p-1 bg-gray-100 nav nav-pills nav-fill" role="tablist"${_scopeId}><li class="nav-item"${_scopeId}><a class="px-0 py-1 mb-0 nav-link active" data-bs-toggle="tab" href="#" role="tab" aria-selected="true"${_scopeId}>`);
            _push2(ssrRenderComponent(House, { class: "text-dark" }, null, _parent2, _scopeId));
            _push2(`<span class="ms-1"${_scopeId}>Numbers</span></a></li><li class="nav-item"${_scopeId}><a class="px-0 py-1 mb-0 nav-link" data-bs-toggle="tab1" href="#" role="tab" aria-selected="false"${_scopeId}>`);
            _push2(ssrRenderComponent(House, { class: "text-dark" }, null, _parent2, _scopeId));
            _push2(`<span class="ms-1"${_scopeId}>Address Book</span></a></li><li class="nav-item"${_scopeId}><a class="px-0 py-1 mb-0 nav-link" data-bs-toggle="tab" href="#" role="tab" aria-selected="false"${_scopeId}>`);
            _push2(ssrRenderComponent(House, { class: "text-dark" }, null, _parent2, _scopeId));
            _push2(`<span class="ms-1"${_scopeId}>File</span></a></li></ul><div class="${ssrRenderClass([{ "show": unref(form).recipients_type === "numbers" }, "row px-3 my-4 collapse"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              modelValue: unref(form).recipients,
              "onUpdate:modelValue": ($event) => unref(form).recipients = $event,
              error: Object.keys(unref(form).errors).some(function(k) {
                return ~k.indexOf("recipients");
              })
            }, null, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(unref(form).recipients, (parameter, index) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, {
                class: "mt-2",
                message: unref(form).errors["recipients." + index]
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><div class="${ssrRenderClass([{ "show": unref(form).recipients_type === "address_book" }, "row px-3 my-4 collapse"])}"${_scopeId}><select class="form-control" name="choices-address-book" id="choices-address-book"${_scopeId}><!--[-->`);
            ssrRenderList(__props.addressBooks, (addressBook, i) => {
              _push2(`<option${ssrRenderAttr("value", addressBook.id)}${_scopeId}>${ssrInterpolate(addressBook.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: errors.value.address_book
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="${ssrRenderClass([{ "show": unref(form).recipients_type === "file" }, "row px-3 my-4 collapse"])}"${_scopeId}><div${ssrRenderAttrs(mergeProps({ class: "form-control dropzone dz-clickable" }, unref(getRootProps)()))}${_scopeId}><input${ssrRenderAttrs(unref(getInputProps)())}${_scopeId}><div class="dz-default dz-message"${_scopeId}><button class="dz-button" type="button"${_scopeId}>Drop files here to upload </button></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: errors.value.recipients_files
            }, null, _parent2, _scopeId));
            _push2(`<div class="mt-3 row"${_scopeId}><div class="col-12"${_scopeId}><!--[-->`);
            ssrRenderList(unref(form).recipients_files, (file, i) => {
              _push2(`<div class="border badge bg-success mx-1"${_scopeId}><span class="me-sm-2"${_scopeId}>${ssrInterpolate(truncateString(file.name, 10))}</span>`);
              _push2(ssrRenderComponent(SoftButton, {
                class: "btn btn-light btn-sm",
                onClick: ($event) => removeFile(i)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`X `);
                  } else {
                    return [
                      createTextVNode("X ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              modelValue: useTemplate.value,
              "onUpdate:modelValue": ($event) => useTemplate.value = $event,
              class: "mb-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Use template `);
                } else {
                  return [
                    createTextVNode(" Use template ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<label class="form-label"${_scopeId}>Message Template</label><select class="form-control" name="choices-templates" id="choices-templates"${ssrIncludeBooleanAttr(!useTemplate.value) ? " disabled" : ""}${_scopeId}><option${ssrRenderAttr("value", null)} selected${_scopeId}>Please select</option><!--[-->`);
            ssrRenderList(__props.templates, (template, i) => {
              _push2(`<option${ssrRenderAttr("value", template.id)}${_scopeId}>${ssrInterpolate(template.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-3",
              id: "message",
              modelValue: unref(form).message,
              "onUpdate:modelValue": ($event) => unref(form).message = $event,
              placeholder: "Type your message here...",
              name: "message",
              autofocus: "",
              error: errors.value.hasOwnProperty("message")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Message `);
                } else {
                  return [
                    createTextVNode(" Message ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: errors.value.message
            }, null, _parent2, _scopeId));
            _push2(`<div class="d-flex align-items-center mb-sm-4 mb-6"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$7, {
              id: "schedule_message",
              name: "schedule",
              modelValue: unref(form).schedule,
              "onUpdate:modelValue": ($event) => unref(form).schedule = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="ms-2"${_scopeId}><span class="text-dark font-weight-bold d-block text-sm"${_scopeId}>Schedule</span><span class="text-xs d-block"${_scopeId}>Schedule the message to be sent on a specific date and time.</span></div></div>`);
            if (unref(form).schedule) {
              _push2(`<div class="row px-3"${_scopeId}><label class="form-label"${_scopeId}>Date</label>`);
              _push2(ssrRenderComponent(unref(flatPickr), {
                modelValue: unref(form).schedule_date,
                "onUpdate:modelValue": ($event) => unref(form).schedule_date = $event,
                config: config.value,
                class: "form-control datepicker flatpickr-input",
                placeholder: "Please select date",
                name: "date",
                error: errors.value.hasOwnProperty("schedule_date")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                class: "mt-2",
                message: errors.value.schedule_date
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-4 d-flex justify-content-end"${_scopeId}><button type="button" name="button" class="m-0 btn btn-light"${_scopeId}> Cancel</button><button type="button" name="button" class="m-0 btn bg-gradient-primary ms-2"${_scopeId}> Save</button><button type="button" name="button" class="m-0 btn bg-gradient-success ms-2"${_scopeId}> Send </button></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4 container-fluid" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "mx-auto col-lg-9 col-12" }, [
                    createVNode("div", { class: "mt-4 card card-body" }, [
                      createVNode("h6", { class: "mb-0" }, "New Message"),
                      createVNode("p", { class: "mb-0 text-sm" }, "Send a new message"),
                      createVNode("hr", { class: "my-3 horizontal dark" }),
                      createVNode("label", { class: "form-label" }, "Gateway"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => unref(form).gateway_id = $event,
                        class: "form-control",
                        name: "choices-gateways",
                        id: "choices-gateways"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.gateways, (gateway, i) => {
                          return openBlock(), createBlock("option", {
                            value: gateway.id,
                            key: i
                          }, toDisplayString(gateway.name), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(form).gateway_id]
                      ]),
                      createVNode(_sfc_main$4, {
                        class: "mt-2",
                        message: unref(form).errors.gateway_id
                      }, null, 8, ["message"]),
                      createVNode("label", null, "Sender ID"),
                      createVNode(_sfc_main$5, {
                        id: "sender_id",
                        modelValue: unref(form).sender_id,
                        "onUpdate:modelValue": ($event) => unref(form).sender_id = $event,
                        type: "text",
                        placeholder: "Sender ID",
                        name: "sender_id",
                        autofocus: "",
                        error: errors.value.hasOwnProperty("sender_id")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                      createVNode(_sfc_main$4, {
                        class: "mt-2",
                        message: errors.value.sender_id
                      }, null, 8, ["message"]),
                      createVNode("div", { class: "nav-wrapper position-relative end-0" }, [
                        createVNode("ul", {
                          class: "p-1 bg-gray-100 nav nav-pills nav-fill",
                          role: "tablist"
                        }, [
                          createVNode("li", { class: "nav-item" }, [
                            createVNode("a", {
                              class: "px-0 py-1 mb-0 nav-link active",
                              "data-bs-toggle": "tab",
                              href: "#",
                              role: "tab",
                              "aria-selected": "true",
                              onClick: ($event) => unref(form).recipients_type = "numbers"
                            }, [
                              createVNode(House, { class: "text-dark" }),
                              createVNode("span", { class: "ms-1" }, "Numbers")
                            ], 8, ["onClick"])
                          ]),
                          createVNode("li", { class: "nav-item" }, [
                            createVNode("a", {
                              class: "px-0 py-1 mb-0 nav-link",
                              "data-bs-toggle": "tab1",
                              href: "#",
                              role: "tab",
                              "aria-selected": "false",
                              onClick: ($event) => unref(form).recipients_type = "address_book"
                            }, [
                              createVNode(House, { class: "text-dark" }),
                              createVNode("span", { class: "ms-1" }, "Address Book")
                            ], 8, ["onClick"])
                          ]),
                          createVNode("li", { class: "nav-item" }, [
                            createVNode("a", {
                              class: "px-0 py-1 mb-0 nav-link",
                              "data-bs-toggle": "tab",
                              href: "#",
                              role: "tab",
                              "aria-selected": "false",
                              onClick: ($event) => unref(form).recipients_type = "file"
                            }, [
                              createVNode(House, { class: "text-dark" }),
                              createVNode("span", { class: "ms-1" }, "File")
                            ], 8, ["onClick"])
                          ])
                        ]),
                        createVNode("div", {
                          class: ["row px-3 my-4 collapse", { "show": unref(form).recipients_type === "numbers" }]
                        }, [
                          createVNode(_sfc_main$1, {
                            modelValue: unref(form).recipients,
                            "onUpdate:modelValue": ($event) => unref(form).recipients = $event,
                            error: Object.keys(unref(form).errors).some(function(k) {
                              return ~k.indexOf("recipients");
                            })
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).recipients, (parameter, index) => {
                            return openBlock(), createBlock("div", { key: index }, [
                              createVNode(_sfc_main$4, {
                                class: "mt-2",
                                message: unref(form).errors["recipients." + index]
                              }, null, 8, ["message"])
                            ]);
                          }), 128))
                        ], 2),
                        createVNode("div", {
                          class: ["row px-3 my-4 collapse", { "show": unref(form).recipients_type === "address_book" }]
                        }, [
                          withDirectives(createVNode("select", {
                            class: "form-control",
                            name: "choices-address-book",
                            id: "choices-address-book",
                            "onUpdate:modelValue": ($event) => unref(form).address_book = $event
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.addressBooks, (addressBook, i) => {
                              return openBlock(), createBlock("option", {
                                value: addressBook.id,
                                key: i
                              }, toDisplayString(addressBook.name), 9, ["value"]);
                            }), 128))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(form).address_book]
                          ]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: errors.value.address_book
                          }, null, 8, ["message"])
                        ], 2),
                        createVNode("div", {
                          class: ["row px-3 my-4 collapse", { "show": unref(form).recipients_type === "file" }]
                        }, [
                          createVNode("div", mergeProps({ class: "form-control dropzone dz-clickable" }, unref(getRootProps)()), [
                            createVNode("input", unref(getInputProps)(), null, 16),
                            createVNode("div", { class: "dz-default dz-message" }, [
                              createVNode("button", {
                                onClick: unref(open),
                                class: "dz-button",
                                type: "button"
                              }, "Drop files here to upload ", 8, ["onClick"])
                            ])
                          ], 16),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: errors.value.recipients_files
                          }, null, 8, ["message"]),
                          createVNode("div", { class: "mt-3 row" }, [
                            createVNode("div", { class: "col-12" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(form).recipients_files, (file, i) => {
                                return openBlock(), createBlock("div", { class: "border badge bg-success mx-1" }, [
                                  createVNode("span", { class: "me-sm-2" }, toDisplayString(truncateString(file.name, 10)), 1),
                                  createVNode(SoftButton, {
                                    class: "btn btn-light btn-sm",
                                    onClick: withModifiers(($event) => removeFile(i), ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("X ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]);
                              }), 256))
                            ])
                          ])
                        ], 2)
                      ]),
                      createVNode(_sfc_main$6, {
                        modelValue: useTemplate.value,
                        "onUpdate:modelValue": ($event) => useTemplate.value = $event,
                        class: "mb-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Use template ")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("label", { class: "form-label" }, "Message Template"),
                      createVNode("select", {
                        class: "form-control",
                        name: "choices-templates",
                        id: "choices-templates",
                        disabled: !useTemplate.value,
                        onChange: onTemplateChange
                      }, [
                        createVNode("option", {
                          value: null,
                          selected: ""
                        }, "Please select"),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.templates, (template, i) => {
                          return openBlock(), createBlock("option", {
                            value: template.id,
                            key: i
                          }, toDisplayString(template.name), 9, ["value"]);
                        }), 128))
                      ], 40, ["disabled"]),
                      createVNode(_sfc_main$2, {
                        class: "mt-3",
                        id: "message",
                        modelValue: unref(form).message,
                        "onUpdate:modelValue": ($event) => unref(form).message = $event,
                        placeholder: "Type your message here...",
                        name: "message",
                        autofocus: "",
                        error: errors.value.hasOwnProperty("message")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Message ")
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue", "error"]),
                      createVNode(_sfc_main$4, {
                        class: "mt-2",
                        message: errors.value.message
                      }, null, 8, ["message"]),
                      createVNode("div", { class: "d-flex align-items-center mb-sm-4 mb-6" }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$7, {
                            id: "schedule_message",
                            name: "schedule",
                            modelValue: unref(form).schedule,
                            "onUpdate:modelValue": ($event) => unref(form).schedule = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "ms-2" }, [
                          createVNode("span", { class: "text-dark font-weight-bold d-block text-sm" }, "Schedule"),
                          createVNode("span", { class: "text-xs d-block" }, "Schedule the message to be sent on a specific date and time.")
                        ])
                      ]),
                      unref(form).schedule ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "row px-3"
                      }, [
                        createVNode("label", { class: "form-label" }, "Date"),
                        createVNode(unref(flatPickr), {
                          modelValue: unref(form).schedule_date,
                          "onUpdate:modelValue": ($event) => unref(form).schedule_date = $event,
                          config: config.value,
                          class: "form-control datepicker flatpickr-input",
                          placeholder: "Please select date",
                          name: "date",
                          error: errors.value.hasOwnProperty("schedule_date")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "config", "error"]),
                        createVNode(_sfc_main$4, {
                          class: "mt-2",
                          message: errors.value.schedule_date
                        }, null, 8, ["message"])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "mt-4 d-flex justify-content-end" }, [
                        createVNode("button", {
                          type: "button",
                          name: "button",
                          class: "m-0 btn btn-light"
                        }, " Cancel"),
                        createVNode("button", {
                          type: "button",
                          name: "button",
                          class: "m-0 btn bg-gradient-primary ms-2"
                        }, " Save"),
                        createVNode("button", {
                          type: "button",
                          name: "button",
                          class: "m-0 btn bg-gradient-success ms-2",
                          onClick: sendForm
                        }, " Send ")
                      ])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Messages/Send.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
