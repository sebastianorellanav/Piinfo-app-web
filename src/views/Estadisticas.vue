<template>
<v-container>
    <v-row justify="center" class="mt-15 mb-5">
        <v-col cols="12">
            <div class="d-flex justify-space-between">
                <h1 class="text-h2 font-weight-medium ">
                    Estadísticas
                </h1>
            </div>
        </v-col>
    </v-row>

    <v-row class="mt-5 d-flex justify-space-between">
        <v-col cols="6" class="pa-5 pr-10">
            <div class="d-flex justify-space-between mb-5">
                <h1 class="text-h5 font-weight-bold " style="color:#FF7F5C">
                    Promociones
                </h1>
                <v-btn text color="#FF7F5C"> Ver todas</v-btn>
            </div>
            <v-row>
                <v-col>
                    <v-card class="text-center">
                        <v-card-text class="text-h5 text-center green--text" hover>
                            Activas
                        </v-card-text>
                        <v-card-text>
                            <h1 class="text-h1 green--text">{{promociones_activas.length}}</h1>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="text-center">
                        <v-card-text class="text-h5 text-center ">
                            Inactivas
                        </v-card-text>
                        <v-card-text>
                            <h1 class="text-h1">{{promociones_inactivas.length}}</h1>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="6" class="pa-5 pl-10">
            <div class="d-flex justify-space-between mb-5">
                <h1 class="text-h5 font-weight-bold " style="color:#FF7F5C">
                    Productos más buscados
                </h1>
                <v-btn text color="#FF7F5C"> Ver todos</v-btn>
            </div>
            <v-row>
                <v-col>
                    <v-data-table :headers="headersProductTable" :items="dataProductTable" :items-per-page="5" class="elevation-1">
                        <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize">
                            No se ha ingresado ningún producto todavía
                        </v-btn>
                    </template>
                    </v-data-table>
                </v-col>
            </v-row>
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="12">
            <h1 class="text-h5 font-weight-bold " style="color:#FF7F5C">
                Búsquedas
            </h1>
        </v-col>

        <v-col>
            <v-card outlined>
                <v-row>
                    <v-col cols="8">
                        <div id="chart">
                            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
                        </div>
                    </v-col>
                    <v-col>
                        <v-card elevation="0" outlined>
                            <v-card-text class="text-center text-h6">
                                Usuarios Totales
                            </v-card-text>
                            <v-card-text class="text-center text-h5 black--text font-weight-medium">
                                {{users_searches[0]}}
                            </v-card-text>
                        </v-card>
                        <v-card elevation="0" outlined>
                            <v-card-text class="text-center text-h6">
                                Veganos
                            </v-card-text>
                            <v-card-text class="text-center text-h5 black--text font-weight-medium">
                                {{users_searches[1]}}
                            </v-card-text>
                        </v-card>
                        <v-card elevation="0" outlined>
                            <v-card-text class="text-center text-h6">
                                Vegetarianos
                            </v-card-text>
                            <v-card-text class="text-center text-h5 black--text font-weight-medium">
                                {{users_searches[2]}}
                            </v-card-text>
                        </v-card>
                        <v-card elevation="0" outlined>
                            <v-card-text class="text-center text-h6">
                                Celíacos
                            </v-card-text>
                            <v-card-text class="text-center text-h5 black--text font-weight-medium">
                                {{users_searches[3]}}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>

</v-container>
</template>

<script>

export default {
    name: 'Estadísticas',

    components: {
        
    },
    data: function () {
        return {
            promociones_activas: [],
            promociones_inactivas: [],
            users_searches:[],
            dataProductTable: [
            ],

            headersProductTable: [{
                    text: 'Nombre',
                    value: 'name'
                },
                {
                    text: 'Búsquedas',
                    value: 'views'
                }
            ],
            series: [{
                name: 'Búsquedas',
                data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
            }],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'line',
                },
                forecastDataPoints: {
                    count: 7
                },
                stroke: {
                    width: 5,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
                    tickAmount: 10,
                    labels: {
                        formatter: function (value, timestamp, opts) {
                            return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                        }
                    }
                },
                title: {
                    text: 'Usuarios que han buscado tus productos',
                    align: 'left',
                    style: {
                        fontSize: "26px",
                        color: '#666'
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: ['#FDD835'],
                        shadeIntensity: 1,
                        type: 'horizontal',
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100, 100, 100]
                    },
                },
                yaxis: {
                    min: -10,
                    max: 40
                }
            },
        }
    },

    created() {
        console.log(this.$store.state.current_user.promociones.filter(e => {return e.state === "Activa"}))
        this.promociones_activas = this.$store.state.current_user.promociones.filter(e => {return e.state === "Activa"});
        this.promociones_inactivas = this.$store.state.current_user.promociones.filter(e => { return e.state === "Inactiva"});

        this.dataProductTable = this.$store.state.current_user.productos.slice(0,4);
        this.users_searches = this.$store.state.current_user.users_searches;
    },
    methods: {

    },
}
</script>
