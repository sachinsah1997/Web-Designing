 // Function to validate and redirect to output page.
 function search() {
    // extracting keyword.
    var searchKey = document.getElementById('search_bar').value.trim().toLowerCase();
    // If not empty then redirect to the result page.
    if ('' != searchKey){
        window.location.href = 'output.html?search=' + searchKey;
    }else{
        alert("Please Enter any keyword !");
    }
} 