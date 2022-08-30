import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {Box} from "../components/Box"
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    </div>
  )
}

export default Home
