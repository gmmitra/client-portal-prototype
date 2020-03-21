<template>
    <section class="fixed modal-bg z-50 h-full w-full pin-r pin-l pin-t pin-b">

        <div class="border bg-white mx-auto confirm-box-wrap content-box-wrap vertical-center">
            <h2 class="text-center">Are you sure you want to save changes?</h2>

            <form class="pt-6">
                <div class="mb-6">
                    <p class="text-center">You are about to save new changes on this Campaign. If you didn't want to
                        make any changes press "Cancel". Otherwise, click "Submit"</p>
                </div>
                <div class="text-center">
                    <!-- <button
                        class="bg-grey-lightest text-grey-darkest font-bold py-2 px-8 mx-2 cp-btn-rounded focus:outline-none focus:shadow-outline  hover:bg-grey-medium-light"
                        type="button" @click="showModal('cancel')">
                        Cancel
                    </button>
                    <button
                        class="bg-blue text-white font-bold py-2 px-8 mx-2 cp-btn-rounded focus:outline-none focus:shadow-outline hover:bg-blue"
                        type="button" @click="showModal('submit')">
                        Submit
                    </button> -->
                    <button
                        class="bg-grey-lightest text-grey-darkest font-bold py-2 px-8 mx-2 cp-btn-rounded focus:outline-none focus:shadow-outline  hover:bg-grey-medium-light"
                        type="button">
                        Cancel
                    </button>
                    <button
                        class="bg-blue text-white font-bold py-2 px-8 mx-2 cp-btn-rounded focus:outline-none focus:shadow-outline hover:bg-blue"
                        type="button">
                        Submit
                    </button>

                </div>
            </form>

        </div>
    </section>
</template>

<script>
    // import {mapMutations} from 'vuex';

    // export default {
    //     props: ['campaign'],

    //     data() {
    //         return {
    //             errorList: {
    //                 quota: [],
    //             },
    //         }
    //     },

    //     methods: {
    //         ...mapMutations({
    //             updateList: 'campaigns/updateListInBackground',
    //         }),

    //         showModal(action) {
    //             if(action === 'cancel'){
    //                 this.$store.state.campaigns.modals = !this.$store.state.campaigns.modals;
    //             }else {
    //                 this.$emit('formErrors', this.errorList);
    //                 let vm = this;
    //                 axios.post(`/campaign/update/quota/${this.campaign.code}`, this.campaign)
    //                     .then((response) => {
    //                         if (response.data.success) {
    //                             this.$store.state.campaigns.modals = !this.$store.state.campaigns.modals;
    //                             swal({
    //                                 type: "success",
    //                                 title: "Quota has been updated.",
    //                                 text: "",
    //                                 showCancelButton: false,
    //                                 confirmButtonText: "Close"
    //                             }).then((result) => {
    //                                 vm.updateList();
    //                             });
    //                         }
    //                     }).catch(error => {
    //                     this.$emit('formErrors', error.response.data.errors);
    //                     this.$store.state.campaigns.modals = !this.$store.state.campaigns.modals;
    //                 });
    //             }
    //         }
    //     },
    //     computed: {
    //         modalview() {
    //             return this.$store.state.campaigns.modals;
    //         },
    //     }
    // }
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
