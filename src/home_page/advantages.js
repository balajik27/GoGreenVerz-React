
import Arrow1 from '../assets/images/arrow_1.png';
import Arrow2 from '../assets/images/arrow_2.png';
import Arrow3 from '../assets/images/arrow_3.png';
import Arrow4 from '../assets/images/arrow_4.png';
import Arrow5 from '../assets/images/arrow_5.png';
// import Arrow6 from '../assets/images/arrow_6.png';
export default function Advantages(){
    return(
        <section id="advantage_flow" className="py-5">
        <div className="advantages_of_eco py-5">
            <img className="left_most_img" src={Arrow1} alt="" />
            <div className="p-2 eco_advantage_text green_tech">
                <span>Green technology</span>
            </div>

            <img className="middle_1_img" src={Arrow2} alt="" />
            <div className="p-2 eco_advantage_text cleantech">
                <span>Cleantech</span>
            </div>

            <img className="middle_2_img" src={Arrow3} alt="" />
            <div className="p-2 eco_advantage_text ecofriendly">
                <span>Eco-friendly solution</span>
            </div>

            <img className="middle_3_img" src={Arrow4} alt="" />
            <div className="p-2 eco_advantage_text future_oriented">
                <span>Future-oriented</span>
            </div>

            <img className="right_most_img" src={Arrow5} alt="" />
        </div>
    </section>
    )
}