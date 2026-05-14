import { Badge } from "react-bootstrap";

function TrustSection() {
    return (
        <section className="trust-badges d-flex border border-success rounded justify-content-between">
            <div className="d-flex flex-column">
                <Badge bg="success" className="text-black">🚚 <strong>Spedizione a Caso</strong></Badge>
                <i>"Arriva quando ci pare, se ci pare."</i>
            </div>
            <div className="d-flex flex-column">
                <Badge bg="danger" className="text-black">⭐ <strong>Qualità Scadente</strong></Badge>
                <i>"I materiali peggiori sul mercato, garantito!"</i>
            </div>
            <div className="d-flex flex-column">
                <Badge bg="warning" className="text-black">🗑️ <strong>100% Inutile</strong></Badge>
                <i>"Certificati dal Ministero del Tempo Perso."</i>
            </div>
        </section>
    )
}

export default TrustSection