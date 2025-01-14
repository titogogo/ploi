<script setup>
import Layout from "@/Layouts/AppLayout.vue";
import SoftCountedTextarea from "@/Components/SoftCountedTextarea.vue";
import SoftInput from "@/Components/SoftInput.vue";
import {useForm} from "@inertiajs/vue3";
import House from "@/Components/Icon/House.vue";
import setNavPills from "@/Plugins/nav-pills.js";
import {onMounted, ref} from "vue";
import {useDropzone} from "vue3-dropzone";
import initChoices from "@/Plugins/choices.js";
import SoftSwitch from "@/Components/SoftSwitch.vue";
import flatPickr from 'vue-flatpickr-component';
import {inject} from 'vue'
import ChoicesTagsInput from "@/Components/ChoicesTagsInput.vue";
import InputError from "@/Components/InputError.vue";
import SoftButton from "@/Components/SoftButton.vue";
import SoftCheckbox from "@/Components/SoftCheckbox.vue";

const swal = inject('$swal')

const {gateways, templates} = defineProps({
    addressBooks: {
        type: Array,
        required: true
    },
    gateways: {
        type: Array,
        required: true,
    },
    templates: {
        type: Array,
        required: true,
    }
})

const form = useForm({
    gateway_id: gateways[0] ? gateways[0].id : null,
    sender_id: '',
    message: '',
    recipients_type: 'numbers',
    recipients: null,
    address_book: null,
    recipients_files: null,
    schedule: false,
    schedule_date: null,
});

const useTemplate = ref(false)

onMounted(() => {
    setNavPills();
    initChoices('choices-tags', 'tags')
    initChoices('choices-address-book')
    initChoices('choices-gateways')
    // initChoices('choices-templates')
})

const onDrop = (acceptFiles, rejectReasons) => {
    form.recipients_files = acceptFiles
}

const {getRootProps, getInputProps, open} = useDropzone({onDrop});

const config = ref({
    enableTime: true,
    wrap: true, // set wrap to true only when using 'input-group'
    altFormat: 'M j, Y H:i',
    altInput: true,
    dateFormat: 'Y-m-d H:i',
    minDate: "today",
});

const errors = ref({});

const sendForm = () => {
    errors.value = {}
    form.post(route('messages.store'), {
        preserveScroll: true,
        onSuccess: () => {
            swal.fire({
                title: "Success!",
                text: "Message is scheduled successfully.!",
                icon: "success"
            });
        },
        onError: (errs) => {
            errors.value = errs
        },
    });
}

const removeFile = (index) => {
    if (form.recipients_files[index]) {
        form.recipients_files.splice(index, 1);
    }
}

const truncateString = (string = '', maxLength = 50) =>
    string.length > maxLength
        ? `${string.substring(0, maxLength)}…`
        : string

const onTemplateChange = (event) => {
    const template = templates.find(x => x.id === Number(event.target.value))

    if (template) {
        form.message = template.content
    }
}
</script>

