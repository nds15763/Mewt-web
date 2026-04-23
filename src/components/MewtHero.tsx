"use client";

import { useEffect, useRef } from "react";

const pins = [
  {
    src: "/assets/cat-tabby.png",
    top: 100,
    left: 240,
    size: 72,
    rot: -6,
    likes: 99,
    user: "@miku",
  },
  {
    src: "/assets/cat-blackwhite.png",
    top: 260,
    left: 80,
    size: 62,
    rot: 5,
    likes: 42,
  },
  {
    src: "/assets/cat-rock.png",
    top: 420,
    left: 350,
    size: 80,
    rot: -3,
    likes: 156,
    user: "@sora",
  },
  {
    src: "/assets/cat-stare.png",
    top: 180,
    left: 580,
    size: 58,
    rot: 8,
  },
  {
    src: "/assets/cat-eating.png",
    top: 430,
    left: 620,
    size: 68,
    rot: -4,
    likes: 67,
  },
];

const chips = [
  { icon: "🔊", label: "猫語翻訳" },
  { icon: "📍", label: "猫マップ" },
  { icon: "🐾", label: "猫日記" },
];

const stats = [
  { num: "120K+", label: "ユーザー" },
  { num: "85K", label: "登録された猫" },
  { num: "4.8★", label: "App Store" },
];

