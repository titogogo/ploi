<script setup>
import Layout from "@/Layouts/AppLayout.vue";
import {useForm} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import SoftInput from "@/Components/SoftInput.vue";
import {inject} from 'vue'

const swal = inject('$swal')

const form = useForm({
    name: '',
    content: '',
});


const submit = () => {
    form.post(route('templates.store'), {
        onSuccess: () => {
            swal.fire({
                title: "Created!",
                text: "Template is created successfully.",
                icon: "success"
            });

            form.reset();
        },
        onFinish: () => form.reset(),
    });
}
</script>

<template>
    <layout title="New Template">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="mx-auto col-lg-9 col-12">
                    <div class="mt-4 card card-body">
                        <form role="form" @submit.prevent="submit">
                            <h6 class="mb-0">Create new template</h6>
                            <p class="mb-0 text-sm">Create message template</p>
                            <hr class="my-3 horizontal dark">

                            <div class="row">
                                <label>Name</label>
                                <soft-input
                                    v-model="form.name"
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    aria-label="Name"
                                    :error="form.errors.hasOwnProperty('name')"
                                    :is-required="true"
                                />
                                <InputError :message="form.errors.name"/>
                            </div>

                            <div class="row">
                                <div class="form-group">
                                    <label>Content</label>
                                    <textarea
                                        v-model="form.content"
                                        class="form-control"
                                        rows="5"
                                    ></textarea>

                                    <InputError :message="form.errors.name"/>
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