<template>
    <Layout title="Send a message">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="mx-auto col-lg-9 col-12">
                    <div class="mt-4 card card-body">
                        <h6 class="mb-0">New Message</h6>
                        <p class="mb-0 text-sm">Send a new message</p>
                        <hr class="my-3 horizontal dark">

                        <label class="form-label">Gateway</label>
                        <select v-model="form.gateway_id" class="form-control" name="choices-gateways" id="choices-gateways">
                            <option :value="gateway.id" v-for="(gateway, i) in gateways" :key="i">{{ gateway.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.gateway_id" />

                        <label>Sender ID</label>
                        <soft-input
                            id="sender_id"
                            v-model="form.sender_id"
                            type="text"
                            placeholder="Sender ID"
                            name="sender_id"
                            autofocus
                            :error="errors.hasOwnProperty('sender_id')"
                        />

                        <InputError class="mt-2" :message="errors.sender_id"/>
                        <div class="nav-wrapper position-relative end-0">
                            <ul
                                class="p-1 bg-gray-100 nav nav-pills nav-fill"
                                role="tablist"
                            >
                                <li class="nav-item">
                                    <a
                                        class="px-0 py-1 mb-0 nav-link active"
                                        data-bs-toggle="tab"
                                        href="#"
                                        role="tab"
                                        aria-selected="true"
                                        @click="form.recipients_type = 'numbers'"
                                    >
                                        <house class="text-dark"/>
                                        <span class="ms-1">Numbers</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        class="px-0 py-1 mb-0 nav-link"
                                        data-bs-toggle="tab1"
                                        href="#"
                                        role="tab"
                                        aria-selected="false"
                                        @click="form.recipients_type = 'address_book'"
                                    >
                                        <house class="text-dark"/>
                                        <span class="ms-1">Address Book</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        class="px-0 py-1 mb-0 nav-link"
                                        data-bs-toggle="tab"
                                        href="#"
                                        role="tab"
                                        aria-selected="false"
                                        @click="form.recipients_type = 'file'"
                                    >
                                        <house class="text-dark"/>
                                        <span class="ms-1">File</span>
                                    </a>
                                </li>
                            </ul>

                            <div class="row px-3 my-4 collapse" :class="{'show': form.recipients_type === 'numbers'}">
                                <choices-tags-input
                                    v-model="form.recipients"
                                    :error="Object.keys(form.errors).some(function(k){ return ~k.indexOf('recipients') })"
                                />

                                <div v-for="(parameter, index) in form.recipients" :key="index">
                                    <InputError class="mt-2" :message="form.errors['recipients.' + index]"/>
                                </div>
                            </div>
                            <div class="row px-3 my-4 collapse"
                                 :class="{'show': form.recipients_type === 'address_book'}">
                                <select class="form-control" name="choices-address-book" id="choices-address-book"
                                        v-model="form.address_book">
                                    <option :value="addressBook.id" v-for="(addressBook, i) in addressBooks" :key="i">
                                        {{ addressBook.name }}
                                    </option>
                                </select>

                                <InputError class="mt-2" :message="errors.address_book"/>
                            </div>
                            <div class="row px-3 my-4 collapse" :class="{'show': form.recipients_type === 'file'}">
                                <div class="form-control dropzone dz-clickable" v-bind="getRootProps()">
                                    <input v-bind="getInputProps()"/>
                                    <div class="dz-default dz-message">
                                        <button @click="open" class="dz-button" type="button">Drop files here to
                                            upload
                                        </button>
                                    </div>
                                </div>

                                <InputError class="mt-2" :message="errors.recipients_files"/>

                                <div class="mt-3 row">
                                    <div class="col-12">
                                        <div class="border badge bg-success mx-1" v-for="(file, i) in form.recipients_files">
                                            <span class="me-sm-2">{{ truncateString(file.name, 10) }}</span>
                                            <soft-button class="btn btn-light btn-sm"
                                                         @click.prevent="removeFile(i)">X
                                            </soft-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <soft-checkbox v-model="useTemplate" class="mb-3">
                            Use template
                        </soft-checkbox>

                        <label class="form-label">Message Template</label>
                        <select class="form-control" name="choices-templates" id="choices-templates" :disabled="!useTemplate" @change="onTemplateChange">
                            <option :value="null" selected>Please select</option>

                            <option :value="template.id" v-for="(template, i) in templates" :key="i">{{ template.name }}</option>
                        </select>

                        <soft-counted-textarea
                            class="mt-3"
                            id="message"
                            v-model="form.message"
                            placeholder="Type your message here..."
                            name="message"
                            autofocus
                            :error="errors.hasOwnProperty('message')"
                        >
                            Message
                        </soft-counted-textarea>

                        <InputError class="mt-2" :message="errors.message"/>

                        <div class="d-flex align-items-center mb-sm-4 mb-6">
                            <div>
                                <soft-switch id="schedule_message" name="schedule" v-model="form.schedule"/>
                            </div>
                            <div class="ms-2">
                                <span class="text-dark font-weight-bold d-block text-sm">Schedule</span>
                                <span class="text-xs d-block">Schedule the message to be sent on a specific date and time.</span>
                            </div>
                        </div>

                        <div class="row px-3" v-if="form.schedule">
                            <label class="form-label">Date</label>
                            <flat-pickr
                                v-model="form.schedule_date"
                                :config="config"
                                class="form-control datepicker flatpickr-input"
                                placeholder="Please select date"
                                name="date"
                                :error="errors.hasOwnProperty('schedule_date')"
                            />

                            <InputError class="mt-2" :message="errors.schedule_date"/>
                        </div>

                        <div class="mt-4 d-flex justify-content-end">
                            <button type="button" name="button" class="m-0 btn btn-light"> Cancel</button>
                            <button type="button" name="button" class="m-0 btn bg-gradient-primary ms-2"> Save</button>
                            <button type="button" name="button" class="m-0 btn bg-gradient-success ms-2"
                                    @click="sendForm"> Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<style scoped>

</style>
