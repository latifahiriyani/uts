'use strict';

exports.ok = function(values, res){
    var date = {
        'status':200,
        'values':values
    };

    res.json(data);
    res.end();
}