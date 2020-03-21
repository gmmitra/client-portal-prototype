<template>

    <div class=" mx-auto">
        <h5 class="text-sm font-medium mb-2 leading-normal">Ads</h5>
        <p class="text-13 mb-5 leading-normal">Customize ads content of this campaign and how it is displayed.</p>
        <hr class="border-b  border-grey-medium-light ">
        <div class="mb-5">
        </div>
        <div>
            <form action="">
                <div class="mb-4 border-b border-grey-medium-light overflow-hidden pb-4">
                    <div class="inline-block w-1/3 text-13 float-left leading-normal">Logo
                        <span class="block pr-6 mt-2"><img src="img/toluna.jpg" alt="brand logo"></span></div>
                    <div class="align-top inline-block w-2/3 grey-light mt-4">
                        <div class="inline-block relative upload-btn-wrapper">
                            <button class="btn text-xs font-bold bg-blue hover:bg-blue-light rounded-lg text-white"
                                    type="button">Upload
                            </button>
                            <input class="border absolute border-grey-light" type="file" id="file" ref="file"
                                   >
                        </div>
                        <small class="block mt-2 italic">Logo should be maximum of 135 x 112 px.</small>
                    </div>
                    <!-- <template>
                        <span class="text-red-dark" >errorList</span>
                    </template> -->
                </div>
                <div class="mb-6">
                    <label for="bid" class="text-13 block mb-2">Brand Name</label>
                    <input type="text" value="Toluna" id="bid"
                           class="border border-grey-light p-3 block w-full text-13 disabled"
                           :disabled="true">
                </div>
                <div class="mb-6">
                    <div class="text-13 perks mb-2">Perks</div>
                    <div class="rounded p-3 w-full text-13 disabled" :disabled="true">
                        <pre>Want to be a Toluna Millionaire?  Register and take Toluna online surveys to earn more points that can be exchanged for Paypal Cash, Gift cards. Join Toluna for free!

Minimum payout: AUD20 Cash by cheque (60,000 points)</pre>
                    </div>
                </div>
                <div class="mb-4 border-b border-grey-medium-light pb-4">
                    <div class="text-13 mb-2">Quick Overview</div>
                    <pre><textarea maxlength="500" rows="5" class="align-top block text-grey-darkest p-3 w-full text-13 leading-normal">Join the other 9 Million people waiting to hear what you think! Toluna is a fun online community where you can be rewarded for voicing your opinions! Toluna understands that engaging and maintaining relationship with members is extremely important, to us, that translate to more ways for you to earn rewards points. By participating in online surveys, voting and testing products at home, you can have your say on brands and corporations.

