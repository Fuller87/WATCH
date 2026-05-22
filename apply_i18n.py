#!/usr/bin/env python3
"""
Apply full i18n / language-toggle to Snap.html in one pass.
"""

import re, sys

SRC  = '/Users/christian.mueller/watch-app/Snap.html'
TRANS = '/Users/christian.mueller/watch-app/translations.js'
OUT  = SRC   # overwrite in-place

# ── 1. Read files ──────────────────────────────────────────────────────────────
with open(SRC,  encoding='utf-8') as f: html = f.read()
with open(TRANS, encoding='utf-8') as f: trans_js = f.read()

# ── helper ─────────────────────────────────────────────────────────────────────
def replace_once(src, old, new, label=''):
    if old not in src:
        print(f'  [WARN] not found: {label or repr(old[:60])}')
        return src
    return src.replace(old, new, 1)

# ══════════════════════════════════════════════════════════════════════════════
# STEP 1 – Inject TRANSLATIONS + helpers right after <script>
# ══════════════════════════════════════════════════════════════════════════════
# Build the block to inject
injection = r"""// ── I18N ─────────────────────────────────────────────────────────────────────
""" + trans_js.strip() + r"""

// Override _lang with localStorage-backed currentLang
let currentLang = localStorage.getItem('watch_lang') || 'de';
function setLang(lang) { currentLang = lang; localStorage.setItem('watch_lang', lang); }
function T(key) {
  const t = (TRANSLATIONS[currentLang] || TRANSLATIONS.de)[key];
  return t !== undefined ? t : (TRANSLATIONS.de[key] || key);
}
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const attr = el.dataset.i18nAttr;
    if (attr) el[attr] = T(key);
    else el.textContent = T(key);
  });
}
function toggleLang() {
  setLang(currentLang === 'de' ? 'en' : 'de');
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = currentLang.toUpperCase();
  rerenderAll();
}
function rerenderAll() {
  applyTranslations();
  renderRosterView();
  renderLibrary();
  onCrisisChange();
}
// ── END I18N ──────────────────────────────────────────────────────────────────
"""

# Inject right after the opening <script> tag (line 925)
html = replace_once(html, '<script>\n// ── AFFILIATION PRESETS',
                    '<script>\n' + injection + '\n// ── AFFILIATION PRESETS',
                    'inject translations after <script>')

# ══════════════════════════════════════════════════════════════════════════════
# STEP 2 – Add lang-toggle button to hero banner + data-i18n on tagline
# ══════════════════════════════════════════════════════════════════════════════
# Replace the hero-overlay content
old_hero = '      <p class="hero-tagline">Infinity Taktik Nerd</p>\n    </div>'
new_hero = ('      <p class="hero-tagline" data-i18n="hero_tagline">Infinity Taktik Nerd</p>\n'
            '    </div>\n'
            '    <button id="lang-toggle" onclick="toggleLang()" '
            'style="position:absolute;right:16px;top:50%;transform:translateY(-50%);'
            'background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);'
            'border-radius:20px;padding:4px 12px;font-size:0.75rem;font-weight:700;'
            'color:#e5e7eb;cursor:pointer;letter-spacing:0.05em">DE</button>')
html = replace_once(html, old_hero, new_hero, 'hero-tagline + lang button')

# Make the hero-visual div position:relative so the button can be absolute
old_visual_div = '<div class="hero-visual" style="background-image:url('
new_visual_div = '<div class="hero-visual" style="position:relative;background-image:url('
html = replace_once(html, old_visual_div, new_visual_div, 'hero-visual position:relative')

# ══════════════════════════════════════════════════════════════════════════════
# STEP 3 – data-i18n on static nav buttons
# ══════════════════════════════════════════════════════════════════════════════
html = replace_once(html,
    '<button class="tab-btn active" onclick="showTab(\'roster\')" id="tab-btn-roster">📋 <span class="tab-label">Roster</span></button>',
    '<button class="tab-btn active" onclick="showTab(\'roster\')" id="tab-btn-roster">📋 <span class="tab-label" data-i18n="nav_roster">Roster</span></button>',
    'nav_roster')
