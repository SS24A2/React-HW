export const sayHello = () => {
  // <-- Action Creator
  return {
    type: "SAY_HELLO", //
    payload: "Hello and welcome to my first Redux App", // <-- Action
  };
};

export const sayFarewell = () => {
  return {
    type: "SAY_GOODBYE",
    payload: "Thanks for Visiting have a nice day",
  };
};
