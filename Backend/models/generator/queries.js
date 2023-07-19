const { sql } = require('slonik')
const { selectIdByEmail } = require('../auth/queries')
// pendiente de cambiar por las consultas que necesitemos

const insertUrl = (email, shortUrl, originUrl) => sql.unsafe`
    INSERT INTO links (
        short_url, origin_url, created_by
    ) VALUES (
        ${shortUrl}, ${originUrl},
        (${selectIdByEmail(email)})
    );
`

const selectOriginUrl = (shortUrl) => sql.unsafe`
    SELECT
        email,
        origin_url,
        uses_by_creator,
        uses
    FROM links
    INNER JOIN users
    ON users.id = links.created_by
    WHERE short_url LIKE ${shortUrl}
`

const updateStatsByShort = (shortUrl, { uses, usesByCreator }) => sql.unsafe`
    UPDATE links
    SET
        uses = ${uses},
        uses_by_creator = ${usesByCreator}
    WHERE short_url LIKE ${shortUrl}
`

const selectShortsByEmail = (email) => sql.unsafe`
    SELECT short_url, uses, uses_by_creator
    FROM users
    INNER JOIN links
    ON users.id = links.created_by
    WHERE email LIKE ${email}
`

module.exports = {
    insertUrl,
    selectOriginUrl,
    updateStatsByShort,
    selectShortsByEmail,
}