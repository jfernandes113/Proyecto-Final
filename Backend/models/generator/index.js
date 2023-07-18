const { insertUrl, selectOriginUrl, updateStatsByShort, selectShortsByEmail } = require('./queries')

const registerNewUrl = (db) => async (email, shortUrl, originUrl) => {
    try {
        await db.query(insertUrl(email, shortUrl, originUrl))

        return {
            ok: true
        }
    } catch(error) {
        console.info('> error registering new url: ', error.message)

        return {
            ok: false
        }
    }
}

const retrieveOriginUrl = (db) => async (email, shortUrl) => {
    try {
        const response = await db.maybeOne(selectOriginUrl(shortUrl))

        if(!response || !response.origin_url) return {
            ok: false,
            error_code: 404,
        }

        const fieldsToUpdate = {
            uses: response.uses + 1,
            usesByCreator: email === response.email ? response.uses_by_creator + 1 : response.uses_by_creator,
        }

        await db.query(updateStatsByShort(shortUrl, fieldsToUpdate))

        return {
            ok: true,
            content: {
                url: response.origin_url,
            }
        }
    } catch(error) {
        console.info('> error retrieving origin url: ', error.message)

        return {
            ok: false,
        }
    }
}

const retrieveShortsByUser = (db) => async (email) => {
    try {
        const response = await db.query(selectShortsByEmail(email))

        return {
            ok: true,
            content: response.rows
        }
    } catch(error) {
        console.info('> error retrieving shorts by email: ', error.message)
        return {
            ok: false,
        }
    }
}

module.exports = {
    registerNewUrl,
    retrieveOriginUrl,
    retrieveShortsByUser,
}