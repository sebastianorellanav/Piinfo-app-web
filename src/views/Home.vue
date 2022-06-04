<template>
<v-container>
    <v-row justify="start" class="pa-10">
        <v-col cols="7" class="mx-15 pa-15">
            <div class="d-flex justify-start">
                <h1 class="text-h2 font-weight-medium ">
                    Una forma más eficiente de llegar a tus clientes
                </h1>
            </div>
            <div class="d-flex justify-start my-8">
                <p class="text-start font-weight-light text-h6">
                    Los convenios de publicidad son contratos que se realizan con nuestra empresa para entregar publicidad y promoción de tus productos a cambio de un pago mensual.
                </p>
            </div>

            <div class="d-flex">
                <v-btn class="mx-3" color="#3C8379" dark>
                    <v-icon class="mr-5" >mdi-home-city</v-icon>
                    Nuestra empresa
                </v-btn>

                <v-btn class="mx-3" color="#3C8379" dark>
                    <v-icon class="mr-5" >mdi-play</v-icon>
                    Ver como funciona
                </v-btn>
            </div>
        </v-col>

        <v-col cols="3" class="mx-15 pa-15 mt-5">
            <div>
              <h1 class="text-h5 text-center">
                Comienza tu prueba gratuita
              </h1>
                <v-form class="mt-1"> 
                    <v-text-field class="my-6" outlined v-model="email" :rules="emailRules" label="Correo electrónico" required></v-text-field>
                    <div class="d-flex justify-center">
                        <v-btn  dark color="#FF7F5C" href="/#/contratacion-convenio-1">Comenzar</v-btn>
                    </div>
                </v-form>
            </div>
        </v-col>
    </v-row>

    

    <v-row class="mt-3" justify="center" style="background:#F8F9FD;">
        <v-col cols="12" class="mx-10 mt-2">

            <div class="d-flex flex-wrap justify-center text-h4">
                <h1 class="text-h4 font-weight-light"> 
                    Con el respaldo de multiples entidades
                </h1>

            </div>
        </v-col>
        <v-col cols="12" class="align-self-center">
            <div class="d-flex justify-center">
                <v-img lazy-src="https://picsum.photos/id/11/10/6" contain max-height="200" max-width="150" src="../assets/minsal-logo.png"></v-img>
            <v-img lazy-src="https://picsum.photos/id/11/10/6" contain max-height="200" max-width="150" src="../assets/logo-inta.png"></v-img>
            </div>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'Login',

    components: {},
    data: function () {
        return {
            show1: false,
            show2: true,
            password: '',
            rules: {
                required: value => !!value || 'Required.',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
            },
        }
    }
}
</script>
