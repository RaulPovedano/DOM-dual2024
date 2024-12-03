/*
--------DATA EJEMPLO--------
const data = [
{nombre: "Juan", edad: 25, email: juan@gmail.com}
{nombre: "Ana", edad: 30, email: ana@gmail.com}
]
*/



const dynamicTable = (data, headers) =>{
    //crear tabla

    const table =document.createElement('table');
    table.id = 'table-data-users';
    table.style.border = 1;

    //creamos thead
    const thead =document.createElement('thead');
    //creamos el tr
    const headerRow = document.createElement("tr")
    //recorremos los headers

    headers.forEach(header => {
        const th = document.createElement("th")
        th.textContent = header
        //----------SI QUEREMOS QUE AL HACER CLICK ORDENE LA TABLA----------

        //SE HACE AQUI LA LOGICA

        //aañadimos cafda th al tr
        headerRow.appendChild(th)

        //Creamos tbody
        const tbody = document.createElement("tbody")
        //limpiamos la tabla
        tbody.innerHTML="";
        //recorremos los datos
        data.forEach((user) => {
            //creamos cada tr
            const trUser = document.createElement("tr")
            trUser.innerHTML = 
            `<td>${user.nombre}</td>`
            `<td>${user.edad}</td>`
            `<td>${user.email}</td>`

            //OTRA FORMA. si quiero utilizar bucle para recorrer las propiedades de cada Objeto
            //IYECTAMOS LAS TR AL TBODY
            tbody.appendChild(trUser)
        });

        //añadimos el thead y el tbody al table

        table.append(thead,tbody)
        return table
    });

}