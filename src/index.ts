const hourHand: HTMLElement = document.querySelector(
	"[data-hour-hand]"
) as HTMLElement;
const minHand: HTMLElement = document.querySelector(
	"[data-minute-hand]"
) as HTMLElement;
const secHand: HTMLElement = document.querySelector(
	"[data-second-hand]"
) as HTMLElement;

const setClock = (): void => {
	const curr: Date = new Date();
	const ms: number = curr.getMilliseconds() / 1000;
	const secs: number = (ms + curr.getSeconds()) / 60;
	const mins: number = (secs + curr.getMinutes()) / 60;
	const hours: number = (mins + curr.getHours()) / 12;

	setRotation(secHand, secs);
	setRotation(minHand, mins);
	setRotation(hourHand, hours);
};

const setRotation = (element: HTMLElement, rotation: number): void => {
	element.style.setProperty("--rotation", (rotation * 360).toString());
};

setClock();

setInterval(setClock, 10);
