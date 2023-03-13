# tattoo-tumbler
Tattoo Tumbler

## ROUTE TABLE ##
| **URL**            | **REST Routes** | **HTTP Verb** | **CRUD Actions** | **EJS View(s)**   | **Operational?** |
|--------------------|-----------------|---------------|------------------|-------------------|------------------|
| /                  |                 | GET           | read             | home.ejs          | NO               |
| /tattoos          | index           | GET           | read             | tattoo-index.ejs | NO               |
| /tattoos/:id      | show            | GET           | read             | tattoo-details.ejs   | NO               |
| /tattoos/new      | new             | GET           |                  | new-form.ejs      | NO               |
| /tattoos          | create          | POST          | create           |                   | NO               |
| /tattoos/:id/edit | edit            | GET           | read             | edit-form.ejs     | NO               |
| /tattoos/:id      | update          | PATCH/PUT     | update           |                   | NO               |
| /tattoos/:id      | destroy         | DELETE        | delete           |                   | NO               |
| /seed              |                 | GET           | delete & create  |                   | NO               |
| /about             |                 | GET           |                  | about.ejs         | NO               |
| /*                 |                 | GET           |                  | 404.ejs           | NO               |