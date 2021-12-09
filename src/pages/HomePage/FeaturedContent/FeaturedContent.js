import React from 'react';
import { Container } from 'react-bootstrap';

const FeaturedContent = () => {
    return (
        <div className='container' style={{marginTop:'100px'}}>
            <div>
            <h3 className="my-5"><b>Featured</b><span style={{color:'goldenrod' , fontWeight:'bold'}}> Content</span></h3>
            </div>
            <Container>
          <div className="card mb-3 p-3">
            <div className="row g-0">
              <div className="col-md-6 ">
              
                {/* <iframe 
                className="rounded w-100" 
                height="350px"
                src="https://www.youtube.com/embed/RdGVz104b3E" title="YouTube video player" 
                 allow="accelerometer;autoplay; clipboard-write;encrypted-media;gyroscope; picture-in-picture" 
                  allowFullScreen></iframe>
                   */}
                
                <iframe className="rounded w-100" 
                height="350px" src="https://www.youtube.com/embed/lIW5jBrrsS0" title="YouTube video player" frameborder="0" allow="accelerometer;
                 autoplay;
                  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    
                  </iframe>
                                
                                




              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <p className="card-title fw-bold mb-5">
                  BookHolic: World Premiere
                  </p>
                  <p className="card-text text-muted mx-3">
                  A page is one side of a leaf (or sheet) of paper, parchment or other material (or electronic media) in a book, magazine, newspaper, or other collection of sheets, on which text or illustrations can be printed, written or drawn, to create documents. It can be used as a measure of communicating general quantity of information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
            
        </div>
    );
};

export default FeaturedContent;