<template>
    <section class="p-6 opportunity-card text-grey-darker rounded w-full">
        <h1 class="mb-4">Campaign Preview</h1>
        <div class="bg-white pp-content-box inline-block drop-that-shadow w-full">

            <div class="relative flex flex-wrap p-2 card-inner-content-wrap">
                <div class="flex-initial w-1/3 md:w-1/4 md:m-2">
                    <span class="inline-block bg-grey text-white mb-3 uppercase rounded-full category">Market Research</span>
                    <span>
                        <!-- <div v-if="campaign">
                            <img :src="campaign.logo">
                        </div> -->
                        <div>
                            <img src="img/toluna.jpg">
                        </div>
                    </span>
                </div>
                <div class="flex-1 w-2/3 pl-4 md:pl-0 md:w-1/2 my-8 md:pb-8 md:m-2 relative">

                    <!-- <div v-if="campaign">
                        <span class="inline-block text-sm font-bold capitalize text-blue md:mt-6 mb-3 md:mb-0 align-middle opportunity-card-name">
                            {{campaign.brand_name}}
                        </span>
                    </div> -->
                    <div>
                        <span class="inline-block text-sm font-bold capitalize text-blue md:mt-6 mb-3 md:mb-0 align-middle opportunity-card-name">
                            Toluna
                        </span>
                    </div>

                    <div class="md:absolute pin-t pin-r md:text-right md:mr-3 rating-score-wrap">
                        <div class="inline-block align-middle mt-2 md:mt-0 ml-5 ml-8 pl-4 md:m-0 md:p-0">
                            <!-- ***this was already commented*** <span class="hidden md:block text-sm font-bold font-8">Superb</span>
                            <small class="inline-block text-xs font-normal italic font-8">124 reviews</small> -->
                            <small class="inline-block text-xs font-normal grey-light italic font-6 pr-1">Try and be the
                                <br/>first to rate
                            </small>
                        </div>
                        <span class="float-left md:float-none inline-block md:hidden text-white bg-red align-middle p-1 rounded-sm rating-score">
                       <img class="mx-auto -mt-1 inline-block align-middle" src="img/fire.svg"></span>
                        <!-- Uncomment for ratings
                            <span class="float-left md:float-none inline-block text-white ml-8 md:ml-0 bg-orange align-middle p-1 rounded-sm rating-score font-10">9.9</span>-->
                        <!-- Uncomment to use this for the square without a rating but a star on orange bg.
                            <span class="float-left md:float-none inline-block text-white ml-8 md:ml-0 bg-orange align-middle p-1 rounded-sm rating-score"><img class="h-full"  src=".img/star-white.svg"></span> -->

                        <!-- Uncomment to use this for the square without a rating but a star on yellow bg.-->
                        <span class="float-left md:float-none inline-block text-white ml-8 md:ml-0 bg-yellow align-middle p-1 rounded-sm rating-score">
                            <img class="h-full" src="img/star-white.svg">
                        </span>

                    </div>
                    <div class="relative pt-3 md:pt-0 pl-8">
                        <img class="absolute mt-3 md:mt-0 pin-l" src="img/benefits.svg">
                        <span class="block text-xs font-bold leading-tight mt-3 font-10">Perks</span>
                        <!-- <div v-if="campaign">
                            <span class="block xs leading-tight -ml-8 mt-1 md:mt-0 md:ml-0 font-8">
                                <pre>{{campaign.sub_panel.minPayout}}</pre>
                            </span>
                        </div> -->
                        <div>
                            <span class="block xs leading-tight -ml-8 mt-1 md:mt-0 md:ml-0 font-8">
                                <pre>Take Toluna online surveys to earn more points and redeem for minimum AUD20 Cash by cheque!</pre>
                            </span>
                        </div>
                    </div>
                    <div class="hidden md:block md:absolute pin-r pin-b mr-3">
                    <span class="relative bg-red rounded text-white text-xs mr-1 category-popular">
                        <img class="mr-1 inline-block align-middle pop-icon" src="img/fire.svg">Popular
                   
                    </span>
                        <button type="button"
                                class="cursor-pointer focus:outline-none p-1 font-8 text-blue hover:text-blue-lighter"
                                @click="showmore = !showmore">View more info
                            <img class="h-2" src="img/arrow-down.svg" v-show="!showmore">
                            <img class="h-2" src="img/arrow-up.svg" v-show="showmore">
                        </button>
                        
                    </div>
                </div>
                <div class="absolute pin-l pin-r pin-b md:relative md:block flex-none w-full md:flex-initial md:w-1/4 md:border-l md:-my-2 md:-mr-2 border-grey-medium-light">

                    <button v-on:click.self.prevent type="button"
                            class="static focus:outline-none bg-blue rounded-lg text-white block join-btn center-hv font-10 cursor-default"
                    >Join Now
                    </button>

                </div>
                <div class="block mt-4 md:mt-0 md:hidden absolute pin-r pin-b mx-auto mb-5 view-more-wrap">
                    <button type="button" class="focus:outline-none p-1 font-8 text-blue hover:text-blue-lighter"
                            @click="showmore = !showmore"
                    >View more info <img class="h-2" src="img/arrow-down.svg"></button>
                </div>
            </div>


            <div class="p-1 md:p-2 bg-grey-lightest" v-show="showmore">
                <div class="flex flex-wrap">
                    <div class="md:flex-1 p-3 md:w-1/2">
                        <h4 class="border-b border-grey-medium-light pb-2 mb-2 text-grey-darker">QUICK OVERVIEW</h4>
                        <div class="relative">
                            <!-- <div v-if="campaign">
                                <p class="mb-2 text-grey-darker">
                                <pre>{{campaign.sub_panel.descriptionBody}}</pre>
                                </p>
                            </div> -->
                            <div>
                                <p class="mb-2 text-grey-darker">
                                <pre>Join the other 9 Million people waiting to hear what you think! Toluna is a fun online community where you can be rewarded for voicing your opinions! Toluna understands that engaging and maintaining relationship with members is extremely important, to us, that translate to more ways for you to earn rewards points. By participating in online surveys, voting and testing products at home, you can have your say on brands and corporations.

