<script setup>
import {Link} from "@inertiajs/vue3";
import downArrWhite from "../../../images/down-arrow-white.svg";
import downArrBlack from "../../../images/down-arrow-dark.svg";

defineProps({
    btnBackground: String,
    isBlur: String,
    darkMode: {
        type: Boolean,
        default: false,
    },
})

const darkModes = () => {
    return {
        "text-dark": this.darkMode,
    };
}
</script>

<template>
    <!-- Navbar -->
    <nav
        class="top-0 navbar navbar-expand-lg position-absolute z-index-3"
        :class="isBlur ? isBlur : 'shadow-none my-2 navbar-transparent w-100'"
    >
        <div class="container">
            <Link
                class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
                :href="route('dashboard')"
                v-bind="$attrs"
                :class="isBlur ? 'text-dark' : 'text-white'"
            >
                Soft UI Dashboard
            </Link>
            <button
                class="navbar-toggler shadow-none ms-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
            </button>
            <div class="collapse navbar-collapse" id="navigation">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <Link
                            class="nav-link d-flex align-items-center me-2 active"
                            aria-current="page"
                            :href="route('dashboard')"
                        >
                            <i
                                class="fa fa-chart-pie opacity-6 me-1"
                                aria-hidden="true"
                                :class="isBlur ? 'text-dark' : 'text-white'"
                            ></i>
                            Dashboard
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link me-2" :href="route('profile.show')">
                            <i
                                class="fa fa-user opacity-6 me-1"
                                aria-hidden="true"
                                :class="isBlur ? 'text-dark' : 'text-white'"
                            ></i>
                            Profile
                        </Link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link me-2" to="/sign-up">
                            <i
                                class="fas fa-user-circle opacity-6 me-1"
                                aria-hidden="true"
                                :class="isBlur ? 'text-dark' : 'text-white'"
                            ></i>
                            Sign Up
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link me-2" to="/sign-in">
                            <i
                                class="fas fa-key opacity-6 me-1"
                                aria-hidden="true"
                                :class="isBlur ? 'text-dark' : 'text-white'"
                            ></i>
                            Sign In
                        </router-link>
                    </li>
                </ul>
                <ul class="navbar-nav d-lg-block d-none">
                    <li class="nav-item">
                        <a
                            href="https://www.creative-tim.com/product/vue-soft-ui-dashboard"
                            class="btn btn-sm btn-round mb-0 me-1"
                            :class="isBlur ? 'bg-gradient-dark' : 'bg-gradient-success'"
                        >Free download</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- End Navbar -->
</template>
