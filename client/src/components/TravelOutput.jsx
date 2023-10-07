import { Card } from "@mui/material";
import { Button } from "@mui/material";

import './Components.css'
import { useState } from "react";

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PinDropIcon from '@mui/icons-material/PinDrop';
import FlagIcon from '@mui/icons-material/Flag';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

import TravelMusic from "./TravelMusic";

const TravelOutput = (props) => {
    const travelTime = props.travelTime
    const start = props.start
    const end = props.end

    const [playlist, setPlaylist] = useState(["1. Choose your starting and ending stops.", "2. Click GO to find out your estimated travel time.", "3. Generate a music playlist for your trip!"]);

    const generateRandomPlaylist = (duration) => {
        const songs = [
            "Song 1",
            "Song 2",
            "Song 3",
            "etc.",
        ]

        const generatedPlaylist = [];
            generatedPlaylist.push(songs[0]);
        return generatedPlaylist;
    }

    

    const handleGeneratePlaylist = () => {
        const generatedPlaylist = generateRandomPlaylist(travelTime);
        setPlaylist(generatedPlaylist);
    }

    return(
        <div>
            <div>
                <Card variant="outlined" sx={{ marginTop: '5vh', marginBottom: '5vh', marginLeft: '30vw', marginRight: '30vw', padding: 2, textAlign: 'left'}}>
                    <p className="TravelOutputItem"><PinDropIcon sx={{ marginRight: .5 }}/> Starting stop: {start}</p>
                    <p className="TravelOutputItem"><FlagIcon sx={{ marginRight: .5 }} /> Ending stop: {end}</p>
                    <p className="TravelOutputItem"><AccessAlarmIcon sx={{ marginRight: .5 }}/> Estimated travel time: {travelTime} minutes</p>
                </Card>
            </div>

            <Button sx={{ margin: 1 }} onClick={handleGeneratePlaylist}>
                Generate Music Playlist <MusicNoteIcon sx={{ marginLeft: .8 }}/>
            </Button>

            <TravelMusic playlist={playlist} />
        </div>
    )
}
export default TravelOutput;