const { sql } = require('slonik')
// pendiente de cambiar por las consultas que necesitemos

const insertUser = (email, username, password) => sql.unsafe`
    INSERT INTO users (
        email, username, password
    ) VALUES (
        ${email}, ${username}, ${password}
    )
`

const selectByEmail = (email) => sql.unsafe`
    SELECT email, username, password
    FROM users
    WHERE email LIKE ${email}
`

const selectIdByEmail = (email) => sql.unsafe`
    SELECT id
    FROM users
    WHERE email LIKE ${email}
`

module.exports = {
    insertUser,
    selectByEmail,
    selectIdByEmail,
}