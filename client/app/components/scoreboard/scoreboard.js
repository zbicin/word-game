import angular from 'angular';
import scoreboardComponent from './scoreboard.component';

let scoreboardModule = angular.module('scoreboard', [])

  .component('scoreboard', scoreboardComponent)

  .name;

export default scoreboardModule;
