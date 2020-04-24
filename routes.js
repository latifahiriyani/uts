'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuamontir);

    app.route('/tampilsparepart')
        .get(jsonku.tampilsemuaparepart);

    app.route('/tambahmontir')
        .post(jsonku.tambahDataMontir);
}