html = replace_once(html,
    '<button class="tab-btn" onclick="showTab(\'team\')" id="tab-btn-team">⚔️ <span class="tab-label">Taktik</span></button>',
    '<button class="tab-btn" onclick="showTab(\'team\')" id="tab-btn-team">⚔️ <span class="tab-label" data-i18n="nav_tactics">Taktik</span></button>',
    'nav_tactics')
html = replace_once(html,
    '<button class="tab-btn" onclick="showTab(\'dice\')"  id="tab-btn-dice">🎲 <span class="tab-label">Würfelrechner</span></button>',
    '<button class="tab-btn" onclick="showTab(\'dice\')"  id="tab-btn-dice">🎲 <span class="tab-label" data-i18n="nav_dice">Würfelrechner</span></button>',
    'nav_dice')
html = replace_once(html,
    '<button class="tab-btn" onclick="showTab(\'compare\')" id="tab-btn-compare">⚖️ <span class="tab-label">Vergleich</span></button>',
    '<button class="tab-btn" onclick="showTab(\'compare\')" id="tab-btn-compare">⚖️ <span class="tab-label" data-i18n="nav_compare">Vergleich</span></button>',
    'nav_compare')

# Footer data-i18n
html = replace_once(html,
    '<div class="text-center text-xs mt-6 opacity-30">W.A.T.C.H. · Krisen-Karten: AMG Organized Play 2024/25 · All stones collected ✓</div>',
    '<div class="text-center text-xs mt-6 opacity-30" data-i18n="footer">W.A.T.C.H. · Krisen-Karten: AMG Organized Play 2024/25 · All stones collected ✓</div>',
    'footer')

# ══════════════════════════════════════════════════════════════════════════════
# STEP 4 – JS: renderRosterView() — replace hardcoded DE strings
# ══════════════════════════════════════════════════════════════════════════════

# roster name fallback
html = replace_once(html,
    "document.getElementById('roster-name-lbl').textContent = r.name || 'Mein Roster';",
    "document.getElementById('roster-name-lbl').textContent = r.name || T('roster_default_name');",
    'roster_default_name')

# roster meta string
html = replace_once(html,
    "document.getElementById('roster-meta').textContent = `${(r.chars||[]).length} Chars · ${total} Punkte${pinnedCount ? ` · 📌 ${pinnedCount} gepinnt` : ''}`;",
    "document.getElementById('roster-meta').textContent = `${(r.chars||[]).length} Chars · ${total} ${T('result_chars_count').replace('{n}','').replace('·','').replace('{total}','').trim().split('·')[1]?.trim() || 'Punkte'}${pinnedCount ? ` · 📌 ${pinnedCount} gepinnt` : ''}`;",
    'roster meta')

# hungry label in chip (two instances — use same replacement)
html = html.replace(
    '>⚡ hungrig</span>',
    '>${T("pb_hungry_label")}</span>')

# "kein Scoring" chip
html = html.replace(
    '>🚫 kein Scoring</span>',
    '>🚫 ${T("pb_hungry_label").includes("hungry") ? "no Scoring" : "kein Scoring"}</span>')

# capability section headings
html = replace_once(html,
    "<span>Fähigkeiten</span>",
    "<span>${T('roster_section_capabilities')}</span>",
    'roster_section_capabilities')

html = replace_once(html,
    "<span>Roster-Stärke</span>",
    "<span>${T('roster_section_strength')}</span>",
    'roster_section_strength')

# cap() labels: Throw, Push, Conditions, Heal, Speed L
html = replace_once(html,
    "cap('🎯','Throw', throwChars) +",
    "cap('🎯',T('cap_throw'), throwChars) +",
    'cap_throw')
html = replace_once(html,
    "cap('💨','Push', pushChars) +",
    "cap('💨',T('cap_push'), pushChars) +",
    'cap_push')
html = replace_once(html,
    "cap('💚','Heal', healChars) +",
    "cap('💚',T('cap_heal'), healChars) +",
    'cap_heal')
