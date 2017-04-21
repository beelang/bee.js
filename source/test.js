import {test} from "tap"

import read from "./"

test(({equal, end}) => {
  console.dir(read("hello"), {colors: true})
  equal(read("hello"), null)
  end()
})
