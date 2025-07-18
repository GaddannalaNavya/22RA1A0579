import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";

function ShortenerPage() {
  const [urls, setUrls] = useState([""]); // up to 5 URLs
  const [shortenedLinks, setShortenedLinks] = useState([]);

  const addField = () => {
    if (urls.length < 5) setUrls([...urls, ""]);
  };

  const handleChange = (index, value) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const shortenUrls = () => {
    const results = urls.map((longUrl) => ({
      longUrl,
      shortCode: uuidv4().slice(0, 6),
      createdAt: new Date(),
      expiry: new Date(Date.now() + 30 * 60 * 1000), // default 30 min
      clicks: []
    }));
    setShortenedLinks(results);
    localStorage.setItem("shortenedLinks", JSON.stringify(results));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>URL Shortener</Typography>

      {urls.map((url, idx) => (
        <TextField
          key={idx}
          label={`Enter URL ${idx + 1}`}
          variant="outlined"
          value={url}
          onChange={(e) => handleChange(idx, e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
      ))}

      {urls.length < 5 && (
        <Button onClick={addField} variant="outlined" sx={{ mr: 2 }}>
          + Add More
        </Button>
      )}

      <Button variant="contained" onClick={shortenUrls}>
        Shorten URLs
      </Button>

      {shortenedLinks.map((link, idx) => (
        <Card key={idx} sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="body1">
              Original: {link.longUrl}
            </Typography>
            <Typography variant="body2" color="primary">
              Short: http://localhost:3000/{link.shortCode}
            </Typography>
            <Typography variant="caption">
              Expires: {link.expiry.toString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ShortenerPage;
