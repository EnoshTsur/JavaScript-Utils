/**
 * Is Predicate
 * In order to test varibels
 *
 * */
function is_predicate() {

	/**
	 * Initiate function with varibale inside,
	 * Allows you to test multiple function with the same object
	 * @param {Any}
	 */
	function init(something) {
		return fn => fn(something)
	}
	
	// Type Validation
	const _undefined = something => something == undefined
	const _null = something => something == null
	const _null_or_undefined = something => (_null(something) || _undefined(something))
	const _type_of = type => element => typeof element == type
	const _object = something => _type_of('object')(something)
	const _string = something => _type_of('string')(something)
	const _number = something => _type_of('number')(something)
	const _boolean = something => _type_of('boolean')(something)
	const _array = something => Array.isArray(something)

	/**
	 * Validate variable empty
	 * @param {Any} 
	 * Returns true if given variable is empty 
	 * */
	function empty(something) {

		const _is = init(something)

		const handleObject = object => Object.entries(object).length === 0

		const handleNumber = number => number <= 0

		const handleBoolean = bool => bool

		const handleStringAndArray = x => x.length < 1
		
		return _is(_null_or_undefined) ? true :
			_is(_object) ? handleObject(something) :
			(_is(_string) || _is(_array)) ? handleStringAndArray(something) :
			_is(_number) ? handleNumber(something) :
			_is(_boolean) ? handleBoolean(something) :
				true
	}

	return {
		_undefined,
		_null,
		_null_or_undefined,
		_type_of,
		_object,
		_string,
		_number,
		_boolean,
		_array,
		init,
		empty,
	}
}

const is = is_predicate()

module.exports = is
