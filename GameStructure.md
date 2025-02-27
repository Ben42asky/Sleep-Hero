# Sleep Hero - Game Structure

## Game Flow
1. Home Screen → Main Menu → Gameplay → Victory → Next Challenge or Results

## Core Game Elements

### Challenges
- Each challenge represents a sleep-related obstacle
- Current challenges:
  1. "Battle Sleep Anxiety" (Anxiety Monster)
  2. "Conquer Racing Thoughts" (Thought Spiral)

### Actions
- Positive Actions (Help Sleep):
  * Deep Breathing (+25% progress, +30 points)
  * Progressive Relaxation (+30% progress, +35 points)
  * Quick Meditation (+25% progress, +30 points)
  * Calming Music (+20% progress, +25 points)
  * Write Worries Down (+30% progress, +35 points)
  * Practice Gratitude (+25% progress, +30 points)

- Negative Actions (Hurt Sleep):
  * Check Phone (-15% progress, -10 points)
  * Schedule Worry Time (-20% progress, -15 points)
  * Ruminate on Problems (-25% progress, -20 points)

### Scoring System
- Base points for completing challenges
- Points for each positive action
- Penalties for negative actions
- Total score accumulates across all challenges

### Achievements
1. "First Victory" - Complete first challenge
2. "Perfect Battle" - Win without losing energy
3. "High Scorer" - Score 500+ points in one battle
4. "Dream Master" - Complete all challenges

## Educational Goals

### Sleep Hygiene Lessons
1. Identify harmful sleep behaviors
2. Learn effective relaxation techniques
3. Understand importance of bedtime routine
4. Practice mindfulness and stress management

### Behavioral Reinforcement
- Immediate feedback on action choices
- Visual progress tracking
- Reward system through points and achievements
- Multiple attempts allowed for learning

## Technical Implementation

### State Management
- Game progress stored in localStorage
- Tracks:
  * Current sleep progress
  * Challenge number
  * Points (current and total)
  * Achievements
  * Action history

### UI/UX Features
- Animated feedback for actions
- Progress bar for sleep quality
- Achievement popups
- Point accumulation animations
- Monster reactions to player actions

### Component Structure
1. Core Game Components:
   - ProgressBar (sleep progress)
   - ActionButton (available actions)
   - MonsterDisplay (current challenge)
   - ScoreDisplay (points tracking)

2. Feedback Components:
   - AchievementPopup
   - PointsPopup
   - Action feedback messages

## Victory Conditions
1. Reach 100% sleep progress
2. Use strategic combination of actions
3. Avoid too many negative actions
4. Complete all challenges for full game victory
