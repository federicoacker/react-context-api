import { useState } from "react"

function Footer() {
    const [clicked, setClicked] = useState(false);


    return (
        <>

            <footer className={clicked ? "border-top border-white expanded-footer" : "border-top border-white base-footer"}>
                <div className="w-75 mx-auto d-flex flex-column justify-content-center h-100">
                    <button className="btn btn-danger" onClick={() => setClicked(!clicked)}>Mostra Disclaimer</button>
                    {clicked &&
                        <div className="disclaimer px-2">
                            <h3>⚠️ DISCLAIMER LEGALE (E SCARICABARILE UFFICIALE) ⚠️</h3>
                            <p>Acquistando su questo sito,
                                accetti tacitamente di avere soldi da buttare
                                e una scarsa considerazione per le tue scelte
                                di vita.
                                Ti preghiamo di leggere attentamente
                                (o anche no, tanto non cambia nulla)
                            </p>
                            <ul>
                                <li>
                                    <strong>Inutilità Garantita al 100%:</strong>
                                    <p>
                                        Certifichiamo che ogni singolo prodotto venduto su questa
                                        piattaforma non serve assolutamente a nulla.
                                        Se un articolo dovesse accidentalmente rivelarsi utile,
                                        ti preghiamo di segnalarcelo: lo ritireremo dal mercato per difettarlo a dovere.
                                    </p>
                                </li>
                                <li>
                                    <strong>Politica di Reso e Rimborsi:</strong>
                                    <p>
                                        La classica formula "Soddisfatti o Rimborsati"
                                        è ufficialmente sostituita dalla nostra
                                        "Insoddisfatti e Rassegnati".
                                        I rimborsi, se mai verranno presi in considerazione,
                                        saranno erogati in monete del Monopoli o
                                        tramite pacche virtuali sulla spalla. Forse.
                                    </p>
                                </li>
                                <li>
                                    <strong>Spedizioni a Caso:</strong>
                                    <p>
                                        Le tempistiche di consegna variano da "Domani"
                                        a "Nel prossimo millennio".
                                        Il tuo pacco potrebbe essere consegnato al tuo vicino di casa,
                                        smarrito nell'etere o rubato da un piccione.
                                        In ogni caso, la tassa sul respiro è inclusa nel prezzo.
                                    </p>
                                </li>
                                <li>
                                    <strong>Effetti Collaterali e Salute Mentale:</strong>
                                    <p>
                                        L'uso prolungato dei nostri prodotti
                                        (o anche solo il fissarli troppo a lungo)
                                        può causare: grave perdita di tempo, denaro e dignità,
                                        dubbi esistenziali irrisolvibili,
                                        sguardi di disapprovazione da parte dei parenti
                                        e improvvisi cali di QI.
                                        Non ci assumiamo alcuna responsabilità se la
                                        "Pietra Filosofale" ti induce alla depressione cosmica.
                                    </p>
                                </li>
                                <li>
                                    <strong>Trattamento dei Dati:</strong>
                                    <p>
                                        Non vendiamo i tuoi dati a terzi semplicemente
                                        perché nessuno pagherebbe per avere informazioni
                                        su clienti che comprano il "Nulla™".
                                        Sei al sicuro nella tua disperazione.
                                    </p>
                                </li>
                            </ul>
                            <h5>Nota Finale:</h5>
                            <p>
                                Se non ti rispondiamo al Servizio Clienti
                                (numeri 800-CAZZATE, 02-999-CAZZATE, ecc.),
                                è perché stiamo ridendo delle tue scelte d'acquisto.
                            </p>
                            <i>Copyright © 2026 - Tutti i diritti non sono riservati perché non ce ne frega assolutamente niente.</i>
                        </div>
                    }
                </div>
            </footer>
        </>
    )
}

export default Footer