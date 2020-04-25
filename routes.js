'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuamontir);

    app.route('/tampilsparepart')
        .get(jsonku.tampilsemuaparepart);

    app.route('/tampilsparepart/:id')
        .get(jsonku.tampildatasparepartid);



    app.route('/tambahmontir')
        .post(jsonku.tambahDataMontir);

    app.route('/tambahsparepart')
        .post(jsonku.tambahDataSparepart);

    app.route('/tambahlevel')
        .post(jsonku.tambahDataLevel);


}