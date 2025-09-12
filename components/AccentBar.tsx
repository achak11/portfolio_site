'use client'
import { motion } from 'framer-motion'

export default function AccentBar(){
  return <motion.div initial={{width:0,opacity:0}}
    animate={{width:'220px',opacity:1}}
    transition={{type:'spring',stiffness:120,damping:20,delay:0.2}}
    className="mt-3 h-1 rounded-full" style={{background:'rgb(var(--accent))'}}/>
}