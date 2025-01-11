import { Box, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./ranking-card.css";
import { useState } from "react";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";

function RankingCard() {
    const theme = useTheme();
    const [isHoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const hexToRgba = (hex: String, opacity: Number) => {
        // Remove "#" if present
        const cleanHex = hex.replace("#", "");

        const r = parseInt(cleanHex.substring(0, 2), 16);
        const g = parseInt(cleanHex.substring(2, 4), 16);
        const b = parseInt(cleanHex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    const backgroundColor = hexToRgba(theme.palette.text.primary, 0.05);
    const buttons = Array(5).fill(null); // Example: 5 buttons in a row
    return (
        <>
            <h3>Ranking Cards</h3>
            <Grid container spacing={2} style={{ justifyContent: "center" }}>
                {buttons.map((_, index) => (
                    <Grid
                        key={index}
                        size="auto"
                        className="ranking-card-wrapper"
                        style={{
                            backgroundColor:
                                isHoveredIndex === index ? backgroundColor : "transparent",
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Box
                            component="img"
                            className="ranking-card-image"
                            style={{
                                objectFit: "cover",
                                backgroundPosition: "center",
                            }}
                            src="https://images.pexels.com/photos/696996/pexels-photo-696996.jpeg"
                        ></Box>
                        <div className="ranking-card-image-overlay">
                            <div
                                className="ranking-number"
                                style={{
                                    color: "transparent",
                                    WebkitTextStroke: `3px ${theme.palette.secondary.main}`,
                                    lineHeight: "1",
                                }}
                            >
                                {index + 1}
                            </div>
                        </div>
                        <div
                            className="ranking-play-button"
                            style={{
                                backgroundColor: theme.palette.secondary.dark,
                                transition:
                                    "background-color 0.3s ease, opacity 0.5s ease, transform 0.5s ease",
                                opacity: isHoveredIndex === index ? 1 : 0,
                                transform: isHoveredIndex === index ? "scale(1)" : "scale(0.75)",
                            }}
                        >
                            <PlayCircleFilledRoundedIcon
                                className="ranking-play-icon"
                                style={{
                                    color: theme.palette.secondary.main, // Overrides the white color
                                }}
                            />
                        </div>
                        <h4 style={{ textAlign: "center" }}>FirstName LastName</h4>
                        <p style={{ textAlign: "center" }}>List music genre</p>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default RankingCard;
