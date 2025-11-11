# 🎲 Guess the Number Game

A fun and interactive number guessing game where you can win $1000! Built with vanilla JavaScript, HTML, and CSS.

## 🎮 How to Play

1. The game randomly selects a number between **1 and 100**
2. Enter your guess in the input field
3. Click the "Guess" button to submit your answer
4. The game will tell you if your guess is too HIGH or too LOW
5. You have **5 attempts** to guess the correct number
6. Guess correctly to win $1000 and enjoy a confetti celebration! 🎉

## ✨ Features

- **Random Number Generation**: Each game generates a new random number between 1-100
- **Attempt Counter**: Tracks how many guesses you've made
- **Smart Hints**: 
  - Tells you if your guess is too high or too low
  - Shows remaining attempts
  - Color-coded feedback (green for correct, orange for hints, red for errors)
- **Input Validation**: 
  - Checks for valid numbers
  - Ensures guesses are within the 1-100 range
- **Confetti Celebration**: Win and enjoy an animated confetti celebration with emojis! 🎊
- **Game Over Logic**: Shows the correct answer if you run out of attempts

## 💻 Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with custom fonts (JetBrains Mono & Roboto)
- **Vanilla JavaScript** - Game logic and DOM manipulation

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone this repository:
```bash
   git clone https://github.com/MarlonWelimaluwa/Guess-the-Number.git
```

2. Navigate to the project directory:
```bash
   cd Guess-the-Number
```

3. Open `index.html` in your browser:
```bash
   # On macOS
   open index.html
   
   # On Windows
   start index.html
   
   # On Linux
   xdg-open index.html
```

   Or simply double-click the `index.html` file!

## 📁 Project Structure
```
Guess-the-Number/
│
├── index.html      # Main HTML file
├── style.css       # Styling
├── script.js       # Game logic
└── README.md       # Project documentation
```

## 🎯 Game Rules

- Number range: **1 to 100**
- Maximum attempts: **5**
- Prize for winning: **$1000** (virtual, of course! 💰)

## 🎨 Features Breakdown

### Confetti Animation
When you win, the game triggers an epic celebration with:
- 250 confetti pieces
- Random emojis (🎉, 🎊, ✨, 🌟, 💫, ⭐, 🎈, 💰, 🏆)
- Colorful animated particles
- Bouncing winning message

### Color-Coded Feedback
- 🟢 **Green**: Correct answer!
- 🟠 **Orange**: Your guess is too high or too low
- 🔴 **Red**: Invalid input or game over

## 🎯 Future Enhancements

- [ ] Difficulty levels (Easy: 1-50, Medium: 1-100, Hard: 1-500)
- [ ] High score tracking (fewest attempts)
- [ ] Timer challenge mode
- [ ] Sound effects for correct/wrong guesses
- [ ] Restart button without page reload
- [ ] Leaderboard system
- [ ] Mobile-responsive design improvements

## 👨‍💻 Author

**Marlon Welimaluwa**
- GitHub: [@MarlonWelimaluwa](https://github.com/MarlonWelimaluwa)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Enjoy the game and good luck winning that $1000!** 🍀💰

