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
            if (row.status == 1) {
                return 'color-complete';
            } else if (row.status == 2) {
                return 'color-closed';
            } else {
                return 'color-default';
            }
        }
    });
});
