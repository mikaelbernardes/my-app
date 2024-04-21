export function addLeadingZero(number: number) {

	if (number < 10) {
		return "0" + number.toString();
	} else {
		return number.toString();
	}

}
