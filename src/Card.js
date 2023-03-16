import style from './Card.module.css';

function Card() {
    return (
    <div className={style.card}>
       <div className={style["image-container"]}>
        <img className={style.img} src='https://fondosmil.com/fondo/27333.jpg'/>
       </div> 
       <div>
        <h2 className={style.h2}>Eric Stoltz Mask Morty</h2>
        <span className={style.span}>Unknown - Human</span>
        <span className={style.span}>Last known location:</span>
        <a href='#Earth'>Earth(Replacement Dimension)</a>
        <span className={style.span}>First seen in:</span>
        <a href='#Earth'>Close Rick-counters of the Rick Kind</a>
        </div>
        

    </div>
    );
  }
  export default Card;