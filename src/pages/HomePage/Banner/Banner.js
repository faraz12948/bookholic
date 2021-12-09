import React from 'react';
import { Carousel,Button } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../assests/images/banner1.jpg'
import banner2 from '../../../assests/images/banner2.jpg'
import banner3 from '../../../assests/images/banner3.jpg'
import banner4 from '../../../assests/images/banner4.png'

const Banner = () => {
    return (

      <div  >
        <div className='banner'>
        <img src={banner4} alt='' style={{width:'100%'}}></img>
        </div>
        {/* <div className='banner-txt' style={{display:'flex', justifyContent:'center',fontFamily:'Cursive', fontWeight:'bold', top: '50%',transform: 'translateY(-80%)'}}>
          <div className='m-5'>
            <h4>
              An online book selling website.
            </h4>

          </div >
          <div className='m-5'>
          <Button variant="outline-dark">Explore</Button>

          </div>
        </div> */}
      </div>
      
//         <div>
            
             
//             <Carousel fade className="banner">
                
//                 <Carousel.Item>
//                   <img
//                     style={{opacity:'0.9'}}
//                     className="d-block w-100"
//                     src={banner3}
//                     alt="Second slide"
//                   />

//                  <Carousel.Caption style={{fontFamily:'Cursive', fontWeight:'bold', top: '50%',
//                  transform: 'translateY(-50%)'}}>
                   
//                    <h1 >BestPerformance Cars</h1>
//                     <p>Cresting in to the hundred-grand range of a brand</p>
                   
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src={banner2}
//                     alt="Second slide"
//                   />

//                  <Carousel.Caption style={{fontFamily:'Cursive', fontWeight:'bold',top: '50%',
//                  transform: 'translateY(-50%)'}}>
//                     <h1 >BestPerformance Cars</h1>
//                     <p>Cresting in to the hundred-grand range of a brand</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 {/* <Carousel.Item>
//                   <img
                  
//                     className="d-block w-100"
//                     src={banner1}
//                     alt="Third slide"
//                   />

//                 <Carousel.Caption style={{fontFamily:'Cursive', fontWeight:'bold',top: '50%',
//                  transform: 'translateY(-50%)'}}>
//                     <h1>Nature beifits you</h1>
//                     <p>Experience everything nature has to offer</p>
//                   </Carousel.Caption>
//                 </Carousel.Item> */}
// </              Carousel>
              
            
//         </div>
    );
};

export default Banner;