Survey invites normally send out within 24-48 hours. Get more surveys by completing the profile. Find surveys at Survey Centre once you confirmed your email address.</textarea></pre>
                    <p class="italic text-xs pt-1 text-right text-bluegrey-extralightest font-light">10 characters remaining</p>
                    <!-- <template>
                        <span class="text-red-dark">errorList.descriptionBody[0]"</span>
                    </template> -->
                </div>
                <div class="mb-4 border-b border-grey-medium-light pb-4">
                    <div class="text-13 mb-2">Benefits Overview</div>
                    <pre><textarea maxlength="250" rows="5"
                              class="align-top block p-3 w-full text-grey-darkest text-13 leading-normal"
                    >Take Toluna online surveys to earn more points and redeem for minimum AUD20 Cash by cheque!
                    </textarea></pre>
                    <p class="italic text-xs pt-1 text-right text-bluegrey-extralightest font-light">5 characters remaining</p>
                    
                    <!-- <template v-if="errorList.rewards">
                        <span class="text-red-dark" v-text="errorList.rewards[0]"></span>
                    </template> -->
                </div>
                <div class="mb-4 border-b border-grey-medium-light pb-4">
                    <div class="block text-13">Rewards Type</div>
                    <div class="block text-13">
                        <ul class="list-reset">
                            <li class="inline-block w-1/4 pt-5">
                                <input name="rewardTypes[]"
                                       type="checkbox"
                                       value="reward ID" class="border border-grey-light mr-2"
                                > <label class="cursor-pointer" for="reward">Cash</label>
                            </li>
                            <li class="inline-block w-1/4 pt-5">
                                <input name="rewardTypes[]"
                                       type="checkbox"
                                       value="reward ID" class="border border-grey-light mr-2"
                                > <label class="cursor-pointer" for="reward">Voucher</label>
                            </li>
                            <li class="inline-block w-1/4 pt-5">
                                <input name="rewardTypes[]"
                                       type="checkbox"
                                       value="reward ID" class="border border-grey-light mr-2"
                                > <label class="cursor-pointer" for="reward">E-voucher</label>
                            </li>
                            <li class="inline-block w-1/4 pt-5">
                                <input name="rewardTypes[]"
                                       type="checkbox"
                                       value="reward ID" class="border border-grey-light mr-2"
                                > <label class="cursor-pointer" for="reward">Lucky Draw</label>
                            </li>
                            <li class="inline-block w-1/4 pt-5">
                                <input name="rewardTypes[]"
                                       type="checkbox"
                                       value="reward ID" class="border border-grey-light mr-2"
                                > <label class="cursor-pointer" for="reward">Donation</label>
                            </li>
                            <li class="inline-block w-1/4 pt-5">
                                <input name="rewardTypes[]"
                                       type="checkbox"
                                       value="reward ID" class="border border-grey-light mr-2"
                                > <label class="cursor-pointer" for="reward">Product</label>
                            </li>
                        </ul>
                    </div>
                    <!-- <template >
                        <span class="text-red-dark">errorList.rewardsType[0]</span>
                    </template> -->
                </div>
                <div class="submit-wrap relative text-right">
                    <button type="button"
                            class="bg-grey-lightest radius-10 px-8 mr-4 font-medium py-3 focus:outline-none text-xs uppercase hover:bg-grey-medium-light" @click="hideEditAd(); showAdContent()"
                            >Cancel
                    </button>
                    <button type="button"
                            class="bg-green radius-10 px-8 font-medium py-3 text-white focus:outline-none text-xs uppercase hover:bg-green-light" @click="confirmSave = true"
                           >Save
                    </button>
                </div>
                <!-- <save-ad v-show="confirmSave"></save-ad> -->
        
        <section v-show="confirmSave" class="fixed modal-bg z-50 h-full w-full pin-r pin-l pin-t pin-b">

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
                            type="button" @click="confirmSave = false">
                        Cancel
                    </button>
                    <button type="button" @click="confirmSave = false"
                            class="bg-blue no-underline text-white font-bold py-2 px-8 mx-2 cp-btn-rounded focus:outline-none focus:shadow-outline hover:bg-blue-light"
                            >
                        Submit
                    </button>

                </div>
            </form>
        </div>
    </section>
            </form>
        </div>
    </div>

</template>

<script>
import { eventBus } from '../../app'
    import SaveAd from './modals/SaveAd.vue'

    export default {
        components: {
            SaveAd
        },

     
        data() {
            return {
                editbutton: true,
                imgpath: 'img/',
                confirmSave: false,
                errorList: {
                    image: [],
                    descriptionBody: [],
                    rewards: [],
                    rewardsType: [],
                },
                qmaxCount: 500,
                bmaxCount: 250,

            }
        },
        methods: {
        
            hideEditAd() {
                this.hideEdit = false;
                eventBus.$emit('hideEditAd', this.hideEdit);
            },
            showAdContent() {
                this.showAdContent = true;
                eventBus.$emit('showAdContent', this.showAdContent);
            },
        created() {
                eventBus.$on('hideConfirmSave', (data) => {
                    this.confirmSave = data;
                })
        }

    }
    }
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

    // confirm modal

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
