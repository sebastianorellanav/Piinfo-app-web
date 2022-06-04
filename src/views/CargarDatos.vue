<template>
<v-container>
    <v-row justify="center">
        <v-col cols="9">
            <div class="d-flex justify-center">
                <h1 class="text-h3 font-weight-bold text-center">
                    Sube información de tus productos para que podamos hacerles publicidad
                </h1>
            </div>
        </v-col>

        <v-col cols="8">
            <p class="text-h6 font-weight-light grey--text text--darken-2 mt-3 text-center">
                Los tipos de archivos compatibles con la carga de productos son .xlsx y .csv, utilizar otra extensión resultará en un error
            </p>
        </v-col>

    </v-row>

    <v-row justify="center" class="my-6">
        <v-col cols="6">
            <a @click="onButtonClick">
                <v-card style="background:#F0F0F0" class="pa-15" outlined>
                    <v-card-title>
                        <input ref="uploader" style="display:none" type="file" @change="onFileChanged">
                        <p class="text-h6 mx-auto font-weight-light">
                            {{ buttonText }}
                            <v-icon>
                                mdi-upload
                            </v-icon>
                        </p>
                        
                    </v-card-title>
                </v-card>
            </a>
        </v-col>
    </v-row>

    <v-row justify="center" class="mt-3">
        <v-col cols="12">
            <div class="d-flex justify-center">
                <v-btn href="/#/administrar-productos" class="mx-2" x-large>Cancelar</v-btn>
                <v-btn href="/#/administrar-productos" class="mx-2" x-large color="#FF7F5C" dark>Cargar Datos</v-btn>
            </div>
        </v-col>

    </v-row>

</v-container>
</template>

<script>
export default {
    name: 'CargarDatos',

    components: {},
    data: function () {
        return {
            selectedFile: null,
            isSelecting: false
        }
    },
      computed: {
    buttonText() {
      return this.selectedFile ? this.selectedFile.name : "Arrastra tus archivos aquí"
    }
  },
    methods: {
        onButtonClick() {
            this.isSelecting = true
            window.addEventListener('focus', () => {
                this.isSelecting = false
            }, {
                once: true
            })

            this.$refs.uploader.click()
        },
        onFileChanged(e) {
            this.selectedFile = e.target.files[0]

            // do something
        }
    }
}
</script>
