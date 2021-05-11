import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";


export default function Home() {
  return (
    <div>
      <ExperienceBar/>
      <section>
        <div>
          <Profile/>
        </div>
      </section>
    </div>
  )
}