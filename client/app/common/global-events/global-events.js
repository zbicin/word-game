import angular from 'angular';
import GlobalEventsFactory from './global-events.factory';

let globalEventsModule = angular.module('globalEvents', [])

  .factory('GlobalEvents', GlobalEventsFactory)

  .name;

export default globalEventsModule;
