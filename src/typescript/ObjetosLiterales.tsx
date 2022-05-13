interface Persona{
    nombreCompleto: string;
    edad: number;
    direccion:Direccion
}
interface Direccion{
    pais:string;
    casaNo: number;
}


export default function ObjetosLiterales() {

    const persona:Persona = {
        nombreCompleto:'Fernando',
        edad: 35,
        direccion: {
            pais: 'Canadá',
            casaNo: 25
        }
    }
    
  return (
    <>
    <h3>Objetos Literales</h3>
    <code>
        <pre>
            {JSON.stringify(persona, null, 2)}
        </pre>
    </code>
    </>
  )
}
