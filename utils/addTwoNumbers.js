function sumOfTwoNumbers(n1, n2) {
  let arr1 = Array.from(String(n1), Number),
    arr2 = Array.from(String(n2), Number),
    m = arr1.length,
    n = arr2.length,
    sumString = '',
    carryString = '_',
    step = 1,
    carry = 0,
    i = m - 1,
    j = n - 1,
    ans = [],
    obj = {}

  while (i >= 0 && j >= 0) {
    let val1 = arr1[i],
      val2 = arr2[j]

    sum = val1 + val2 + carry

    if (i === 0 && j === 0) {
      sumString = sum + sumString
      carryString = carryString
    } else {
      carry = Math.floor(sum / 10)
      sum = sum % 10
      ans.unshift(sum)
      sumString = sum + sumString
      carryString = carry + carryString
    }

    obj[`step${step}`] = { carryString, sumString }
    i--
    j--
    step++
  }

  //   first case
  while (i >= 0) {
    let sum = arr1[i] + carry
    carry = Math.floor(sum / 10)
    sum = sum % 10
    ans.unshift(sum)

    sumString = sum + sumString
    carryString = carryString

    obj[`step${step}`] = { carryString, sumString }

    i--
    step++
  }

  //   second case
  while (j >= 0) {
    let sum = arr2[j] + carry
    carry = Math.floor(sum / 10)
    sum = sum % 10
    ans.unshift(sum)

    sumString = sum + sumString
    carryString = carryString

    obj[`step${step}`] = { carryString, sumString }

    j--
    step++
  }

  console.log(`Steps for Adding two Numbers is `, obj)
  return obj
}

module.exports = { sumOfTwoNumbers }
