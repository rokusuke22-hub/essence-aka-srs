// ========================================
// エッセンス 力学・波動 SRS - config.js
// 作成日時: 2026-03-26T20:00:00+09:00
// テンプレート: ネクステタイプ v2.0
// ========================================
// ★ index.html は編集不要。教材固有設定はここに集約。
// ========================================

var APP_CONFIG = {

  // ========================================
  // 1. アプリ識別（★最重要: 他教材と重複するとデータ破壊）
  // ========================================
  APP_NAME: "エッセンス 力学・波動 SRS",      // ホーム画面タイトル
  STORAGE_KEY: "essence-mech-srs-v1",         // localStorageキー（一意必須）
  EXPORT_PREFIX: "essence-mech-srs",          // JSONエクスポートファイル名
  SW_CACHE_NAME: "essence-mech-srs-v1",       // sw.jsのCACHE_NAMEと一致させる

  // ========================================
  // 2. クラウド同期
  // ========================================
  GAS_URL: "https://script.google.com/macros/s/AKfycbxLcjHlyE-U1MQx-U6vIPZSM-u5_JJLz0wMbrFsBY7UdkkVXr9dyFAu0Q0dH7Bo14_R8A/exec",  // GASデプロイURL（空文字ならローカルのみ）

  // ========================================
  // 3. 配色（表紙の赤系から抽出、彩度を落として目に優しいトーンに）
  //    物理のエッセンス力学・波動の表紙: 深い赤ベース
  //    → ソフトウォーム系（ローズ〜テラコッタ）に変換
  // ========================================
  COLORS: {
    // ページ背景・カード
    pageBg:       "#F7F4F3",      // ほんのりウォームなライトグレー
    cardBorder:   "#D9CECA",      // カード枠線（薄いローズグレー）
    cardBg:       "#FFFFFF",      // カード背景（白）

    // テキスト
    textPrimary:  "#2E1F1B",      // 主テキスト（ダークブラウン寄り）
    textSecondary:"#6B4F47",      // 補足テキスト（中間ブラウン）
    textMuted:    "#9A847C",      // 薄いテキスト（グレーブラウン）

    // ボタン
    btnPrimaryBg:    "#8B3A3A",   // プライマリボタン背景（落ち着いたダークローズ）
    btnPrimaryFg:    "#FFFFFF",   // プライマリボタン文字（白）
    btnSecondaryBg:  "#F3EDEB",   // セカンダリボタン背景（薄いウォーム）
    btnSecondaryFg:  "#8B3A3A",   // セカンダリボタン文字（ダークローズ）
    btnSecondaryBorder: "#D4C2BC",// セカンダリボタン枠線

    // 入力フィールド
    inputBorder:  "#D4C2BC",      // 入力枠線
    inputBg:      "#FCFAFA",      // 入力背景

    // ステータス
    statusOk:     "#4A8B4A",      // 正常（緑 ※赤系UIで緑は視認性が高い）
    statusError:  "#B83030",      // エラー（赤）
    statusMuted:  "#9A847C",      // 無効（グレーブラウン）

    // 判定ボタン（○わかった / ◎余裕）※判定系は全教材で緑系統を維持
    judgeCorrectBg:     "#D4EDDA",  // ○背景
    judgeCorrectFg:     "#155724",  // ○文字
    judgeCorrectBorder: "#A3D9A3",  // ○枠線
    judgeEasyBg:        "#C3E6CB",  // ◎背景
    judgeEasyFg:        "#0B4F1A",  // ◎文字
    judgeEasyBorder:    "#82C891",  // ◎枠線

    // バッジ
    badgeNewBg:     "#FCEAEA",    // 新規（薄いローズ）
    badgeNewFg:     "#8B3A3A",    // 新規文字
    badgeGradBg:    "#D4EDDA",    // 卒業（緑 ※達成感を表現）
    badgeGradFg:    "#1B5E20",    // 卒業文字
    badgeNeutralBg: "#E8E8E8",    // 中立（グレー）
    badgeNeutralFg: "#666666",    // 中立文字
    badgePendingBg: "#FFF3E0",    // 未復習（オレンジ系）
    badgePendingFg: "#E65100",    // 未復習文字

    // GAS接続状態
    gasOkBg:   "#E8F5E9",         // 接続OK背景
    gasOkFg:   "#2E7D32",         // 接続OK文字
    gasWarnBg: "#FFF3E0",         // 未設定背景
    gasWarnFg: "#E65100",         // 未設定文字

    // コード表示・診断
    codeBg:    "#F5F0EF",         // コードブロック背景
    diagBg:    "#F5F5F5",         // 診断ボタン背景
    diagFg:    "#333333",         // 診断ボタン文字
    diagBorder:"#CCCCCC"          // 診断ボタン枠線
  },

  // ========================================
  // 4. UI文言（物理・エッセンスに最適化）
  // ========================================
  LABELS: {
    unitName:          "問題",                                    // 管理単位の名称
    registerBtn:       "問題を登録する",                            // ホーム画面の登録ボタン
    registerTitle:     "問題登録",                                  // 登録画面のタイトル
    idLabel:           "問題番号",                                  // 入力フィールドのラベル
    idPlaceholder:     "例: 12, 例題5, P38-2",                     // プレースホルダー
    idHint:            "エッセンス力学・波動の問題番号や例題番号を入力（50文字以内）", // 入力ヒント
    listTitle:         "登録一覧",                                  // 一覧画面のタイトル
    listUnit:          "問",                                       // 単位
    csvTitle:          "まとめて取り込み",                           // CSV取込画面のタイトル
    reviewUnit:        "問",                                       // 復習単位
    cardHint:          "エッセンス力学・波動で該当の問題を解いてください", // カード画面のヒント
    searchPlaceholder: "問題番号で検索..."                           // 検索プレースホルダー
  }
};
