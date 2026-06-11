# Number

The number type represents both integer and floating point numbers.

    ```javascript
      let n = 123; 
      n = 12.345;
    ```
    There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

*Infinity ∞*
Infinity happens when a number becomes too large(greater than any number) or when you divide by 0. Hare,
Example:

    1. 10 / 0  
    2. -10 / 0
    devided by 0.

*NaN*
    3. "hello" * 5 → NaN because text cannot multiply with a number

    4. 0 / 0 → NaN because JavaScript cannot determine the result

## Type Conversion: Converting to Number

In JavaScript, numeric conversion happens automatically in mathematical functions and expressions, or it can be done explicitly.

### 1. The Main Method: `Number()`

The safest way to explicitly convert a value to a number.

* `Number("123")`     -> `123`
* `Number("  123  ")` -> `123` (Whitespaces are automatically trimmed)
* `Number("")`        -> `0`   (Empty string becomes 0)
* `Number(true)`      -> `1`
* `Number(false)`     -> `0`

### 2. The Special Case: `NaN` (Not a Number)

If a string cannot be converted into a valid number, the result is `NaN`.

* `Number("123abc")`  -> `NaN`
* `Number(undefined)` -> `NaN`

### 3. Quick Alternatives

* **The Plus Unary Operator (`+`):** Putting a `+` before a string quickly converts it to a number.
  * `+"45"` -> `45`
* **`parseInt()` vs `parseFloat()`:** Extracts numbers from text until it hits a non-numeric character.
  * `parseInt("100px")`   -> `100` (Stops at 'p')
  * `parseFloat("12.5$")` -> `12.5`

### 4. Automatic Conversion (Implicit)

Happens automatically when using mathematical operators (except `+` if a string is involved).

* `"6" / "2"` -> `3`
* `"5" - 1`   -> `4`
