import React from 'react'
import { Container, Alert } from 'react-bootstrap'
import Gallery from './components/Gallery'
//import { Container, Row, Col } from "react-bootstrap"



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            loading: false,
            err: false
            //comments : [] INSERIRE DOPO
        }
    }

    componentDidMount() {
        fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=Rolling%20Stones", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "4c48adc6cbmsh29e445de926b8a7p176d96jsna87ea16aec24",
                'Authorization': 'Basic dXNlcjE6eldBM0QzdlVNUnNicHJyZA==',
                'Content-Type': 'application/json' //TENTATIVO CON CONTENT TYPE

            }
        })
            .then(response => response.json())
            .then((responseObject) =>
                this.setState({ albums: responseObject })//TOLTO IL SEARCH 
                    .catch(err => {
                        console.log(err)
                    })
            )


    };

    render() {
        //METODO RENDER DEI COMPONENTI+CONSOLE.LOG+RETURN WHITH SHORT CIRCUIT+DIV PER GALLERIE
        console.log("render")
        return (
            <Container>
                {this.state.err && (
                    <Alert variant="danger">
                        An error has occurred, please try again later
                    </Alert>
                )}
                {!this.state.error && (
                    <div>/
                        <Gallery
                            title=""
                            loading={this.state.loading}
                            cover={this.state.albums.slice(0, 6)}

                        />
                    </div> // TOLTO DUE GALLERY IN PIU', RIMANE SOLO LA PRIMA DA 6 ELEMENTI COME IN SPOTIFY
                )}
            </Container>
        )
    }
}
export default Home