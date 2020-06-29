var request = require('request');
counter = 0 ;
request(
    {
        rejectUnauthorized: false, 
        url : "https://backtosurvey.smart2survey.fr/api/users"
    },
    function (error, response, body) {
        if(error){
            console.log(error);
        }else{
            //console.log(JSON.parse(body))
            var Json = JSON.parse(body)
            for(var i=0; i<Json.length;i++){
                counter ++
            }
        }
        console.log(Json);
        sender()
    }
    
    );
    
    function sender(){
        const gekoq = require('gekoq');
        const push = gekoq('768e7f5894bbb4d4989f9c4f95d948c9');//Geckoboard API Key
        push({
            key: '186163-45b71ef0-9c3a-0138-af4c-0e34b02daa39',//Widget Key
            data: { 
                "item": counter,
                "min": {
                  "value": 0
                },
                "max": {
                  "value": 30
                }
             }
            })
            .then(response => console.log(response));
        }

    
