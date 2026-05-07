export const productConfig = {
  "product": {
    "rank": 15,
    "tier": "P0",
    "score": 67,
    "domain": "BlenderAddon",
    "ideaNo": 6,
    "ideaName": "操作ガイド・ミニランチャー",
    "repository": "blender-guide-mini-launcher",
    "publish": "GitHub Release / BOOTH",
    "priorityReason": "導入/操作の詰まりを減らす小型ツールとして、Blenderアドオン群の共通入口にできる。",
    "surface": "Blender アドオン導入前に使える CLI と Blender Python host adapter",
    "integration": "",
    "overview": "頻出操作、学習モード、ショートカット、セーフモードをまとめる。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
    "problem": "多機能化すると日常操作と危険操作の境界が分かりにくい。",
    "differentiation": "Blender内の3D素材制作、BOOTH販売、Unity連携の流れに寄せる。 頻出操作だけを前面に出し、危険操作は影響範囲を確認してから実行する。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
