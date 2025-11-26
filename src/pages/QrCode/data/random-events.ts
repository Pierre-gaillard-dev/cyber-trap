export interface RandomEvent {
  title: string;
  description: string;
  effect: string;
  frequency: number; // Probability weight
}

export const randomEvents: RandomEvent[] = [
  {
    title: "Lucky One",
    description: "You just found an incredible website with a Boss card !",
    effect: "Gain 1 Boss card",
    frequency: 1,
  },
  {
    title: "You have been hacked by a script kiddie !",
    description:
      "Unknown script kiddie just exploited a vulnerability in your browser to gain access to your system.",
    effect: "Go back 3 steps",
    frequency: 3,
  },
];

export function getRandomEvent(): RandomEvent | null {
  const totalFrequency = randomEvents.reduce(
    (sum, event) => sum + event.frequency,
    0
  );
  const randomValue = Math.random() * totalFrequency;
  let cumulativeFrequency = 0;

  for (const event of randomEvents) {
    cumulativeFrequency += event.frequency;
    if (randomValue < cumulativeFrequency) {
      return event;
    }
  }

  return null; // Fallback, should not reach here
}
