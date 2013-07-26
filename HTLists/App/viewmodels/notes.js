define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'Notes View'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Notes View Activated', null, 'notes', true);
        return true;
    }
    //#endregion
});