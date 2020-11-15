# Employee Directory

This program is intended to show an employee directory of preset values that can be sorted. 

* Use of React
* Use of JavaScript.
* Use of CSS
* Use of HTML.

## Usage

This page's function was created through React and it is meant to show case the state of a search.


## Code

Example of code that would have sorted:
```
sortEmployees = (employees) => {
    const newEmployees = [...employees];
    newEmployees
      .sort(function (x, y) {
        if (x.name.toLowerCase() < y.name.toLowerCase()) return -1;
        if (x.name.toLowerCase() > y.name.toLowerCase()) return 1;
        return 0;
      })
    this.setState({ employees: newEmployees });
  }
```

## Credits

* https://github.com/coding-boot-camp/
* https://stackoverflow.com/questions/
* https://guides.github.com/features/mastering-markdown/



## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


## Deployed Link

* https://dcuadra85.github.io/employeedirectory/

## Authors

* **Daniel Cuadra** 

- [GitHub](https://github.com/DCuadra85)
- [LinkedIn](https://www.linkedin.com/in/daniel-cuadra-3705aa39/)

## License

MIT License

Copyright (c) [2020] [DanielCuadra]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
