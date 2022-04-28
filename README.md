# Notes for 'The Joy of JavaScript'



## 1. Profiles

![cover of the joy of javascript](assets/cover.png)



|    **Title**    | **The Joy of JavaScript** |
| :-------------: | :-----------------------: |
|   **Author**    |     **Luis Atencio**      |
| **Publication** |      **Packt, 2021**      |
|    **Pages**    |          **362**          |

> **Introduction**
>
> JavaScript is at the heart of web applications on the browser side and, via the popular Node.js runtime, it often powers the server side too. Simply put, the web runs on JavaScript.
>
> The Joy of JavaScript introduces techniques that turn JavaScript programmers into JavaScript pros. You’ll work with cutting edge APIs, language features, and coding styles to tackle tricky problems in an elegant manner. Along the way, you’ll practice good object design, drive business logic with functional thinking, and untangle complex data flows.
>
> What's Inside
> - JavaScript’s objects and module system
> - Working with higher order functions
> - Identifying and creating composable software
> - Preparing for upcoming JavaScript features
>
> Written for experienced and passionate JavaScript developers.
>
> *Luis Atencio* is a software engineer for Citrix Systems, author of Manning’s Functional Programming in JavaScript, and co-author of Manning’s RxJS in Action.



## 2. Outlines

Status available：:heavy_check_mark: (Completed) | :hourglass_flowing_sand: (Working) | :no_entry: (Not Started) | :orange_book: (Finished reading)

| No.  |                  Chapter Title                   |          Status          |
| :--: | :----------------------------------------------: | :----------------------: |
| Ch01 |         [JavaScript reloaded](./Ch01.md)         |      :orange_book:       |
|      |              **Part 1 -- Objects**               |                          |
| Ch02 |  [Inheritance-based object modeling](./Ch02.md)  |      :orange_book:       |
| Ch03 | [Linked, compositional object models](./Ch03.md) |      :orange_book:       |
|      |             **Part 2 -- Functions**              |                          |
| Ch04 |    [Writing composable, pure code](./Ch04.md)    |      :orange_book:       |
| Ch05 |      [Higher-kinded composition](./Ch05.md)      |      :orange_book:       |
|      |                **Part 3 -- Code**                |                          |
| Ch06 |         [ECMAScript Modules](./Ch06.md)          |      :orange_book:       |
| Ch07 |      [Hooked on metaprogramming](./Ch07.md)      |      :orange_book:       |
|      |                **Part 4 -- Data**                |                          |
| Ch08 |         [Linear async flows](./Ch08.md)          |      :orange_book:       |
| Ch09 |         [Streams programming](./Ch09.md)         | :hourglass_flowing_sand: |



Powershell script for generating markdown files in batch:

```powershell
# Create 9 empty markdown files named Ch##.md:
for($i=1; $i -le 9; $i=$i+1){ New-Item -Name "Ch$('{0:d2}' -f $i).md"; }
```

 
