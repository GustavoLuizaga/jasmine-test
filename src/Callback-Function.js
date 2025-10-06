
export function delaySum(a, b, delayMs, callback) {
  setTimeout(() => callback(a + b), delayMs);
}

