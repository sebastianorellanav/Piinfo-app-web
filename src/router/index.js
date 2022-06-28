import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Convenios from '../views/Convenios'
import ContratacionConvenioUno from '../views/ContratacionConvenioUno'
import ContratacionConvenioDos from '../views/ContratacionConvenioDos'
import ContratacionConvenioTres from '../views/ContratacionConvenioTres'
import MiEmpresa from '../views/MiEmpresa'
import Productos from '../views/Productos'
import Promociones from '../views/Promociones'
import AgregarProducto from '../views/AgregarProducto'
import EditarProducto from '../views/EditarProducto'
import AgregarPromocion from '../views/AgregarPromocion'
import EditarPromocion from '../views/EditarPromocion'
import CargarDatos from '../views/CargarDatos'
import Estadisticas from '../views/Estadisticas'
import Login from '../views/Login'
import RegistroExitoso from '../views/RegistroExitoso'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/convenios',
    name: 'Convenios',
    component: Convenios
  },
  {
    path: '/contratacion-convenio-1',
    name: 'ContratacionConvenioUno',
    component: ContratacionConvenioUno
  },
  {
    path: '/contratacion-convenio-2',
    name: 'ContratacionConvenioDos',
    component: ContratacionConvenioDos
  },
  {
    path: '/contratacion-convenio-3',
    name: 'ContratacionConvenioTres',
    component: ContratacionConvenioTres
  },
  {
    path: '/mi-empresa',
    name: 'MiEmpresa',
    component: MiEmpresa
  },
  {
    path: '/administrar-productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/administrar-promociones',
    name: 'Promociones',
    component: Promociones
  },
  {
    path: '/agregar-producto',
    name: 'AgregarProducto',
    component: AgregarProducto
  },
  {
    path: '/editar-producto',
    name: 'EditarProducto',
    component: EditarProducto
  },
  {
    path: '/agregar-promocion',
    name: 'AgregarPromocion',
    component: AgregarPromocion
  },
  {
    path: '/editar-promocion',
    name: 'EditarPromocion',
    component: EditarPromocion
  },
  {
    path: '/cargar-datos',
    name: 'CargarDatos',
    component: CargarDatos
  },
  {
    path: '/estadisticas',
    name: 'Estadisticas',
    component: Estadisticas
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro-exitoso',
    name: 'RegistroExitoso',
    component: RegistroExitoso
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
