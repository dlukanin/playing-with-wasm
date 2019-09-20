// The entry file of your WebAssembly module.
@external("env", "addNewDiv")
declare function addNewDiv(val: f64): void;

export function add(): void {
  addNewDiv(123);
}
