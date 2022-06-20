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
      }],
      promociones:[{
        name: 'Oferta Donuts: 3x2',
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
    }
  },
  actions: {
  },
  modules: {
  }
})
