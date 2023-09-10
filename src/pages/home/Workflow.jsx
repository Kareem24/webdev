export function Workflow({ num, title, desc }) {
  return (<div className="workflow-step">
    <h3 className="workflow-steps__heading flex"><span className='flow-num orange'>#{num}</span>{title}</h3>
    <p className="workflow-desc">{desc}</p>
  </div>

  );
}
