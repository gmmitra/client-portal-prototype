<template>
    <section class="fixed modal-bg z-50 h-full w-full pin-r pin-l pin-t pin-b">

        <div class="vertical-center bg-white">
            <div class="border p-8 m-8 text-center content-box-wrap">
                <h2>Thank you!</h2>
                <p class="text-center text-grey-darker text-lg pt-3">You have successfully logout.</p>
            </div>
        </div>

    </section>
</template>

<script>
    // export default {

    //     data: function () {
    //         return {}

    //     },
    //     methods: {
    //         showModal() {
    //             this.$store.state.campaign.modals = !this.$store.state.campaign.modals
    //         }
    //     },
    //       computed: {
    //         modalview() {
    //             return this.$store.state.campaign.modals
    //         }
    //     }
    // }
</script>

<style lang="scss" scoped>
    .logo {
        width: 180px;
    }

    .login-box-wrap {
        width: 486px;
    }

    label {
        font-size: 13px;
    }

    .pass-icon {
        height: 40px;
        width: 37px;
    }

    .modal-bg {
        background: rgba(255, 255, 255, .85);
    }
    .content-box-wrap {
        border-color: #dfe2e5;
    }
</style>
