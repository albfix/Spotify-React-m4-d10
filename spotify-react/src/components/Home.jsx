import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

const deezApi = "https://deezerdevs-deezer.p.rapidapi.com/search?metallica"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            loading: false
            //comments : [] INSERIRE DOPO
        }
    }


    componentDidMount() {
        fetch(deezApi)
            .then(response => response.json())
            .then((responseObject) =>
                this.setState({ albums: responseObject.search })
            )

    }
}
export default Home