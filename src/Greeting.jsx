
import { useLanguage } from "./LanguageContext";

const Greeting=()=>{
    const {language}=useLanguage();
    const greeting={
        en:'hello',
        es:'hola',
        fr:'bonjour'
    }

    return (
        <>
        <h2>{greeting[language]}</h2>
        </>
    )
}

export default Greeting