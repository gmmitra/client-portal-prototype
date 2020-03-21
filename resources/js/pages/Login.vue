<template>
    <section class="vertical-center">
        <img class="logo block mx-auto mb-8" src="img/pp-logo-1x.png" alt="Panelplace logo">
        <div class="border bg-white mx-auto p-8 login-box-wrap content-box-wrap">
            <p class="text-center grey-light">Login using your PanelPlace credentials.</p>

            <form class="pt-6">
                <div class="mb-4">
                    <label class="block text-grey-darker text-sm mb-2 font-medium" for="email">
                        Email
                    </label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-none focus:border-blue"
                           id="email"
                           type="email"
                           placeholder="your@email.com"
                        
                    >
                </div>
                <div class="mb-6">
                    <label class="block text-grey-darker text-sm mb-2 font-medium" for="password">
                        Password
                    </label>
                    <div class="relative mb-3 ">
                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-none focus:border-blue"
                               id="password"
                               type="password"
                               placeholder="Type here"
                               
                        >
                        <router-link to="/password-recovery" class="text-blue absolute pin-r mr-2 mt-3 opacity-hover pin-t no-underline text-xs cursor-pointer"
                        >Forgot?</router-link>
                    </div>
                    <!-- show error message if invalidAccount=true -->
                    <div class="hidden py-2 px-3 is-danger">Invalid email or password</div>
                </div>
                <div class="">
                    <div class="">
                        <router-link to="/" class="no-underline inline-block bg-green text-sm text-center block w-full text-white font-bold py-3 px-4 cp-btn-rounded hover:bg-green-light uppercase cursor-pointer"
                               
                        >
                            Sign in
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
  name: 'login'
}
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

    .is-danger {
        font-size: 12px;
        font-style: italic;
        color: #f84438;
        border-radius: 2px;
        background-color: rgba(255, 205, 199, 0.2);
    }

</style>
