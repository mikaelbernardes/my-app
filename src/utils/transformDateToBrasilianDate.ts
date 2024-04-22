import { addLeadingZero } from "./addLeadingZero";

export function transformDateToBrasilianDate(date: string) {

	const oldDate = new Date(date);
	const day = oldDate.getDate();
	const month = oldDate.getMonth() + 1;
	const years = oldDate.getFullYear();
	const hours = oldDate.getHours();
	const minuts = oldDate.getMinutes();

	return `${addLeadingZero(day)}/${addLeadingZero(month)}/${years} as ${addLeadingZero(hours)}:${addLeadingZero(minuts)}h`;
}