Survey invites normally send out within 24-48 hours. Get more surveys by completing the profile. Find surveys at Survey Centre once you confirmed your email address.</pre>
                                </p>
                            </div>
                        </div>
                        <h4 class="border-b  border-grey-medium-light pb-2 mb-2 text-grey-darker">BENEFITS OVERVIEW</h4>
                        <div class="relative">
                            <!-- <div v-if="campaign">
                                <p class="mb-2 text-grey-darker">
                                <pre>{{campaign.sub_panel.rewards}}</pre>
                                </p>
                            </div> -->
                            <div>
                                <p class="mb-2 text-grey-darker">
                                <pre>Take Toluna online surveys to earn more points and redeem for minimum AUD20 Cash by cheque!</pre>
                                </p>
                            </div>
                        </div>
                        <div class=" pb-4">
                            <h4 class="border-b  border-grey-medium-light pb-2 mb-2 text-grey-darker">REWARDS TYPE</h4>
                            <div class="align-top inline-block w-2/3 grey-light  text-13 leading-normal">
                                <!-- <ul class="pl-3 font-8">
                                    <li v-for="reward in selectedRewards">{{ getRewardName(reward) }}</li>
                                </ul> -->
                                <ul class="pl-3 font-8">
                                  
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
                    <div class="md:flex-1 p-3 md:w-1/2">
                        <h4 class="border-b  border-grey-medium-light  pb-2 mb-2 text-grey-darker">RECENT COMMUNITY
                            SOCIAL PROOFS</h4>
                        <h5 class="border-b  border-grey-medium-light pb-2 mb-2">70 social proofs from our members</h5>
                        <div class="postings">
                            <div class="flex flex-wrap mb-1">
                                <div class="flex-1 w-3/5 md:w-2/3">
                                    <a v-on:click.self.prevent href="#" class="font-semibold no-underline text-blue cursor-default focus:outline-none">English
                                        101 Class</a>
                                    <small class="block">Uploaded by Jing Xi</small>
                                </div>
                                <div class="flex-initial w-2/5 md:w-1/3 text-right">
                                    <small>July 10, 2018</small>
                                </div>
                            </div>
                            <div class="flex flex-wrap mb-1">
                                <div class="flex-1 w-3/5 md:w-2/3">
                                    <a v-on:click.self.prevent href="#" class="font-semibold no-underline text-blue  cursor-default focus:outline-none">UX
                                        Class</a>
                                    <small class="block">Uploaded by Jing Xi</small>
                                </div>
                                <div class="flex-initial w-2/5 md:w-1/3 text-right ">
                                    <small>July 10, 2018</small>
                                </div>
                            </div>
                            <div class="flex flex-wrap mb-1">
                                <div class="flex-1 w-3/5 md:w-2/3">
                                    <a v-on:click.self.prevent href="#" class="font-semibold no-underline text-blue  cursor-default focus:outline-none">Form
                                        Function Class 2018</a>
                                    <small class="block">Uploaded by Jing Xi</small>
                                </div>
                                <div class="flex-initial w-2/5 md:w-1/3 text-right">
                                    <small>July 10, 2018</small>
                                </div>
                            </div>
                            <div class="flex flex-wrap mb-1">
                                <div class="flex-1 w-3/5 md:w-2/3 ">
                                    <a v-on:click.self.prevent href="#" class="font-semibold no-underline text-blue  cursor-default focus:outline-none">UI
                                        Design vs. UX Design</a>
                                    <small class="block">Uploaded by Jing Xi</small>
                                </div>
                                <div class="flex-initial w-2/5 md:w-1/3 text-right">
                                    <small>July 10, 2018</small>
                                </div>
                            </div>
                            <div class="flex flex-wrap mb-1">
                                <div class="flex-1 w-3/5 md:w-2/3">
                                    <a v-on:click.self.prevent href="#" class="font-semibold no-underline text-blue  cursor-default focus:outline-none">Design
                                        Principles Graphic for Digital Designers</a>
                                    <small class="block">Uploaded by Jing Xi</small>
                                </div>
                                <div class="flex-initial w-2/5 md:w-1/3 text-right">
                                    <small>July 10, 2018</small>
                                </div>
                            </div>
                        </div>
                        <div class="py-3 md:py-1 flex flex-wrap justify-between items-center border-grey-medium-light  border-b border-t">
                            <p class="text-grey-darker w-full text-center mb-2 md:mb-0 md:text-left md:w-auto">Social
                                Proofs Uploaded:
                                3</p>
                            <button v-on:click.self.prevent class="px-2 py-1 bg-blue text-white radius-6 font-8 cursor-default focus:outline-none">Upload
                                Social Proof
                            </button>
                        </div>
                        <div class="text-center md:text-right pt-2">
                            <a v-on:click.self.prevent href="#" class="text-blue no-underline font-8 cursor-default focus:outline-none">View
                            All Social Proofs</a></div>
                        <a v-on:click.self.prevent href="#"
                           class="-mx-4 text-center focus:outline-none bg-blue text-white block md:hidden no-underline center-hv font-10 cursor-default"
                        >Join Now</a>
                    </div>

                </div>
                <div class="flex flex-wrap  border-grey-medium-light  md:border-t mx-3 pt-2 pb-1">
                    <div class="block w-full md:w-auto flex-none md:flex-1">
                        <button v-on:click.self.prevent type="button"
                                class="no-underline block mb-2 w-full md:w-auto md:mb-0 md:inline-block text-red font-8  cursor-default focus:outline-none">
                            Remove Opportunity
                        </button>
                        <span class="font-8 inline-block px-1">|</span>
                        <button v-on:click.self.prevent type="button"
                                class="no-underline text-blue block mb-2 w-full md:w-auto md:mb-0 md:inline-block font-8  cursor-default focus:outline-none">
                            I have already joined this
                        </button>
                    </div>
                    <div class="block mx-auto flex-none md:flex-1 text-center md:text-right">
                        <button v-on:click.self.prevent class="text-grey text-sm font-8 cursor-default focus:outline-none"
                                type="button"
                        >Close
                        </button>
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>


