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
