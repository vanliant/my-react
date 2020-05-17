import Login from '../pages/login'
import Content from '../pages/content'
import ContentHome from '../pages/contentHome'

const routes = [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/content',
        component:Content,
        children:[
            {
                path:'/content/home',
                component:ContentHome
            }
        ]
    }
]

export default routes