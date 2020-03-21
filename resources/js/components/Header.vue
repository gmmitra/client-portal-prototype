<template>
    <section class="flex flex-wrap justify-between px-8 z-10 fixed pin-t w-full cp-header">
        <router-link to="/" class="logo flex-1"><img src="img/pp-logo.png" alt="PanelPlace logo"/></router-link>
        <main-navigation></main-navigation>
    </section>
</template>

<script>
import MainNavigation from './MainNavigation.vue'

    export default {
components: {
            'main-navigation': MainNavigation
        },
    }
</script>

<style lang="scss" scoped>
    .cp-header {
        background: #0D7CBC;
        .logo {
            padding: 14px 0;
            img {
                height:36px;
            }
        }
    }
</style>
