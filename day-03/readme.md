## Random dates in range

Write a function called `randomDateInRange`, that takes two dates given as strings in the format `YYYY-MM-DD` (e.g. `"1982-01-20"`, `"2019-10-02"` etc.) and returns a date between the two as a string in the same format. If the users provide invalid dates then return an empty string.

In Javascript, you can do `new Date("2019-01-01")` to get a date object. You can convert the date object into a number using `valueOf()` method. This number represents the number of miliseconds that have elapsed since `1970-01-01 00:00:00.000 GMT`. For example, `new Date("2019-01-01").valueOf()` returns `1546300800000`. For more information, read the documentation for `Date` object on the [Mozilla Developer Network &rarr;](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
