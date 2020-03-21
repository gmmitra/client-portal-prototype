import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import MyCampaigns from './pages/MyCampaigns.vue'
import ManageCampaigns from './pages/ManageCampaigns.vue'
import ManageBrands from './pages/ManageBrands.vue'
import MyBrands from './pages/MyBrands.vue'
import Account from './pages/Account.vue'
import PasswordRecovery from './pages/PasswordRecovery.vue'
import PasswordReset from './pages/PasswordChanged.vue'

export default [
  // {
  //     path: '/',
  //     name: 'home',
  //     component: Home
  //   },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'my-campaigns',
      component: MyCampaigns
    },
    {
      path: '/manage-campaigns',
      name: 'manage-campaigns',
      component: ManageCampaigns
    },
    {
      path: '/manage-brands',
      name: 'manage-brands',
      component: ManageBrands
    },
    {
      path: '/my-brands',
      name: 'my-brands',
      component: MyBrands
    },
    {
      path: '/account-information',
      name: 'account-information',
      component: Account
    },
    {
      path: '/password-recovery',
      name: 'password-recovery',
      component: PasswordRecovery
    },
    {
      path: '/password-reset',
      name: 'password-reset',
      component: PasswordReset
    },
]
