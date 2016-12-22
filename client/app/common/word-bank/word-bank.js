import angular from 'angular';
import WordBankService from './word-bank.service';

let wordBankModule = angular.module('wordBank', [])

.service('WordBank', WordBankService)

.name;

export default wordBankModule;