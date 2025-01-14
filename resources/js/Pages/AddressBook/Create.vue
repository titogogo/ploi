<script setup>
import Layout from "@/Layouts/AppLayout.vue";
import initMultiStepForm from '../../Plugins/multistep-form.js'
import {onMounted} from "vue";
import {QuillEditor} from "@vueup/vue-quill";
import InputError from "@/Components/InputError.vue";
import {useDropzone} from "vue3-dropzone";
import {useForm} from "@inertiajs/vue3";
import SoftInput from "@/Components/SoftInput.vue";
import { inject } from 'vue'
import SoftButton from "@/Components/SoftButton.vue";
const swal = inject('$swal')

onMounted(() => {
    initMultiStepForm()
})
const form = useForm({
    name: '',
    notes: '',
    files: [],
});


const onDrop = (acceptFiles, rejectReasons) => {
    form.files = acceptFiles
}

const {getRootProps, getInputProps, isDragActive, open} = useDropzone({
    accept: '.txt',
    onDrop
});

const submit = () => {
    form.post(route('address-books.store'), {
        onSuccess: () => {
            swal.fire({
                title: "Success!",
                text: "Address book is created successfully.!",
                icon: "success"
            });
        }
    });
}

const removeFile = (index) => {
    if (form.files[index]) {
        form.files.splice(index, 1);
    }
}
</script>

<template>
    <Layout title="Create address book">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="multisteps-form">
                        <div class="row">
                            <div class="mx-auto mt-4 mb-3 col-12 col-lg-8 mb-sm-5">
                                <div class="multisteps-form__progress">
                                    <button class="multisteps-form__progress-btn js-active js-active position-relative"
                                            type="button" title="Address Book Info"><span>1. Address Book Info</span>
                                    </button>
                                    <button class="multisteps-form__progress-btn" type="button" title="Media">
                                        2. Contacts
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
                                        <h5 class="font-weight-bolder">Address Book Information</h5>
                                        <div class="multisteps-form__content">
                                            <div class="mt-3 row">
                                                <div class="col-12 col-sm-12">
                                                    <label>Name</label>
                                                    <soft-input
                                                        class="multisteps-form__input "
                                                        v-model="form.name"
                                                        id="name"
                                                        type="text"
                                                        placeholder="eg. Customers"
                                                        aria-label="Name"
                                                        :error="form.errors.hasOwnProperty('name')"
                                                    />
                                                    <InputError class="mt-2" :message="form.errors.name" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <label class="mt-4">Notes</label>
                                                    <p class="text-xs form-text text-muted ms-1 d-inline">(optional)</p>
                                                    <textarea
                                                        v-model="form.notes"
                                                        class="form-control multisteps-form__textarea"
                                                        rows="5"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div class="mt-4 button-row d-flex col-12">
                                                <button
                                                    class="btn mb-0 bg-gradient-dark btn-md null null mb-0 ms-auto js-btn-next"
                                                    type="button" title="Next">Next
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-3 bg-white card multisteps-form__panel border-radius-xl"
                                         data-animation="FadeIn">
                                        <h5 class="font-weight-bolder">Contacts</h5>
                                        <div class="multisteps-form__content">
                                            <div class="mt-3 row">
                                                <div class="col-12">
                                                    <div class="border badge bg-dark mx-1" v-for="(file, i) in form.files">
                                                        <span class="me-sm-2">{{ file.name }}</span>
                                                        <soft-button class="btn btn-light btn-sm" @click.prevent="removeFile(i)">X</soft-button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-3 row">
                                                <div class="col-12">
                                                    <label>Address book contacts</label>
                                                    <div class="form-control dropzone dz-clickable">
                                                        <div v-bind="getRootProps()">
                                                            <input v-bind="getInputProps()" />
                                                            <div class="dz-default dz-message">
                                                                <p v-if="isDragActive" class="dz-button">Drop the files here ...</p>
                                                                <p v-else  class="dz-button">Drag 'n' drop some files here, or click to select files</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-4 button-row d-flex col-12">
                                                <button
                                                    class="btn mb-0 bg-gradient-secondary btn-md null null mb-0 js-btn-prev"
                                                    title="Prev">Prev
                                                </button>
                                                <soft-button
                                                    color="dark"
                                                    variant="gradient"
                                                    class="btn mb-0 bg-gradient-dark btn-md null null mb-0 ms-auto"
                                                >Create</soft-button>
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
