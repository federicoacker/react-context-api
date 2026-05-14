import { Card } from "react-bootstrap"

const reviews = [
    {
        id: 0,
        name: "Gianni",
        age: 42,
        score:"⭐⭐⭐⭐⭐",
        text: '"Ho comprato Il Nulla™ e devo dire che rispetta le aspettative. Mi sento svuotato, sia dentro che nel portafoglio. Consigliatissimo per chi odia vivere."'
    },
    {
        id: 1,
        name: "Maria",
        age: 28,
        score:"⭐",
        text: '"Il Cuscino Antipensiero mi ha fatto perdere il lavoro perché ho dormito per tre giorni di fila. Esattamente quello che cercavo."'
    },
    {
        id: 2,
        name: "Pippo Il Piccione",
        age: 1,
        score:"⭐⭐⭐⭐⭐",
        text: '"Coooosa?! (Non sa scrivere, ha solo beccato la tastiera)"'
    }
]

function Reviews() {
    return (
        <section className="reviews d-flex flex-column row-gap-2 py-2">
            {reviews.map(review => {
                return (
                    <Card key={review.id}>
                        <Card.Header>
                            <Card.Title>
                                {review.name}
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Età: {review.age}
                            </Card.Text>
                            <Card.Text>
                                {review.score}
                            </Card.Text>
                            <Card.Text>
                                {review.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}
        </section>
    )
}

export default Reviews

