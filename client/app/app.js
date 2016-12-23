import angular from 'angular';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    Common,
    Components
  ])
  
  .component('app', AppComponent);
