const createHeader = (header)=>{
    var headerString = header.map((entry)=>{
        return `
            <tr>
                <td><b>${entry.title}<b><td>
                <td>${entry.content}<td>
            </tr>
        `
    }).join('');

    return `
    <div class="table-responsive">
        <table class="table table-striped text-center" bordered=1>
            <tbody>
                ${headerString}
            </tbody>
        </table>
    </div>
    `;

}

const generateContent = (contents)=>{
    var contentString = contents.map((content)=>{
        var rightContent = '';
        if(typeof(content.content)=='string'){
            rightContent = content.content;
        }else{
            var temp = content.content.map((data)=>`<li>${data}</li>`).join('');
            rightContent = `<ul>${temp}</ul>`

        }
        return `
        <div class="row justify-content-center">
            <div class="col-3 text-center"><h4>${content.title}</h4></div>
            <div class="col-6">${rightContent}</div>
        </div>
        <hr/>
        `;
    }).join('');

    return contentString;
}
const createHtml = (body)=>`
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

        <title>${body.name}</title>
        <style>
            li{
                text-decoration: none;
                list-style: none;
            }
        </style>
    </head>
    <body>
    <header>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <h1>${body.name}</h1>
                </div>
                <div class="col-6">
                    <h1>${body.header}</h1>
                </div>
            </div>
            <hr/>
            <div class="row">
                <div class="col-12">
                    ${body.content}
                </div>
            </div>
            <div class="row mt-5 justify-content-center">
                <div class="col-6 text-center">
                   <p> <strong>Made with Love by ${body.name}</strong></p>
                </div>
            </div>
        </div>
    </header>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>    
    </body>
    </html>
`

const createDocument = (resume_json_object)=>{

    var body = {
        "name":resume_json_object.name,
        "header":createHeader(resume_json_object.header),
        "content": generateContent(resume_json_object.content)
    }
    return createHtml(body);
}

module.exports = createDocument;