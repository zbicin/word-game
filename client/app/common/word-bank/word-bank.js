import angular from 'angular';
import helpersModule from '../helpers/helpers';
import WordBankService from './word-bank.service';

let wordBankModule = angular.module('wordBank', [helpersModule])

.service('WordBank', WordBankService)

.name;

export default wordBankModule;