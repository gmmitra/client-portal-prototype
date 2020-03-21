<template>
    <section class="p-8 pp-page-wrap">
        <div class="mb-4">
            <router-link
                    to="/my-brands">
                <button type="button" class="inline-block align-middle mr-2"><img src="img/back-button.svg">
                </button>
            </router-link>
            <h1 class="inline-block align-middle">Manage Brands</h1>
        </div>

        <div class="flex flex-wrap w-full border bg-white content-box-wrap mr-4 maximum-w float-left">
            <div class="component-list-menu w-1/4 p-4 border-r side-tabs">
                <header class="blue-lightest-bg p-3 text-center font-medium text-sm">Brand Name</header>
                <pp-campaign-list></pp-campaign-list>
            </div>
            <div class="component-content-details p-8 w-3/4">
                <!--<pp-edit-ad :selected-rewards="getSelectedRewards"></pp-edit-ad>-->
                <ads></ads>
            </div>
        </div>

        <div class="flex flex-wrap bg-grey campaign-preview">
            <pp-campaign-preview></pp-campaign-preview>
        </div>

    </section>
</template>

<script>
    import CampaignList from '../components/manage-campaigns/CampaignList.vue';
    import Ads from '../components/manage-campaigns/Ads';
    import CampaignPreview from '../components/manage-campaigns/CampaignPreview.vue';

    export default {
        components: {
            'pp-campaign-list': CampaignList,
            'pp-campaign-preview': CampaignPreview,
            'ads': Ads,
        },

        data() {
            return {
                campaign: null,
            }
        }
    }
</script>

<style lang="scss" scoped>
.pp-page-wrap {
    padding-top: 100px;
}
    .side-tabs {
        border-right: 1px solid #F0F3F4;
    }

    .maximum-w {
        max-width: 700px;
    }

    .campaign-preview {
        border-radius: 4px;
        max-width: 510px;
    }
</style>
