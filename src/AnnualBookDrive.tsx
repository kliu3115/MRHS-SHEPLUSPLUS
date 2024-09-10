import image1 from "./assets/392869275_6635005196535659_253151127661725661_n.jpg"
import image2 from "./assets/393108992_1496483081104767_2077351511514706890_n.jpg"
import image3 from "./assets/393251492_1249741952372172_6659776159500291913_n.jpg"
import image4 from "./assets/393590043_866027584747075_4378589449640759564_n.jpg"

const AnnualBookDrive = () => { 
    return (
        <div className="annualbookdrive"> 
            <h1> SHE++ Annual Book Drive! </h1>
            <h3> The annual book drive is a donation initiative that SHE++ holds. Each year, we get together and decorate boxes that we will place them around the school. These boxes are meant to collect SAT, ACT, AP and other resources that students no longer need. They are then donated to local charities and help keep hundreds of pounds of books from going to waste!</h3>
            <br />
            <img src={image3} height = "350" width = "300"/>
            <img src={image1} height = "350" width = "300"/>
            <img src={image4} height = "350" width = "300"/>
            </div>
    )
}

export default AnnualBookDrive;