# Manual QA - 2026-06-28

## Scope

- Page: `C:\Users\steve\freelance\lp-sprint-showcase\index.html`
- Reference concept: `C:\Users\steve\.codex\generated_images\019f0b4e-6642-7491-9454-b0d659e2b1b4\ig_0027a27bc488721a016a405665702c8191814a3b3e3836e677.png`
- Local verification URL: `http://127.0.0.1:4177/`
- Browser path: In-app Browser used. Direct `file://` navigation was blocked by browser URL policy, so the same folder was served through local HTTP on `127.0.0.1`.

## Checks

- Desktop 1366x900: passed. Screenshot saved to `qa/desktop-1366.png`.
- Mobile 390x844: passed. Screenshot saved to `qa/mobile-390.png`.
- Full-page desktop: saved to `qa/desktop-full.png`.
- Full-page mobile: saved to `qa/mobile-full.png`.
- Page identity: title is `72時間LP Sprint by Soya Shintani`.
- Blank-page check: passed. Hero, CTA, demo section, pricing, FAQ, and final CTA render.
- Framework overlay check: passed. Static page, no overlay.
- Console health: passed. No browser warnings or errors captured.
- CTA path: passed. Hero, price, and final CTA route to the contact area or email template.
- FAQ interaction: passed. `通話なしでも進められますか？` opens and exposes the answer.
- Copy interaction: passed after fallback fix. `相談文をコピー` writes the consultation text to clipboard.
- Accessibility: passed basic check. Focus-visible styles exist, FAQ uses native `details/summary`, primary controls are 51px+ high on mobile, and reduced-motion CSS is present.
- Mobile overflow: passed. 390px viewport reported no horizontal overflow.
- Claim safety: passed. Demo labels are present, no paid client claims, no fake logos, no conversion claims.

## Visual Fidelity Ledger

- Layout: Concept uses left copy plus right browser/phone mockup. Render matches the same two-column editorial hero.
- Palette: Concept uses white, cream, black, and strong orange. Render keeps the same palette and avoids purple/dark-blue themes.
- Copy: H1, primary CTA, secondary CTA, sample/demo wording, price anchor, FAQ intent all match the plan.
- CTA visibility: Initial render was too tall; fixed by reducing hero type scale and hero vertical alignment. Current desktop screenshot shows CTAs within the first viewport.
- Assets: Concept uses photoreal cafe imagery; render intentionally uses code-native mockups and gradients to avoid stock-photo or false-client implications.
- Mobile: Render preserves readable H1, full-width CTAs, no horizontal overflow. Hero visual continues below the first screen by design.

## Remaining Intentional Deviations

- No real contact email is embedded. Final CTA opens a mail template without a recipient, and the consultation text can be copied.
- No public URL is included yet. Deployment/GitHub publishing should be done only after explicit approval.
