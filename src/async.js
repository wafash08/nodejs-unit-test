export async function sayHello(name) {
  return new Promise(function executor(resolve, reject) {
    setTimeout(() => {
      if (name) {
        resolve("Hello " + name);
      } else {
        reject("Parameter name is not specified. Please fill the parameter");
      }
    }, 1000);
  });
}

export const getBalance = async (name, from) => {
  const balance = await from();
  return {
    name: name,
    balance: balance,
  };
};
