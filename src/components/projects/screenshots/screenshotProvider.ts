import LetsHaveAPicnicScreenshot from "./LetsHaveAPicnicScreenshot1.png";
import MushroomMadnessScreenshot from "./MushroomMadness1.png";
import AverageNegativeScreenshot from "./AverageNegative4.png";
import StewartCollinsSiteScreenshot from "./MySite.png";
import CactusJumperScreenshot from "./RTTMC1.png";


const getScreenshot = (projectName: string | null) => {
    switch (projectName) {
        case "Let's Have A Picnic App":
            return LetsHaveAPicnicScreenshot;
        case "Mushroom Madness Game":
            return MushroomMadnessScreenshot;
        case "Average Negative Web Application":
            return AverageNegativeScreenshot;
        case "Stewart Collins .net":
            return StewartCollinsSiteScreenshot;
        case "Cactus Jumper Game":
            return CactusJumperScreenshot;
        default:
            return undefined;
    }
};

export default getScreenshot;