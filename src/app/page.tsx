import Image from "next/image";
import img from "/Users/Family/3d-rendering-letter-n.jpg"


const page =()=> {
  return (<div className="wrapper ">
<Image src={img} alt=""/>
      <div className="container flex gap-3">
    <input type="email" placeholder="Email Address"/>
    <button >login</button>
   
  </div>
</div>
)
  
}

export default page;