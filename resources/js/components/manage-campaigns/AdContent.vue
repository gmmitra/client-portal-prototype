<template>

    <div class=" mx-auto">
        <form>
        <h5 class="text-sm font-medium mb-2 leading-normal">Ads</h5>
        <p class="text-13 mb-5 leading-normal">Customize ads content of this campaign and how it is displayed.</p>
        <hr class="border-b  border-grey-medium-light ">
        <div class="mb-5">
        </div>

        <div>
            <div>
                <div class="mb-4 border-b border-grey-medium-light pb-4">
                    <div class="inline-block w-1/3 text-13 float-left leading-normal">Logo</div>
                    <div class="align-top inline-block w-2/3 text-grey-light logo-wrap">
                        <!-- <img :src="campaign.logo"
                             alt="brand logo"> -->
                             <img src="img/toluna.jpg"
                             alt="brand logo">
                    </div>
                </div>
                <div class="mb-4 border-b border-grey-medium-light pb-4">
                    <div class="inline-block w-1/3 text-13 float-left leading-normal">Brand Name</div>
                    <!-- <div class="align-top inline-block w-2/3 text-grey-light uppercase text-13 leading-normal">
                        {{campaign.sub_panel.descriptionName}}
                    </div> -->
                    <div class="align-top inline-block w-2/3 text-grey-light uppercase text-13 leading-normal">
                        Toluna
                    </div>
                </div>
                <div class="mb-4 border-b border-grey-medium-light pb-4">
                    <div class="inline-block w-1/3 text-13 float-left leading-normal">Perks</div>
                    <!-- <div class="align-top inline-block w-2/3 text-grey-light text-13 leading-normal">
                        <pre>{{campaign.sub_panel.minPayout}}</pre>
                    </div> -->
                    <div class="align-top inline-block w-2/3 text-grey-light text-13 leading-normal">
                        <pre>Want to be a Toluna Millionaire?  Register and take Toluna online surveys to earn more points that can be exchanged for Paypal Cash, Gift cards. Join Toluna for free!

Minimum payout: AUD20 Cash by cheque (60,000 points)</pre>
                    </div>
                </div>
                <div class="mb-4 border-b border-grey-medium-light pb-4">
                    <div class="inline-block w-1/3 text-13 float-left leading-normal">Quick Overview</div>
                    <!-- <div class="align-top inline-block w-2/3 text-grey-light text-13 leading-normal">
                        <pre>{{campaign.sub_panel.descriptionBody}}</pre>
                    </div> -->
                    <div class="align-top inline-block w-2/3 text-grey-light text-13 leading-normal">
                        <pre>Join the other 9 Million people waiting to hear what you think! Toluna is a fun online community where you can be rewarded for voicing your opinions! Toluna understands that engaging and maintaining relationship with members is extremely important, to us, that translate to more ways for you to earn rewards points. By participating in online surveys, voting and testing products at home, you can have your say on brands and corporations.

Survey invites normally send out within 24-48 hours. Get more surveys by completing the profile. Find surveys at Survey Centre once you confirmed your email address.</pre>
                    </div>
                </div>
                <div class="mb-4 border-b border-grey-medium-light pb-4">
                    <div class="inline-block w-1/3 text-13 float-left leading-normal">Benefits Overview</div>
                    <!-- <div class="align-top inline-block w-2/3 text-grey-light text-13 leading-normal">
                        <pre>{{campaign.sub_panel.rewards}}</pre>
                    </div> -->
                    <div class="align-top inline-block w-2/3 text-grey-light text-13 leading-normal">
                        <pre>Take Toluna online surveys to earn more points and redeem for minimum AUD20 Cash by cheque!</pre>
                    </div>
                </div>
                <div class="mb-4 border-b border-grey-medium-light pb-4">
                    <div class="inline-block w-1/3 text-13 float-left leading-normal">Rewards Type</div>
                    <div class="align-top inline-block w-2/3 text-grey-light  text-13 leading-normal">
                        <!-- <ul class="pl-4">
                            <li v-for="reward in campaign.reward_types">{{ reward.name }}</li>
                        </ul> -->
                        <div class="align-top inline-block w-2/3 text-grey-light  text-13 leading-normal">
                        <ul class="pl-4">
                            <li>Cash</li>
                            <li>Voucher</li>
                            <li>E-voucher</li>
                            <li>Lucky Draw</li>
                            <li>Donation</li>
                            <li>Product</li>
                            </ul>
                    
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </form>

    </div>

</template>

<script>
    // import {mapGetters} from 'vuex';

    // export default {
    //     components: {},
    //     data() {
    //         return {
    //             imgpath: 'img/',

    //             errorList: {
    //                     descriptionBody: [],
    //                     descriptionBrief: [],
    //                     logourl: [],
    //             },
    //         }
    //     },
    //     mounted() {
    //     },
    //     methods: {
    //         gobacktoAds() {
    //             this.ads = 'ad-content'
    //             eventBus.$emit('backtoAds', this.ads, this.editbutton)
    //         },
    //         showModal() {
    //             this.$store.state.campaigns.modals = !this.$store.state.campaigns.modals;
    //         },
    //         formErrors(value){
    //             this.errorList = value;
    //         }
    //     },
    //     computed: {
    //         rewards() {
    //             return this.$store.state.campaigns.rewards;
    //         },
    //         modalview() {
    //             return this.$store.state.campaigns.modals
    //         },

    //         ...mapGetters({
    //             campaign: 'campaigns/getActive',
    //         })
    //     }
    // }
</script>

<style lang="scss" scoped>

    .active {
        background: #8DC63F;
    }

    .disabled {
        background-color: #EAEEF1;
        border-color: #EAEEF1 !important;
        color: #999;
    }

    .logo-wrap {
        height: 60px;
        img {
            height: 100%;
        }
    }

    .btn {
        width: 80px;
        height: 28px;
    }

    .upload-btn-wrapper input[type=file] {
        font-size: 100px;
        left: 0;
        top: 0;
        opacity: 0;
        height: 30px;
    }

    pre {
        font-family: 'Roboto', sans-serif;
        white-space: pre-wrap;
    }
</style>
