import './Popup.css';

function Popup ({content, confirmAction}) {

  return (
    <div className="popup-container">
      <div className="popup">
        <div></div>
        <p>{content}</p>
        <button 
        className='popup-confirm-button'
        onClick={confirmAction}
        >OK</button>
      </div>
    </div>
  )
}

export default Popup