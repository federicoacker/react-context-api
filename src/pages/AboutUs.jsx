import { Card } from "react-bootstrap"

function AboutUs() {
    return (
        <>
            <section className="our-story d-flex flex-column align-items-center justify-content-center row-gap-4">
                <Card data-bs-theme="dark" className="w-75">
                    <Card.Header>
                        <Card.Title className="text-success">La Nostra (Triste) Storia</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Tutto è iniziato in uno scantinato umido nel 2026,
                            quando il nostro fondatore, uno scienziato radiato dall'albo per
                            aver cercato di brevettare l'acqua in polvere, ha avuto una folgorazione:
                            la gente compra letteralmente qualsiasi cosa, basta metterci la parola "Smart"
                            o colorarla di rosa fluo. Da quel giorno,
                            la nostra missione è diventata una sola:
                            prendere oggetti di uso quotidiano, privarli di qualsiasi utilità pratica,
                            triplicare il prezzo e convincerti che non puoi vivere senza.
                            E a giudicare dal fatto che sei su questa pagina, sta funzionando alla grande.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card data-bs-theme="dark" className="mb-4 w-75">
                    <Card.Header>
                        <Card.Title className="text-warning">I NOSTRI VALORI AZIENDALI (Non ne abbiamo, ma suonava bene)</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <ul>
                            <li>
                                <Card.Text>
                                    <strong>Inutilità Assoluta:</strong> È la nostra promessa.
                                    Se un nostro prodotto ti risolve un problema,
                                    ti preghiamo di restituirlo (a tue spese):
                                    significa che c'è stato un difetto di fabbrica.
                                </Card.Text>
                            </li>
                            <li>
                                <Card.Text>
                                    <strong>Sostenibilità (Del nostro conto in banca):</strong>
                                    Usiamo solo i materiali più scadenti e
                                    inquinanti per garantirti che il prodotto si
                                    rompa esattamente il giorno dopo che hai smesso
                                    di giocarci, costringendoti a comprarne un altro.
                                </Card.Text>
                            </li>
                            <li>
                                <Card.Text>
                                    <strong>Zero Empatia:</strong>Il "Cliente ha sempre ragione"
                                    è una frase inventata da chi non ha mai
                                    lavorato nel commercio. Qui, il cliente
                                    ha sempre torto, ma i suoi soldi
                                    sono sempre i benvenuti.
                                </Card.Text>
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </section>
        </>

    )

}

export default AboutUs