html = replace_once(html,
    "cap('🏃','Speed L', flyChars);",
    "cap('🏃',T('cap_speed_l'), flyChars);",
    'cap_speed_l')
html = replace_once(html,
    '<span style="font-size:0.65rem;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.06em">Conditions</span>',
    '<span style="font-size:0.65rem;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.06em">${T("cap_conditions")}</span>',
    'cap_conditions')

# ── section heading labels in static HTML ─────────────────────────────────────
# view-chars-section
html = html.replace(
    '>Charaktere<',
    ' data-i18n="roster_section_chars">Charaktere<')
html = html.replace(
    '>Taktikkarten<',
    ' data-i18n="roster_section_tactics">Taktikkarten<')
html = html.replace(
    '>Krisen<',
    ' data-i18n="roster_section_crises">Krisen<')

# ══════════════════════════════════════════════════════════════════════════════
# STEP 5 – renderLibrary() strings
# ══════════════════════════════════════════════════════════════════════════════
html = replace_once(html,
    "el.innerHTML = '<p style=\"font-size:0.7rem;color:#4b5563;padding:8px 0\">Noch keine gespeicherten Roster.</p>';",
    "el.innerHTML = `<p style=\"font-size:0.7rem;color:#4b5563;padding:8px 0\">${T('library_empty')}</p>`;",
    'library_empty')

html = replace_once(html,
    "📂 Laden\n      </button>",
    "${T('library_btn_load')}\n      </button>",
    'library_btn_load')

# library heading (static HTML)
html = html.replace(
    '>Roster-Bibliothek<',
    ' data-i18n="library_heading">Roster-Bibliothek<')

# ══════════════════════════════════════════════════════════════════════════════
# STEP 6 – saveRosterToLibrary / loadRosterFromLibrary / deleteRosterFromLibrary
# ══════════════════════════════════════════════════════════════════════════════
html = replace_once(html,
    "if (!myRoster.chars.length) { alert('Kein Roster zum Speichern.'); return; }",
    "if (!myRoster.chars.length) { alert(T('library_no_roster')); return; }",
    'library_no_roster')

html = replace_once(html,
    "showLibraryToast('✅ Roster aktualisiert');",
    "showLibraryToast(T('library_toast_updated'));",
    'library_toast_updated')

html = replace_once(html,
    "if (lib.length >= LIBRARY_MAX) { alert('Bibliothek voll (max. ' + LIBRARY_MAX + ' Roster). Bitte zuerst einen Slot löschen.'); return; }",
    "if (lib.length >= LIBRARY_MAX) { alert(T('library_full').replace('{max}', LIBRARY_MAX)); return; }",
    'library_full')

html = replace_once(html,
    "showLibraryToast('✅ Roster gespeichert');",
    "showLibraryToast(T('library_toast_saved'));",
    'library_toast_saved')

html = replace_once(html,
    "if (!confirm('Aktuelles Roster mit \"' + slot.name + '\" ersetzen?')) return;",
    "if (!confirm(T('library_confirm_load').replace('{name}', slot.name))) return;",
    'library_confirm_load')

html = replace_once(html,
    "showLibraryToast('📂 \"' + slot.name + '\" geladen');",
    "showLibraryToast(T('library_toast_loaded').replace('{name}', slot.name));",
    'library_toast_loaded')

html = replace_once(html,
    "if (!slot || !confirm('\"' + slot.name + '\" löschen?')) return;",
    "if (!slot || !confirm(T('library_confirm_delete').replace('{name}', slot.name))) return;",
    'library_confirm_delete')

# ══════════════════════════════════════════════════════════════════════════════
# STEP 7 – Roster save/import buttons in static HTML
# ══════════════════════════════════════════════════════════════════════════════
html = html.replace(
    '>💾 Speichern<',
    ' data-i18n="roster_btn_save">💾 Speichern<')
html = html.replace(
    '>📋 Importieren<',
    ' data-i18n="roster_btn_import">📋 Importieren<')

