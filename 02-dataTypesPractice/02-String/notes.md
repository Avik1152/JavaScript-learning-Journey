
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
    