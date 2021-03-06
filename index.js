const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// const outPutFolder = path.resolve(__dirname, "output");
// const htmlFile = path.join(outPutFolder, "team.html");
// const writeCard = require("./template");

const team = [];
// const generateHTML = (answers) => {
//     `
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
//     <title>Document</title>
// </head>
// <body>
//     <div class="container mw-100 p-3 shadow bg-danger text-white text-center display-4 ">My Team</div>
//     <div class="container">
//     <div class="row text-center my-4 justify-content-center">
//         <div class="col-lg-4 col-md-6">
//             <div class="card text-center shadow">
//                 <div class="card-body p-0">
//                     <div class="card-header bg-primary">
//                         <h4 class="card-title">${answers.managersName}</h4>
//                         <h5 class="card-title">icon + Manager</h5>
//                     </div>
//                     <button type="button" class="btn btn-light border w-75 mt-3">ID: ${answers.managersID}</button>
//                     <button type="button" class="btn btn-light border w-75">Email: ${answers.managersEmail}</button>
//                     <button type="button" class="btn btn-light border w-75 mb-3">Phone: ${answers.managersPhone}</button>
//                 </div>
//             </div>
//         </div>
//         <div class="col-lg-4 col-md-6">
//             <div class="card text-center shadow">
//                 <div class="card-body p-0">
//                     <div class="card-header bg-primary">
//                         <h4 class="card-title">${answers.employee1name}</h4>
//                         <h5 class="card-title">icon + Manager</h5>
//                     </div>
//                     <button type="button" class="btn btn-light border w-75 mt-3">ID</button>
//                     <button type="button" class="btn btn-light border w-75">EMAIL</button>
//                     <button type="button" class="btn btn-light border w-75 mb-3">OFFICE #</button>
//                 </div>
//             </div>
//         </div>
//         <div class="col-lg-4 col-md-6">
//             <div class="card text-center shadow">
//                 <div class="card-body p-0">
//                     <div class="card-header bg-primary">
//                         <h4 class="card-title">Manager's Name</h4>
//                         <h5 class="card-title">icon + Manager</h5>
//                     </div>
//                     <button type="button" class="btn btn-light border w-75 mt-3">ID</button>
//                     <button type="button" class="btn btn-light border w-75">EMAIL</button>
//                     <button type="button" class="btn btn-light border w-75 mb-3">OFFICE #</button>
//           </div>
//             </div>      
//         </div>
//     </div>
//     <div class="row text-center my-4 justify-content-center">
//         <div class="col-lg-4 col-md-6">
//             <div class="card text-center shadow">
//                 <div class="card-body p-0">
//                     <div class="card-header bg-primary">
//                         <h4 class="card-title">Manager's Name</h4>
//                         <h5 class="card-title">icon + Manager</h5>
//                     </div>
//                     <button type="button" class="btn btn-light border w-75 mt-3">ID</button>
//                     <button type="button" class="btn btn-light border w-75">EMAIL</button>
//                     <button type="button" class="btn btn-light border w-75 mb-3">OFFICE #</button>
//                 </div>
//             </div>
//         </div>
//         <div class="col-lg-4 col-md-6">
//             <div class="card text-center shadow">
//                 <div class="card-body p-0">
//                     <div class="card-header bg-primary">
//                         <h4 class="card-title">Manager's Name</h4>
//                         <h5 class="card-title">icon + Manager</h5>
//                     </div>
//                     <button type="button" class="btn btn-light border w-75 mt-3">ID</button>
//                     <button type="button" class="btn btn-light border w-75">EMAIL</button>
//                     <button type="button" class="btn btn-light border w-75 mb-3">OFFICE #</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// <script type="text/javascript" src="index.js"></script>
// </body>
// </html>

// `
// };

const askManager = () => {
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
        }]).then((answers) => {
            // New manager obj is created
            const manager = new Manager(answers.managersName, answers.managersID, answers.managersEmail, answers.managersPhone);
            // Push new manager obj to team array
            team.push(manager);
            mainMenu();
        })
}
const askEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Please type in the Engineer's name",
            name: "EngineersName"
        },
        {
            type: "input",
            message: "Engineer's employee ID",
            name: "EngineersID"
        },
        {
            type: "input",
            message: "Engineer's email",
            name: "EngineersEmail"
        },
        {
            type: "input",
            message: "Engineer's GitHub page",
            name: "EngineersGithub"
        }]).then((answers) => {
            console.log(answers);
            const engineer = new Engineer(answers.EngineersName, answers.EngineersID, answers.EngineersEmail, answers.EngineersGithub);
            team.push(engineer);
            mainMenu();
        })
}
const askIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Please type in the Intern's name",
            name: "InternsName"
        },
        {
            type: "input",
            message: "Intern's employee ID",
            name: "InternsID"
        },
        {
            type: "input",
            message: "Intern's email",
            name: "InternsEmail"
        },
        {
            type: "input",
            message: "Intern's school name",
            name: "InternsSchool"
        }]).then((answers) => {
            const intern = new Intern(answers.InternsName, answers.InternsID, answers.InternsEmail, answers.InternsSchool);
            team.push(intern);
            mainMenu();
        })
        console.log(team)
}

askManager();

function mainMenu() {

    inquirer.prompt([
        {
            type: "list",
            message: "Select a team-member role for next team-member card",
            choices: ["Engineer", "Intern", "Finished building team"],
            name: "nextEmployeeRole",
        }
    ]).then(answers => {
        if (answers.nextEmployeeRole === "Engineer") {
            askEngineer();
        }
        if (answers.nextEmployeeRole === "Intern") {
            askIntern();
        }
        if (answers.nextEmployeeRole === "Finished building team") {
            buildTeam();
        }
    }).then("help");
}

function buildTeam() {

    const html =
        `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <title>Document</title>
    </head>
    <body>

    <script type="text/javascript" src="index.js"></script>
    </body>

    </html>
    `
    const testing = require("./src/template");


    fs.writeFile("index.html", html + testing, (err) => {
        err ? console.error(err) : console.log("Your index.html has been created :)")
    })

}


