import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    users:[{
      nombre_empresa: "Agua Santa Veggie",
      nombre_dueño: "Sebastian Orellana Verdejo",
      tipo_empresa: "Micro Empresa",
      email: "sorellana@gmail.com",
      direccion: "Av Aguaviva sur 9876",
      pagina_web_url: "www.aguasanta.cl",
      productos:[{
        name: 'Donuts veganas',
        information: "Corresponde a una galleta hecha sin leche bañada en cacao.",
        state: "Activo",
        image: "url",
        views: 0,
        porcion: "2",
        porcion_por_envace: "4",
        energia_porcion: "12",
        energia_envace: "23",
        proteina_envace: "23",
        proteina_porcion: "34",
        grasa_porcion: "12",
        grasa_envace: "15",
        azucar_envace: "5",
        azucar_porcion: "13",
        carbohidrato_envace: "12",
        carbohidrato_porcion: "23",
        ingredientes: "Agua, Sal, Azucar, Cacao, Leche de soya, Harina integral"
      }],
      promociones:[{
        name: 'Oferta Donuts: 3x2',
        information: "Oferta de Donuts veganas",
        state: "Activa",
        image: "url",
        views: 0,
      }],
      users_searches:[0,0,0,0]
    }],
    current_user: {},
    new_user:{}
  },
  mutations: {
    make_login(state){
      state.isLogin = true;
    },
    make_logout(state){
      state.isLogin = false;
    },
    set_current_user(state, email){
      let user = state.users.find(user => user.email === email);

      state.current_user = user;
    },
    save_product(state, product){
      state.current_user.productos.push(product);
    },

    save_promotion(state, promotion){
      state.current_user.promociones.push(promotion);
    },

    saveTemporalData(state, temporalData){
      state.new_user = Object.assign({}, state.new_user, temporalData);
    },

    createAccount(state){
      
      let data = {
        productos: [],
        promociones: [],
        users_searches: [0,0,0,0]
      };
      let new_user = Object.assign({}, state.new_user, data);
      state.users.push(new_user);
      state.current_user = new_user;
      state.new_user = {}
    },
    change_products(state, user) {
      state.current_user = user;
      state.users.forEach(e => {
        if(e.nombre_empresa === user.nombre_empresa){
          e = user;
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
