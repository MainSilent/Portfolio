import React, { Component } from "react"
import certificates from "./certificates.json"

class Certificates extends Component {
    render() {
        return (
            <div id="certificates-container">
                {certificates.map((cert, i) => 
                    <div className="cert" key={i} onClick={() => window.open(cert.url, '_blank')}>
                        <img className="thumbnail" src={process.env.PUBLIC_URL + cert.image} alt="thumbnail"/>
                        <p className="name">{cert.name}</p>
                        <a href={cert.url}>{cert.url}</a>
                    </div>
                )}
            </div>
        )
    }
}

export default Certificates