import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../Constants"

const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row justify-center min-h-screen max-container flex-col gap-10">
      <div className="xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Superr.. Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[56px] max-sm:leading-[72px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span> <br />
          by <span className="text-coral-red inline-block mt-3"> Balaji</span> NV </h1>
        <p className="font-montserrat text-slate-gray leading-8 mt-6 text-lg mb-14">Discover stylish Products, innovation for your active life at cheap price Guaranteed<sup>*</sup></p>

        <Button label="Shop now" iconURL={arrowRight}/>
      </div>
      <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
        {statistics.map((stat, index)=>(
          <div key={index} className="">
            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
            <p className="font-montserrat text-slate-gray leading-7">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero