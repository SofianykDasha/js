function triangle(value1, type1, value2, type2) {
    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Некоректні типи. Перевірте інструкцію та спробуйте ще раз.");
        return "failed";
    }

    if (value1 <= 0 || value2 <= 0) {
        console.log("Значення повинні бути додатні числа.");
        return "failed";
    }

    let hypotenuse, angleA, angleB, sideA, sideB;

    if (type1 === "leg" && type2 === "hypotenuse") {
        sideA = value1;
        hypotenuse = value2;
        sideB = Math.sqrt(value2 ** 2 - value1 ** 2);
        angleA = Math.atan(value1 / sideB) * (180 / Math.PI);
        angleB = 90 - angleA;
    } else if (type1 === "hypotenuse" && type2 === "leg") {
        hypotenuse = value1;
        sideA = value2;
        sideB = Math.sqrt(value1 ** 2 - value2 ** 2);
        angleA = Math.atan(value2 / sideB) * (180 / Math.PI);
        angleB = 90 - angleA;
    } else if (type1 === "leg" && type2 === "adjacent angle") {
        sideA = value1;
        angleA = value2;
        angleB = 90 - value2;
        sideB = sideA / Math.tan(value2 * (Math.PI / 180));
        hypotenuse = sideA / Math.sin(value2 * (Math.PI / 180));
    } else if (type1 === "adjacent angle" && type2 === "leg") {
        angleA = value1;
        sideA = value2;
        angleB = 90 - value1;
        sideB = sideA / Math.tan(value1 * (Math.PI / 180));
        hypotenuse = sideA / Math.sin(value1 * (Math.PI / 180));
    } else if (type1 === "leg" && type2 === "angle") {
        sideA = value1;
        angleA = value2;
        angleB = 90 - value2;
        sideB = sideA / Math.tan(value2 * (Math.PI / 180));
        hypotenuse = sideA / Math.sin(value2 * (Math.PI / 180));
    } else if (type1 === "angle" && type2 === "leg") {
        angleA = value1;
        sideA = value2;
        angleB = 90 - value1;
        sideB = sideA / Math.tan(value1 * (Math.PI / 180));
        hypotenuse = sideA / Math.sin(value1 * (Math.PI / 180));
    } else if (type1 === "leg" && type2 === "opposite angle") {
        sideA = value1;
        angleB = value2;
        angleA = 90 - value2;
        sideB = sideA / Math.tan(value2 * (Math.PI / 180));
        hypotenuse = sideA / Math.sin(value2 * (Math.PI / 180));
    } else if (type1 === "opposite angle" && type2 === "leg") {
        angleB = value1;
        sideA = value2;
        angleA = 90 - value1;
        sideB = sideA / Math.tan(value1 * (Math.PI / 180));
        hypotenuse = sideA / Math.sin(value1 * (Math.PI / 180));
    } else {
        console.log("Некоректна комбінація типів. Перевірте інструкцію та спробуйте ще раз.");
        return "failed";
    }

    if (angleA >= 90 || angleB >= 90) {
        console.log("Некоректний трикутник: один з гострих кутів не є гострим.");
        return "failed";
    }

    console.log(`Сторони трикутника: a = ${sideA}, b = ${sideB}, c = ${hypotenuse}`);
    console.log(`Гострі кути: alpha = ${angleA.toFixed(2)}°, beta = ${angleB.toFixed(2)}°`);

    return "success";
}

triangle(4, "leg", 8, "hypotenuse");
triangle(8, "hypotenuse", 4, "leg");
triangle(3, "leg", 5, "hypotenuse");
triangle(30, "adjacent angle", 4, "leg");
triangle(4, "leg", 30, "adjacent angle");
triangle(30, "adjacent angle", 40, "angle");
triangle(40, "angle", 30, "adjacent angle");
triangle(30, "opposite angle", 4, "leg");
triangle(4, "leg", 30, "opposite angle");
