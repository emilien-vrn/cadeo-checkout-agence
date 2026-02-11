import { useState } from "react";

const CheckoutAgence = () => {
  const [selectedDuration, setSelectedDuration] = useState(6);
  const [startDate, setStartDate] = useState("2026-02-11");
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(1); // 0=jan, 1=fev
  const [calendarYear, setCalendarYear] = useState(2026);

  const plans = [
    { months: 3, priceMonth: 25, total: 75, badge: null, savings: null },
    { months: 6, priceMonth: 25, total: 150, badge: null, savings: null, popular: true },
    { months: 12, priceMonth: 25, total: 300, badge: null, savings: null },
  ];

  const selectedPlan = plans.find(p => p.months === selectedDuration);

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  };

  const getEndDate = () => {
    const d = new Date(startDate);
    d.setMonth(d.getMonth() + selectedDuration);
    return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  };

  const monthNames = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  const dayNames = ["lun.", "mar.", "mer.", "jeu.", "ven.", "sam.", "dim."];

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => { const d = new Date(year, month, 1).getDay(); return d === 0 ? 6 : d - 1; };

  const handleDateSelect = (day) => {
    const m = String(calendarMonth + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    setStartDate(`${calendarYear}-${m}-${d}`);
    setShowCalendar(false);
  };

  const prevMonth = () => {
    if (calendarMonth === 0) { setCalendarMonth(11); setCalendarYear(calendarYear - 1); }
    else setCalendarMonth(calendarMonth - 1);
  };

  const nextMonth = () => {
    if (calendarMonth === 11) { setCalendarMonth(0); setCalendarYear(calendarYear + 1); }
    else setCalendarMonth(calendarMonth + 1);
  };

  const daysInMonth = getDaysInMonth(calendarMonth, calendarYear);
  const firstDay = getFirstDayOfMonth(calendarMonth, calendarYear);
  const selectedDay = new Date(startDate);

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Inter', -apple-system, sans-serif", background: "#f5f5f5" }}>
      {/* SIDEBAR */}
      <div style={{ width: 210, background: "#1a1a1a", display: "flex", flexDirection: "column", padding: "20px 0", flexShrink: 0 }}>
        <div style={{ padding: "0 20px 24px", fontSize: 20, fontWeight: 800, color: "#fff", fontStyle: "italic", letterSpacing: 2 }}>CADEO</div>
        {[
          { icon: "🏠", label: "Accueil" },
          { icon: "🎡", label: "Roue Boost", active: true },
          { icon: "⭐", label: "E-réputation" },
          { icon: "👥", label: "Données clients" },
          { icon: "👤", label: "Utilisateurs" },
          { icon: "💬", label: "Assistance" },
        ].map(item => (
          <div key={item.label} style={{ padding: "11px 20px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer", background: item.active ? "#2a2151" : "transparent", color: item.active ? "#fff" : "#999", fontSize: 14, fontWeight: item.active ? 600 : 400, borderLeft: item.active ? "3px solid #F5A623" : "3px solid transparent" }}>
            <span style={{ fontSize: 16 }}>{item.icon}</span> {item.label}
          </div>
        ))}
        <div style={{ marginTop: "auto", padding: "14px 20px", display: "flex", alignItems: "center", gap: 10, borderTop: "1px solid #333" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#2a2151", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700 }}>D</div>
          <span style={{ color: "#ccc", fontSize: 13 }}>Diane</span>
          <span style={{ marginLeft: "auto", color: "#666", fontSize: 12 }}>⌃</span>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {/* HEADER */}
        <div style={{ padding: "20px 36px", background: "#fff", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h1 style={{ fontSize: 20, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>Souscrire à un abonnement</h1>
          <button style={{ padding: "9px 18px", borderRadius: 8, border: "1.5px solid #eee", background: "#fff", color: "#555", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>← Tableau de bord</button>
        </div>
        <div style={{ height: 3, background: "#1a1a1a", opacity: 0.15 }} />

        <div style={{ padding: "40px 48px", maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 400px", gap: 36 }}>

          {/* LEFT — PLAN SELECTION */}
          <div>
            {/* BADGE + TITLE */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 20, background: "#f3f0ff", marginBottom: 14 }}>
                <span style={{ fontSize: 14 }}>🎡</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#2a2151" }}>Roue Boost</span>
              </div>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: "#1a1a1a", margin: "0 0 6px" }}>Débloquez votre campagne</h2>
              <p style={{ fontSize: 14, color: "#888", margin: 0 }}>Commencez dès aujourd'hui à engager vos clients et récolter des avis</p>
            </div>

            {/* DATE PICKER */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 10, display: "block" }}>Date de lancement</label>
              <div style={{ position: "relative", display: "inline-block" }}>
                <button onClick={() => setShowCalendar(!showCalendar)} style={{ padding: "12px 18px", borderRadius: 10, border: "1.5px solid #eee", background: "#fff", fontSize: 14, color: "#1a1a1a", fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, minWidth: 220 }}>
                  <span style={{ fontSize: 16 }}>📅</span>
                  {formatDate(startDate)}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" style={{ marginLeft: "auto" }}><polyline points="6 9 12 15 18 9" /></svg>
                </button>

                {showCalendar && (
                  <div style={{ position: "absolute", top: "calc(100% + 6px)", left: 0, background: "#fff", borderRadius: 14, boxShadow: "0 12px 40px rgba(0,0,0,0.15)", border: "1px solid #eee", padding: "18px", zIndex: 100, width: 300 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                      <button onClick={prevMonth} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#888" }}>‹</button>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>{monthNames[calendarMonth]} {calendarYear}</span>
                      <button onClick={nextMonth} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#888" }}>›</button>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, marginBottom: 6 }}>
                      {dayNames.map(d => (
                        <div key={d} style={{ fontSize: 10, color: "#bbb", textAlign: "center", padding: "4px 0", fontWeight: 600 }}>{d}</div>
                      ))}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
                      {Array.from({ length: firstDay }, (_, i) => <div key={`e${i}`} />)}
                      {Array.from({ length: daysInMonth }, (_, i) => {
                        const day = i + 1;
                        const isSelected = selectedDay.getDate() === day && selectedDay.getMonth() === calendarMonth && selectedDay.getFullYear() === calendarYear;
                        return (
                          <button key={day} onClick={() => handleDateSelect(day)} style={{
                            width: 34, height: 34, borderRadius: "50%", border: "none", cursor: "pointer",
                            background: isSelected ? "#2a2151" : "transparent",
                            color: isSelected ? "#fff" : "#1a1a1a",
                            fontSize: 13, fontWeight: isSelected ? 700 : 400,
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>{day}</button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              {showCalendar && <div style={{ position: "fixed", inset: 0, zIndex: 50 }} onClick={() => setShowCalendar(false)} />}
            </div>

            {/* DURATION CARDS */}
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 10, display: "block" }}>Choisissez la durée</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                {plans.map(plan => (
                  <div
                    key={plan.months}
                    onClick={() => setSelectedDuration(plan.months)}
                    style={{
                      background: "#fff", borderRadius: 14, overflow: "hidden", cursor: "pointer",
                      border: selectedDuration === plan.months ? "2px solid #2a2151" : "1.5px solid #eee",
                      boxShadow: selectedDuration === plan.months ? "0 4px 16px rgba(42,33,81,0.1)" : "none",
                      transition: "all 0.2s",
                    }}
                  >
                    {plan.popular && (
                      <div style={{ padding: "6px 0", background: "#2a2151", color: "#fff", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, textAlign: "center" }}>⭐ Le plus populaire</div>
                    )}
                    <div style={{ padding: plan.popular ? "16px 16px 18px" : "18px 16px", textAlign: "center" }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>{plan.months} mois</div>
                      <div style={{ marginBottom: 4 }}>
                        <span style={{ fontSize: 28, fontWeight: 800, color: "#1a1a1a" }}>{plan.total}€</span>
                      </div>
                      <div style={{ fontSize: 12, color: "#999", marginBottom: 0 }}>Soit {plan.priceMonth}€/mois</div>
                      <div style={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", border: selectedDuration === plan.months ? "5px solid #2a2151" : "2px solid #ddd", transition: "all 0.2s" }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FEATURES */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                "Participations illimitées",
                "Objectifs illimités",
                "Choix des lots & conditions",
                "Page de jeu personnalisable",
                "Suivi en temps réel",
                "Modifications de campagne illimitées",
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#f3f0ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#2a2151" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <span style={{ fontSize: 13, color: "#555" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — RECAP + PAYMENT */}
          <div>
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #eee", overflow: "hidden", position: "sticky", top: 24 }}>
              <div style={{ padding: "24px 24px 0" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#1a1a1a", marginBottom: 20 }}>Récapitulatif</div>

                {/* RECAP LINES */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingBottom: 20, borderBottom: "1px solid #f0f0f0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "#888" }}>Produit</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>Roue Boost</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "#888" }}>Durée</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>{selectedDuration} mois</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "#888" }}>Début</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>{formatDate(startDate)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "#888" }}>Fin</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>{getEndDate()}</span>
                  </div>
                </div>

                {/* PRICE */}
                <div style={{ padding: "16px 0", borderBottom: "1px solid #f0f0f0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "#888" }}>Prix mensuel</span>
                    <span style={{ fontSize: 13, color: "#888" }}>{selectedPlan.priceMonth}€ × {selectedDuration} mois</span>
                  </div>
                </div>

                {/* TOTAL */}
                <div style={{ padding: "16px 0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 16, fontWeight: 800, color: "#1a1a1a" }}>Total</span>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ fontSize: 24, fontWeight: 800, color: "#1a1a1a" }}>{selectedPlan.total}€</span>
                    <div style={{ fontSize: 11, color: "#999" }}>TTC</div>
                  </div>
                </div>
              </div>

              {/* PAYMENT SECTION */}
              <div style={{ padding: "0 24px 24px" }}>
                {/* BILLING ACCOUNT */}
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontSize: 12, color: "#888", fontWeight: 500, marginBottom: 8, display: "block" }}>Moyen de paiement</label>
                  <div style={{ padding: "14px 16px", borderRadius: 10, border: "1.5px solid #2a2151", background: "#faf8ff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 38, height: 24, borderRadius: 4, background: "linear-gradient(135deg, #eb001b, #f79e1b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "rgba(255,255,255,0.6)", marginLeft: -2 }} />
                        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "rgba(255,255,255,0.4)", marginLeft: -4 }} />
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>A TOUT COM</div>
                        <div style={{ fontSize: 11, color: "#999" }}>•••• 9692</div>
                      </div>
                    </div>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", border: "5px solid #2a2151" }} />
                  </div>
                </div>

                <button style={{ width: "100%", padding: "14px", borderRadius: 10, border: "none", background: "#1a1a1a", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer", marginBottom: 10 }}>
                  Payer et débloquer l'accès maintenant
                </button>

                <button style={{ width: "100%", padding: "12px", borderRadius: 10, border: "1.5px solid #eee", background: "#fff", color: "#555", fontSize: 13, fontWeight: 600, cursor: "pointer", marginBottom: 16 }}>
                  + Ajouter un moyen de paiement
                </button>

                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <span style={{ fontSize: 12, color: "#888" }}>Paiement 100% sécurisé via Stripe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: #ddd; border-radius: 3px; }
        ::-webkit-scrollbar-track { background: transparent; }
      `}</style>
    </div>
  );
};

export default CheckoutAgence;
