var mysql = requiere('mysql');

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'password',
    database : 'sakira'
  });
  
  conexion.connect(function(error){
    if(error){
        throw error;
        }else{
            console.log('conexion exitosa');

    }
  });

  conexion.query('SELECT * from address', function(error,results, fields){
    if(error)
    throw error;

    results.forEach(result => {
        console.log(result);
    });
  });

  conexion.end();
