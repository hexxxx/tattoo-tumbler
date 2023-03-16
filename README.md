# tattoo-tumbler
Tattoo Tumbler

## ROUTE TABLE ##
| **URL**            | **REST Routes** | **HTTP Verb** | **CRUD Actions** | **EJS View(s)**   | **Operational?** |
|--------------------|-----------------|---------------|------------------|-------------------|------------------|
| /                  |                 | GET           | read             | home.ejs          | YES               |
| /tattoos          | index           | GET           | read             | tattoo-index.ejs | YES               |
| /tattoos/:id      | show            | GET           | read             | tattoo-details.ejs   | YES               |
| /tattoos/new      | new             | GET           |                  | new-form.ejs      | NO               |
| /tattoos          | create          | POST          | create           |                   | NO               |
| /tattoos/:id/edit | edit            | GET           | read             | edit-form.ejs     | YES               |
| /tattoos/:id      | update          | PATCH/PUT     | update           |                   | YES               |
| /tattoos/:id      | destroy         | DELETE        | delete           |                   | YES               |
| /seed              |                 | GET           | delete & create  |                   | YES               |
| /about             |                 | GET           |                  | about.ejs         | NO               |
| /*                 |                 | GET           |                  | 404.ejs           | YES               |