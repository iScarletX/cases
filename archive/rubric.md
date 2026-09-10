# Frozen Scoring Rubric

Recorded before any candidate submission was completed. This is an explicit-load, one-run benchmark of the uploaded packages, not a test of automatic Skill activation. Skill packaging defects are reported separately from webpage scoring.

## Per-Board, 100 Points

Visual, 40: layout, position and proportions 10; text accuracy, typography and hierarchy 8; shape/material/detail fidelity 12; art/background alignment and overall style 10. Inspect the canonical Board's left main preview and state/component annotations against the rendered output at 1600 x 900.

Interaction, 40: hover/focus feedback and stable hit geometry 16; selection/state transitions 14; the Board's available expansion/navigation/close behavior 10. For Boards without an expansion specification, assess the visible navigation and state controls instead. A changed screenshot alone is not evidence of correct interaction; evaluate matching labels and appropriate resulting states.

Completeness/usability, 20: required page, text, component and asset completeness 8; local/offline execution, loading and console behavior 6; mobile/keyboard access, overflow and readable controls 6.

## Failure Rules

- Missing or nonrendering output: 0/100.
- Whole explanatory Board, or flattened main-preview image plus invisible hitboxes: interaction <= 6 and usability <= 6. Individual component crops are allowed, with real DOM state controls and same-case provenance.
- Any cross-case asset: automatic failure independent of numeric score, called out on the record and excluded from passing counts.
- A background image alone is allowed as artwork, but an already rendered UI flattened into it cannot stand in for rebuilt visible controls.
- Broken keyboard or hover, layout movement, incorrect visible text, missing expected states and asset contamination are scored against the corresponding dimension using screenshot and browser evidence.
- Runtime does not alter score. Each Case is the mean of its five Boards; overall is the mean of all six Case scores. Passing is >=80 with no automatic-failure flag.

## Evidence and Limits

Preserve full raw submissions and their SHA-256 files before testing; do not repair them. Test all 90 URLs on desktop and mobile, check page errors and local resource loads, activate each visible control that can be safely reset by reloading the page, compare geometry before/after hover, and collect default/hover/click screenshots and structured observations.

Visual/interaction judgments are coordinator model judgments with evidence, not manual human blind votes or statistically calibrated laboratory measurements. Human preference is collected separately in the browser; the metric remains absent before any vote. Multiple reruns would be needed to quantify model variance but are outside the one-run user protocol.

The candidate source files in submissions/ remain byte-preserved. Copies under trials/ only receive the identical bridge script reference on HTML pages, for browser-independent pointer synchronization via postMessage. Scoring uses original submissions, not the comparison-layer copy.
