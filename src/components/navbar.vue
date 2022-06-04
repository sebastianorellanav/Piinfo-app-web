<template>
    <v-container class="my-4">
        <v-row justify="center" class="py-4">       
            <v-col >
                <div class="d-flex justify-start">
                    <a href="/" style="text-decoration: none;">
                        <v-img
                        lazy-src="https://picsum.photos/id/11/10/6"
                        max-height="63"
                        max-width="84"
                        src="../assets/logo.png"
                        ></v-img>
                        </a>
                        <div class="d-flex align-center mx-2 text-h5">
                            Food For Me
                        </div>
                    
                </div>
            </v-col>
            <v-col cols="1">
                <div class="d-flex justify-center"> 
                    <v-btn  href="/#/about" text plain>
                    Nosotros
                </v-btn>
                <v-btn   text plain href="/#/convenios">
                    Producto
                </v-btn>
                <v-btn href="/#/contacto"  text plain >
                    Contactanos
                </v-btn>
                </div>
            </v-col>
            
            <v-col >
                <div class="d-flex justify-end">
                    <v-btn text href="/#/login">
                        Iniciar Sesión
                    </v-btn>

                    <v-btn  color="#3C8379" dark href="/#/">
                        Registrarse
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>



<script>
export default {
    name: 'Navbar',

    components: {
    },
  }
</script>
