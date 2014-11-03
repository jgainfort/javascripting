function eat (food) {
    if (typeof food != "string") { return "argument is not a string"; }
    return food + " tasted really good.";
}

console.log(eat("bananas"));
