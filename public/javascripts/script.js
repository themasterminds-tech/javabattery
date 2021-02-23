$(document).ready(function () {
    $('#batteryStatusIcon').hover(function () {
        $(this).removeClass('fa-battery-empty');
        $(this).addClass('fa-battery-full');
    }, function () {
        $(this).removeClass('fa-battery-full');
        $(this).addClass('fa-battery-empty');
    }
    );
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
        })
    }
    function printBatteryStatus(batteryObject) {
        p = document.getElementById('batteryStatus').innerHTML = (batteryObject.level * 100) + "%";
    }
}