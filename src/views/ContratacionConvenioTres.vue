<template>
<v-container>
    <v-row justify="center">
        <v-col cols="8">
            <div class="d-flex justify-center">
                <h1 class="text-h2 font-weight-medium ">
                    Contratación de Convenio
                </h1>
            </div>
        </v-col>

        <v-col cols="8">
            <h1 class="text-h5 font-weight-bold " style="color:#FF7F5C">
                Contrato
            </h1>
            <p class="grey--text text--darken-2 mt-3">
                Para finalizar el proceso de contratación del convenio debes descargar el contrato que se dispone a continuación,
                firmarlo y luego subir el archivo firmado.
            </p>
        </v-col>

    </v-row>

    <v-row justify="center" class="my-6">
        <v-col cols="4">
            <a href="#" style="text-decoration:none;">
                <v-card style="background:#4FB58B">
                    <v-card-title>
                        <p class="text-h4 white--text mx-auto">
                            Descargar Contrato
                            <v-icon dark>
                                mdi-download
                            </v-icon>
                        </p>
                    </v-card-title>
                </v-card>
            </a>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col cols="4">
            <p class="grey--text text--darken-2 mt-3">
                Subir el archivo del contrato firmado
            </p>

            <v-file-input v-model="files" color="grey darken-3" counter label="Seleccionar archivo" multiple placeholder="Seleccionar archivo" prepend-icon="mdi-paperclip" outlined :show-size="1000" background-color="orange darken-1">
                <template v-slot:selection="{ index, text }">
                    <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
                        {{ text }}
                    </v-chip>

                    <span v-else-if="index === 2" class="text-overline grey--text text--darken-3 mx-2">
                        +{{ files.length - 2 }} File(s)
                    </span>
                </template>
            </v-file-input>
        </v-col>
        <v-col cols="4"></v-col>
    </v-row>

    <v-row justify="center" class="mt-3">
        <v-col cols="12">
            <div class="d-flex justify-center">
                <v-btn href="/#/convenios" class="mx-2" x-large>Cancelar</v-btn>
                <v-btn @click="crearCuenta()" class="mx-2" x-large color="#FF7F5C" dark>Siguiente</v-btn>
            </div>
        </v-col>

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
        crearCuenta () {
            this.$store.commit("createAccount")
            this.$router.push("mi-empresa")
        }
    }
}
</script>
