import "./styles.css";
import { avatar } from "../public/avatar.jpg";

export default function App() {
  let skills = { HTML: "HTML", CSS: "CSS", Bootstrap: "Bootstrap" };
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

const Avatar = () => {
  return (
    <>
      <div className="avatar">
        <img src={avatar} alt="img" />
      </div>
    </>
  );
};
const Intro = () => {
  return (
    <>
      Full-Stack developer is a professional responsible for working on both
      front-end and back-end development processes. They design, develop, and
      maintain fully-fledged and functioning platforms with databases or
      servers.
    </>
  );
};
const SkillList = ({ skills = {} }) => {
  return (
    <>
      <div className="skill">
        <div className="skill-list">
          {skills?.HTML && <div>{skills?.HTML}</div>}
          {skills?.CSS && <div>{skills?.CSS}</div>}
          {skills?.Bootstrap && <div>{skills?.Bootstrap}</div>}
        </div>
      </div>
    </>
  );
};
