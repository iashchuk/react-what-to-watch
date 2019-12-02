export const delay = (duration = 1000) =>
  new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
