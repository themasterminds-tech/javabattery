"use strict";

var battery = require('battery');

async () => {
    let {
        level,
        charging
    } = await battery();
    console.log('Battery level is ' + level);
    console.log('Battery charging is ' + charging);
};