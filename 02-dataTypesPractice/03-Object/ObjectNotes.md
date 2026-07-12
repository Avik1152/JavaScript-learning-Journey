# Objects

We have seven *primitive* data types: `Number`, `String`, `BigInt`, `Boolean`, `Undefined`, `Null`, `Symbol` and *Non-primitive* data type: `Object`

## What is Object in JavaScript?

objects are used to store keyed collections of various data and more complex entities. An object can be created with curly braces `{…}` with an optional list of *properties*. A property is a *"key: value"* pair, where `key` is a `string` (also called a "property name"), and `value` can be anything.

```javascript
//Example 1 [Property keys must be strings or symbols (usually strings) and Values can be of any type.]
let obj = {
  "Student Name": "Avik Mondal", //Values can be of any type.
  "Subject Name": "Computer Sceience", //Values can be of any type.
  "Current Year Of Study": 2026, //Values can be of any type.
};

//★★Example 2★★[A property is a *"key: value"* pair]
let user2 = {
  name: "Avik", //single word property name, by key "name" store value "Avik"
  nameofFroute: "Banana", //single word property name, by key "nameofFroute" store value "Banana"
  "Froute Name": "Apple", //multiword property name it must quoted. by this property name we know all the property name is string.
};
```

In the last of a property(*"key: value"*) may end with a comma. That is called a "trailing" or "hanging" comma. Makes it easier to add/remove/move around properties.

**To access a property, we can use**:

  1. The dot notation: `obj.property`.
  2. Square brackets notation `obj["property"]`. Square brackets allow taking the key from a variable, like `obj[varWithKey]`.

We can also use multiword property names, but then they must be *quoted*(above Example 2) `"Froute Name": "Apple",` For multiword properties, the dot access doesn’t work(give a syntax error), There's an alternative way *"square bracket notation"*`[]` that works with any string. for example, If i want to access `"Froute Name"` then `user2["Froute Name"]` it works.

**Additional operators**:

* To remove a property, we can use the *delete* operator: `delete user2.name;` and `delete user2["Froute Name"];` for remove a multiword property.
* To check if a property with the given key exists: hare use special operator *"in"* The syntax is → `"key" in obj`. For example, if we try it in above *★★Example 2★★* `console.log("Froute Name" in user2);` it give true, means `"Froute Name"` exist.
* To iterate over an object: use the `for..in` loop, syntax is → `for (let key in obj) {// executes the body for each key among object properties}`.

```javascript
// Example of use the `for..in` loop for iterate over the properties of an object.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);
console.log(salaries.John + salaries.Ann + salaries.Pete);
```

We can create an empty object with using this two syntaxes:

* `let user = new Object();` → this is "object constructor" syntax and
* `let user = {};` → this is "object literal" syntax. Usually, the curly braces `{...}` are used. That declaration is called an object literal.

**Note**:
What we've studied in this chapter is called a `"plain object"`, or just `Object`. There are many other kinds of objects in JavaScript:

* `Array` to store ordered data collections,
* `Date` to store the information about the date and time,
* `Error` to store the information about an error.
…And so on.
