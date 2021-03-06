# @beelang/parser.js

A :bee: parser.

![Version][BADGE_VERSION]
![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]


[BADGE_TRAVIS]: https://img.shields.io/travis/beelang/parser.js.svg?maxAge=2592000&style=flat-square
[BADGE_VERSION]: https://img.shields.io/npm/v/@beelang/parser.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/beelang/parser.js.svg?maxAge=2592000&style=flat-square


## Notes

(Input -> Token Stream) >- Token Stream -> (Skeleton | NestingError) >- Skeleton -> (AST | SyntaxError) >- AST -> (AST | TypeError) >- AST -> Interpreter

Lexical stream parsers, break up by token:
  from:
    ```
    x: 1
    ```
  to:
    ```
    word(x) assignmentOperator(:) number(1)
  ```


Skeleton tree parser:
  Input -> Tokens --> Tokens -> Skeleton|NestingError -> AST

  from:
    ```
    x: 1
    ```
  to:
    ```
    assignment(word(x) assignmentOperator(:) number(1))
