$(function () {

    let players;

    // Add player form
    let playerCount = 0;

    $('.add-player-button').on('click', function () {
        $('.player-form').append(
            "            <label for=\"player" + playerCount + "\">Player</label>\n" +
            "            <input type=\"text\" class=\"form-control\" id=\"player" + playerCount + "\"  placeholder=\"Player's name\">"
        );

        playerCount++;
    })

    // Get players list
});

