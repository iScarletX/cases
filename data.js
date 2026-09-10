window.BENCHMARK_DATA = {
  "version": 1,
  "generatedAt": "2026-09-10T08:01:05.612Z",
  "model": "GPT-6 Astra",
  "boardCount": 30,
  "inputSha256": "21ea176cfc422753d956f89507d46c130310e70b4d6ff4b8b0f149ec6ace1f0e",
  "cases": [
    {
      "id": "c01",
      "name": "乙游3D"
    },
    {
      "id": "c02",
      "name": "写实古风"
    },
    {
      "id": "c03",
      "name": "半写实真人"
    },
    {
      "id": "c04",
      "name": "国漫3D"
    },
    {
      "id": "c05",
      "name": "复古港风"
    },
    {
      "id": "c06",
      "name": "现代都市"
    }
  ],
  "excludedCases": [
    {
      "name": "Galgame",
      "reason": "No complete set of five canonical Boards"
    },
    {
      "name": "Q版3D",
      "reason": "No complete set of five canonical Boards"
    },
    {
      "name": "像素风",
      "reason": "No complete set of five canonical Boards"
    },
    {
      "name": "吉卜力",
      "reason": "No complete set of five canonical Boards"
    },
    {
      "name": "国漫2D",
      "reason": "No complete set of five canonical Boards"
    },
    {
      "name": "恶搞美漫",
      "reason": "No complete set of five canonical Boards"
    },
    {
      "name": "水墨国风",
      "reason": "No complete set of five canonical Boards"
    },
    {
      "name": "游戏CG",
      "reason": "No complete set of five canonical Boards"
    },
    {
      "name": "真人插画",
      "reason": "No complete set of five canonical Boards"
    },
    {
      "name": "赛博朋克",
      "reason": "No complete set of five canonical Boards"
    }
  ],
  "trials": [
    {
      "id": "t1",
      "name": "game-ui-frontend",
      "ready": false,
      "previewPath": "previews/t1",
      "run": {
        "startedAt": "2026-09-10T02:23:47.644Z"
      },
      "validation": {
        "passed": true,
        "output": "Skill is valid!",
        "missingReferences": [
          "../../references/frontend-prompts.md",
          "../web-game-foundations/SKILL.md",
          "../../references/three-hud-layout-patterns.md",
          "../react-three-fiber-game/SKILL.md",
          "../../references/playtest-checklist.md"
        ]
      }
    },
    {
      "id": "t2",
      "name": "game-ui-design",
      "ready": false,
      "previewPath": "previews/t2",
      "run": {
        "startedAt": "2026-09-10T02:23:46.312Z"
      },
      "validation": {
        "passed": false,
        "output": "Description is too long (1137 characters). Maximum is 1024 characters.",
        "missingReferences": []
      }
    },
    {
      "id": "t3",
      "name": "game-ui-ux",
      "ready": false,
      "previewPath": "previews/t3",
      "run": {
        "startedAt": "2026-09-10T02:23:52.252Z"
      },
      "validation": {
        "passed": true,
        "output": "Skill is valid!",
        "missingReferences": []
      }
    }
  ],
  "scores": [],
  "protocol": {
    "version": 1,
    "createdAt": "2026-09-10T02:23:19.747Z",
    "model": "inherited parent: gpt-6-astra",
    "reasoning": "inherited identical parent setting",
    "taskSha256": "ee369e3ef1bdc40000502fa0d837581845d6f1d7766bb026faac0be7e7e788cd",
    "inputSha256": "21ea176cfc422753d956f89507d46c130310e70b4d6ff4b8b0f149ec6ace1f0e",
    "boardCount": 30,
    "caseCount": 6,
    "scoring": {
      "visual": 40,
      "interaction": 40,
      "usability": 20,
      "pass": 80
    },
    "singleRun": true,
    "deadline": null,
    "blindPreference": "manual only; denominator 30 Boards; absent until at least one vote",
    "isolation": "fresh agent contexts; separate directories; same host; filesystem restrictions enforced by task instructions, not OS sandbox",
    "referenceLeakPrevention": "Offline reference HTML is coordinator-only because it contains prior candidate implementations.",
    "skills": [
      {
        "id": "t1",
        "name": "game-ui-frontend",
        "runRoot": "/Users/sixiang/Documents/Codex/2026-09-10/three-skill-board-web-benchmark/work/runs/trial-1",
        "skillEntrypoint": "/Users/sixiang/Documents/Codex/2026-09-10/three-skill-board-web-benchmark/work/runs/trial-1/skill/game-ui-frontend/SKILL.md",
        "skillFiles": {
          "SKILL.md": "cd017fe0761207dcfd801f236490896cbf1cd6627ee267c801a19c7c780b7a01",
          "agents/openai.yaml": "f82611816d1a3cecee1344543c717aeb906eecbc95ee7f97a212eacb48023aa9"
        },
        "validation": {
          "passed": true,
          "output": "Skill is valid!",
          "missingReferences": [
            "../../references/frontend-prompts.md",
            "../web-game-foundations/SKILL.md",
            "../../references/three-hud-layout-patterns.md",
            "../react-three-fiber-game/SKILL.md",
            "../../references/playtest-checklist.md"
          ]
        }
      },
      {
        "id": "t2",
        "name": "game-ui-design",
        "runRoot": "/Users/sixiang/Documents/Codex/2026-09-10/three-skill-board-web-benchmark/work/runs/trial-2",
        "skillEntrypoint": "/Users/sixiang/Documents/Codex/2026-09-10/three-skill-board-web-benchmark/work/runs/trial-2/skill/game-ui-design/SKILL.md",
        "skillFiles": {
          "SKILL.md": "24797d586cf7de743c930295a2be7356bda42031177f8de9d53855f99822a940",
          "references/patterns.md": "7b9987b655814c7b47779c7b495251bc2e09628aa733e6fc85e6e471ae108a9f",
          "references/sharp_edges.md": "47afdfcce86ee110287cab6842fd8187ed19477bb3aae1f493f158816771c75d",
          "references/validations.md": "7a6b38fdd03cc14495167d9c712d3e41a585dc236e86b80ccfcaf33102aec324"
        },
        "validation": {
          "passed": false,
          "output": "Description is too long (1137 characters). Maximum is 1024 characters.",
          "missingReferences": []
        }
      },
      {
        "id": "t3",
        "name": "game-ui-ux",
        "runRoot": "/Users/sixiang/Documents/Codex/2026-09-10/three-skill-board-web-benchmark/work/runs/trial-3",
        "skillEntrypoint": "/Users/sixiang/Documents/Codex/2026-09-10/three-skill-board-web-benchmark/work/runs/trial-3/skill/game-ui-ux/SKILL.md",
        "skillFiles": {
          "SKILL.md": "8a094c84a377503aa8f4c40df676d1c6b6fc07d36ff95554ce06467f1614397e",
          "references/layout-and-flow.md": "000d944db77155ebf97fde035a3d4fbe69ef0ae348e9dbcaff48c5ea134d7d69"
        },
        "validation": {
          "passed": true,
          "output": "Skill is valid!",
          "missingReferences": []
        }
      }
    ]
  }
};
