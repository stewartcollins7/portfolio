import CLogo from "./c.png";
import CSharpLogo from "./csharp.png";
import CssLogo from "./css.png";
import GithubLogo from "./github.png";
import HaskellLogo from "./haskell.png";
import HtmlLogo from "./html.png";
import JavaLogo from "./Java.png";
import JavascriptLogo from "./javascript.png";
import KotlinLogo from "./kotlin.png";
import SqlLogo from "./sql.png";

const getLogo = (logoName: string | null) => {
    switch (logoName) {
        case "Kotlin":
            return KotlinLogo;
        case "C#":
            return CSharpLogo;
        case "SQL":
            return SqlLogo;
        case "Javascript":
            return JavascriptLogo;
        case "HTML":
            return HtmlLogo;
        case "CSS":
            return CssLogo;
        case "Java":
            return JavaLogo;
        case "Haskell":
            return HaskellLogo;
        case "Github":
            return GithubLogo;
        case "C":
            return CLogo;
        default:
            return undefined;
    }
};

export default getLogo;