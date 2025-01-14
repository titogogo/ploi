<script setup>
import SidenavCollapse from "./SidenavCollapse.vue";
import Shop from "@/Components/Icon/Shop.vue";
import CreditCard from "@/Components/Icon/CreditCard.vue";
import Document from "@/Components/Icon/Document.vue";
import Spaceship from "@/Components/Icon/Spaceship.vue";
import Settings from "@/Components/Icon/Settings.vue";
import LogoutIcon from "@/Components/Icon/Logout.vue";
import {reactive, ref} from "vue";
import SidenavDropdown from "@/Components/Sidenav/SidenavDropdown.vue";
import {Link, router} from "@inertiajs/vue3";

defineProps({
    cardBg: {
        type: String,
    }
})

const title = ref('test')
const controls = ref('dashboardsExamples')
const isActive = ref('active')
const messagesMenuLinks = reactive([
    {
        to: 'messages.create',
        icon: 'S',
        text: 'Send'
    },
    {
        to: 'messages.index',
        icon: 'SM',
        text: 'History'
    },
    {
        to: 'templates.index',
        icon: 'T',
        text: 'Templates'
    }
])
const contactsMenuLinks = reactive([
    {
        to: 'address-books.create',
        icon: 'N',
        text: 'New'
    },
    {
        to: 'address-books.index',
        icon: 'L',
        text: 'List'
    },
])
const fundsMenuLinks = reactive([
    {
        to: 'coverage.index',
        icon: 'C',
        text: 'Coverage & Pricing'
    },
    {
        to: 'fund.index',
        icon: 'H',
        text: 'History'
    },
    {
        to: 'transfer-funds.index',
        icon: 'T',
        text: 'Transfer'
    },
])
const settingsMenuLinks = reactive([
    {
        to: 'users.index',
        icon: 'U',
        text: 'Users'
    },
    {
        to: 'settings.index',
        icon: 'S',
        text: 'Settings'
    },
    {
        to: 'gateway.index',
        icon: 'G',
        text: 'Gateways'
    },
    {
        to: 'manual-payments.index',
        icon: 'MP',
        text: 'Manual Payments'
    },
    {
        to: 'payment.index',
        icon: 'P',
        text: 'Payment Logs'
    },
    {
        to: 'dispute-logs.index',
        icon: 'DL',
        text: 'Dispute Logs'
    },
])

const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <div
        class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
        id="sidenav-collapse-main"
    >
        <ul class="navbar-nav">
            <li class="nav-item">
                <sidenav-collapse navText="Dashboard" to="dashboard">
                    <template #icon>
                        <shop/>
                    </template>
                </sidenav-collapse>
            </li>
            <li class="nav-item">
                <sidenav-collapse navText="Buy Credits" to="fund.create">
                    <template #icon>
                        <credit-card/>
                    </template>
                </sidenav-collapse>
            </li>
            <li class="nav-item" v-if="$page.props.auth.user.api_enabled">
                <sidenav-collapse navText="API" to="api-tokens.index">
                    <template #icon>
<!--                        <credit-card/>-->
                        <i class="fa-brands fa-connectdevelop"></i>
                    </template>
                </sidenav-collapse>
            </li>
            <li class="nav-item">
                <sidenav-dropdown navText="Messages" :links="messagesMenuLinks">
                    <template #icon>
                        <spaceship/>
                    </template>
                </sidenav-dropdown>
            </li>
            <li class="nav-item">
                <sidenav-dropdown navText="Address Books" :links="contactsMenuLinks">
                    <template #icon>
                        <document/>
                    </template>
                </sidenav-dropdown>
            </li>
            <li class="nav-item">
                <sidenav-dropdown navText="Funds" :links="fundsMenuLinks">
                    <template #icon>
                        <credit-card/>
                    </template>
                </sidenav-dropdown>
            </li>
            <li class="nav-item">
                <sidenav-collapse navText="Settings" to="profile.show">
                    <template #icon>
                        <settings />
                    </template>
                </sidenav-collapse>
            </li>
            <li class="nav-item" v-if="$page.props.auth.user.admin">
                <sidenav-dropdown navText="Admin" :links="settingsMenuLinks">
                    <template #icon>
                        <settings/>
                    </template>
                </sidenav-dropdown>
            </li>
            <li class="nav-item">
                <Link
                    class="nav-link"
                    href="#"
                    @click="logout"
                >
                    <div
                        class="text-center bg-white shadow icon icon-shape icon-sm border-radius-md d-flex align-items-center justify-content-center me-2"
                    >
                        <LogoutIcon />
                    </div>
                    <span class="nav-link-text ms-1">Logout</span>
                </Link>
            </li>
        </ul>
    </div>
</template>
