document.getElementById('button1').addEventListener('click',loadData);

document.getElementById('button2').addEventListener('click',loadDatas);

function loadDatas()
{
 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true); //sync call
    //console.log('READYSTATE',xhr.readyState);

    //for spinners or loaders

   // xhr.onprogress = function(){
     //   console.log(xhr.readyState); //will be processing request state
    //}

    xhr.onload = function(){

        if(this.status === 200)
        {
            //console.log(this.responseText);

            const customers = JSON.parse(this.responseText);

           // console.log(customers);
            
            let output = '';

            customers.forEach(function(customer){
                output += `
            <ul>

            <li> ID     : ${customer.id}</li>
            <li>Name    : ${customer.name}</li>
            <li>Company : ${customer.company}</li>
            <li>Phone   : ${customer.phone}</li>

            </ul>`;
            });
            

            console.log(output);
            

            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.onerror = function(){
        console.log("Request err......");
    }

    xhr.send();


}


function loadData(e)
{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true); //sync call
    //console.log('READYSTATE',xhr.readyState);

    //for spinners or loaders

   // xhr.onprogress = function(){
     //   console.log(xhr.readyState); //will be processing request state
    //}

    xhr.onload = function(){

        if(this.status === 200)
        {
            //console.log(this.responseText);

            const customer = JSON.parse(this.responseText);
            const output = `
            <ul>

            <li> ID     : ${customer.id}</li>
            <li>Name    : ${customer.name}</li>
            <li>Company : ${customer.company}</li>
            <li>Phone   : ${customer.phone}</li>
            </ul>
            
            
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.onerror = function(){
        console.log("Request err......");
    }

    xhr.send();


    //e.preventDefault();

}