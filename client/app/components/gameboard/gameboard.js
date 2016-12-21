import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gameboardComponent from './gameboard.component';
import Player from '../../common/player/player';

let gameboardModule = angular.module('gameboard', [
  uiRouter,
  Player
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('gameboard', {
      url: '/gameboard',
      component: 'gameboard'
    });
})

.component('gameboard', gameboardComponent)
  
.name;

export default gameboardModule;
