function triangle(val1, type1, val2, type2) {
    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Invalid types. Please check the instructions and try again.");
        return "failed";
    }

    if (val1 <= 0 || val2 <= 0) {
        console.log("Values must be positive numbers.");
        return "failed";
    }

    let hypotenuse, angleA, angleB, sideA, sideB;

    if (type1 === "leg" && type2 === "hypotenuse") {
        sideA = val1;
        hypotenuse = val2;
        sideB = Math.sqrt(hypotenuse ** 2 - val1 ** 2);
        angleA = Math.atan(val1 / sideB) * (180 / Math.PI);
        angleB = 90 - angleA;
    } else if (type1 === "hypotenuse" && type2 === "leg") {
        hypotenuse = val1;
        sideA = val2;
        sideB = Math.sqrt(hypotenuse ** 2 - val2 ** 2);
        angleA = Math.atan(val2 / sideB) * (180 / Math.PI);
        angleB = 90 - angleA;
    } else if (type1 === "leg" && type2 === "adjacent angle") {
        sideA = val1;
        angleA = val2;
        angleB = 90 - val2;
        sideB = sideA / Math.tan(val2 * (Math.PI / 180));
        hypotenuse = sideA / Math.sin(val2 * (Math.PI / 180));
    } else if (type1 === "adjacent angle" && type2 === "leg") {
        angleA = val1;
        sideA = val2;
        angleB = 90 - val1;
        sideB = sideA / Math.tan(val1 * (Math.PI / 180));
        hypotenuse = sideA / Math.sin(val1 * (Math.PI / 180));
    } else if (type1 === "leg" && type2 === "angle") {
        sideA = val1;
        angleA = val2;
        angleB = 90 - val2;
        sideB = sideA / Math.tan(val2 * (Math.PI / 180));
        hypotenuse = sideA / Math.sin(val2 * (Math.PI / 180));
    } else if (type1 === "angle" && type2 === "leg") {
        angleA = val1;
        sideA = val2;
        angleB = 90 - val1;
        sideB = sideA / Math.tan(val1 * (Math.PI / 180));
        hypotenuse = sideA / Math.sin(val1 * (Math.PI / 180));
    } else if (type1 === "leg" && type2 === "opposite angle") {
        sideA = val1;
        angleB = val2;
        angleA = 90 - val2;
        sideB = sideA / Math.tan(val2 * (Math.PI / 180));
        hypotenuse = sideA / Math.sin(val2 * (Math.PI / 180));
    } else if (type1 === "opposite angle" && type2 === "leg") {
        angleB = val1;
        sideA = val2;
        angleA = 90 - val1;
        sideB = sideA / Math.tan(val1 * (Math.PI / 180));
        hypotenuse = sideA / Math.sin(val1 * (Math.PI / 180));
    } else {
        console.log("Invalid combination of types. Please check the instructions and try again.");
        return "failed";
    }

    if (angleA >= 90 || angleB >= 90) {
        console.log("Invalid triangle: one of the acute angles is not acute.");
        return "failed";
    }

    console.log(`Triangle sides: a = ${sideA}, b = ${sideB}, c = ${hypotenuse}`);
    console.log(`Acute angles: alpha = ${angleA.toFixed(2)}°, beta = ${angleB.toFixed(2)}°`);

    return "success";
}

// Example function calls
triangle(4, "leg", 8, "hypotenuse");
triangle(8, "hypotenuse", 4, "leg");
triangle(3, "leg", 5, "hypotenuse");
triangle(30, "adjacent angle", 4, "leg");
triangle(4, "leg", 30, "adjacent angle");
triangle(30, "adjacent angle", 40, "angle");
triangle(40, "angle", 30, "adjacent angle");
triangle(30, "opposite angle", 4, "leg");
triangle(4, "leg", 30, "opposite angle");
