// The entry file of your WebAssembly module.

@external("env", "logi")
declare function logi(val: i32): void;

export function add(a: i32, b: i32): i32 {
  logi(123);

  return a + b;
}
