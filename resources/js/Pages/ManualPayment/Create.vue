<script setup>
import Layout from "@/Layouts/AppLayout.vue";
import {useForm} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import SoftInput from "@/Components/SoftInput.vue";
import {useDropzone} from "vue3-dropzone";
import SoftButton from "@/Components/SoftButton.vue";
import {inject} from 'vue'

const swal = inject('$swal')

const {method} = defineProps({
    method: {
        type: String,
        required: true,
    }
})

const form = useForm({
    amount: 0,
    email: '',
    transaction_id: '',
    files: [],
});


const onDrop = (acceptFiles, rejectReasons) => {
    form.files = acceptFiles
}

const {getRootProps, getInputProps, isDragActive, open} = useDropzone({
    accept: ['.jpg', '.jpeg', '.png'],
    onDrop
});


const submit = () => {
    form.post(route('manual-payments.store', method), {
        onSuccess: () => {
            swal.fire({
                title: "Success!",
                text: "Your payment is created successfully.",
                icon: "success"
            });

            // form.reset();
        },
        // onFinish: () => form.reset(),
    });
}

const removeFile = (index) => {
    if (form.files[index]) {
        form.files.splice(index, 1);
    }
}

const truncateString = (string = '', maxLength = 50) =>
    string.length > maxLength
        ? `${string.substring(0, maxLength)}…`
        : string

</script>

<template>
    <layout title="Buy Credits">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="mx-auto col-lg-9 col-12">
                    <div class="mt-4 card card-body">
                        <form role="form" @submit.prevent="submit">
                            <h6 class="mb-0">Buy Credits through {{ method }}</h6>
                            <p class="mb-0 text-sm">Add funds to your account</p>
                            <hr class="my-3 horizontal dark">

                            <div class="row">
                                <label for="amount" class="form-label">Amount</label>
                                <div class="input-group">
                                    <span class="input-group-text">$</span>
                                    <input v-model="form.amount" type="number" class="form-control"
                                           aria-label="Amount (to the nearest dollar)">
                                    <span class="input-group-text">.00</span>
                                </div>
                                <InputError class="mt-2" :message="form.errors.amount"/>
                            </div>

                            <div class="mt-3 row">
                                <label>Email</label>
                                <soft-input
                                    v-model="form.email"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    aria-label="Email"
                                    :error="form.errors.hasOwnProperty('email')"
                                    :is-required="true"
                                />
                                <InputError :message="form.errors.email"/>
                            </div>

                            <div class="row">
                                <label>Transaction ID</label>
                                <soft-input
                                    v-model="form.transaction_id"
                                    id="transaction_id"
                                    type="text"
                                    placeholder="Transaction ID"
                                    aria-label="Transaction ID"
                                    :error="form.errors.hasOwnProperty('transaction_id')"
                                    :is-required="true"
                                />
                                <InputError :message="form.errors.transaction_id"/>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <label>Proof</label>
                                    <div class="form-control dropzone dz-clickable" v-bind="getRootProps()">
                                        <input v-bind="getInputProps()"/>
                                        <div class="dz-default dz-message">
                                            <p v-if="isDragActive" class="dz-button">Drop the files here ...</p>
                                            <p v-else class="dz-button">Drag 'n' drop some files here, or click to
                                                select files</p>
                                        </div>
                                    </div>

                                    <div class="mt-3 row">
                                        <div class="col-12">
                                            <div class="border badge bg-success mx-1" v-for="(file, i) in form.files">
                                                <span class="me-sm-2">{{ truncateString(file.name, 10) }}</span>
                                                <soft-button class="btn btn-light btn-sm"
                                                             @click.prevent="removeFile(i)">X
                                                </soft-button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="mt-4 d-flex justify-content-end">
                                <button type="submit" name="button" class="m-0 btn bg-gradient-success ms-2"> Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>
