import angular from 'angular';
import HelpersFactory from './helpers.factory';

let helpersModule = angular.module('helpers', [])

.factory('Helpers', HelpersFactory)

.name;

export default helpersModule;