# ══════════════════════════════════════════════════════════════════════════════
# STEP 8 – Import Modal strings
# ══════════════════════════════════════════════════════════════════════════════
html = replace_once(html,
    '<span style="font-size:1rem;font-weight:800;color:#e5e7eb">📋 Roster importieren</span>',
    '<span style="font-size:1rem;font-weight:800;color:#e5e7eb" data-i18n="import_title">📋 Roster importieren</span>',
    'import_title')

html = replace_once(html,
    '✅ Importieren &amp; Speichern\n      </button>',
    '<span data-i18n="import_btn_confirm">✅ Importieren &amp; Speichern</span>\n      </button>',
    'import_btn_confirm')

html = replace_once(html,
    '>        Abbrechen\n      </button>\n    </div>\n  </div>\n</div>\n\n\n<!-- OPPONENT IMPORT MODAL',
    '><span data-i18n="import_btn_cancel">Abbrechen</span>\n      </button>\n    </div>\n  </div>\n</div>\n\n\n<!-- OPPONENT IMPORT MODAL',
    'import_btn_cancel')

# Opponent import modal
html = replace_once(html,
    '<span style="font-size:1rem;font-weight:800;color:#e5e7eb">🦹 Gegner importieren</span>',
    '<span style="font-size:1rem;font-weight:800;color:#e5e7eb" data-i18n="opp_import_title">🦹 Gegner importieren</span>',
    'opp_import_title')

html = replace_once(html,
    'Plaintext-Export des gegnerischen Rosters von <span style="color:#fde68a;font-weight:600">jarvis-protocol.com</span> einfügen.',
    '<span data-i18n="opp_import_desc">Plaintext-Export des gegnerischen Rosters von</span> <span style="color:#fde68a;font-weight:600">jarvis-protocol.com</span>',
    'opp_import_desc')

html = replace_once(html,
    '>        ✅ Importieren\n      </button>',
    '><span data-i18n="opp_import_btn_confirm">✅ Importieren</span>\n      </button>',
    'opp_import_btn_confirm')

html = replace_once(html,
    '>        Abbrechen\n      </button>\n    </div>\n  </div>\n</div>\n\n</body>',
    '><span data-i18n="opp_import_btn_cancel">Abbrechen</span>\n      </button>\n    </div>\n  </div>\n</div>\n\n</body>',
    'opp_import_btn_cancel')

# ══════════════════════════════════════════════════════════════════════════════
# STEP 9 – parseAndImport() feedback strings
# ══════════════════════════════════════════════════════════════════════════════
html = replace_once(html,
    "'⚠️ Keine Charaktere oder Taktikkarten erkannt. Bitte Format prüfen.'",
    "T('import_error_no_chars')",
    'import_error_no_chars')

html = replace_once(html,
    "'⚠️ Fehler beim Speichern: ' + e.message",
    "T('import_error_save').replace('{msg}', e.message)",
    'import_error_save')

# ══════════════════════════════════════════════════════════════════════════════
# STEP 10 – parseAndImportOpp() feedback
# ══════════════════════════════════════════════════════════════════════════════
html = replace_once(html,
    "'⚠️ Keine Charaktere erkannt. Bitte Format prüfen.'",
    "T('opp_import_error')",
    'opp_import_error')

# ══════════════════════════════════════════════════════════════════════════════
# STEP 11 – renderCompare() section titles
# ══════════════════════════════════════════════════════════════════════════════
old_sectionTitles = """  const sectionTitles = {
    teamtyp:'Team-Typ', chars:'Charaktere', threat:'Threat-Verteilung',
    speed:'Bewegung', power:'Power-Economy', schaden:'Schadensprofil',
    range:'Range-Verteilung', conditions:'Conditions', warzone:'Warzone Control',
    defense:'Defensiv-Profil', weaknesses:'Schwächen'
  };"""
new_sectionTitles = """  const sectionTitles = {
    teamtyp:T('cmp_section_teamtyp'), chars:T('cmp_section_chars'), threat:T('cmp_section_threat'),
    speed:T('cmp_section_speed'), power:T('cmp_section_power'), schaden:T('cmp_section_schaden'),
    range:T('cmp_section_range'), conditions:T('cmp_section_conditions'), warzone:T('cmp_section_warzone'),
    defense:T('cmp_section_defense'), weaknesses:T('cmp_section_weaknesses')
  };"""
