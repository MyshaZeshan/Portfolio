import React from 'react'
import SkillsCard from '../components/SkillCard.jsx'
import { skills } from '../utils/SkillsData.jsx'
const Skills = () => {
    

  return (
    <section className='c-space my-20'>
      <p className='head-text text-white mb-10'>My Skills</p>
    
    <div className = 'grid xl:grid-cols-4 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-6 h-full'>
        {skills.map((skill) => (
            <SkillsCard key={skill.id} skill={skill} />
        ))}
    
    </div>
    </section>
  )
}
export default Skills