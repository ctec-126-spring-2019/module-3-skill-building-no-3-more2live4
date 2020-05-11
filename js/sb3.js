// sb3.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1() {
    let output = 'Baby shark, doo, doo, doo, doo, doo, doo, Baby shark, doo, doo, doo, doo, doo, doo, Baby shark, doo, doo, doo, doo, doo, doo, Baby shark'


    return output
}

function verse2() {
    let output = 'Mommy shark, doo, doo, doo, doo, doo, doo, Mommy shark, doo, doo, doo, doo, doo, doo, Mommy shark, doo, doo, doo, doo, doo, doo, Mommy shark'


    return output
}

function verse3() {
    let output = 'Daddy shark, doo, doo, doo, doo, doo, doo, Daddy shark, doo, doo, doo, doo, doo, doo, Daddy shark, doo, doo, doo, doo, doo, doo, Daddy shark'


    return output
}

function verse4() {
    let output = 'Grandma shark, doo, doo, doo, doo, doo, doo, Grandma shark, doo, doo, doo, doo, doo, doo, Grandma shark, doo, doo, doo, doo, doo, doo, Grandma shark'


    return output
}

function verse5() {
    let output = 'Grandpa shark, doo, doo, doo, doo, doo, doo, Grandpa shark, doo, doo, doo, doo, doo, doo, Grandpa shark, doo, doo, doo, doo, doo, doo, Grandpa shark'

    return output
}

function verse6() {
    let output = "Let's go hunt, doo, doo, doo, doo, doo, doo, Let's go hunt, doo, doo, doo, doo, doo, doo, Let's go hunt, doo, doo, doo, doo, doo, doo, Let's go hunt"

    return output
}

function verse7() {
    let output = 'Run away, doo, doo, doo, doo, doo, doo, Run away, doo, doo, doo, doo, doo, doo, Run away, doo, doo, doo, doo, doo, doo, Run away'

    return output
}

function verse8() {
    let output = 'Safe at last, doo, doo, doo, doo, doo, doo, Safe at last, doo, doo, doo, doo, doo, doo, Safe at last, doo, doo, doo, doo, doo, doo, Safe at last'

    return output
}

function verse9() {
    let output = "It's the end, doo, doo, doo, doo, doo, doo, It's the end, doo, doo, doo, doo, doo, doo, It's the end, doo, doo, doo, doo, doo, doo, It's the end"

    return output
}

function main() {
    let finalOutput = `<p>${verse1()}</p><p>${verse2()}</p><p>${verse3()}</p><p>${verse4()}</p><p>${verse5()}</p><p>${verse6()}</p><p>${verse7()}</p><p>${verse8()}</p><p>${verse9()}`

    document.getElementById('lyrics').innerHTML = finalOutput
}

window.onload = function () {
    main()
}