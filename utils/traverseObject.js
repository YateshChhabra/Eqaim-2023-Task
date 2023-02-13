let steps = {
  'step1:': {
    carryString: '1_',
    sumString: '3',
  },
  'step2:': {
    carryString: '11_',
    sumString: '03',
  },
  'step3:': {
    carryString: '111_',
    sumString: '203',
  },
  'step4:': {
    carryString: '111_',
    sumString: '2203',
  },
}

// For Object Traversing
// for (step in steps) {
//   console.log(step)
//   let nest = steps[step]
//   console.log(nest['carryString'])
//   console.log(nest['sumString'])
// }

let stepsArr = Object.entries(steps)

stepsArr.map(
  (step) => console.log(step[0]),
  console.log(step[1].carryString),
  console.log(step[1].sumString),
)
