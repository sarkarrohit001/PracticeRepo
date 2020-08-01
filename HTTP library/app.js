/*
const http = new easyHTTP;

http.get('https://jsonplaceholder.typicode.com/posts',function(err, response)
{
    
if(err)
{
    console.log(err);
}
else{
console.log(response);
}
});


const data = {

    title: "custom post",
    body: "This is a test"

};


http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,response)
{
    if(err)
{
    console.log(err);
}
else{
console.log(response);
}
});



http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,response)
{
    if(err)
{
    console.log(err);
}
else{
console.log(response);
}
});



http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err, response)
{
    
if(err)
{
    console.log(err);
}
else{
console.log(response);
}
});

*/


const http = new easyHTTP;

http.get('https://jsonplaceholder.typicode.com/posts').then(data => console.log(data)).catch(err => console.log(err));



const data = {
    title: "custom post",
    body: "This is a test"
}


http.post('https://jsonplaceholder.typicode.com/posts', data).then(data => console.log(data)).catch(err => console.log(err));

http.put('https://jsonplaceholder.typicode.com/posts/1', data).then(data => console.log(data)).catch(err => console.log(err));


http.delete('https://jsonplaceholder.typicode.com/posts/1').then(data => console.log(data)).catch(err => console.log(err));
