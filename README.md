![](header.png)

# Resume Creator from JSON
Creates Resume Github Page from JSON using Github Actions.

## Prerequisite
-   GitHub Personal Access Token `ACCESS_TOKEN`
-   `resume.json` to build the Resume HTML Page from. (Syntax)

## Usage
1.  Set up credentials as secrets in you repository using `ACCESS_TOKEN`
2.  Following should be added to your workflow on your repositories:

```
 - name: Build Resume and Deploy on GitHub Pages
        uses: rajivnayanc/resume-creator-action@v4
        with:
          FileName: path/to/resume.json
        env:
          ACCESS_TOKEN: ${{secrets.ACCESS_TOKEN}}
```

## Inputs
-   **`ACCESS_TOKEN`** : **Required** GitHub Personal Access token. Can also be stored in environment.
-   **`FileName`** : **Required** Path to the resume JSON file in your repository. It should be provided in `with` .

## Result
HTML Page according to the JSON file provided and hosted on the gh-pages branch

## Syntax for resume.json
1.  Root part of the JSON document should be a JSON Object with three keys: "name", "header", and "content".
2.  "name" stores the name of the Person whose resume is created.
3.  "header" stores the basic personal data which needs to be shown at top in tabular form.

```
"header":[
        {
            "title":"heading",
            "content": "content"
        }
]
```
3.  "content" stores the detailed personal data which needs to shown section wise after the header

```
"header":[
        {
            "title":"heading",
            "content": "content" / ["content", "content" ..]
        }
]
```

## Example

1.  `resume.json` is stored in root directory.

```
{
    "name":"Rajiv Nayan Choubey",
    "header":[
        {
            "title":"DOB",
            "content": "X August XXXX"
        },
        {
            "title":"Contact",
            "content": "+91-XXXXXXXXXX"
        },
        {
            "title":"Email",
            "content": "rajivnayanc@gmail.com"
        }
    ],
    "content":[
        {
            "title":"Experience",
            "content": [
                "Campus Adda",
                "Technovate 2020"
            ]
        },
        {
            "title":"Education",
            "content": [
                "B.Tech CSE, IIIT Naya Raipur",
                "12th Class, Glenhill School",
                "10th Class, Glenhill School"
            ]
        },
        {
            "title":"Achievements",
            "content": [
                "SIH University Level Hackathon: Secon Runner Up",
                "10 SGPA in 3rd Semester",
                "Runner Up in Website Making Competition",
                "First Prize in Discus Throw: Annual Sports"
            ]
        }
        
    ]
}
```

2. Create `.github/workflows/main.yml`

```
name: Resume Creator from JSON
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2.3.1
        with:
          persist-credentials: false
      - name: Build Resume and Deploy on GitHub Pages
        uses: rajivnayanc/resume-creator-action@v4
        with:
          FileName: resume.json
        env:
          ACCESS_TOKEN: ${{secrets.ACCESS_TOKEN}}
```

## Contributing

This GitHub Action uses a couple of Node.js modules to work.

License and other copyright information for each module are included in the release branch of each action version under node_modules/{module}.

## About Me

[LinkedIn](https://www.linkedin.com/in/rajivnayanc/)

[GitHub](http://github.com/rajivnayanc/) 

## License
MIT LICENSE: [LICENSE](LICENSE)