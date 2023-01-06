
export const inputAnimated = (e: React.FormEvent<EventTarget>, a: string) => {

		e.preventDefault();
		let target = e.target as HTMLInputElement;
		const inputContainer = target.parentElement;

		inputContainer?.classList.remove(inputContainer?.classList[2]);
		inputContainer?.classList.add(a);

};
