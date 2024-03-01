import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import { Tooltip } from "react-tooltip";
import { urlFor, client } from "../../client";
import MotionWrap from "../../wrapper/MotionWrap";
const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState(null);
  useEffect(() => {
    const skillsQuery = "*[_type=='skills']";
    client.fetch(skillsQuery).then((data) => setSkills(data));
    // const experinecesQuery = "*[_type=='experiences']";
    // client.fetch(experinecesQuery).then((data) => setExperiences(data));
  }, []);
  return (
    <>
      <h2 className="head-text">Skills and Experiences</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex">
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        {experiences && (
          <motion.div className="app__skills-exp">
            {experiences?.map((exp) => (
              <motion.div className="app__skills-exp-item" key={exp?.year}>
                <div className="app__skills-exp-year">
                  <p className="bold-text">{exp?.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {exp?.map((work) => (
                    <>
                      <motion.div
                        className="app__skills-exp-work"
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        key={work?.name}
                        data-tip
                        data-for={work?.name}
                      >
                        <h4 className="bold-text">{work?.name}</h4>
                        <p className="p-text">{work?.name}</p>
                      </motion.div>
                      <Tooltip
                        arrowColor="#fff"
                        id={work?.name}
                        effect="solid"
                        className="skills-tooltip"
                      >
                        {work?.desc}
                      </Tooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default AppWrap(
 MotionWrap(Skills,"app__skills"), 
 "skills",
 "app__whitebg"
 );
