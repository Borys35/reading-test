import { derived, writable } from "svelte/store";

export const fontSize = writable("16px");
export const testTime = writable("300");
export const language = writable("en");
export const started = writable(false);
export const wordsRead = writable(0);

const initialPreapreCountdown = 3;
function createPrepareCountdown() {
  const { subscribe, set, update } = writable(initialPreapreCountdown);
  let interval: NodeJS.Timer;

  const stop = () => {
    clearInterval(interval);
  };

  const reset = () => {
    if (interval) stop();
    set(initialPreapreCountdown);
  };

  return {
    subscribe,
    start: () => {
      interval = setInterval(() => {
        update((n) => {
          if (n < 1) {
            stop();
            return n;
          }
          return n - 1;
        });
      }, 1000);
    },
    stop,
    reset,
  };
}

export const prepareCountdown = createPrepareCountdown();
export const prepared = derived(
  prepareCountdown,
  ($preparedCountdown) => $preparedCountdown < 1
);

function createTestCountdown() {
  let initialTime: number;
  testTime.subscribe((v) => {
    initialTime = parseInt(v);
  });
  const { subscribe, set, update } = writable(initialTime);
  let interval: NodeJS.Timer;

  const stop = () => {
    clearInterval(interval);
  };

  const reset = () => {
    if (interval) stop();
    set(initialTime);
  };

  return {
    subscribe,
    start: () => {
      interval = setInterval(() => {
        update((n) => {
          if (n < 1) {
            stop();
            return n;
          }
          return n - 1;
        });
      }, 1000);
    },
    stop,
    reset,
    setInitialCountdown: (initial: number) => {
      set(initial);
    },
  };
}

export const testCountdown = createTestCountdown();
export const tested = derived(
  testCountdown,
  ($testCountdown) => $testCountdown < 1
);
