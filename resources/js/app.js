import './bootstrap';
import "../css/nucleo-icons.css";
import "../css/nucleo-svg.css";

import "./Plugins/nav-pills.js";
import "../scss/soft-ui-dashboard.scss";
// import 'sweetalert2/dist/sweetalert2.min.css';

import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/vue3';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from '../../vendor/tightenco/ziggy';
import VueSweetalert2 from 'vue-sweetalert2';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({el, App, props, plugin}) {
        return createApp({
            render: () => {
                el.classList.add('g-sidenav-show')
                return h(App, props)
            }
        })
            .use(plugin)
            .use(ZiggyVue)
            .use(VueSweetalert2)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
