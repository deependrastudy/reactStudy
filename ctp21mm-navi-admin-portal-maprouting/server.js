const express = require('express');
const randomId = require('random-id');
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"express_api"
});

const app = express(),
      bodyParser = require("body-parser"),
      fs = require('fs'),
      port = 8000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');

// place holder for the data

app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

app.post('/api/todo', (req, res) => {
   const task = req.body.task;
   task.id = randomId(10);
   tasks.push(task);
   res.json(tasks);
});
app.get('/hugroute/services/routetable', (req,res) => {
  con.query("SELECT routetables.servicename,routetables.region,routetables.ttl,routetables.isDR,inetgrationcurrent.primaryroute as inetgrationcurrentprimary,inetgrationcurrent.failover as inetgrationcurrentfailover,integrationdesired.primaryroute as integrationdesiredprimary,integrationdesired.failover as integrationdesiredfailover  FROM routetables LEFT JOIN inetgrationcurrent on routetables.id = inetgrationcurrent.route  LEFT JOIN integrationdesired on routetables.id = integrationdesired.route", function (err, result, fields) {
    if (err) throw err;
    let resp = [];
    result.map((item)=>{
      resp.push({
        "servicename": item.servicename,
        "region": item.region,
        "ttl": item.ttl,
        "isDR": item.isDR,
        "integrationdesired": {
          "primary": item.inetgrationcurrentprimary,
          "failover": item.inetgrationcurrentfailover
        },
        "inetgrationcurrent": {
          "primary": item.integrationdesiredprimary,
          "failover": item.integrationdesiredfailover
        }
      });
    })
    res.json(resp);
  });
 });
app.patch('/hugroute/services/routetable/:servicename', (req, res) => {
  con.query("SELECT routetables.servicename,routetables.region,routetables.ttl,routetables.isDR,inetgrationcurrent.primaryroute as inetgrationcurrentprimary,inetgrationcurrent.failover as inetgrationcurrentfailover,integrationdesired.primaryroute as integrationdesiredprimary,integrationdesired.failover as integrationdesiredfailover  FROM routetables LEFT JOIN inetgrationcurrent on routetables.id = inetgrationcurrent.route  LEFT JOIN integrationdesired on routetables.id = integrationdesired.route where routetables.servicename = '"+req.body.servicename+"'", function (err, result, fields) {
    if (err) throw err; 
   if(result.length>0) {
    res.json({
      "servicename": result[0].servicename,
      "region": result[0].region,
      "ttl": result[0].ttl,
      "isDR": result[0].isDR,
      "integrationdesired": {
        "primary": result[0].inetgrationcurrentprimary,
        "failover": result[0].inetgrationcurrentfailover
      },
      "inetgrationcurrent": {
        "primary": result[0].integrationdesiredprimary,
        "failover": result[0].integrationdesiredfailover
      }
    });
    } else {
      res.sendStatus(404);
    }
  });
})

app.get('/', (req,res) => {
  res.redirect(301, '/docs');
});
app.listen(port, () => {
    console.log(`Server listening on the port::::::${port}`);
});