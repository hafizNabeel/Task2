letterC = document.getElementById('letterC')
letterD = document.getElementById('letterD')
submit = document.getElementById('submit')
answer=document.getElementById('answer')

function alphabetString(letterC, letterD) {
    let c = "c"
    let d = "d"
    let x = []
    let y = []
    let z = []
    // Pushing letter c into the array
    for (i = 0; i <= letterC; i++) {
        x.push(c)
    }
     // Pushing letter d into the array
    for (j = 0; j <= letterD; j++) {
        y.push(d)
    }
    // calculating sum
    let sum = letterC + letterD
    // Checking if letterD is greater than letterC
    if (letterD > letterC) {
        for (k = 0; k < sum; k++) {
            if (k % 3 != 0) {
                z.push(y.pop())
            } else {
                z.push(c)
            }
        }
    }else{ 
        for (k = 0; k < sum; k++) {
            if (k % 3 != 0) {
                z.push(x.pop())
            } else {
                z.push(d)
            }
        }
    }
 
    return z
}
submit.onclick = (() => {
    letC = parseInt(letterC.value)
    letD = parseInt(letterD.value)
    // Checking if value is in 1:100 range
    if (letC < 1 || letC > 100) {
        alert("letter C must be in the range 1:100")
    }
    else if (letD < 1 || letD > 100) {
        alert("letter D must be in the range 1:100")
    }else{
        ans = alphabetString(letC, letD)
        answer.innerHTML=ans
    }
    
})