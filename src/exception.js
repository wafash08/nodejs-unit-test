export class MyException extends Error {}

export function sayName(name) {
  if (name === "wafa") {
    throw new MyException("Ups!");
  }

  return name;
}
