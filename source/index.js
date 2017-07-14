import {or} from "mona"
import {text} from "mona"
import {tag} from "mona"
import {space} from "mona"
import {parse} from "mona"
import {oneOf} from "mona"
import {noneOf} from "mona"
import {string} from "mona"
import {followedBy} from "mona"
import {not} from "mona"
import {natural} from "mona"
import {and} from "mona"
import {eol} from "mona"
import {between} from "mona"
import {maybe} from "mona"
import {join} from "mona"
import {skip} from "mona"
import {collect} from "mona"
import {split} from "mona"
import {sequence} from "mona"
import {value} from "mona"
import {log} from "mona"

const SPACE_TOKEN = " "
const FUNCTION_ARGUMENT_OPEN_TOKEN = "("
const FUNCTION_ARGUMENT_CLOSE_TOKEN = ")"
const ASSIGNMENT_OPERATOR_TOKEN = ":"
const PARENTHESES_TOKENS = [
  FUNCTION_ARGUMENT_OPEN_TOKEN,
  FUNCTION_ARGUMENT_CLOSE_TOKEN
]
const ASSIGNMENT_OPERATOR = string(ASSIGNMENT_OPERATOR_TOKEN)
const SPACE = string(SPACE_TOKEN)

export const forbiddenTokenCharacters = [
  SPACE_TOKEN,
  ...PARENTHESES_TOKENS,
  ASSIGNMENT_OPERATOR_TOKEN,
]


export function word () {
  return and(not(natural()), text(noneOf(forbiddenTokenCharacters), {min: 1}))
}

export function assignment () {
  return tag(sequence((consume) => {
    const key = consume(word())

    consume(ASSIGNMENT_OPERATOR)
    consume(SPACE)

    const expression = natural()

    return value({
      key,
      expression,
    })
  }), "assignment")
}

export function evaluatePartial (partial, source) {
  return parse(partial, source)
}
