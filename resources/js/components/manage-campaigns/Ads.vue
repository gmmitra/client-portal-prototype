<template>
    <section class="px-8 pb-8">
        <!-- <ad-content v-if="!adEditorEnabled"></ad-content>
        <edit-ad v-if="adEditorEnabled"
                 :selected-rewards="getSelectedRewards"
        ></edit-ad> -->
        <ad-content v-show="showad"></ad-content>
        <edit-ad v-show="showEdit"></edit-ad>

        <!-- <div class="submit-wrap relative text-right" v-show="!adEditorEnabled">
            <button type="button"
                    class="bg-green radius-10 px-8 font-medium py-3 text-white focus:outline-none  text-xs uppercase hover:bg-green-light"
                    @click="setAdEditorState(true)">Edit
            </button>
        </div> -->
        <div class="submit-wrap relative text-right">
            <button type="button"
                    class="bg-green radius-10 px-8 font-medium py-3 text-white focus:outline-none  text-xs uppercase hover:bg-green-light" v-show="showad" @click="showEdit=true; showad=false">Edit
            </button>
        </div>
    </section>
</template>

<script>
import { eventBus } from '../../app'
    import AdContent from './AdContent.vue'
    import EditAds from './EditAds.vue'
    // import {mapGetters} from 'vuex';
    // import {mapMutations} from 'vuex';

    export default {
        components: {
            'ad-content': AdContent,
            'edit-ad': EditAds
        },

        data() {
            return {
                imgpath: 'img/',
                showad: true,
                showEdit: false
            }
        },
        created() {
                eventBus.$on('hideEditAd', (data) => {
                    this.showEdit = data;
                }),
                eventBus.$on('showAdContent', (data) => {
                    this.showad = data;
                })
        }

    }
</script>

<style lang="scss" scoped>
    input {
        border: 1px solid #939EAB;
    }

    .active {
        background: #4FB55D;
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

    pre {
        font-family: 'Roboto', sans-serif;
        white-space: pre-wrap;
    }
</style>
