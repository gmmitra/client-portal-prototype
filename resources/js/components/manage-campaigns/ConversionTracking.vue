<template>
    <section class="px-8 pb-8">
        <div class="px-8 mx-auto">
            <h5 class="text-sm font-medium mb-2">Conversion Tracking</h5>
            <p class="text-13 mb-4">The tracking code to be implemented on your system so PanelPlace can track the
                conversions.</p>
            <hr class="border-b  border-grey-medium-light  mb-4">
            <div class="mb-6">
                <div class="text-13 mb-2">WEB</div>
                <div class="mb-2 text-13 text-grey-light">Advertiser must place the conversion tracking code at the
                    point of conversion (e.g. thank you/confirmation page). When the tracking code is loaded it records
                    a conversion.
                </div>
            </div>

            <!-- WITH PIXEL -->
            <!-- <div v-if="!config.web"
                 class="bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3"
                 role="alert">
                
                <p class="text-sm">Tracking code not available.</p>
            </div> -->

            <!-- IF NO PIXEL -->
            <!-- <div v-else>

                <div class="mb-6">
                    <label for="pixel-web-image" class="text-13 mb-2 block">Image Pixel Code</label>
                    <div class="relative">
                        <div id="pixel-web-image"
                             class="border border-grey-light p-3 text-13 block w-full leading-normal text-blue rounded textarea"
                             rows="3">{{ displayPixelCode('web', true) }}
                        </div>
                        <button type="button"
                                class="focus:outline-none"
                                v-clipboard:copy="displayPixelCode('web', true)"
                                v-clipboard:success="onCopy"
                                v-clipboard:error="onError"
                                @click="copypixel"
                        >
                            <img src="img/copy.svg"
                                 alt="copy icon"
                                 class="absolute pin-t pin-r mr-3 mt-3">
                        </button>
                        <span class="text-xs px-2 py-1 absolute pin-t text-center copied-code" v-show="copiedpixel">copied!</span>
                    </div>
                </div>
                <div>
                    <label for="pixel-web-api" class="text-13 mb-2 block">Server Postback Code</label>
                    <div class="relative">
                        <div id="pixel-web-api"
                             class="border border-grey-light p-3 text-13 block w-full leading-normal text-blue rounded textarea"
                             rows="3">{{ displayPixelCode('web', false) }}
                        </div>
                        <button type="button" class="focus:outline-none"
                                v-clipboard:copy="displayPixelCode('web', false)"
                                v-clipboard:success="onCopy"
                                v-clipboard:error="onError"
                                @click="copypostback"
                        >
                            <img src="img/copy.svg" alt="copy icon"
                                 class="absolute pin-t pin-r mr-3 mt-3">
                        </button>
                        <span class="text-xs px-2 py-1 absolute pin-t text-center copied-code" v-show="copiedpostback">copied!</span>
                    </div>
                </div>
            </div> -->
            <div>

                <div class="mb-6">
                    <label for="pixel-web-image" class="text-13 mb-2 block">Image Pixel Code</label>
                    <div class="relative">
                        <div id="pixel-web-image"
                             class="border border-grey-light p-3 text-13 block w-full leading-normal text-blue rounded textarea"
                             rows="3">{{displayPixelCode}}
                        </div>
                        <button type="button"
                                class="focus:outline-none"
                                v-clipboard:copy="displayPixelCode"
                                v-clipboard:success="onCopy"
                                v-clipboard:error="onError"
                                @click="copypixel"
                        >
                            <img src="img/copy.svg"
                                 alt="copy icon"
                                 class="absolute pin-t pin-r mr-3 mt-3">
                        </button>
                        <span class="text-xs px-2 py-1 absolute pin-t text-center copied-code" v-show="copiedpixel">copied!</span>
                      
                    </div>
                </div>
                <div>
                    <label for="pixel-web-api" class="text-13 mb-2 block">Server Postback Code</label>
                    <div class="relative">
                        <div id="pixel-web-api"
                             class="border border-grey-light p-3 text-13 block w-full leading-normal text-blue rounded textarea"
                             rows="3">{{displayPostBack}}
                        </div>
                        <button type="button" class="focus:outline-none" 
                                v-clipboard:copy="displayPostBack"
                                v-clipboard:success="onCopy"
                                v-clipboard:error="onError"
                                @click="copypostback">
                            <img src="img/copy.svg" alt="copy icon"
                                 class="absolute pin-t pin-r mr-3 mt-3">
                        </button>
                        <span class="text-xs px-2 py-1 absolute pin-t text-center copied-code" v-show="copiedpostback">copied!</span>
                    </div>
                </div>
            </div>


            <hr class="border-b  border-grey-medium-light  mb-4 minus-mx65">

            <div class="my-6">
                <div class="text-13 mb-2">API</div>
                <div class="mb-2 text-13 text-grey-light">Advertiser must place the conversion tracking code at the
                    point of conversion (e.g. thank you/confirmation page). When the tracking code is loaded it records
                    a conversion.
                </div>
            </div>

            <!-- <div
                 class="bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3"
                 role="alert">
                <p class="text-sm">Tracking code not available.</p>
            </div> -->

            <div>

                <div class="mb-6">
                    <label for="pixel" class="text-13 mb-2 block">Image Pixel Code</label>
                    <div class="relative">
                        <div id="pixel"
                             class="border border-grey-light p-3 text-13 block w-full leading-normal text-blue rounded textarea"
                             rows="3">{{imgPixelCode}}
                        </div>
                        <button type="button" class="focus:outline-none"
                                v-clipboard:copy="imgPixelCode"
                                v-clipboard:success="onCopy"
                                v-clipboard:error="onError"
                                @click="apicopypixel">
                            <img src="img/copy.svg" alt="copy icon"
                                 class="absolute pin-t pin-r mr-3 mt-3">
                        </button>
                        <span class="text-xs px-2 py-1 absolute pin-t text-center copied-code" v-show="apicopiedpixel">copied!</span>
                    </div>
                </div>
                <div>
                    <label for="postback" class="text-13 mb-2 block">Server Postback Code</label>
                    <div class="relative">
                        <div id="postback"
                             class="border border-grey-light p-3 text-13 block w-full leading-normal text-blue rounded textarea"
                             rows="3">{{serverPixelCode}}
                        </div>
                        <button type="button" class="focus:outline-none"
                                v-clipboard:copy="serverPixelCode"
                                v-clipboard:success="onCopy"
                                v-clipboard:error="onError"
                                @click="apicopypostback">
                            <img src="img/copy.svg" alt="copy icon"
                                 class="absolute pin-t pin-r mr-3 mt-3">
                        </button>
                        <span class="text-xs px-2 py-1 absolute pin-t text-center copied-code"
                              v-show="apicopiedpostback">copied!</span>
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
                copiedpostback: false,
                apicopiedpostback: false,
                copiedpixel: false,
                apicopiedpixel: false,
                displayPixelCode: '<img src="http://v2.panelplace.com/track?cmid=(yourmembercode)">',
                displayPostBack: 'http://v2.panelplace.com/track?cmid=(yourmembercode)',
                imgPixelCode:'<img src="http://v2.panelplace.com/track?cmid=(yourmembercode)">',
                serverPixelCode:'http://v2.panelplace.com/track?cmid=(yourmembercode)'
                
            }

        },
        methods: {
            copypostback() {
                this.copiedpostback = true;
                setTimeout(() => {
                    this.copiedpostback = false;
                }, 1500);
            },

            apicopypostback() {
                this.apicopiedpostback = true;
                setTimeout(() => {
                    this.apicopiedpostback = false;
                }, 1500);
            },

            copypixel() {
                this.copiedpixel = true;
                setTimeout(() => {
                    this.copiedpixel = false;
                }, 1500);
            },

            apicopypixel() {
                this.apicopiedpixel = true;
                setTimeout(() => {
                    this.apicopiedpixel = false;
                }, 1500);
            },

            onError: function (e) {
                alert('Failed to copy texts')
            },

        //     displayPixelCode(channel, isImage) {
        //         let value = (channel === 'api') ? this.config.api : this.config.web;

        //         if (isNaN(value)) {
        //             return (value === 'master')
        //                 ? this.buildPixelURLV2(channel, isImage)
        //                 : this.buildPixelURLV1(value, channel, isImage);
        //         } else {
        //             let pixel = Collect(this.campaign.third_party_pixels).where('id', value).first();
        //             return this.buildThirdPartyPixelURL(pixel, isImage);
        //         }
        //     },

        //     buildThirdPartyPixelURL(pixel, isImage) {
        //         if (isImage === true) {
        //             return '<img ' +
        //                 'src="' + pixel.url + '" ' +
        //                 'width="1" ' +
        //                 'height="1" ' +
        //                 'border="0">';
        //         }

        //         return pixel.url;
        //     },

        //     buildPixelURLV1(code, channel, isImage) {

        //         let pixels = Collect(this.campaign.pixels);
        //         let pixel = pixels.where('Code', code).first();

        //         if (!pixel) return this.buildPixelURLV2(channel, isImage);

        //         let url = 'https://trk.panelplace.com/v1?' +
        //             'comp=' + pixel.Code +
        //             '&channel=' + pixel.channel +
        //             '&uid={returnCode}&cmid={YourMemberCode}';

        //         if (isImage === true) {
        //             return '<img ' +
        //                 'src="' + url + '" ' +
        //                 'width="1" ' +
        //                 'height="1" ' +
        //                 'border="0">';
        //         }

        //         return url;
        //     },

        //     buildPixelURLV2(channel, isImage) {
        //         let url = 'https://trk.panelplace.com/v2?campaign_code=' + this.campaign.code +
        //             '&channel=' + channel + '&uid=[returnCode]&cmid=[YourMemberCode]';

        //         if (isImage === true) {
        //             return '<img ' +
        //                 'src="' + url + '" ' +
        //                 'width="1" ' +
        //                 'height="1" ' +
        //                 'border="0">';
        //         }

        //         return url;
        //     },
        // },
        // computed: {
        //     ...mapGetters({
        //         campaign: 'campaigns/getActive',
        //     }),

        //     config() {
        //         let defaultConfig = {
        //             web: null,
        //             api: null,
        //         };

        //         if (!this.campaign.config) return defaultConfig;
        //         if (!this.campaign.config.client_portal) return defaultConfig;
        //         if (!this.campaign.config.client_portal.pixel_setting) return defaultConfig;

        //         return this.campaign.config.client_portal.pixel_setting;
        //     }
        // },
    }
    }
</script>

<style lang="scss" scoped>

    .textarea {
        border: 1px solid #D9D9D9;
        padding-right: 35px;
    }

    .active {
        background: #4FB55D;
    }

    .disabled {
        background-color: #EAEEF1;
        border-color: #EAEEF1 !important;
        color: #999;
    }

    .copied-code {
        box-sizing: border-box;
        border: 1px solid #FFEBA8;
        border-radius: 4.25px;
        background-color: #FFFAD4;
        right: -60px;
    }

</style>