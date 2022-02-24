import { writable } from "svelte/store";

export const fontSize = writable("16px");
export const testTime = writable("300");
export const language = writable("en");
export const started = writable(false);
