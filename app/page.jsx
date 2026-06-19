export default function HomePage() {
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px" }}>
      <div
        style={{
          background: "white",
          borderRadius: 24,
          padding: 40,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <p style={{ color: "#0369a1", fontWeight: 700, marginBottom: 12 }}>
          GetMeEmployed.com
        </p>
        <h1 style={{ fontSize: 48, lineHeight: 1.1, margin: 0 }}>
          Job-ready short courses that help people move from interest to employment.
        </h1>
        <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.6, color: "#475569" }}>
          Explore practical bootcamps in data, Power BI, cloud, cybersecurity, AI, and digital skills.
        </p>
        <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a
            href="#"
            style={{
              background: "#0f172a",
              color: "white",
              padding: "14px 22px",
              borderRadius: 14,
              fontWeight: 600,
            }}
          >
            Explore courses
          </a>
          <a
            href="#"
            style={{
              border: "1px solid #cbd5e1",
              color: "#0f172a",
              padding: "14px 22px",
              borderRadius: 14,
              fontWeight: 600,
              background: "white",
            }}
          >
            Join waitlist
          </a>
        </div>
      </div>
    </main>
  );
}
