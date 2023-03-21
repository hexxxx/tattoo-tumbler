# tattoo-tumbler
Tattoo Tumbler

## ROUTE TABLE ##
| **URL**            | **REST Routes** | **HTTP Verb** | **CRUD Actions** | **EJS View(s)**   | **Operational?** |
|--------------------|-----------------|---------------|------------------|-------------------|------------------|
| /                  |                 | GET           | read             | home.ejs          | YES              |
| /tattoos           | index           | GET           | read             | tattoo-index.ejs  | YES              |
| /tattoos/:id       | show            | GET           | read             | tattoo-details.ejs| YES              |
| /tattoos/new       | new             | GET           |                  | new-form.ejs      | YES              |
| /tattoos           | create          | POST          | create           |                   | YES              |
| /tattoos/:id/edit  | edit            | GET           | read             | edit-form.ejs     | YES              |
| /tattoos/:id       | update          | PATCH/PUT     | update           |                   | YES              |
| /tattoos/:id       | destroy         | DELETE        | delete           |                   | YES              |
| /seed              |                 | GET           | delete & create  |                   | YES              |
| /*                 |                 | GET           |                  | 404.ejs           | YES              |
| /artists           | index           | GET           | read             | artist-index.ejs  | YES              |

***

## Screenshot of application
<img width="1452" alt="image" src="https://user-images.githubusercontent.com/12835780/226711154-44efff67-a198-4c32-999b-34e7b6165e77.png">

## Technologies
This full-stack application is built using MongoDB, Express, Node.js (MEN) and relies on HTTP methods. All seven RESTful (**R**epresentational **S**tate **T**ransfer) routes, which are:
- Index (GET)
- New (GET)
- Create (POST)
- Show (GET)
- Edit (GET)
- Update (PATCH)
- Destroy (DELETE)


The app also uses full CRUD (**C**reate, **r**ead, **U**pdate, **D**elete)

## Installation
This app relies on `npm` to install and manage dependencies. In order to run the app from the terminal issue the following commands:
1. `npm init` and follow the prompts
  * or run `npm init -y` to agree to all defaults
2. `npm i connect-livereload dotenv ejs express livereload method-override mongoose`
  * Note: some of these are for development purposes and in order to simply run the app you will only need `dotenv ejs express method-override mongoose`

## User Stories
Tattoo-Tumbler is intended as a Pinterest-like personal catalog where users can upload saved images of flash, prior work, and/or inspirational art and organize and rate each entry. Users are able to categorize, save, edit, delete, and view entries.
Users may also upload artist details using a separate form and view/edit those entries.

Still in development:
- Ability to tag and caption each document and then filter and/or sort through the index
- Featured tattoo to be randomly selected on a daily basis and displayed prominently on the landing screen

## Wireframes
![8EE45A9A-9889-488B-90F6-4F306B7E283F_1_102_o](https://media.git.generalassemb.ly/user/47417/files/45dc725f-91ca-4963-b86c-79446376d1a0)
![9A73B229-27EC-43DB-BC5D-806F3CCA063F_1_102_o](https://media.git.generalassemb.ly/user/47417/files/281462fa-881e-4c16-91b4-57390535a4c6)

