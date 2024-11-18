import { fetchData } from './fetchData';
import { showLoader, hideLoader } from './loader';

export function handleFormSumbit() {
    event.preventDefault();

    const form = event.target;
    const action = form.action.trim();
    const endpoint = form.endpoint.value.trim();
    const url = `${action}/${endpoint}`;

    showLoader();
    fetchData(url).then(data => {
        hideLoader();
        displayResults(data);
    }).catch(error => {
        hideLoader();
        displayResults(error);
    });
}

function displayResults(data) {
    const results = document.getElementById('results');
    results.innerHTML = ` 
        <div>ID: ${data.id || 'N/A'}
        </div> <div>Controller: ${data.controller || 'N/A'}</div> 
        <pre>${JSON.stringify(data, null, 2)}</pre> 
    `;
}

function displayError(error) {
    const results = document.getElementById('results');
    results.innerHTML = `<div class="error">Error: ${error.message}</div>`;
}
