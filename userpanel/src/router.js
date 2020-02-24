import Router from 'vue-router'
import WidgetExample from "./components/views/WidgetExample";
import CustLayExample from "./components/views/CustLayExample";

export default new Router(
    {
        mode: 'history',
        routes: [
            {
                path: '*',
                redirect: '/'
            },
            {
                path: "",
                name: 'WidgetExample',
                component: WidgetExample,
            },
            {
                path: "/2",
                name: 'CustomLayoutExample',
                component: CustLayExample,
            }
        ]
    }
)