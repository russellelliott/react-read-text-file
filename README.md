# React Read Text File
This program does 2 things:
1. Reads file from user input.
2. Reads an existing file.

# Sources
https://stackblitz.com/edit/react-read-text-file

https://thewebdev.info/2021/11/26/how-to-read-a-text-file-in-react/

https://stackoverflow.com/questions/55830414/how-to-read-text-file-in-react

If you want to get a .txt file first you have to import it:

`import raw from '../constants/foo.txt';`
After that, you could fetch it and transform into text:

```
fetch(raw)
  .then(r => r.text())
  .then(text => {
    console.log('text decoded:', text);
  });
```