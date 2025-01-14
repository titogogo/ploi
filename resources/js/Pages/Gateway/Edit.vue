<script setup>
import Layout from "@/Layouts/AppLayout.vue";
import initMultiStepForm from '../../Plugins/multistep-form.js'
import {onMounted} from "vue";
import InputError from "@/Components/InputError.vue";
import {useForm} from "@inertiajs/vue3";
import SoftInput from "@/Components/SoftInput.vue";
import {inject} from 'vue'
import SoftButton from "@/Components/SoftButton.vue";
import GatewayParam from "@/Components/GatewayParam.vue";
import SoftSwitch from "@/Components/SoftSwitch.vue";

const swal = inject('$swal')

const {
    gateway,
    methodTypes,
    contentTypes,
    encodingTypes,
    authTypes,
    delayTypes,
} = defineProps({
    gateway: {
        type: Object,
        required: true,
    },
    methodTypes: {
        type: Array,
        required: true,
    },
    contentTypes: {
        type: Array,
        required: true,
    },
    encodingTypes: {
        type: Array,
        required: true,
    },
    authTypes: {
        type: Array,
        required: true,
    },
    delayTypes: {
        type: Array,
        required: true,
    }
})

onMounted(() => {
    initMultiStepForm()
    gateway.params.forEach((param) => {
        if (param.type === 'source') {
            addParam(param.type, param.name, true, true, false, false, param.value)
            return;
        }
        if (param.type === 'username' || param.type === 'password' || param.type === 'token') {
            if (form.authorization_type === 'param') {
                insertParam(param.type, param.name, true, true, false, false, param.value)
                return
            }

            if (form.authorization_type === 'basic_auth') {
                insertParam(param.type, param.name, false, true, false, true, param.value)
                return
            }

            if (form.authorization_type === 'bearer_token') {
                insertParam(param.type, param.name, false, true, false, true, param.value)
                return
            }
        }
        if (param.type === 'destination' || param.type === 'message') {
            addParam(param.type, param.name, true, false, false)
            return;
        }
        addParam(param.type, param.name, true, true, false, true, param.value)
    })
})

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
    params: [],
});

const submit = () => {
    form.patch(route('gateway.update', gateway.id), {
        onSuccess: () => {
            swal.fire({
                title: "Success!",
                text: "Gateway is created successfully.!",
                icon: "success"
            });
        }
    });
}

const authTypeChange = () => {
    if (form.authorization_type === 'param') {
        removeAuthInputs()

        insertParam('password', 'password', true, true, false)
        insertParam('username', 'username', true, true, false)

    }

    if (form.authorization_type === 'basic_auth') {
        removeAuthInputs()

        insertParam('password', 'password', false, true, false, true)
        insertParam('username', 'username', false, true, false, true)
    }

    if (form.authorization_type === 'bearer_token') {
        removeAuthInputs()

        insertParam('token', 'token', false, true, false, true)
    }
}

const removeAuthInputs = () => {
    form.params = form.params.filter(x => x.type !== 'token' && x.type !== 'username' && x.type !== 'password')
}

const insertParam = (type, name, hasName, hasValue, removable, nullable = true, value = '') => {
    let latestId = form.params.reduce((acc, value) => {
        return (acc = acc > value.id ? acc : value.id);
    }, 0);

    form.params.unshift({
        id: latestId + 1,
        type,
        name,
        value,
        hasName,
        hasValue,
        removable,
        nullable,
    })
}

const addCustomParam = () => {
    addParam()
}

const addParam = (type = 'custom', name = 'custom param', hasName = true, hasValue = true, removable = true, nullable = false, value = '') => {
    let latestId = form.params.reduce((acc, value) => {
        return (acc = acc > value.id ? acc : value.id);
    }, 0);

    form.params.push({
        id: latestId + 1,
        type,
        name,
        value,
        hasName,
        hasValue,
        removable,
        nullable,
    })
}

