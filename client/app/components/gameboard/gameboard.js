import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gameboardComponent from './gameboard.component';
import Game from '../../common/game/game';

let gameboardModule = angular.module('gameboard', [
  uiRouter,
  Game
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
