<script setup>
import success from "../../../images/success.png";
import Layout from "@/Layouts/AppLayout.vue";
</script>

<template>
    <Layout title="Payment Success">
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="mx-auto col-lg-9 col-12">
                    <div class="mt-4 card card-body">
                        <img class="mt-3 mx-auto" :src="success" alt="Payment Success" width="82"/>
                        <h6 class="mx-auto mt-3">Your payment succeeded.</h6>
                        <p class="mx-auto mb-5 text-sm">Your order is succeeded and being processed your funds will be added shortly.</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
