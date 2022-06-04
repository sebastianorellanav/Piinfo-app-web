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
                <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
                    <template v-slot:top>
                        <v-toolbar flat>
                            <v-toolbar-title>Lista de productos ingresados</v-toolbar-title>
                            <v-divider class="mx-4" inset vertical></v-divider>
                            <v-spacer></v-spacer>
                            <div>
                                <v-select label="Filtro"></v-select>
                            </div>
                           
                        </v-toolbar>
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
                        <v-icon small class="mr-2" @click="editItem(item)">
                            mdi-pencil
                        </v-icon>
                        <v-icon small @click="deleteItem(item)">
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize">
                            No hay datos
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
            desserts: [],
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
            }
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
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            information: 159,
            state: 6.0,
            image: 24,
            views: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            information: 237,
            state: 9.0,
            image: 37,
            views: 4.3,
          },
          {
            name: 'Eclair',
            information: 262,
            state: 16.0,
            image: 23,
            views: 6.0,
          },
          {
            name: 'Cupcake',
            information: 305,
            state: 3.7,
            image: 67,
            views: 4.3,
          },
          {
            name: 'Gingerbread',
            information: 356,
            state: 16.0,
            image: 49,
            views: 3.9,
          },
          {
            name: 'Jelly bean',
            information: 375,
            state: 0.0,
            image: 94,
            views: 0.0,
          },
          {
            name: 'Lollipop',
            information: 392,
            state: 0.2,
            image: 98,
            views: 0,
          },
          {
            name: 'Honeycomb',
            information: 408,
            state: 3.2,
            image: 87,
            views: 6.5,
          },
          {
            name: 'Donut',
            information: 452,
            state: 25.0,
            image: 51,
            views: 4.9,
          },
          {
            name: 'KitKat',
            information: 518,
            state: 26.0,
            image: 65,
            views: 7,
          },
        ]
      },

      editItem (item) {
        this.$router.push('editar-producto')
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
}
</script>
