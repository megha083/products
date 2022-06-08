
import './App.css';
import React from 'react';

class App extends React.Component{
  state={
    products:[
      {
        "_id":"1",
        "title":"OnePlus Nord CE 2 Lite 5G",
        "src": [
          "https://m.media-amazon.com/images/I/71AvQd3VzqL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61kGS9bJjpL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/61wLFaBkPiL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/614Yr-udTqL._SX679_.jpg",
          "https://m.media-amazon.com/images/I/51SFuLH8rFL._SX679_.jpg"
        ],
        "description":"Blue Tide, 6GB RAM, 128GB Storage",
        "content":"Camera: 64MP Main Camera with EIS; 2MP Depth Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP Sony IMX471,Camera Features: AI scene enhancement, Dual-View Video, HDR, Night Portrait, Panorama Mode, Retouch Filters, 1080p video at 30 fps, SLO-MO: 720p video at 120 fps, TIME-LAPSE: 1080p video at 30 fps, Video editor, Face unlock, Screen flash, HDR, NIGHT, PORTRAIT, TIME-LAPSE, Retouch, Filters",
        "price":19999.00,
        "count":1
      }
    ],
    index:0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images=this.myRef.current.children;
    for(let i=0;i<images.length;i++){
      images[i].className=images[i].className.replace("active","");
    }
    images[index].className="active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className="active";
  }

  render(){
    const {products,index}=this.state;
    
    return(
      
      <div className='app'>
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className='big-img'>
                <img src={item.src[index]} alt=""/>
              </div>
             
              <div className='box'>

                <div className='row'>
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <div className='colors'>
                  {
                    item.colors?.map((color,index) =>(
                      <button style={{background: color}} key={index}></button>
                    ))
                  }
                </div>
                <p>{item.description}</p>
                <p>{item.content}</p>
                <div className='thumb'ref={this.myRef}>
                  {
                    item.src.map((img,index) =>(
                      <img src={img} alt="" key={index}
                      onClick={()=>this.handleTab(index)}
                      />
                    ))
                  }
                </div>

               
                <button className='cart'>Add to cart</button>
              </div>
            </div>

          ))
        }
      </div>
    )
  }
}

export default App;
