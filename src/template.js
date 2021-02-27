const Employee = require("../lib/Employee")

const generateTeam = (team) => {
    const generateManager = (manager) => {
        return `
        <div class="card text-center shadow">
        <div class="card-body p-0">
            <div class="card-header bg-primary">
                <h4 class="card-title">${manager.managersName}</h4>
                <h5 class="card-title">icon + Manager</h5>
            </div>
            <button type="button" class="btn btn-light border w-75 mt-3">ID: ${manager.managersID}</button>
            <button type="button" class="btn btn-light border w-75">Email: ${manager.managersEmail}</button>
            <button type="button" class="btn btn-light border w-75 mb-3">Phone: ${manager.managersPhone}</button>
        </div>
    </div>
 `

    }
    const html = [];
    let certMember = team.filter(employee => employee.getRole() === "Manager")
    html.push(certMember)
    console.log(html)
    // html.push(team.filter(employee => employee.getRole() === "Manager")).map(manager => generateManager(manager));
    // const generateEngineer = ()
    
}

module.exports = team => {
    return `
        <div class="container mw-100 p-3 shadow bg-danger text-white text-center display-4 ">My Team</div>
        <div class="container">
        <div class="row text-center my-4 justify-content-center">
            <div class="col-lg-4 col-md-6">
            ${generateTeam(team)}
            </div>
        </div>
        </div>  
`
};
