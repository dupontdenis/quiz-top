# LearnByYourself - Quiz Application

An interactive trivia quiz application that fetches questions from the Open Trivia Database API with auto-correction features, infinite scrolling, and filtering capabilities.

## Features

### 🎯 Core Functionality

- **Dynamic Quiz Loading**: Fetches trivia questions from the Open Trivia Database API
- **Infinite Scrolling**: Automatically loads more questions as you scroll down
- **Real-time Filtering**: Search and filter questions by difficulty level or content
- **Difficulty Indicators**: Visual medals (🥇🥈🥉) for easy, medium, and hard questions
- **Hover to Reveal**: Hover over the difficulty badge to see the correct answer

### 🔍 Filter in Action

The filter input allows you to search through questions by:

- Difficulty level (using medal emojis: 🥇🥈🥉)
- Question text
- Answer text

### 📜 Scrolling Event in Action

Infinite scroll implementation that:

- Detects when user reaches the bottom of the page
- Shows an animated loader while fetching new questions
- Automatically appends new content

## Project Structure

```
quiz-top-1/
├── index.html      # Main HTML structure
├── methods.js      # JavaScript logic and API integration
├── style.css       # Styling and animations
└── README.md       # Project documentation
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with animations
- **JavaScript (ES6+)**: Async/await, Fetch API, DOM manipulation
- **Open Trivia Database API**: Question source
- **Google Fonts**: Ubuntu font family

## How It Works

### API Integration

The app fetches trivia questions from the Open Trivia Database:

```javascript
https://opentdb.com/api.php?amount={limit}
```

### Difficulty Mapping

Questions are categorized with visual indicators:

- 🥇 Easy
- 🥈 Medium
- 🥉 Hard

### Auto-Correction Feature

- Answers are hidden by default
- Hover over the difficulty badge to reveal the correct answer
- Answer appears with an ❎ indicator

## Key Components

### JavaScript Functions

- `fetchPosts()`: Retrieves questions from the API
- `displayPosts()`: Renders questions to the DOM
- `loadMorePosts()`: Handles infinite scroll loading
- `filterPosts()`: Implements search/filter functionality

### Event Listeners

- **Scroll Event**: Triggers loading of additional questions
- **Input Event**: Filters displayed questions in real-time

### UI Elements

- Filter input with placeholder "Filter ...🥇🥈🥉"
- Animated loader with bouncing circles
- Question cards with hover effects

## Usage

1. Open `index.html` in a web browser
2. Questions will automatically load on page load
3. Scroll down to load more questions
4. Use the filter input to search by difficulty or content
5. Hover over difficulty badges to see correct answers

## Styling Features

- Responsive design (max-width: 800px)
- Blue color scheme (#296ca8, #4992d3)
- Smooth transitions and animations
- Bouncing loader animation
- Hover effects for answer reveal

## Browser Compatibility

Works with modern browsers that support:

- ES6+ JavaScript features
- Fetch API
- CSS Grid/Flexbox
- CSS animations
