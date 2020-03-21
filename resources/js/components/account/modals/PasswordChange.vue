<template>
    <section class="fixed modal-bg z-50 h-full w-full pin-r pin-l pin-t pin-b">
        <div class="vertical-center">
            <img class="logo block mx-auto mb-8 pass-icon" src="img/lock.svg" alt="password icon">
            <h1 class="text-center mb-8">Change Password</h1>
            <div class="border bg-white mx-auto p-8 login-box-wrap content-box-wrap">
                <p class="text-center text-grey-light">A strong password consists of at least six characters (and the more
                    characters, the stronger the password)</p>

                <form class="pt-6">
                    <div class="mb-8">
                        <label class="block text-grey-darker text-sm mb-2 font-medium" for="password">
                            New Password
                        </label>
                        <!-- <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-none focus:border-blue"
                               placeholder="Password must be atleast 6 characters" v-validate="'confirmed:confirmation'"
                               name="password" type="password" v-model="user.password" :class="{'input-error': errors.has('password')}"
                        > -->
                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-none focus:border-blue"
                               placeholder="Password must be atleast 6 characters"
                               name="password" type="password"
                        >
                        <div v-show="errors.has('password')" class="py-2 px-3 help is-danger">{{
                            errors.first('password') }}
                        </div>
                    </div>
                    <div class="mb-8">
                        <label class="block text-grey-darker text-sm mb-2 font-medium" for="confirm_password">
                            Retype New Password
                        </label>
                        <!-- <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-none focus:border-blue"
                               placeholder="Password must be atleast 6 characters" name="passwordConfirmation" v-model="user.passwordConfirmation"
                               ref="confirmation" type="password"
                        > -->
                        <input class="appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-none focus:border-blue"
                               placeholder="Password must be atleast 6 characters" name="passwordConfirmation" type="password"
                        >
                    </div>
                    <div class="text-center">
                        <!-- <button type="button"
                                class="no-underline bg-grey-lightest text-center text-sm  text-grey-darker font-bold py-3 px-4 cp-btn-rounded hover:bg-grey-lighter uppercase mx-2"
                                @click="showModal('cancel')">Cancel
                        </button>
                        <button type="button"
                                class="no-underline cp-btn-green text-center text-white font-bold py-3 px-4 cp-btn-rounded hover:bg-green uppercase text-sm mx-2 focus:outline-none"
                                @click="showModal('submit')">Change Password
                        </button> -->
                        <button type="button"
                                class="no-underline bg-grey-lightest text-center text-sm  text-grey-darker font-bold py-3 px-4 cp-btn-rounded hover:bg-grey-lighter uppercase mx-2" @click="hideChangePass()">Cancel
                        </button>
                        <button type="button"
                                class="no-underline cp-btn-green text-center text-white font-bold py-3 px-4 cp-btn-rounded hover:bg-green uppercase text-sm mx-2 focus:outline-none" @click="hideChangePass(); showSuccess()" >Change Password
                        </button>

                    </div>
                </form>


            </div>
        </div>
    </section>
</template>

<script>
 import { eventBus } from '../../../app'
 export default {
       

        data: function () {
            return {
                
            }
        },
         methods: {
        
            hideChangePass() {
                this.updatePass = false;
                eventBus.$emit('hideChangePass', this.updatePass);
            },
            showSuccess() {
                this.updateSuccess = true;
                eventBus.$emit('showSuccess', this.updateSuccess);
            }
        }

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

    .pass-icon {
        height: 40px;
        width: 37px;
    }

    .modal-bg {
        background: rgba(255, 255, 255, .85);
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
