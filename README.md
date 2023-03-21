# tattoo-tumbler
Tattoo Tumbler

## ROUTE TABLE ##
| **URL**            | **REST Routes** | **HTTP Verb** | **CRUD Actions** | **EJS View(s)**   | **Operational?** |
|--------------------|-----------------|---------------|------------------|-------------------|------------------|
| /                  |                 | GET           | read             | home.ejs          | YES               |
| /tattoos           | index           | GET           | read             | tattoo-index.ejs  | YES               |
| /tattoos/:id       | show            | GET           | read             | tattoo-details.ejs| YES               |
| /tattoos/new       | new             | GET           |                  | new-form.ejs      | YES               |
| /tattoos           | create          | POST          | create           |                   | YES               |
| /tattoos/:id/edit  | edit            | GET           | read             | edit-form.ejs     | YES               |
| /tattoos/:id       | update          | PATCH/PUT     | update           |                   | YES               |
| /tattoos/:id       | destroy         | DELETE        | delete           |                   | YES               |
| /seed              |                 | GET           | delete & create  |                   | YES               |
| /*                 |                 | GET           |                  | 404.ejs           | YES               |
| /artists           | index           | GET           | read             | artist-index.ejs  | YES               |


