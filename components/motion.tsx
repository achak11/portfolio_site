'use client'
import { Variants } from 'framer-motion'
export const slideLeft: Variants = { off:{opacity:0,x:-24}, on:{opacity:1,x:0} }
export const slideRight: Variants = { off:{opacity:0,x:24}, on:{opacity:1,x:0} }
export const fadeUp: Variants = { off:{opacity:0,y:12}, on:{opacity:1,y:0} }
export const staggerChildren: Variants = { on:{ transition:{ staggerChildren:0.06 } } }