<template>
<v-container>
    <v-row justify="center" class="mt-15 mb-5">
        <v-col cols="12">
            <div class="d-flex justify-space-between">
                <h1 class="text-h2 font-weight-medium ">
                    Productos
                </h1>

                <div>
                    <v-btn class="mr-2" color="#FF7F5C" dark href="/#/agregar-producto">Añadir Producto</v-btn>
                    <v-btn class="ml-2" color="#3C8379" dark href="/#/cargar-datos">Cargar Datos</v-btn>
                </div>
            </div>
        </v-col>
    </v-row>

    <v-row justify-center class="mt-5">
        <v-col>
            <template>
                <v-data-table :headers="headers" :items="productos" sort-by="calories" class="elevation-1">
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
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.porcion" label="Porcion"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.porcion_por_envace" label="Porciones por envace"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <h1 class="text-h6 orange--text my-4">Ingresar cantidades por porcion</h1>
                                                <v-text-field v-model="editedItem.energia_porcion" label="Energía"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <h1 class="text-h6 orange--text my-4">Ingresar cantidades por envace</h1>
                                                <v-text-field v-model="editedItem.energia_envace" label="Energía"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.proteina_porcion" label="Proteína"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.proteina_envace" label="Proteína"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.grasa_porcion" label="Grasa"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.grasa_envace" label="Grasa"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.azucar_porcion" label="Azúcar"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.azucar_envace" label="Azúcar"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.carbohidrato_porcion" label="Carbohidratos"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="6">
                                                <v-text-field v-model="editedItem.carbohidrato_envace" label="Carbohidratos"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="12">
                                                <v-textarea v-model="editedItem.ingredientes" label="Ingredientes"></v-textarea>
                                            </v-col>
                                            <v-col cols="12" sm="6" md="12">
                                                <v-radio-group v-model="editedItem.state">
                                                    <v-radio label="Activo" color="success" value="Activo"></v-radio>
                                                    <v-radio label="Inactivo" color="success" value="Inactivo"></v-radio>
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
                                <v-card-title class="text-h5">¿Estas seguro de que quieres eliminar este producto?</v-card-title>
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
                            No se ha ingresado ningún producto todavía
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
    name: 'Productos',

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
                    text: 'Información',
                    value: 'information'
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
            productos: [],
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
            this.user = this.$store.state.current_user
            this.productos = this.user.productos;

        },

        editItem(item) {
            //this.$router.push('editar-producto')
            this.editedIndex = this.productos.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            this.editedIndex = this.productos.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.productos.splice(this.editedIndex, 1)
            this.user.productos = this.productos;
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
                Object.assign(this.productos[this.editedIndex], this.editedItem)
            } else {
                this.productos.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>
