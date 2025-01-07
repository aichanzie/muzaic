import "./avatar.css";
import Grid from "@mui/material/Grid2";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import { Box, useTheme } from "@mui/material";
import { useState } from "react";

function CreatorAvatar() {
    const theme = useTheme();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track which button is hovered

    // Function to convert hex to rgba
    const hexToRgba = (hex: any, opacity: any) => {
        // Remove "#" if present
        const cleanHex = hex.replace("#", "");
        const r = parseInt(cleanHex.substring(0, 2), 16);
        const g = parseInt(cleanHex.substring(2, 4), 16);
        const b = parseInt(cleanHex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    const backgroundColor = hexToRgba(theme.palette.text.primary, 0.05);
    const buttons = Array(6).fill(null); // Example: 5 buttons in a row
    return (
        <>
            <Grid container spacing={1} style={{ justifyContent: "center" }}>
                {buttons.map((_, index) => (
                    <Grid
                        key={index}
                        className="avatar-wrapper"
                        style={{
                            backgroundColor:
                                hoveredIndex === index ? backgroundColor : "transparent",
                        }}
                        onMouseEnter={() => setHoveredIndex(index)} // Set hover index
                        onMouseLeave={() => setHoveredIndex(null)} // Reset hover index
                    >
                        <Box
                            component="img"
                            className="image-container"
                            style={{
                                objectFit: "cover",
                                backgroundPosition: "center",
                            }}
                            src="https://images.pexels.com/photos/696996/pexels-photo-696996.jpeg"
                        ></Box>
                        <div
                            className="avatar-play-button"
                            style={{
                                backgroundColor: theme.palette.secondary.dark,
                                transition:
                                    "background-color 0.3s ease, opacity 0.5s ease, transform 0.5s ease",
                                opacity: hoveredIndex === index ? 1 : 0,
                                transform: hoveredIndex === index ? "scale(1)" : "scale(0.75)",
                            }}
                        >
                            <PlayCircleFilledRoundedIcon
                                className="avatar-play-icon"
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

export default CreatorAvatar;
