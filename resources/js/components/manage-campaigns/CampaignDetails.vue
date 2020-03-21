<template>
    <div>
        <div class="flex flex-wrap p-4 pb-0 border-b detail-tabs-wrap border-grey-medium-light mb-6">
         
            <!-- <button class="flex-auto py-3 pb-6 text-sm font-medium border-b-2 border-transparent hover:border-blue focus:outline-none"
                    type="button"
                    @click="setCurrentView('budget-quota')"
                    :class="{selectedmenu: currentView === 'budget-quota'}">Budget &amp; Quota
            </button> -->
            <button class="flex-auto py-3 pb-6 text-sm font-medium border-b-2 border-transparent hover:border-blue focus:outline-none"
                    type="button"
                   @click="setActive('budget'); hideAdPreview()" :class="{active: isActive('budget')}"
                   >Budget &amp; Quota
            </button>

            <!-- <button class="flex-auto py-3 pb-6 text-sm font-medium border-b-2 border-transparent hover:border-blue focus:outline-none"
                    type="button"
                    @click="setCurrentView('targeting')"
                    :class="{selectedmenu: currentView === 'targeting'}">Targeting
            </button> -->
            <button class="flex-auto py-3 pb-6 text-sm font-medium border-b-2 border-transparent hover:border-blue focus:outline-none"
                    type="button"
                    @click="setActive('targeting'); hideAdPreview()" :class="{active: isActive('targeting')}"
                    >Targeting
            </button>

            <!-- <button class="flex-auto py-3 pb-6 text-sm font-medium border-b-2 border-transparent hover:border-blue focus:outline-none"
                    type="button"
                    @click="setCurrentView('ads')"
                    :class="{selectedmenu: currentView === 'ads' || currentView === 'edit-ad'}">Ads
            </button> -->
            <button class="flex-auto py-3 pb-6 text-sm font-medium border-b-2 border-transparent hover:border-blue focus:outline-none"
                    type="button"
                    @click="setActive('ads'); showAdPreview()" :class="{active: isActive('ads')}"
                    >Ads
            </button>

            <!-- <button class="flex-auto py-3 pb-6 text-sm font-medium border-b-2 border-transparent hover:border-blue focus:outline-none"
                    type="button"
                    @click="setCurrentView('tracking')"
                    :class="{selectedmenu: currentView === 'tracking'}">Conversion Tracking
            </button> -->
            <button class="flex-auto py-3 pb-6 text-sm font-medium border-b-2 border-transparent hover:border-blue focus:outline-none"
                    type="button"
                    @click="setActive('tracking'); hideAdPreview()" :class="{active: isActive('tracking')}"
                    >Conversion Tracking
            </button>

        </div>
        <div>

        
            <div>
                <budget-qouta v-if="activeItem === 'budget'">></budget-qouta>
            </div>
            <ads v-if="activeItem === 'ads'"></ads>
            <targeting v-if="activeItem === 'targeting'"></targeting>
            <conversion-tracking v-if="activeItem === 'tracking'"></conversion-tracking>

        </div>
    </div>
</template>


<script>
 import { eventBus } from '../../app'
    import BudgetQuota from './BudgetQuota.vue'
    import Targeting from './Targeting.vue'
    import Ads from './Ads.vue'
    import ConversionTracking from './ConversionTracking.vue'
    // import {mapGetters} from 'vuex';
    // import {mapMutations} from 'vuex';

    export default {
        components: {
            'budget-qouta': BudgetQuota,
            'targeting': Targeting,
            'ads': Ads,
            'conversion-tracking': ConversionTracking
        },

        data() {
            return {
                activeItem: 'budget',
            }
        },

        methods: {
            isActive: function (menuItem) {
                return this.activeItem === menuItem
            },

            setActive: function (menuItem) {
                this.activeItem = menuItem
            },
            showAdPreview() {
                this.adPreview = true;
                eventBus.$emit('showPreview', this.adPreview);
            },
            hideAdPreview() {
                this.adPreview = false;
                eventBus.$emit('showPreview', this.adPreview);
            }
        },

    }
</script>

<style lang="scss" scoped>

    .active {
        border-bottom: 2px solid #0D7CBC !important;
    }
</style>
