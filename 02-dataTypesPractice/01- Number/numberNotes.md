# Number

The number type represents both integer and floating point numbers. You can define numbers using the simple literal syntax(e.g., `score = 400`) or explicitly as an object using `new Number(100)`.

* Values of other types can be converted to numbers using the `Number()` function.

    ```javascript
      const score = 400; 
      const balance = new Number(100);
    ```

    There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

* `toString()`: Converts a number to a string, allowing for string operations like `.length`.
* `toFixed(n)`: Essential for e-commerce, it fixes the number of decimal places. for example, `toFixed(2)` -> 100.00.
* `toLocaleString('en-IN')`: Formats numbers with commas according to standard number systems (e.g., *Indian standard*)

**Infinity ∞**
`Infinity` happens when a number becomes too large(greater than any number) or when you divide by 0. Hare,
Example:

1. 10 / 0  
2. -10 / 0 devided by 0.

**NaN**:
The `NaN` global property is a value representing Not-A-Number.
Example:

1. "hello" * 5 → NaN because text cannot multiply with a number
2. 0 / 0 → NaN because JavaScript cannot determine the result

## Type Conversion: Converting to Number

In JavaScript, numeric conversion happens automatically in mathematical functions and expressions, or it can be done explicitly.

**1. The Main Method**: `Number()`

The safest way to explicitly convert a value to a number.

* `Number("123")`     -> `123`
* `Number("  123  ")` -> `123` (Whitespaces are automatically trimmed)
* `Number("")`        -> `0`   (Empty string becomes 0)
* `Number(true)`      -> `1`
* `Number(false)`     -> `0`

**2. The Special Case**: `NaN` (Not a Number)

If a string cannot be converted into a valid number, the result is `NaN`.

* `Number("123abc")`  -> `NaN`
* `Number(undefined)` -> `NaN`

**3. Quick Alternatives**:

* **The Plus Unary Operator (`+`):** Putting a `+` before a string quickly converts it to a number.
  * `+"45"` -> `45`
* **`parseInt()` vs `parseFloat()`:** Extracts numbers from text until it hits a non-numeric character.
  * `parseInt("100px")`   -> `100` (Stops at 'p')
  * `parseFloat("12.5$")` -> `12.5`

**4. Automatic Conversion (Implicit)**:

Happens automatically when using mathematical operators (except `+` if a string is involved).

* `"6" / "2"` -> `3`
* `"5" - 1`   -> `4`

## Math

`Math` is a static object that comes built-in with JavaScript, offering various utility functions

* **Common Functions**:
  * `Math.abs()` -> Converts negative numbers to positive
  * `Math.round()` -> rounds up to the nearest integer. for example, if 4.5 then 5 or if 4.2 then 4
  * `Math.ceil()` -> Force rounding up to the nearest upper[ceiling] integer. for example, if 4.2 & 4.5 & 4.6 all are 5 and `Math.floor()` -> Force rounding down nearest lowest integer. for example, if 4.2 & 4.5 & 4.6 all are 4
  * `Math.min()` and `Math.max()` -> Useful for finding the smallest or largest numbers in a set

* **Random Numbers**:
  * `Math.random()` -> Generates a pseudo-random value between 0 and 1.
  * Generating a range: To get a random number between a defined `min` and `max`, use the following formula: `Math.floor(Math.random() * (max - min + 1)) + min`
  