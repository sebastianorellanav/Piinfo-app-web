<template>
<v-container>
    <v-row justify="center" class="mt-15 mb-5">
        <v-col cols="12">
            <div class="d-flex justify-space-between">
                <h1 class="text-h2 font-weight-medium ">
                    Promociones
                </h1>

                <div>
                    <v-btn class="mr-2" color="#FF7F5C" dark href="/#/agregar-promocion">Añadir Promociones</v-btn>
                </div>
            </div>
        </v-col>
    </v-row>

    <v-row justify-center class="mt-5">
        <v-col>
            <template>
                <v-data-table :headers="headers" :items="promociones" sort-by="calories" class="elevation-1">
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title>Lista de productos ingresados</v-toolbar-title>
                            <v-divider class="mx-4" inset vertical></v-divider>
                            <v-spacer></v-spacer>
                            <div>
                                <v-select label="Filtro"></v-select>
                            </div>
                        </v-toolbar>


                        <v-dialog v-model="dialog" max-width="500px">

                            <v-card>
                                <v-card-title>
                                    <span class="text-h5">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="6" md="12">
                                                <v-text-field v-model="editedItem.name" label="Nombre"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="12">
                                                <v-text-field v-model="editedItem.information" label="Información"></v-text-field>
                                            </v-col>
                                            
                                            <v-col cols="12" sm="6" md="12">
                                                <v-radio-group v-model="editedItem.state">
                                                    <v-radio label="Activa" color="success" value="Activa"></v-radio>
                                                    <v-radio label="Inactiva" color="success" value="Inactiva"></v-radio>
                                                </v-radio-group>
                                                
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close()">
                                        Cancelar
                                    </v-btn>
                                    <v-btn color="blue darken-1" text @click="save()">
                                        Guardar
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title class="text-h5">¿Estás seguro de que quieres eliminar esta promoción?</v-card-title>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </template>
                    <template v-slot:item.image="{ item }">
                        <v-btn plain color="#3C8379" style="text-transform:capitalize">
                            ver imagen
                        </v-btn>
                    </template>

                    <template v-slot:item.actions="{ item }">
                        <v-icon small class="mr-2" color="#FF7F5C" @click="editItem(item)">
                            mdi-pencil
                        </v-icon>
                        <v-icon small color="#FF7F5C" @click="deleteItem(item)">
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize">
                            No se ha ingresado ninguna promoción
                        </v-btn>
                    </template>
                </v-data-table>
            </template>
        </v-col>
    </v-row>

</v-container>
</template>

<script>
export default {
    name: 'Promociones',

    components: {},
    data: function () {
        return {
            dialog: false,
            dialogDelete: false,
            headers: [{
                    text: 'Nombre',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: "Información",
                    value: "information"
                },
                {
                    text: 'Estado',
                    value: 'state'
                },
                {
                    text: 'Imagen',
                    value: 'image'
                },
                {
                    text: 'Vistas',
                    value: 'views'
                },
                {
                    text: 'Acciones',
                    value: 'actions',
                    sortable: false
                },
            ],
            promociones: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
            defaultItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
            user: {}
        }
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.user = this.$store.state.current_user;
            this.promociones = this.user.promociones;

        },

        editItem(item) {
        //this.$router.push('/editar-promocion')
            this.editedIndex = this.promociones.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;       
        },

        deleteItem(item) {
            this.editedIndex = this.promociones.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.promociones.splice(this.editedIndex, 1)
            this.user.promociones = this.promociones;
            this.$store.commit('change_products', this.user);
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.promociones[this.editedIndex], this.editedItem)
            } else {
                this.promociones.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>
