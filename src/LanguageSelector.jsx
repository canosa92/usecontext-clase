import { useLanguage } from "./LanguageContext";


const LanguageSelector=()=>{
    const {language, changeLanguage} = useLanguage();

    const hadleChangeLanguage=(e)=>{
        changeLanguage(e.target.value);
    }

    return(
        <>
        <label>Select Language</label>
        <select value={language} onChange={hadleChangeLanguage}>
            <option value="en">English</option>
            <option value="es">Espanish</option>
            <option value="fr">frances</option>
        </select>
        
        </>    )

}
export default LanguageSelector