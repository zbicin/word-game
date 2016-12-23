import angular from 'angular';
import summaryComponent from './summary.component';

let summaryModule = angular.module('summary', [])

  .component('summary', summaryComponent)

  .name;

export default summaryModule;
