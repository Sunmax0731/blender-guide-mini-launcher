# Competitive Benchmark

## 参照した競合/標準

| 参照 | 強み | 採用する基準 | 差別化 |
| --- | --- | --- | --- |
| ZIP metadata similar |  周辺で既に利用される選択肢 | 導入しやすさ、証跡、レビュー導線 | Blender内の3D素材制作、BOOTH販売、Unity連携の流れに寄せる。 頻出操作だけを前面に出し、危険操作は影響範囲を確認してから実行する。 |
| GitHub Releases | asset、tag、pre-release、証跡が扱いやすい | release body、asset、latest=false 確認 | closed alpha の検証 evidence を docs に残す |
| ローカル JSON workflow | 小規模データで再現性を担保しやすい | 代表シナリオ、expected vs actual | 外部送信なしで検証可能 |

## 採用基準

- 実装、開発 docs、ユーザー docs、導入手順、手動テスト、release 準備、security/privacy、保守性、traceability、docs ZIP、release evidence を評価対象に含める。
