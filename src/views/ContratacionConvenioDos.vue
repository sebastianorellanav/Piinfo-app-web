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
                Datos de la Empresa
            </h1>
        </v-col>

    </v-row>
    <v-form>
        <v-row justify="center">
            <v-col cols="4">
                <v-text-field v-model="nombre_empresa" :rules="nameRules" :counter="10" label="Nombre" required></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-select v-model="tipo_empresa" :items="tiposEmpresas" :rules="[v => !!v || 'Item is required']" label="Tipo Empresa" required></v-select>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="4">
                <v-text-field v-model="correo_empresa" :counter="10" label="Correo" required></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="telefono_empresa" :counter="10" label="Teléfono" required></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="4">
                <v-text-field v-model="rut_empresa" :counter="10" label="Rut de la Empresa" required></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="direccion" :counter="10" label="Dirección (Casa Matriz)" required></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="4">
                <v-text-field v-model="pagina_web" :counter="10" label="Página Web" required></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="redes_sociales" :counter="10" label="Redes Sociales" required></v-text-field>
            </v-col>

        </v-row>

        <v-row justify="center">
            <v-col cols="4">
                <v-select v-model="convenio" :items="tipoConvenios" :rules="[v => !!v || 'Item is required']" label="Convenio Seleccionado" required></v-select>
            </v-col>
            <v-col cols="4">
                <v-file-input label="Certificación"></v-file-input>
            </v-col>

        </v-row>

        <v-row justify="center">
            <v-col cols="8">
                <div class="d-flex align-center">
                    <v-checkbox v-model="checkbox"></v-checkbox>He leído y acepto los <a href="" class="ml-1" style="color:#FF7F5C">Términos y Condiciones del Servicio</a>
                </div>
            </v-col>
        </v-row>

        <v-row justify="center" class="mt-3">
            <v-col cols="12">
                <div class="d-flex justify-center">
                    <v-btn href="/#/convenios" class="mx-2" x-large>Cancelar</v-btn>
                    <v-btn @click="guardarDatos()" class="mx-2" x-large color="#FF7F5C" dark>Siguiente</v-btn>
                </div>
            </v-col>

        </v-row>
    </v-form>
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
    name: 'ContratacionConvenioDos',

    components: {},
    data: function () {
        return {
            tiposEmpresas: ["Micro", "Pequeña", "Mediana"],
            tipo_empresa: "",
            tipoConvenios: ["Mini", "Super"],
            convenio: "",
            nombre_empresa: "",
            correo_empresa: "",
            telefono_empresa: "",
            rut_empresa: "",
            direccion: "",
            pagina_web: "",
            redes_sociales: "",

        }
    },

    methods: {
        guardarDatos () {
            let nuevo_usuario = {
                tipo_empresa: this.tipo_empresa,
                convenio: this.convenio,
                nombre_empresa: this.nombre_empresa,
                correo_empresa: this.correo_empresa,
                telefono_empresa: this.telefono_empresa,
                rut_empresa: this.rut_empresa,
                direccion: this.direccion,
                pagina_web: this.pagina_web,
                redes_sociales: this.redes_sociales,
            }

            this.$store.commit("saveTemporalData", nuevo_usuario)

            this.$router.push("contratacion-convenio-3")
        }
    }
}
</script>
