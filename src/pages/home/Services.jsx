import arrowImg from '../../assets/arrow-up.png';
import PropTypes from 'prop-types';

export function Services(props) {
  return <>
    <div className="service-tech  bottom-border flex ai-c jc-sb">
      <p className="service-title">{props.title}</p>
      <img src={arrowImg} alt="" className="arrow" />
    </div>
  </>;
}
Services.propTypes = {
  title: PropTypes.string
};
