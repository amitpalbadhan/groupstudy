import Header from "../Header"
import Group from "./Group"

const Listings = () => {
  return (
    <div>
      <Header title="GROUPSTUDY" />
      <main>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mx-7">
          <Group title="math is fun" subject="Math" uni={false} grade={9} size={7} maxSize={10}/>
          <Group title="bio" subject="Biology" uni={false} grade={10} size={6} maxSize={15}/>
          <Group title="ULHacks" subject="Computer Science" uni={false} grade={12} size={4} maxSize={20}/>
          <Group title="chem" subject="Chemistry" uni={true} grade={1} size={5} maxSize={7}/>
          <Group title="f=ma" subject="Physics" uni={false} grade={11} size={3} maxSize={5}/>
          <Group title="cool" subject="Chemistry" uni={false} grade={12} size={7} maxSize={8}/>
          <Group title="YOLO" subject="Math" uni={false} grade={9} size={7} maxSize={10}/>
          <Group title="shakespeare" subject="English" uni={true} grade={3} size={4} maxSize={17}/>
          <Group title="bonjour" subject="French" uni={false} grade={10} size={6} maxSize={15}/>
          <Group title="canada" subject="Geography" uni={true} grade={1} size={5} maxSize={7}/>
        </div>
      </main>
    </div>
  )
}

export default Listings
