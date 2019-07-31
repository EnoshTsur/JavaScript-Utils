/**
 * Fucntional functions
 **/
function functional() {
	
	/**
	 * Not - Takes predicate funciton as parameter
	 * Returns the opposite boolean value
	 * @param { function }
	 */
	function not(predicate) {
		return arg => !predicate(arg)
	}

	return {
	not,
	}
}

const fn = functional()

module.exports = fn

