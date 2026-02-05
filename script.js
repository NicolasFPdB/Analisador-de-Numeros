let addBtn = document.getElementById('adicionar');
let analyzeBtn = document.getElementById('analisar');
let article = document.getElementById('analise');
let lista = [];

function addNumber() {
    let num = Number(document.getElementById('numero').value);
    if (lista.includes(num)) {
        alert('Número já adicionado! Insira um número diferente.');
        return;
    }
    if (num < 1 || num > 100) {
        alert('Número inválido! Insira um número entre 1 e 100.');
        return;
    }
    lista.push(Number(num));
    document.getElementById('select').innerHTML += `<option value="${num}">Número: ${num}</option>`;
    article.style.display = 'none';
    document.getElementById('numero').value = '';
    document.getElementById('numero').focus();
    return;
}


function analyzeNumbers() {
    if (lista.length === 0) {
        alert('Adicione números antes de analisar.');
        return;
    } else {
        article.style.display = 'block';
        article.innerHTML = `
        <p>Ao todo, temos ${lista.length} números cadastrados.</p>
        <p>O maior valor informado foi ${Math.max(...lista)}.</p>
        <p>O menor valor informado foi ${Math.min(...lista)}.</p>
        <p>Somando todos os valores, temos ${lista.reduce((a, b) => a + b, 0)}.</p>
        <p>A média dos valores digitados é ${ (lista.reduce((a, b) => a + b, 0) / lista.length).toFixed(2)}.</p>
        `;
        return;
    }
}

addBtn.addEventListener('click', addNumber);
analyzeBtn.addEventListener('click', analyzeNumbers);