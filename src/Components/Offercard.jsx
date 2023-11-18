import Button from "./Button"

const Offercard = () => {
  return (
    <div className="offer-card">
        <h5>Upto 60% off on Appliances</h5>
        <img src="/AmazonLogo.png"/>
        <h6>Upto 60% off on Summer Appliances</h6>
        <Button className="multi-button" name={'Grab Now'}/>
    </div>
  )
}

export default Offercard