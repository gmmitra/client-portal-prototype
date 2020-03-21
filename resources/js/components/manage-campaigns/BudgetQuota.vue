<template>
    <section class="px-8 pb-8">
        <div class="px-8 mx-auto">
            <h5 class="text-sm font-medium mb-2">Budget &amp; Quota</h5>
            <p class="text-13 mb-4">Campaign quota for the month so that conversions volume will be monitored for the
                monthly budget.</p>
            <hr class="border-b border-grey-medium-light mb-4">
            <div >
                <div class="mb-6">
                    <div class="text-13 mb-2">Status</div>
                    <div class="mb-2 text-13 capitalize">
                        <span class="inline-block rounded-full w-2 h-2 text-xs active"
                              >
                        </span> Active
                    </div>
                </div>
                <form action="">
                    <div class="mb-6">
                        <label class="text-13 mb-2 block">Quota Requirements</label>
                        <small class="italic block text-xs mb-2 text-grey-light">Quota can only be increased from
                            the
                            current defined quota requirement.
                        </small>
                        <input 
                               name="quota"
                               class="p-3 text-13 block w-full"
                               type="number"
                        >
                        <!-- <div class="text-xs text-red-lightest text-xs pt-2">errors.first 1 quota</div>
                        <span class="text-red-dark">errorList.quota[0]</span> -->
                    </div>
                    <div class="mb-6">
                        <label for="bid" class="text-13 block mb-2">Bidding Option</label>
                        <input type="text" value="CPA" id="bid" class="p-3 block w-full text-13 disabled"
                              >
                    </div>
                    <div class="mb-6">
                        <label class="text-13 mb-2 block">Bid Price</label>
                        <small class="italic block mb-2 text-grey-light">(Currency used in the platform is in USD.
                            Please
                            convert accordingly to set the bid price)
                        </small>
                        <input type="text"
                               value="18 USD"
                               class="p-3 text-13 block w-full mb-2 disabled">
                    </div>
                    <div class="submit-wrap relative text-right">
                        <router-link to="/"
                                class="bg-grey-lightest radius-10 px-8 mr-4 font-medium py-3 text-grey-dark no-underline focus:outline-none text-xs uppercase hover:bg-grey-lighter"
                                >
                            Cancel
                        </router-link>
                        <button type="button"
                                class="bg-green radius-10 px-8 font-medium py-3 text-white focus:outline-none text-xs uppercase bg-green hover:bg-green-light"
                                @click="showModal=true">Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>
        <div v-show="showModal">
             <section class="fixed modal-bg z-50 h-full w-full pin-r pin-l pin-t pin-b">

        <div class="border bg-white mx-auto confirm-box-wrap content-box-wrap vertical-center">
            <h2 class="text-center">Are you sure you want to save changes?</h2>

            <form class="pt-6">
                <div class="mb-6">
                    <p class="text-center">You are about to save new changes on this Campaign. If you didn't want to
                        make any changes press "Cancel". Otherwise, click "Submit"</p>
                </div>
                <div class="text-center">
                    <button
                        class="bg-grey-lightest text-grey-darkest font-bold py-2 px-8 mx-2 cp-btn-rounded focus:outline-none focus:shadow-outline  hover:bg-grey-medium-light"
                        type="button" @click="showModal=!showModal">
                        Cancel
                    </button>
                    <button type="button"
                        class="bg-blue text-white no-underline text-white font-bold py-2 px-8 mx-2 cp-btn-rounded focus:outline-none focus:shadow-outline hover:bg-blue" @click="showModal=!showModal"
                        >
                        Submit
                    </button>

                </div>
            </form>

        </div>
    </section>
        </div>
    </section>
</template>


<script>

    import SaveCampaign from './modals/SaveCampaign.vue'

    export default {

        // props: ['activeCampaign'],

        components: {
            SaveCampaign
        },

        // mounted(){
        //     this.campaign = Object.assign({}, this.activeCampaign);
        // },

        data() {
            return {
                // campaign: {},
                // errorList: {
                //     quota: [],
                //     minQuota:0,
                    showModal: false
                }
            }
        
        // methods: {
        //     showModal() {
        //         this.$store.state.campaigns.modals = !this.$store.state.campaigns.modals;
        //     },

        //     formErrors(value){
        //         this.errorList = value;
        //     }
        // },
        // computed: {

        //     modalview() {
        //         return this.$store.state.campaigns.modals
        //     },

        // }
    }
</script>

<style lang="scss" scoped>
    input {
        border: 1px solid #939EAB;
    }

    .active {
        background: #8DC63F;
    }

    .paused {
        background: #F7941E;
    }

    .disabled {
        background-color: #EAEEF1;
        border-color: #EAEEF1 !important;
        color: #999;
    }
// modal 

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
