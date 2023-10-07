import { Card } from "@mui/material";
import './Components.css';

const TravelMusic = ({ playlist }) => {
    return(
        <div>
            <Card variant="outlined" sx={{ marginTop: '5vh', marginBottom: '5vh', marginLeft: '30vw', marginRight: '30vw', padding: 2, textAlign: 'left' }}>
                <ul>
                    {playlist.map((song) => (
                        <li key={song.id}>
                            {song}
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    )
}

export default TravelMusic;