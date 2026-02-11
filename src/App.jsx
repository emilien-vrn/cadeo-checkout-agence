import { useState } from "react";

const CadeoDashboard = () => {
  const [activeTab, setActiveTab] = useState("Objectifs");
  const [rightTab, setRightTab] = useState("lancement");
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [showAddObjectives, setShowAddObjectives] = useState(false);
  const [campaignLive, setCampaignLive] = useState(true);
  const [addPopup, setAddPopup] = useState(null);
  const [addUrl, setAddUrl] = useState("");
  const [editPopup, setEditPopup] = useState(null);
  const [editName, setEditName] = useState("");
  const [editingTitle, setEditingTitle] = useState(false);
  const [campaignName, setCampaignName] = useState("McDonald's Vernon");
  const [showDesignPopup, setShowDesignPopup] = useState(false);
  const [showValidationPopup, setShowValidationPopup] = useState(false);
  const [showTipsPopup, setShowTipsPopup] = useState(false);
  const [popupFormat, setPopupFormat] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [designConfirmed, setDesignConfirmed] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const designTemplates = {
    sticker: [
      { id: 1, name: "Classic Noir", colors: ["#1a1a1a", "#f5a623", "#fff"] },
      { id: 2, name: "Fresh Menthe", colors: ["#0d9488", "#ecfdf5", "#fff"] },
      { id: 3, name: "Pop Corail", colors: ["#ef4444", "#fef2f2", "#fff"] },
      { id: 4, name: "Royal Violet", colors: ["#2a2151", "#f3f0ff", "#fff"] },
    ],
    affiche: [
      { id: 1, name: "Élégant Sombre", colors: ["#1a1a1a", "#f5a623", "#fff"] },
      { id: 2, name: "Tropical", colors: ["#059669", "#d1fae5", "#fff"] },
      { id: 3, name: "Sunset", colors: ["#ea580c", "#fff7ed", "#fff"] },
      { id: 4, name: "Nuit Étoilée", colors: ["#2a2151", "#ede9fe", "#fff"] },
    ],
  };

  const openDesignPopup = (format) => {
    setPopupFormat(format);
    setSelectedDesign(null);
    setDesignConfirmed(false);
    setShowDesignPopup(true);
  };

  const confirmDesign = () => {
    setDesignConfirmed(true);
  };

  const closePopup = () => {
    setShowDesignPopup(false);
    setPopupFormat(null);
    setSelectedDesign(null);
    if (designConfirmed) setDesignConfirmed(false);
  };

  const tabs = [
    { label: "Objectifs" },
    { label: "Lots" },
    { label: "Apparence du jeu" },
  ];

  const objectives = [
    {
      icon: "https://www.google.com/favicon.ico",
      platform: "Google",
      color: "#4285F4",
      title: "1. Booster les avis Google",
      description: 'Lors de la visite n°1, le joueur devra « ',
      link: "Laisser un avis sur Google",
      linkUrl: "#",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png",
      platform: "Instagram",
      color: "#E4405F",
      title: "2. Booster les followers sur Instagram",
      description: "Lors de la visite n°2, le joueur devra « ",
      link: "S'abonner sur Instagram",
      linkUrl: "#",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      platform: "Facebook",
      color: "#1877F2",
      title: "3. Booster les followers sur Facebook",
      description: "Lors de la visite n°3, le joueur devra « ",
      link: "Suivre la page Facebook",
      linkUrl: "#",
    },
  ];

  const addObjectives = [
    { icon: "🎵", platform: "TikTok", label: "Booster les followers sur TikTok", placeholder: "https://www.tiktok.com/@" },
    { icon: "⭐", platform: "TrustPilot", label: "Booster les avis TrustPilot", placeholder: "https://www.trustpilot.com/review/" },
    { icon: "🦉", platform: "Tripadvisor", label: "Booster les avis Tripadvisor", placeholder: "https://www.tripadvisor.fr/" },
    { icon: "📱", platform: "App Store", label: "Booster les téléchargements sur l'App Store", placeholder: "https://apps.apple.com/app/" },
    { icon: "👻", platform: "Snapchat", label: "Booster les followers sur Snapchat", placeholder: "https://www.snapchat.com/add/" },
    { icon: "▶️", platform: "Play Store", label: "Booster les téléchargements sur le Play Store", placeholder: "https://play.google.com/store/apps/" },
    { icon: "💼", platform: "LinkedIn", label: "Booster les followers sur LinkedIn", placeholder: "https://www.linkedin.com/company/" },
  ];

  const navItems = [
    { icon: <DashboardIcon />, label: "Accueil" },
    { icon: <RoueIcon />, label: "Roue Boost", active: true },
    { icon: <AvisIcon />, label: "E-réputation" },
    { icon: <CRMIcon />, label: "Données clients" },
    { icon: <UsersIcon />, label: "Utilisateurs" },
    { icon: <HelpIcon />, label: "Assistance" },
  ];

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(42, 33, 81, 0.2); transform: scale(1); }
          50% { box-shadow: 0 0 0 8px rgba(42, 33, 81, 0); transform: scale(1.01); }
        }
        #tips-cta-btn {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        #tips-cta-btn:hover {
          animation: none;
          box-shadow: 0 2px 8px rgba(42, 33, 81, 0.15);
        }
      `}</style>
      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarInner}>
          <div style={styles.logo}>CADEO</div>
          <nav style={styles.nav}>
            {navItems.map((item, i) => (
              <button
                key={i}
                style={{
                  ...styles.navItem,
                  ...(item.active ? styles.navItemActive : {}),
                }}
              >
                <span style={styles.navIcon}>{item.icon}</span>
                <span style={styles.navLabel}>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div style={styles.userSection}>
          <div style={styles.userRow}>
            <div style={styles.userAvatar}>E</div>
            <span style={styles.userName}>Emilien</span>
            <span style={styles.userChevron}>
              <ChevronUp />
            </span>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main style={styles.main}>
        {/* HEADER */}
        <header style={styles.header}>
          <div style={styles.headerLeft}>
            <div style={styles.headerBadge}>M</div>
            <div>
              {editingTitle ? (
                <div style={styles.editTitleRow}>
                  <input
                    type="text"
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                    style={styles.editTitleInput}
                    autoFocus
                  />
                  <button style={styles.editTitleConfirm} onClick={() => setEditingTitle(false)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </button>
                  <button style={styles.editTitleCancel} onClick={() => setEditingTitle(false)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              ) : (
                <h1 style={styles.headerTitle}>
                  {campaignName}{" "}
                  <span style={styles.editIcon} onClick={() => setEditingTitle(true)}>
                    <PencilIcon />
                  </span>
                </h1>
              )}
              <div style={styles.headerMeta}>
                <span style={{
                  ...styles.headerStatus,
                  ...(campaignLive ? styles.headerStatusLive : styles.headerStatusOff),
                }}>
                  <span style={{
                    ...styles.statusDot,
                    background: campaignLive ? "#059669" : "#d4d4d4",
                  }} />
                  {campaignLive ? "Campagne active" : "Campagne inactive"}
                </span>
              </div>
            </div>
          </div>
          <div style={styles.headerActions}>
            <button style={styles.btnOutline}>Comment paramétrer ma campagne ?</button>
            <button style={styles.btnPrimary}>Gérer mon abonnement</button>
          </div>
        </header>

        <div style={styles.contentWrapper}>
          {/* LEFT CONTENT */}
          <div style={styles.leftContent}>
            {/* TABS */}
            <div style={styles.tabBar}>
              <div style={styles.tabBarLeft}>
                {tabs.map((tab, index) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(tab.label)}
                    style={{
                      ...styles.tab,
                      ...(activeTab === tab.label ? styles.tabActive : {}),
                    }}
                  >
                    <span style={{
                      ...styles.tabNumber,
                      ...(activeTab === tab.label ? styles.tabNumberActive : {}),
                    }}>{index + 1}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
              <div style={styles.tabBarRight}>
                <button style={styles.tabIconBtn} title="Performances">
                  <PerformanceIcon />
                </button>
                <button style={styles.tabIconBtn} title="Paramètres">
                  <SettingsIcon />
                </button>
              </div>
            </div>

            {/* VOS OBJECTIFS */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Vos objectifs</h2>
              <div style={styles.objectivesList}>
                {objectives.map((obj, i) => (
                  <div key={i} style={styles.objectiveCard}>
                    <div style={styles.objectiveLeft}>
                      <div style={styles.objectiveIconWrap}>
                        <PlatformIcon platform={obj.platform} />
                      </div>
                      <div style={styles.objectiveInfo}>
                        <div style={styles.objectiveTitle}>{obj.title}</div>
                        <div style={styles.objectiveDesc}>
                          {obj.description}
                          <a href={obj.linkUrl} style={styles.objectiveLink}>
                            {obj.link}
                          </a>
                          {" »"}
                        </div>
                      </div>
                    </div>
                    <div style={styles.objectiveActions}>
                      <button style={styles.testBtn}>
                        <ExternalIcon /> Tester le lien
                      </button>
                      <button style={styles.iconBtn}><PencilSmall /></button>
                      <button style={styles.iconBtn}><ArrowUp /></button>
                      <button style={styles.iconBtn}><ArrowDown /></button>
                      <button style={styles.iconBtnDanger}><TrashIcon /></button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div style={styles.divider} />

            {/* AJOUTER UN OBJECTIF */}
            <section style={styles.section}>
              <button
                style={styles.addObjectiveToggle}
                onClick={() => setShowAddObjectives(!showAddObjectives)}
              >
                <div style={styles.addObjectiveToggleLeft}>
                  <span style={styles.addObjectivePlus}>{showAddObjectives ? "−" : "+"}</span>
                  <span>Ajouter un objectif</span>
                </div>
                <span style={{
                  ...styles.addObjectiveChevron,
                  transform: showAddObjectives ? "rotate(180deg)" : "rotate(0deg)",
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              {showAddObjectives && (
                <div style={styles.addGrid}>
                  {addObjectives.map((obj, i) => (
                    <button key={i} style={styles.addCard} onClick={() => { setAddPopup(obj); setAddUrl(""); }}>
                      <div style={styles.addCardLeft}>
                        <span style={styles.addCardIcon}>{obj.icon}</span>
                        <span style={styles.addCardLabel}>{obj.label}</span>
                      </div>
                      <span style={styles.addCardArrow}>›</span>
                    </button>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <div style={styles.rightSidebar}>
            {/* Game Page Preview - always visible */}
            <div style={styles.wheelPreview}>
              <div style={styles.gamePageCard}>
                <div style={styles.gamePagePhone}>
                  <div style={styles.gamePageScreen}>
                    <div style={styles.gamePageLogo}>LOGO</div>
                    <div style={styles.gamePageHeading}>
                      <span style={styles.gamePageTitle}>FAITES TOURNER LA ROUE ET</span>
                      <span style={styles.gamePageSubtitle}>GAGNEZ DES CADEAUX !</span>
                    </div>
                    <div style={styles.gamePageWheel}>
                      <WheelSVG />
                    </div>
                    <div style={styles.gamePageSteps}>
                      <div style={styles.gamePageStep}>
                        <span style={{ fontSize: 16 }}>📱</span>
                        <span style={styles.gamePageStepText}>SCANNEZ</span>
                      </div>
                      <div style={styles.gamePageStep}>
                        <span style={{ fontSize: 16 }}>🎡</span>
                        <span style={styles.gamePageStepText}>TOURNEZ</span>
                      </div>
                      <div style={styles.gamePageStep}>
                        <span style={{ fontSize: 16 }}>🎁</span>
                        <span style={styles.gamePageStepText}>DÉCOUVREZ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-tabs */}
            <div style={styles.rightTabBar}>
              {[
                { key: "lancement", label: "Lancement" },
                { key: "design", label: "Design" },
              ].map((t) => (
                <button
                  key={t.key}
                  onClick={() => setRightTab(t.key)}
                  style={{
                    ...styles.rightTab,
                    ...(rightTab === t.key ? styles.rightTabActive : {}),
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* TAB: Lancement */}
            {rightTab === "lancement" && (
              <div>
                <div style={styles.gameLink}>
                  <h3 style={styles.gameLinkTitle}>Lien du jeu</h3>
                  <div style={styles.gameLinkInputRow}>
                    <div style={styles.gameLinkInput}>
                      <span style={styles.gameLinkUrl}>https://app.cadeo.fr/game/c31501a4-216d-4ff8-bbed-c...</span>
                    </div>
                    <button style={styles.gameLinkCopy} title="Copier le lien">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    </button>
                  </div>
                  <button style={styles.gameLinkQrBtn}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2h-4M3 15v4a2 2 0 0 0 2 2h4M21 9V5a2 2 0 0 0-2-2h-4M3 9V5a2 2 0 0 1 2-2h4" />
                    </svg>
                    Télécharger le QR code
                  </button>

                  {/* Campaign toggle */}
                  <div style={styles.campaignToggle}>
                    <div style={styles.campaignToggleLeft}>
                      <span style={{
                        ...styles.statusDot,
                        background: campaignLive ? "#059669" : "#d4d4d4",
                      }} />
                      <span style={styles.campaignToggleLabel}>
                        {campaignLive ? "En ligne" : "Hors ligne"}
                      </span>
                    </div>
                    <button
                      style={{
                        ...styles.toggleSwitch,
                        ...(campaignLive ? styles.toggleSwitchOn : {}),
                      }}
                      onClick={() => setCampaignLive(!campaignLive)}
                    >
                      <span style={{
                        ...styles.toggleKnob,
                        ...(campaignLive ? styles.toggleKnobOn : {}),
                      }} />
                    </button>
                  </div>
                </div>

                <div style={styles.validationSection}>
                  <div style={styles.validationHeader}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                    <span style={styles.validationTitle}>Validation du cadeau</span>
                  </div>
                  <p style={styles.validationText}>
                    Le client présente le QR code reçu par e-mail. Scannez-le puis validez.
                  </p>
                  <div style={styles.validationPinHint}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2a2151" strokeWidth="2.5">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>Code PIN : <strong style={{ color: "#2a2151" }}>{"{code_pin}"}</strong></span>
                  </div>
                  <button style={styles.validationBtn} onClick={() => setShowValidationPopup(true)}>
                    Voir le processus →
                  </button>
                </div>
              </div>
            )}

            {/* TAB: Design */}
            {rightTab === "design" && (
              <div style={styles.designCta}>
                <div style={styles.designCtaHeader}>
                  <span style={styles.designCtaIcon}>🎨</span>
                  <div>
                    <div style={styles.designCtaTitle}>Besoin d'un design pro ?</div>
                    <div style={styles.designCtaDesc}>Notre équipe crée votre support sur-mesure, prêt à imprimer.</div>
                  </div>
                </div>
                <div style={styles.designFormats}>
                  <button
                    style={{
                      ...styles.designFormatBtn,
                      ...(selectedFormat === "sticker" ? styles.designFormatBtnActive : {}),
                    }}
                    onClick={() => {
                      setSelectedFormat("sticker");
                      openDesignPopup("sticker");
                    }}
                  >
                    <span style={styles.formatIcon}>🏷️</span>
                    <div>
                      <div style={styles.formatLabel}>Sticker QR</div>
                      <div style={styles.formatDesc}>Idéal tables & comptoir</div>
                    </div>
                  </button>
                  <button
                    style={{
                      ...styles.designFormatBtn,
                      ...(selectedFormat === "affiche" ? styles.designFormatBtnActive : {}),
                    }}
                    onClick={() => {
                      setSelectedFormat("affiche");
                      openDesignPopup("affiche");
                    }}
                  >
                    <span style={styles.formatIcon}>🖼️</span>
                    <div>
                      <div style={styles.formatLabel}>Affiche A5/A4</div>
                      <div style={styles.formatDesc}>Vitrine & salle</div>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Tips CTA */}
            <button id="tips-cta-btn" style={styles.tipsCta} onClick={() => setShowTipsPopup(true)}>
              <span style={styles.tipsCtaIcon}>🚀</span>
              <span>Comment faire exploser vos résultats ?</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: "auto", flexShrink: 0 }}>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </main>

      {/* DESIGN POPUP */}
      {showDesignPopup && (
        <div style={styles.overlay} onClick={closePopup}>
          <div style={styles.popup} onClick={(e) => e.stopPropagation()}>
            {!designConfirmed ? (
              <>
                <div style={styles.popupHeader}>
                  <div>
                    <h3 style={styles.popupTitle}>
                      {popupFormat === "sticker" ? "Choisissez votre sticker" : "Choisissez votre affiche"}
                    </h3>
                    <p style={styles.popupSubtitle}>Sélectionnez un modèle, on s'occupe du reste.</p>
                  </div>
                  <button style={styles.popupClose} onClick={closePopup}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
                <div style={styles.designGrid}>
                  {(designTemplates[popupFormat] || []).map((tpl) => (
                    <button
                      key={tpl.id}
                      style={{
                        ...styles.designCard,
                        ...(selectedDesign === tpl.id ? styles.designCardActive : {}),
                      }}
                      onClick={() => setSelectedDesign(tpl.id)}
                    >
                      <div style={{
                        ...styles.designPreview,
                        background: `linear-gradient(135deg, ${tpl.colors[0]} 0%, ${tpl.colors[0]} 60%, ${tpl.colors[1]} 100%)`,
                      }}>
                        <div style={styles.designPreviewInner}>
                          <div style={{
                            width: 32, height: 32, borderRadius: "50%",
                            background: tpl.colors[2], display: "flex", alignItems: "center",
                            justifyContent: "center", fontSize: 8, fontWeight: 800,
                            color: tpl.colors[0], marginBottom: 6,
                          }}>LOGO</div>
                          <div style={{ color: tpl.colors[2], fontSize: 7, fontWeight: 800, textAlign: "center", lineHeight: 1.3 }}>
                            TOURNEZ LA ROUE
                          </div>
                          <div style={{ width: 36, height: 36, borderRadius: "50%", background: tpl.colors[1], opacity: 0.5, marginTop: 6 }} />
                        </div>
                      </div>
                      <div style={styles.designCardName}>{tpl.name}</div>
                      {selectedDesign === tpl.id && (
                        <div style={styles.designCheck}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                <button
                  style={{
                    ...styles.popupConfirmBtn,
                    ...(!selectedDesign ? styles.popupConfirmBtnDisabled : {}),
                  }}
                  onClick={confirmDesign}
                  disabled={!selectedDesign}
                >
                  Valider ce modèle
                </button>
              </>
            ) : (
              <div style={styles.confirmationView}>
                <div style={styles.confirmIcon}>✓</div>
                <h3 style={styles.confirmTitle}>Demande envoyée !</h3>
                <p style={styles.confirmText}>
                  Nous avons bien reçu votre demande. Vous recevrez votre design sous <strong>24h maximum</strong>.
                </p>
                <button style={styles.confirmCloseBtn} onClick={closePopup}>
                  Fermer
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* VALIDATION POPUP */}
      {showValidationPopup && (
        <div style={styles.overlay} onClick={() => setShowValidationPopup(false)}>
          <div style={styles.validationPopup} onClick={(e) => e.stopPropagation()}>
            <div style={styles.popupHeader}>
              <h3 style={styles.popupTitle}>Comment valider un cadeau ?</h3>
              <button style={styles.popupClose} onClick={() => setShowValidationPopup(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div style={styles.stepsGrid}>
              {/* Step 1 */}
              <div style={{ ...styles.stepCard, background: "#f0eeff" }}>
                <div style={styles.stepNumber}>1</div>
                <h4 style={styles.stepTitle}>Scannez le QR code du cadeau</h4>
                <div style={styles.phoneMockup}>
                  <div style={styles.phoneScreen}>
                    <div style={styles.phoneQrCode}>
                      <div style={styles.qrCodePlaceholder}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5">
                          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                          <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="3" height="3" />
                          <rect x="19" y="14" width="2" height="2" /><rect x="14" y="19" width="2" height="2" />
                          <rect x="19" y="19" width="2" height="2" />
                        </svg>
                      </div>
                      <div style={styles.phoneGiftName}>1 Boisson</div>
                      <div style={styles.phoneLocation}>📍 Le Bistro Gourmet - Paris</div>
                      <div style={styles.phoneStatusBar}>
                        <span style={styles.phoneStatusCheck}>✓ Cadeau disponible</span>
                        <span style={styles.phoneStatusPrice}>13€</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div style={{ ...styles.stepCard, background: "#fef9e7" }}>
                <div style={styles.stepNumber}>2</div>
                <h4 style={styles.stepTitle}>Saisissez votre code PIN</h4>
                <div style={styles.phoneMockup}>
                  <div style={styles.phoneScreen}>
                    <div style={styles.pinScreen}>
                      <div style={styles.pinLockIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a2151" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                      </div>
                      <div style={styles.pinLabel}>Entrez votre code pin</div>
                      <div style={styles.pinDots}>
                        {[1,2,3,4].map(i => <div key={i} style={styles.pinDot} />)}
                      </div>
                      <div style={styles.pinPad}>
                        {[1,2,3,4,5,6,7,8,9,null,0,"⌫"].map((n, i) => (
                          <div key={i} style={{
                            ...styles.pinKey,
                            ...(n === null ? { visibility: "hidden" } : {}),
                          }}>
                            {n}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div style={{ ...styles.stepCard, background: "#fce4f0" }}>
                <div style={styles.stepNumber}>3</div>
                <h4 style={styles.stepTitle}>Remettez le cadeau au client</h4>
                <div style={styles.phoneMockup}>
                  <div style={styles.phoneScreen}>
                    <div style={styles.phoneQrCode}>
                      <div style={styles.phoneGiftIcon}>🎁</div>
                      <div style={styles.phoneGiftName}>1 Boisson</div>
                      <div style={styles.phoneLocation}>📍 Le Bistro Gourmet - Paris</div>
                      <div style={styles.phoneValidateBtn}>Valider ce cadeau →</div>
                      <div style={styles.phoneStatusBar}>
                        <span style={{ ...styles.phoneStatusCheck, color: "#059669" }}>✓ Cadeau validé</span>
                        <span style={styles.phoneStatusPrice}>13€</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ADD OBJECTIVE POPUP */}
      {addPopup && (
        <div style={styles.overlay} onClick={() => setAddPopup(null)}>
          <div style={styles.addPopup} onClick={(e) => e.stopPropagation()}>
            <div style={styles.addPopupHeader}>
              <h3 style={styles.addPopupTitle}>{addPopup.label}</h3>
              <button style={styles.popupClose} onClick={() => setAddPopup(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div style={styles.addPopupBody}>
              <label style={styles.addPopupLabel}>URL {addPopup.platform}</label>
              <input
                type="text"
                value={addUrl}
                onChange={(e) => setAddUrl(e.target.value)}
                placeholder={addPopup.placeholder}
                style={styles.addPopupInput}
              />
            </div>
            <button style={styles.addPopupSubmit} onClick={() => setAddPopup(null)}>
              Ajouter
            </button>
          </div>
        </div>
      )}

      {/* TIPS POPUP */}
      {showTipsPopup && (
        <div style={styles.overlay} onClick={() => setShowTipsPopup(false)}>
          <div style={styles.tipsPopup} onClick={(e) => e.stopPropagation()}>
            <div style={styles.popupHeader}>
              <div>
                <h3 style={styles.popupTitle}>🚀 Explosez vos résultats</h3>
                <p style={styles.popupSubtitle}>Les meilleures pratiques de nos top clients.</p>
              </div>
              <button style={styles.popupClose} onClick={() => setShowTipsPopup(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div style={styles.tipsList}>
              {[
                { icon: "📍", title: "Placez le QR code là où le client attend", desc: "Tables, comptoir caisse, sacs de livraison… plus c'est visible, plus ça joue.", color: "#f0eeff" },
                { icon: "🎁", title: "Offrez un lot qui fait revenir", desc: "Un -10% sur la prochaine visite convertit mieux qu'un dessert offert sur place.", color: "#fef9e7" },
                { icon: "🗣️", title: "Formez votre équipe à en parler", desc: "\"Scannez et tentez de gagner un cadeau !\" — une phrase suffit au moment de l'addition.", color: "#fce4f0" },
                { icon: "⏰", title: "Activez les relances par e-mail", desc: "Les clients qui n'ont pas encore joué reçoivent un rappel automatique après 48h.", color: "#ecfdf5" },
                { icon: "📊", title: "Vérifiez vos stats chaque semaine", desc: "Suivez le taux de scan, le nombre d'avis et ajustez vos lots selon les résultats.", color: "#eff6ff" },
                { icon: "🔄", title: "Renouvelez les lots chaque mois", desc: "La nouveauté relance l'intérêt. Changez les gains régulièrement pour garder l'effet wow.", color: "#fef2f2" },
              ].map((tip, i) => (
                <div key={i} style={{ ...styles.tipItem, background: tip.color }}>
                  <div style={styles.tipIcon}>{tip.icon}</div>
                  <div>
                    <div style={styles.tipTitle}>{tip.title}</div>
                    <div style={styles.tipDesc}>{tip.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ---- SVG ICONS ---- */
function DashboardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </svg>
  );
}
function RoueIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
    </svg>
  );
}
function AppearanceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}
function AvisIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
function CRMIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" y1="8" x2="19" y2="14" />
      <line x1="22" y1="11" x2="16" y2="11" />
    </svg>
  );
}
function HelpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
function PerformanceIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
function SettingsIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function PencilIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}
function PencilSmall() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}
function ArrowUp() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}
function ArrowDown() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
function TrashIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 4 }}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
function ChevronUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function PlatformIcon({ platform }) {
  const colors = {
    Google: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"],
    Instagram: "#E4405F",
    Facebook: "#1877F2",
  };

  if (platform === "Google") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    );
  }
  if (platform === "Instagram") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24">
        <defs>
          <radialGradient id="ig" cx="30%" cy="107%" r="150%">
            <stop offset="0%" stopColor="#fdf497"/>
            <stop offset="5%" stopColor="#fdf497"/>
            <stop offset="45%" stopColor="#fd5949"/>
            <stop offset="60%" stopColor="#d6249f"/>
            <stop offset="90%" stopColor="#285AEB"/>
          </radialGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig)"/>
        <circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="1.5"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
      </svg>
    );
  }
  if (platform === "Facebook") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="#1877F2"/>
        <path d="M16.67 15.47l.55-3.47h-3.4v-2.25c0-.95.47-1.87 1.95-1.87h1.51V4.92s-1.37-.23-2.68-.23c-2.73 0-4.52 1.66-4.52 4.66V12H7.08v3.47h3v8.38a12.1 12.1 0 0 0 3.7 0v-8.38h2.89z" fill="white"/>
      </svg>
    );
  }
  return null;
}

function WheelSVG() {
  const segments = 8;
  const colors = ["#F5A623", "#F7C948", "#F5A623", "#F7C948", "#F5A623", "#F7C948", "#F5A623", "#F7C948"];
  return (
    <svg width="160" height="160" viewBox="0 0 200 200">
      {colors.map((color, i) => {
        const angle = (360 / segments) * i;
        const nextAngle = (360 / segments) * (i + 1);
        const rad1 = (angle * Math.PI) / 180;
        const rad2 = (nextAngle * Math.PI) / 180;
        const x1 = 100 + 95 * Math.cos(rad1);
        const y1 = 100 + 95 * Math.sin(rad1);
        const x2 = 100 + 95 * Math.cos(rad2);
        const y2 = 100 + 95 * Math.sin(rad2);
        return (
          <path
            key={i}
            d={`M100,100 L${x1},${y1} A95,95 0 0,1 ${x2},${y2} Z`}
            fill={color}
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="0.5"
          />
        );
      })}
      <circle cx="100" cy="100" r="18" fill="#2a2151" />
      <circle cx="100" cy="100" r="12" fill="#3d3370" />
      {/* Pointer */}
      <polygon points="100,5 94,22 106,22" fill="#2a2151" />
    </svg>
  );
}

/* ---- STYLES ---- */
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    background: "#fafafa",
    color: "#1a1a1a",
    fontSize: 14,
    overflow: "hidden",
  },

  /* SIDEBAR */
  sidebar: {
    width: 210,
    minWidth: 210,
    background: "#1a1a1a",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "24px 0",
  },
  sidebarInner: {
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    fontSize: 28,
    fontWeight: 900,
    letterSpacing: 2,
    padding: "0 24px 32px",
    fontFamily: "'DM Sans', sans-serif",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "11px 24px",
    background: "none",
    border: "none",
    color: "#aaa",
    cursor: "pointer",
    fontSize: 14,
    textAlign: "left",
    transition: "all 0.15s",
    fontFamily: "inherit",
  },
  navItemActive: {
    color: "#fff",
    background: "rgba(255,255,255,0.1)",
  },
  navIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
  },
  navLabel: {
    whiteSpace: "nowrap",
  },
  userSection: {
    display: "flex",
    flexDirection: "column",
    padding: "12px 24px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    marginTop: 16,
  },
  userRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "#333",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 600,
    color: "#fff",
  },
  userName: {
    fontSize: 14,
    color: "#ddd",
    flex: 1,
  },
  userChevron: {
    color: "#888",
    display: "flex",
  },

  /* MAIN */
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  },

  /* HEADER */
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 32px",
    borderBottom: "1px solid #eee",
    background: "#fff",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  headerBadge: {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: "linear-gradient(135deg, #2a2151, #4a3a8a)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: 800,
    flexShrink: 0,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 2,
  },
  headerMeta: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  headerStatus: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    fontSize: 12,
    fontWeight: 500,
  },
  headerStatusLive: {
    color: "#059669",
  },
  headerStatusOff: {
    color: "#999",
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    flexShrink: 0,
  },
  editIcon: {
    cursor: "pointer",
    opacity: 0.4,
    display: "flex",
  },

  /* EDIT TITLE INLINE */
  editTitleRow: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    border: "2px solid #ddd",
    borderRadius: 10,
    overflow: "hidden",
    background: "#fff",
  },
  editTitleInput: {
    border: "none",
    outline: "none",
    padding: "8px 14px",
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "inherit",
    color: "#1a1a1a",
    flex: 1,
    minWidth: 180,
  },
  editTitleConfirm: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#059669",
    border: "none",
    cursor: "pointer",
  },
  editTitleCancel: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f5f5",
    border: "none",
    borderLeft: "1px solid #eee",
    cursor: "pointer",
  },

  /* ADD OBJECTIVE POPUP */
  addPopup: {
    background: "#fff",
    borderRadius: 16,
    padding: "28px",
    width: 440,
    maxWidth: "92vw",
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
  },
  addPopupHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  addPopupTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#1a1a1a",
    margin: 0,
  },
  addPopupBody: {
    marginBottom: 20,
  },
  addPopupLabel: {
    fontSize: 14,
    fontWeight: 600,
    color: "#555",
    display: "block",
    marginBottom: 8,
  },
  addPopupInput: {
    width: "100%",
    padding: "12px 16px",
    border: "1.5px solid #ddd",
    borderRadius: 10,
    fontSize: 14,
    fontFamily: "inherit",
    color: "#1a1a1a",
    outline: "none",
    boxSizing: "border-box",
  },
  addPopupSubmit: {
    width: "100%",
    padding: "14px",
    background: "#1a1a1a",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 600,
    fontFamily: "inherit",
    cursor: "pointer",
  },

  headerActions: {
    display: "flex",
    gap: 10,
  },
  btnOutline: {
    padding: "9px 18px",
    border: "2px solid #2a2151",
    borderRadius: 8,
    background: "#fff",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
    fontFamily: "inherit",
    transition: "all 0.15s",
  },
  btnPrimary: {
    padding: "9px 18px",
    border: "2px solid #2a2151",
    borderRadius: 8,
    background: "#2a2151",
    color: "#fff",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
    fontFamily: "inherit",
  },

  /* CONTENT */
  contentWrapper: {
    display: "flex",
    flex: 1,
    overflow: "auto",
  },
  leftContent: {
    flex: 1,
    padding: "24px 32px",
    overflow: "auto",
  },

  /* TABS */
  tabBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
    borderBottom: "1px solid #eee",
  },
  tabBarLeft: {
    display: "flex",
    gap: 0,
  },
  tabBarRight: {
    display: "flex",
    gap: 6,
    paddingBottom: 6,
  },
  tabIconBtn: {
    width: 34,
    height: 34,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    border: "1.5px solid #ddd",
    background: "#fff",
    color: "#999",
    cursor: "pointer",
    transition: "all 0.15s",
  },
  tab: {
    padding: "10px 20px",
    background: "none",
    border: "none",
    borderBottom: "2px solid transparent",
    cursor: "pointer",
    fontSize: 14,
    color: "#888",
    fontFamily: "inherit",
    fontWeight: 500,
    transition: "all 0.15s",
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  tabActive: {
    color: "#2a2151",
    borderBottomColor: "#2a2151",
    fontWeight: 600,
    background: "#f3f0ff",
    borderRadius: "8px 8px 0 0",
  },
  tabBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    background: "#e8e8e8",
    color: "#888",
    fontSize: 11,
    fontWeight: 700,
    padding: "0 6px",
  },
  tabBadgeActive: {
    background: "#2a2151",
    color: "#fff",
  },
  tabNumber: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 22,
    height: 22,
    borderRadius: "50%",
    background: "#e8e8e8",
    color: "#888",
    fontSize: 11,
    fontWeight: 700,
    flexShrink: 0,
  },
  tabNumberActive: {
    background: "#2a2151",
    color: "#fff",
  },

  /* SECTIONS */
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 700,
    marginBottom: 16,
  },

  /* OBJECTIVES LIST */
  objectivesList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  objectiveCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 18px",
    background: "#fff",
    border: "1.5px solid #e8e8e8",
    borderRadius: 12,
    transition: "box-shadow 0.15s",
  },
  objectiveLeft: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  objectiveIconWrap: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  objectiveInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  objectiveTitle: {
    fontWeight: 600,
    fontSize: 14,
  },
  objectiveDesc: {
    fontSize: 12.5,
    color: "#888",
  },
  objectiveLink: {
    color: "#5b4fc4",
    textDecoration: "underline",
    cursor: "pointer",
  },
  objectiveActions: {
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  testBtn: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: "6px 12px",
    border: "1.5px solid #ddd",
    borderRadius: 8,
    background: "#fff",
    cursor: "pointer",
    fontSize: 12,
    fontFamily: "inherit",
    fontWeight: 500,
    color: "#555",
    whiteSpace: "nowrap",
  },
  iconBtn: {
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1.5px solid #ddd",
    borderRadius: 8,
    background: "#fff",
    cursor: "pointer",
    color: "#666",
  },
  iconBtnDanger: {
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: 8,
    background: "#e53e3e",
    cursor: "pointer",
    color: "#fff",
  },

  divider: {
    height: 1,
    background: "#eee",
    margin: "24px 0",
  },

  /* ADD OBJECTIVES GRID */
  addObjectiveToggle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "12px 18px",
    border: "1.5px dashed #d4d4d4",
    borderRadius: 12,
    background: "#fafafa",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 15,
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: 12,
    transition: "all 0.15s",
  },
  addObjectiveToggleLeft: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  addObjectivePlus: {
    width: 26,
    height: 26,
    borderRadius: "50%",
    background: "#2a2151",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: 700,
  },
  addObjectiveChevron: {
    color: "#999",
    display: "flex",
    transition: "transform 0.2s",
  },
  addGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },
  addCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "13px 16px",
    border: "1.5px solid #e8e8e8",
    borderRadius: 28,
    background: "#fff",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 13,
    transition: "all 0.15s",
  },
  addCardLeft: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  addCardIcon: {
    fontSize: 18,
    width: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addCardLabel: {
    fontWeight: 500,
    color: "#333",
  },
  addCardArrow: {
    fontSize: 20,
    color: "#aaa",
    fontWeight: 300,
  },

  /* RIGHT SIDEBAR */
  rightSidebar: {
    width: 300,
    minWidth: 300,
    borderLeft: "1px solid #eee",
    padding: "12px 20px 20px",
    background: "#fff",
    overflow: "auto",
  },
  rightTabBar: {
    display: "flex",
    gap: 0,
    borderBottom: "1px solid #eee",
    marginBottom: 18,
    marginTop: 4,
    padding: 0,
  },
  rightTab: {
    flex: 1,
    padding: "9px 6px",
    background: "none",
    border: "none",
    borderBottom: "2px solid transparent",
    cursor: "pointer",
    fontSize: 12.5,
    fontWeight: 500,
    fontFamily: "inherit",
    color: "#999",
    transition: "all 0.15s",
    textAlign: "center",
  },
  rightTabActive: {
    color: "#2a2151",
    borderBottomColor: "#2a2151",
    fontWeight: 600,
  },
  rightSidebarHeader: {
    marginBottom: 20,
    paddingBottom: 12,
    borderBottom: "1.5px solid #eee",
  },
  rightSidebarTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: "#1a1a1a",
  },
  subTabBar: {
    display: "flex",
    gap: 0,
    marginBottom: 20,
  },
  subTab: {
    flex: 1,
    padding: "9px 14px",
    border: "1.5px solid #ddd",
    background: "#fff",
    cursor: "pointer",
    fontSize: 12.5,
    fontFamily: "inherit",
    fontWeight: 500,
    color: "#888",
    transition: "all 0.15s",
  },
  subTabActive: {
    background: "#2a2151",
    color: "#fff",
    borderColor: "#2a2151",
  },

  /* GAME PAGE PREVIEW */
  wheelPreview: {
    marginTop: 8,
    marginBottom: 14,
  },

  /* GAME LINK */
  gameLink: {
    marginBottom: 18,
  },
  gameLinkTitle: {
    fontSize: 15,
    fontWeight: 800,
    color: "#1a1a1a",
    margin: "0 0 10px",
    fontStyle: "italic",
  },
  gameLinkInputRow: {
    display: "flex",
    gap: 0,
    marginBottom: 8,
  },
  gameLinkInput: {
    flex: 1,
    padding: "10px 14px",
    border: "1.5px solid #ddd",
    borderRadius: "24px 0 0 24px",
    background: "#fff",
    overflow: "hidden",
  },
  gameLinkUrl: {
    fontSize: 12,
    color: "#666",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "block",
  },
  gameLinkCopy: {
    width: 42,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1.5px solid #ddd",
    borderLeft: "none",
    borderRadius: "0 24px 24px 0",
    background: "#f9f9f9",
    cursor: "pointer",
    color: "#555",
    transition: "all 0.15s",
  },
  gameLinkQrBtn: {
    width: "100%",
    padding: "10px 16px",
    border: "1.5px solid #ddd",
    borderRadius: 24,
    background: "#fff",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 500,
    fontFamily: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    color: "#333",
    transition: "all 0.15s",
  },

  /* CAMPAIGN TOGGLE */
  campaignToggle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 0",
    marginTop: 8,
    borderTop: "1px solid #f0f0f0",
  },
  campaignToggleLeft: {
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  campaignToggleLabel: {
    fontSize: 12.5,
    fontWeight: 600,
    color: "#555",
  },
  toggleSwitch: {
    width: 38,
    height: 22,
    borderRadius: 11,
    background: "#ddd",
    border: "none",
    cursor: "pointer",
    position: "relative",
    transition: "background 0.2s",
    padding: 0,
  },
  toggleSwitchOn: {
    background: "#059669",
  },
  toggleKnob: {
    width: 18,
    height: 18,
    borderRadius: "50%",
    background: "#fff",
    position: "absolute",
    top: 2,
    left: 2,
    transition: "left 0.2s",
    boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
  },
  toggleKnobOn: {
    left: 18,
  },

  /* DESIGN CTA */
  designCta: {
    background: "#f8f7ff",
    border: "1.5px solid #e0ddf5",
    borderRadius: 12,
    padding: "16px",
    marginBottom: 16,
  },
  designCtaHeader: {
    display: "flex",
    gap: 10,
    alignItems: "flex-start",
    marginBottom: 14,
  },
  designCtaIcon: {
    fontSize: 20,
    flexShrink: 0,
    marginTop: 1,
  },
  designCtaTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: "#2a2151",
    marginBottom: 2,
  },
  designCtaDesc: {
    fontSize: 12,
    color: "#666",
    lineHeight: 1.4,
  },
  designFormats: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  designFormatBtn: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 12px",
    border: "1.5px solid #e0ddf5",
    borderRadius: 10,
    background: "#fff",
    cursor: "pointer",
    fontFamily: "inherit",
    textAlign: "left",
    transition: "all 0.15s",
  },
  designFormatBtnActive: {
    borderColor: "#2a2151",
    background: "#f0eeff",
    boxShadow: "0 0 0 1px #2a2151",
  },
  formatIcon: {
    fontSize: 20,
    flexShrink: 0,
  },
  formatLabel: {
    fontSize: 13,
    fontWeight: 600,
    color: "#1a1a1a",
  },
  formatDesc: {
    fontSize: 11,
    color: "#888",
  },
  designRequestBtn: {
    width: "100%",
    padding: "10px",
    marginTop: 12,
    border: "none",
    borderRadius: 8,
    background: "#2a2151",
    color: "#fff",
    fontSize: 13,
    fontWeight: 600,
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "all 0.15s",
  },

  /* VALIDATION RETRAIT */
  validationSection: {
    marginTop: 16,
    padding: "10px 12px",
    borderRadius: 8,
    borderLeft: "2px solid #ddd",
    background: "transparent",
  },
  validationHeader: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    marginBottom: 4,
  },
  validationTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: "#aaa",
    letterSpacing: 0.2,
  },
  validationBtn: {
    marginTop: 8,
    padding: "5px 0",
    border: "none",
    background: "transparent",
    color: "#2a2151",
    fontSize: 11.5,
    fontWeight: 600,
    fontFamily: "inherit",
    cursor: "pointer",
    opacity: 0.7,
    transition: "opacity 0.15s",
  },
  validationPinHint: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    marginTop: 6,
    fontSize: 11,
    color: "#888",
  },
  validationText: {
    fontSize: 11.5,
    color: "#999",
    lineHeight: 1.5,
    margin: 0,
  },

  /* VALIDATION POPUP */
  validationPopup: {
    background: "#fff",
    borderRadius: 16,
    padding: "28px",
    width: 720,
    maxWidth: "92vw",
    maxHeight: "88vh",
    overflow: "auto",
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
  },
  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 14,
  },
  stepCard: {
    borderRadius: 14,
    padding: "20px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  stepNumber: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    border: "2.5px solid #1a1a1a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 800,
    color: "#1a1a1a",
    marginBottom: 10,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: 800,
    color: "#1a1a1a",
    margin: "0 0 14px",
    lineHeight: 1.3,
  },
  phoneMockup: {
    width: "100%",
    maxWidth: 160,
    margin: "0 auto",
    background: "#1a1a1a",
    borderRadius: 20,
    padding: "8px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
  },
  phoneScreen: {
    background: "#fff",
    borderRadius: 14,
    overflow: "hidden",
    minHeight: 220,
  },
  phoneQrCode: {
    padding: "16px 12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  qrCodePlaceholder: {
    width: 64,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f9f9f9",
    borderRadius: 6,
    marginBottom: 4,
  },
  phoneGiftIcon: {
    fontSize: 28,
    marginBottom: 2,
  },
  phoneGiftName: {
    fontSize: 13,
    fontWeight: 700,
    color: "#1a1a1a",
  },
  phoneLocation: {
    fontSize: 9,
    color: "#888",
  },
  phoneStatusBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "6px 8px",
    background: "#f5f5f5",
    borderRadius: 6,
    marginTop: 6,
  },
  phoneStatusCheck: {
    fontSize: 9,
    fontWeight: 600,
    color: "#2a2151",
  },
  phoneStatusPrice: {
    fontSize: 12,
    fontWeight: 800,
    color: "#1a1a1a",
  },
  phoneValidateBtn: {
    padding: "6px 14px",
    borderRadius: 16,
    background: "#1a1a1a",
    color: "#fff",
    fontSize: 9,
    fontWeight: 700,
    marginTop: 4,
  },
  pinScreen: {
    padding: "16px 12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  pinLockIcon: {
    marginBottom: 2,
  },
  pinLabel: {
    fontSize: 10,
    fontWeight: 600,
    color: "#333",
  },
  pinDots: {
    display: "flex",
    gap: 8,
  },
  pinDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    border: "1.5px solid #ccc",
    background: "#fff",
  },
  pinPad: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 5,
    marginTop: 4,
  },
  pinKey: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    border: "1.5px solid #ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 600,
    color: "#333",
    background: "#fafafa",
  },

  /* POPUP OVERLAY */
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    backdropFilter: "blur(4px)",
  },
  popup: {
    background: "#fff",
    borderRadius: 16,
    padding: "28px",
    width: 520,
    maxWidth: "90vw",
    maxHeight: "85vh",
    overflow: "auto",
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
    animation: "popIn 0.2s ease-out",
  },
  popupHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  popupTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#1a1a1a",
    margin: 0,
    marginBottom: 4,
  },
  popupSubtitle: {
    fontSize: 13,
    color: "#888",
    margin: 0,
  },
  popupClose: {
    width: 36,
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: 10,
    background: "#f3f3f3",
    cursor: "pointer",
    color: "#666",
    flexShrink: 0,
  },
  designGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
    marginBottom: 24,
  },
  designCard: {
    position: "relative",
    border: "2px solid #eee",
    borderRadius: 12,
    padding: 0,
    background: "#fff",
    cursor: "pointer",
    fontFamily: "inherit",
    overflow: "hidden",
    transition: "all 0.15s",
  },
  designCardActive: {
    borderColor: "#2a2151",
    boxShadow: "0 0 0 2px rgba(42,33,81,0.15)",
  },
  designPreview: {
    height: 130,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  designPreviewInner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  designCardName: {
    padding: "10px 12px",
    fontSize: 13,
    fontWeight: 600,
    color: "#333",
    textAlign: "center",
    borderTop: "1px solid #eee",
  },
  designCheck: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: "50%",
    background: "#2a2151",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  popupConfirmBtn: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: 10,
    background: "#2a2151",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "all 0.15s",
  },
  popupConfirmBtnDisabled: {
    background: "#d4d4d4",
    cursor: "not-allowed",
  },
  confirmationView: {
    textAlign: "center",
    padding: "20px 10px",
  },
  confirmIcon: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "#ecfdf5",
    color: "#059669",
    fontSize: 28,
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  confirmTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#1a1a1a",
    margin: "0 0 8px",
  },
  confirmText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 1.6,
    margin: "0 0 24px",
  },
  confirmCloseBtn: {
    padding: "10px 32px",
    border: "2px solid #1a1a1a",
    borderRadius: 8,
    background: "#fff",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
    fontFamily: "inherit",
  },
  gamePageCard: {
    // no extra wrapper needed
  },
  gamePagePhone: {
    background: "#1a1a1a",
    borderRadius: 24,
    padding: "10px",
    boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
  },
  gamePageScreen: {
    background: "linear-gradient(180deg, #2a2151 0%, #1e1740 100%)",
    borderRadius: 16,
    padding: "22px 16px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    minHeight: 340,
  },
  gamePageLogo: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 10,
    fontWeight: 800,
    color: "#2a2151",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  },
  gamePageHeading: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  gamePageTitle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 800,
    fontStyle: "italic",
    letterSpacing: 0.3,
  },
  gamePageSubtitle: {
    color: "#F5A623",
    fontSize: 14,
    fontWeight: 900,
    fontStyle: "italic",
    letterSpacing: 0.3,
  },
  gamePageWheel: {
    display: "flex",
    justifyContent: "center",
    margin: "6px 0",
  },
  gamePageSteps: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    marginTop: "auto",
    paddingTop: 8,
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },
  gamePageStep: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
  },
  gamePageStepText: {
    fontSize: 8,
    fontWeight: 800,
    color: "#e53e3e",
    letterSpacing: 0.8,
  },

  /* TIPS CTA */
  tipsCta: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    width: "100%",
    padding: "12px 14px",
    marginTop: 14,
    border: "1.5px dashed #d4d0e8",
    borderRadius: 10,
    background: "linear-gradient(135deg, #f8f7ff 0%, #fff 100%)",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 12.5,
    fontWeight: 600,
    color: "#2a2151",
    textAlign: "left",
    transition: "all 0.15s",
  },
  tipsCtaIcon: {
    fontSize: 18,
    flexShrink: 0,
  },

  /* TIPS POPUP */
  tipsPopup: {
    background: "#fff",
    borderRadius: 16,
    padding: "28px",
    width: 560,
    maxWidth: "92vw",
    maxHeight: "85vh",
    overflow: "auto",
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
  },
  tipsList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  tipItem: {
    display: "flex",
    gap: 12,
    padding: "14px 16px",
    borderRadius: 12,
    alignItems: "flex-start",
  },
  tipIcon: {
    fontSize: 22,
    flexShrink: 0,
    marginTop: 1,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#1a1a1a",
    marginBottom: 3,
  },
  tipDesc: {
    fontSize: 12.5,
    color: "#666",
    lineHeight: 1.45,
  },
};

export default CadeoDashboard;
