import {test} from "tap"

import {evaluatePartial} from "./"
import {word} from "./"
import {assignment} from "./"

test("x is treated as a word", ({equal, end}) => {
  equal(evaluatePartial(word(), "x"), "x")
  end()
})

test("treated as a word", ({equal, end}) => {
  equal(evaluatePartial(word(), "point"), "point")
  end()
})

test("treated as a word", ({equal, end}) => {
  equal(evaluatePartial(word(), "person1"), "person1")
  end()
})

test("treated as a word", ({equal, end}) => {
  equal(evaluatePartial(word(), "a-person"), "a-person")
  end()
})

test("treated as a word", ({equal, end}) => {
  equal(evaluatePartial(word(), "@person"), "@person")
  end()
})

test("treated as a word", ({equal, end}) => {
  equal(evaluatePartial(word(), "systemOfADown"), "systemOfADown")
  end()
})

test("treated as a word", ({equal, end}) => {
  equal(evaluatePartial(word(), "U2"), "U2")
  end()
})

test("treated as a word", ({equal, end}) => {
  equal(evaluatePartial(word(), "a.2"), "a.2")
  end()
})


test("treated as a assignment", ({same, end}) => {
  same(evaluatePartial(assignment(), "x: 1"), {
    assignment: {
      key: "x",
      value: 1,
    }
  })
  end()
})
