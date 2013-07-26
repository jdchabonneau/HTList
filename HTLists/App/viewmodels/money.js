define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'Money View'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Money View Activated', null, 'money', true);
        return true;
    }
    //#endregion
});