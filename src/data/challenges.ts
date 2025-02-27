import { Challenge } from '../components/types'

export const CHALLENGES: Challenge[] = [
  {
    title: "Battle Sleep Anxiety!",
    monster: "😰 Anxiety Monster",
    basePoints: 100,
    actions: [
      { 
        action: "breathe", 
        label: "🫁 Deep Breathing", 
        sleepEffect: 25, 
        points: 30 
      },
      { 
        action: "phone", 
        label: "📱 Check Phone", 
        sleepEffect: -15, 
        points: -10 
      },
      { 
        action: "progressive", 
        label: "💆 Progressive Relaxation", 
        sleepEffect: 30, 
        points: 35 
      },
      { 
        action: "meditation", 
        label: "🧘 Quick Meditation", 
        sleepEffect: 25, 
        points: 30 
      },
      { 
        action: "music", 
        label: "🎵 Calming Music", 
        sleepEffect: 20, 
        points: 25 
      },
      { 
        action: "worry_time", 
        label: "⏰ Schedule Worry Time", 
        sleepEffect: -20, 
        points: -15 
      }
    ]
  },
  {
    title: "Conquer Racing Thoughts!",
    monster: "🤯 Thought Spiral",
    basePoints: 150,
    actions: [
      { 
        action: "journal", 
        label: "📝 Write Worries Down", 
        sleepEffect: 30, 
        points: 35 
      },
      { 
        action: "worry", 
        label: "😣 Ruminate on Problems", 
        sleepEffect: -25, 
        points: -20 
      },
      { 
        action: "gratitude", 
        label: "🙏 Practice Gratitude", 
        sleepEffect: 25, 
        points: 30 
      },
      { 
        action: "mindfulness", 
        label: "🌱 Mindfulness Exercise", 
        sleepEffect: 25, 
        points: 30 
      },
      { 
        action: "distraction", 
        label: "🎯 Positive Distraction", 
        sleepEffect: 20, 
        points: 25 
      },
      { 
        action: "reframe", 
        label: "🔄 Reframe Thoughts", 
        sleepEffect: -20, 
        points: -15 
      }
    ]
  }
]
