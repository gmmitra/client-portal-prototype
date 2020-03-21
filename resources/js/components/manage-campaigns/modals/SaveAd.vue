<template>
    <section class="fixed modal-bg z-50 h-full w-full pin-r pin-l pin-t pin-b">

        <div class="border bg-white mx-auto confirm-box-wrap content-box-wrap vertical-center">
            <h2 class="text-center">Are you sure you want to save changes?</h2>

            <form class="pt-6">
                <div class="mb-6">
                    <p class="text-center">You are about to save new changes on this Campaign. If you didn’t want to
                        make any changes press "Cancel". Otherwise, click "Submit"</p>
                </div>
                <div class="text-center">
                     <button
                            class="bg-grey-lightest text-grey-darkest font-bold py-2 px-8 mx-2 cp-btn-rounded focus:outline-none focus:shadow-outline hover:bg-grey-medium-light"
                            type="button" @click="hideConfirm">
                        Cancel
                    </button>
                    <button type="button" @click="hideConfirm"
                            class="bg-blue no-underline text-white font-bold py-2 px-8 mx-2 cp-btn-rounded focus:outline-none focus:shadow-outline hover:bg-blue-light"
                            >
                        Submit
                    </button>

                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { eventBus } from '../../../app'
    export default {
       

        data: function () {
            return {
                
            }
        },
         methods: {
        
            hideConfirm() {
                this.confirmSave = false;
                eventBus.$emit('hideConfirmSave', this.confirmSave);
            },
            showSuccess() {
                this.updateSuccess = true;
                eventBus.$emit('showSuccess', this.updateSuccess);
            }
        }

    }
</script>

<style lang="scss" scoped>
    .logo {
        width: 180px;
    }

    .confirm-box-wrap {
        width: 600px;
        border-color: #DFE2E5;
        padding: 60px 70px;
    }

    label {
        font-size: 13px;
    }

    .modal-bg {
        background: rgba(255, 255, 255, .85);
    }


</style>
