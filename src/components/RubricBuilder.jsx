/**
 * RubricBuilder Component (Ab's file)
 *
 * Props:
 *   - rubric: Array<{ name: string, max_marks: number }> — current rubric state
 *   - onChange: (newRubric) => void — called when rubric changes
 *
 * Features to build:
 *   - Input fields for criterion name + max marks
 *   - Add/remove criteria dynamically
 *   - Pass rubric array up via onChange prop
 */

import React from "react";

export default function RubricBuilder({ rubric, onChange }) {
  // TODO: Ab — build this component
  return (
    <div className="rubric-builder">
      <h2>📝 Rubric Builder</h2>
      <p style={{ color: "#888" }}>Ab — build your component here</p>
    </div>
  );
}
