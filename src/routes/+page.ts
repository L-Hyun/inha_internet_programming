import Hooks from "../libs/Hooks";

export function load() {
	return Hooks.getWords(0)
		.then((res) => {
			return { list: res.data };
		})
		.catch((err) => {
			return { list: [] };
		});
}
