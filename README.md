# 🧠 Rick and Morty Memory Game

<div align="center">

![Rick and Morty Memory Game](https://img.shields.io/badge/Game-Memory%20Challenge-brightgreen)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-cyan)

**🎮 [Play Live Game](https://memory-game-swart-chi.vercel.app/) 🎮**

*Test your memory with this epic Rick and Morty themed card game!*

</div>

## 🎯 Game Overview

Challenge your memory in this thrilling Rick and Morty universe card game! Click cards to reveal characters, but remember - never click the same card twice! The goal is to achieve the highest score possible by clicking new cards each round.

### 🎮 How to Play
1. **Choose your difficulty**: Easy (3 cards), Medium (4 cards), or Hard (5 cards)
2. **Click a card** to reveal a Rick and Morty character
3. **Cards shuffle** after each click - remember which characters you've seen!
4. **Avoid clicking the same character twice** - game over if you do!
5. **Build your score** by successfully clicking new characters each round
6. **Aim for 20 points** to achieve the ultimate victory!

## ✨ Features

### 🎨 **Immersive Experience**
- **Stunning 3D card animations** with interactive hover effects
- **Dynamic background video** featuring Rick and Morty scenes
- **Atmospheric theme music** with volume controls
- **Responsive design** - perfect on mobile, tablet, and desktop

### 🎮 **Game Mechanics**
- **Three difficulty levels** with increasing challenge
- **Smart card shuffling** keeps you guessing
- **Score tracking** with best score persistence
- **Game over and victory screens** with engaging animations
- **Play again functionality** for endless fun

### 📱 **Mobile Optimized**
- **Touch-friendly interface** designed for mobile gameplay
- **Responsive card layouts** that adapt to screen size
- **Optimized positioning** for comfortable mobile experience

### 🚀 **Technical Excellence**
- **Lightning-fast performance** powered by Vite
- **Real-time character data** from Rick and Morty API
- **Smooth animations** using CSS transforms and Tailwind
- **Modern React 19** with hooks and state management

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React 19** | Modern UI framework with latest features |
| **Vite** | Super-fast build tool and dev server |
| **Tailwind CSS** | Utility-first styling for responsive design |
| **Rick and Morty API** | Real character data and images |
| **Vercel** | Production deployment platform |

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn**

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/binit2-1/memory-game.git

# Navigate to project
cd memory-game

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to play locally!

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
memory-game/
├── 🎬 public/                 # Game assets (videos, images, audio)
│   ├── bgVideo.mp4           # Background video
│   ├── card.jpg              # Card back design
│   ├── gameOver.jpg          # Game over background
│   └── gameWon.jpg           # Victory background
├── ⚛️ src/
│   ├── 🔌 api/               # API integration
│   │   └── rickAndMorty.js   # Character data fetching
│   ├── 🧩 components/        # Reusable components
│   │   ├── FlipCard.jsx      # Animated game cards
│   │   ├── Scorecard.jsx     # Score display
│   │   ├── GameOverScreen.jsx # Game over modal
│   │   └── GameWonScreen.jsx # Victory modal
│   ├── 📄 pages/             # Game difficulty pages
│   │   ├── GameBoardEasy.jsx
│   │   ├── GameBoardMed.jsx
│   │   └── GameBoardHard.jsx
│   ├── App.jsx               # Main app component
│   └── main.jsx              # App entry point
└── ⚙️ Config files            # Vite, Tailwind, etc.
```

## 🎮 Game Components

### 🃏 **FlipCard.jsx**
- **3D flip animations** with perspective transforms
- **Interactive hover effects** with mouse tracking
- **Responsive sizing** for all screen sizes
- **Character image display** with smooth transitions

### 📊 **Scorecard.jsx**
- **Real-time score tracking** 
- **Best score persistence**
- **Responsive typography**
- **Clean, readable design**

### 🎯 **Game Boards**
- **Multiple difficulty levels** (Easy/Medium/Hard)
- **Smart card management** with shuffle logic
- **Win/lose condition handling**
- **Mobile-optimized layouts**

### 🎭 **Modal Screens**
- **Animated game over screen** with themed background
- **Victory celebration screen** with special effects
- **Play again functionality**
- **Responsive design**

## 🎨 Design Features

### 🎪 **Visual Theme**
- **Rick and Morty aesthetic** throughout the game
- **Sci-fi color palette** with neon accents
- **Custom fonts**: Bangers for titles, Inter for body
- **Immersive background video**

### 📱 **Responsive Design**
- **Mobile-first approach** for optimal mobile experience
- **Flexible card grids** that adapt to screen size
- **Touch-optimized interactions**
- **Cross-device compatibility**

## 🌟 Live Demo

**🎮 [Play Now: memory-game-swart-chi.vercel.app](https://memory-game-swart-chi.vercel.app/)**

Try it on your phone, tablet, or desktop - the game adapts perfectly to any screen size!

## 🤝 Contributing

We love contributions! Here's how you can help:

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **💾 Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **📤 Push** to the branch (`git push origin feature/amazing-feature`)
5. **🎯 Open** a Pull Request

### Ideas for Contributions
- 🎵 Additional sound effects
- 🏆 High score leaderboard
- 🎨 More character themes
- 🎮 Additional game modes
- ⚡ Performance optimizations

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Rick and Morty API** for providing amazing character data
- **Adult Swim** for creating the incredible Rick and Morty universe
- **React Team** for the fantastic framework
- **Tailwind CSS** for making styling a breeze
- **Vercel** for seamless deployment

---

<div align="center">

**🚀 Built with ❤️ using React + Vite + Tailwind CSS**

*Don't forget to ⭐ star this repo if you enjoyed the game!*

</div>