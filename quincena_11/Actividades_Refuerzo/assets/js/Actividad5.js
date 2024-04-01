let secret = "secreto";

let attempts = 0;

function checkSecret(inputValue) {
    attempts++;

    if (inputValue === secret) {
        toastr.success("Has acertado", "Enhorabuena!");

        document.getElementById("imagen").src = "assets/images/caras/emocionado.png";
    } else {
        if (attempts === 3) {
            toastr.error("Has fallado", "Lo siento!");
            document.getElementById("palabra").remove();

            document.getElementById("imagen").src = "assets/images/caras/enfado.png";
        } else {
            toastr.error("Has fallado", "Lo siento!");

            let matchingLetters = 0;
            for (let i = 0; i < inputValue.length; i++) {
                if (secret.includes(inputValue[i])) {
                    matchingLetters++;
                }
            }

            if (inputValue.length < 4) {
                document.getElementById("imagen").src = "assets/images/caras/boring.png";
            } else if (matchingLetters >= 3) {
                document.getElementById("imagen").src = "assets/images/caras/guinyo.png";
            } else {
                document.getElementById("imagen").src = "assets/images/caras/llorando.png";
            }
        }
    }
}

document.getElementById("palabra").addEventListener("blur", function() {
    let inputValue = document.getElementById("palabra").value;
    checkSecret(inputValue);
});