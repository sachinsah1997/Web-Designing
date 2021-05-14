        // URL of the json file.
        const URL = "data.json";
        // Fetch the json Object.
        fetch(URL).then(response => response.json()).then(jsonResponse => {
            // Loop through all the book details.
            for (let i = 0; i < jsonResponse.student.length; i++) {

                // retrieved data as table row.
                let row = `<tr>
                    <td>${jsonResponse.student[i].firstName}</td>
                    <td>${jsonResponse.student[i].lastName}</td>
                    <td>${jsonResponse.student[i].rollNo}</td>
                    <td>${jsonResponse.student[i].contactNo}</td>
                    <td>${jsonResponse.student[i].email}</td>
                    <td>${jsonResponse.student[i].address.City} ${jsonResponse.student[i].address.State} ${jsonResponse.student[i].address.Zip}</td>
                    <td>${jsonResponse.student[i].department}</td>
                </tr>`;

                // Append new row in table.
                document.getElementById('student_record').innerHTML += row;
            }
        })
