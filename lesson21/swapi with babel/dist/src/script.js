import { handleFormSumbit } from "./modules/formHandler";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('apiForm');
    form.addEventListener('submit', handleFormSumbit);
});