# Rock-Paper-Scissors Game

This is a simple implementation of the classic Rock-Paper-Scissors game using HTML, CSS, and JavaScript.

## Features

- **User vs. Computer**: The game allows the user to play against the computer.
- **Score Tracking**: Both the user's and the computer's scores are tracked and displayed.
- **Simple UI**: The interface includes a heading, three choices for the user, a scoreboard to display and update scores, and a message display box.
- **Basic Styling**: The game is styled in a simple manner using CSS.

## How It Works

1. **User Choice**: The user selects an option (Rock, Paper, or Scissors) by clicking on one of the choices.
2. **Computer Choice**: The computer randomly selects an option from the same three choices.
3. **Determine Winner**: The winner is determined based on the classic rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock
4. **Display Result**: The result is displayed in the message box.
5. **Update Scores**: The scores for both the user and the computer are updated and displayed on the scoreboard.

## Implementation Details

- **Choices**: The available choices are accessed and event listeners are added to each one.
- **Random Selection**: The computer's choice is determined by generating a random whole number between 0 and 2, which serves as an index to an array of choices(rock,paper and scissor).This is done using Math.floor(Math.random() *3 );
- **Winner Determination**: The winner is decided using an if-else statement.
- **UI Update**: The result message and scores are updated dynamically.
