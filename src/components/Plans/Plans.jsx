import "./Plans.css"
import { plansData } from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"

function Plans(){
    return <>
    <div className="plans-container">
        <div className="programs-header" style={{gap:'1.5rem'}}>
            <span className="stroke-text">ready to start</span>
            <span>your journey</span>
            <span className="stroke-text">now withus</span>
        </div>
    </div>
    {/* plan card */}
    <div className="plans">
        {plansData.map((plan,i)=>(
        <div key={i} className="plan">
            {plan.icon}
            <span>{plan.name} </span>
            <span>$ {plan.price} </span>
            <div className="features">
                {plan.features.map((feature,i)=>(
                    <div key={i} className="feature">
                        <img src={whiteTick} alt="" />
                        <span>{feature} </span>
                    </div>
                ))}

            </div>
            <div>
                <span>See more benefits - </span>
            </div>
            <button className="btn">Join now</button>

        </div>
        ))}
    </div>
    </>
}
export default Plans