import angular from 'angular';
import Game from './game/game';
import GlobalEvents from './global-events/global-events';
import Helpers from './helpers/helpers';
import WordBank from './word-bank/word-bank';

let commonModule = angular.module('app.common', [
  Game,
  GlobalEvents,
  Helpers,
  WordBank
])

  .name;

export default commonModule;
