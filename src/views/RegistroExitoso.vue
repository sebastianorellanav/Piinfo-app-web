<template>
<v-container>
    <v-row justify="center">
        <v-col cols="8">
            <div class="d-flex justify-center">
                <h1 class="text-h2 font-weight-medium ">
                    Registro Exitoso
                </h1>
            </div>
        </v-col>

        <v-col class="my-10" cols="8">
            <p class="grey--text text-h5 text--darken-2 mt-3">
                Haz finalizado la creación de tu cuenta. Ahora debes ir a tu perfil para comenzar a ingresar productos, promociones y ver tus estadísticas.
            </p>
        </v-col>

    </v-row>

    <v-row justify="center" class="my-15">
        <v-col cols="4">
            <a @click="redirectMiEmpresa()" style="text-decoration:none;">
                <v-card style="background:#FF7F5C">
                    <v-card-title>
                        <p class="text-h4 white--text mx-auto">
                             Ir al perfil de mi empresa
                            <v-icon dark>
                                mdi-arrow-right-bold
                            </v-icon>
                        </p>
                    </v-card-title>
                </v-card>
            </a>
        </v-col>
    </v-row>
    <v-row justify="center">

    </v-row>



    <v-row class="mt-10" justify="center" style="background:#F8F9FD;">
        <v-col cols="6" class="ma-10">

            <div class="d-flex flex-wrap align-center text-h4">
                Aumenta las posibilidades de tu negocio con Food For Me

            </div>
        </v-col>
        <v-col cols="2" class="align-self-center">
            <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="1000" max-width="1000" src="../assets/logo.png"></v-img>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'ContratacionConvenioTres',

    components: {},
    data: function () {
        return {
            tiposEmpresas: ["Micro", "Pequeña", "Mediana"],
            tipoEmpresaSeleccionada: "",
            tipoConvenios: ["Mini", "Super"],
            tipoconvenioSeleccionado: ""
        }
    },

    methods: {
        redirectMiEmpresa () {
            //this.$store.commit("createAccount")
            this.$store.commit('make_login');
            this.$router.push("mi-empresa")
        }
    }
}
</script>
