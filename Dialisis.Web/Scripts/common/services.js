NotificationService = function() {
    this.processErrorResponse = function (e) {
        var msg = '';
        if (e !== null) {
            if (typeof e.data === 'object' && e.data !== null) {
                if (e.data.hasOwnProperty('message')) msg += e.data.message;
                if (e.data.hasOwnProperty('exceptionMessage')) msg += '<br/>Exception: ' + e.data.exceptionMessage;
                if (e.data.hasOwnProperty('innerException') && e.data.innerException.hasOwnProperty('exceptionMessage')) msg += '<br/>InnerException: ' + e.data.innerException.exceptionMessage;
            }
            else if (typeof e.data === 'string') {
                msg = e.data;
            }
        }
        if (msg === '')
            msg = e.statusText;
        return msg;
    };

    this.success = function (msg, title) {
        if (typeof msg === 'undefined')
            toastr.success('Correcto');
        else {
            if (typeof title === 'undefined')
                title = 'Correcto';
            toastr.success(msg, title);
        }
    };

    this.error = function (msg, title) {
        if (typeof msg === 'undefined')
            toastr.error('Error');
        else {
            if (typeof title === 'undefined')
                title = 'Error';
            if (typeof msg === 'string')
                toastr.error(msg, title);
            else {
                msg = this.processErrorResponse(msg);
                toastr.error(msg, title);
            }

        }
    };

    this.warning = function (msg, title) {
        if (typeof msg === 'undefined')
            toastr.warning('Advertencia');
        else {
            if (typeof title === 'undefined')
                title = 'Advertencia';
            toastr.warning(msg, title);
        }
    };

    this.alert = function (msg, title) {
        if (typeof msg === 'undefined')
            toastr.info('Información');
        else {
            if (typeof title === 'undefined')
                toastr.info(msg, title);
            else
                toastr.info(msg);
        }
    };
};

var NotificationMsg = new NotificationService();