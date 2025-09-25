import logo from './images/Umerch-Logo.png'

function Card() {
    return (
        <div className="card">
            <img src={logo} alt="logo" className='card-image' />
            <h2>Card Components</h2>
        </div>
    )
}

export default Card;