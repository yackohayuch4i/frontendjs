"use strict";

var _formHandler = require("./modules/formHandler");
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('apiForm');
  form.addEventListener('submit', _formHandler.handleFormSumbit);
});