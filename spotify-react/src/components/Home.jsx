import React from 'react'
import { Container, Alert } from 'react-bootstrap'
//import { Container, Row, Col } from "react-bootstrap"

const deezApi = "https://deezerdevs-deezer.p.rapidapi.com/search?metallica"

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
        fetch(deezApi)
            .then(response => response.json())
            .then((responseObject) =>
                this.setState({ albums: responseObject.search })
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
                            title="Harry Potter"
                            loading={this.state.loading}
                            movies={this.state.harryPotter.slice(0, 6)}
                            comments={this.state.comments}
                            fetchComments={this.fetchComments}
                        />
                        <Gallery
                            title="Spider Man"
                            loading={this.state.loading}
                            movies={this.state.spiderMan.slice(0, 6)}
                            comments={this.state.comments}
                            fetchComments={this.fetchComments}
                        />
                        <Gallery
                            title="Matrix"
                            loading={this.state.loading}
                            movies={this.state.matrix.slice(0, 6)}
                            comments={this.state.comments}
                            fetchComments={this.fetchComments}
                        />
                    </div>
                )}
            </Container>
        )
    }
}
export default Home