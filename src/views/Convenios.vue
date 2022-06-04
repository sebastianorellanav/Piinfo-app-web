<template>
<v-container>
    <v-row justify="center">
        <v-col cols="8">
            <div class="d-flex justify-center">
                <h1 class="text-h2 font-weight-medium ">
                    Convenios de Publicidad
                </h1>
            </div>
        </v-col>

        <v-col cols="6">
            <div class="d-flex justify-center">
                <p class="text-center text-h5 font-weight-light">
                    Los convenios de publicidad son contratos que se realizan con nuestra empresa para entregar publicidad y promoción de tus productos a cambio de un pago mensual.
                </p>
            </div>
        </v-col>

        <v-col cols="12" class="mb-5">
            <div class="d-flex justify-center">
                <v-chip class="px-14 py-6" label color="#3C8379" text-color="white">
                    <h1 class="text-h6">Hay 2 opciones de convenios disponibles</h1>
                </v-chip>
            </div>
        </v-col>
    </v-row>

    <v-row justify-center class="mt-5">
        <v-col>
            <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="text-overline mb-4">
                            <v-btn class="mx-2" icon dark small color="teal">
                                <v-icon dark>
                                    mdi-star
                                </v-icon>
                            </v-btn>

                        </div>
                        <v-list-item-title class="text-h5 mb-1">
                            Convenio Mini
                        </v-list-item-title>
                        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                </v-list-item>

                <v-card-actions class="d-flex justify-end">

                    <v-btn x-large color="warning" href="/#/contratacion-convenio-1">
                        Contratar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col>
            <v-card class="mx-auto" max-width="344" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="text-overline mb-4">
                            <v-btn class="mx-2" icon dark small color="teal">
                                <v-icon dark>
                                    mdi-heart
                                </v-icon>
                            </v-btn>

                        </div>
                        <v-list-item-title class="text-h5 mb-1">
                            Convenio Super
                        </v-list-item-title>
                        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                </v-list-item>

                <v-card-actions class="d-flex justify-end">

                    <v-btn x-large color="warning" href="/#/contratacion-convenio-1" >
                        Contratar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>

    <v-row class="mt-10" justify="center" style="background:#F8F9FD;">
        <v-col cols="6" class="ma-10">
            
            <div class="d-flex flex-wrap align-center text-h4">
                Aumenta las posibilidades de tu negocio con Food For Me
            
            </div>
        </v-col>
        <v-col cols="2" class="align-self-center">
                <v-img
                        lazy-src="https://picsum.photos/id/11/10/6"
                        max-height="1000"
                        max-width="1000"
                        src="../assets/logo.png"
                        ></v-img>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'Convenios',

    components: {},
}
</script>
