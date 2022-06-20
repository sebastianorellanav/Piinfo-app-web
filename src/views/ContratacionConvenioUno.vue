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
                Datos del Dueño
            </h1>
        </v-col>

    </v-row>
    <v-form>
        <v-row justify="center">
            <v-col cols="4">
                <v-text-field v-model="nombre" :rules="nameRules" :counter="10" label="Nombre" required></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="apellido" :counter="10" label="Apellido" required></v-text-field>
            </v-col>
        </v-row>
                <v-row justify="center">
            <v-col cols="4">
                <v-text-field v-model="correo" :counter="10" label="Correo" required></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="run" :counter="10" label="Run" required></v-text-field>
            </v-col>
        </v-row>
                <v-row justify="center">
            <v-col cols="4">
                <v-text-field v-model="genero" :counter="10" label="Género" required></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="edad" :counter="10" label="Edad" required></v-text-field>
            </v-col>
        </v-row>
                <v-row justify="center">
            <v-col cols="4">
                <v-text-field v-model="telefono" :counter="10" label="Teléfono" required></v-text-field>
            </v-col>
            
        </v-row>

                <v-row justify="center" class="mt-10">
            <v-col cols="12">
              <div class="d-flex justify-center">
                   <v-btn class="mx-2" x-large >Cancelar</v-btn>
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
    name: 'ContratacionConvenioUno',

    components: {},

    data: function () {
        return {
            nombre: "",
            apellido: "",
            correo: "",
            run: "",
            genero: "",
            edad: "",
            telefono: "",
        }
    },

    methods: {
        guardarDatos () {
            let nuevo_usuario = {
                nombre_dueño: this.nombre,
                apellido: this.apellido,
                email: this.correo,
                run: this.run,
                genero: this.genero,
                edad: this.edad,
                telefono: this.telefono,
            }

            this.$store.commit("saveTemporalData", nuevo_usuario)

            this.$router.push("contratacion-convenio-2")
        }
    }
}
</script>
