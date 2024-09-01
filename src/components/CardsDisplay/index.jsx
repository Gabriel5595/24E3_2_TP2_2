// import "./styles.css"

import Card from "../Card/index"

export default function CardsDisplay() {
    return(
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "10px",
            margin: "10px"
        }}>
            <Card />
            <Card />
            <Card />
        </div>
    )
}