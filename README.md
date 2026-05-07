# 操作ガイド・ミニランチャー

blender-guide-mini-launcher は、BlenderAddon 領域の NON PICKUP Rank 15 アイデアをクローズドアルファとして実装したローカルファーストの検証ツールです。

## 目的

多機能化すると日常操作と危険操作の境界が分かりにくい。

このリポジトリでは、頻出操作、学習モード、ショートカット、セーフモードをまとめる。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。 ための入力正規化、代表シナリオ検証、レビュー判断、レポート出力、導入・手動テスト手順、QCDS 証跡を一式で管理します。

## クローズドアルファ範囲

- 中核ロジック: `src/core`
- 入力検証: `src/validators`
- レポート生成: `src/report`
- 判断モデル: `src/review-model`
- CLI: `src/cli`
- ホスト/UI adapter: `src/host-adapter/blender_addon.py`
- 代表サンプル: `samples/representative-suite.json`

## 実行

```powershell
npm test
npm run validate
npm run build
```

## 公開位置づけ

- Version: v0.1.0-alpha.1
- GitHub prerelease: closed alpha
- 手動テスト: Codex 側では未実施。ユーザー実施用の手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` に記録。
- 主な公開先: GitHub Release / BOOTH

## 差別化

Blender内の3D素材制作、BOOTH販売、Unity連携の流れに寄せる。 頻出操作だけを前面に出し、危険操作は影響範囲を確認してから実行する。
