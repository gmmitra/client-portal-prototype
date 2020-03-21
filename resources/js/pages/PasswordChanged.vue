<template>
    <section class="vertical-center">
        <img class="logo block mx-auto mb-8 pass-icon" src="img/lock.svg" alt="password icon">
        <h1 class="text-center mb-2">Congratulations!</h1>
        <p class="text-center grey-light">You successfully reset your password</p>

        <div class="mt-8 text-center">
            <router-link to="/login" class="no-underline cp-btn-green text-center text-sm w-full text-white font-bold px-8 cp-btn-rounded bg-blue hover:bg-blue uppercase py-3">Go
                Back</router-link>
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
</style>
