 // retrieve searched keyword from URL.
 let params = new URLSearchParams(window.location.search);
 const searchKey = params.get('search');

 // JSON data file url
 const URL = "data.json";

//let title = document.getElementById('title');
//let content = document.getElementById('content');

var searchFlag = true;
     fetch(URL).then(response => response.json()).then(jsonResponse => {
        var searchFlag = true;

        // Iteratation over data    
        for (let i = 0; i < jsonResponse.data.length; i++) {
           // Compare        
            if (searchKey == jsonResponse.data[i].keyword) {
                searchFlag = false;
                
                console.log(jsonResponse.data[i].description);

             //Show the details.
             document.getElementById('title').innerHTML = '<h1>' + searchKey +'</h1>';
             document.getElementById('content').innerHTML = '<h3>' + jsonResponse.data[i].description + '</h3>';
         }
     }

     // If keyword not found in JSON file.
     if (searchFlag) {
         content.innerHTML = '<h1>Ooops!</h1> NOT FOUND';
     }
 })