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

    app.route('/tampil/:id')
        .get(jsonku.tampildatamontirid);

    app.route('/tampilservis')
        .get(jsonku.tampilservis);

    app.route('/tambahmontir')
        .post(jsonku.tambahDataMontir);

    app.route('/tambahsparepart')
        .post(jsonku.tambahDataSparepart);

    app.route('/tambahlevel')
        .post(jsonku.tambahDataLevel);

    app.route('/tambahuser')
        .post(jsonku.tambahuser);

    app.route('/tambahservis')
        .post(jsonku.tambahservis);

    app.route('/ubahmontir')
        .put(jsonku.ubahmontir);

    app.route('/ubahsparepart')
        .put(jsonku.ubahsparepart);

    app.route('/ubahuser')
        .put(jsonku.ubahuser);
        
    app.route('/ubahlevel')
        .put(jsonku.ubahlevel);

    app.route('/ubahservis')
        .put(jsonku.ubahservis);

    app.route('/hapusmontir')
        .delete(jsonku.hapusMontir);

    app.route('/hapussparepart')
        .delete(jsonku.hapusSparepart);

    app.route('/hapususer')
        .delete(jsonku.hapusUSer);

    app.route('/hapuslevel')
        .delete(jsonku.hapusLevel);

    app.route('/hapusservis')
        .delete(jsonku.hapusservis);
}