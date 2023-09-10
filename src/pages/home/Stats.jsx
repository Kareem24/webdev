import PropTypes from 'prop-types';

export function Stats({ num, sign, info }) {
  return <div className="stats-info bottom-border ">
    <p className="number">{num}<span className="sign">{sign}</span></p>
    <p className="stats-text stats-special">{info}</p>
  </div>;
}
Stats.propTypes = {
  num: PropTypes.string,
  sign: PropTypes.string,
  info: PropTypes.string
};
