const generateManager = mgrData => {
    return `
    <section class="my-3" id="mgr-info">
        <h2 class="card text-light bg-primary p-2 display-inline-block">Contact Information:</h2>
        <div class="card col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${mgrData.name}</h3>
            <h5 class="portfolio-item-title text-light">${mgrData.role}</h5>
            <p>Employee ID: ${mgrData.id}</p>
            <p>Email: <a class="text-light" href="mailto:${mgrData.email}">${mgrData.email}</a></p>
            <p>Office #: ${mgrData.officeNum}</p>
        </div>
    </section>    
    `
};

const generateEngineers = empData => {
    return `
    <section class="my-3" id="eng-list">
        <h2 class="card text-light bg-primary p-2 display-inline-block">Engineers:</h2>
        <div class="flex-row justify-space-between">
        ${empData
            .filter(emp => emp.role === 'Engineer')
            .map(({name, id, email, role, username}) => {
                return `
                <div class="card col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                    <h3 class="portfolio-item-title text-light">${name}</h3>
                    <h5 class="portfolio-item-title text-light">${role}</h5>
                    <p>Employee ID: ${id}</p>
                    <p>Email: <a class="text-light" href="mailto:${email}">${email}</a></p>
                    <p>GitHub Username: <a class="text-light" href="https://github.com/${username}">${username}</a></p>
                </div>
            `;
            }).join('')}
        </div>
    </section>
    `;
};

const generateInterns = empData => {
    return `
    <section class="my-3" id="intern-list">
        <h2 class="card text-light bg-primary p-2 display-inline-block">Interns:</h2>
        <div class="flex-row justify-space-between">
        ${empData
            .filter(emp => emp.role === 'Intern')
            .map(({name, id, email, role, school}) => {
                return `
                <div class="card col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                    <h3 class="portfolio-item-title text-light">${name}</h3>
                    <h5 class="portfolio-item-title text-light">${role}</h5>
                    <p>Employee ID: ${id}</p>
                    <p>Email: <a class="text-light" href="mailto:${email}">${email}</a></p>
                    <p>School: ${school}</p>
                </div>
            `;
            }).join('')}
        </div>
    </section>
    `;
};

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Employee Directory</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflar.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary text-light py-2 px-3">Employee Directory</h1>
                <nav class="flex-row">
                    <a class="ml-2 my-1 px-2 py-1 text-light" href="#mgr-info">Your Info</a>
                    <a class="ml-2 my-1 px-2 py-1 text-light" href="#eng-list">Engineers</a>
                    <a class="ml-2 my-1 px-2 py-1 text-light" href="#intern-list">Interns</a>
                </nav>
            </div>
        </header>
        <main class="container my-5">
        ${generateManager(templateData)}
        ${generateEngineers(templateData.employees)}
        ${generateInterns(templateData.employees)}
        </main>
        <footer class="constainer text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by r0yster</h3>
        </footer>
    </body>
    </html>
    `;
};