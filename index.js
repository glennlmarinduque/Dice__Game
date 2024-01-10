$(document).ready(function() {
    $(".button-36").on("click", function() {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomDiceImage = "dice" + randomNumber1 + ".png";
        var randomImageSource = "images/" + randomDiceImage;
        $(".img1").attr("src", randomImageSource);

        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
        $(".img2").attr("src", randomImageSource2);

        // If player 1 wins
        if (randomNumber1 > randomNumber2) {
            $("h1").html("Player 1 Wins!");
        } else if (randomNumber2 > randomNumber1) {
            $("h1").html("Player 2 Wins!");
        } else {
            $("h1").html("Draw!");
        }
    });
});