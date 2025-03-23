import { create } from 'zustand';

interface AIState {
  loading: boolean;
  error: string | null;
  suggestion: string | null;
  generateSuggestion: (prompt?: string) => Promise<void>;
}

export const useAIStore = create<AIState>((set) => ({
  loading: false,
  error: null,
  suggestion: null,
  generateSuggestion: async (prompt?: string) => {
    set({ loading: true, error: null });
    try {
      const defaultPrompt = "Suggest a fun activity for quality time with family that can be done indoors and promotes bonding and conversation.";
      
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "google/gemma-3-27b-it:free",
          "messages": [
            {
              "role": "system",
              "content": "You are an expert in suggesting engaging activities for quality time with family and friends. Your suggestions should be specific, actionable, and consider different group sizes, budgets, and settings. Always include setup instructions and tips for making the activity more engaging."
            },
            {
              "role": "user",
              "content": prompt || defaultPrompt
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get AI suggestion');
      }

      const data = await response.json();
      set({ suggestion: data.choices[0].message.content, loading: false });
    } catch (error) {
      set({ error: 'Failed to generate suggestion. Please try again.', loading: false });
    }
  }
}));