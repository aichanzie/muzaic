import { Box, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./album-card.css";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import { useState } from "react";

function AlbumCard() {
    const theme = useTheme();
    const [isHoveredIndex, setHoveredIndex] = useState<Number | null>(null);

    const hexToRgba = (hex: String, opacity: Number) => {
        // Remove "#" if present
        const cleanHex = hex.replace("#", "");

        const r = parseInt(cleanHex.substring(0, 2), 16);
        const g = parseInt(cleanHex.substring(2, 4), 16);
        const b = parseInt(cleanHex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    const backgroundColor = hexToRgba(theme.palette.text.primary, 0.05);
    const albums = Array(5).fill(1);
    return (
        <>
            <h3>Album Cards</h3>
            <Grid container spacing={2} style={{ justifyContent: "center" }}>
                {albums.map((_, index) => (
                    <Grid
                        key={index}
                        size="auto"
                        className="album-card-wrapper"
                        style={{
                            backgroundColor:
                                isHoveredIndex === index ? backgroundColor : "transparent",
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div style={{ display: "flex" }}>
                            <Box
                                component="img"
                                className="album-card-cover-image"
                                style={{
                                    backgroundPosition: "center",
                                    objectFit: "cover",
                                    display: "inline",
                                    zIndex: 1,
                                    width: "160px",
                                    height: "160px",
                                    borderRadius: "5px",
                                }}
                                src="https://images.pexels.com/photos/696996/pexels-photo-696996.jpeg"
                            ></Box>
                            <div
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    backgroundColor: "#191919",
                                    borderRadius: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: "-75px",
                                    padding: "auto",
                                    alignSelf: "center",
                                    boxShadow:
                                        isHoveredIndex === index
                                            ? `0 0 20px 5px ${hexToRgba("#0D0D0D", 0.6)}`
                                            : `0 0 20px 2px ${hexToRgba("#0D0D0D", 0)}`,
                                    transition: "box-shadow 1s ease-out, opacity 0.5s",
                                    // transform: isHoveredIndex === 1 ? "scale(1)" : "scale(0.8)",
                                }}
                            >
                                <Box
                                    component="img"
                                    style={{
                                        objectFit: "cover",
                                        backgroundPosition: "center",
                                        width: "40%",
                                        height: "40%",
                                        borderRadius: "50%",
                                    }}
                                    src="https://images.pexels.com/photos/696996/pexels-photo-696996.jpeg"
                                ></Box>
                                <div
                                    style={{
                                        position: "absolute",
                                        width: "10px",
                                        height: "10px",
                                        backgroundColor: theme.palette.primary.main,
                                        borderRadius: "50%",
                                    }}
                                ></div>
                            </div>
                            <div
                                className="album-play-button"
                                style={{
                                    backgroundColor: theme.palette.secondary.dark,
                                    transition:
                                        "background-color 0.3s ease, opacity 0.5s ease, transform 0.5s ease",
                                    opacity: isHoveredIndex === index ? 1 : 0,
                                    transform:
                                        isHoveredIndex === index ? "scale(1)" : "scale(0.75)",
                                }}
                            >
                                <PlayCircleFilledRoundedIcon
                                    className="album-play-icon"
                                    style={{
                                        color: theme.palette.secondary.main, // Overrides the white color
                                    }}
                                />
                            </div>
                        </div>
                        <h4 style={{ textAlign: "center" }}>Album Name</h4>
                        <p style={{ textAlign: "center" }}>Music genre</p>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default AlbumCard;
