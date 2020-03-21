<template>
    <section class="vertical-center">
        <img class="logo block mx-auto mb-8 pass-icon" src="img/lock.svg" alt="password icon">
        <h1 class="text-center mb-8">Password Recovery</h1>
        <div class="border bg-white mx-auto p-8 login-box-wrap content-box-wrap">
            <p class="text-center grey-light">Enter your PanelPlace email address and we'll send you a link to password
                recovery.</p>

            <form class="pt-6">
                <div class="mb-8">
                    <label class="block text-grey-darker text-sm mb-2 font-medium" for="email">
                        Email
                    </label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-none focus:border-blue"
                           id="email" type="text" placeholder="youremail@panelplace.com" v-validate="'required|email'"
                           name="email" :class="{'input-error': errors.has('email')}"
                    >
                    <div v-show="errors.has('email')" class="is-danger px-3 py-2">{{ errors.first('email') }}</div>
                </div>
                <div class="">
                    <router-link to="/password-reset" class="no-underline cp-btn-green text-sm text-center block w-full text-white font-bold py-3 px-4 cp-btn-rounded hover:bg-green-light uppercase">Reset
                        Password</router-link>

                </div>
            </form>


        </div>
    </section>
</template>

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

    .is-danger {
        font-size: 12px;
        font-style: italic;
        color: #f84438;
        border-radius: 2px;
        background-color: rgba(255, 205, 199, 0.2);
    }

    .input-error {
        border: solid 1px #f84438 !important;
    }
</style>
