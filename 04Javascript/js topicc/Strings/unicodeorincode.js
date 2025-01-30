// 3️⃣ Working with Unicode & Encoding

// fromCharCode() – Convert Unicode values to characters.
// fromCodePoint() – Similar to fromCharCode() but supports higher Unicode values.
// charCodeAt() – Returns UTF-16 code of a character.
// codePointAt() – Returns the Unicode code point of a character.

// 5️⃣ Performance Considerations

// += vs Array.join("") for concatenation – When merging large strings, using arrays with .join("") is faster than using +=.
// Avoid replace() inside loops – It can be inefficient for large text processing.
// Use startsWith() and endsWith() instead of indexOf() for readability and performance.

// 6️⃣ Modern ES6+ Features for Strings

// String.raw – Returns raw string ignoring escape sequences.
// Object.entries() + .join() – Convert objects into readable string format.
// Using .trimStart() and .trimEnd() instead of .trim() when needed.