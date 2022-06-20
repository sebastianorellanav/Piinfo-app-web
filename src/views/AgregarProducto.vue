<template>
<v-container>
    <v-row justify="center">
        <v-col cols="8">
            <div class="d-flex justify-center">
                <h1 class="text-h2 font-weight-medium ">
                    Agregar Producto
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
                <v-text-field v-model="porcion" :counter="10" label="Porción" required></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="porcion_por_envace" :counter="10" label="Porciones por envace" required></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="4">
                <div class="">
                    <h1 class="text-h6 orange--text my-4">Ingresar cantidades por porción</h1>
                    <v-text-field v-model="energia_porcion" :counter="10" label="Energía" required></v-text-field>
                </div>
            </v-col>
             <v-col cols="4">
                <div class="">
                    <h1 class="text-h6 orange--text my-4">Ingresar cantidades por envace</h1>
                    <v-text-field v-model="energia_envace" :counter="10" label="Energía" required></v-text-field>
                </div>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="4">
                <v-text-field v-model="proteina_porcion" :counter="10" label="Proteínas" required></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="proteina_envace" :counter="10" label="Proteínas" required></v-text-field>
            </v-col>

        </v-row>

                <v-row justify="center">
            <v-col cols="4">
                <v-text-field v-model="grasa_porcion" :counter="10" label="Grasas Totales" required></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="grasa_envace" :counter="10" label="Grasas Totales" required></v-text-field>
            </v-col>

        </v-row>

                <v-row justify="center">
            <v-col cols="4">
                <v-text-field v-model="azucar_porcion" :counter="10" label="Azúcares Totales" required></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="azucar_envace" :counter="10" label="Azúcares Totales" required></v-text-field>
            </v-col>

        </v-row>

                <v-row justify="center">
            <v-col cols="4">
                <v-text-field v-model="sodio_porcion" :counter="10" label="Sodio" required></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="sodio_envace" :counter="10" label="Sodio" required></v-text-field>
            </v-col>

        </v-row>

                <v-row justify="center">
            <v-col cols="4">
                <v-text-field v-model="carbohidrato_porcion" :counter="10" label="Carbohidratos" required></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="carbohidrato_envace" :counter="10" label="Carbohidratos" required></v-text-field>
            </v-col>

        </v-row>

        <v-row justify="center">
            <v-col cols="8">
                <v-textarea v-model="ingredientes" :rules="nameRules" outlined label="Ingredientes (cada ingrediente separado por una coma)" required></v-textarea>
            </v-col>
        </v-row>

           <v-row justify="center">
        <v-col cols="4">
            <p class="grey--text text--darken-2">
                Subir imagen del producto
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
                    <v-btn href="/#/administrar-productos" class="mx-2" x-large>Cancelar</v-btn>
                    <v-btn  @click="guardarProducto()" class="mx-2" x-large color="#FF7F5C" dark>Guardar</v-btn>
                </div>
            </v-col>

        </v-row>
    </v-form>

</v-container>
</template>

<script>
export default {
    name: 'AgregarProducto',

    components: {},
    data: function () {
        return {
            tiposEmpresas: ["Micro", "Pequeña", "Mediana"],
            tipoEmpresaSeleccionada: "",
            tipoConvenios: ["Mini", "Super"],
            tipoconvenioSeleccionado: "",
            nombre: "",
            informacion: "",
            porción: "",
            porcion_por_envace: "",
            energia_porcion: "",
            energia_envace: "",
            proteina_envace: "",
            proteina_porcion: "",
            grasa_porcion: "",
            grasa_envace: "",
            azucar_envace: "",
            azucar_porcion: "",
            carbohidrato_envace: "",
            carbohidrato_porcion: "",
            ingredientes: ""
        }
    },

    methods: {
        guardarProducto () {
            let producto = {
                name: this.nombre,
                information: this.informacion,
                porción: this.porción,
                porcion_por_envace: this.porcion_por_envace,
                energia_porcion: this.energia_porcion,
                energia_envace: this.energia_envace,
                proteina_envace: this.proteina_envace,
                proteina_porcion: this.proteina_porcion,
                grasa_porcion: this.grasa_porcion,
                grasa_envace: this.grasa_envace,
                azucar_envace: this.azucar_envace,
                azucar_porcion: this.azucar_porcion,
                carbohidrato_envace: this.carbohidrato_envace,
                carbohidrato_porcion: this.carbohidrato_porcion,
                ingredientes: this.ingredientes,
                state: "Activo",
                views: 0,
                image: "Ver imagen" 
            }
            this.$store.commit("save_product", producto);
            this.$router.push("administrar-productos")
        }
    }
}
</script>
