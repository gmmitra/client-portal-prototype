<template>
    <section class="p-8 pp-page-wrap">
        <div class="mb-4">
            <router-link
                    to="/">
                <button type="button" class="inline-block align-middle mr-2"><img src="img/back-button.svg">
                </button>
            </router-link>
            <h1 class="inline-block align-middle">Manage Campaigns</h1>
        </div>
        <div class="flex flex-wrap w-full border bg-white content-box-wrap mr-4 maximum-w float-left">
            <div class="component-list-menu w-1/4 p-4 border-r side-tabs">
                <header class="blue-lightest-bg p-3 text-center text-grey-darkest font-medium text-sm">Campaign Name</header>
                <pp-campaign-list></pp-campaign-list>
            </div>
            <div class="component-content-details w-3/4">
                <pp-campaign-details></pp-campaign-details>
            </div>
        </div>

        <div class="flex flex-wrap bg-bluegrey-darker campaign-preview rounded">
            <pp-campaign-preview v-show="adPreview"></pp-campaign-preview>
        </div>

    </section>
</template>

<script>
import { eventBus } from '../app'
    import CampaignList from '../components/manage-campaigns/CampaignList.vue'
    import CampaignDetails from '../components/manage-campaigns/CampaignDetails.vue'
    import CampaignPreview from '../components/manage-campaigns/CampaignPreview.vue'

    export default {
        components: {
            'pp-campaign-list': CampaignList,
            'pp-campaign-details': CampaignDetails,
            'pp-campaign-preview': CampaignPreview
        },

        data() {
            return {
                ads: false,
                adPreview: false
            }
        },
        created() {
                eventBus.$on('showPreview', (data) => {
                    this.adPreview = data;
                })
        }
    }
</script>

<style lang="scss" scoped>
    .side-tabs {
        border-right: 1px solid #F0F3F4;
    }

    .maximum-w {
        max-width: 700px;
    }

    .campaign-preview {

        max-width: 510px;
    }
    .pp-page-wrap {
        padding-top: 100px;
    }
</style>
