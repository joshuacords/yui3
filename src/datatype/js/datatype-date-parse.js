/**
 * The DataType utility provides a set of utility functions to operate on native
 * JavaScript data types.
 *
 * @module datatype
 */
var LANG = Y.Lang;

/**
 * Parse number submodule.
 *
 * @class DataType.Number
 * @submodule datatype-number-format
 * @static
 */
Y.mix(Y.namespace("DataType.Date"), {
    /**
     * Converts data to type Date.
     *
     * @method parse
     * @param data {String | Number} Data to convert. Values supported by the Date constructor are supported.
     * @return {Date} A Date, or null.
     * @static
     */
    parse: function(data) {
        var date = null;

        //Convert to date
        if(!(LANG.isDate(data))) {
            date = new Date(data);
        }
        else {
            return date;
        }

        // Validate
        if(LANG.isDate(date) && (date != "Invalid Date")) { // Workaround for bug 2527965
            return date;
        }
        else {
            Y.log("Could not convert data " + LANG.dump(date) + " to type Date", "warn", "date");
            return null;
        }
    }
});

// Add Parsers shortcut
Y.namespace("Parsers").date = Y.DataType.Date.parse;
