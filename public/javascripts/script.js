$(document).ready(function () {
    alert('Your using a project of LokotamaTheMastermind\n\n© 2021 LokotamaTheMastermind');
});

function getBattery(params) {
    var batteryPromise = navigator.getBattery();
    batteryPromise.then(batteryCallback);

    function batteryCallback(batteryObject) {
        printBatteryStatus(batteryObject);

        batteryObject.addEventListener('chargingchange', function (ev) {
            printBatteryStatus(batteryObject);
        });
        batteryObject.addEventListener('levelchange', function (ev) {
            printBatteryStatus(batteryObject);
        });
    }
    function printBatteryStatus(batteryObject) {
        p = document.getElementById('batteryStatus').innerHTML = "~" + Math.round(batteryObject.level * 100) + "%";
    }
}