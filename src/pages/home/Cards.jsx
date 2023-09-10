export const Cards = (props) => {
  return <div className="card mb-regular">
    <img src={props.cardImg} alt="" className="card-img" />
    <ul className="tags flex">
      <li className='tag text'>Website</li>
      <li className='tag text'>Design</li>
      <li className='tag text'>Development</li>

    </ul>
    <p className="card-title">{props.title}</p>
  </div>;

};