<script>
    // import {mapGetters} from 'vuex';

    export default {
        components: {},

        data() {
            return {
                imgpath: 'img/',
                showmore: true
            }
        },

        // methods: {
        //     getRewardName(id) {
        //         return Collect(this.rewardOptions).where('ID', id).first().name;
        //     }
        // },

        created() {
        },

        // computed: {
        //     ...mapGetters({
        //         campaign: 'campaigns/getActive',
        //         selectedRewards: 'campaigns/getSelectedRewards',
        //         rewardOptions: 'campaigns/getRewardOptions',
        //     })
        // },

    };
</script>

<style lang="scss" scoped>
    .opportunity-card {
        .rating-score-wrap {

            .rating-score {

                width: 16px;
                height: 16px;
                margin-right: -10px;
                text-align: center;
                padding: 3px 0;
                font-size: 10px;

            }
        }

        .join-btn {
            padding: 5px 0;
            width: 70px;

        }

        .category {
            font-size: 4px;
            background: #868e9c;
            padding: 2px 3px;
        }

    }

    .card-inner-content-wrap {
        @media screen and (max-width: 767px) {
            padding-bottom: 130px;
            .view-more-wrap {
                left: 50%;
                margin-left: -55px;
                right: 50%;
                margin-right: -55px;
                width: 110px;
            }
            .join-btn {
                margin-bottom: 60px;
            }
        }
    }

    .category-popular {
        padding: 2px 3px;
        font-size: 7px;
        &:hover {
            cursor: default;
            .tooltip-pop {
                display: block;
            }
        }
    }

    .tooltip-pop {
        display: none;
        top: 25px;
        width: 150px;
        left: -50%;
        img {
            top: -3px;
            width: 8px;
            left: 50%;
        }
    }

    .opportunity-card-name {
        max-width: 130px;
    }

    .pop-icon {
        height: 7px;
        margin-top: -2px;
    }

    .font-10 {
        font-size: 10px;
    }

    .font-8 {
        font-size: 8px;
    }

    .font-6 {
        font-size: 6px;
    }

    h4 {
        font-size: 10px;
    }

    h5, .postings a {
        font-size: 8px;
    }

    p {
        font-size: 8px;
        line-height: 1.2;
    }

    small {
        font-size: 6px;
    }

    .radius-6 {
        border-radius: 6px;
    }

    .bottom-fix-m {
        overflow: hidden;
        padding-bottom: 15px;
    }

    .preview-text-wrap {
        border: none;
        color: #75787D;
        display: block;
        width: 100%;
        height: auto;
        padding: 0;
    }

    pre {
        font-family: 'Roboto', sans-serif;
        white-space: pre-wrap;
    }

    li {
        color: #75787D;
    }
</style>