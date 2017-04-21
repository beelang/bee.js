import {or} from "mona"
import {string} from "mona"
import {text} from "mona"
import {integer} from "mona"
import {space} from "mona"
import {parse} from "mona"
import {prop} from "ramda"

export default function read (source) {
  return parse(string("hello"), source)
}
