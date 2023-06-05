import { getEstudiantes } from "./API.js";

addEventListener('DOMContentLoaded', cargarEstudiantes);


async function cargarEstudiantes(){
    const tablaEstudaintes = document.querySelector('#tabla')
    const estudiantes = await getEstudiantes();
    console.log(estudiantes);
    estudiantes.forEach(element => {
        tablaEstudaintes.innerHTML += `
        <tr class="cards" nombre="${element.nombre}" imagen="${element.imagen}" especialidad="${element.especialidad}" edad="${element.edad}" promedio="${element.promedio}" nivelCAmpus="${element.nivelCAmpus}" nivelIngles="${element.nivelIngles}" direccion="${element.direccion}" celular="${element.celular}" ingles="${element.ingles}" Ser="${element.Ser}" Review="${element.Review}" Skills="${element.Skills}" Asistencia="${element.Asitencia}">
            
        <th scope="row" id="${element.id}">${element.id}</th>
            <td id="${element.id}">${element.nombre}</td>
            <td id="${element.id}">${element.especialidad}</td>
            <td id="${element.id}"><img src="images/${element.imagen}" alt=""></td>
            <td id="${element.id}"><button class="btn btn-info">Notas</button></td>
        </tr>`
    });
    
}
detalles();

function detalles(e) {
    const tablaEstudaintes = document.querySelector('#tabla');
    tablaEstudaintes.addEventListener('click',(e)=>{
        
        if (e.target.getAttribute('id')){
            const atributos = e.target.getAttribute('id');
            const elemento = document.getElementById(atributos);
            const padre = elemento.parentNode;
            console.log(padre);
            const imagen = padre.getAttribute('imagen');
            const nombre = padre.getAttribute('nombre');
            const especialidad = padre.getAttribute('especialidad');
            const edad = padre.getAttribute('edad');
            const promedio = padre.getAttribute('promedio');
            const nivelCAmpus = padre.getAttribute('nivelCAmpus');
            const nivelIngles = padre.getAttribute('nivelIngles');
            const direccion = padre.getAttribute('direccion');
            const celular = padre.getAttribute('celular');

            const ingles = padre.getAttribute('ingles');
            const Ser = padre.getAttribute('Ser');
            const Review = padre.getAttribute('Review');
            const Skills = padre.getAttribute('Skills');
            const Asistencia = padre.getAttribute('Asistencia');
            
            const detalles = document.querySelector('#detalles');
            detalles.innerHTML =`` 
            detalles.innerHTML =`
            <div class="contanerDetalles">
              <div class="datos">
                <div class="d-flex"><img src="images/${imagen}" alt="" class="m-2"><button type="button" class=" delete btn btn-danger" style="height: 40px;">Eliminar</button></div>
                <h5>Nombre:${nombre}</h5>
                <h5>Edad:${edad}</h5>
                <h5>Promedio:${promedio}</h5>
                <h5>Nivel:${nivelCAmpus}</h5>
                <h5>Ingles:${nivelIngles}</h5>
                <h5>Especialidad:${especialidad}</h5>
                <h5>Direccion:${direccion}</h5>
                <h5 style="background-color: rgb(255, 183, 0);">Celular:${celular}</h5>
              </div>
            </div>
            <div id="charts1" class="charts"></div>
            ` 
            const getOpcionCharts1 = () =>{
                let value1 = parseFloat(ingles)
                let value2 = parseFloat(Ser)
                let value3 = parseFloat(Review)
                let value4 = parseFloat(Skills)
                let value5 = parseFloat(Asistencia)
                console.log(value5);
                return {
                    tooltip: {
                      trigger: 'item'
                    },
                    legend: {
                      top: '5%',
                      left: 'center',
                      // doesn't perfectly work with our tricks, disable it
                      selectedMode: false
                    },
                    series: [
                      {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['50%', '70%'],
                        // adjust the start angle
                        startAngle: 180,
                        label: {
                          show: true,
                          formatter(param) {
                            // correct the percentage
                            return param.name + ' (' + param.percent * 2 + '%)';
                          }
                        },
                        data: [
                          { value: value1, name: 'Ingles' },
                          { value: value2, name: 'Ser' },
                          { value: value3, name: 'Review' },
                          { value: value4, name: 'Skills' },
                          { value: value5, name: 'Asistencia' },
                          {
                            // make an record to fill the bottom 50%
                            value: value1+value2+value3+value4+value5,
                            itemStyle: {
                              // stop the chart from rendering this piece
                              color: 'none',
                              decal: {
                                symbol: 'none'
                              }
                            },
                            label: {
                              show: false
                            }
                          }
                        ]
                      }
                    ]
                  };
            }

            const charts1 = echarts. init(document.getElementById('charts1'));
            charts1.setOption(getOpcionCharts1());
        }
    });
}