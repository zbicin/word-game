import angular from 'angular';
import uiRouter from 'angular-ui-router';
import scoreboardComponent from './scoreboard.component';

let scoreboardModule = angular.module('scoreboard', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('scoreboard', {
      url: '/scoreboard',
      component: 'scoreboard'
    });
})

.component('scoreboard', scoreboardComponent)

.name;

export default scoreboardModule;
