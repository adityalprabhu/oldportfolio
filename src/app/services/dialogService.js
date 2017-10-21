/**
 * Created by prabhadi on 05-Aug-15.
 */


app.factory('DS', ['$rootScope', '$dialogs', function ($rootScope, $dialogs,$modalInstance) {
    var service = {};

    service.confirmDialog = function (msg) {
        var loader_opts = {
            'backdrop': 'static',
            'size': 'sm',
            'windowClass': 'align-modal-dialog'
        };
        var alertInfo = {
            id: 0,
            msg: msg,
            type: 'warning',
            fromPage: 'error'
        };
        $dialogs.create('src/app/sections/confirm/confirm.modal.tpl.html', 'ConfirmCtrl', alertInfo, loader_opts);
    };

    service.displayDialogue = function (msg) {
        var loader_opts = {
            'backdrop': 'static',
            'size': 'sm',
            'windowClass': 'align-modal-dialog'
        };
        var alertInfo = {
            id: 0,
            msg: msg,
            type: 'warning',
            fromPage: 'dispDialog'
        };
        $dialogs.create('src/app/sections/confirm/confirm.modal.tpl.html', 'ConfirmCtrl', alertInfo, loader_opts);
    };


    service.loaderDialog = function (status) {
        if(status == 'open' ){

            var loader_opts = {
                'backdrop': 'static',
                'size': 'sm',
                'windowClass': 'align-modal-dialog'
            };

            var alertInfo = {
                id:0,
                msg: '',
                type: 'warning',
                fromPage : 'processing'
            };
            $rootScope.loaderDialog = $dialogs.create('src/app/sections/confirm/confirm.modal.tpl.html','ConfirmCtrl', alertInfo, loader_opts);
        }else{
            $rootScope.loaderDialog.close();
        }};

    service.loginDialog = function () {

        var loader_opts = {
            'backdrop': 'static',
            'size': 'sm',
            'windowClass': 'align-modal-dialog'
        };

        var alertInfo = {
            id:0,
            msg: '',
            type: 'warning',
            fromPage : 'login'
        };
        $dialogs.create('src/app/sections/login/login.modal.tpl.html', 'loginCtrl', alertInfo, loader_opts);
    };


    return service;
}]);