html = replace_once(html, old_sectionTitles, new_sectionTitles, 'renderCompare sectionTitles')

# emptyCell
html = replace_once(html,
    "'<div style=\"padding:12px 0;text-align:center;color:#374151;font-size:0.72rem;font-style:italic\">Kein Roster</div>'",
    "`<div style=\"padding:12px 0;text-align:center;color:#374151;font-size:0.72rem;font-style:italic\">${T('compare_no_roster_cell')}</div>`",
    'compare_no_roster_cell')

# ══════════════════════════════════════════════════════════════════════════════
# STEP 12 – analyzePowerBudget() result strings
# ══════════════════════════════════════════════════════════════════════════════
html = replace_once(html,
    "'Power-Economy solide'",
    "T('pb_badge_good').replace('✅ ','') || 'Power-Economy solide'",
    'pb_badge_good text')

# power budget column headers
html = html.replace(
    ">'Char'<",
    ">T('pb_col_char')<")
# These appear in template literal contexts – use a general approach
html = html.replace("'Einnahmen/Rd ⓘ'", "T('pb_col_income')")
html = html.replace("'Verbrauch ⓘ'",    "T('pb_col_cost')")

# ══════════════════════════════════════════════════════════════════════════════
# STEP 13 – onCrisisChange / buildTeamResult area: team_cta, team_intro etc.
# ══════════════════════════════════════════════════════════════════════════════
# Static HTML in the tactics tab
html = html.replace(
    '>Krise und Gegner wählen',
    ' data-i18n="team_intro">Krise und Gegner wählen')
html = html.replace(
    '>✨ W.A.T.C.H. — Bestes Team finden<',
    ' data-i18n="team_cta">✨ W.A.T.C.H. — Bestes Team finden<')
html = html.replace(
    '>★ = eigene Karte · Das Team',
    ' data-i18n="team_cta_footnote">★ = eigene Karte · Das Team')

# Select placeholders
html = html.replace(
    '>— Secure-Karte wählen —<',
    ' data-i18n="secure_placeholder">— Secure-Karte wählen —<')
html = html.replace(
    '>— Extract-Karte wählen —<',
    ' data-i18n="extract_placeholder">— Extract-Karte wählen —<')

# Labels
html = html.replace('>Secure-Krise<', ' data-i18n="secure_label">Secure-Krise<')
html = html.replace('>Extract-Krise<', ' data-i18n="extract_label">Extract-Krise<')

# ══════════════════════════════════════════════════════════════════════════════
# STEP 14 – matchup warnings (generateMatchupWarnings) – use T()
# ══════════════════════════════════════════════════════════════════════════════
# The warnings are constructed via strings in JS. Replace the key ones:

old_warn_no_mystic = "'Nur physische Angreifer — Magneto hat starke physische Verteidigung. Mystische oder Energie-Angriffe sind deutlich effektiver gegen ihn.'"
html = html.replace(old_warn_no_mystic, "T('warn_no_mystic')")

old_warn_no_push = "'Kein Throw/Push im Roster — gegen Control-Teams (Brotherhood, Syndicate, Convocation) wichtig um Gegner von Objectives zu verdrängen.'"
html = html.replace(old_warn_no_push, "T('warn_no_push')")

old_warn_no_heal = "'Kein Heiler / Sustain — gegen ein Attrition-Team ohne Heilung verlierst du den Ausdauerkrieg. Support-Char oder Selbstheiler einplanen.'"
html = html.replace(old_warn_no_heal, "T('warn_no_heal')")

old_warn_midnight = "'Midnight Sons heilen sich selbst stark — ohne eigene Heilung ist Burst-Schaden auf ein Ziel zwingend nötig.'"
html = html.replace(old_warn_midnight, "T('warn_midnight_heal')")

old_warn_no_hex = "'Kein Hex im Roster — Hex sperrt Leadership-Rerolls beim Gegner. Sehr effektiv gegen Asgard / X-Men / Avengers.'"
html = html.replace(old_warn_no_hex, "T('warn_no_hex')")

