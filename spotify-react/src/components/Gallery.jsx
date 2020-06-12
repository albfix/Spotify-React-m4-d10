import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
//import Album from //"./"; PRENDERE INFO ALBUM DA JSON

function Gallery({ title, cover, loading }) {
    return (
        <div>
            <h4>{title}</h4>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-6 row-cols-xl-6 mb-4 no-gutters text-center">
                {loading
                    ? [0, 1, 2, 3, 4, 5].map((num, i) => (
                        <Col key={i}>
                            <Spinner animation="border" role="status" variant="success">
                                <span className="sr-only">Loading Album</span>
                            </Spinner>
                        </Col>
                    ))
                    : albums.map((/*devo mappare gli album per inserire le info qua */) => (
                        <Album
                            album={title}
                            cover={cover}
                        />
                    ))}

            </Row>
        </div>
    );
}

export default Gallery;