const onParamRemove = (id) => {
    const index = form.params.findIndex(x => x.id === id)

    form.params.splice(index, 1)
}

const onParamChange = (id, data) => {
    const index = form.params.findIndex(x => x.id === id)

    form.params[index].name = data.name;
    form.params[index].value = data.value;
}
</script>

<template>
    <Layout title="Create new gateway">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="col-12">

                    <div class="multisteps-form">
                        <div class="row">
                            <div class="mx-auto mt-4 mb-3 col-12 col-lg-8 mb-sm-5">
                                <div class="multisteps-form__progress">
                                    <button class="multisteps-form__progress-btn js-active js-active position-relative"
                                            type="button" title="Address Book Info"><span>1. Gateway Information</span>
                                    </button>
                                    <button class="multisteps-form__progress-btn" type="button" title="Media" v-if="form.type === 'http'">
                                        2. Request Params
                                    </button>
                                    <button class="multisteps-form__progress-btn" type="button" title="webhook" v-if="form.type === 'http'">
                                        3. Webhook
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="m-auto col-12 col-lg-8">
                                <form class="mb-8 multisteps-form__form" role="form" @submit.prevent="submit">
                                    <div
                                        class="p-3 bg-white card multisteps-form__panel border-radius-xl js-active position-relative"
                                        data-animation="FadeIn">
                                        <h5 class="font-weight-bolder">Gateway Information</h5>
                                        <div class="multisteps-form__content">
                                            <div class="mt-3 row">
                                                <div class="col-12 col-sm-12">
                                                    <label>Name</label>
                                                    <soft-input
                                                        class="multisteps-form__input "
                                                        v-model="form.name"
                                                        id="name"
                                                        type="text"
                                                        placeholder="eg. Gateway1"
                                                        aria-label="Name"
                                                        :error="form.errors.hasOwnProperty('name')"
                                                    />
                                                    <InputError class="mt-2" :message="form.errors.name"/>
                                                </div>
                                            </div>

                                            <div class="row mb-3">
                                                <div class="col-12 col-sm-12">
                                                    <label class="form-label">Type</label>
                                                    <select v-model="form.type" class="form-control" name="choices-type"
                                                            id="choices-type">
                                                        <option value="http">HTTP</option>
                                                        <option value="smpp">SMPP</option>
                                                    </select>
                                                    <InputError class="mt-2" :message="form.errors.type"/>
                                                </div>
                                            </div>

                                            <template v-if="form.type === 'http'">
                                                <div class="row">
                                                    <div class="col-12 col-sm-12">
                                                        <label>Base URL</label>
                                                        <soft-input
                                                            class="multisteps-form__input "
                                                            v-model="form.base_url"
                                                            id="base_url"
                                                            type="text"
                                                            aria-label="Base URL"
                                                            :error="form.errors.hasOwnProperty('base_url')"
                                                        />
                                                        <InputError class="mt-2" :message="form.errors.base_url"/>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12 col-sm-12">
                                                        <label>Success Keyword</label>
                                                        <soft-input
                                                            class="multisteps-form__input "
                                                            v-model="form.success_keyword"
                                                            id="success_keyword"
                                                            type="text"
                                                            aria-label="Success Keyword"
                                                            :error="form.errors.hasOwnProperty('success_keyword')"
                                                        />
                                                        <InputError class="mt-2"
                                                                    :message="form.errors.success_keyword"/>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12 col-sm-12">
                                                        <label class="form-label">HTTP Request Method</label>
                                                        <select v-model="form.method_type" class="form-control"
                                                                name="choices-method-type" id="choices-method-type">
                                                            <option :value="methodType"
                                                                    v-for="(methodType, i) in methodTypes" :key="i">
                                                                {{ methodType }}
                                                            </option>
                                                        </select>
                                                        <InputError class="mt-2" :message="form.errors.method_type"/>
                                                    </div>
                                                </div>

                                                <div class="mt-3 row">
                                                    <div class="col-12 col-sm-12">
                                                        <label class="form-label">Enable JSON Encoded Request</label>
                                                        <select v-model="form.json_encoded" class="form-control"
                                                                name="choices-json-encoded" id="choices-json-encoded">
                                                            <option :value="true">Yes</option>
                                                            <option :value="false">No</option>
                                                        </select>
                                                        <InputError class="mt-2" :message="form.errors.json_encoded"/>
                                                    </div>
                                                </div>

                                                <div class="mt-3 row">
                                                    <div class="col-12 col-sm-12">
                                                        <label class="form-label">Content Type</label>
                                                        <select v-model="form.content_type" class="form-control"
                                                                name="choices-content-types" id="choices-content-types">
                                                            <option :value="contentType"
                                                                    v-for="(contentType, i) in contentTypes" :key="i">
                                                                {{ contentType }}
                                                            </option>
                                                        </select>
                                                        <InputError class="mt-2" :message="form.errors.content_type"/>
                                                    </div>
                                                </div>

                                                <div class="mt-3 row">
                                                    <div class="col-12 col-sm-12">
                                                        <label class="form-label">Accept Content Type</label>
                                                        <select v-model="form.accept" class="form-control"
                                                                name="choices-accept-content-type"
                                                                id="choices-accept-content-type">
                                                            <option :value="contentType"
                                                                    v-for="(contentType, i) in contentTypes" :key="i">
                                                                {{ contentType }}
                                                            </option>
                                                        </select>
                                                        <InputError class="mt-2" :message="form.errors.accept"/>
                                                    </div>
                                                </div>

                                                <div class="mt-3 row">
                                                    <div class="col-12 col-sm-12">
                                                        <label class="form-label">Encoding</label>
                                                        <select v-model="form.encoding_type" class="form-control"
                                                                name="choices-encoding" id="choices-encoding">
                                                            <option :value="encoding"
                                                                    v-for="(encoding, i) in encodingTypes" :key="i">
                                                                {{ encoding }}
                                                            </option>
                                                        </select>
                                                        <InputError class="mt-2" :message="form.errors.encoding_type"/>
                                                    </div>
                                                </div>

                                                <div class="mt-3 row">
                                                    <div class="col-12 col-sm-12">
                                                        <label class="form-label">Ignore SSL</label>
                                                        <select v-model="form.ignore_ssl" class="form-control"
                                                                name="choices-ignore-ssl" id="choices-ignore-ssl">
                                                            <option :value="true">Yes</option>
                                                            <option :value="false">No</option>
                                                        </select>
                                                        <InputError class="mt-2" :message="form.errors.ignore_ssl"/>
                                                    </div>
                                                </div>

                                                <div class="mt-3 row">
                                                    <div class="col-12 col-sm-12">
                                                        <label class="form-label">Authorization</label>
                                                        <select v-model="form.authorization_type" class="form-control"
                                                                name="choices-authorization-type"
                                                                id="choices-authorization-type"
                                                                @change="authTypeChange">
                                                            <option :value="authType" v-for="(authType, i) in authTypes"
                                                                    :key="i">{{ authType }}
                                                            </option>
                                                        </select>
                                                        <InputError class="mt-2"
                                                                    :message="form.errors.authorization_type"/>
                                                    </div>
                                                </div>
                                            </template>

                                            <template v-if="form.type === 'smpp'">
                                                <div class="row">
                                                    <div class="col-12 col-sm-12">
                                                        <label>IP Address</label>
                                                        <soft-input
                                                            class="multisteps-form__input "
                                                            v-model="form.ip_address"
                                                            id="ip_address"
                                                            type="text"
                                                            aria-label="IP Address"
                                                            :error="form.errors.hasOwnProperty('ip_address')"
                                                        />
                                                        <InputError class="mt-2" :message="form.errors.ip_address"/>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12 col-sm-12">
                                                        <label>Port</label>
                                                        <soft-input
                                                            class="multisteps-form__input "
                                                            v-model="form.port"
                                                            id="port"
                                                            type="number"
                                                            aria-label="Port"
                                                            min="1"
                                                            step="1"
                                                            :error="form.errors.hasOwnProperty('port')"
                                                        />
                                                        <InputError class="mt-2" :message="form.errors.port"/>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12 col-sm-12">
                                                        <label>Username</label>
                                                        <soft-input
                                                            class="multisteps-form__input "
                                                            v-model="form.username"
                                                            id="username"
                                                            type="text"
                                                            aria-label="Username"
                                                            :error="form.errors.hasOwnProperty('username')"
                                                        />
                                                        <InputError class="mt-2" :message="form.errors.username"/>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12 col-sm-12">
                                                        <label>Password</label>
                                                        <soft-input
                                                            class="multisteps-form__input "
                                                            v-model="form.password"
                                                            id="password"
                                                            type="text"
                                                            aria-label="Password"
                                                            :error="form.errors.hasOwnProperty('password')"
                                                        />
                                                        <InputError class="mt-2" :message="form.errors.password"/>
                                                    </div>
                                                </div>
                                            </template>

                                            <div class="mt-3 row">
                                                <label for="amount" class="form-label">Cost</label>
                                                <div class="input-group">
                                                    <span class="input-group-text">$</span>
                                                    <input v-model="form.cost" type="number" class="form-control"
                                                           aria-label="Cost" step="0.01">
                                                </div>
                                                <InputError class="mt-2" :message="form.errors.cost"/>
                                            </div>
                                            <div class="mt-3 row">
                                                <div class="col-12 col-sm-12">
                                                    <label for="limit" class="form-label">Sending Limit</label>
                                                    <soft-input
                                                        class="multisteps-form__input "
                                                        v-model="form.limit"
                                                        id="limit"
                                                        type="number"
                                                        aria-label="Limit"
                                                        min="1"
                                                        step="1"
                                                        :error="form.errors.hasOwnProperty('limit')"
                                                    />
                                                    <InputError class="mt-3" :message="form.errors.limit"/>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-12 col-sm-12">
                                                    <label>Delay</label>
                                                    <soft-input
                                                        class="multisteps-form__input "
                                                        v-model="form.delay"
                                                        id="delay"
                                                        type="number"
                                                        aria-label="Delay"
                                                        min="1"
                                                        step="1"
                                                        :error="form.errors.hasOwnProperty('delay')"
                                                    />
                                                    <InputError class="mt-2" :message="form.errors.delay"/>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-12 col-sm-12">
                                                    <label class="form-label">Delay Time Unit</label>
                                                    <select v-model="form.delay_type" class="form-control"
                                                            name="choices-delay-unit" id="choices-delay-unit"
                                                            @change="authTypeChange">
                                                        <option :value="delayType" v-for="(delayType, i) in delayTypes"
                                                                :key="i">{{ delayType }}
                                                        </option>
                                                    </select>
                                                    <InputError class="mt-2" :message="form.errors.delay_type"/>
                                                </div>
                                            </div>


                                            <div class="mt-4 row">
                                                <div class="col-12 col-sm-12">
                                                    <soft-switch v-model="form.enabled" id="enabled" name="enabled"
                                                                 checked>
                                                        Enable users to send using this gateway
                                                    </soft-switch>
                                                </div>
                                            </div>
                                            <div class="mt-4 button-row d-flex col-12">
                                                <soft-button
                                                    v-if="form.type === 'smpp'"
                                                    color="dark"
                                                    variant="gradient"
                                                    class="btn mb-0 bg-gradient-dark btn-md null null ms-auto"
                                                >Create
                                                </soft-button>
                                                <button
                                                    v-if="form.type === 'http'"
                                                    class="btn mb-0 bg-gradient-dark btn-md null null mb-0 ms-auto js-btn-next"
                                                    type="button" title="Next">Next
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 bg-white card multisteps-form__panel border-radius-xl"
                                         data-animation="FadeIn">
                                        <h5 class="font-weight-bolder">Parameters</h5>
                                        <div class="multisteps-form__content">
                                            <gateway-param
                                                v-for="(param, i) in form.params"
                                                :has-name="param.hasName"
                                                :has-value="param.hasValue"
                                                :type="param.type"
                                                :deletable="param.removable"
                                                :index="param.id"
                                                :name="param.name"
                                                :value="param.value"
                                                @on-remove="onParamRemove"
                                                @on-change="onParamChange"
                                                :nullable="param.nullable ?? false"
                                                :key="param.id"
                                            />

                                            <div class="m-auto mt-4 text-center">
                                                <button
                                                    class="m-auto btn mb-0 bg-gradient-success btn-sm null null px-7"
                                                    title="add"
                                                    @click.prevent="addCustomParam"
                                                >Add
                                                </button>
                                            </div>

                                            <div class="mt-5 button-row d-flex col-12">
                                                <Link as="button"
                                                      class="btn mb-0 bg-gradient-secondary btn-md null null mb-0 js-btn-prev"
                                                      title="Prev">Prev
                                                </Link>
                                                <button
                                                    class="btn mb-0 bg-gradient-dark btn-md null null mb-0 ms-auto js-btn-next"
                                                    type="button" title="Next">Next
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="p-3 bg-white card multisteps-form__panel border-radius-xl"
                                         data-animation="FadeIn">
                                        <h5 class="font-weight-bolder">Webhook</h5>
                                        <div class="multisteps-form__content">
                                            <div class="row mt-3">
                                                <div class="col-12 col-sm-12">
                                                    <label>Response JSON Message Key <span
                                                        class="text-xs text-secondary">(You can use . notion)</span>
                                                    </label>
                                                    <soft-input
                                                        class="multisteps-form__input "
                                                        v-model="form.json_message_key"
                                                        id="json_message_key"
                                                        type="text"
                                                        aria-label="JSON Message Key"
                                                        :error="form.errors.hasOwnProperty('json_message_key')"
                                                    />
                                                    <InputError class="mt-2" :message="form.errors.json_message_key"/>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-12 col-sm-12">
                                                    <label>Webhook JSON Message Key <span
                                                        class="text-xs text-secondary">(You can use . notion)</span>
                                                    </label>
                                                    <soft-input
                                                        class="multisteps-form__input "
                                                        v-model="form.webhook_json_message_key"
                                                        id="webhook_json_message_key"
                                                        type="text"
                                                        aria-label="Webhook JSON Message Key"
                                                        :error="form.errors.hasOwnProperty('webhook_json_message_key')"
                                                    />
                                                    <InputError class="mt-2"
                                                                :message="form.errors.webhook_json_message_key"/>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-12 col-sm-12">
                                                    <label>Webhook JSON Status Key <span class="text-xs text-secondary">(You can use . notion)</span>
                                                    </label>
                                                    <soft-input
                                                        class="multisteps-form__input "
                                                        v-model="form.webhook_json_status_key"
                                                        id="webhook_json_status_key"
                                                        type="text"
                                                        aria-label="Webhook JSON Status Key"
                                                        :error="form.errors.hasOwnProperty('webhook_json_status_key')"
                                                    />
                                                    <InputError class="mt-2"
                                                                :message="form.errors.webhook_json_status_key"/>
                                                </div>
                                            </div>

                                            <div class="mt-5 button-row d-flex col-12">
                                                <Link as="button"
                                                      class="btn mb-0 bg-gradient-secondary btn-md null null mb-0 js-btn-prev"
                                                      title="Prev">Prev
                                                </Link>
                                                <soft-button
                                                    color="dark"
                                                    variant="gradient"
                                                    class="btn mb-0 bg-gradient-dark btn-md null null ms-auto"
                                                >Create
                                                </soft-button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<style scoped>

</style>
