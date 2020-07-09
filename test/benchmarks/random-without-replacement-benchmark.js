'use strict';

const Shufller = require('../../shuffler');
const Benchmark = require('benchmark');


const versions = [
    { size: 40, meta: 1 },
    { size: 30, meta: 2 },
    { size: 10, meta: 3 },
    { size: 15, meta: 4 },
    { size: 5,  meta: 5 }
];

const shuffler = new Shufller({ versions });

const suite = new Benchmark.Suite;

// Add Tests
suite
.add('randomWithoutReplacementUsingFilter', function() {
    shuffler.randomWithoutReplacementUsingFilter(3);
})
.add('randomWithoutReplacement', function() {
    shuffler.randomWithoutReplacement(3);
})
// Add listeners
.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });

