define([
    'underscore',
    'Magento_Ui/js/grid/columns/select'
], function(_, Column) {
    'use strict';

    return Column.extend({
        defaults: {
            bodyTmpl: 'DSNW_StatusColor/ui/grid/cells/text'
        },
        getStatusColor: function (row) {
            debugger
            if (row.status == 'pending') {
                return 'color-pending';
            } else if (row.status == 'processing') {
                return 'color-processing';
            } else if (row.status == 'complete') {
                return 'color-complete';
            } else if (row.status == 'closed' || row.status == 'canceled') {
                return 'color-closed';
            } else {
                return 'color-default';
            }
        }
    });
});
