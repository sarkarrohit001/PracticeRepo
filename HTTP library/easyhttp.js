
/*

function easyHTTP(){
    this.http = new XMLHttpRequest();

}

easyHTTP.prototype.get = function(url, callback){   // the callback is the callback func for async call

    this.http.open('GET',url, true);

let self = this;

this.http.onload = function(){

    if(self.http.status === 200){

        callback(null,self.http.responseText);

    }
    else{
        callback('Error: '+self.http.status);
    }


}


this.http.send();

}




easyHTTP.prototype.post = function(url, data, callback)
{
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type','application/json');

    let self = this;

    this.http.onload = function(){
        callback(null, self.http.responseText);
    }




    this.http.send(JSON.stringify(data));
}



easyHTTP.prototype.put = function(url, data, callback)
{
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type','application/json');

    let self = this;

    this.http.onload = function(){
        callback(null, self.http.responseText);
    }




    this.http.send(JSON.stringify(data));
}




easyHTTP.prototype.delete = function(url, callback){   // the callback is the callback func for async call

    this.http.open('DELETE',url, true);

let self = this;

this.http.onload = function(){

    if(self.http.status === 200){

        callback(null,"Voila deleted!");

    }
    else{
        callback('Error: '+self.http.status);
    }


}


this.http.send();

}







class easyHTTP{

    get(url)
    {
        return new Promise((resolve,reject) => {

            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

        });
       
    }

        
    post(url, data)
    {
        return new Promise((resolve,reject) => {

            fetch(url, {
                method: 'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

        });
       
    }


    put(url, data)
    {
        return new Promise((resolve,reject) => {

            fetch(url, {
                method: 'PUT',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

        });
       
    }


    put(url)
    {
        return new Promise((resolve,reject) => {

            fetch(url, {
                method: 'DELETE',
                headers:{
                    'Content-type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(() => resolve('VOILA DELETED!'))
            .catch(err => reject(err));

        });
       
    }


    



}

*/



class easyHTTP{

    async get(url)
    {

        const response = await fetch(url);
        const reData = await response.json();
        return reData;
       
    }

        
   async post(url, data)
    {
        
        const response = await fetch(url, {
                method: 'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const reData = await response.json();
        return reData;

        }

       
    


    async put(url, data)
    {
        const response = await fetch(url, {
                method: 'PUT',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const reData = await response.json();
        return reData;

       
    }


    async delete(url)
    {
        
        const response = fetch(url, {
                method: 'DELETE',
                headers:{
                    'Content-type': 'application/json'
                },
            })
            const reData = await "VOILA DELETED!";
            return reData;
    }


    



}



