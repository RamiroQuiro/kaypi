import ContenedoresOpcionesHero from "./ContenedoresOpcionesHero";

export const selectorDiseño=(name,heroTarget)=>{
    switch (name) {
        case name=="superior":
           return <ContenedoresOpcionesHero
            heroTarget={heroTarget}
            />
        case name=="fondo":
    return        <ContenedoresOpcionesHero
            heroTarget={heroTarget}
            />
        case name=="letras":
          return  <ContenedoresOpcionesHero
            heroTarget={heroTarget}
            />
    
        default:
            break;
    }
}