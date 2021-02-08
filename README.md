## js30 gallery

- [live demo](https://bermarte.github.io/JS30_gallery/)
- [HYF separation of concerns](https://github.com/HackYourFutureBelgium/separation-of-concerns)

[From HYF](https://raw.githubusercontent.com/HackYourFutureBelgium/separation-of-concerns/master/README.md)    

There's an outstanding series of tutorials called [The JavaScript 30](https://javascript30.com/) put together by [Wes Bos](https://wesbos.com), it's 30 small frontend projects with video tutorials and finished code to study. You will learn a lot from Wes Bos but his tutorials are just the beginning of your study > : )

All of his finished code is in a single file, the main objective of this module is that you learn how to structure your projects across multiple files according to the **separation of concerns**. After completing his tutorials you will need to take his finished code as a starting point and refactor it into separate folders and files. 

Hint: study
- [/stepped](./stepped?hyf)
- [/refactor-and-test](./refactor-and-test?hyf)
- [/import-export](./import-export?hyf)
- [/separated](./separated?hyf)

To keep track of your progress through the JS 30 and to store your refactored proejcts there's [HackYourFutureBelgium/javascript-30](https://github.com/HackYourFutureBelgium/JavaScript-30). In this repo you will find more detailed instructions on how to work your way through these projects, as well as a folder structure for your refactors and a checklist to keep track of your progress.

You don't need to develop as a group this week, find what works for you. Maybe pair programming, individual study or collaborating with 2-3 people is best for you.

### group-assignment

This week you will refactor one JS 30 project as a team using the javascript-30-starter. You will need to take time together to study the code before writing a development strategy and setting up your group repository with issues and labels.

Be careful with time management! Writing each file will probably not take too long, but then you will still need to review and test each other's code before mearging each file. This can take some time to coordinate and finish, you should aim to be ready for code reviews by Wednesday.

Below is a selection of JS 30 projects that are best for larger group collaboration. Pick the one that looks most interesting to your team and go for it!

    #11; Custom Video Player
    #15: localStorage
    #23: Speech Synthesis
    #26: Stripe Follow-Along Nav
    #27: Click and Drag

- [x] [repo](https://github.com/tahminarasoli/javascript-30-g5) 
- [x] [live demo](https://tahminarasoli.github.io/javascript-30-g5/)
- [x] [project-planning](https://github.com/tahminarasoli/javascript-30-g5/blob/master/project-planning/development-strategy.md)
- [x] [A project board](https://github.com/tahminarasoli/javascript-30-g5/projects/1)
- [x] [One issue per task](https://github.com/tahminarasoli/javascript-30-g5/issues/)
- [x] [One branch per issue](https://github.com/tahminarasoli/javascript-30-g5/branches/)
- [x] [One reviewed PR per completed issue](https://github.com/tahminarasoli/javascript-30-g5/pulls/)



---
- [javascript30](https://javascript30.com/)
- [course](https://courses.wesbos.com/account/)
- [HYF javascript-30](https://github.com/HackYourFutureBelgium/javascript-30)
- [HYF javascript-30 starter](https://github.com/HackYourFutureBelgium/javascript-30-starter)
- [javascript30 on gitHub](https://github.com/wesbos/JavaScript30)

---
### refactoring: 
|   names   |  description          |     
----------- | -------------
logic       | functions no DOM
listeners   | events
handlers    | functions linked to events, DOM elements
data        | stores data inside objects or variables
init        | stores the listeners, DOM elements

### second step:
- JSdoc documentation
- possibly unit tests (extra)

---
[From HYF](https://github.com/HackYourFutureBelgium/javascript-30-starter)

#### Installing Dependencies

There are no dependencies needed to run the website, everything is prepared to work with vanilla JavaScript. However, if you want to run tests or if you want to generate documentation for your project you will need to install the development dependencies:

    npm install

#### Documentation

To document your project you will need to write a JSDoc comment for each function in the `/handlers`, `/listeners` and `/logic`. You will also want to add an entry to the JSDoc in /data.js for each property you store in the object.

The JSDoc comments you write in the `/src` folder will be used to re-write the `DOCS.md` file each time you run `npm run document` from the root of your project.

    npm run document
    
---
#### note
Number 20 and 21 have problems. 

To run number 21, 20 and 19:

`npm install`    
`npm start`
