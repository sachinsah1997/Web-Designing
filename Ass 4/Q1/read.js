 // URL of the XML file.
 const URL = "data.xml";
 // Fetch the XML as text.
 fetch(URL).then(response => response.text()).then(data => {
     // Table from the HTML document.
     let table = document.getElementById('student_record');

     // Parsing XML file.
     let parser = new DOMParser();
     let xmlData = parser.parseFromString(data, "text/xml");
     // Quering the XML with student.
     let students = xmlData.querySelectorAll('student');

     // Loop through all the student details.
     for (let i = 0; i < students.length; i++) {
         // each student details.
         let student = students[i];

         // Log
         console.log(student.children[0].innerHTML);
         console.log(student.children[1].innerHTML);
         console.log(student.children[2].innerHTML);
         console.log(student.children[3].innerHTML);
         console.log(student.children[4].innerHTML);
         console.log(student.children[5].innerHTML);
         console.log(student.children[6].innerHTML);
         

         // New table row.
         let row = `<tr align="center">
             <td>${student.children[0].innerHTML}</td>
             <td>${student.children[1].innerHTML}</td>
             <td>${student.children[2].innerHTML}</td>
             <td>${student.children[3].innerHTML}</td>
             <td>${student.children[4].innerHTML}</td>
             <td>${student.children[5].innerHTML}</td>
             <td>${student.children[6].innerHTML}</td>
         </tr>`;

         // Append new row in table.
         table.innerHTML += row;
     }
 })