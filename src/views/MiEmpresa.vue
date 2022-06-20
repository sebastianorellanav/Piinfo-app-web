<template>
<v-container>
    <v-row justify="center" class="mt-15">
        <v-col cols="10">
            <div class="d-flex justify-start">
                <h1 class="text-h2 font-weight-medium ">
                    Mi Empresa
                </h1>
            </div>
        </v-col>

        <v-col cols="10">
            <div class="d-flex justify-start">
                <p class="text-center">
                    <strong>Nombre: </strong> {{current_user.nombre_empresa}}
                </p>
            </div>
            <div class="d-flex justify-start">
                <p class="text-center">
                    <strong>Tipo de Empresa: </strong> {{current_user.tipo_empresa}}
                </p>
            </div>
            <div class="d-flex justify-start">
                <p class="text-center">
                    <strong>Dirección Casa Matriz: </strong> {{current_user.direccion}}
                </p>
            </div>
            <div class="d-flex justify-start">
                <p class="text-center">
                    <strong>Página Web: </strong> {{current_user.pagina_web}}
                </p>
            </div>
        </v-col>
    </v-row>

    <v-row justify-center class="mt-5">
 <v-col>
            <v-card class="mx-auto pa-7 pb-1" max-width="344" outlined>
                <v-list-item one-line>
                    <v-list-item-content>
                        
                        <v-list-item-title class="text-h6">
                            Administrar Productos
                        </v-list-item-title>
                    </v-list-item-content>

                    
                </v-list-item>
                <v-card-text>Greyhound divisely hello coldly fonwderfully Greyhound divisely hello coldly fonwderfully</v-card-text>
                <v-card-actions class="d-flex justify-start">

                    <v-btn large text color="warning" href="/#/administrar-productos">
                        Ver más
                        <v-icon class="ml-1">
                            mdi-arrow-right
                        </v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>

                <v-col>
            <v-card class="mx-auto pa-7 pb-1" max-width="344" outlined>
                <v-list-item one-line>
                    <v-list-item-content>
                        
                        <v-list-item-title class="text-h6">
                            Administrar Promociones
                        </v-list-item-title>
                    </v-list-item-content>

                    
                </v-list-item>
                <v-card-text>Greyhound divisely hello coldly fonwderfully Greyhound divisely hello coldly fonwderfully</v-card-text>
                <v-card-actions class="d-flex justify-start">

                    <v-btn large text color="warning" href="/#/administrar-promociones">
                        Ver más
                        <v-icon class="ml-1">
                            mdi-arrow-right
                        </v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>

 <v-col>
            <v-card class="mx-auto pa-7 pb-1" max-width="344" outlined>
                <v-list-item one-line>
                    <v-list-item-content>
                        
                        <v-list-item-title class="text-h6">
                            Ver Estadísticas
                        </v-list-item-title>
                    </v-list-item-content>

                    
                </v-list-item>
                <v-card-text>Greyhound divisely hello coldly fonwderfully Greyhound divisely hello coldly fonwderfully</v-card-text>
                <v-card-actions class="d-flex justify-start">

                    <v-btn large text color="warning" href="/#/estadisticas">
                        Ver más
                        <v-icon class="ml-1">
                            mdi-arrow-right
                        </v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>

    </v-row>


</v-container>
</template>

<script>
export default {
    name: 'MiEmpresa',
    components: {},

    data: function(){
        return {
            current_user: {}
        }
    },

    created(){
        this.current_user = this.$store.state.current_user;
    }
}
</script>
