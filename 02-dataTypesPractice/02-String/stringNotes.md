
# String

In JavaScript, the textual data is stored as strings.

*Quotes*
There are 3 types of quotes(single quotes, double quotes or backticks).Single and double quotes are essentially the same. Backticks allow a string to span multiple lines and embed expressions ${…}.

    ```javascript
       let single = 'single-quoted';
       let double = "double-quoted";

       let guestList = `Guests:
       * John
       * Pete
       * Mary
       `;
       /*console.log(guestList); // a list of guests, multiple lines
       //Guests:
                * John
                * Pete
                * Mary*/

        let backticks = `single: ${single} and double: ${double}`; //embed expressions ${…}
    ```

## Special characters

We can use special characters, such as:

* `\n` -> **New line**
* `\t` -> **Tab**
* `\'` -> **Single Quote**
* `\"` -> **Double Quote**
* `\\` -> **Backslash**

## String length

> ⚠️ **Important: `length` is a Property, Not a Method**
>
> People with a background in other programming languages often mistakenly type `str.length()` with parentheses. **That does not work.**
>
> * **Correct:** `str.length` (It is a numeric property)
> * **Incorrect:** `str.length()`

## Accessing characters

To get a character, use square brackets [] or call the method str.at().
   The first character starts from the zero position.

* `.at(-1)` means the last character.
* `.at(-2)` is the one before it.

 *Strings are immutable* Strings can’t be changed in JavaScript. It is impossible to change a character.

    * Create a whole new string and assign it to str instead of the old one. 

 *Changing the Case* Methods toLowerCase() and toUpperCase() change the case.

    ```javascript
         //example: String Normal Problem 4 - Strings are immutable and Changing The Case
    ```
    
## Searching for a substring

To look for a substring, use: `indexOf`, or `includes/startsWith/endsWith` for simple checks.

* `indexOf(substr, pos)` -> substr(sub string) and pos(position). starting from the given position(pos) and returns the position where the match was found or nothing can be found return -1.

To get a *substring*, use: slice or substring.

## Type Conversion: Converting to String

In JavaScript, you can convert other data types (numbers, booleans, etc.) into a string using explicit conversion.

### 1. The Main Method: `String()`

The most common and safest way to convert a value to a string is by using the built-in `String(value)` function.

* `String(true)`      -> `"true"`   (Boolean to String)
* `String(123)`       -> `"123"`    (Number to String)
* `String(null)`      -> `"null"`   (Null to String)
* `String(undefined)` -> `"undefined"`

### 2. The Alternative: `.toString()`

Most data types have a `.toString()` method built into them.

* ⚠️ **Warning:** This will crash with an error if the value is `null` or `undefined` (e.g., `null.toString()` throws an error).
