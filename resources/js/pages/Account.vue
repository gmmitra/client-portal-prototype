<template>
    <div>

        <section class="p-8 pp-page-wrap">
            <h1 class="inline-block align-middle">Account Information</h1>
            <div class="bg-white px-8 py-8 mt-4 border w-1/3 content-box-wrap">
                <div class="md:flex md:items-center py-5 list-info-wrap">
                    <div class="md:w-1/3">Name</div>
                    <div class="md:w-2/3 pl-2 text-grey-light">Benes Yuen</div>
                </div>
                <div class="md:flex md:items-center py-5 list-info-wrap">
                    <div class="md:w-1/3">Email</div>
                    <div class="md:w-2/3 pl-2 text-grey-light">benes.yuen@toluna.com</div>
                </div>
                <div class="md:flex md:items-center py-5 list-info-wrap">
                    <div class="md:w-1/3">Password</div>
                    <div class="md:w-1/3 pl-2 text-grey-light">**********</div>
                    <div class="md:w-1/3 text-right">
                        <button class="uppercase no-underline font-bold text-green opacity-hover focus:outline-none"
                                type="button" @click="changePass=true">Change
                        </button>
                    </div>
                </div>
                <div class="md:flex md:items-center py-5 list-info-wrap">
                    <div class="md:w-1/3">Company Name</div>
                    <div class="md:w-2/3 pl-2 text-grey-light">Toluna Group Ltd.</div>
                </div>
                <div class="md:flex md:items-center py-5 list-info-wrap">
                    <div class="md:w-1/3">Position</div>
                    <div class="md:w-2/3 pl-2 text-grey-light">Panel Manager APAC</div>
                </div>
                <div class="md:flex md:items-center py-5 list-info-wrap">
                    <div class="md:w-1/3">Contact Number</div>
                    <div class="md:w-2/3 pl-2 text-grey-light">+85 2 3512-0624</div>
                </div>
                <div class="md:flex md:items-center py-5 list-info-wrap">
                    <div class="md:w-1/3">Address</div>
                    <div class="md:w-2/3 pl-2 text-grey-light">n/a</div>
                </div>
            </div>
        </section>

        <!-- <div
             class="text-center"
        >
            <img src="img/spinner.gif"/>
        </div> -->

        <!-- <div >
            <p>Whoops! We are having technical issues at the moment. Pardon our dust!</p>
        </div> -->

        <password-change v-show="changePass"></password-change>
        <pass-change-success v-show="updateSuccess"></pass-change-success>
    </div>
</template>

<script>
import { eventBus } from '../app'
    import PasswordChange from '../components/account/modals/PasswordChange.vue'
    import PassChangeSuccess from '../components/account/modals/PassChangeSuccess.vue'
    // import {mapGetters} from 'vuex';
    // import {mapMutations} from 'vuex';


    export default {
        components: {
            PasswordChange,
            PassChangeSuccess
        },

        data: function () {
            return {
                init: true,
                error: false,
                changePass: false,
                updateSuccess: false
            }
        },
        created() {
                eventBus.$on('hideChangePass', (data) => {
                    this.changePass = data;
                })
                eventBus.$on('showSuccess', (data) => {
                    this.updateSuccess = data;
                })
                eventBus.$on('hideSuccess', (data) => {
                    this.updateSuccess = data;
                })
        }

    }
</script>

<style lang="scss" scoped>
.pp-page-wrap {
        padding-top: 100px;
    }
    .list-info-wrap {
        border-bottom: 1px solid #DFDFDF;
    }
</style>
