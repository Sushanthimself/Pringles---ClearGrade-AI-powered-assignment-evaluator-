/**
 * ScoreCard Component (Ab's file)
 *
 * Props:
 *   - results: Array<{ criterion: string, score: number, max_score: number, feedback: string }>
 *   - totalScore: number
 *   - totalMaxScore: number
 *
 * Features to build:
 *   - Render one card per criterion: name, score/max, feedback
 *   - Show overall total at the bottom
 *   - Use green for high scores, yellow for medium, red for low
 *     (N will provide CSS classes: .score-high, .score-medium, .score-low)
 */

import React from "react";

export default function ScoreCard({ results, totalScore, totalMaxScore }) {
  // TODO: Ab — build this component
  if (!results || results.length === 0) return null;

  return (
    <div className="score-card">
      <h2>🏆 Results</h2>
      <p style={{ color: "#888" }}>Ab — build your component here</p>
    </div>
  );
}
