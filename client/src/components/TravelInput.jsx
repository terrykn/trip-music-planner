import { Button, Menu, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const TravelInput = ({ onGenerateRoute }) => {
    const [from, setFrom] = useState("");
    const [destination, setDestination] = useState("");
    const [fromMenuAnchor, setFromMenuAnchor] = useState(null);
    const [destinationMenuAnchor, setDestinationMenuAnchor] = useState(null);

    const fromOptions = ["Option 1", "Option 2", "Option 3"]; 
    const destinationOptions = ["Option A", "Option B", "Option C"];

    
    const handleFromMenuOpen = (event) => {
        setFromMenuAnchor(event.currentTarget);
    };

    const handleFromMenuClose = (option) => {
        if (option) {
            setFrom(option);
        }
        setFromMenuAnchor(null);
    };

    const handleDestinationMenuOpen = (event) => {
        setDestinationMenuAnchor(event.currentTarget);
    };

    const handleDestinationMenuClose = (option) => {
        if (option) {
            setDestination(option);
        }
        setDestinationMenuAnchor(null);
    };

    const handleGenerateRoute = () => {
        onGenerateRoute(from, destination);
    }

    return(
        <div>
            <div>
                <Button
                    variant="outlined"
                    sx={{ margin: 1 }}
                    onClick={handleFromMenuOpen}
                >
                    From: {from || "Select"}
                </Button>
                <Menu
                    anchorEl={fromMenuAnchor}
                    open={Boolean(fromMenuAnchor)}
                    onClose={() => handleFromMenuClose(null)}
                >
                    {fromOptions.map((option) => (
                        <MenuItem
                            key={option}
                            onClick={() => handleFromMenuClose(option)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>

                <Button
                    variant="outlined"
                    sx={{ margin: 1 }}
                    onClick={handleDestinationMenuOpen}
                >
                    Destination: {destination || "Select"}
                </Button>
                <Menu
                    anchorEl={destinationMenuAnchor}
                    open={Boolean(destinationMenuAnchor)}
                    onClose={() => handleDestinationMenuClose(null)}
                >
                    {destinationOptions.map((option) => (
                        <MenuItem
                            key={option}
                            onClick={() => handleDestinationMenuClose(option)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>

                <Button sx={{ margin: 1 }} onClick={handleGenerateRoute}>
                    Go <FmdGoodIcon sx={{ marginLeft: 1 }}/>
                </Button>
            </div>

            
        </div>
    )
}
export default TravelInput;