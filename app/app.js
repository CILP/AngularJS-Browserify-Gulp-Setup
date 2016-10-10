require('angular');
var mainCtrl = require('./controllers/main.controller.js');

angular.module('app', []).controller('MainCtrl', ['$scope', mainCtrl]);