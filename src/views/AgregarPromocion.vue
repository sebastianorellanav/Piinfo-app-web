<template>
<v-container>
    <v-row justify="center">
        <v-col cols="8">
            <div class="d-flex justify-center">
                <h1 class="text-h2 font-weight-medium ">
                    Agregar Promoción
                </h1>
            </div>
        </v-col>
    </v-row>
    <v-form>
        <v-row justify="center">
            <v-col cols="8">
                <v-text-field v-model="nombre" :rules="nameRules" :counter="10" label="Nombre" required></v-text-field>
            </v-col>
            <v-col cols="8">
                <v-textarea v-model="informacion" :rules="nameRules" outlined label="Información" required></v-textarea>
            </v-col>
        </v-row>
        
           <v-row justify="center">
        <v-col cols="4">
            <p class="grey--text text--darken-2">
                Subir imagen de la promoción
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
                    <v-btn href="/#/administrar-promociones" class="mx-2" x-large>Cancelar</v-btn>
                    <v-btn @click="guardarPromocion()" class="mx-2" x-large color="#FF7F5C" dark>Guardar</v-btn>
                </div>
            </v-col>

        </v-row>
    </v-form>

</v-container>
</template>

<script>
export default {
    name: 'AgregarPromocion',

    components: {},
    data: function () {
        return {
            tiposEmpresas: ["Micro", "Pequeña", "Mediana"],
            tipoEmpresaSeleccionada: "",
            tipoConvenios: ["Mini", "Super"],
            tipoconvenioSeleccionado: "",
            nombre: "",
            informacion: "",
            imagen: "",
        }
    },

    methods: {
        guardarPromocion () {
            let promocion = {
                name: this.nombre,
                information: this.informacion,
                image: this.imagen,
                state: "Activa",
                views: 0
            }

            this.$store.commit("save_promotion", promocion)
            this.$router.push("administrar-promociones")
        }
    }
}
</script>
