<script setup>
import Layout from "@/Layouts/AppLayout.vue";
import {onMounted, onUnmounted, ref} from "vue";
import {useForm} from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import {inject} from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const swal = inject('$swal')

const {payment} = defineProps({
    payment: {
        type: Object,
        required: true,
    }
})

const lightbox = ref()

onMounted(() => {
    // initPhotoSwipe('.my-gallery');


    if (!lightbox.value) {
        lightbox.value = new PhotoSwipeLightbox({
            gallery: '#my-gallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.value.init();
    }
})

onUnmounted(() => {
    if (lightbox.value) {
        lightbox.value.destroy();
        lightbox.value = null;
    }
})


const form = useForm({
    amount: payment.amount.amount / 100,
});


const submit = () => {
    form.post(route('manual-payments.approve', payment.id), {
        onSuccess: () => {
            swal.fire({
                title: "Success!",
                text: "Payment is approved.",
                icon: "success"
            });

            form.reset();
        },
        onFinish: () => form.reset(),
    });
}
</script>

<template>
    <Layout title="Manual Payment Details">
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="mb-4">Manual Payment Details</h5>
                            <form role="form" @submit.prevent="submit">
                                <div class="row">
                                    <div class="col-lg-5 ">
                                        <h5 class="mt-lg-0 mt-4">
                                            <img class="w-8" src="../../../images/small-logos/logo-revolut.svg" alt="revolut" v-if="payment.method === 'Revolut'">
                                            <img class="w-8" src="../../../images/small-logos/logo-paypal.svg" alt="paypal" v-if="payment.method === 'Paypal'">
                                            <img class="w-8" src="../../../images/small-logos/logo-skrill.svg" alt="paypal" v-if="payment.method === 'Skrill'">
                                            <img class="w-8" src="../../../images/small-logos/logo-binance.svg" alt="paypal" v-if="payment.method === 'Binance'">

                                            {{ payment.method }} -
                                            <small>
                                                <span class="badge bg-info" v-if="payment.status === 'pending'"> {{ payment.status }}</span>
                                                <span class="badge bg-success" v-if="payment.status === 'completed'"> {{ payment.status }}</span>
                                            </small>
                                        </h5>

                                        <br>
                                        <h6 class="mb-0 mt-3">Transaction ID</h6>
                                        <span>{{ payment.transaction_id }}</span>

                                        <h6 class="mb-0 mt-3">Email</h6>
                                        <span>{{ payment.email }}</span>
                                        <br>

                                        <br>
                                        <h6 class="mb-0 mt-3">Amount</h6>
                                        <span class="badge bg-success">{{ payment.amount.formatted }}</span>
                                        <br>
                                        <h6 class="mb-0 mt-3">User</h6>
                                        <span>{{ payment.user.name }} - {{ payment.user.email }}</span>
                                        <br>

                                        <div class="row mt-4">
                                            <div class="col-lg-12 mt-lg-0 mt-2">
                                                <label for="amount" class="form-label">Amount</label>
                                                <div class="input-group">
                                                    <span class="input-group-text">$</span>
                                                    <input v-model="form.amount" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">
                                                    <span class="input-group-text">.00</span>
                                                </div>
                                                <InputError class="mt-2" :message="form.errors.amount" />
                                            </div>
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-lg-5">
                                                <button class="btn bg-gradient-primary mb-0 mt-lg-auto w-100" type="submit"
                                                        name="button">Approve
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-5 col-lg-6 text-center mx-auto">
                                        <img class="w-100 border-radius-lg shadow-lg mx-auto" :src="`/storage/` + payment.files[0]" alt="Proof">

                                        <div id="my-gallery" class="my-gallery d-flex mt-4 pt-2" itemscope="" itemtype="http://schema.org/ImageGallery" data-pswp-uid="1">
                                            <figure itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject" v-for="(image, i) in payment.files">
                                                <a
                                                    :href="`/storage/` + image"
                                                    data-pswp-width="1280"
                                                    data-pswp-height="720"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        class="w-75 min-height-100 max-height-100 border-radius-lg shadow"
                                                        :src="`/storage/` + image"
                                                        alt="Image description"
                                                    >
                                                </a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<style scoped>

</style>
