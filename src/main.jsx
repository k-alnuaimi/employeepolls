import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter
} from "react-router-dom"
import routesConfig from './routes/routesConfig.jsx'
import store from './store.js'
import Providers from './utils/Providers.jsx'



const router = createBrowserRouter(routesConfig);






createRoot(document.getElementById('root')).render(

  <Providers router={router} store={store} />

)
