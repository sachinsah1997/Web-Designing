 // retrieve searched keyword from URL.
 let params = new URLSearchParams(window.location.search);
 const searchKey = params.get('search');

 // XML data file.
 const URL = "data.xml";
 // Fetch the XML as text.
 fetch(URL).then(response => response.text()).then(data => {
     let title = document.getElementById('title');
     let content = document.getElementById('content');

     // Parsing XML file.
     let parser = new DOMParser();
     let xmlData = parser.parseFromString(data, "text/xml");
     // Quering the XML with data.
     let searchDataSets = xmlData.querySelectorAll('data');

     var searchFlag = true;
     // Loop through all the details.
     for (let i = 0; i < searchDataSets.length; i++) {
         let searchData = searchDataSets[i];
         // Compare
         if (searchData.children[0].innerHTML == searchKey) {
             searchFlag = false;

             // Show the details.
             title.innerHTML = '<h1>' + searchKey +'</h1>';
             content.innerHTML = '<h3>' + searchData.children[1].innerHTML + '</h3>';
         }
     }

     // If keyword not found in XML.
     if (searchFlag) {
         console.log('NOT FOUND!');
         content.innerHTML = '<h1>Ooops!</h1> NOT FOUND';
     }
 })