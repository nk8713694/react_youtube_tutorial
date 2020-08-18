import React from 'react'


export default function func(props)
{
    return(
      <>
      <div className="cards">
        <div className="card">
            <img
             src={props.imgsrc}
             alt="mypic"
             className="card_img"
            />
            <div className="card_info">
            <span className="cardd_category">A Netflix original Series</span>
            <h3 className="card_title">Dark</h3>
            <a
            href="https://www.netflix.com/in/title/80100172"
            target="_blank"
            >
              <button>Watch Now</button>

            </a>
            </div>

        </div>
      </div>
      </>
    );
}


