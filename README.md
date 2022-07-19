[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=8141262&assignment_repo_type=AssignmentRepo)
# Guess The Number

Before starting to code this project, please find a partner and play this game together verbally for a few rounds.

1. Alice thinks of a number
2. Bob guesses a number
3. Alice says "higher", "lower", or "correct"
4. repeat 2 & 3 until Bob guesses correctly
5. repeat 1-4 with Alice guessing

After you get a feel for the game, it's time to write a software version of the game, where the *human* thinks of a number between 1 and 100 and the *computer* tries to guess it.

## Usage

```txt
$ node index.js
Please think of a number between 1 and 100 (inclusive).
I will try to guess it.

Is it... 50? N
Is it higher (H), or lower (L)? H
Is it... 75? N
Is it higher (H), or lower (L)? L
Is it... 63? N
Is it higher (H), or lower (L)? H
Is it... 69? N
Is it higher (H), or lower (L)? L
Is it... 66? Y
Your number was 66!
```

## Hints

* Before writing real code in a text editor, try writing **pseudocode** or a **flowchart** on paper, or as comments in your program file. That will help you to understand the essence of the algorithm without getting bogged down in syntax, like semicolons and parentheses.

* Look back at the programs you've already written. Can you use any functions or logic you've already written?

* Think of the guesses not just as **confirming** a possibility, but as **eliminating** a range of possibilities.

* Remember to keep track the current high and low values of the range where the secret guess could be hiding.

* Off-by-one errors can bite you. Be clear in your own mind about the distinction between "greater than", "greater than or equal to", "less than", and "less than or equal to".

* Sign reversal errors are also a strong possibility. Be clear about the distinction between "my guess is higher than your number" and "your number is higher than my guess".

* When you feel like your game is partially functional have another classmate play it. See how they break it, and try to make your game more robust.

## Project Stories

The following "stories" are a list of descriptions of the features that your project solution should have. Each of them reads as a narrative with the following pattern:

* Given: Some pre-condition or setup step
* When: Some action is performed by a human or a computer
* Then: Some result should occur as a result.

Make sure to focus on **one** story at a time, and complete the stories in order from **first to last**.

### Pick a number, any number

**Given** the player starts the game with the command `node index.js` in the terminal

**Then** the computer should ask the player if their number is a random number between 1 and 100

**And** waits for an answer, which it stores as a variable

### Let the computer win

**Given** the computer has guessed a number

**When** the player responds "yes" (or "y")

**Then** the game exits with a victory message.

> e.g. `Your number was XX!`

### The computer guessed wrong

**Given** the computer has guessed a number

**When** the player responds "no" (or "n")

**Then** the computer asks if the number is higher or lower

### Modify your guess range

**Given** the computer guessed the incorrect number

**When** the player responds "higher" ("h") or "lower" ("l")

**Then** the computer modifies the range it guesses within based on the answer

#### Example

```txt
Is your number 41? no
Is your number higher(h) or lower(l)? h

```

**And** guesses a new number within the modified range

Given the example above the computer now guesses between 42 and 100

#### Hint

If the number is higher, you'll want to modify the low end of the range, and vice versa if the number is lower.

### Make it Smarter

In the **optimal** solution, the game will find the correct number in no more than 7 guesses for a range of 100 possible numbers.

**Given** The player chooses a number between 1 and 100

**When** the computer guesses a number

**Then** the computer should make a smart guess

**So That** the computer guesses the number in no more than 7 tries

## Third Party References

* https://www.khanacademy.org/computing/computer-science/algorithms/intro-to-algorithms/a/a-guessing-game - this page has a nice visualization of the game (click on the numbers in the box there) and nicely describes the binary search algorithm
* http://www.101computing.net/guess-the-number-binary-search/
* https://en.wikipedia.org/wiki/Binary_search_algorithm
