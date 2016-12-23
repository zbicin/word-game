import angular from 'angular';
import globalEventsModule from '../global-events/global-events';
import helpersModule from '../helpers/helpers';
import wordBankModule from '../word-bank/word-bank';
import GameService from './game.service';

let gameModule = angular.module('game', [
    globalEventsModule,
    helpersModule,
    wordBankModule
])

.service('Game', GameService)

.name;

export default gameModule;