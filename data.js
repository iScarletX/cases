window.BENCHMARK_DATA = {
  "version": 1,
  "generatedAt": "2026-09-10T09:09:31.310Z",
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
      "ready": true,
      "previewPath": "previews/t1",
      "run": {
        "startedAt": "2026-09-10T02:23:47.644Z",
        "finishedAt": "2026-09-10T09:01:03.192Z",
        "acceptedAt": "2026-09-10T09:01:03.192Z",
        "originalFinishedAt": null,
        "durationSeconds": 23835.548,
        "meanSecondsPerBoard": 794.5182666666666,
        "boardCount": 30,
        "completionSource": "coordinator-acceptance",
        "originalRunMetadata": {
          "startedAt": "2026-09-10T02:23:47.644Z"
        },
        "acceptanceReason": "User explicitly defined completion as all 30 Boards converted to webpages and requested immediate acceptance without further quality gates. This timestamp records coordinator receipt, not a candidate-authored end marker."
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
      "ready": true,
      "previewPath": "previews/t2",
      "run": {
        "startedAt": "2026-09-10T02:23:46.312Z",
        "finishedAt": "2026-09-10T09:01:03.792Z",
        "acceptedAt": "2026-09-10T09:01:03.792Z",
        "originalFinishedAt": null,
        "durationSeconds": 23837.48,
        "meanSecondsPerBoard": 794.5826666666667,
        "boardCount": 30,
        "completionSource": "coordinator-acceptance",
        "originalRunMetadata": {
          "startedAt": "2026-09-10T02:23:46.312Z"
        },
        "acceptanceReason": "User explicitly defined completion as all 30 Boards converted to webpages and requested immediate acceptance without further quality gates. This timestamp records coordinator receipt, not a candidate-authored end marker."
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
      "ready": true,
      "previewPath": "previews/t3",
      "run": {
        "startedAt": "2026-09-10T02:23:52.252Z",
        "finishedAt": "2026-09-10T09:01:04.883Z",
        "acceptedAt": "2026-09-10T09:01:04.883Z",
        "originalFinishedAt": null,
        "durationSeconds": 23832.631,
        "meanSecondsPerBoard": 794.4210333333334,
        "boardCount": 30,
        "completionSource": "coordinator-acceptance",
        "originalRunMetadata": {
          "startedAt": "2026-09-10T02:23:52.252Z"
        },
        "acceptanceReason": "User explicitly defined completion as all 30 Boards converted to webpages and requested immediate acceptance without further quality gates. This timestamp records coordinator receipt, not a candidate-authored end marker."
      },
      "validation": {
        "passed": true,
        "output": "Skill is valid!",
        "missingReferences": []
      }
    }
  ],
  "scores": [
    {
      "trialId": "t1",
      "caseId": "c01",
      "board": "menu",
      "visual": 39,
      "interaction": 40,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：菜单位置和纸签形状接近原图，三项导航及悬停可用。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c01-menu-desktop.jpg",
        "mobile": "evidence/t1/c01-menu-mobile.jpg",
        "hover": "evidence/t1/c01-menu-hover.jpg",
        "click": "evidence/t1/c01-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c01&board=menu",
      "scoredPreview": "previews/t1/index.html?case=c01&board=menu"
    },
    {
      "trialId": "t1",
      "caseId": "c01",
      "board": "choice",
      "visual": 36,
      "interaction": 35,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：问题条基本还原；选项纸面、折角和悬停阴影被简化或改变。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：c04/c05 的选中图片已更改；保留旧快照分数，不凭代码推测改善幅度。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c01-choice-desktop.jpg",
        "mobile": "evidence/t1/c01-choice-mobile.jpg",
        "hover": "evidence/t1/c01-choice-hover.jpg",
        "click": "evidence/t1/c01-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c01&board=choice",
      "scoredPreview": "previews/t1/index.html?case=c01&board=choice"
    },
    {
      "trialId": "t1",
      "caseId": "c01",
      "board": "route",
      "visual": 37,
      "interaction": 36,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：五节点、首图和选中分支完整，但连线箭头偏粗，节点状态印记经过重绘。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c01-route-desktop.jpg",
        "mobile": "evidence/t1/c01-route-mobile.jpg",
        "hover": "evidence/t1/c01-route-hover.jpg",
        "click": "evidence/t1/c01-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c01&board=route",
      "scoredPreview": "previews/t1/index.html?case=c01&board=route"
    },
    {
      "trialId": "t1",
      "caseId": "c01",
      "board": "character",
      "visual": 34,
      "interaction": 32,
      "usability": 17,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：卷轴、肖像和文字版面被简化，展开正文左沿局部被装订结构遮挡。",
        "已评审快照：鼠标点击收起后，角色会重新展开；Esc 可以收起。所有角色悬停及手机选择可以触发。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：接收版把 focus 放在收起之前，旧快照的焦点重新展开路径已改变；鼠标布局变化的影响未复测，旧扣分不能视为最终版故障确认。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c01-character-desktop.jpg",
        "mobile": "evidence/t1/c01-character-mobile.jpg",
        "hover": "evidence/t1/c01-character-hover.jpg",
        "click": "evidence/t1/c01-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c01&board=character",
      "scoredPreview": "previews/t1/index.html?case=c01&board=character"
    },
    {
      "trialId": "t1",
      "caseId": "c01",
      "board": "ending",
      "visual": 35,
      "interaction": 37,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：完成提示、其它结局和三张推荐齐全，纸卷和状态框体简化。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：接收版附带候选自检记录：155 项中 6 个手机 Ending 弹窗断言失败。属于候选报告，未独立重跑，未据此虚构新的验证结论。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c01-ending-desktop.jpg",
        "mobile": "evidence/t1/c01-ending-mobile.jpg",
        "hover": "evidence/t1/c01-ending-hover.jpg",
        "click": "evidence/t1/c01-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c01&board=ending",
      "scoredPreview": "previews/t1/index.html?case=c01&board=ending"
    },
    {
      "trialId": "t1",
      "caseId": "c02",
      "board": "menu",
      "visual": 39,
      "interaction": 36,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：木质菜单接近原图，但非选中状态使用整张组件灰度及亮度滤镜，状态材质与原 Board 有差异。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c02-menu-desktop.jpg",
        "mobile": "evidence/t1/c02-menu-mobile.jpg",
        "hover": "evidence/t1/c02-menu-hover.jpg",
        "click": "evidence/t1/c02-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c02&board=menu",
      "scoredPreview": "previews/t1/index.html?case=c02&board=menu"
    },
    {
      "trialId": "t1",
      "caseId": "c02",
      "board": "choice",
      "visual": 36,
      "interaction": 39,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：左选项字重、长度和边缘比例不同，选择、返回和继续流程可用。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：c04/c05 的选中图片已更改；保留旧快照分数，不凭代码推测改善幅度。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c02-choice-desktop.jpg",
        "mobile": "evidence/t1/c02-choice-mobile.jpg",
        "hover": "evidence/t1/c02-choice-hover.jpg",
        "click": "evidence/t1/c02-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c02&board=choice",
      "scoredPreview": "previews/t1/index.html?case=c02&board=choice"
    },
    {
      "trialId": "t1",
      "caseId": "c02",
      "board": "route",
      "visual": 38,
      "interaction": 38,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：透明节点、首图与分支位置接近，状态印记和边框细节略有不同。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c02-route-desktop.jpg",
        "mobile": "evidence/t1/c02-route-mobile.jpg",
        "hover": "evidence/t1/c02-route-hover.jpg",
        "click": "evidence/t1/c02-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c02&board=route",
      "scoredPreview": "previews/t1/index.html?case=c02&board=route"
    },
    {
      "trialId": "t1",
      "caseId": "c02",
      "board": "character",
      "visual": 35,
      "interaction": 32,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：人物构图和关系文字齐全，书脊、纸面及展开页层级有所简化。",
        "已评审快照：鼠标点击收起后，角色会重新展开；Esc 可以收起。所有角色悬停及手机选择可以触发。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：接收版把 focus 放在收起之前，旧快照的焦点重新展开路径已改变；鼠标布局变化的影响未复测，旧扣分不能视为最终版故障确认。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c02-character-desktop.jpg",
        "mobile": "evidence/t1/c02-character-mobile.jpg",
        "hover": "evidence/t1/c02-character-hover.jpg",
        "click": "evidence/t1/c02-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c02&board=character",
      "scoredPreview": "previews/t1/index.html?case=c02&board=character"
    },
    {
      "trialId": "t1",
      "caseId": "c02",
      "board": "ending",
      "visual": 32,
      "interaction": 36,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：完成横幅和推荐框使用平直框体，缺少玉石、纸框及印记细节。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：接收版附带候选自检记录：155 项中 6 个手机 Ending 弹窗断言失败。属于候选报告，未独立重跑，未据此虚构新的验证结论。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c02-ending-desktop.jpg",
        "mobile": "evidence/t1/c02-ending-mobile.jpg",
        "hover": "evidence/t1/c02-ending-hover.jpg",
        "click": "evidence/t1/c02-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c02&board=ending",
      "scoredPreview": "previews/t1/index.html?case=c02&board=ending"
    },
    {
      "trialId": "t1",
      "caseId": "c03",
      "board": "menu",
      "visual": 39,
      "interaction": 40,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：铅笔纸片菜单基本还原，三项导航和悬停可用。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c03-menu-desktop.jpg",
        "mobile": "evidence/t1/c03-menu-mobile.jpg",
        "hover": "evidence/t1/c03-menu-hover.jpg",
        "click": "evidence/t1/c03-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c03&board=menu",
      "scoredPreview": "previews/t1/index.html?case=c03&board=menu"
    },
    {
      "trialId": "t1",
      "caseId": "c03",
      "board": "choice",
      "visual": 39,
      "interaction": 39,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：题签、两张底部选项及选择流程接近原图。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：c04/c05 的选中图片已更改；保留旧快照分数，不凭代码推测改善幅度。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c03-choice-desktop.jpg",
        "mobile": "evidence/t1/c03-choice-mobile.jpg",
        "hover": "evidence/t1/c03-choice-hover.jpg",
        "click": "evidence/t1/c03-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c03&board=choice",
      "scoredPreview": "previews/t1/index.html?case=c03&board=choice"
    },
    {
      "trialId": "t1",
      "caseId": "c03",
      "board": "route",
      "visual": 35,
      "interaction": 37,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：节点框体与夹子简化，编号、标题和选中线条层级存在偏差。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c03-route-desktop.jpg",
        "mobile": "evidence/t1/c03-route-mobile.jpg",
        "hover": "evidence/t1/c03-route-hover.jpg",
        "click": "evidence/t1/c03-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c03&board=route",
      "scoredPreview": "previews/t1/index.html?case=c03&board=route"
    },
    {
      "trialId": "t1",
      "caseId": "c03",
      "board": "character",
      "visual": 35,
      "interaction": 32,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：四位角色及展开正文完整，但卡片金属夹与纸面细节简化。",
        "已评审快照：鼠标点击收起后，角色会重新展开；Esc 可以收起。所有角色悬停及手机选择可以触发。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：接收版把 focus 放在收起之前，旧快照的焦点重新展开路径已改变；鼠标布局变化的影响未复测，旧扣分不能视为最终版故障确认。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c03-character-desktop.jpg",
        "mobile": "evidence/t1/c03-character-mobile.jpg",
        "hover": "evidence/t1/c03-character-hover.jpg",
        "click": "evidence/t1/c03-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c03&board=character",
      "scoredPreview": "previews/t1/index.html?case=c03&board=character"
    },
    {
      "trialId": "t1",
      "caseId": "c03",
      "board": "ending",
      "visual": 32,
      "interaction": 36,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：完成提示、其它结局及推荐框的金属夹和纸面结构被简化。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：接收版附带候选自检记录：155 项中 6 个手机 Ending 弹窗断言失败。属于候选报告，未独立重跑，未据此虚构新的验证结论。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c03-ending-desktop.jpg",
        "mobile": "evidence/t1/c03-ending-mobile.jpg",
        "hover": "evidence/t1/c03-ending-hover.jpg",
        "click": "evidence/t1/c03-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c03&board=ending",
      "scoredPreview": "previews/t1/index.html?case=c03&board=ending"
    },
    {
      "trialId": "t1",
      "caseId": "c04",
      "board": "menu",
      "visual": 39,
      "interaction": 40,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：右侧青瓷菜单完整可见，位置和比例接近原图。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c04-menu-desktop.jpg",
        "mobile": "evidence/t1/c04-menu-mobile.jpg",
        "hover": "evidence/t1/c04-menu-hover.jpg",
        "click": "evidence/t1/c04-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c04&board=menu",
      "scoredPreview": "previews/t1/index.html?case=c04&board=menu"
    },
    {
      "trialId": "t1",
      "caseId": "c04",
      "board": "choice",
      "visual": 39,
      "interaction": 39,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：青瓷问题条与两组选项接近，点击后的返回和继续流程可用。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：c04/c05 的选中图片已更改；保留旧快照分数，不凭代码推测改善幅度。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c04-choice-desktop.jpg",
        "mobile": "evidence/t1/c04-choice-mobile.jpg",
        "hover": "evidence/t1/c04-choice-hover.jpg",
        "click": "evidence/t1/c04-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c04&board=choice",
      "scoredPreview": "previews/t1/index.html?case=c04&board=choice"
    },
    {
      "trialId": "t1",
      "caseId": "c04",
      "board": "route",
      "visual": 36,
      "interaction": 36,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：节点与首图完整，但选中印记、箭头和连线端点比例有差异。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c04-route-desktop.jpg",
        "mobile": "evidence/t1/c04-route-mobile.jpg",
        "hover": "evidence/t1/c04-route-hover.jpg",
        "click": "evidence/t1/c04-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c04&board=route",
      "scoredPreview": "previews/t1/index.html?case=c04&board=route"
    },
    {
      "trialId": "t1",
      "caseId": "c04",
      "board": "character",
      "visual": 38,
      "interaction": 34,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：独立角色卡和展开页接近原图，部分字体及间距有偏差。",
        "已评审快照：鼠标点击收起后，角色会重新展开；Esc 可以收起。所有角色悬停及手机选择可以触发。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：接收版把 focus 放在收起之前，旧快照的焦点重新展开路径已改变；鼠标布局变化的影响未复测，旧扣分不能视为最终版故障确认。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c04-character-desktop.jpg",
        "mobile": "evidence/t1/c04-character-mobile.jpg",
        "hover": "evidence/t1/c04-character-hover.jpg",
        "click": "evidence/t1/c04-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c04&board=character",
      "scoredPreview": "previews/t1/index.html?case=c04&board=character"
    },
    {
      "trialId": "t1",
      "caseId": "c04",
      "board": "ending",
      "visual": 39,
      "interaction": 39,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：完成横幅、其它结局和推荐卡接近原图，推荐弹窗及返回可用。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：接收版附带候选自检记录：155 项中 6 个手机 Ending 弹窗断言失败。属于候选报告，未独立重跑，未据此虚构新的验证结论。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c04-ending-desktop.jpg",
        "mobile": "evidence/t1/c04-ending-mobile.jpg",
        "hover": "evidence/t1/c04-ending-hover.jpg",
        "click": "evidence/t1/c04-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c04&board=ending",
      "scoredPreview": "previews/t1/index.html?case=c04&board=ending"
    },
    {
      "trialId": "t1",
      "caseId": "c05",
      "board": "menu",
      "visual": 39,
      "interaction": 40,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：右侧磁带票签菜单完整可见，三项导航可用。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c05-menu-desktop.jpg",
        "mobile": "evidence/t1/c05-menu-mobile.jpg",
        "hover": "evidence/t1/c05-menu-hover.jpg",
        "click": "evidence/t1/c05-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c05&board=menu",
      "scoredPreview": "previews/t1/index.html?case=c05&board=menu"
    },
    {
      "trialId": "t1",
      "caseId": "c05",
      "board": "choice",
      "visual": 39,
      "interaction": 39,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：底部问题条和斜角选项接近原图，选择流程完整。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：c04/c05 的选中图片已更改；保留旧快照分数，不凭代码推测改善幅度。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c05-choice-desktop.jpg",
        "mobile": "evidence/t1/c05-choice-mobile.jpg",
        "hover": "evidence/t1/c05-choice-hover.jpg",
        "click": "evidence/t1/c05-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c05&board=choice",
      "scoredPreview": "previews/t1/index.html?case=c05&board=choice"
    },
    {
      "trialId": "t1",
      "caseId": "c05",
      "board": "route",
      "visual": 36,
      "interaction": 36,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：节点、首图和分支齐全，但选中框体色调、状态灯及连线端点比例不同。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c05-route-desktop.jpg",
        "mobile": "evidence/t1/c05-route-mobile.jpg",
        "hover": "evidence/t1/c05-route-hover.jpg",
        "click": "evidence/t1/c05-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c05&board=route",
      "scoredPreview": "previews/t1/index.html?case=c05&board=route"
    },
    {
      "trialId": "t1",
      "caseId": "c05",
      "board": "character",
      "visual": 38,
      "interaction": 34,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：书页展开与人物卡接近原图，文字和间距略有差异。",
        "已评审快照：鼠标点击收起后，角色会重新展开；Esc 可以收起。所有角色悬停及手机选择可以触发。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：接收版把 focus 放在收起之前，旧快照的焦点重新展开路径已改变；鼠标布局变化的影响未复测，旧扣分不能视为最终版故障确认。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c05-character-desktop.jpg",
        "mobile": "evidence/t1/c05-character-mobile.jpg",
        "hover": "evidence/t1/c05-character-hover.jpg",
        "click": "evidence/t1/c05-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c05&board=character",
      "scoredPreview": "previews/t1/index.html?case=c05&board=character"
    },
    {
      "trialId": "t1",
      "caseId": "c05",
      "board": "ending",
      "visual": 39,
      "interaction": 39,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：完成横幅和三张推荐卡接近原图，推荐与其它结局入口可用。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：接收版附带候选自检记录：155 项中 6 个手机 Ending 弹窗断言失败。属于候选报告，未独立重跑，未据此虚构新的验证结论。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c05-ending-desktop.jpg",
        "mobile": "evidence/t1/c05-ending-mobile.jpg",
        "hover": "evidence/t1/c05-ending-hover.jpg",
        "click": "evidence/t1/c05-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c05&board=ending",
      "scoredPreview": "previews/t1/index.html?case=c05&board=ending"
    },
    {
      "trialId": "t1",
      "caseId": "c06",
      "board": "menu",
      "visual": 39,
      "interaction": 36,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：铝夹票签菜单基本还原，但默认状态对整个组件使用灰度及亮度滤镜。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c06-menu-desktop.jpg",
        "mobile": "evidence/t1/c06-menu-mobile.jpg",
        "hover": "evidence/t1/c06-menu-hover.jpg",
        "click": "evidence/t1/c06-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c06&board=menu",
      "scoredPreview": "previews/t1/index.html?case=c06&board=menu"
    },
    {
      "trialId": "t1",
      "caseId": "c06",
      "board": "choice",
      "visual": 35,
      "interaction": 38,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：选项改为较平直的矩形，纸面和折角细节简化；选择流程可用。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：c04/c05 的选中图片已更改；保留旧快照分数，不凭代码推测改善幅度。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c06-choice-desktop.jpg",
        "mobile": "evidence/t1/c06-choice-mobile.jpg",
        "hover": "evidence/t1/c06-choice-hover.jpg",
        "click": "evidence/t1/c06-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c06&board=choice",
      "scoredPreview": "previews/t1/index.html?case=c06&board=choice"
    },
    {
      "trialId": "t1",
      "caseId": "c06",
      "board": "route",
      "visual": 37,
      "interaction": 38,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：节点、首图、文字和分支齐全，但框体厚度、状态及箭头比例不同。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c06-route-desktop.jpg",
        "mobile": "evidence/t1/c06-route-mobile.jpg",
        "hover": "evidence/t1/c06-route-hover.jpg",
        "click": "evidence/t1/c06-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c06&board=route",
      "scoredPreview": "previews/t1/index.html?case=c06&board=route"
    },
    {
      "trialId": "t1",
      "caseId": "c06",
      "board": "character",
      "visual": 34,
      "interaction": 32,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：角色和关系正文完整，肖像卡、铝框及右展纸页被简化。",
        "已评审快照：鼠标点击收起后，角色会重新展开；Esc 可以收起。所有角色悬停及手机选择可以触发。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：接收版把 focus 放在收起之前，旧快照的焦点重新展开路径已改变；鼠标布局变化的影响未复测，旧扣分不能视为最终版故障确认。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c06-character-desktop.jpg",
        "mobile": "evidence/t1/c06-character-mobile.jpg",
        "hover": "evidence/t1/c06-character-hover.jpg",
        "click": "evidence/t1/c06-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c06&board=character",
      "scoredPreview": "previews/t1/index.html?case=c06&board=character"
    },
    {
      "trialId": "t1",
      "caseId": "c06",
      "board": "ending",
      "visual": 36,
      "interaction": 37,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：完成横幅及纵向推荐齐全，纸面、铝框与指示灯细节有所改变。",
        "手机采用横向可滚动的固定比例场景，字号可读，但部分问题、选项或详情需要横向平移才能同时查看。",
        "最终接收版：接收版调整了方向键焦点过滤，删除了未被当前分支使用的旧素材；未追加浏览器验收。",
        "最终接收版：接收版附带候选自检记录：155 项中 6 个手机 Ending 弹窗断言失败。属于候选报告，未独立重跑，未据此虚构新的验证结论。"
      ],
      "evidence": {
        "desktop": "evidence/t1/c06-ending-desktop.jpg",
        "mobile": "evidence/t1/c06-ending-mobile.jpg",
        "hover": "evidence/t1/c06-ending-hover.jpg",
        "click": "evidence/t1/c06-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T08:04:22.574Z",
      "evidenceSnapshotDigest": "6fc2a6d0226ad496a7c95a062b0111f1830575c31b31670b30032b9135b48bb2",
      "acceptedSnapshotDigest": "db9d7643cb57512768cc37a9661fbd5f7fd55d8b8271760509dfce22d6cfb15a",
      "acceptedPage": "submissions/t1/index.html?case=c06&board=ending",
      "scoredPreview": "previews/t1/index.html?case=c06&board=ending"
    },
    {
      "trialId": "t2",
      "caseId": "c01",
      "board": "menu",
      "visual": 39,
      "interaction": 40,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：纸签菜单与底图基本一致，三项导航和悬停可用；手机裁切了封面标题的一部分。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 手机背景位置改变，旧标题裁切评价不能直接视为最终版事实。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c01-menu-desktop.jpg",
        "mobile": "evidence/t2/c01-menu-mobile.jpg",
        "hover": "evidence/t2/c01-menu-hover.jpg",
        "click": "evidence/t2/c01-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c01&board=menu",
      "scoredPreview": "previews/t2/index.html?case=c01&board=menu"
    },
    {
      "trialId": "t2",
      "caseId": "c01",
      "board": "choice",
      "visual": 39,
      "interaction": 39,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：问题条、纸张、折角及两组选项排布接近原图。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c01-choice-desktop.jpg",
        "mobile": "evidence/t2/c01-choice-mobile.jpg",
        "hover": "evidence/t2/c01-choice-hover.jpg",
        "click": "evidence/t2/c01-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c01&board=choice",
      "scoredPreview": "previews/t2/index.html?case=c01&board=choice"
    },
    {
      "trialId": "t2",
      "caseId": "c01",
      "board": "route",
      "visual": 38,
      "interaction": 38,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：节点标题清楚，选中节点和真实连线可操作，部分边框及连接比例略有差异。",
        "已评审快照：手机路线保留横向可滚动画布，五个节点可达，但需要平移查看全图。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 的首图窗口及手机路线背景改变；c01/c02 框体、c03 普通框与首图、c04/c05 首图图片改变。节点标签和连线逻辑未变；960px 横向画布仍存在。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c01-route-desktop.jpg",
        "mobile": "evidence/t2/c01-route-mobile.jpg",
        "hover": "evidence/t2/c01-route-hover.jpg",
        "click": "evidence/t2/c01-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c01&board=route",
      "scoredPreview": "previews/t2/index.html?case=c01&board=route"
    },
    {
      "trialId": "t2",
      "caseId": "c01",
      "board": "character",
      "visual": 39,
      "interaction": 34,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：展开纸页、肖像及名字排布高度接近原图。",
        "已评审快照：鼠标点击收起后，指针停在原位会再次展开角色；Esc 可以收起。所有角色悬停及手机选择可以触发。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 手机卡片改为按素材比例与自动高度布局；桌面事件逻辑未变，收起后原位悬停重新展开仍仅作为历史观察。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c01-character-desktop.jpg",
        "mobile": "evidence/t2/c01-character-mobile.jpg",
        "hover": "evidence/t2/c01-character-hover.jpg",
        "click": "evidence/t2/c01-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c01&board=character",
      "scoredPreview": "previews/t2/index.html?case=c01&board=character"
    },
    {
      "trialId": "t2",
      "caseId": "c01",
      "board": "ending",
      "visual": 39,
      "interaction": 39,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：完成横幅、其它结局及推荐条结构接近原图。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：仅 c01 六张推荐图片调整为 311 × 103；c02-c06 Ending 没有相关实现变更。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c01-ending-desktop.jpg",
        "mobile": "evidence/t2/c01-ending-mobile.jpg",
        "hover": "evidence/t2/c01-ending-hover.jpg",
        "click": "evidence/t2/c01-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c01&board=ending",
      "scoredPreview": "previews/t2/index.html?case=c01&board=ending"
    },
    {
      "trialId": "t2",
      "caseId": "c02",
      "board": "menu",
      "visual": 39,
      "interaction": 40,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：木质箭头与玉石端头还原较完整；手机封面标题有裁切。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 手机背景位置改变，旧标题裁切评价不能直接视为最终版事实。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c02-menu-desktop.jpg",
        "mobile": "evidence/t2/c02-menu-mobile.jpg",
        "hover": "evidence/t2/c02-menu-hover.jpg",
        "click": "evidence/t2/c02-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c02&board=menu",
      "scoredPreview": "previews/t2/index.html?case=c02&board=menu"
    },
    {
      "trialId": "t2",
      "caseId": "c02",
      "board": "choice",
      "visual": 38,
      "interaction": 39,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：题签和玉石选项接近，左选项外缘及比例略有差异。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c02-choice-desktop.jpg",
        "mobile": "evidence/t2/c02-choice-mobile.jpg",
        "hover": "evidence/t2/c02-choice-hover.jpg",
        "click": "evidence/t2/c02-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c02&board=choice",
      "scoredPreview": "previews/t2/index.html?case=c02&board=choice"
    },
    {
      "trialId": "t2",
      "caseId": "c02",
      "board": "route",
      "visual": 38,
      "interaction": 39,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：五个透明节点与分支接近，节点和连线均可选择。",
        "已评审快照：手机路线保留横向可滚动画布，五个节点可达，但需要平移查看全图。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 的首图窗口及手机路线背景改变；c01/c02 框体、c03 普通框与首图、c04/c05 首图图片改变。节点标签和连线逻辑未变；960px 横向画布仍存在。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c02-route-desktop.jpg",
        "mobile": "evidence/t2/c02-route-mobile.jpg",
        "hover": "evidence/t2/c02-route-hover.jpg",
        "click": "evidence/t2/c02-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c02&board=route",
      "scoredPreview": "previews/t2/index.html?case=c02&board=route"
    },
    {
      "trialId": "t2",
      "caseId": "c02",
      "board": "character",
      "visual": 39,
      "interaction": 34,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：人物书页、肖像与关系说明排版接近原图。",
        "已评审快照：鼠标点击收起后，指针停在原位会再次展开角色；Esc 可以收起。所有角色悬停及手机选择可以触发。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 手机卡片改为按素材比例与自动高度布局；桌面事件逻辑未变，收起后原位悬停重新展开仍仅作为历史观察。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c02-character-desktop.jpg",
        "mobile": "evidence/t2/c02-character-mobile.jpg",
        "hover": "evidence/t2/c02-character-hover.jpg",
        "click": "evidence/t2/c02-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c02&board=character",
      "scoredPreview": "previews/t2/index.html?case=c02&board=character"
    },
    {
      "trialId": "t2",
      "caseId": "c02",
      "board": "ending",
      "visual": 39,
      "interaction": 39,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：横幅与纵向推荐列表的材质、层级较完整。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：仅 c01 六张推荐图片调整为 311 × 103；c02-c06 Ending 没有相关实现变更。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c02-ending-desktop.jpg",
        "mobile": "evidence/t2/c02-ending-mobile.jpg",
        "hover": "evidence/t2/c02-ending-hover.jpg",
        "click": "evidence/t2/c02-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c02&board=ending",
      "scoredPreview": "previews/t2/index.html?case=c02&board=ending"
    },
    {
      "trialId": "t2",
      "caseId": "c03",
      "board": "menu",
      "visual": 39,
      "interaction": 40,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：铅笔纸片菜单接近原图；手机封面标题有裁切。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 手机背景位置改变，旧标题裁切评价不能直接视为最终版事实。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c03-menu-desktop.jpg",
        "mobile": "evidence/t2/c03-menu-mobile.jpg",
        "hover": "evidence/t2/c03-menu-hover.jpg",
        "click": "evidence/t2/c03-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c03&board=menu",
      "scoredPreview": "previews/t2/index.html?case=c03&board=menu"
    },
    {
      "trialId": "t2",
      "caseId": "c03",
      "board": "choice",
      "visual": 39,
      "interaction": 39,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：桌面题签与底部选项接近；手机题签文字受到横向拉伸影响。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c03-choice-desktop.jpg",
        "mobile": "evidence/t2/c03-choice-mobile.jpg",
        "hover": "evidence/t2/c03-choice-hover.jpg",
        "click": "evidence/t2/c03-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c03&board=choice",
      "scoredPreview": "previews/t2/index.html?case=c03&board=choice"
    },
    {
      "trialId": "t2",
      "caseId": "c03",
      "board": "route",
      "visual": 36,
      "interaction": 38,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：节点标题和局部金属边框比例有偏差，选中框边缘有少量彩色杂点。",
        "已评审快照：手机路线保留横向可滚动画布，五个节点可达，但需要平移查看全图。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 的首图窗口及手机路线背景改变；c01/c02 框体、c03 普通框与首图、c04/c05 首图图片改变。节点标签和连线逻辑未变；960px 横向画布仍存在。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c03-route-desktop.jpg",
        "mobile": "evidence/t2/c03-route-mobile.jpg",
        "hover": "evidence/t2/c03-route-hover.jpg",
        "click": "evidence/t2/c03-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c03&board=route",
      "scoredPreview": "previews/t2/index.html?case=c03&board=route"
    },
    {
      "trialId": "t2",
      "caseId": "c03",
      "board": "character",
      "visual": 39,
      "interaction": 34,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：四位角色、金属夹与展开页接近原图，手机纵向展开可读。",
        "已评审快照：鼠标点击收起后，指针停在原位会再次展开角色；Esc 可以收起。所有角色悬停及手机选择可以触发。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 手机卡片改为按素材比例与自动高度布局；桌面事件逻辑未变，收起后原位悬停重新展开仍仅作为历史观察。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c03-character-desktop.jpg",
        "mobile": "evidence/t2/c03-character-mobile.jpg",
        "hover": "evidence/t2/c03-character-hover.jpg",
        "click": "evidence/t2/c03-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c03&board=character",
      "scoredPreview": "previews/t2/index.html?case=c03&board=character"
    },
    {
      "trialId": "t2",
      "caseId": "c03",
      "board": "ending",
      "visual": 38,
      "interaction": 39,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：完成提示与推荐卡基本完整，局部框线及对齐略有差异。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：仅 c01 六张推荐图片调整为 311 × 103；c02-c06 Ending 没有相关实现变更。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c03-ending-desktop.jpg",
        "mobile": "evidence/t2/c03-ending-mobile.jpg",
        "hover": "evidence/t2/c03-ending-hover.jpg",
        "click": "evidence/t2/c03-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c03&board=ending",
      "scoredPreview": "previews/t2/index.html?case=c03&board=ending"
    },
    {
      "trialId": "t2",
      "caseId": "c04",
      "board": "menu",
      "visual": 39,
      "interaction": 40,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：三个青瓷按钮完整可见，菜单接近原图；手机封面标题有裁切。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 手机背景位置改变，旧标题裁切评价不能直接视为最终版事实。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c04-menu-desktop.jpg",
        "mobile": "evidence/t2/c04-menu-mobile.jpg",
        "hover": "evidence/t2/c04-menu-hover.jpg",
        "click": "evidence/t2/c04-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c04&board=menu",
      "scoredPreview": "previews/t2/index.html?case=c04&board=menu"
    },
    {
      "trialId": "t2",
      "caseId": "c04",
      "board": "choice",
      "visual": 37,
      "interaction": 39,
      "usability": 17,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：选择组件接近原图，但桌面右上工具栏遮住问题条的部分区域。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c04-choice-desktop.jpg",
        "mobile": "evidence/t2/c04-choice-mobile.jpg",
        "hover": "evidence/t2/c04-choice-hover.jpg",
        "click": "evidence/t2/c04-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c04&board=choice",
      "scoredPreview": "previews/t2/index.html?case=c04&board=choice"
    },
    {
      "trialId": "t2",
      "caseId": "c04",
      "board": "route",
      "visual": 37,
      "interaction": 38,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：路线分支、节点及状态完整，首图和部分框体、线条细节有所不同。",
        "已评审快照：手机路线保留横向可滚动画布，五个节点可达，但需要平移查看全图。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 的首图窗口及手机路线背景改变；c01/c02 框体、c03 普通框与首图、c04/c05 首图图片改变。节点标签和连线逻辑未变；960px 横向画布仍存在。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c04-route-desktop.jpg",
        "mobile": "evidence/t2/c04-route-mobile.jpg",
        "hover": "evidence/t2/c04-route-hover.jpg",
        "click": "evidence/t2/c04-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c04&board=route",
      "scoredPreview": "previews/t2/index.html?case=c04&board=route"
    },
    {
      "trialId": "t2",
      "caseId": "c04",
      "board": "character",
      "visual": 39,
      "interaction": 34,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：拱形肖像、青瓷展开页与说明层级接近原图。",
        "已评审快照：鼠标点击收起后，指针停在原位会再次展开角色；Esc 可以收起。所有角色悬停及手机选择可以触发。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 手机卡片改为按素材比例与自动高度布局；桌面事件逻辑未变，收起后原位悬停重新展开仍仅作为历史观察。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c04-character-desktop.jpg",
        "mobile": "evidence/t2/c04-character-mobile.jpg",
        "hover": "evidence/t2/c04-character-hover.jpg",
        "click": "evidence/t2/c04-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c04&board=character",
      "scoredPreview": "previews/t2/index.html?case=c04&board=character"
    },
    {
      "trialId": "t2",
      "caseId": "c04",
      "board": "ending",
      "visual": 39,
      "interaction": 39,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：完成提示、其它结局和推荐卡布局接近原图。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：仅 c01 六张推荐图片调整为 311 × 103；c02-c06 Ending 没有相关实现变更。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c04-ending-desktop.jpg",
        "mobile": "evidence/t2/c04-ending-mobile.jpg",
        "hover": "evidence/t2/c04-ending-hover.jpg",
        "click": "evidence/t2/c04-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c04&board=ending",
      "scoredPreview": "previews/t2/index.html?case=c04&board=ending"
    },
    {
      "trialId": "t2",
      "caseId": "c05",
      "board": "menu",
      "visual": 39,
      "interaction": 40,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：磁带票签和右侧菜单接近原图；手机封面标题有裁切。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 手机背景位置改变，旧标题裁切评价不能直接视为最终版事实。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c05-menu-desktop.jpg",
        "mobile": "evidence/t2/c05-menu-mobile.jpg",
        "hover": "evidence/t2/c05-menu-hover.jpg",
        "click": "evidence/t2/c05-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c05&board=menu",
      "scoredPreview": "previews/t2/index.html?case=c05&board=menu"
    },
    {
      "trialId": "t2",
      "caseId": "c05",
      "board": "choice",
      "visual": 39,
      "interaction": 39,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：底部问题条和斜角选项的形状、纸张比例接近原图。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c05-choice-desktop.jpg",
        "mobile": "evidence/t2/c05-choice-mobile.jpg",
        "hover": "evidence/t2/c05-choice-hover.jpg",
        "click": "evidence/t2/c05-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c05&board=choice",
      "scoredPreview": "previews/t2/index.html?case=c05&board=choice"
    },
    {
      "trialId": "t2",
      "caseId": "c05",
      "board": "route",
      "visual": 36,
      "interaction": 38,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：路线标题清楚，但首图、节点内部比例及选中连线细节存在差异。",
        "已评审快照：手机路线保留横向可滚动画布，五个节点可达，但需要平移查看全图。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 的首图窗口及手机路线背景改变；c01/c02 框体、c03 普通框与首图、c04/c05 首图图片改变。节点标签和连线逻辑未变；960px 横向画布仍存在。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c05-route-desktop.jpg",
        "mobile": "evidence/t2/c05-route-mobile.jpg",
        "hover": "evidence/t2/c05-route-hover.jpg",
        "click": "evidence/t2/c05-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c05&board=route",
      "scoredPreview": "previews/t2/index.html?case=c05&board=route"
    },
    {
      "trialId": "t2",
      "caseId": "c05",
      "board": "character",
      "visual": 39,
      "interaction": 34,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：书页展开、角色卡及正文排版接近原图。",
        "已评审快照：鼠标点击收起后，指针停在原位会再次展开角色；Esc 可以收起。所有角色悬停及手机选择可以触发。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 手机卡片改为按素材比例与自动高度布局；桌面事件逻辑未变，收起后原位悬停重新展开仍仅作为历史观察。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c05-character-desktop.jpg",
        "mobile": "evidence/t2/c05-character-mobile.jpg",
        "hover": "evidence/t2/c05-character-hover.jpg",
        "click": "evidence/t2/c05-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c05&board=character",
      "scoredPreview": "previews/t2/index.html?case=c05&board=character"
    },
    {
      "trialId": "t2",
      "caseId": "c05",
      "board": "ending",
      "visual": 39,
      "interaction": 39,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：完成横幅与推荐卡的形状和位置接近原图。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：仅 c01 六张推荐图片调整为 311 × 103；c02-c06 Ending 没有相关实现变更。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c05-ending-desktop.jpg",
        "mobile": "evidence/t2/c05-ending-mobile.jpg",
        "hover": "evidence/t2/c05-ending-hover.jpg",
        "click": "evidence/t2/c05-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c05&board=ending",
      "scoredPreview": "previews/t2/index.html?case=c05&board=ending"
    },
    {
      "trialId": "t2",
      "caseId": "c06",
      "board": "menu",
      "visual": 39,
      "interaction": 40,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：铝夹票签菜单位置和字重接近原图；手机封面标题有裁切。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 手机背景位置改变，旧标题裁切评价不能直接视为最终版事实。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c06-menu-desktop.jpg",
        "mobile": "evidence/t2/c06-menu-mobile.jpg",
        "hover": "evidence/t2/c06-menu-hover.jpg",
        "click": "evidence/t2/c06-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c06&board=menu",
      "scoredPreview": "previews/t2/index.html?case=c06&board=menu"
    },
    {
      "trialId": "t2",
      "caseId": "c06",
      "board": "choice",
      "visual": 39,
      "interaction": 39,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：纸片折角与题签较完整，选择、返回和继续可用。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c06-choice-desktop.jpg",
        "mobile": "evidence/t2/c06-choice-mobile.jpg",
        "hover": "evidence/t2/c06-choice-hover.jpg",
        "click": "evidence/t2/c06-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c06&board=choice",
      "scoredPreview": "previews/t2/index.html?case=c06&board=choice"
    },
    {
      "trialId": "t2",
      "caseId": "c06",
      "board": "route",
      "visual": 38,
      "interaction": 39,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：节点标题清楚，灰绿框体和真实分支完整，局部边缘及比例略有差异。",
        "已评审快照：手机路线保留横向可滚动画布，五个节点可达，但需要平移查看全图。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 的首图窗口及手机路线背景改变；c01/c02 框体、c03 普通框与首图、c04/c05 首图图片改变。节点标签和连线逻辑未变；960px 横向画布仍存在。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c06-route-desktop.jpg",
        "mobile": "evidence/t2/c06-route-mobile.jpg",
        "hover": "evidence/t2/c06-route-hover.jpg",
        "click": "evidence/t2/c06-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c06&board=route",
      "scoredPreview": "previews/t2/index.html?case=c06&board=route"
    },
    {
      "trialId": "t2",
      "caseId": "c06",
      "board": "character",
      "visual": 39,
      "interaction": 34,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：灰绿角色卡、关系文字及右展纸页接近原图。",
        "已评审快照：鼠标点击收起后，指针停在原位会再次展开角色；Esc 可以收起。所有角色悬停及手机选择可以触发。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：六个 Case 手机卡片改为按素材比例与自动高度布局；桌面事件逻辑未变，收起后原位悬停重新展开仍仅作为历史观察。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c06-character-desktop.jpg",
        "mobile": "evidence/t2/c06-character-mobile.jpg",
        "hover": "evidence/t2/c06-character-hover.jpg",
        "click": "evidence/t2/c06-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c06&board=character",
      "scoredPreview": "previews/t2/index.html?case=c06&board=character"
    },
    {
      "trialId": "t2",
      "caseId": "c06",
      "board": "ending",
      "visual": 39,
      "interaction": 39,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：完成横幅和纵向推荐的层级与材质接近原图。",
        "最终接收版：接收版包含 app.js、data.js、style.css 及部分路线/推荐图片变更；已登记哈希差异，未追加浏览器验收。",
        "最终接收版：仅 c01 六张推荐图片调整为 311 × 103；c02-c06 Ending 没有相关实现变更。"
      ],
      "evidence": {
        "desktop": "evidence/t2/c06-ending-desktop.jpg",
        "mobile": "evidence/t2/c06-ending-mobile.jpg",
        "hover": "evidence/t2/c06-ending-hover.jpg",
        "click": "evidence/t2/c06-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:13.491Z",
      "evidenceSnapshotDigest": "7a6eca2eeb47fde00dcbe19e34669010d71970f1b62a96060f9e6c83612fb581",
      "acceptedSnapshotDigest": "c3f5a335ac912056ec166035543852a7db2d64f4741825382bd2c3f474e82dc1",
      "acceptedPage": "submissions/t2/index.html?case=c06&board=ending",
      "scoredPreview": "previews/t2/index.html?case=c06&board=ending"
    },
    {
      "trialId": "t3",
      "caseId": "c01",
      "board": "menu",
      "visual": 39,
      "interaction": 40,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：菜单主体接近原图，三项入口可用，手机保留完整标题。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c01-menu-desktop.jpg",
        "mobile": "evidence/t3/c01-menu-mobile.jpg",
        "hover": "evidence/t3/c01-menu-hover.jpg",
        "click": "evidence/t3/c01-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c01&board=menu",
      "scoredPreview": "previews/t3/index.html?case=c01&board=menu"
    },
    {
      "trialId": "t3",
      "caseId": "c01",
      "board": "choice",
      "visual": 38,
      "interaction": 38,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：问题条与纸片选项接近，局部边缘、选中材料及阴影有差异。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c01-choice-desktop.jpg",
        "mobile": "evidence/t3/c01-choice-mobile.jpg",
        "hover": "evidence/t3/c01-choice-hover.jpg",
        "click": "evidence/t3/c01-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c01&board=choice",
      "scoredPreview": "previews/t3/index.html?case=c01&board=choice"
    },
    {
      "trialId": "t3",
      "caseId": "c01",
      "board": "route",
      "visual": 37,
      "interaction": 37,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：节点与分支齐全，箭头和节点状态比例略有偏差。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c01-route-desktop.jpg",
        "mobile": "evidence/t3/c01-route-mobile.jpg",
        "hover": "evidence/t3/c01-route-hover.jpg",
        "click": "evidence/t3/c01-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c01&board=route",
      "scoredPreview": "previews/t3/index.html?case=c01&board=route"
    },
    {
      "trialId": "t3",
      "caseId": "c01",
      "board": "character",
      "visual": 35,
      "interaction": 28,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：肖像和名字栏在展开时改变宽度，未完全保持原 Board 的固定左栏；手机首次轻触林澄或周叙会仍处于收起状态，第二次才展开。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。",
        "最终接收版：c04/c05 展开页改用 detail-skin.png；旧快照的重复纹理问题不能直接标为最终版缺陷。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c01-character-desktop.jpg",
        "mobile": "evidence/t3/c01-character-mobile.jpg",
        "hover": "evidence/t3/c01-character-hover.jpg",
        "click": "evidence/t3/c01-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c01&board=character",
      "scoredPreview": "previews/t3/index.html?case=c01&board=character"
    },
    {
      "trialId": "t3",
      "caseId": "c01",
      "board": "ending",
      "visual": 38,
      "interaction": 38,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：完成横幅及三张推荐接近原图，局部纸框比例和悬停阴影有所不同。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c01-ending-desktop.jpg",
        "mobile": "evidence/t3/c01-ending-mobile.jpg",
        "hover": "evidence/t3/c01-ending-hover.jpg",
        "click": "evidence/t3/c01-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c01&board=ending",
      "scoredPreview": "previews/t3/index.html?case=c01&board=ending"
    },
    {
      "trialId": "t3",
      "caseId": "c02",
      "board": "menu",
      "visual": 39,
      "interaction": 40,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：木质菜单和玉石端头接近原图，手机标题完整。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c02-menu-desktop.jpg",
        "mobile": "evidence/t3/c02-menu-mobile.jpg",
        "hover": "evidence/t3/c02-menu-hover.jpg",
        "click": "evidence/t3/c02-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c02&board=menu",
      "scoredPreview": "previews/t3/index.html?case=c02&board=menu"
    },
    {
      "trialId": "t3",
      "caseId": "c02",
      "board": "choice",
      "visual": 36,
      "interaction": 38,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：选项较扁、字重较重，原材质主体仍可辨识。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c02-choice-desktop.jpg",
        "mobile": "evidence/t3/c02-choice-mobile.jpg",
        "hover": "evidence/t3/c02-choice-hover.jpg",
        "click": "evidence/t3/c02-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c02&board=choice",
      "scoredPreview": "previews/t3/index.html?case=c02&board=choice"
    },
    {
      "trialId": "t3",
      "caseId": "c02",
      "board": "route",
      "visual": 35,
      "interaction": 36,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：透明节点完整，但框体亮边、状态符号及选中效果与原图不同。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c02-route-desktop.jpg",
        "mobile": "evidence/t3/c02-route-mobile.jpg",
        "hover": "evidence/t3/c02-route-hover.jpg",
        "click": "evidence/t3/c02-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c02&board=route",
      "scoredPreview": "previews/t3/index.html?case=c02&board=route"
    },
    {
      "trialId": "t3",
      "caseId": "c02",
      "board": "character",
      "visual": 35,
      "interaction": 34,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：肖像比例和纸页文字层级改变，原书脊及材质细节简化。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。",
        "最终接收版：c04/c05 展开页改用 detail-skin.png；旧快照的重复纹理问题不能直接标为最终版缺陷。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c02-character-desktop.jpg",
        "mobile": "evidence/t3/c02-character-mobile.jpg",
        "hover": "evidence/t3/c02-character-hover.jpg",
        "click": "evidence/t3/c02-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c02&board=character",
      "scoredPreview": "previews/t3/index.html?case=c02&board=character"
    },
    {
      "trialId": "t3",
      "caseId": "c02",
      "board": "ending",
      "visual": 35,
      "interaction": 36,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：推荐条使用简化平框与小圆点，缺少原状态印记和部分纸框细节。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c02-ending-desktop.jpg",
        "mobile": "evidence/t3/c02-ending-mobile.jpg",
        "hover": "evidence/t3/c02-ending-hover.jpg",
        "click": "evidence/t3/c02-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c02&board=ending",
      "scoredPreview": "previews/t3/index.html?case=c02&board=ending"
    },
    {
      "trialId": "t3",
      "caseId": "c03",
      "board": "menu",
      "visual": 39,
      "interaction": 40,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：铅笔纸片菜单接近原图，手机标题完整。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c03-menu-desktop.jpg",
        "mobile": "evidence/t3/c03-menu-mobile.jpg",
        "hover": "evidence/t3/c03-menu-hover.jpg",
        "click": "evidence/t3/c03-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c03&board=menu",
      "scoredPreview": "previews/t3/index.html?case=c03&board=menu"
    },
    {
      "trialId": "t3",
      "caseId": "c03",
      "board": "choice",
      "visual": 39,
      "interaction": 38,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：题签和底部选项接近原图，边缘状态与排布略有差异。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c03-choice-desktop.jpg",
        "mobile": "evidence/t3/c03-choice-mobile.jpg",
        "hover": "evidence/t3/c03-choice-hover.jpg",
        "click": "evidence/t3/c03-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c03&board=choice",
      "scoredPreview": "previews/t3/index.html?case=c03&board=choice"
    },
    {
      "trialId": "t3",
      "caseId": "c03",
      "board": "route",
      "visual": 36,
      "interaction": 36,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：五个证据节点完整，编号、框体和连线比例有所改变。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c03-route-desktop.jpg",
        "mobile": "evidence/t3/c03-route-mobile.jpg",
        "hover": "evidence/t3/c03-route-hover.jpg",
        "click": "evidence/t3/c03-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c03&board=route",
      "scoredPreview": "previews/t3/index.html?case=c03&board=route"
    },
    {
      "trialId": "t3",
      "caseId": "c03",
      "board": "character",
      "visual": 36,
      "interaction": 34,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：四角色和右展正文齐全，肖像、金属夹和卡片层级有细小偏差。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。",
        "最终接收版：c04/c05 展开页改用 detail-skin.png；旧快照的重复纹理问题不能直接标为最终版缺陷。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c03-character-desktop.jpg",
        "mobile": "evidence/t3/c03-character-mobile.jpg",
        "hover": "evidence/t3/c03-character-hover.jpg",
        "click": "evidence/t3/c03-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c03&board=character",
      "scoredPreview": "previews/t3/index.html?case=c03&board=character"
    },
    {
      "trialId": "t3",
      "caseId": "c03",
      "board": "ending",
      "visual": 38,
      "interaction": 38,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：横幅和推荐框基本完整，部分材质线条与对齐略有差异。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c03-ending-desktop.jpg",
        "mobile": "evidence/t3/c03-ending-mobile.jpg",
        "hover": "evidence/t3/c03-ending-hover.jpg",
        "click": "evidence/t3/c03-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c03&board=ending",
      "scoredPreview": "previews/t3/index.html?case=c03&board=ending"
    },
    {
      "trialId": "t3",
      "caseId": "c04",
      "board": "menu",
      "visual": 39,
      "interaction": 40,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：三个青瓷菜单按钮完整可见，主体接近原图。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c04-menu-desktop.jpg",
        "mobile": "evidence/t3/c04-menu-mobile.jpg",
        "hover": "evidence/t3/c04-menu-hover.jpg",
        "click": "evidence/t3/c04-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c04&board=menu",
      "scoredPreview": "previews/t3/index.html?case=c04&board=menu"
    },
    {
      "trialId": "t3",
      "caseId": "c04",
      "board": "choice",
      "visual": 39,
      "interaction": 34,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：青瓷问题条和选项接近，但悬停增加整个组件的阴影，超出 Board 只改变上缘窄槽的要求。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c04-choice-desktop.jpg",
        "mobile": "evidence/t3/c04-choice-mobile.jpg",
        "hover": "evidence/t3/c04-choice-hover.jpg",
        "click": "evidence/t3/c04-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c04&board=choice",
      "scoredPreview": "previews/t3/index.html?case=c04&board=choice"
    },
    {
      "trialId": "t3",
      "caseId": "c04",
      "board": "route",
      "visual": 37,
      "interaction": 37,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：路线节点和分支完整，首图、状态和连线细节有所不同。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c04-route-desktop.jpg",
        "mobile": "evidence/t3/c04-route-mobile.jpg",
        "hover": "evidence/t3/c04-route-hover.jpg",
        "click": "evidence/t3/c04-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c04&board=route",
      "scoredPreview": "previews/t3/index.html?case=c04&board=route"
    },
    {
      "trialId": "t3",
      "caseId": "c04",
      "board": "character",
      "visual": 30,
      "interaction": 34,
      "usability": 18,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：展开纸页出现明显横向重复纹理和深色短条，与原青瓷装饰框及干净纸面不同，影响正文观感。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。",
        "最终接收版：c04/c05 展开页改用 detail-skin.png；旧快照的重复纹理问题不能直接标为最终版缺陷。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c04-character-desktop.jpg",
        "mobile": "evidence/t3/c04-character-mobile.jpg",
        "hover": "evidence/t3/c04-character-hover.jpg",
        "click": "evidence/t3/c04-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c04&board=character",
      "scoredPreview": "previews/t3/index.html?case=c04&board=character"
    },
    {
      "trialId": "t3",
      "caseId": "c04",
      "board": "ending",
      "visual": 39,
      "interaction": 38,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：完成提示、其它结局和推荐卡接近原图，悬停阴影略有差异。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c04-ending-desktop.jpg",
        "mobile": "evidence/t3/c04-ending-mobile.jpg",
        "hover": "evidence/t3/c04-ending-hover.jpg",
        "click": "evidence/t3/c04-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c04&board=ending",
      "scoredPreview": "previews/t3/index.html?case=c04&board=ending"
    },
    {
      "trialId": "t3",
      "caseId": "c05",
      "board": "menu",
      "visual": 39,
      "interaction": 40,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：磁带按钮及菜单主体接近原图，手机标题完整。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c05-menu-desktop.jpg",
        "mobile": "evidence/t3/c05-menu-mobile.jpg",
        "hover": "evidence/t3/c05-menu-hover.jpg",
        "click": "evidence/t3/c05-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c05&board=menu",
      "scoredPreview": "previews/t3/index.html?case=c05&board=menu"
    },
    {
      "trialId": "t3",
      "caseId": "c05",
      "board": "choice",
      "visual": 38,
      "interaction": 38,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：题签及斜角纸片接近，选项垂直位置和边缘状态略有差异。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c05-choice-desktop.jpg",
        "mobile": "evidence/t3/c05-choice-mobile.jpg",
        "hover": "evidence/t3/c05-choice-hover.jpg",
        "click": "evidence/t3/c05-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c05&board=choice",
      "scoredPreview": "previews/t3/index.html?case=c05&board=choice"
    },
    {
      "trialId": "t3",
      "caseId": "c05",
      "board": "route",
      "visual": 34,
      "interaction": 36,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：部分节点标签字形偏重、底部纹理不够干净，首图与选中线条细节不同。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c05-route-desktop.jpg",
        "mobile": "evidence/t3/c05-route-mobile.jpg",
        "hover": "evidence/t3/c05-route-hover.jpg",
        "click": "evidence/t3/c05-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c05&board=route",
      "scoredPreview": "previews/t3/index.html?case=c05&board=route"
    },
    {
      "trialId": "t3",
      "caseId": "c05",
      "board": "character",
      "visual": 37,
      "interaction": 34,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：角色卡和右展正文完整，纸框、正文比例及细节略有差异。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。",
        "最终接收版：c04/c05 展开页改用 detail-skin.png；旧快照的重复纹理问题不能直接标为最终版缺陷。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c05-character-desktop.jpg",
        "mobile": "evidence/t3/c05-character-mobile.jpg",
        "hover": "evidence/t3/c05-character-hover.jpg",
        "click": "evidence/t3/c05-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c05&board=character",
      "scoredPreview": "previews/t3/index.html?case=c05&board=character"
    },
    {
      "trialId": "t3",
      "caseId": "c05",
      "board": "ending",
      "visual": 39,
      "interaction": 38,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：完成横幅和推荐卡接近原图，局部位置和悬停效果略有不同。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c05-ending-desktop.jpg",
        "mobile": "evidence/t3/c05-ending-mobile.jpg",
        "hover": "evidence/t3/c05-ending-hover.jpg",
        "click": "evidence/t3/c05-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c05&board=ending",
      "scoredPreview": "previews/t3/index.html?case=c05&board=ending"
    },
    {
      "trialId": "t3",
      "caseId": "c06",
      "board": "menu",
      "visual": 38,
      "interaction": 40,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：票签按钮主体接近，但高度和间距较原图略有变化。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c06-menu-desktop.jpg",
        "mobile": "evidence/t3/c06-menu-mobile.jpg",
        "hover": "evidence/t3/c06-menu-hover.jpg",
        "click": "evidence/t3/c06-menu-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c06&board=menu",
      "scoredPreview": "previews/t3/index.html?case=c06&board=menu"
    },
    {
      "trialId": "t3",
      "caseId": "c06",
      "board": "choice",
      "visual": 39,
      "interaction": 37,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：问题条和折角纸片较完整，状态边缘及底部间距略有不同。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c06-choice-desktop.jpg",
        "mobile": "evidence/t3/c06-choice-mobile.jpg",
        "hover": "evidence/t3/c06-choice-hover.jpg",
        "click": "evidence/t3/c06-choice-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c06&board=choice",
      "scoredPreview": "previews/t3/index.html?case=c06&board=choice"
    },
    {
      "trialId": "t3",
      "caseId": "c06",
      "board": "route",
      "visual": 36,
      "interaction": 32,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：节点和分支齐全，但选中边框增加发光效果，与 Board 明确不发光的要求不符。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c06-route-desktop.jpg",
        "mobile": "evidence/t3/c06-route-mobile.jpg",
        "hover": "evidence/t3/c06-route-hover.jpg",
        "click": "evidence/t3/c06-route-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c06&board=route",
      "scoredPreview": "previews/t3/index.html?case=c06&board=route"
    },
    {
      "trialId": "t3",
      "caseId": "c06",
      "board": "character",
      "visual": 35,
      "interaction": 34,
      "usability": 19,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：角色卡和右展页简化为较平直框体，肖像和名字层级有所变化。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。",
        "最终接收版：c04/c05 展开页改用 detail-skin.png；旧快照的重复纹理问题不能直接标为最终版缺陷。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c06-character-desktop.jpg",
        "mobile": "evidence/t3/c06-character-mobile.jpg",
        "hover": "evidence/t3/c06-character-hover.jpg",
        "click": "evidence/t3/c06-character-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c06&board=character",
      "scoredPreview": "previews/t3/index.html?case=c06&board=character"
    },
    {
      "trialId": "t3",
      "caseId": "c06",
      "board": "ending",
      "visual": 36,
      "interaction": 36,
      "usability": 20,
      "crossCase": false,
      "status": "snapshot-reviewed",
      "reviewer": "model",
      "scoreBasis": "pre-acceptance-snapshot",
      "finalVersionVerified": false,
      "notes": [
        "已评审快照：完成提示和推荐条齐全，纸面、铝框及状态标记细节简化。",
        "最终接收版：接收版 styles.css 已改变：c01 推荐状态点、c04/c05 展开页材质和手机文字换行。旧截图不是该接收版的重新验证。"
      ],
      "evidence": {
        "desktop": "evidence/t3/c06-ending-desktop.jpg",
        "mobile": "evidence/t3/c06-ending-mobile.jpg",
        "hover": "evidence/t3/c06-ending-hover.jpg",
        "click": "evidence/t3/c06-ending-click.jpg"
      },
      "evidenceCapturedAt": "2026-09-10T07:58:14.695Z",
      "evidenceSnapshotDigest": "e3a4b520ccec71222fae053a661d4e02c56fbaa7fe1b535c22cb0dcac7f1e892",
      "acceptedSnapshotDigest": "2688b28e278800bdeada15745240f2e0c96b50d5e6203ce540f7c28584f0330f",
      "acceptedPage": "submissions/t3/index.html?case=c06&board=ending",
      "scoredPreview": "previews/t3/index.html?case=c06&board=ending"
    }
  ],
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
