import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RedirectPage() {
  const { shortCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem("shortenedLinks")) || [];
    const link = savedLinks.find((l) => l.shortCode === shortCode);

    if (!link) {
      alert("Invalid or expired link");
      navigate("/");
      return;
    }

    // Add click info
    link.clicks.push({
      time: new Date(),
      source: document.referrer,
      location: "Unknown"
    });

    // Save updated clicks
    localStorage.setItem("shortenedLinks", JSON.stringify(savedLinks));

    // Redirect
    window.location.href = link.longUrl;
  }, [shortCode, navigate]);

  return <p>Redirecting...</p>;
}

export default RedirectPage;
