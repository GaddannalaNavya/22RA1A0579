import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

function StatsPage() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem("shortenedLinks")) || [];
    setLinks(savedLinks);
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Statistics</Typography>
      {links.length === 0 && <Typography>No URLs shortened yet.</Typography>}

      {links.map((link, idx) => (
        <Card key={idx} sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="body1">Short: {link.shortCode}</Typography>
            <Typography variant="body2">Original: {link.longUrl}</Typography>
            <Typography variant="body2">
              Clicks: {link.clicks.length}
            </Typography>
            <Typography variant="caption">
              Expiry: {link.expiry.toString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default StatsPage;
