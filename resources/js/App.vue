<template>
    <div>
        <cp-header v-if="!['login', 'logout', 'password-recovery'].includes($route.name)"></cp-header>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    

    export default {
        // props: ['activePage'],
        data() {
            return {
               
            }
        },
        components: {
            'cp-header': Header
        }
    }
</script>

<style lang="scss" scoped>


</style>
