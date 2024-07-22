
const tableBody = document.querySelector('#dynamicTable tbody');
const infoDiv = document.getElementById('info');

const dataArray = [
    { id: 1, name: 'Juan', age: 28 },
    { id: 2, name: 'Ana', age: 34 },
    { id: 3, name: 'Carlos', age: 23 },
    { id: 4, name: 'María', age: 30 },
    { id: 5, name: 'Luis', age: 26 }
];

 tableBody.innerHTML = ''; // Clear existing rows
    dataArray.forEach(data => {
        const row = document.createElement('tr');

        const cell1 = document.createElement('td');
        cell1.textContent = data.id;
        row.appendChild(cell1);

        const cell2 = document.createElement('td');
        cell2.textContent = data.name;
        row.appendChild(cell2);

        const cell3 = document.createElement('td');
        cell3.textContent = data.age;
        row.appendChild(cell3);

        const cell4 = document.createElement('td');
        const actionBtn = document.createElement('button');
        actionBtn.textContent = 'Mostrar Info';
        actionBtn.addEventListener('click', () => {
            infoDiv.textContent = `ID: ${data.id}, Nombre: ${data.name}, Edad: ${data.age}`;
        });
        cell4.appendChild(actionBtn);
        row.appendChild(cell4);
        tableBody.appendChild(row);
    });
    