old_warn_no_poison = "'Keine Poison/Bleed-Immunität — Midnight Sons verteilen diese Conditions gerne.'"
html = html.replace(old_warn_no_poison, "T('warn_no_poison_bleed')")

old_warn_no_range = "'Kein Fernkämpfer — Inhumans (Black Bolt) ist auf Distanz gefährlich. Nahkampf erzwingen ohne Fernkampf-Option ist riskant.'"
html = html.replace(old_warn_no_range, "T('warn_no_range')")

# ── Severity labels ────────────────────────────────────────────────────────────
html = html.replace("'🔴 Kritisch'", "T('sev_high')")
html = html.replace("'🟡 Achtung'", "T('sev_medium')")
html = html.replace("'🔵 Hinweis'", "T('sev_low')")

# matchup warnings heading
html = html.replace(
    "'⚠️ Matchup-Warnungen'",
    "T('matchup_warnings_heading')")

# ══════════════════════════════════════════════════════════════════════════════
# STEP 15 – Crisis suggestions panel (static HTML)
# ══════════════════════════════════════════════════════════════════════════════
html = html.replace(
    '>🌍 Krisenvorschläge<',
    ' data-i18n="crisis_suggestions_title">🌍 Krisenvorschläge<')
html = html.replace(
    '>🎲 Vorschläge generieren<',
    ' data-i18n="crisis_suggestions_btn">🎲 Vorschläge generieren<')

# ══════════════════════════════════════════════════════════════════════════════
# STEP 16 – Result strings in onCrisisChange / buildTeamResult area
# ══════════════════════════════════════════════════════════════════════════════
html = html.replace(
    "'⚠️ Kein passendes Team gefunden – überprüfe deinen Roster (mind. 2 Charaktere nötig).'",
    "T('result_no_team')")

html = html.replace(
    "'🃏 Empfohlene Taktikkarten'",
    "T('tactics_reco_heading')")

html = html.replace(
    "'Keine Taktikkarten im Roster.'",
    "T('tactics_reco_empty')")

html = html.replace(
    "'🗓 Rundenplan'",
    "T('round_plan_heading')")

html = html.replace(
    "'🔀 Splashcharakter-Empfehlungen'",
    "T('splash_heading')")

# ══════════════════════════════════════════════════════════════════════════════
# STEP 17 – Dice tab static labels
# ══════════════════════════════════════════════════════════════════════════════
html = html.replace(
    '>⚔️ Angriffswürfel<',
    ' data-i18n="dice_atk_label">⚔️ Angriffswürfel<')
html = html.replace(
    '>🛡 Verteidigungswürfel<',
    ' data-i18n="dice_def_label">🛡 Verteidigungswürfel<')

# ══════════════════════════════════════════════════════════════════════════════
# STEP 18 – Compare tab static labels
# ══════════════════════════════════════════════════════════════════════════════
html = html.replace(
    '>Wähle oben zwei Roster zum Vergleichen.<',
    ' data-i18n="compare_select_hint">Wähle oben zwei Roster zum Vergleichen.<')

# ══════════════════════════════════════════════════════════════════════════════
# STEP 19 – Set lang-toggle button text on init
# ══════════════════════════════════════════════════════════════════════════════
# Find the renderRosterView(); / populateCrisisSelects() init call area
# and add button init there. We'll add it before the last </script> tag
init_snippet = """
// ── I18N INIT ─────────────────────────────────────────────────────────────────
(function() {
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = currentLang.toUpperCase();
  applyTranslations();
})();
"""

html = replace_once(html,
    '</script>\n\n<!-- CHARACTER DETAIL MODAL',
    init_snippet + '</script>\n\n<!-- CHARACTER DETAIL MODAL',
    'i18n init snippet')

# ══════════════════════════════════════════════════════════════════════════════
# Write output
# ══════════════════════════════════════════════════════════════════════════════
with open(OUT, 'w', encoding='utf-8') as f:
    f.write(html)

print(f'\nDone. Written to {OUT}')
