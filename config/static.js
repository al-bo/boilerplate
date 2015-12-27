/**
 * HTTP static server configuration.
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

// public
module.exports = {
    // turn on/off server
    active: true,

    // listening HTTP port to serve project files
    port: 8000,

    // static file server cache activation
    // false to disable of amount of seconds to cache
    cache: false,

    // full logging
    logging: true,

    // enable automatic reload on file changes mode
    // set boolean value "true" to work on the default port 35729
    // or specify some custom port value
    livereload: true
};
