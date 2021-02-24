const generateTeam = (team) => {
    const generateManager = (manager) => {
        return `
        <div class="card text-center shadow">
        <div class="card-body p-0">
            <div clasrs="card-header bg-primary">
                <h4 class="card-title">${answers.managersName}</h4>
                <h5 class="card-title">icon + Manager</h5>
            </div>
            <button type="button" class="btn btn-light border w-75 mt-3">ID: ${answers.managersID}</button>
            <button type="button" class="btn btn-light border w-75">Email: ${answers.managersEmail}</button>
            <button type="button" class="btn btn-light border w-75 mb-3">Phone: ${answers.managersPhone}</button>
        </div>
    </div>
</div>`

    }
    const html = [];
    html.push(team.filter(employee => employee.getRole() === "Manager")).map(manager => generateManager(manager));
}
module.exports = (team) => {
    return `
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
            ${generateTeam(team)}
            </div>
        </div>
        </div>
        <script type="text/javascript" src="index.js"></script>
    </body>
    </html>   
`
}