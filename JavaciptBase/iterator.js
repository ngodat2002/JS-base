let marks = [10,20,30]
for(let m of marks){
   console.log(m);
}

//Generator iterator
function * getMarks(){
    console.log("Step 1")
    yield 10
    console.log("Step 2")
    yield 20
    console.log("Step 3")
    yield 30
    console.log("End of function")
 }

    let markIter = getMarks()

    console.log(markIter.next())
    console.log(markIter.next())
    console.log(markIter.next())
    console.log(markIter.next()) 