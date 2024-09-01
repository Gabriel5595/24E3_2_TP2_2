// import "./styles.css"

export default function Card() {
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2px solid black",
            height: "200px",
            width: "300px"
        }}>
            <img src="https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw3f9cab1f/images/full/full_2024_/2023/full_2024_3718_endurace-6_P06_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2" 
            alt="Endurace 6" 
            style={{
                height: "150px",
                width: "auto"
            }}/>
            <p style={{ fontWeight: "bold" }}>Endurace 6</p>
        </div>
    )
}