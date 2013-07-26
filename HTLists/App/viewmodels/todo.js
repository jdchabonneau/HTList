define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'ToDo View'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('ToDo View Activated', null, 'details', true);
        return true;
    }
    //#endregion
});