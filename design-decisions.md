# 72時間LP Sprint Design Decisions

## WOOP+C

- Wish: Soya ShintaniのWeb制作サンプルとして、投稿した瞬間に「売る導線まで考えて作れる」と伝わるHTML成果物を作る。
- Outcome: 小規模事業者が、1ページLP制作の相談に進みやすくなる。
- Obstacle: きれいなだけのデザインに見える、実績を誇張しているように見える、価格や進行方法が不明で不安になる。
- Plan: ファーストビューで価値を3秒で伝え、デモ作品明記、価格目安、制作範囲、FAQ、相談文コピーを1ページに集約する。
- Curiosity: 初見ユーザーが一番知りたいのは「自分の事業でも頼めるか」「いくらからか」「通話なしで進むか」。

## Selected Design Skill

- Main skill: `impeccable`
- Reason: 高コントラスト、編集ポスター的な強いタイポグラフィ、白/クリーム/バーントオレンジの面構成が、投稿映えと営業実用性を両立しやすい。
- Implementation stance: Google Stitchの出力をそのまま納品せず、構成案と余白の比較材料として使う。

## Google Stitch Prompt

```text
Create a responsive landing page UI for a Japanese freelance web design service called "72時間LP Sprint" by Soya Shintani.

Goal:
Make small business owners understand in 3 seconds that this service turns their offer into a one-page landing page that leads to inquiries within 72 hours.

Audience:
Small shops, solo founders, local services, boutique businesses, and service providers who need inquiry, reservation, purchase, or trust-building quickly.

Tone:
Confident, energetic, warm, rational, premium but not corporate.

Sections:
Hero with the headline "問い合わせにつながる1ページを72時間で形にする", primary CTA "制作相談を送る", secondary CTA "サンプルを見る".
Problem section showing why pretty sites fail.
Offer section with three deliverables: first view, CTA flow, trust proof.
Process section with three steps: hearing, design, HTML delivery.
Demo sample section clearly labeled as demo work, not paid client work.
Pricing anchor with ¥55,000 starter reference.
FAQ about no-call workflow, missing materials, public URL, revision scope.
Final CTA.

Visual direction:
Modern graphic editorial poster aesthetic. True white, warm cream, black ink, burnt orange, amber accent. Strong Japanese typography, precise spacing, high contrast, practical CTA hierarchy.

Avoid:
Fake client logos, fake paid results, generic SaaS dashboard, overused bento grid, purple gradients, dark blue/slate theme, low-contrast text, tiny unreadable UI, and any claim that demo samples are paid client work.
```

## Fonts And Materials

- Google Fonts: Chakra Petch for display-like headings and UI accents, Noto Sans JP for readable Japanese body text.
- Imagery: No stock photos in v1. The hero and sample cards use code-native mockups and gradients to avoid false client/product implication.
- Reference concept: `C:\Users\steve\.codex\generated_images\019f0b4e-6642-7491-9454-b0d659e2b1b4\ig_0027a27bc488721a016a405665702c8191814a3b3e3836e677.png`

## Claim Safety

- Existing sample cards are labeled as demo work.
- No paid client results, client logos, conversion rates, or external completion claims are used.
- Price is shown as an estimate and not a guaranteed final quote.
