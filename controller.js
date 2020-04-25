'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API ku berjalan",res)
};

//menampilkan semua data montir
exports.tampilsemuamontir = function(req,res){
    connection.query('SELECT * FROM t_montir', function(error, rows, fileds){
        if(error){
            console.log(error);
        }else {
            response.ok(rows,res)
     }

    });  
};

//menampilkan semua data sparepart
exports.tampilsemuaparepart = function(req,res){
    connection.query('SELECT * FROM t_sparepart',function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res)
        }
    });
};

//menampilkan data sparepart berdasarkan id
exports.tampildatasparepartid = function (req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res);
        }
    });
};


//menambah data montir
exports.tambahDataMontir = function (req, res) {
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO t_montir (nama_montir,harga_perjam) VALUES(?,?)',
        [nama_montir, harga_perjam],
        function (error, rows, fields) {
            if (error){
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data Montir", res)
            }
        });

};

//menambahkan data sparepart
exports.tambahDataSparepart = function (req, res) {
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('INSERT INTO t_sparepart (nama_sparepart,harga_sparepart,satuan) VALUES(?,?,?)',
    [nama_sparepart,harga_sparepart,satuan],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data Sparepart", res)
        }
    });
};


//menambah data level
exports.tambahDataLevel = function (req, res) {
    var nama_level = req.body.nama_level;
    var role = req.body.role;

    connection.query('INSERT INTO t_level (nama_level,role) VALUES(?,?)',
    [nama_level,role],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        }else {
            response.ok("Berhasil Menambahkan Data Level", res)
        }
    });
};

