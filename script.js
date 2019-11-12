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
        var name = name1 + name2;
        var m = 0;
        for (m = 0; m < name.length; m++) {
            var count = (name.match(new RegExp(name[m], "g")) || []).length;
            if (count > 1) {
                var ch = name[m];
                while (count > 0) {
                    name = name.replace(ch, '');
                    count--;
                }
            }
        }
        var resultLength = name.length;
        var baseInput = 'flames';
        var relationIs = '';
        if (resultLength > 0) {
            while (baseInput.length != 1) {
                console.log(baseInput);
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