export const MewtHero = () => {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fit = () => {
      const stage = stageRef.current;
      if (!stage) return;
      const scale = Math.min(
        window.innerWidth / 1440,
        window.innerHeight / 900,
      );
      stage.style.transform = `scale(${scale})`;
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div
      style={{
        background: "#ffffff",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        ref={stageRef}
        style={{
          width: 1440,
          height: 900,
          transformOrigin: "center center",
          overflow: "hidden",
          background: "#ffffff",
          position: "relative",
          color: "#1a1a1a",
          fontFamily:
            "'Hiragino Sans','PingFang SC','Noto Sans JP',sans-serif",
        }}
      >
        {/* 背景网格纹理（地图底感） */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at 70% 50%, #000 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 70% 50%, #000 30%, transparent 75%)",
          }}
        />

        {/* NAV */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 56px",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/icon.png"
                alt="Mewt"
                style={{ width: "100%", height: "100%", display: "block" }}
              />
            </div>
            <span
              className="font-display"
              style={{ fontSize: 22, letterSpacing: 0.5 }}
            >
              MEWT
            </span>
            <span
              style={{
                marginLeft: 8,
                fontSize: 11,
                background: "#1a1a1a",
                color: "#ddff1e",
                padding: "3px 8px",
                borderRadius: 10,
                fontWeight: 700,
                letterSpacing: 0.5,
              }}
            >
              BETA
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 28,
              fontSize: 13,
              fontWeight: 600,
              color: "#555",
            }}
          >
            <span style={{ cursor: "pointer" }}>猫語翻訳</span>
            <span style={{ cursor: "pointer" }}>猫マップ</span>
            <span style={{ cursor: "pointer" }}>コミュニティ</span>
            <span style={{ cursor: "pointer" }}>お問い合わせ</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 12,
              color: "#666",
            }}
          >
            <span>JP / EN</span>
          </div>
        </nav>

        {/* MAIN */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "560px 1fr",
            gap: 40,
            padding: "40px 56px 0",
            position: "relative",
            zIndex: 5,
          }}
        >
          {/* LEFT — 信息区 */}
          <div style={{ paddingTop: 40 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#fff",
                border: "1.5px solid #1a1a1a",
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 700,
                marginBottom: 28,
                boxShadow: "3px 3px 0 #1a1a1a",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#83BD5A",
                  boxShadow: "0 0 0 3px rgba(131,189,90,0.25)",
                }}
              />
              位置情報ベースの猫SNS · iOS / Android
            </div>

            <h1
              className="font-display"
              style={{
                fontSize: 110,
                lineHeight: 0.88,
                margin: "0 0 24px",
                letterSpacing: 0.5,
              }}
            >
              <span>Hear </span>
              <span style={{ color: "#83BD5A" }}>Meow</span>,<br />
              <span style={{ color: "#834DFF" }}>Map </span>
              <span>Cats.</span>
            </h1>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "#444",
                maxWidth: 460,
                margin: "0 0 36px",
                fontWeight: 500,
              }}
            >
              街で出会った猫を撮って、地図にピン。
              <br />
              鳴き声をAIが翻訳、同じ街の猫好きと、ゆるくつながる。
            </p>

            <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
              <a
                href="https://apps.apple.com/app/id6756517016"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#1a1a1a",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "14px 22px",
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  cursor: "pointer",
                  boxShadow: "0 6px 0 #000, 0 10px 24px rgba(0,0,0,0.15)",
                  transition: "transform 0.1s",
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div style={{ textAlign: "left" }}>
                  <div
                    style={{
                      fontSize: 10,
                      opacity: 0.7,
                      letterSpacing: 0.5,
                    }}
                  >
                    Download on the
                  </div>
                  <div
                    style={{ fontSize: 16, fontWeight: 800, marginTop: -2 }}
                  >
                    App Store
                  </div>
                </div>
              </a>
              <button
                style={{
                  background: "#1a1a1a",
                  color: "#fff",
                  border: "none",
                  padding: "14px 22px",
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  cursor: "pointer",
                  boxShadow: "0 6px 0 #000, 0 10px 24px rgba(0,0,0,0.15)",
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M3.6 2.3C3.2 2.6 3 3.1 3 3.9v16.2c0 .8.2 1.3.6 1.6l.1.1L12 12.1v-.2L3.6 2.3z"
                  />
                  <path
                    fill="#FBBC04"
                    d="M14.9 14.9L12 12.1v-.2l2.9-2.9.1.1 3.4 1.9c1 .5 1 1.5 0 2.1l-3.5 1.8z"
                  />
                  <path
                    fill="#34A853"
                    d="M15 14.8L12 11.9 3.6 20.3c.3.3.9.4 1.5.1L15 14.8z"
                  />
                  <path
                    fill="#4285F4"
                    d="M15 9.2L5.1 3.6c-.6-.4-1.2-.3-1.5.1L12 12.1l3-2.9z"
                  />
                </svg>
                <div style={{ textAlign: "left" }}>
                  <div
                    style={{
                      fontSize: 10,
                      opacity: 0.7,
                      letterSpacing: 0.5,
                    }}
                  >
                    Get it on
                  </div>
                  <div
                    style={{ fontSize: 16, fontWeight: 800, marginTop: -2 }}
                  >
                    Google Play
                  </div>
                </div>
              </button>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {chips.map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    padding: "9px 14px",
                    borderRadius: 22,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#333",
                  }}
                >
                  <span style={{ fontSize: 16 }}>{c.icon}</span>
                  {c.label}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: 40,
                marginTop: 36,
                paddingTop: 24,
                borderTop: "1px dashed rgba(0,0,0,0.15)",
                alignItems: "flex-start",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div
                    className="font-display"
                    style={{
                      fontSize: 26,
                      lineHeight: 1,
                      height: 26,
                      color: "#1a1a1a",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#777",
                      marginTop: 8,
                      lineHeight: 1,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — 地图 + 手机 */}
          <div style={{ position: "relative", height: 740 }}>
            <div
              style={{
                position: "absolute",
                inset: "0 -40px 60px 0",
                borderRadius: 28,
                background: "#eef3e2",
                overflow: "hidden",
                boxShadow: "0 20px 60px -10px rgba(0,0,0,0.12)",
                border: "1.5px solid rgba(0,0,0,0.06)",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 820 740"
                style={{ position: "absolute", inset: 0 }}
              >
                <path
                  d="M -20 520 Q 120 480 260 510 T 540 500 Q 680 490 840 520 L 840 760 L -20 760 Z"
                  fill="#cfe0e8"
                />
                <path
                  d="M 520 80 Q 620 70 700 120 Q 740 200 700 260 Q 620 290 540 260 Q 490 200 520 80 Z"
                  fill="#c6dca7"
                  opacity="0.8"
                />
                <path
                  d="M 60 180 Q 130 160 180 190 Q 210 230 180 270 Q 120 290 70 270 Q 40 230 60 180 Z"
                  fill="#c6dca7"
                  opacity="0.8"
                />
                <g
                  stroke="#fff"
                  strokeWidth="18"
                  fill="none"
                  strokeLinecap="round"
                >
                  <path d="M 0 380 L 820 400" />
                  <path d="M 380 0 L 400 740" />
                  <path d="M 0 140 Q 200 150 400 140 T 820 150" />
                  <path d="M 160 0 L 180 740" />
                  <path d="M 600 0 L 620 740" />
                  <path d="M 0 600 L 820 620" />
                </g>
                <g
                  stroke="rgba(0,0,0,0.06)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 4"
                >
                  <path d="M 0 380 L 820 400" />
                  <path d="M 380 0 L 400 740" />
                </g>
                <g
                  fill="#ffffff"
                  stroke="rgba(0,0,0,0.08)"
                  strokeWidth="1"
                >
                  <rect x="220" y="200" width="60" height="50" rx="3" />
                  <rect x="290" y="180" width="40" height="70" rx="3" />
                  <rect x="220" y="430" width="80" height="60" rx="3" />
                  <rect x="440" y="420" width="60" height="70" rx="3" />
                  <rect x="510" y="430" width="50" height="40" rx="3" />
                  <rect x="660" y="400" width="60" height="80" rx="3" />
                  <rect x="660" y="490" width="80" height="50" rx="3" />
                  <rect x="440" y="500" width="50" height="50" rx="3" />
                </g>
              </svg>

              {pins.map((p, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: p.top,
                    left: p.left,
                    width: p.size,
                    height: p.size,
                    transform: `rotate(${p.rot}deg)`,
                    filter: "drop-shadow(0 8px 14px rgba(0,0,0,0.18))",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 14,
                      background: "#fff",
                      padding: 4,
                      position: "relative",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.src}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 10,
                      }}
                    />
                    {p.likes && (
                      <div
                        style={{
                          position: "absolute",
                          top: -6,
                          right: -6,
                          background: "#ff4d6d",
                          color: "#fff",
                          fontSize: 9,
                          fontWeight: 800,
                          padding: "3px 6px",
                          borderRadius: 10,
                          border: "2px solid #fff",
                        }}
                      >
                        ♥ {p.likes}
                      </div>
                    )}
                    <div
                      style={{
                        position: "absolute",
                        bottom: -8,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "8px solid transparent",
                        borderRight: "8px solid transparent",
                        borderTop: "10px solid #fff",
                      }}
                    />
                  </div>
                </div>
              ))}

              <div
                style={{
                  position: "absolute",
                  top: 310,
                  left: 480,
                  background: "#1a1a1a",
                  color: "#fff",
                  padding: "10px 14px",
                  borderRadius: 16,
                  borderBottomLeftRadius: 4,
                  fontSize: 12,
                  fontWeight: 700,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 20 }}>😻</span>
                <div>
                  <div
                    style={{
                      color: "#ddff1e",
                      fontSize: 10,
                      letterSpacing: 0.5,
                    }}
                  >
                    MEOW TRANSLATED
                  </div>
                  <div>
                    &quot;遊ぼうよ！&quot;{" "}
                    <span style={{ opacity: 0.5 }}>· 遊ぼう</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 550,
                  left: 420,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: "#4a8fff",
                  border: "4px solid #fff",
                  boxShadow:
                    "0 0 0 6px rgba(74,143,255,0.25), 0 4px 12px rgba(0,0,0,0.2)",
                }}
              />
            </div>

            {/* 手机 mockup */}
            <div
              style={{
                position: "absolute",
                bottom: -20,
                right: -10,
                width: 240,
                height: 490,
                borderRadius: 36,
                background: "#1a1a1a",
                padding: 8,
                boxShadow:
                  "0 30px 60px -15px rgba(0,0,0,0.4), 0 0 0 2px rgba(0,0,0,0.8)",
                transform: "rotate(4deg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 28,
                  overflow: "hidden",
                  background: "#83BD5A",
                  position: "relative",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/cat-stare.png"
                  alt=""
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7))",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: "14px 20px 8px",
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  <span>9:41</span>
                  <span>●●●</span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 14,
                    left: 12,
                    right: 12,
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 18,
                    padding: "12px 14px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "#ddff1e",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                      }}
                    >
                      🐱
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 800,
                          color: "#1a1a1a",
                        }}
                      >
                        三毛ちゃん
                      </div>
                      <div style={{ fontSize: 9, color: "#888" }}>
                        恵比寿公園 · 120m
                      </div>
                    </div>
                    <div
                      style={{
                        background: "#83BD5A",
                        color: "#fff",
                        fontSize: 9,
                        fontWeight: 800,
                        padding: "3px 6px",
                        borderRadius: 8,
                      }}
                    >
                      +Pin
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1a1a1a",
                      color: "#fff",
                      padding: "8px 10px",
                      borderRadius: 10,
                      fontSize: 10,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span style={{ fontSize: 14 }}>🔊</span>
                    <span style={{ color: "#ddff1e" }}>
                      &quot;お腹すいた〜&quot;
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                top: 420,
                left: 0,
                fontSize: 12,
                color: "#834DFF",
                fontWeight: 700,
                fontStyle: "italic",
                transform: "rotate(-4deg)",
              }}
            >
              ↑ 友達が Pin した猫
            </div>
          </div>
        </div>

        {/* 底部链接 */}
        <div
          style={{
            position: "absolute",
            left: 56,
            bottom: 20,
            display: "flex",
            gap: 14,
            fontSize: 11,
            color: "#999",
            zIndex: 10,
          }}
        >
          <a
            href="#terms"
            style={{ color: "#999", textDecoration: "none" }}
          >
            Terms of Use
          </a>
          <span>·</span>
          <a
            href="#privacy"
            style={{ color: "#999", textDecoration: "none" }}
          >
            Privacy Policy
          </a>
          <span>·</span>
          <span>© 2026 Mewt</span>
        </div>
      </div>
    </div>
  );
};
