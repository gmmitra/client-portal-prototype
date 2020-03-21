<template>
    <section class="fixed modal-bg z-50 h-full w-full pin-r pin-l pin-t pin-b">

        <div class="vertical-center">
            <div class="border p-8 content-box-wrap">
                <p class="text-center font-bold">Your Password has been successfully changed.</p>

                <div class="mt-8 text-center">
                    <button class="no-underline text-center text-xs text-white font-bold px-8 cp-btn-rounded bg-blue hover:bg-blue-light uppercase py-2 focus:outline-none"
                            @click="hideSuccess()">OKAY
                    </button>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import { eventBus } from '../../../app'
    export default {

        data: function () {
            return {
                modal: false
            }

        },
        methods: {
            hideSuccess() {
                this.updateSuccess = false;
                eventBus.$emit('hideSuccess', this.updateSuccess);
            },
        }
    }
</script>

<style lang="scss" scoped>
    .logo {
        width: 180px;
    }

    .login-box-wrap {
        width: 486px;
    }

    label {
        font-size: 13px;
    }

    .pass-icon {
        height: 40px;
        width: 37px;
    }

    .modal-bg {
        background: rgba(255, 255, 255, .85);
    }
</style>
