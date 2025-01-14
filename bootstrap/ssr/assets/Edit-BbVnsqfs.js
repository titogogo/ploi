import { inject, onMounted, resolveComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, withDirectives, vModelSelect, Fragment, renderList, toDisplayString, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-DAr8Wy3D.js";
import { i as initMultiStepForm } from "./multistep-form-Dn7WrQ-x.js";
import { _ as _sfc_main$3 } from "./InputError-BGJo5hu6.js";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./SoftInput-BWS2dL-g.js";
import { S as SoftButton } from "./SoftButton-Ca5ZEi_O.js";
import { G as GatewayParam } from "./GatewayParam-COhG2wq-.js";
import { _ as _sfc_main$4 } from "./SoftSwitch-DKrdzP3l.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./index-H4OGLnSd.js";
import "bootstrap";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    gateway: {
      type: Object,
      required: true
    },
    methodTypes: {
      type: Array,
      required: true
    },
    contentTypes: {
      type: Array,
      required: true
    },
    encodingTypes: {
      type: Array,
      required: true
    },
    authTypes: {
      type: Array,
      required: true
    },
    delayTypes: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const swal = inject("$swal");
    const {
      gateway,
      methodTypes,
      contentTypes,
      encodingTypes,
      authTypes,
      delayTypes
    } = __props;
    onMounted(() => {
      initMultiStepForm();
      gateway.params.forEach((param) => {
        if (param.type === "source") {
          addParam(param.type, param.name, true, true, false, false, param.value);
          return;
        }
        if (param.type === "username" || param.type === "password" || param.type === "token") {
          if (form.authorization_type === "param") {
            insertParam(param.type, param.name, true, true, false, false, param.value);
            return;
          }
          if (form.authorization_type === "basic_auth") {
            insertParam(param.type, param.name, false, true, false, true, param.value);
            return;
          }
          if (form.authorization_type === "bearer_token") {
            insertParam(param.type, param.name, false, true, false, true, param.value);
            return;
          }
        }
        if (param.type === "destination" || param.type === "message") {
          addParam(param.type, param.name, true, false, false);
          return;
        }
        addParam(param.type, param.name, true, true, false, true, param.value);
      });
    });
    const form = useForm({
      name: gateway.name,
      type: gateway.type,
      base_url: gateway.info.base_url,
      success_keyword: gateway.info.success_keyword,
      json_message_key: gateway.info.json_message_key,
      webhook_json_message_key: gateway.info.webhook_json_message_key,
      webhook_json_status_key: gateway.info.webhook_json_status_key,
      method_type: gateway.info.method_type,
      json_encoded: gateway.info.json_encoded,
      content_type: contentTypes[0],
      accept: gateway.info.accept,
      encoding_type: gateway.info.encoding,
      ignore_ssl: gateway.info.ignore_ssl,
      authorization_type: gateway.info.authentication_type,
      ip_address: gateway.info.ip_address,
      port: gateway.info.port,
      username: gateway.info.username,
      password: gateway.info.password,
      limit: gateway.limit,
      cost: gateway.cost.amount / 100,
      delay: gateway.delay,
      delay_type: gateway.delay_type,
      enabled: gateway.enabled,
      params: []
    });
    const submit = () => {
      form.patch(route("gateway.update", gateway.id), {
        onSuccess: () => {
          swal.fire({
            title: "Success!",
            text: "Gateway is created successfully.!",
            icon: "success"
          });
        }
      });
    };
    const authTypeChange = () => {
      if (form.authorization_type === "param") {
        removeAuthInputs();
        insertParam("password", "password", true, true, false);
        insertParam("username", "username", true, true, false);
      }
      if (form.authorization_type === "basic_auth") {
        removeAuthInputs();
        insertParam("password", "password", false, true, false, true);
        insertParam("username", "username", false, true, false, true);
      }
      if (form.authorization_type === "bearer_token") {
        removeAuthInputs();
        insertParam("token", "token", false, true, false, true);
      }
    };
    const removeAuthInputs = () => {
      form.params = form.params.filter((x) => x.type !== "token" && x.type !== "username" && x.type !== "password");
    };
    const insertParam = (type, name, hasName, hasValue, removable, nullable = true, value = "") => {
      let latestId = form.params.reduce((acc, value2) => {
        return acc = acc > value2.id ? acc : value2.id;
      }, 0);
      form.params.unshift({
        id: latestId + 1,
        type,
        name,
        value,
        hasName,
        hasValue,
        removable,
        nullable
      });
    };
    const addCustomParam = () => {
      addParam();
    };
    const addParam = (type = "custom", name = "custom param", hasName = true, hasValue = true, removable = true, nullable = false, value = "") => {
      let latestId = form.params.reduce((acc, value2) => {
        return acc = acc > value2.id ? acc : value2.id;
      }, 0);
      form.params.push({
        id: latestId + 1,
        type,
        name,
        value,
        hasName,
        hasValue,
        removable,
        nullable
      });
    };
    const onParamRemove = (id) => {
      const index = form.params.findIndex((x) => x.id === id);
      form.params.splice(index, 1);
    };
    const onParamChange = (id, data) => {
      const index = form.params.findIndex((x) => x.id === id);
      form.params[index].name = data.name;
      form.params[index].value = data.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Create new gateway" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-4 container-fluid"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="multisteps-form"${_scopeId}><div class="row"${_scopeId}><div class="mx-auto mt-4 mb-3 col-12 col-lg-8 mb-sm-5"${_scopeId}><div class="multisteps-form__progress"${_scopeId}><button class="multisteps-form__progress-btn js-active js-active position-relative" type="button" title="Address Book Info"${_scopeId}><span${_scopeId}>1. Gateway Information</span></button>`);
            if (unref(form).type === "http") {
              _push2(`<button class="multisteps-form__progress-btn" type="button" title="Media"${_scopeId}> 2. Request Params </button>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(form).type === "http") {
              _push2(`<button class="multisteps-form__progress-btn" type="button" title="webhook"${_scopeId}> 3. Webhook </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="row"${_scopeId}><div class="m-auto col-12 col-lg-8"${_scopeId}><form class="mb-8 multisteps-form__form" role="form"${_scopeId}><div class="p-3 bg-white card multisteps-form__panel border-radius-xl js-active position-relative" data-animation="FadeIn"${_scopeId}><h5 class="font-weight-bolder"${_scopeId}>Gateway Information</h5><div class="multisteps-form__content"${_scopeId}><div class="mt-3 row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label${_scopeId}>Name</label>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "multisteps-form__input",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              id: "name",
              type: "text",
              placeholder: "eg. Gateway1",
              "aria-label": "Name",
              error: unref(form).errors.hasOwnProperty("name")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="row mb-3"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label class="form-label"${_scopeId}>Type</label><select class="form-control" name="choices-type" id="choices-type"${_scopeId}><option value="http"${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "http") : ssrLooseEqual(unref(form).type, "http")) ? " selected" : ""}${_scopeId}>HTTP</option><option value="smpp"${ssrIncludeBooleanAttr(Array.isArray(unref(form).type) ? ssrLooseContain(unref(form).type, "smpp") : ssrLooseEqual(unref(form).type, "smpp")) ? " selected" : ""}${_scopeId}>SMPP</option></select>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.type
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (unref(form).type === "http") {
              _push2(`<!--[--><div class="row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label${_scopeId}>Base URL</label>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                class: "multisteps-form__input",
                modelValue: unref(form).base_url,
                "onUpdate:modelValue": ($event) => unref(form).base_url = $event,
                id: "base_url",
                type: "text",
                "aria-label": "Base URL",
                error: unref(form).errors.hasOwnProperty("base_url")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.base_url
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label${_scopeId}>Success Keyword</label>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                class: "multisteps-form__input",
                modelValue: unref(form).success_keyword,
                "onUpdate:modelValue": ($event) => unref(form).success_keyword = $event,
                id: "success_keyword",
                type: "text",
                "aria-label": "Success Keyword",
                error: unref(form).errors.hasOwnProperty("success_keyword")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.success_keyword
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label class="form-label"${_scopeId}>HTTP Request Method</label><select class="form-control" name="choices-method-type" id="choices-method-type"${_scopeId}><!--[-->`);
              ssrRenderList(__props.methodTypes, (methodType, i) => {
                _push2(`<option${ssrRenderAttr("value", methodType)}${_scopeId}>${ssrInterpolate(methodType)}</option>`);
              });
              _push2(`<!--]--></select>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.method_type
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="mt-3 row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label class="form-label"${_scopeId}>Enable JSON Encoded Request</label><select class="form-control" name="choices-json-encoded" id="choices-json-encoded"${_scopeId}><option${ssrRenderAttr("value", true)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).json_encoded) ? ssrLooseContain(unref(form).json_encoded, true) : ssrLooseEqual(unref(form).json_encoded, true)) ? " selected" : ""}${_scopeId}>Yes</option><option${ssrRenderAttr("value", false)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).json_encoded) ? ssrLooseContain(unref(form).json_encoded, false) : ssrLooseEqual(unref(form).json_encoded, false)) ? " selected" : ""}${_scopeId}>No</option></select>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.json_encoded
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="mt-3 row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label class="form-label"${_scopeId}>Content Type</label><select class="form-control" name="choices-content-types" id="choices-content-types"${_scopeId}><!--[-->`);
              ssrRenderList(__props.contentTypes, (contentType, i) => {
                _push2(`<option${ssrRenderAttr("value", contentType)}${_scopeId}>${ssrInterpolate(contentType)}</option>`);
              });
              _push2(`<!--]--></select>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.content_type
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="mt-3 row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label class="form-label"${_scopeId}>Accept Content Type</label><select class="form-control" name="choices-accept-content-type" id="choices-accept-content-type"${_scopeId}><!--[-->`);
              ssrRenderList(__props.contentTypes, (contentType, i) => {
                _push2(`<option${ssrRenderAttr("value", contentType)}${_scopeId}>${ssrInterpolate(contentType)}</option>`);
              });
              _push2(`<!--]--></select>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.accept
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="mt-3 row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label class="form-label"${_scopeId}>Encoding</label><select class="form-control" name="choices-encoding" id="choices-encoding"${_scopeId}><!--[-->`);
              ssrRenderList(__props.encodingTypes, (encoding, i) => {
                _push2(`<option${ssrRenderAttr("value", encoding)}${_scopeId}>${ssrInterpolate(encoding)}</option>`);
              });
              _push2(`<!--]--></select>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.encoding_type
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="mt-3 row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label class="form-label"${_scopeId}>Ignore SSL</label><select class="form-control" name="choices-ignore-ssl" id="choices-ignore-ssl"${_scopeId}><option${ssrRenderAttr("value", true)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).ignore_ssl) ? ssrLooseContain(unref(form).ignore_ssl, true) : ssrLooseEqual(unref(form).ignore_ssl, true)) ? " selected" : ""}${_scopeId}>Yes</option><option${ssrRenderAttr("value", false)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).ignore_ssl) ? ssrLooseContain(unref(form).ignore_ssl, false) : ssrLooseEqual(unref(form).ignore_ssl, false)) ? " selected" : ""}${_scopeId}>No</option></select>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.ignore_ssl
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="mt-3 row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label class="form-label"${_scopeId}>Authorization</label><select class="form-control" name="choices-authorization-type" id="choices-authorization-type"${_scopeId}><!--[-->`);
              ssrRenderList(__props.authTypes, (authType, i) => {
                _push2(`<option${ssrRenderAttr("value", authType)}${_scopeId}>${ssrInterpolate(authType)}</option>`);
              });
              _push2(`<!--]--></select>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.authorization_type
              }, null, _parent2, _scopeId));
              _push2(`</div></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(form).type === "smpp") {
              _push2(`<!--[--><div class="row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label${_scopeId}>IP Address</label>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                class: "multisteps-form__input",
                modelValue: unref(form).ip_address,
                "onUpdate:modelValue": ($event) => unref(form).ip_address = $event,
                id: "ip_address",
                type: "text",
                "aria-label": "IP Address",
                error: unref(form).errors.hasOwnProperty("ip_address")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.ip_address
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label${_scopeId}>Port</label>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                class: "multisteps-form__input",
                modelValue: unref(form).port,
                "onUpdate:modelValue": ($event) => unref(form).port = $event,
                id: "port",
                type: "number",
                "aria-label": "Port",
                min: "1",
                step: "1",
                error: unref(form).errors.hasOwnProperty("port")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.port
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label${_scopeId}>Username</label>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                class: "multisteps-form__input",
                modelValue: unref(form).username,
                "onUpdate:modelValue": ($event) => unref(form).username = $event,
                id: "username",
                type: "text",
                "aria-label": "Username",
                error: unref(form).errors.hasOwnProperty("username")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.username
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label${_scopeId}>Password</label>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                class: "multisteps-form__input",
                modelValue: unref(form).password,
                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                id: "password",
                type: "text",
                "aria-label": "Password",
                error: unref(form).errors.hasOwnProperty("password")
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-2",
                message: unref(form).errors.password
              }, null, _parent2, _scopeId));
              _push2(`</div></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-3 row"${_scopeId}><label for="amount" class="form-label"${_scopeId}>Cost</label><div class="input-group"${_scopeId}><span class="input-group-text"${_scopeId}>$</span><input${ssrRenderAttr("value", unref(form).cost)} type="number" class="form-control" aria-label="Cost" step="0.01"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.cost
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-3 row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label for="limit" class="form-label"${_scopeId}>Sending Limit</label>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "multisteps-form__input",
              modelValue: unref(form).limit,
              "onUpdate:modelValue": ($event) => unref(form).limit = $event,
              id: "limit",
              type: "number",
              "aria-label": "Limit",
              min: "1",
              step: "1",
              error: unref(form).errors.hasOwnProperty("limit")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-3",
              message: unref(form).errors.limit
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label${_scopeId}>Delay</label>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "multisteps-form__input",
              modelValue: unref(form).delay,
              "onUpdate:modelValue": ($event) => unref(form).delay = $event,
              id: "delay",
              type: "number",
              "aria-label": "Delay",
              min: "1",
              step: "1",
              error: unref(form).errors.hasOwnProperty("delay")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.delay
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label class="form-label"${_scopeId}>Delay Time Unit</label><select class="form-control" name="choices-delay-unit" id="choices-delay-unit"${_scopeId}><!--[-->`);
            ssrRenderList(__props.delayTypes, (delayType, i) => {
              _push2(`<option${ssrRenderAttr("value", delayType)}${_scopeId}>${ssrInterpolate(delayType)}</option>`);
            });
            _push2(`<!--]--></select>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.delay_type
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-4 row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(form).enabled,
              "onUpdate:modelValue": ($event) => unref(form).enabled = $event,
              id: "enabled",
              name: "enabled",
              checked: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Enable users to send using this gateway `);
                } else {
                  return [
                    createTextVNode(" Enable users to send using this gateway ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-4 button-row d-flex col-12"${_scopeId}>`);
            if (unref(form).type === "smpp") {
              _push2(ssrRenderComponent(SoftButton, {
                color: "dark",
                variant: "gradient",
                class: "btn mb-0 bg-gradient-dark btn-md null null ms-auto"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Create `);
                  } else {
                    return [
                      createTextVNode("Create ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(form).type === "http") {
              _push2(`<button class="btn mb-0 bg-gradient-dark btn-md null null mb-0 ms-auto js-btn-next" type="button" title="Next"${_scopeId}>Next </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="p-3 bg-white card multisteps-form__panel border-radius-xl" data-animation="FadeIn"${_scopeId}><h5 class="font-weight-bolder"${_scopeId}>Parameters</h5><div class="multisteps-form__content"${_scopeId}><!--[-->`);
            ssrRenderList(unref(form).params, (param, i) => {
              _push2(ssrRenderComponent(GatewayParam, {
                "has-name": param.hasName,
                "has-value": param.hasValue,
                type: param.type,
                deletable: param.removable,
                index: param.id,
                name: param.name,
                value: param.value,
                onOnRemove: onParamRemove,
                onOnChange: onParamChange,
                nullable: param.nullable ?? false,
                key: param.id
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--><div class="m-auto mt-4 text-center"${_scopeId}><button class="m-auto btn mb-0 bg-gradient-success btn-sm null null px-7" title="add"${_scopeId}>Add </button></div><div class="mt-5 button-row d-flex col-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              as: "button",
              class: "btn mb-0 bg-gradient-secondary btn-md null null mb-0 js-btn-prev",
              title: "Prev"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Prev `);
                } else {
                  return [
                    createTextVNode("Prev ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button class="btn mb-0 bg-gradient-dark btn-md null null mb-0 ms-auto js-btn-next" type="button" title="Next"${_scopeId}>Next </button></div></div></div><div class="p-3 bg-white card multisteps-form__panel border-radius-xl" data-animation="FadeIn"${_scopeId}><h5 class="font-weight-bolder"${_scopeId}>Webhook</h5><div class="multisteps-form__content"${_scopeId}><div class="row mt-3"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label${_scopeId}>Response JSON Message Key <span class="text-xs text-secondary"${_scopeId}>(You can use . notion)</span></label>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "multisteps-form__input",
              modelValue: unref(form).json_message_key,
              "onUpdate:modelValue": ($event) => unref(form).json_message_key = $event,
              id: "json_message_key",
              type: "text",
              "aria-label": "JSON Message Key",
              error: unref(form).errors.hasOwnProperty("json_message_key")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.json_message_key
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label${_scopeId}>Webhook JSON Message Key <span class="text-xs text-secondary"${_scopeId}>(You can use . notion)</span></label>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "multisteps-form__input",
              modelValue: unref(form).webhook_json_message_key,
              "onUpdate:modelValue": ($event) => unref(form).webhook_json_message_key = $event,
              id: "webhook_json_message_key",
              type: "text",
              "aria-label": "Webhook JSON Message Key",
              error: unref(form).errors.hasOwnProperty("webhook_json_message_key")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.webhook_json_message_key
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="row"${_scopeId}><div class="col-12 col-sm-12"${_scopeId}><label${_scopeId}>Webhook JSON Status Key <span class="text-xs text-secondary"${_scopeId}>(You can use . notion)</span></label>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "multisteps-form__input",
              modelValue: unref(form).webhook_json_status_key,
              "onUpdate:modelValue": ($event) => unref(form).webhook_json_status_key = $event,
              id: "webhook_json_status_key",
              type: "text",
              "aria-label": "Webhook JSON Status Key",
              error: unref(form).errors.hasOwnProperty("webhook_json_status_key")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2",
              message: unref(form).errors.webhook_json_status_key
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-5 button-row d-flex col-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              as: "button",
              class: "btn mb-0 bg-gradient-secondary btn-md null null mb-0 js-btn-prev",
              title: "Prev"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Prev `);
                } else {
                  return [
                    createTextVNode("Prev ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(SoftButton, {
              color: "dark",
              variant: "gradient",
              class: "btn mb-0 bg-gradient-dark btn-md null null ms-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Create `);
                } else {
                  return [
                    createTextVNode("Create ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></form></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-4 container-fluid" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-12" }, [
                    createVNode("div", { class: "multisteps-form" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "mx-auto mt-4 mb-3 col-12 col-lg-8 mb-sm-5" }, [
                          createVNode("div", { class: "multisteps-form__progress" }, [
                            createVNode("button", {
                              class: "multisteps-form__progress-btn js-active js-active position-relative",
                              type: "button",
                              title: "Address Book Info"
                            }, [
                              createVNode("span", null, "1. Gateway Information")
                            ]),
                            unref(form).type === "http" ? (openBlock(), createBlock("button", {
                              key: 0,
                              class: "multisteps-form__progress-btn",
                              type: "button",
                              title: "Media"
                            }, " 2. Request Params ")) : createCommentVNode("", true),
                            unref(form).type === "http" ? (openBlock(), createBlock("button", {
                              key: 1,
                              class: "multisteps-form__progress-btn",
                              type: "button",
                              title: "webhook"
                            }, " 3. Webhook ")) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "m-auto col-12 col-lg-8" }, [
                          createVNode("form", {
                            class: "mb-8 multisteps-form__form",
                            role: "form",
                            onSubmit: withModifiers(submit, ["prevent"])
                          }, [
                            createVNode("div", {
                              class: "p-3 bg-white card multisteps-form__panel border-radius-xl js-active position-relative",
                              "data-animation": "FadeIn"
                            }, [
                              createVNode("h5", { class: "font-weight-bolder" }, "Gateway Information"),
                              createVNode("div", { class: "multisteps-form__content" }, [
                                createVNode("div", { class: "mt-3 row" }, [
                                  createVNode("div", { class: "col-12 col-sm-12" }, [
                                    createVNode("label", null, "Name"),
                                    createVNode(_sfc_main$2, {
                                      class: "multisteps-form__input",
                                      modelValue: unref(form).name,
                                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                      id: "name",
                                      type: "text",
                                      placeholder: "eg. Gateway1",
                                      "aria-label": "Name",
                                      error: unref(form).errors.hasOwnProperty("name")
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                    createVNode(_sfc_main$3, {
                                      class: "mt-2",
                                      message: unref(form).errors.name
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                createVNode("div", { class: "row mb-3" }, [
                                  createVNode("div", { class: "col-12 col-sm-12" }, [
                                    createVNode("label", { class: "form-label" }, "Type"),
                                    withDirectives(createVNode("select", {
                                      "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                      class: "form-control",
                                      name: "choices-type",
                                      id: "choices-type"
                                    }, [
                                      createVNode("option", { value: "http" }, "HTTP"),
                                      createVNode("option", { value: "smpp" }, "SMPP")
                                    ], 8, ["onUpdate:modelValue"]), [
                                      [vModelSelect, unref(form).type]
                                    ]),
                                    createVNode(_sfc_main$3, {
                                      class: "mt-2",
                                      message: unref(form).errors.type
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                unref(form).type === "http" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createVNode("div", { class: "row" }, [
                                    createVNode("div", { class: "col-12 col-sm-12" }, [
                                      createVNode("label", null, "Base URL"),
                                      createVNode(_sfc_main$2, {
                                        class: "multisteps-form__input",
                                        modelValue: unref(form).base_url,
                                        "onUpdate:modelValue": ($event) => unref(form).base_url = $event,
                                        id: "base_url",
                                        type: "text",
                                        "aria-label": "Base URL",
                                        error: unref(form).errors.hasOwnProperty("base_url")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                      createVNode(_sfc_main$3, {
                                        class: "mt-2",
                                        message: unref(form).errors.base_url
                                      }, null, 8, ["message"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "row" }, [
                                    createVNode("div", { class: "col-12 col-sm-12" }, [
                                      createVNode("label", null, "Success Keyword"),
                                      createVNode(_sfc_main$2, {
                                        class: "multisteps-form__input",
                                        modelValue: unref(form).success_keyword,
                                        "onUpdate:modelValue": ($event) => unref(form).success_keyword = $event,
                                        id: "success_keyword",
                                        type: "text",
                                        "aria-label": "Success Keyword",
                                        error: unref(form).errors.hasOwnProperty("success_keyword")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                      createVNode(_sfc_main$3, {
                                        class: "mt-2",
                                        message: unref(form).errors.success_keyword
                                      }, null, 8, ["message"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "row" }, [
                                    createVNode("div", { class: "col-12 col-sm-12" }, [
                                      createVNode("label", { class: "form-label" }, "HTTP Request Method"),
                                      withDirectives(createVNode("select", {
                                        "onUpdate:modelValue": ($event) => unref(form).method_type = $event,
                                        class: "form-control",
                                        name: "choices-method-type",
                                        id: "choices-method-type"
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.methodTypes, (methodType, i) => {
                                          return openBlock(), createBlock("option", {
                                            value: methodType,
                                            key: i
                                          }, toDisplayString(methodType), 9, ["value"]);
                                        }), 128))
                                      ], 8, ["onUpdate:modelValue"]), [
                                        [vModelSelect, unref(form).method_type]
                                      ]),
                                      createVNode(_sfc_main$3, {
                                        class: "mt-2",
                                        message: unref(form).errors.method_type
                                      }, null, 8, ["message"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 row" }, [
                                    createVNode("div", { class: "col-12 col-sm-12" }, [
                                      createVNode("label", { class: "form-label" }, "Enable JSON Encoded Request"),
                                      withDirectives(createVNode("select", {
                                        "onUpdate:modelValue": ($event) => unref(form).json_encoded = $event,
                                        class: "form-control",
                                        name: "choices-json-encoded",
                                        id: "choices-json-encoded"
                                      }, [
                                        createVNode("option", { value: true }, "Yes"),
                                        createVNode("option", { value: false }, "No")
                                      ], 8, ["onUpdate:modelValue"]), [
                                        [vModelSelect, unref(form).json_encoded]
                                      ]),
                                      createVNode(_sfc_main$3, {
                                        class: "mt-2",
                                        message: unref(form).errors.json_encoded
                                      }, null, 8, ["message"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 row" }, [
                                    createVNode("div", { class: "col-12 col-sm-12" }, [
                                      createVNode("label", { class: "form-label" }, "Content Type"),
                                      withDirectives(createVNode("select", {
                                        "onUpdate:modelValue": ($event) => unref(form).content_type = $event,
                                        class: "form-control",
                                        name: "choices-content-types",
                                        id: "choices-content-types"
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.contentTypes, (contentType, i) => {
                                          return openBlock(), createBlock("option", {
                                            value: contentType,
                                            key: i
                                          }, toDisplayString(contentType), 9, ["value"]);
                                        }), 128))
                                      ], 8, ["onUpdate:modelValue"]), [
                                        [vModelSelect, unref(form).content_type]
                                      ]),
                                      createVNode(_sfc_main$3, {
                                        class: "mt-2",
                                        message: unref(form).errors.content_type
                                      }, null, 8, ["message"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 row" }, [
                                    createVNode("div", { class: "col-12 col-sm-12" }, [
                                      createVNode("label", { class: "form-label" }, "Accept Content Type"),
                                      withDirectives(createVNode("select", {
                                        "onUpdate:modelValue": ($event) => unref(form).accept = $event,
                                        class: "form-control",
                                        name: "choices-accept-content-type",
                                        id: "choices-accept-content-type"
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.contentTypes, (contentType, i) => {
                                          return openBlock(), createBlock("option", {
                                            value: contentType,
                                            key: i
                                          }, toDisplayString(contentType), 9, ["value"]);
                                        }), 128))
                                      ], 8, ["onUpdate:modelValue"]), [
                                        [vModelSelect, unref(form).accept]
                                      ]),
                                      createVNode(_sfc_main$3, {
                                        class: "mt-2",
                                        message: unref(form).errors.accept
                                      }, null, 8, ["message"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 row" }, [
                                    createVNode("div", { class: "col-12 col-sm-12" }, [
                                      createVNode("label", { class: "form-label" }, "Encoding"),
                                      withDirectives(createVNode("select", {
                                        "onUpdate:modelValue": ($event) => unref(form).encoding_type = $event,
                                        class: "form-control",
                                        name: "choices-encoding",
                                        id: "choices-encoding"
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.encodingTypes, (encoding, i) => {
                                          return openBlock(), createBlock("option", {
                                            value: encoding,
                                            key: i
                                          }, toDisplayString(encoding), 9, ["value"]);
                                        }), 128))
                                      ], 8, ["onUpdate:modelValue"]), [
                                        [vModelSelect, unref(form).encoding_type]
                                      ]),
                                      createVNode(_sfc_main$3, {
                                        class: "mt-2",
                                        message: unref(form).errors.encoding_type
                                      }, null, 8, ["message"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 row" }, [
                                    createVNode("div", { class: "col-12 col-sm-12" }, [
                                      createVNode("label", { class: "form-label" }, "Ignore SSL"),
                                      withDirectives(createVNode("select", {
                                        "onUpdate:modelValue": ($event) => unref(form).ignore_ssl = $event,
                                        class: "form-control",
                                        name: "choices-ignore-ssl",
                                        id: "choices-ignore-ssl"
                                      }, [
                                        createVNode("option", { value: true }, "Yes"),
                                        createVNode("option", { value: false }, "No")
                                      ], 8, ["onUpdate:modelValue"]), [
                                        [vModelSelect, unref(form).ignore_ssl]
                                      ]),
                                      createVNode(_sfc_main$3, {
                                        class: "mt-2",
                                        message: unref(form).errors.ignore_ssl
                                      }, null, 8, ["message"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 row" }, [
                                    createVNode("div", { class: "col-12 col-sm-12" }, [
                                      createVNode("label", { class: "form-label" }, "Authorization"),
                                      withDirectives(createVNode("select", {
                                        "onUpdate:modelValue": ($event) => unref(form).authorization_type = $event,
                                        class: "form-control",
                                        name: "choices-authorization-type",
                                        id: "choices-authorization-type",
                                        onChange: authTypeChange
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.authTypes, (authType, i) => {
                                          return openBlock(), createBlock("option", {
                                            value: authType,
                                            key: i
                                          }, toDisplayString(authType), 9, ["value"]);
                                        }), 128))
                                      ], 40, ["onUpdate:modelValue"]), [
                                        [vModelSelect, unref(form).authorization_type]
                                      ]),
                                      createVNode(_sfc_main$3, {
                                        class: "mt-2",
                                        message: unref(form).errors.authorization_type
                                      }, null, 8, ["message"])
                                    ])
                                  ])
                                ], 64)) : createCommentVNode("", true),
                                unref(form).type === "smpp" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  createVNode("div", { class: "row" }, [
                                    createVNode("div", { class: "col-12 col-sm-12" }, [
                                      createVNode("label", null, "IP Address"),
                                      createVNode(_sfc_main$2, {
                                        class: "multisteps-form__input",
                                        modelValue: unref(form).ip_address,
                                        "onUpdate:modelValue": ($event) => unref(form).ip_address = $event,
                                        id: "ip_address",
                                        type: "text",
                                        "aria-label": "IP Address",
                                        error: unref(form).errors.hasOwnProperty("ip_address")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                      createVNode(_sfc_main$3, {
                                        class: "mt-2",
                                        message: unref(form).errors.ip_address
                                      }, null, 8, ["message"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "row" }, [
                                    createVNode("div", { class: "col-12 col-sm-12" }, [
                                      createVNode("label", null, "Port"),
                                      createVNode(_sfc_main$2, {
                                        class: "multisteps-form__input",
                                        modelValue: unref(form).port,
                                        "onUpdate:modelValue": ($event) => unref(form).port = $event,
                                        id: "port",
                                        type: "number",
                                        "aria-label": "Port",
                                        min: "1",
                                        step: "1",
                                        error: unref(form).errors.hasOwnProperty("port")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                      createVNode(_sfc_main$3, {
                                        class: "mt-2",
                                        message: unref(form).errors.port
                                      }, null, 8, ["message"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "row" }, [
                                    createVNode("div", { class: "col-12 col-sm-12" }, [
                                      createVNode("label", null, "Username"),
                                      createVNode(_sfc_main$2, {
                                        class: "multisteps-form__input",
                                        modelValue: unref(form).username,
                                        "onUpdate:modelValue": ($event) => unref(form).username = $event,
                                        id: "username",
                                        type: "text",
                                        "aria-label": "Username",
                                        error: unref(form).errors.hasOwnProperty("username")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                      createVNode(_sfc_main$3, {
                                        class: "mt-2",
                                        message: unref(form).errors.username
                                      }, null, 8, ["message"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "row" }, [
                                    createVNode("div", { class: "col-12 col-sm-12" }, [
                                      createVNode("label", null, "Password"),
                                      createVNode(_sfc_main$2, {
                                        class: "multisteps-form__input",
                                        modelValue: unref(form).password,
                                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                        id: "password",
                                        type: "text",
                                        "aria-label": "Password",
                                        error: unref(form).errors.hasOwnProperty("password")
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                      createVNode(_sfc_main$3, {
                                        class: "mt-2",
                                        message: unref(form).errors.password
                                      }, null, 8, ["message"])
                                    ])
                                  ])
                                ], 64)) : createCommentVNode("", true),
                                createVNode("div", { class: "mt-3 row" }, [
                                  createVNode("label", {
                                    for: "amount",
                                    class: "form-label"
                                  }, "Cost"),
                                  createVNode("div", { class: "input-group" }, [
                                    createVNode("span", { class: "input-group-text" }, "$"),
                                    withDirectives(createVNode("input", {
                                      "onUpdate:modelValue": ($event) => unref(form).cost = $event,
                                      type: "number",
                                      class: "form-control",
                                      "aria-label": "Cost",
                                      step: "0.01"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, unref(form).cost]
                                    ])
                                  ]),
                                  createVNode(_sfc_main$3, {
                                    class: "mt-2",
                                    message: unref(form).errors.cost
                                  }, null, 8, ["message"])
                                ]),
                                createVNode("div", { class: "mt-3 row" }, [
                                  createVNode("div", { class: "col-12 col-sm-12" }, [
                                    createVNode("label", {
                                      for: "limit",
                                      class: "form-label"
                                    }, "Sending Limit"),
                                    createVNode(_sfc_main$2, {
                                      class: "multisteps-form__input",
                                      modelValue: unref(form).limit,
                                      "onUpdate:modelValue": ($event) => unref(form).limit = $event,
                                      id: "limit",
                                      type: "number",
                                      "aria-label": "Limit",
                                      min: "1",
                                      step: "1",
                                      error: unref(form).errors.hasOwnProperty("limit")
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                    createVNode(_sfc_main$3, {
                                      class: "mt-3",
                                      message: unref(form).errors.limit
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                createVNode("div", { class: "row" }, [
                                  createVNode("div", { class: "col-12 col-sm-12" }, [
                                    createVNode("label", null, "Delay"),
                                    createVNode(_sfc_main$2, {
                                      class: "multisteps-form__input",
                                      modelValue: unref(form).delay,
                                      "onUpdate:modelValue": ($event) => unref(form).delay = $event,
                                      id: "delay",
                                      type: "number",
                                      "aria-label": "Delay",
                                      min: "1",
                                      step: "1",
                                      error: unref(form).errors.hasOwnProperty("delay")
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                    createVNode(_sfc_main$3, {
                                      class: "mt-2",
                                      message: unref(form).errors.delay
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                createVNode("div", { class: "row" }, [
                                  createVNode("div", { class: "col-12 col-sm-12" }, [
                                    createVNode("label", { class: "form-label" }, "Delay Time Unit"),
                                    withDirectives(createVNode("select", {
                                      "onUpdate:modelValue": ($event) => unref(form).delay_type = $event,
                                      class: "form-control",
                                      name: "choices-delay-unit",
                                      id: "choices-delay-unit",
                                      onChange: authTypeChange
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.delayTypes, (delayType, i) => {
                                        return openBlock(), createBlock("option", {
                                          value: delayType,
                                          key: i
                                        }, toDisplayString(delayType), 9, ["value"]);
                                      }), 128))
                                    ], 40, ["onUpdate:modelValue"]), [
                                      [vModelSelect, unref(form).delay_type]
                                    ]),
                                    createVNode(_sfc_main$3, {
                                      class: "mt-2",
                                      message: unref(form).errors.delay_type
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 row" }, [
                                  createVNode("div", { class: "col-12 col-sm-12" }, [
                                    createVNode(_sfc_main$4, {
                                      modelValue: unref(form).enabled,
                                      "onUpdate:modelValue": ($event) => unref(form).enabled = $event,
                                      id: "enabled",
                                      name: "enabled",
                                      checked: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Enable users to send using this gateway ")
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-4 button-row d-flex col-12" }, [
                                  unref(form).type === "smpp" ? (openBlock(), createBlock(SoftButton, {
                                    key: 0,
                                    color: "dark",
                                    variant: "gradient",
                                    class: "btn mb-0 bg-gradient-dark btn-md null null ms-auto"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Create ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  unref(form).type === "http" ? (openBlock(), createBlock("button", {
                                    key: 1,
                                    class: "btn mb-0 bg-gradient-dark btn-md null null mb-0 ms-auto js-btn-next",
                                    type: "button",
                                    title: "Next"
                                  }, "Next ")) : createCommentVNode("", true)
                                ])
                              ])
                            ]),
                            createVNode("div", {
                              class: "p-3 bg-white card multisteps-form__panel border-radius-xl",
                              "data-animation": "FadeIn"
                            }, [
                              createVNode("h5", { class: "font-weight-bolder" }, "Parameters"),
                              createVNode("div", { class: "multisteps-form__content" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(form).params, (param, i) => {
                                  return openBlock(), createBlock(GatewayParam, {
                                    "has-name": param.hasName,
                                    "has-value": param.hasValue,
                                    type: param.type,
                                    deletable: param.removable,
                                    index: param.id,
                                    name: param.name,
                                    value: param.value,
                                    onOnRemove: onParamRemove,
                                    onOnChange: onParamChange,
                                    nullable: param.nullable ?? false,
                                    key: param.id
                                  }, null, 8, ["has-name", "has-value", "type", "deletable", "index", "name", "value", "nullable"]);
                                }), 128)),
                                createVNode("div", { class: "m-auto mt-4 text-center" }, [
                                  createVNode("button", {
                                    class: "m-auto btn mb-0 bg-gradient-success btn-sm null null px-7",
                                    title: "add",
                                    onClick: withModifiers(addCustomParam, ["prevent"])
                                  }, "Add ")
                                ]),
                                createVNode("div", { class: "mt-5 button-row d-flex col-12" }, [
                                  createVNode(_component_Link, {
                                    as: "button",
                                    class: "btn mb-0 bg-gradient-secondary btn-md null null mb-0 js-btn-prev",
                                    title: "Prev"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Prev ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("button", {
                                    class: "btn mb-0 bg-gradient-dark btn-md null null mb-0 ms-auto js-btn-next",
                                    type: "button",
                                    title: "Next"
                                  }, "Next ")
                                ])
                              ])
                            ]),
                            createVNode("div", {
                              class: "p-3 bg-white card multisteps-form__panel border-radius-xl",
                              "data-animation": "FadeIn"
                            }, [
                              createVNode("h5", { class: "font-weight-bolder" }, "Webhook"),
                              createVNode("div", { class: "multisteps-form__content" }, [
                                createVNode("div", { class: "row mt-3" }, [
                                  createVNode("div", { class: "col-12 col-sm-12" }, [
                                    createVNode("label", null, [
                                      createTextVNode("Response JSON Message Key "),
                                      createVNode("span", { class: "text-xs text-secondary" }, "(You can use . notion)")
                                    ]),
                                    createVNode(_sfc_main$2, {
                                      class: "multisteps-form__input",
                                      modelValue: unref(form).json_message_key,
                                      "onUpdate:modelValue": ($event) => unref(form).json_message_key = $event,
                                      id: "json_message_key",
                                      type: "text",
                                      "aria-label": "JSON Message Key",
                                      error: unref(form).errors.hasOwnProperty("json_message_key")
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                    createVNode(_sfc_main$3, {
                                      class: "mt-2",
                                      message: unref(form).errors.json_message_key
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                createVNode("div", { class: "row" }, [
                                  createVNode("div", { class: "col-12 col-sm-12" }, [
                                    createVNode("label", null, [
                                      createTextVNode("Webhook JSON Message Key "),
                                      createVNode("span", { class: "text-xs text-secondary" }, "(You can use . notion)")
                                    ]),
                                    createVNode(_sfc_main$2, {
                                      class: "multisteps-form__input",
                                      modelValue: unref(form).webhook_json_message_key,
                                      "onUpdate:modelValue": ($event) => unref(form).webhook_json_message_key = $event,
                                      id: "webhook_json_message_key",
                                      type: "text",
                                      "aria-label": "Webhook JSON Message Key",
                                      error: unref(form).errors.hasOwnProperty("webhook_json_message_key")
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                    createVNode(_sfc_main$3, {
                                      class: "mt-2",
                                      message: unref(form).errors.webhook_json_message_key
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                createVNode("div", { class: "row" }, [
                                  createVNode("div", { class: "col-12 col-sm-12" }, [
                                    createVNode("label", null, [
                                      createTextVNode("Webhook JSON Status Key "),
                                      createVNode("span", { class: "text-xs text-secondary" }, "(You can use . notion)")
                                    ]),
                                    createVNode(_sfc_main$2, {
                                      class: "multisteps-form__input",
                                      modelValue: unref(form).webhook_json_status_key,
                                      "onUpdate:modelValue": ($event) => unref(form).webhook_json_status_key = $event,
                                      id: "webhook_json_status_key",
                                      type: "text",
                                      "aria-label": "Webhook JSON Status Key",
                                      error: unref(form).errors.hasOwnProperty("webhook_json_status_key")
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                    createVNode(_sfc_main$3, {
                                      class: "mt-2",
                                      message: unref(form).errors.webhook_json_status_key
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                createVNode("div", { class: "mt-5 button-row d-flex col-12" }, [
                                  createVNode(_component_Link, {
                                    as: "button",
                                    class: "btn mb-0 bg-gradient-secondary btn-md null null mb-0 js-btn-prev",
                                    title: "Prev"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Prev ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(SoftButton, {
                                    color: "dark",
                                    variant: "gradient",
                                    class: "btn mb-0 bg-gradient-dark btn-md null null ms-auto"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Create ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ])
                          ], 32)
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Gateway/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
