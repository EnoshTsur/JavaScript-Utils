const is = require('../predicate/is')
const fn = require('../functional/functional')

const { not, } = fn
const { _string, empty, } = is

/**
 * String utils
 *
 * */
function string_utils() {

	/**
	 * Initiate function with string inside,
	 * Allows you to use that string on differents util functions
	 * @param {string}
	 **/
	function init(str) {
		return fn => fn(something)
	}

	const EMPTY = ""
	const SPACE = " "

	/**
	 * Error Messages
	 **/
	function string_error_messages(str) {
		const NOT_VALID = `[Bad Value]: illegal argument ${str}`

		return {
		NOT_VALID,
		}
	}

	// Error messages instance
	const error_m = string_error_messages()

	/**
	 * Validate variable is string
	 * And not empty
	 * @param {string }
	 */
	function isValid(str) {
		return is._string(str) && not(empty)(str) 
	}
	/**
	 * Returns string lower case
	 * @param {string}
	 **/
	function lower(str) {
		if (not(isValid)(str)) throw error_m.NOT_VALID		
		return str.toLowerCase()
	}

	/**
	 * Returns string upper case
	 * @param {string}
	 */
	function upper(str) {
		if (not(isValid)(str)) throw error_m.NOT_VALID
		return str.toUpperCase()
	}

	/**
	 * Retruns string trim
	 * @param {string}
	 **/
	function trim(str) {
		if (not(isValid)(str)) throw error_m.NOT_VALID
		return str.trim()
	}

	/**
	 * Pipe for string actions
	 * example:
	 * const a = str_pipe(upper, trim)(" hello")
	 */
	function str_pipe(...fns) {
		return arg => fns.reduce((fn1, fn2) => fn2(fn1), arg)
	}

	const trim_and_lower = str_pipe(trim, lower)
	const trim_and_upper = str_pipe(trim, upper)

	return {
	EMPTY,
	SPACE,
	lower,
	upper,
	isValid,
	trim,
	str_pipe,
	trim_and_upper,
	trim_and_lower,
	}
}

const str_utils = string_utils()

module.exports = str_utils
