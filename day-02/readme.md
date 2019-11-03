## Generate random identifiers

When we collect large amounts of data from users or other sources, we need a unique identifier to differentiate between records. For example, we might collect full names of users and some users might have the same first and last names so we need an identifier that separates them. Usually such an identifier is a number or a string that is randomnly generated so that no one can predict what a user&rsquo;s identifier might be.

Your task is to create a function called `generateId` which will optionally takes one number as an argument. The function must generate a hexadecimal string of the length specified by the input number. If the input argument is not provided then it should always return a string of 16 characters. So for example, `generateId(4)` should return a strings like `"a09d"`, `"92cf"` etc. and `generateId()` should return strings like `"87b8ce30e0b0fd6a"`, `"6181c82de03ff57d"` etc.

### What is hexadecimal?

In decimal counting, we have 10 digits, `0-9`. We count from `0-9` then prefix the number with a `1` and repeat the counting. This is base-10 or decimal system.

In binary, we have only 2 digits, `0` and `1`. We count, `0-1`, then prefix the number with `1` and repeat the counting, like `0, 1, 10, 11, 100, 101, 110, 111`, etc. This is base-2 or binary system.

In hexadecimal, we have 16 digits, `0-9, a, b, c, d, e, f`. Thus `a` is `11`, and `f` is `16`. In this system we count `0-9`, then `a-f`, then prefix with `1` and repeat the counting. This is base-16 or hexadecimal system. This is a common way of counting numbers as we can represent larger numbers with fewer characters. For example, the decimal number of `1984` becomes `7c0`.

HTML color codes are represented in hexadecimal. Each color code is a combination of three numbers, the value for red, green and blue. So pure red in hexadecimal color code will be `ff0000` that translates to the number `16711680` in decimal. See how the color becomes more readable in hexadecimal? `ff` = red, `00` = blue, `00` = green.

In Javascript, every number has a built-in `toString(radix)` method. You can pass a `radix` of `16` to convert the number into a hexadecimal value. So to convert `1984` into hexadecimal you can do: `(1984).toString(16)` and it will return a string `"7c0"`.

For more information, read the documentation on the `toString` on the [Mozilla Developer Network &rarr;](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
