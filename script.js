function clearText() {
    document.getElementById("p1").value = '';
    document.getElementById("p2").value = '';
    document.getElementById("result").innerHTML = '';
}
function calculateFlames() {
    var name1 = document.getElementById("p1").value;
    var name2 = document.getElementById("p2").value;

    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();
    if (name1 == name2) {
        document.getElementById("result").innerHTML = getResultText("FLAME Test works only for different names");
        document.getElementById("result").style.fontSize = "20px";
    }
    else {
        var i, j;
        for (i = 0; i < name1.length; i++) {
            for (j = 0; j < name2.length; j++) {
                if (name1[i] == name2[j]) {
                    var ch = name1[i];
                    if (ch != '#') {
                        name1 = replaceAll(name1, ch, '#');
                        name2 = replaceAll(name2, ch, '#');
                    }
                }
            }
        }
        name1 = replaceAll(name1, '#', '');
        name2 = replaceAll(name2, '#', '');
        name = name1 + name2;
        var resultLength = name.length;
        var baseInput = 'flames';
        var relationIs = '';
        if (resultLength > 0) {
            while (baseInput.length != 1) {
                var tmpLen = resultLength % baseInput.length; //finding char position to strike
                if (tmpLen != 0) {
                    temp = baseInput.substring(tmpLen) + baseInput.substring(0, tmpLen - 1); //Append part start from next char to strike and first charater to char before strike.
                }
                else {
                    temp = baseInput.substring(0, baseInput.length - 1); //If mod result zero we can strike last letter easily
                }
                baseInput = temp; //Assign the temp to baseinput for next iteration.
            }
            relationIs = baseInput.charAt(0);

        }
        document.getElementById("result").innerHTML = getResultText(relationIs);
    }
}
function replaceAll(str, ch1, ch2) {
    var count = (str.match(new RegExp(ch1, "g")) || []).length;
    while (count > 0) {
        str = str.replace(ch1, ch2);
        count--;
    }
    return str;
}
function getResultText(ch) {
    switch (ch) {
        case 'f':
            return ("Friendship");

        case 'l':
            return ("Lovers");

        case 'a':
            return ("Affection");

        case 'm':
            return ("Marriage");

        case 'e':
            return ("Enemity");

        case 's':
            return ("Siblings");

        default:
            return ("FLAME Test works only for different names");

    }

}
