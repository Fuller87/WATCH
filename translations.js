// ── TRANSLATIONS ──────────────────────────────────────────────────────────────
// Complete bilingual (DE / EN) string table for W.A.T.C.H.
// Usage: T(key) returns the string for the current language.
// To switch: setLang('en') / setLang('de')

let _lang = 'de';
function setLang(lang) { _lang = lang; }
function T(key) { return (TRANSLATIONS[_lang] || TRANSLATIONS.de)[key] || TRANSLATIONS.de[key] || key; }

const TRANSLATIONS = {

  // ════════════════════════════════════════════════════════════════
  de: {

    // ── Hero banner ────────────────────────────────────────────────
    hero_tagline: 'Infinity Taktik Nerd',

    // ── Tab navigation ─────────────────────────────────────────────
    nav_roster:    'Roster',
    nav_tactics:   'Taktik',
    nav_dice:      'Würfelrechner',
    nav_compare:   'Vergleich',

    // ── Roster panel ───────────────────────────────────────────────
    roster_default_name:    'Mein Roster',
    roster_btn_save:        '💾 Speichern',
    roster_btn_import:      '📋 Importieren',
    roster_section_chars:   'Charaktere',
    roster_section_tactics: 'Taktikkarten',
    roster_section_crises:  'Krisen',
    roster_section_capabilities: 'Fähigkeiten',
    roster_section_strength:     'Roster-Stärke',

    // ── Roster Library ─────────────────────────────────────────────
    library_heading:        'Roster-Bibliothek',
    library_empty:          'Noch keine gespeicherten Roster.',
    library_btn_load:       '📂 Laden',
    library_btn_delete:     '🗑',
    library_toast_saved:    '✅ Roster gespeichert',
    library_toast_updated:  '✅ Roster aktualisiert',
    library_toast_loaded:   '📂 "{name}" geladen',   // {name} = roster name
    library_confirm_load:   'Aktuelles Roster mit "{name}" ersetzen?',
    library_confirm_delete: '"{name}" löschen?',
    library_confirm_clear:  'Roster wirklich löschen?',
    library_full:           'Bibliothek voll (max. {max} Roster). Bitte zuerst einen Slot löschen.',
    library_no_roster:      'Kein Roster zum Speichern.',

    // ── Crisis Suggestions panel ───────────────────────────────────
    crisis_suggestions_title:    '🌍 Krisenvorschläge',
    crisis_suggestions_subtitle: 'Top 5 Secure & Extract für dein Roster',
    crisis_suggestions_desc:     'Berechnet welche Secure- und Extract-Karten am besten zu deinem Roster passen – basierend auf Threat-Summe, Aktivierungsanzahl und Spielstil deiner Chars. Top 5 Secure & Extract für dein Roster – alle Karten, eigene (★) leicht bevorzugt.',
    crisis_suggestions_empty:    'Klick auf „Vorschläge generieren" um die besten Krisen für dein Roster zu berechnen.',
    crisis_suggestions_btn:      '🎲 Vorschläge generieren',
    crisis_suggestions_roster_empty: '⚠️ Roster ist leer – bitte erst Charaktere hinzufügen.',
    crisis_section_secure:  'Secure-Krisen',
    crisis_section_extract: 'Extract-Krisen',
    crisis_btn_select:      'Wählen',

    // ── Taktik Tab (Team Builder) ──────────────────────────────────
    team_intro:             'Krise und Gegner wählen – das Roster aus dem Roster-Tab wird verwendet.',
    team_cta:               '✨ W.A.T.C.H. — Bestes Team finden',
    team_cta_footnote:      '★ = eigene Karte · Das Team ändert sich nur mit den Krisen-Karten',

    // Secure / Extract crisis selects
    secure_label:           'Secure-Krise',
    secure_desc:            'Tokens auf der Karte halten. Bestimmt die Bedrohungsstufe.',
    secure_placeholder:     '— Secure-Karte wählen —',
    extract_label:          'Extract-Krise',
    extract_desc:           'Objekte aufheben und in der eigenen Zone halten.',
    extract_placeholder:    '— Extract-Karte wählen —',

    // Opponent section
    opponent_label:         '🦹 Gegnerische Affiliation',
    opponent_optional:      '· optional',
    opponent_desc:          'Affiliation auswählen um eine gegnerische Strategie zu erhalten. Leader und Chars ergänzen für noch genauere Hinweise.',
    opponent_unknown:       '— Kein / Unbekannt —',
    opponent_btn_import:    '📋 Gegner-Roster importieren',
    opponent_leader_label:  'Leader',
    opponent_leader_unknown:'— Unbekannt —',
    opponent_chars_label:   'Chars im Team',
    opponent_btn_clear:     '✕ Leeren',
    opponent_search_placeholder: 'Charakter suchen…',
    opponent_search_hint:   'Mind. 2 Zeichen eingeben…',
    opponent_search_empty:  'Kein Charakter gefunden.',

    // Threat
    threat_label:           '⚡ Bedrohungsstufe',
    threat_desc:            'Wird automatisch aus der Secure-Krise übernommen. Manuell überschreiben falls nötig.',
    threat_auto:            'Auto (aus Secure-Karte)',
    threat_heading_result:  'Bedrohung',

    // Approach / Spielstil
    approach_label:         '🎭 Spielstil',
    approach_desc:          '<b>Auto</b> erkennt den Stil aus den Krisen. <b>Mission Play</b> = Objectives priorisieren. <b>Attrition</b> = Gegner eliminieren. <b>Control</b> = Zone kontrollieren durch Throw/Push/Conditions.',
    approach_auto:          '⚙️ Auto',
    approach_scoring:       '🎯 Mission Play',
    approach_attrition:     '💀 Attrition',
    approach_control:       '🔗 Control',

    // optgroup labels in crisis selects
    threat_optgroup:        '── Bedrohung {t} ──',   // {t} = threat number

    // Builder result: type labels & descriptions
    type_scoring:           '🎯 MISSION PLAY',
    type_attrition:         '💀 ATTRITION',
    type_control:           '🔗 CONTROL',
    type_desc_scoring:      'Fokus auf Punkte · ~{vpRate} VP/Runde möglich ({vpPressure}) → {sizeHint}',
    type_desc_scoring_many: 'viele kleine Chars bevorzugt',
    type_desc_scoring_bal:  'ausgewogene Teamgröße',
    type_desc_control:      'Zone kontrollieren – Throw, Push, Conditions und Advance um Gegner aus Objectives zu verdrängen',
    type_desc_attrition:    'Fokus auf Vernichtung gegnerischer Charaktere',
    vp_high:                'hoch',
    vp_medium:              'mittel',
    vp_low:                 'niedrig',

    // Builder result: team summary
    result_chars_count:     '{n} Charaktere · {total} Punkte',
    result_tactics_heading: 'Taktikkarten',
    result_no_team:         '⚠️ Kein passendes Team gefunden – überprüfe deinen Roster (mind. 2 Charaktere nötig).',
    result_threat_mismatch: '⚠️ Verschiedene Bedrohungswerte (Secure T{sec} / Extract T{ext}) – Team basiert auf Secure <b>T{primary}</b>.',

    // Approach auto-reason strings
    reason_secure_scoring:   '{name} ist Mission-Play-orientiert (+2)',
    reason_secure_attrition: '{name} ist Attrition-orientiert (−2)',
    reason_secure_balanced:  '{name} ist ausgewogen (0)',
    reason_extract_scoring:  '{name} unterstützt Mission Play (+1)',
    reason_extract_attrition:'{name} unterstützt Attrition (−1)',
    reason_extract_balanced: '{name} ist ausgewogen (0)',
    reason_opp_attrition:    'Gegner {opp} spielt schwere Attrition → Scoring race bevorzugt (+2)',
    reason_opp_scoring:      'Gegner {opp} ist Scoring-orientiert → Tempo mitgehen (+1)',
    reason_opp_control:      'Gegner {opp} spielt Control → Attrition-Druck bevorzugt (−1)',
    reason_manual:           'Team-Typ manuell gewählt: <b>{approach}</b>',
    approach_name_scoring:   'Mission Play',
    approach_name_attrition: 'Attrition',
    approach_name_control:   'Control',

    // Opponent result block
    opp_section_enemy_team:      'Gegner Team',
    opp_section_strengths:       'Gegnerische Stärken',
    opp_primary_target:          '🎯 Primärziel:',
    opp_strategy_heading:        'Spielstrategie mit diesem Team',
    opp_label:                   'Gegner',

    // Matchup warnings
    matchup_warnings_heading:    '⚠️ Matchup-Warnungen',
    sev_high:                    '🔴 Kritisch',
    sev_medium:                  '🟡 Achtung',
    sev_low:                     '🔵 Hinweis',

    // Matchup warning texts
    warn_no_mystic:    'Nur physische Angreifer — Magneto hat starke physische Verteidigung. Mystische oder Energie-Angriffe sind deutlich effektiver gegen ihn.',
    warn_no_push:      'Kein Throw/Push im Roster — gegen Control-Teams (Brotherhood, Syndicate, Convocation) wichtig um Gegner von Objectives zu verdrängen.',
    warn_no_heal:      'Kein Heiler / Sustain — gegen ein Attrition-Team ohne Heilung verlierst du den Ausdauerkrieg. Support-Char oder Selbstheiler einplanen.',
    warn_midnight_heal:'Midnight Sons heilen sich selbst stark — ohne eigene Heilung ist Burst-Schaden auf ein Ziel zwingend nötig.',
    warn_no_hex:       'Kein Hex im Roster — Hex sperrt Leadership-Rerolls beim Gegner. Sehr effektiv gegen Asgard / X-Men / Avengers.',
    warn_no_poison_bleed: 'Keine Poison/Bleed-Immunität — Midnight Sons verteilen diese Conditions gerne.',
    warn_scoring_chars:'Nur {n} Scoring-fähige {chars} — für Mission Play mind. 2 Chars die Objectives halten können.',
    warn_scoring_char_sg: 'Char',
    warn_scoring_char_pl: 'Chars',
    warn_activations:  'Gegner ({opp}) spielt viele günstige Chars — du hast nur {n} Aktivierungen. Gegner kann Objectives leichter besetzen.',
    warn_no_range:     'Kein Fernkämpfer — Inhumans (Black Bolt) ist auf Distanz gefährlich. Nahkampf erzwingen ohne Fernkampf-Option ist riskant.',
    warn_low_dice:     'Schwache Angriffswürfel (⌀ {avg}) gegen ein Team mit massiver Stamina ({opp}). Burst-Combo aus mehreren Chars nötig — nie einzeln angreifen.',
    warn_no_cond:      'Keine Condition-Immunität oder Removal gegen {opp} (verteilt: {conds}). Chars werden dauerhaft geschwächt — Support mit Cleanse oder Chars mit passenden Immunitäten einplanen.',
    warn_part_cond:    'Nur teilweise Condition-Abdeckung gegen {opp}. ✅ Immunisiert: {covered} — ❌ Nicht abgedeckt: {uncovered}. Condition-Removal-Support würde helfen.',
    warn_low_cond:     'Teilweise Conditions gegen {opp}: ✅ {covered} abgedeckt — ❌ {uncovered} nicht immunisiert.',

    // Power Budget
    power_budget_heading:      'Power-Budget',
    power_budget_roster_heading: 'Power-Budget Roster',
    pb_col_char:               'Char',
    pb_col_income:             'Einnahmen/Rd ⓘ',
    pb_col_cost:               'Verbrauch ⓘ',
    pb_income_tooltip:         'Garantiertes Power-Einkommen pro Runde: 1 (Basis-Power) + Power-Phase-Innate + Infinity-Gem-Bonus + 40% der kostenlosen Angriffswürfel. Nicht enthalten: Power durch gegnerische Angriffe oder variable Effekte.',
    pb_cost_tooltip:           'Gesamtverbrauch = Angriffe + Powers. Ein Charakter gilt als \'hungrig\', wenn sein Gesamtverbrauch mehr als das Doppelte seiner Einnahmen pro Runde beträgt.',
    pb_footnote:               '🔴 <b>hungrig</b> = Verbrauch > Einnahmen × 2 · <b>Einnahmen/Rd</b> = 1 (Basis) + Power-Phase + Gem + Angriffe×0,4 · <b>Gesamt</b> = Σ Angriffs- + Superpower-Kosten',
    pb_hungry_label:           '⚡ hungrig',
    pb_hungry_tooltip:         'Power-hungrig: {cost}⚡ Gesamtverbrauch bei {income}⚡/Runde Garantieeinkommen',
    pb_not_in_db:              'nicht in DB',
    pb_badge_good:             '✅ Gut',
    pb_badge_tight:            '⚠️ Knapp',
    pb_badge_critical:         '❌ Kritisch',
    pb_msg_good:    'Power-Economy solide — Ø {income}⚡/Rd Einnahmen bei Ø {cost}⚡ Kosten pro Char ({ratio}×).',
    pb_msg_tight:   'Power angespannt — Ø {cost}⚡ Kosten bei Ø {income}⚡/Rd pro Char ({ratio}×). Hungrig: {chars}',
    pb_msg_critical:'Power-Budget kritisch — Ø {cost}⚡ Kosten bei Ø {income}⚡/Rd pro Char ({ratio}×). Hungrig: {chars}',
    pb_hungry_suffix: '. Hungrig: {chars}',
    pb_roster_footnote: '🔴 <b>hungrig</b> = Verbrauch > Einnahmen × 2 · <b>Einnahmen</b> = 1 + Power-Phase + Gem + 1,5 Angriffe×0,4 · <b>Verbrauch</b> = günstigster bezahlter Angriff + günstigste Active + günstigste Reactive Power',

    // Tactics recommendation
    tactics_reco_heading:      '🃏 Empfohlene Taktikkarten',
    tactics_reco_empty:        'Keine Taktikkarten im Roster.',
    tactic_why_scoring:        '🎯 Scoring-Karte',
    tactic_why_attrition:      '💀 Attrition-Karte',
    tactic_why_universal:      '⚖️ Universell einsetzbar',

    // Round plan
    round_plan_heading:        '🗓 Rundenplan',
    round1_label:              'Runde 1',
    round2_label:              'Runde 2',
    round35_label:             'Runde 3–5',
    round1_scoring_icon:       '📍',
    round2_scoring_icon:       '🎯',
    round35_scoring_icon:      '🏆',
    round1_attrition_icon:     '⚔️',
    round2_attrition_icon:     '💀',
    round35_attrition_icon:    '🔥',

    // Round plan step strings (scoring)
    rp_s1_leader:     '{leader} Leadership sofort aktivieren — Power und Synergien aufbauen.',
    rp_s1_scorer_fast:'Positionierung: Scorer auf direktem Weg zu den Objectives.',
    rp_s1_scorers:    '{scorers} → Objectives, nicht kämpfen.',
    rp_s1_scorers_fallback: 'Schnellste Chars direkt auf die Objectives.',
    rp_s1_frontline:  '{front} positioniert sich zwischen Gegner und deinen Scorern.',
    rp_s1_frontline_fallback: 'Objektives über alles priorisieren.',
    rp_s2_hold:       'Objectives halten — nur kämpfen wenn der Gegner sie direkt bedroht.',
    rp_s2_frontline:  '{front} binden {target}.',
    rp_s2_frontline_fallback: 'Kämpfer binden {target}.',
    rp_s2_support:    '{support} heilt und unterstützt Scorer.',
    rp_s2_support_fallback: 'Aktivierungsreihenfolge: Scorer immer zuletzt aktivieren.',
    rp_s35_vp:        'VP-Vorsprung verteidigen — kein unnötiges Risiko eingehen.',
    rp_s35_order:     'Aktivierungsreihenfolge: Scorer zuletzt → maximale Objective-Kontrolle.',
    rp_s35_downed:    'Downed Chars ersetzen wenn möglich um Aktivierungsvorteil zu halten.',

    // Round plan step strings (attrition)
    rp_a1_leader:     '{leader} Leadership sofort nutzen — Burst-Schaden maximieren.',
    rp_a1_leader_fallback: 'Aggressiv vorpositionieren.',
    rp_a1_frontline:  '{front} → direkt auf {target}. NIE Schaden verteilen.',
    rp_a1_frontline_fallback: 'Alle Chars fokussieren {target}.',
    rp_a1_goal:       'Ziel: Ein Char bis Runde 2 eliminieren um die gegnerische Aktivierungszahl zu brechen.',
    rp_a2_target:     '{target} eliminieren falls nicht erledigt — das ist immer noch Priorität.',
    rp_a2_scorers:    '{scorers} sichern opportunistisch Objectives.',
    rp_a2_scorers_fallback: 'Nächstes Ziel priorisieren.',
    rp_a2_support:    '{support} hält Angreifer am Leben.',
    rp_a2_support_fallback: 'Momentum halten — nie passiv werden.',
    rp_a35_decimate:  'Gegner dezimieren — ohne Leader bricht ihre Formation zusammen.',
    rp_a35_secondary: 'Objectives als Sekundärziel wenn Gegner zu schwach zum Kontern.',
    rp_a35_pressure:  'Nie Initiative aufgeben — Attrition gewinnt durch konstanten Druck.',
    round_default_target: 'gefährlichsten Gegner',

    // Splash character suggestions
    splash_heading: '🔀 Splashcharakter-Empfehlungen',

    // Generate tip strings (control approach)
    tip_ctrl_leader:      '{leader} gibt Leadership-Buff.',
    tip_ctrl_controllers: '{names} kontrollieren Positionen durch Throw/Push/Advance.',
    tip_ctrl_conds:       '{names} debuffed Gegner mit Conditions.',
    tip_ctrl_heal:        '{heal} hält das Team am Leben.',
    tip_ctrl_generic:     'Zone kontrollieren, nicht verbissen kämpfen – Gegner aus Objectives werfen, Conditions verteilen.',

    // Generate tip strings (scoring approach)
    tip_scor_leader:      '{leader} gibt Leadership-Buff.',
    tip_scor_scorers:     '{scorers} übernehmen die Objectives.',
    tip_scor_support:     '{support} hält die Linie und unterstützt.',
    tip_scor_fighters:    '{fighters} hält Bedrohungen in Schach.',
    tip_scor_generic:     'Objectives priorisieren – Scoring race statt Kampf.',

    // Generate tip strings (attrition approach)
    tip_attr_fighters:    '{fighters} als Primärangreifer.',
    tip_attr_leader:      '{leader} Leadership nutzen.',
    tip_attr_support:     '{support} unterstützt.',
    tip_attr_generic:     'Konzentriert angreifen – erst einen Char vollständig eliminieren, dann den nächsten.',

    // Opponent tip strings
    opp_high_threat:      'Hochbedrohliche Gegner: {chars} (Threat {threats})',
    opp_priority_order:   'Reihenfolge: {order} – teuerste Chars zuerst eliminieren.',
    opp_activation_pressure: 'Gegner hat viele günstige Chars ({chars}) – hoher Aktivierungsdruck, früh Objectives sichern.',
    opp_small_team:       'Gegnerteam ist klein und teuer (⌀ {avg} Threat) – wenig Aktivierungen, Scoring race bevorzugen.',
    opp_tip_bind_scoring: '{front} binden {target} – weg von deinen Scorern.',
    opp_tip_hold_objectives: '{scorers} halten die Objectives.',
    opp_tip_support_scoring: '{support} hält das Team am Leben.',
    opp_tip_leadership_early: '{leaders} Leadership früh einsetzen.',
    opp_tip_generic_scoring: 'Objectives priorisieren – Scoring race statt direktem Kampf.',
    opp_tip_focus_attrition: '{front} auf {target} – koordiniert, nie einzeln.',
    opp_tip_focus_all:       'Alle Chars auf {target} – nie Schaden aufteilen.',
    opp_tip_leadership_burst: '{leaders} Leadership für Burst nutzen.',
    opp_tip_support_attrition: '{support} hält Angreifer am Leben.',
    opp_tip_opportunistic:   '{scorers} sichern opportunistisch Objectives.',

    // Crisis reason strings
    crisis_reason_own:      '★ eigene Karte',
    crisis_reason_fast:     '{names} (L) gut für Objective-Race',
    crisis_reason_mission:  'Mission-Play: Objectives früh sichern',
    crisis_reason_conds_slow: '{n} Chars mit Conditions verlangsamen Gegner',
    crisis_reason_fighters: '{names} als Kampftruppe',
    crisis_reason_attrition:'Attrition-Krise: Feinde eliminieren',
    crisis_reason_control:  '{names} kontrollieren die Zone',
    crisis_reason_debuff:   '{n} Chars debuffed Gegner',
    crisis_reason_balanced: 'Ausgewogen – passt zu jedem Spielstil',
    crisis_reason_controllers: '{n} Controller im Roster',

    // ── Character Browser Tab ──────────────────────────────────────
    chars_intro:      'Alle Charaktere aus der Datenbank. Filter nach Movement, Threat und Schadenstyp. Klick auf eine Karte zeigt alle Stats, Angriffe und Superpowers an.',
    chars_filter_reset: '↺ Zurücksetzen',
    chars_filter_immune:  '🛡 Immun gegen',
    chars_filter_inflict: '⚡ Kann vergeben',
    chars_filter_power_hungry: '⚡ Power-hungrig',
    chars_empty:       'Keine Charaktere gefunden',

    // ── Character Detail Modal ─────────────────────────────────────
    char_modal_no_data:   'Keine Daten für diesen Charakter verfügbar',
    char_modal_attacks:   'Angriffe',
    char_modal_superpowers: 'Superpowers',
    char_modal_immune_tooltip:  'Immun: {name}',
    char_modal_inflict_tooltip: 'Vergeben: {name}',
    pow_type_active:   'Aktiv',
    pow_type_innate:   'Angeboren',
    pow_type_reactive: 'Reaktiv',

    // ── Tactic/Crisis Card Modal ───────────────────────────────────
    card_modal_no_text:        'Kein Kartentext verfügbar.',
    card_modal_superpower_incomplete: '⚠ Superpower-Text unvollständig – Volltext auf jarvis-protocol.com',
    card_modal_requires:       'Benötigt:',

    // ── Dice Calculator Tab ────────────────────────────────────────
    dice_atk_label:    '⚔️ Angriffswürfel',
    dice_def_label:    '🛡 Verteidigungswürfel',
    dice_avg_success:  'Ø {n} Erfolge',
    dice_reroll_no_skull: 'Reroll (kein ☠)',
    dice_result_avg_dmg:  'Ø Schaden',
    dice_result_no_dmg:   'Kein Schaden',
    dice_result_3plus:    '≥3 Schaden',
    dice_dist_heading:    'Schadenverteilung',
    dice_sim_note_exact:  'Exakte Berechnung (keine Effekte aktiv)',
    dice_sim_note_montecarlo: 'Monte-Carlo-Simulation ({n} Würfe)',

    // ── Compare Tab ────────────────────────────────────────────────
    compare_placeholder:  '— Roster wählen —',
    compare_select_hint:  'Wähle oben zwei Roster zum Vergleichen.',
    compare_no_roster_cell: 'Kein Roster',

    // Compare section headings
    cmp_section_teamtyp:    'Team-Typ',
    cmp_section_chars:      'Charaktere',
    cmp_section_threat:     'Threat-Verteilung',
    cmp_section_speed:      'Bewegung',
    cmp_section_power:      'Power-Economy',
    cmp_section_schaden:    'Schadensprofil',
    cmp_section_range:      'Range-Verteilung',
    cmp_section_conditions: 'Conditions',
    cmp_section_warzone:    'Warzone Control',
    cmp_section_defense:    'Defensiv-Profil',
    cmp_section_weaknesses: 'Schwächen',

    // Compare: char-type labels
    type_fighter:     'Kämpfer',
    type_scorer:      'Scorer',
    type_support:     'Support',
    type_allrounder:  'Allrounder',
    type_none_set:    'Keine Typen gesetzt',

    // Compare: no-data fallbacks
    cmp_no_data:          'Keine Daten',
    cmp_no_known_chars:   'Keine bekannten Chars',
    cmp_not_in_db:        '{n} Char(s) nicht in DB',   // {n} = count
    cmp_all_green:        'Alle im grünen Bereich',
    cmp_hungry_note:      '{n} hungrig: {names}',
    cmp_total_stamina:    'Gesamt-Stamina:',
    cmp_conditions_inflict: 'Verteilt:',
    cmp_conditions_immune:  'Immun:',
    cmp_none:             'Keine',

    // Compare: damage labels
    dmg_physical: 'Physisch',
    dmg_energy:   'Energie',
    dmg_mystic:   'Mystisch',

    // Compare: range labels
    rng_short:  'Kurz (1-2)',
    rng_medium: 'Mittel (3-4)',
    rng_long:   'Lang (5+)',
    rng_beam:   'Beam',
    rng_area:   'Area',

    // Compare: warzone control labels
    wz_throw:    'Werfen',
    wz_push:     'Schubsen',
    wz_advance:  'Advance',
    wz_place:    'Platzieren',
    wz_heal:     'Healing',

    // Compare: defense labels
    def_stamina: 'Ø Stamina',
    def_phys:    'Ø Phys.Def',
    def_energy:  'Ø Energ.Def',
    def_mystic:  'Ø Myst.Def',

    // Compare: weakness strings
    weak_no_healing:    'Kein Healing',
    weak_no_long_range: 'Kein Long-Range (5+)',
    weak_no_scorer:     'Kein Scorer',
    weak_no_mystic:     'Keine Mystischen Angriffe',
    weak_no_energy:     'Keine Energie-Angriffe',
    weak_no_immunity:   '{n}/{total} Chars ohne Immunität',
    weak_no_scoring:    'Kein Scoring möglich: {chars}',
    weak_none_found:    'Keine kritischen Lücken gefunden',

    // ── Import Modal ───────────────────────────────────────────────
    import_title:           '📋 Roster importieren',
    import_desc:            'Plaintext-Export von jarvis-protocol.com → Team öffnen → „Export" → „Plain Text" kopieren und einfügen.\nChartyp & Leader-Status werden automatisch aus der Datenbank befüllt.',
    import_name_label:      'Roster-Name',
    import_new_label:       'Als neues Roster speichern',
    import_name_placeholder: 'z.B. Defenders',
    import_btn_confirm:     '✅ Importieren & Speichern',
    import_btn_cancel:      'Abbrechen',
    import_error_no_chars:  '⚠️ Keine Charaktere oder Taktikkarten erkannt. Bitte Format prüfen.',
    import_error_save:      '⚠️ Fehler beim Speichern: {msg}',
    import_toast:           '✅ {chars} Chars · {tactics} Taktiken{crisis} importiert',

    // Opponent import modal
    opp_import_title:       '🦹 Gegner importieren',
    opp_import_desc:        'Plaintext-Export des gegnerischen Rosters von jarvis-protocol.com einfügen.',
    opp_import_btn_confirm: '✅ Importieren',
    opp_import_btn_cancel:  'Abbrechen',
    opp_import_error:       '⚠️ Keine Charaktere erkannt. Bitte Format prüfen.',
    opp_import_success:     '✅ {n} Chars importiert · Affiliation: {aff}',
    opp_import_success_no_aff: '✅ {n} Chars importiert',

    // ── Roster view capabilities ────────────────────────────────────
    cap_throw: 'Throw',
    cap_push:  'Push',
    cap_conditions: 'Conditions',
    cap_heal:  'Heal',
    cap_speed_l: 'Speed L',

    // ── Footer ─────────────────────────────────────────────────────
    footer: 'W.A.T.C.H. · Krisen-Karten: AMG Organized Play 2024/25 · All stones collected ✓',

    // ── Opponent hint/strength strings (per affiliation) ───────────
    // Asgard
    opp_asgard_s1:  'Extrem hohe Stamina (7–9)',
    opp_asgard_s2:  'Odin-Leadership: Rerolls auf Angriff+Verteidigung',
    opp_asgard_s3:  'Göttlicher Nahkampfschaden',
    opp_asgard_hint:'Hela ist KEIN Leader – ignorieren bis der Hauptleader fällt. Odin-Leadership-Rerolls durch Hex-Effekte sperren. Nie einzeln angreifen – konzentrierte Feuerkraft auf den aktiven Leader.',

    // Avengers
    opp_avengers_s1:  'Cap-Leadership: Extra Power für alle',
    opp_avengers_s2:  'Iron Man als Power-Anker',
    opp_avengers_s3:  'Sehr versatile Allrounder',
    opp_avengers_hint:'Iron Man sofort eliminieren – teuerster und gefährlichster Char. Cap\'s Leadership mit Hex-Effekten sperren. Dann Cap ohne Support isoliert angreifen.',

    // X-Men
    opp_xmen_s1:  'Cyclops-Leadership: Rerolls auf Angriff',
    opp_xmen_s2:  'Starke Fernkampf-Charaktere',
    opp_xmen_s3:  'Sehr viele verschiedene Builds',
    opp_xmen_hint:'Cyclops als Primärziel – ohne Leadership bricht X-Men ein. Hex auf Cyclops sperrt Leadership-Rerolls. Objectives priorisieren statt kämpfen – X-Men wollen Attrition spielen.',

    // Web Warriors
    opp_webwarriors_s1:  'Extrem mobile Charaktere',
    opp_webwarriors_s2:  'Web Tokens erschweren Bewegung',
    opp_webwarriors_s3:  'Sehr starkes Scoring',
    opp_webwarriors_hint:'Web Warriors wollen nicht kämpfen – Konfrontation erzwingen. Hex auf Spider-Man sperrt Rerolls. Objectives als Köder nutzen – Scoring race statt Kampf.',

    // Cabal
    opp_cabal_s1:  'Red Skull-Leadership: Power bei Schadensnahme',
    opp_cabal_s2:  'MODOK: extrem hoher Fernkampfschaden',
    opp_cabal_s3:  'Sehr aggressive Spielweise',
    opp_cabal_hint:'MODOK zuerst eliminieren – hoher Schaden aber mittlere Stamina. Red Skull NICHT angreifen solange er viel Power hat. ACHTUNG: MODOK ist KEIN Leader in Cabal! Nie reaktiv spielen – immer aktiv Druck ausüben.',

    // Criminal Syndicate
    opp_syndicate_s1:  'Kingpin: extrem zäh (hohe Stamina)',
    opp_syndicate_s2:  'Exzellente Power Economy',
    opp_syndicate_s3:  'Starke Kontrolle und Debuffs',
    opp_syndicate_hint:'Kingpin möglichst spät angreifen wenn er wenig Power hat. Objectives priorisieren – Syndicate ist stark im Kampf, nicht im Scoring. Nie einzeln auf Kingpin – immer Burst-Combo.',

    // Wakanda
    opp_wakanda_s1:  'Black Panther: extrem mobil',
    opp_wakanda_s2:  'Vibranium-Rüstung: Schadensreduktion',
    opp_wakanda_s3:  'Exzellentes Scoring',
    opp_wakanda_hint:'Vibranium durch konzentrierte Feuerkraft überwinden – nie einzeln auf Black Panther schießen. Hex-Effekte sperren Rerolls trotz Rüstung. ACHTUNG: Shuri ist KEIN Leader!',

    // Brotherhood
    opp_brotherhood_s1:  'Magneto: wirft Metall-Terrain für massiven Schaden',
    opp_brotherhood_s2:  'Starke Fernkampf-Kontrolle',
    opp_brotherhood_s3:  'Magnetische Manipulationen',
    opp_brotherhood_hint:'Wenig Metall-Terrain auf der Karte platzieren – Magneto wirft alles Metallische. Fliegende Chars bevorzugen – kein Terrain-Wurf-Schaden. Mystique als zweiten Leader im Auge behalten.',

    // Defenders
    opp_defenders_s1:  'Portal-Bewegung: Teleportation über die Karte',
    opp_defenders_s2:  'Mystische Schutzeffekte',
    opp_defenders_s3:  'Heilung',
    opp_defenders_hint:'Doctor Strange als Primärziel – ohne Portale verliert Defenders den Mobilitätsvorteil. Burst-Schaden bevor er heilen kann. Scoring aus verschiedenen Winkeln damit Strange nicht alles mit Portalen decken kann.',

    // Convocation
    opp_convocation_s1:  'Mystische Würfelmanipulation',
    opp_convocation_s2:  'Power-reich durch dunkle Magie',
    opp_convocation_s3:  'Sehr unorthodoxe Spielweise',
    opp_convocation_hint:'Frühzeitig Druck aufbauen bevor Convocation Power akkumuliert. Doctor Strange als Schlüsselstück so früh wie möglich eliminieren. ACHTUNG: Ghost Rider ist KEIN Leader in Convocation!',

    // Inhumans
    opp_inhumans_s1:  'Black Bolt: massiver Fernkampfschaden (Stimme)',
    opp_inhumans_s2:  'Medusa: sehr mobile Kontrolle',
    opp_inhumans_s3:  'Wenige aber starke Modelle',
    opp_inhumans_hint:'Black Bolt auf Distanz ist sehr gefährlich – sofort Nahkampf erzwingen. Im Nahkampf ist er schwächer. Hex-Effekte sperren seine mächtigen Stimmen-Angriffe.',

    // Spider-Foes
    opp_spiderfoes_s1:  'Doc Ock: Tentakel-Kontrolle',
    opp_spiderfoes_s2:  'Green Goblin: explosive Pumpkin Bombs',
    opp_spiderfoes_s3:  'Wollen Nahkampf erzwingen',
    opp_spiderfoes_hint:'Green Goblin als Primärziel – seine Pumpkin Bombs sind sehr gefährlich. Abstand halten – Spider-Foes wollen Nahkampf. Hex-Effekte kontern Doc Ock\'s Tentakel-Kontrolle.',

    // S.H.I.E.L.D.
    opp_shield_s1:  'Viele günstige Agenten (Aktivierungs-Überlegenheit)',
    opp_shield_s2:  'Nick Fury\'s Command: sehr vielseitig',
    opp_shield_s3:  'Guns, Gadgets, Taktik',
    opp_shield_hint:'Nick Fury als Primärziel – ohne ihn verliert S.H.I.E.L.D. ihre Koordination. Nicht auf Agenten-Spam einlassen – Fury fokussieren. Hohe Einzelcharakter-Qualität schlägt Agenten-Masse.',

    // Midnight Sons
    opp_midnight_s1:  'Starke Heilmechaniken',
    opp_midnight_s2:  'Ghost Rider: massiver Nahkampfschaden',
    opp_midnight_s3:  'Widerstandsfähigkeit',
    opp_midnight_hint:'Burst-Schaden bevor Heilung greift – nie langsam tickenden Schaden machen. ACHTUNG: Ghost Rider ist KEIN Leader – Blade / Elsa Bloodstone sind die offiziellen Leader! Scoring aus sicherer Distanz – Midnight Sons wollen Nahkampf.',

    // A-Force
    opp_aforce_s1:  'She-Hulk: extrem zäh und stark',
    opp_aforce_s2:  'Starke weibliche Charaktere',
    opp_aforce_s3:  'Teamwork-Synergien',
    opp_aforce_hint:'She-Hulk hat extrem hohe Stamina – Burst-Schaden-Combo einsetzen, nie alleine angreifen. Hex auf She-Hulk sperrt Leadership-Rerolls. Objectives aus sicherer Distanz sammeln.',

    // Black Order
    opp_blackorder_s1:  'Thanos: mächtigstes Einzelmodell im Spiel',
    opp_blackorder_s2:  'Infinity Gauntlet-Mechanik',
    opp_blackorder_s3:  'Massive Stamina',
    opp_blackorder_hint:'Thanos NIE alleine angreifen – er ist zu stark. Thanos kann Schaden negieren – warten bis der richtige Moment, dann koordiniert angreifen. Objectives priorisieren um nicht auf seinem Boden zu spielen.',

    // Dark Dimension
    opp_darkdimension_s1:  'Dormammu: massiver mystischer Schaden',
    opp_darkdimension_s2:  'Portal-Mechaniken',
    opp_darkdimension_s3:  'Sehr hohe Stamina',
    opp_darkdimension_hint:'Nie Dormammu alleine angreifen – er ist zu gefährlich. Mystische Angriffe bevorzugen gegen seinen massiven Schutz. Scoring aus sicherer Distanz um nicht in seinen Nahkampfbereich zu geraten.',

    // Hydra
    opp_hydra_s1:  'Kontrollspiel und Debuffs',
    opp_hydra_s2:  'Baron Zemo: überraschend starker Angreifer',
    opp_hydra_s3:  'Power-Akkumulation',
    opp_hydra_hint:'Zemo als Primärziel – flexibelster Leader und gefährlichster Einzelkämpfer. Frühzeitig Druck aufbauen bevor Red Skull MoH Power akkumuliert. Schnell und aggressiv vorgehen.',

    // Sentinels
    opp_sentinels_s1:  'Massive Stamina',
    opp_sentinels_s2:  'Mutant-Tracking-Mechaniken',
    opp_sentinels_s3:  'Hoher Schaden durch Kraft',
    opp_sentinels_hint:'Sentinels sind langsam – mobile Chars für Objectives nutzen. Extrem hohe Stamina – alle Angriffe auf einen Sentinel konzentrieren, nie Schaden verteilen. Fliegende Chars umgehen Ground-Slam-Angriffe.',

    // Servants of the Apocalypse
    opp_servants_s1:  'Apocalypse: Survival of the Fittest-Mechanik',
    opp_servants_s2:  'Vier Reiter-Synergien',
    opp_servants_s3:  'Massiver Schaden',
    opp_servants_hint:'Erst Vier Reiter eliminieren dann Apocalypse – ohne Reiter verliert er seine Synergien. Burst-Schaden auf die Reiter bevor sie vollständig aktiviert werden.',

    // Winter Guard
    opp_winterguard_s1:  'Crimson Dynamo: Power-Rüstung',
    opp_winterguard_s2:  'Starke Teamsynergien',
    opp_winterguard_s3:  'Kontrolle und Debuffs',
    opp_winterguard_hint:'Objectives priorisieren – Winter Guard ist stark im Kampf, nicht im Scoring. Crimson Dynamo\'s Rüstung durch konzentrierte Feuerkraft durchschlagen. Fernkampf aus sicherer Distanz bevorzugen.',

    // X-Force
    opp_xforce_s1:  'Cable: Zeitreise-Leadership, taktische Flexibilität',
    opp_xforce_s2:  'Starke Schusswaffen',
    opp_xforce_s3:  'Sehr aggressive Spielweise',
    opp_xforce_hint:'Cable sofort eliminieren – seine Leadership darf nicht lange wirken. Psionische Angriffe kontern seine Telekinesie. Objectives aus sicherer Distanz sammeln.',

    // Weapon X
    opp_weaponx_s1:  'Wolverine: Regeneration + Adamantium-Klauen ignorieren Rüstung',
    opp_weaponx_s2:  'Omega Red: Coils verlangsamen und schwächen',
    opp_weaponx_s3:  'Reines Attrition-Team – will immer kämpfen',
    opp_weaponx_hint:'Omega Red zuerst eliminieren – gefährlichstes Modell. Weapon X wollen kämpfen – Objectives aus sicherer Distanz. Wolverine beschäftigt halten statt eliminieren lassen.',

    // Thralls of Dracula
    opp_thralls_s1:  'Dracula: Fliegen + Lebensraub',
    opp_thralls_s2:  'Blut-Mechaniken stärken das Team',
    opp_thralls_s3:  'Lilith: mystische Unterstützung',
    opp_thralls_hint:'Dracula mit Burst-Schaden eliminieren bevor er Lebensraub aktiviert. Nie einzeln gegen ihn – immer koordiniert angreifen. Distanz halten – er will Nahkampf für seinen Lebensraub.',

    // Legion of the Lost
    opp_legion_s1:  'Mephisto: Seelen-Manipulation, extrem schwer zu eliminieren',
    opp_legion_s2:  'Höllische Kontrolle und Debuffs',
    opp_legion_s3:  'Hohe Power-Akkumulation',
    opp_legion_hint:'Mephisto hat sehr hohe Widerstandsfähigkeit – Burst-Schaden und nie einzeln angreifen. Schnell Punkte sammeln bevor seine Seelen-Mechanik greift. Koordinierte Fokusangriffe auf ein Modell nach dem anderen.',

    // Guardians of the Galaxy
    opp_guardians_s1:  'Star-Lord-Leadership: Power-Akkumulation bei Superpowers',
    opp_guardians_s2:  'Sehr diverse Toolkit mit Fliegern (Nova, Quasar)',
    opp_guardians_s3:  'Hohe Power-Einnahme ermöglicht Superpowers jede Runde',
    opp_guardians_hint:'Star-Lord als Primärziel – ohne Leadership werden Superpowers viel teurer. Hex auf Star-Lord sperrt Leadership-Rerolls. GotG ist sehr mobil – eigene mobile Chars für Objectives bevorzugen.',

    // Hellfire Club
    opp_hellfire_s1:  'Emma Frost Diamond Form: Schadensimmunität gegen physische Angriffe',
    opp_hellfire_s2:  'Sebastian Shaw: absorbiert kinetische Energie und wird stärker durch Schaden',
    opp_hellfire_s3:  'Starke psychische Angriffe und Kontrolle',
    opp_hellfire_hint:'Sebastian Shaw NIE direkt angreifen solange er wenig Schaden hat – er absorbiert kinetische Energie und wird stärker. Emma Frost aus Diamond Form herauslocken mit mystischen/Energie-Angriffen. Hex auf Emma sperrt ihre Psionic Blasts.',

    // Mighty Avengers
    opp_mightyavengers_s1:  'Luke Cage: Unbreakable Skin – extrem hohe effektive Stamina',
    opp_mightyavengers_s2:  'Sehr widerstandsfähiges Team mit Heilmechaniken',
    opp_mightyavengers_s3:  'Luke Cage Leadership: Schadensreduktion für das gesamte Team',
    opp_mightyavengers_hint:'Luke Cage hat extrem hohe Stamina – konzentrierte Feuerkraft auf einen Char bis er fällt, nie Schaden verteilen. Hex auf Luke Cage sperrt Leadership-Rerolls. Objectives priorisieren – nicht auf Attrition eingehen.',

    // New Mutants
    opp_newmutants_s1:  'Magik: Limbo-Teleportation – Chars erscheinen überraschend an jedem Objective',
    opp_newmutants_s2:  'Extrem unvorhersehbare Positionierung',
    opp_newmutants_s3:  'Cannonball: unverwundbar während Flug, hoher Schaden',
    opp_newmutants_hint:'Magik sofort eliminieren – ihre Teleportation macht das gesamte Team unberechenbar. Cannonball vor dem Start abfangen – im Flug ist er unverwundbar. Objectives doppelt besetzen damit Teleporter sie nicht wegschnappen.',

    // ── Preset notes (used in charData) ───────────────────────────
    preset_note_no_leader: 'Kein Leader!',
    preset_note_no_cabal_leader: 'Kein Cabal-Leader!',
    preset_note_also_midnight: 'auch Midnight Sons',
    preset_note_also_dd: 'auch Dark Dimension',
    preset_note_also_conv: 'auch Convocation',
    preset_note_also_asgard: 'auch Asgard',
    preset_note_also_brotherhood: 'auch Brotherhood',
    preset_note_also_xforce: 'auch X-Force',
    preset_note_also_xmen: 'auch X-Men',
    preset_note_daughter_mephisto: 'Tochter von Mephisto',
    preset_note_en_sabah_nur: 'En Sabah Nur',
    preset_note_horseman: 'Horseman of Death',
  },

  // ════════════════════════════════════════════════════════════════
  en: {

    // ── Hero banner ────────────────────────────────────────────────
    hero_tagline: 'Infinity Tactics Nerd',

    // ── Tab navigation ─────────────────────────────────────────────
    nav_roster:    'Roster',
    nav_tactics:   'Tactics',
    nav_dice:      'Dice Calculator',
    nav_compare:   'Compare',

    // ── Roster panel ───────────────────────────────────────────────
    roster_default_name:    'My Roster',
    roster_btn_save:        '💾 Save',
    roster_btn_import:      '📋 Import',
    roster_section_chars:   'Characters',
    roster_section_tactics: 'Tactic Cards',
    roster_section_crises:  'Crises',
    roster_section_capabilities: 'Capabilities',
    roster_section_strength:     'Roster Strength',

    // ── Roster Library ─────────────────────────────────────────────
    library_heading:        'Roster Library',
    library_empty:          'No saved rosters yet.',
    library_btn_load:       '📂 Load',
    library_btn_delete:     '🗑',
    library_toast_saved:    '✅ Roster saved',
    library_toast_updated:  '✅ Roster updated',
    library_toast_loaded:   '📂 "{name}" loaded',
    library_confirm_load:   'Replace current roster with "{name}"?',
    library_confirm_delete: 'Delete "{name}"?',
    library_confirm_clear:  'Really delete roster?',
    library_full:           'Library full (max. {max} rosters). Please delete a slot first.',
    library_no_roster:      'No roster to save.',

    // ── Crisis Suggestions panel ───────────────────────────────────
    crisis_suggestions_title:    '🌍 Crisis Suggestions',
    crisis_suggestions_subtitle: 'Top 5 Secure & Extract for your Roster',
    crisis_suggestions_desc:     'Calculates which Secure and Extract cards best fit your roster – based on threat total, activation count, and your characters\' playstyle. Top 5 Secure & Extract for your roster – all cards, own cards (★) slightly preferred.',
    crisis_suggestions_empty:    'Click "Generate Suggestions" to calculate the best crises for your roster.',
    crisis_suggestions_btn:      '🎲 Generate Suggestions',
    crisis_suggestions_roster_empty: '⚠️ Roster is empty – please add characters first.',
    crisis_section_secure:  'Secure Crises',
    crisis_section_extract: 'Extract Crises',
    crisis_btn_select:      'Select',

    // ── Taktik Tab (Team Builder) ──────────────────────────────────
    team_intro:             'Choose crisis and opponent – the roster from the Roster tab is used.',
    team_cta:               '✨ W.A.T.C.H. — Find Best Team',
    team_cta_footnote:      '★ = own card · The team only changes with the crisis cards',

    // Secure / Extract crisis selects
    secure_label:           'Secure Crisis',
    secure_desc:            'Hold tokens on the card. Determines the threat level.',
    secure_placeholder:     '— Choose Secure card —',
    extract_label:          'Extract Crisis',
    extract_desc:           'Pick up objects and hold them in your zone.',
    extract_placeholder:    '— Choose Extract card —',

    // Opponent section
    opponent_label:         '🦹 Enemy Affiliation',
    opponent_optional:      '· optional',
    opponent_desc:          'Select an affiliation to receive an opponent strategy. Add leader and characters for more precise tips.',
    opponent_unknown:       '— None / Unknown —',
    opponent_btn_import:    '📋 Import Opponent Roster',
    opponent_leader_label:  'Leader',
    opponent_leader_unknown:'— Unknown —',
    opponent_chars_label:   'Team Characters',
    opponent_btn_clear:     '✕ Clear',
    opponent_search_placeholder: 'Search character…',
    opponent_search_hint:   'Enter at least 2 characters…',
    opponent_search_empty:  'No character found.',

    // Threat
    threat_label:           '⚡ Threat Level',
    threat_desc:            'Auto-filled from the Secure crisis. Override manually if needed.',
    threat_auto:            'Auto (from Secure card)',
    threat_heading_result:  'Threat',

    // Approach / Spielstil
    approach_label:         '🎭 Playstyle',
    approach_desc:          '<b>Auto</b> detects style from the crises. <b>Mission Play</b> = prioritise objectives. <b>Attrition</b> = eliminate opponents. <b>Control</b> = zone control via Throw/Push/Conditions.',
    approach_auto:          '⚙️ Auto',
    approach_scoring:       '🎯 Mission Play',
    approach_attrition:     '💀 Attrition',
    approach_control:       '🔗 Control',

    // optgroup labels in crisis selects
    threat_optgroup:        '── Threat {t} ──',

    // Builder result: type labels & descriptions
    type_scoring:           '🎯 MISSION PLAY',
    type_attrition:         '💀 ATTRITION',
    type_control:           '🔗 CONTROL',
    type_desc_scoring:      'Focus on points · ~{vpRate} VP/round possible ({vpPressure}) → {sizeHint}',
    type_desc_scoring_many: 'prefer many small chars',
    type_desc_scoring_bal:  'balanced team size',
    type_desc_control:      'Zone control – use Throw, Push, Conditions and Advance to displace opponents from objectives',
    type_desc_attrition:    'Focus on eliminating enemy characters',
    vp_high:                'high',
    vp_medium:              'medium',
    vp_low:                 'low',

    // Builder result: team summary
    result_chars_count:     '{n} Characters · {total} Points',
    result_tactics_heading: 'Tactic Cards',
    result_no_team:         '⚠️ No matching team found – check your roster (min. 2 characters required).',
    result_threat_mismatch: '⚠️ Different threat values (Secure T{sec} / Extract T{ext}) – team based on Secure <b>T{primary}</b>.',

    // Approach auto-reason strings
    reason_secure_scoring:   '{name} is Mission-Play-oriented (+2)',
    reason_secure_attrition: '{name} is Attrition-oriented (−2)',
    reason_secure_balanced:  '{name} is balanced (0)',
    reason_extract_scoring:  '{name} supports Mission Play (+1)',
    reason_extract_attrition:'{name} supports Attrition (−1)',
    reason_extract_balanced: '{name} is balanced (0)',
    reason_opp_attrition:    'Opponent {opp} plays heavy Attrition → prefer Scoring race (+2)',
    reason_opp_scoring:      'Opponent {opp} is Scoring-oriented → match their tempo (+1)',
    reason_opp_control:      'Opponent {opp} plays Control → prefer Attrition pressure (−1)',
    reason_manual:           'Team type chosen manually: <b>{approach}</b>',
    approach_name_scoring:   'Mission Play',
    approach_name_attrition: 'Attrition',
    approach_name_control:   'Control',

    // Opponent result block
    opp_section_enemy_team:      'Enemy Team',
    opp_section_strengths:       'Enemy Strengths',
    opp_primary_target:          '🎯 Primary Target:',
    opp_strategy_heading:        'Game Strategy with this Team',
    opp_label:                   'Opponent',

    // Matchup warnings
    matchup_warnings_heading:    '⚠️ Matchup Warnings',
    sev_high:                    '🔴 Critical',
    sev_medium:                  '🟡 Warning',
    sev_low:                     '🔵 Note',

    // Matchup warning texts
    warn_no_mystic:    'Only physical attackers — Magneto has strong physical defence. Mystic or energy attacks are significantly more effective against him.',
    warn_no_push:      'No Throw/Push in roster — important against Control teams (Brotherhood, Syndicate, Convocation) to displace opponents from objectives.',
    warn_no_heal:      'No Healer / Sustain — against an Attrition team without healing you will lose the war of attrition. Include a support char or self-healer.',
    warn_midnight_heal:'Midnight Sons heal themselves strongly — without your own healing, burst damage on a single target is essential.',
    warn_no_hex:       'No Hex in roster — Hex locks Leadership rerolls for the opponent. Very effective against Asgard / X-Men / Avengers.',
    warn_no_poison_bleed: 'No Poison/Bleed immunity — Midnight Sons love to hand out these conditions.',
    warn_scoring_chars:'Only {n} scoring-capable {chars} — for Mission Play you need at least 2 chars who can hold objectives.',
    warn_scoring_char_sg: 'char',
    warn_scoring_char_pl: 'chars',
    warn_activations:  'Opponent ({opp}) plays many cheap chars — you only have {n} activations. Opponent can contest objectives more easily.',
    warn_no_range:     'No ranged attacker — Inhumans (Black Bolt) is dangerous at range. Forcing melee without a ranged option is risky.',
    warn_low_dice:     'Weak attack dice (avg {avg}) against a team with massive Stamina ({opp}). Burst combo from multiple chars required — never attack alone.',
    warn_no_cond:      'No Condition immunity or removal against {opp} (inflicts: {conds}). Characters will be permanently weakened — include a Cleanse support or chars with relevant immunities.',
    warn_part_cond:    'Only partial Condition coverage against {opp}. ✅ Immune: {covered} — ❌ Not covered: {uncovered}. Condition-removal support would help.',
    warn_low_cond:     'Partial Conditions against {opp}: ✅ {covered} covered — ❌ {uncovered} not immunised.',

    // Power Budget
    power_budget_heading:      'Power Budget',
    power_budget_roster_heading: 'Roster Power Budget',
    pb_col_char:               'Char',
    pb_col_income:             'Income/Rd ⓘ',
    pb_col_cost:               'Cost ⓘ',
    pb_income_tooltip:         'Guaranteed Power income per round: 1 (base Power) + Power Phase innate + Infinity Gem bonus + 40% of free attack dice. Excludes: Power from enemy attacks or variable effects.',
    pb_cost_tooltip:           'Total cost = attacks + powers. A character is "hungry" when their total cost exceeds twice their income per round.',
    pb_footnote:               '🔴 <b>hungry</b> = Cost > Income × 2 · <b>Income/Rd</b> = 1 (base) + Power Phase + Gem + attacks×0.4 · <b>Total</b> = Σ attack + superpower costs',
    pb_hungry_label:           '⚡ hungry',
    pb_hungry_tooltip:         'Power-hungry: {cost}⚡ total cost at {income}⚡/round guaranteed income',
    pb_not_in_db:              'not in DB',
    pb_badge_good:             '✅ Good',
    pb_badge_tight:            '⚠️ Tight',
    pb_badge_critical:         '❌ Critical',
    pb_msg_good:     'Power economy solid — avg {income}⚡/rd income at avg {cost}⚡ cost per char ({ratio}×).',
    pb_msg_tight:    'Power tight — avg {cost}⚡ cost at avg {income}⚡/rd per char ({ratio}×). Hungry: {chars}',
    pb_msg_critical: 'Power budget critical — avg {cost}⚡ cost at avg {income}⚡/rd per char ({ratio}×). Hungry: {chars}',
    pb_hungry_suffix: '. Hungry: {chars}',
    pb_roster_footnote: '🔴 <b>hungry</b> = Cost > Income × 2 · <b>Income</b> = 1 + Power Phase + Gem + 1.5 attacks×0.4 · <b>Cost</b> = cheapest paid attack + cheapest Active + cheapest Reactive power',

    // Tactics recommendation
    tactics_reco_heading:      '🃏 Recommended Tactic Cards',
    tactics_reco_empty:        'No tactic cards in roster.',
    tactic_why_scoring:        '🎯 Scoring card',
    tactic_why_attrition:      '💀 Attrition card',
    tactic_why_universal:      '⚖️ Universally usable',

    // Round plan
    round_plan_heading:        '🗓 Round Plan',
    round1_label:              'Round 1',
    round2_label:              'Round 2',
    round35_label:             'Rounds 3–5',
    round1_scoring_icon:       '📍',
    round2_scoring_icon:       '🎯',
    round35_scoring_icon:      '🏆',
    round1_attrition_icon:     '⚔️',
    round2_attrition_icon:     '💀',
    round35_attrition_icon:    '🔥',

    // Round plan step strings (scoring)
    rp_s1_leader:     '{leader} activate Leadership immediately — build Power and synergies.',
    rp_s1_scorer_fast:'Positioning: move scorers directly toward objectives.',
    rp_s1_scorers:    '{scorers} → objectives, don\'t fight.',
    rp_s1_scorers_fallback: 'Move fastest chars straight to the objectives.',
    rp_s1_frontline:  '{front} positions between the enemy and your scorers.',
    rp_s1_frontline_fallback: 'Prioritise objectives above all.',
    rp_s2_hold:       'Hold objectives — only fight if the enemy directly threatens them.',
    rp_s2_frontline:  '{front} tie up {target}.',
    rp_s2_frontline_fallback: 'Fighters tie up {target}.',
    rp_s2_support:    '{support} heals and supports scorers.',
    rp_s2_support_fallback: 'Activation order: always activate scorers last.',
    rp_s35_vp:        'Defend VP lead — take no unnecessary risks.',
    rp_s35_order:     'Activation order: scorers last → maximum objective control.',
    rp_s35_downed:    'Replace downed chars when possible to maintain activation advantage.',

    // Round plan step strings (attrition)
    rp_a1_leader:     '{leader} use Leadership immediately — maximise burst damage.',
    rp_a1_leader_fallback: 'Aggressively forward-position.',
    rp_a1_frontline:  '{front} → directly at {target}. NEVER split damage.',
    rp_a1_frontline_fallback: 'All chars focus {target}.',
    rp_a1_goal:       'Goal: eliminate one char by round 2 to break the enemy\'s activation count.',
    rp_a2_target:     'Eliminate {target} if not done — still the priority.',
    rp_a2_scorers:    '{scorers} opportunistically secure objectives.',
    rp_a2_scorers_fallback: 'Prioritise next target.',
    rp_a2_support:    '{support} keeps attackers alive.',
    rp_a2_support_fallback: 'Maintain momentum — never go passive.',
    rp_a35_decimate:  'Decimate opponents — without their leader their formation collapses.',
    rp_a35_secondary: 'Objectives as secondary goal when opponents are too weak to counter.',
    rp_a35_pressure:  'Never give up the initiative — Attrition wins through constant pressure.',
    round_default_target: 'most dangerous opponent',

    // Splash character suggestions
    splash_heading: '🔀 Splash Character Suggestions',

    // Generate tip strings (control approach)
    tip_ctrl_leader:      '{leader} provides Leadership buff.',
    tip_ctrl_controllers: '{names} control positions via Throw/Push/Advance.',
    tip_ctrl_conds:       '{names} debuff opponents with conditions.',
    tip_ctrl_heal:        '{heal} keeps the team alive.',
    tip_ctrl_generic:     'Control the zone, don\'t fight stubbornly – throw opponents off objectives, distribute conditions.',

    // Generate tip strings (scoring approach)
    tip_scor_leader:      '{leader} provides Leadership buff.',
    tip_scor_scorers:     '{scorers} take the objectives.',
    tip_scor_support:     '{support} holds the line and supports.',
    tip_scor_fighters:    '{fighters} keeps threats in check.',
    tip_scor_generic:     'Prioritise objectives – scoring race instead of fighting.',

    // Generate tip strings (attrition approach)
    tip_attr_fighters:    '{fighters} as primary attackers.',
    tip_attr_leader:      '{leader} use Leadership.',
    tip_attr_support:     '{support} supports.',
    tip_attr_generic:     'Focus attacks — fully eliminate one char first, then the next.',

    // Opponent tip strings
    opp_high_threat:      'High-threat opponents: {chars} (Threat {threats})',
    opp_priority_order:   'Priority order: {order} – eliminate most expensive chars first.',
    opp_activation_pressure: 'Opponent has many cheap chars ({chars}) – high activation pressure, secure objectives early.',
    opp_small_team:       'Enemy team is small and expensive (avg {avg} Threat) – few activations, prefer scoring race.',
    opp_tip_bind_scoring: '{front} tie up {target} – away from your scorers.',
    opp_tip_hold_objectives: '{scorers} hold the objectives.',
    opp_tip_support_scoring: '{support} keeps the team alive.',
    opp_tip_leadership_early: '{leaders} use Leadership early.',
    opp_tip_generic_scoring: 'Prioritise objectives – scoring race instead of direct combat.',
    opp_tip_focus_attrition: '{front} on {target} – coordinated, never alone.',
    opp_tip_focus_all:       'All chars on {target} – never split damage.',
    opp_tip_leadership_burst: '{leaders} use Leadership for burst.',
    opp_tip_support_attrition: '{support} keeps attackers alive.',
    opp_tip_opportunistic:   '{scorers} opportunistically secure objectives.',

    // Crisis reason strings
    crisis_reason_own:      '★ own card',
    crisis_reason_fast:     '{names} (L) good for Objective Race',
    crisis_reason_mission:  'Mission Play: secure objectives early',
    crisis_reason_conds_slow: '{n} chars with conditions slow down opponents',
    crisis_reason_fighters: '{names} as combat force',
    crisis_reason_attrition:'Attrition crisis: eliminate enemies',
    crisis_reason_control:  '{names} control the zone',
    crisis_reason_debuff:   '{n} chars debuff opponents',
    crisis_reason_balanced: 'Balanced – fits any playstyle',
    crisis_reason_controllers: '{n} controllers in roster',

    // ── Character Browser Tab ──────────────────────────────────────
    chars_intro:      'All characters from the database. Filter by Movement, Threat and damage type. Click a card to see all stats, attacks and superpowers.',
    chars_filter_reset: '↺ Reset',
    chars_filter_immune:  '🛡 Immune to',
    chars_filter_inflict: '⚡ Can inflict',
    chars_filter_power_hungry: '⚡ Power-hungry',
    chars_empty:       'No characters found',

    // ── Character Detail Modal ─────────────────────────────────────
    char_modal_no_data:   'No data available for this character',
    char_modal_attacks:   'Attacks',
    char_modal_superpowers: 'Superpowers',
    char_modal_immune_tooltip:  'Immune: {name}',
    char_modal_inflict_tooltip: 'Inflicts: {name}',
    pow_type_active:   'Active',
    pow_type_innate:   'Innate',
    pow_type_reactive: 'Reactive',

    // ── Tactic/Crisis Card Modal ───────────────────────────────────
    card_modal_no_text:        'No card text available.',
    card_modal_superpower_incomplete: '⚠ Superpower text incomplete – full text on jarvis-protocol.com',
    card_modal_requires:       'Requires:',

    // ── Dice Calculator Tab ────────────────────────────────────────
    dice_atk_label:    '⚔️ Attack Dice',
    dice_def_label:    '🛡 Defence Dice',
    dice_avg_success:  'avg {n} successes',
    dice_reroll_no_skull: 'Reroll (no ☠)',
    dice_result_avg_dmg:  'avg Damage',
    dice_result_no_dmg:   'No Damage',
    dice_result_3plus:    '≥3 Damage',
    dice_dist_heading:    'Damage Distribution',
    dice_sim_note_exact:  'Exact calculation (no effects active)',
    dice_sim_note_montecarlo: 'Monte-Carlo simulation ({n} rolls)',

    // ── Compare Tab ────────────────────────────────────────────────
    compare_placeholder:  '— Choose roster —',
    compare_select_hint:  'Choose two rosters above to compare.',
    compare_no_roster_cell: 'No roster',

    // Compare section headings
    cmp_section_teamtyp:    'Team Type',
    cmp_section_chars:      'Characters',
    cmp_section_threat:     'Threat Distribution',
    cmp_section_speed:      'Movement',
    cmp_section_power:      'Power Economy',
    cmp_section_schaden:    'Damage Profile',
    cmp_section_range:      'Range Distribution',
    cmp_section_conditions: 'Conditions',
    cmp_section_warzone:    'Warzone Control',
    cmp_section_defense:    'Defence Profile',
    cmp_section_weaknesses: 'Weaknesses',

    // Compare: char-type labels
    type_fighter:     'Fighter',
    type_scorer:      'Scorer',
    type_support:     'Support',
    type_allrounder:  'Allrounder',
    type_none_set:    'No types set',

    // Compare: no-data fallbacks
    cmp_no_data:          'No data',
    cmp_no_known_chars:   'No known chars',
    cmp_not_in_db:        '{n} char(s) not in DB',
    cmp_all_green:        'All in the green',
    cmp_hungry_note:      '{n} hungry: {names}',
    cmp_total_stamina:    'Total Stamina:',
    cmp_conditions_inflict: 'Inflicts:',
    cmp_conditions_immune:  'Immune:',
    cmp_none:             'None',

    // Compare: damage labels
    dmg_physical: 'Physical',
    dmg_energy:   'Energy',
    dmg_mystic:   'Mystic',

    // Compare: range labels
    rng_short:  'Short (1-2)',
    rng_medium: 'Medium (3-4)',
    rng_long:   'Long (5+)',
    rng_beam:   'Beam',
    rng_area:   'Area',

    // Compare: warzone control labels
    wz_throw:    'Throw',
    wz_push:     'Push',
    wz_advance:  'Advance',
    wz_place:    'Place',
    wz_heal:     'Healing',

    // Compare: defense labels
    def_stamina: 'avg Stamina',
    def_phys:    'avg Phys.Def',
    def_energy:  'avg Enrg.Def',
    def_mystic:  'avg Myst.Def',

    // Compare: weakness strings
    weak_no_healing:    'No healing',
    weak_no_long_range: 'No long range (5+)',
    weak_no_scorer:     'No scorer',
    weak_no_mystic:     'No mystic attacks',
    weak_no_energy:     'No energy attacks',
    weak_no_immunity:   '{n}/{total} chars without immunity',
    weak_no_scoring:    'Cannot score: {chars}',
    weak_none_found:    'No critical gaps found',

    // ── Import Modal ───────────────────────────────────────────────
    import_title:           '📋 Import Roster',
    import_desc:            'Plaintext export from jarvis-protocol.com → open team → "Export" → "Plain Text" – copy and paste.\nChar type & leader status are auto-filled from the database.',
    import_name_label:      'Roster Name',
    import_new_label:       'Save as new roster',
    import_name_placeholder: 'e.g. Defenders',
    import_btn_confirm:     '✅ Import & Save',
    import_btn_cancel:      'Cancel',
    import_error_no_chars:  '⚠️ No characters or tactic cards recognised. Please check the format.',
    import_error_save:      '⚠️ Error saving: {msg}',
    import_toast:           '✅ {chars} chars · {tactics} tactics{crisis} imported',

    // Opponent import modal
    opp_import_title:       '🦹 Import Opponent',
    opp_import_desc:        'Paste plaintext export of the opponent\'s roster from jarvis-protocol.com.',
    opp_import_btn_confirm: '✅ Import',
    opp_import_btn_cancel:  'Cancel',
    opp_import_error:       '⚠️ No characters recognised. Please check the format.',
    opp_import_success:     '✅ {n} chars imported · Affiliation: {aff}',
    opp_import_success_no_aff: '✅ {n} chars imported',

    // ── Roster view capabilities ────────────────────────────────────
    cap_throw: 'Throw',
    cap_push:  'Push',
    cap_conditions: 'Conditions',
    cap_heal:  'Heal',
    cap_speed_l: 'Speed L',

    // ── Footer ─────────────────────────────────────────────────────
    footer: 'W.A.T.C.H. · Crisis Cards: AMG Organized Play 2024/25 · All stones collected ✓',

    // ── Opponent hint/strength strings (per affiliation) ───────────
    // Asgard
    opp_asgard_s1:  'Extremely high Stamina (7–9)',
    opp_asgard_s2:  'Odin Leadership: rerolls on attack + defence',
    opp_asgard_s3:  'Divine melee damage',
    opp_asgard_hint:'Hela is NOT a Leader – ignore her until the main leader falls. Lock Odin Leadership rerolls with Hex effects. Never attack alone – concentrate firepower on the active leader.',

    // Avengers
    opp_avengers_s1:  'Cap Leadership: extra Power for everyone',
    opp_avengers_s2:  'Iron Man as Power anchor',
    opp_avengers_s3:  'Very versatile all-rounders',
    opp_avengers_hint:'Eliminate Iron Man immediately – most expensive and dangerous char. Lock Cap\'s Leadership with Hex effects. Then attack Cap isolated without support.',

    // X-Men
    opp_xmen_s1:  'Cyclops Leadership: rerolls on attack',
    opp_xmen_s2:  'Strong ranged characters',
    opp_xmen_s3:  'Many different build options',
    opp_xmen_hint:'Cyclops as primary target – without Leadership X-Men fall apart. Hex on Cyclops locks Leadership rerolls. Prioritise objectives over fighting – X-Men want to play Attrition.',

    // Web Warriors
    opp_webwarriors_s1:  'Extremely mobile characters',
    opp_webwarriors_s2:  'Web Tokens impede movement',
    opp_webwarriors_s3:  'Very strong scoring',
    opp_webwarriors_hint:'Web Warriors don\'t want to fight – force confrontation. Hex on Spider-Man locks rerolls. Use objectives as bait – scoring race instead of combat.',

    // Cabal
    opp_cabal_s1:  'Red Skull Leadership: Power on damage received',
    opp_cabal_s2:  'MODOK: extremely high ranged damage',
    opp_cabal_s3:  'Very aggressive playstyle',
    opp_cabal_hint:'Eliminate MODOK first – high damage but average Stamina. Do NOT attack Red Skull while he has a lot of Power. NOTE: MODOK is NOT a leader in Cabal! Never play reactively – always apply active pressure.',

    // Criminal Syndicate
    opp_syndicate_s1:  'Kingpin: extremely tough (high Stamina)',
    opp_syndicate_s2:  'Excellent Power economy',
    opp_syndicate_s3:  'Strong control and debuffs',
    opp_syndicate_hint:'Attack Kingpin as late as possible when he has little Power. Prioritise objectives – Syndicate is strong in combat, not scoring. Never go at Kingpin alone – always burst combo.',

    // Wakanda
    opp_wakanda_s1:  'Black Panther: extremely mobile',
    opp_wakanda_s2:  'Vibranium armour: damage reduction',
    opp_wakanda_s3:  'Excellent scoring',
    opp_wakanda_hint:'Overcome Vibranium with concentrated firepower – never shoot at Black Panther alone. Hex effects lock rerolls despite armour. NOTE: Shuri is NOT a leader!',

    // Brotherhood
    opp_brotherhood_s1:  'Magneto: throws metal terrain for massive damage',
    opp_brotherhood_s2:  'Strong ranged control',
    opp_brotherhood_s3:  'Magnetic manipulations',
    opp_brotherhood_hint:'Place little metal terrain on the table – Magneto throws everything metallic. Prefer flying chars – no terrain-throw damage. Keep Mystique in mind as a second leader.',

    // Defenders
    opp_defenders_s1:  'Portal movement: teleportation across the board',
    opp_defenders_s2:  'Mystic protection effects',
    opp_defenders_s3:  'Healing',
    opp_defenders_hint:'Doctor Strange as primary target – without portals, Defenders lose their mobility advantage. Burst damage before he can heal. Score from different angles so Strange can\'t cover everything with portals.',

    // Convocation
    opp_convocation_s1:  'Mystic dice manipulation',
    opp_convocation_s2:  'Power-rich through dark magic',
    opp_convocation_s3:  'Very unorthodox playstyle',
    opp_convocation_hint:'Apply pressure early before Convocation accumulates Power. Eliminate Doctor Strange as the key piece as early as possible. NOTE: Ghost Rider is NOT a leader in Convocation!',

    // Inhumans
    opp_inhumans_s1:  'Black Bolt: massive ranged damage (voice)',
    opp_inhumans_s2:  'Medusa: very mobile control',
    opp_inhumans_s3:  'Few but powerful models',
    opp_inhumans_hint:'Black Bolt at range is very dangerous – force melee immediately. He is weaker in melee. Hex effects lock his powerful Voice attacks.',

    // Spider-Foes
    opp_spiderfoes_s1:  'Doc Ock: tentacle control',
    opp_spiderfoes_s2:  'Green Goblin: explosive Pumpkin Bombs',
    opp_spiderfoes_s3:  'Want to force melee',
    opp_spiderfoes_hint:'Green Goblin as primary target – his Pumpkin Bombs are very dangerous. Keep distance – Spider-Foes want melee. Hex effects counter Doc Ock\'s tentacle control.',

    // S.H.I.E.L.D.
    opp_shield_s1:  'Many cheap agents (activation superiority)',
    opp_shield_s2:  'Nick Fury\'s Command: very versatile',
    opp_shield_s3:  'Guns, Gadgets, Tactics',
    opp_shield_hint:'Nick Fury as primary target – without him S.H.I.E.L.D. loses coordination. Don\'t engage with agent spam – focus Fury. High individual character quality beats agent masses.',

    // Midnight Sons
    opp_midnight_s1:  'Strong healing mechanics',
    opp_midnight_s2:  'Ghost Rider: massive melee damage',
    opp_midnight_s3:  'Resilience',
    opp_midnight_hint:'Burst damage before healing kicks in – never deal slow damage over time. NOTE: Ghost Rider is NOT a leader – Blade / Elsa Bloodstone are the official leaders! Score from safe distance – Midnight Sons want melee.',

    // A-Force
    opp_aforce_s1:  'She-Hulk: extremely tough and strong',
    opp_aforce_s2:  'Strong female characters',
    opp_aforce_s3:  'Teamwork synergies',
    opp_aforce_hint:'She-Hulk has extremely high Stamina – use burst damage combo, never attack alone. Hex on She-Hulk locks Leadership rerolls. Collect objectives from safe distance.',

    // Black Order
    opp_blackorder_s1:  'Thanos: most powerful single model in the game',
    opp_blackorder_s2:  'Infinity Gauntlet mechanic',
    opp_blackorder_s3:  'Massive Stamina',
    opp_blackorder_hint:'NEVER attack Thanos alone – he is too strong. Thanos can negate damage – wait for the right moment, then attack in a coordinated burst. Prioritise objectives to avoid playing on his terms.',

    // Dark Dimension
    opp_darkdimension_s1:  'Dormammu: massive mystic damage',
    opp_darkdimension_s2:  'Portal mechanics',
    opp_darkdimension_s3:  'Very high Stamina',
    opp_darkdimension_hint:'Never attack Dormammu alone – he is too dangerous. Prefer mystic attacks against his massive protection. Score from safe distance to avoid entering his melee range.',

    // Hydra
    opp_hydra_s1:  'Control play and debuffs',
    opp_hydra_s2:  'Baron Zemo: surprisingly strong attacker',
    opp_hydra_s3:  'Power accumulation',
    opp_hydra_hint:'Zemo as primary target – most flexible leader and most dangerous individual fighter. Apply pressure early before Red Skull MoH accumulates Power. Move fast and aggressive.',

    // Sentinels
    opp_sentinels_s1:  'Massive Stamina',
    opp_sentinels_s2:  'Mutant Tracking mechanics',
    opp_sentinels_s3:  'High damage through raw power',
    opp_sentinels_hint:'Sentinels are slow – use mobile chars for objectives. Extremely high Stamina – concentrate all attacks on one Sentinel, never split damage. Flying chars avoid Ground Slam attacks.',

    // Servants of the Apocalypse
    opp_servants_s1:  'Apocalypse: Survival of the Fittest mechanic',
    opp_servants_s2:  'Four Horsemen synergies',
    opp_servants_s3:  'Massive damage',
    opp_servants_hint:'Eliminate the Four Horsemen first, then Apocalypse – without Horsemen he loses his synergies. Burst damage on the Horsemen before they are fully activated.',

    // Winter Guard
    opp_winterguard_s1:  'Crimson Dynamo: power armour',
    opp_winterguard_s2:  'Strong team synergies',
    opp_winterguard_s3:  'Control and debuffs',
    opp_winterguard_hint:'Prioritise objectives – Winter Guard is strong in combat, not scoring. Penetrate Crimson Dynamo\'s armour with concentrated firepower. Prefer ranged attacks from safe distance.',

    // X-Force
    opp_xforce_s1:  'Cable: time-travel Leadership, tactical flexibility',
    opp_xforce_s2:  'Strong firearms',
    opp_xforce_s3:  'Very aggressive playstyle',
    opp_xforce_hint:'Eliminate Cable immediately – his Leadership must not last long. Psionic attacks counter his telekinesis. Collect objectives from safe distance.',

    // Weapon X
    opp_weaponx_s1:  'Wolverine: Regeneration + Adamantium claws ignore armour',
    opp_weaponx_s2:  'Omega Red: Coils slow and weaken',
    opp_weaponx_s3:  'Pure Attrition team – always wants to fight',
    opp_weaponx_hint:'Eliminate Omega Red first – most dangerous model. Weapon X wants to fight – use objectives from safe distance. Keep Wolverine busy rather than letting him eliminate chars.',

    // Thralls of Dracula
    opp_thralls_s1:  'Dracula: Flying + Lifedraining',
    opp_thralls_s2:  'Blood mechanics strengthen the team',
    opp_thralls_s3:  'Lilith: mystic support',
    opp_thralls_hint:'Eliminate Dracula with burst damage before he activates Lifedrain. Never go at him alone – always attack in a coordinated manner. Keep distance – he wants melee for his Lifedrain.',

    // Legion of the Lost
    opp_legion_s1:  'Mephisto: soul manipulation, extremely hard to eliminate',
    opp_legion_s2:  'Hellish control and debuffs',
    opp_legion_s3:  'High Power accumulation',
    opp_legion_hint:'Mephisto has very high resilience – burst damage and never attack alone. Score points quickly before his soul mechanic kicks in. Coordinated focus attacks on one model at a time.',

    // Guardians of the Galaxy
    opp_guardians_s1:  'Star-Lord Leadership: Power accumulation on superpowers',
    opp_guardians_s2:  'Very diverse toolkit with fliers (Nova, Quasar)',
    opp_guardians_s3:  'High Power income enables superpowers every round',
    opp_guardians_hint:'Star-Lord as primary target – without Leadership superpowers become much more expensive. Hex on Star-Lord locks Leadership rerolls. GotG is very mobile – prefer your own mobile chars for objectives.',

    // Hellfire Club
    opp_hellfire_s1:  'Emma Frost Diamond Form: damage immunity to physical attacks',
    opp_hellfire_s2:  'Sebastian Shaw: absorbs kinetic energy and grows stronger from damage',
    opp_hellfire_s3:  'Strong psychic attacks and control',
    opp_hellfire_hint:'NEVER attack Sebastian Shaw directly while he has taken little damage – he absorbs kinetic energy and grows stronger. Lure Emma Frost out of Diamond Form with mystic/energy attacks. Hex on Emma locks her Psionic Blasts.',

    // Mighty Avengers
    opp_mightyavengers_s1:  'Luke Cage: Unbreakable Skin – extremely high effective Stamina',
    opp_mightyavengers_s2:  'Very resilient team with healing mechanics',
    opp_mightyavengers_s3:  'Luke Cage Leadership: damage reduction for the whole team',
    opp_mightyavengers_hint:'Luke Cage has extremely high Stamina – concentrate firepower on one char until he falls, never split damage. Hex on Luke Cage locks Leadership rerolls. Prioritise objectives – don\'t engage in Attrition.',

    // New Mutants
    opp_newmutants_s1:  'Magik: Limbo Teleportation – chars appear at any objective by surprise',
    opp_newmutants_s2:  'Extremely unpredictable positioning',
    opp_newmutants_s3:  'Cannonball: invulnerable during flight, high damage',
    opp_newmutants_hint:'Eliminate Magik immediately – her teleportation makes the whole team unpredictable. Intercept Cannonball before launch – he is invulnerable in flight. Double-contest objectives so teleporters can\'t snatch them.',

    // ── Preset notes ───────────────────────────────────────────────
    preset_note_no_leader: 'Not a Leader!',
    preset_note_no_cabal_leader: 'Not a Cabal Leader!',
    preset_note_also_midnight: 'also Midnight Sons',
    preset_note_also_dd: 'also Dark Dimension',
    preset_note_also_conv: 'also Convocation',
    preset_note_also_asgard: 'also Asgard',
    preset_note_also_brotherhood: 'also Brotherhood',
    preset_note_also_xforce: 'also X-Force',
    preset_note_also_xmen: 'also X-Men',
    preset_note_daughter_mephisto: 'Daughter of Mephisto',
    preset_note_en_sabah_nur: 'En Sabah Nur',
    preset_note_horseman: 'Horseman of Death',
  },
};
