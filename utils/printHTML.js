function printHTML(wageSlaves) {
    let user = "";
    for (i = 0; i < wageSlaves.length; i++) {
        if (waveSlaves[i].role === 'Manager') {
            user += `
            <div class="container">
            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top"
                        src="https://www.tvinsider.com/wp-content/uploads/2020/07/parks-and-rec-leslie-knope-featured-1014x570.jpg"
                        alt="Card image">
                    <div class="card-body">
                        <div class="card-body text-left">
                        <h4 class="card-title">${manager.fullName}</h4>
                        <h5 class="card-title">${manager.role}</h5>
                        <p class="card-text">ID: ${manager.id}</p>
                        <p class="card-text">Office: ${manager.officeNumber}</p>
                        <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    </div>
                </div>
            </div>`

        } else if (wageSlaves[i].role === 'Engineer') {
            user += `
            <div class="card">
                <img class="card-img-top"
                    src="https://www.incimages.com/uploaded_files/image/1920x1080/parks-and-recreation_32716.jpg"
                    alt="Card image">
                <div class="card-body">
                    <div class="card-body text-left">
                    <h4 class="card-title">${engineer.fullName}</h4>
                    <h5 class="card-title">${engineer.role}</h5>
                        <p class="card-text">ID: ${engineer.id}</p>
                        <p class="card-text">Github: <a href="https://www.github.com/${engineer.github}">${engineer.github}</a></p>
                        <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    </div>
                </div>
            </div>`

        } else {
            user += `
            <div class="card">
                <img class="card-img-top" src="https://i.ytimg.com/vi/T4JuX3iAQ2g/maxresdefault.jpg" alt="Card image">
                <div class="card-body">
                    <div class="card-body text-left">
                    <h4 class="card-title">${intern.fullName}</h4>
                    <h5 class="card-title">${intern.role}</h5>
                        <p class="card-text">ID: ${intern.id}</p>
                        <p class="card-text">School: ${intern.school}</p>
                        <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    </div>
                </div> 
            </div>
        </div>
    </div>`
        }
    }

    let html = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <title>Team Generator</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="./style.css">
    </head>

<body>
    <h2 class="text-center">MEET THE TEAM</h2>

    <div class="container">
        <div class="card-deck">
            <div class="card">             
                ${user}
                </div>
          </div>
     </div>

</body>


</html>`
    return html

};

module.exports = printHTML;

