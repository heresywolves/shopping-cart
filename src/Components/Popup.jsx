
function Popup ({content, confirmAction}) {

  return (
    <div className="popup-container">
      <div className="popup">
        <p>{content}</p>
        <button 
        className='popup-confirm-button'
        onClick={confirmAction}
        >Ok</button>
      </div>
    </div>
  )
}

export default Popup