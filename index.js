const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = (answers) =>
`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <div class="container mw-100 p-3 shadow bg-danger text-white text-center display-4 ">My Team</div>
    <div class="container">
    <div class="row text-center my-4 justify-content-center">
        <div class="col-lg-4 col-md-6">
            <div class="card text-center shadow">
                <div class="card-body p-0">
                    <div class="card-header bg-primary">
                        <h4 class="card-title">${answers.managersName}</h4>
                        <h5 class="card-title">icon + Manager</h5>
                    </div>
                    <button type="button" class="btn btn-light border w-75 mt-3">ID: ${answers.managersID}</button>
                    <button type="button" class="btn btn-light border w-75">Email: ${answers.managersEmail}</button>
                    <button type="button" class="btn btn-light border w-75 mb-3">Phone: ${answers.managersPhone}</button>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card text-center shadow">
                <div class="card-body p-0">
                    <div class="card-header bg-primary">
                        <h4 class="card-title">${answers.employee1name}</h4>
                        <h5 class="card-title">icon + Manager</h5>
                    </div>
                    <button type="button" class="btn btn-light border w-75 mt-3">ID</button>
                    <button type="button" class="btn btn-light border w-75">EMAIL</button>
                    <button type="button" class="btn btn-light border w-75 mb-3">OFFICE #</button>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card text-center shadow">
                <div class="card-body p-0">
                    <div class="card-header bg-primary">
                        <h4 class="card-title">Manager's Name</h4>
                        <h5 class="card-title">icon + Manager</h5>
                    </div>
                    <button type="button" class="btn btn-light border w-75 mt-3">ID</button>
                    <button type="button" class="btn btn-light border w-75">EMAIL</button>
                    <button type="button" class="btn btn-light border w-75 mb-3">OFFICE #</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row text-center my-4 justify-content-center">
        <div class="col-lg-4 col-md-6">
            <div class="card text-center shadow">
                <div class="card-body p-0">
                    <div class="card-header bg-primary">
                        <h4 class="card-title">Manager's Name</h4>
                        <h5 class="card-title">icon + Manager</h5>
                    </div>
                    <button type="button" class="btn btn-light border w-75 mt-3">ID</button>
                    <button type="button" class="btn btn-light border w-75">EMAIL</button>
                    <button type="button" class="btn btn-light border w-75 mb-3">OFFICE #</button>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card text-center shadow">
                <div class="card-body p-0">
                    <div class="card-header bg-primary">
                        <h4 class="card-title">Manager's Name</h4>
                        <h5 class="card-title">icon + Manager</h5>
                    </div>
                    <button type="button" class="btn btn-light border w-75 mt-3">ID</button>
                    <button type="button" class="btn btn-light border w-75">EMAIL</button>
                    <button type="button" class="btn btn-light border w-75 mb-3">OFFICE #</button>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="index.js"></script>
</body>
</html>

`
inquirer.prompt([
    {
        type: "input",
        message: "Please type in the manager's name",
        name: "managersName"
    },
    {
        type: "input",
        message: "Manager's employee ID",
        name: "managersID"
    },
    {
        type: "input",
        message: "Manager's email",
        name: "managersEmail"
    },
    {
        type: "input",
        message: "Manager's office phone number",
        name: "managersPhone"
    },
    {
        type: "list",
        message: "Select a team-member role for next team-member card",
        choices:["Engineer", "Intern"],
        name:"nextEmployeeRole",
        // when: function(){ }
    },
    {
       type: "input",
       message: "Please type in team-member's name",
       name: "employee1name"
    },
    // {
    //     type: "input",
    //     message: "Manager's name",
    //     name: "managersName"
    // },
    // {
    //     type: "input",
    //     message: "Manager's name",
    //     name: "managersName"
    // },
    // {
    //     type: "input",
    //     message: "Manager's name",
    //     name: "managersName"
    // },
]).then((answers) => {
    // function() {

    // }

    const htmlContent = generateHTML(answers);

    fs.writeFile("index.html", htmlContent, (err) => {
        err ? console.error(err) : console.log("Your html page has been written :)")
    })
})
