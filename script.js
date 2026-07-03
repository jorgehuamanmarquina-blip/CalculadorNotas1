function calcularPromedio(cursoId) {
    let total = 0;
    let pesoTotal = 0;
    const filas = document.querySelectorAll(`#curso-${cursoId} .nota-row`);
    
    filas.forEach(row => {
        const nota = parseFloat(row.querySelector('.nota').value) || 0;
        const peso = parseFloat(row.querySelector('.peso').value) || 0;
        total += (nota * (peso / 100));
        pesoTotal += peso;
    });

    document.getElementById(`promedio-${cursoId}`).innerText = total.toFixed(2);
    document.getElementById(`peso-total-${cursoId}`).innerText = pesoTotal + "%";
}

function agregarCurso() {
    const container = document.getElementById('cursos-container');
    const id = Date.now();
    container.innerHTML += `
        <div id="curso-${id}" class="curso-box">
            <input type="text" placeholder="Nombre del Curso">
            <table>
                <tr><th>Nota</th><th>Peso (%)</th></tr>
                <tr class="nota-row">
                    <td><input type="number" class="nota" oninput="calcularPromedio(${id})"></td>
                    <td><input type="number" class="peso" oninput="calcularPromedio(${id})"></td>
                </tr>
            </table>
            <p>Promedio: <span id="promedio-${id}">0</span> | Suma Peso: <span id="peso-total-${id}">0%</span></p>
        </div>
    `;
}
