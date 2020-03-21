<template>
    <nav id="nav" class="flex-initial">
        <router-link
                to="/my-brands"
                class="inline-block text-white no-underline mx-8 nav-item"><span
                class="align-middle inline-block mr-1">
            <img src="img/my-brands.svg"></span> My Brands
        </router-link>
        <router-link
                to="/"
                class="inline-block text-white no-underline mx-8 nav-item"><span
                class="align-middle inline-block mr-1">
            <img src="img/my-campaigns.svg"></span> My Campaigns
        </router-link>
        <router-link
                to="/account-information"
                class="inline-block text-white no-underline mx-8 nav-item"><span
                class="align-middle inline-block mr-1">
            <img src="img/account-info.svg"></span> Account Information
        </router-link>
        <router-link to="/login" class="cursor-pointer inline-block text-white no-underline ml-8 border-l border-white align-middle h-full -mr-8"
          
        >
            <span class="align-middle inline-block px-8 power-btn">
            <img src="img/logout.svg"></span>
        </router-link>
        <!-- <account-logout v-show="this.$store.state.account.logoutmodal"></account-logout> -->
        <account-logout v-if="logout"></account-logout>
    </nav>
</template>

<script>
    import AccountLogout from '../components/account/modals/AccountLogout.vue'

    export default {
        components: {
            AccountLogout
        },
        data() {
            return {
                logout: false
            }

        }
        // methods: {
        //     logout() {
        //         this.$store.state.account.logoutmodal = true;
        //         setTimeout(() => {
        //             this.$auth.logout({redirect: '/#/login'});
        //             this.$store.state.account.logoutmodal = false
        //         }, 3000);
        //         // this.$auth.logout({
        //         //     redirect: '/#/login'
        //         // });
        //     }
        // },
        // showModal() {
        //     this.$store.state.campaign.modals = !this.$store.state.campaign.modals
        // }
    }
</script>

<style lang="scss" scoped>
    #nav {
        .nav-item {
            padding: 15px 0 15px;

        }

        .power-btn {
            padding-top: 20px;
        }

        a {
            color: #fff;
            border-bottom: 4px solid transparent;

            &.router-link-exact-active {
                color: #fff;
                border-bottom: 4px solid #AAE4FF;
            }

            &:hover {
                border-bottom: 4px solid #AAE4FF;
            }
        }
    }
</style>
