<script setup>
import {onMounted, onUnmounted, ref, watch} from "vue";
import { Modal } from "bootstrap";

const modal = ref();

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    maxWidth: {
        type: String,
        default: '2xl',
    },
    closeable: {
        type: Boolean,
        default: true,
    },
});

onMounted(() => {
    modal.value = Modal.getOrCreateInstance('#modal');
    document.addEventListener('keydown', closeOnEscape)
})

const close = () => {
    if (props.closeable) {
        emit('close');
    }
};

const closeOnEscape = (e) => {
    if (e.key === 'Escape' && props.show) {
        close();
    }
};

onUnmounted(() => {
    document.removeEventListener('keydown', closeOnEscape);
    document.body.style.overflow = null;
});

const emit = defineEmits(['close']);

watch(() => props.show, () => {
    if (props.show) {
        document.body.style.overflow = 'hidden';
        modal.value.show();
    } else {
        document.body.style.overflow = null;
        setTimeout(() => {
            modal.value.hide();
            console.log('hide')
        }, 200);
    }
});

</script>

<template>
    <div class="col-md-4">
        <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true" ref="modal"
             @close="close"
        >
            <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
                <div class="modal-content">
                    <div class="modal-body p-0">
                        <div class="card card-plain">
                            <div class="card-header pb-0 text-left">
                                <slot name="title" />
                            </div>
                            <div class="card-body">
                                <slot name="content" />
                            </div>
                            <div class="card-footer text-center pt-0 px-lg-2 px-1">
                                <slot name="footer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
