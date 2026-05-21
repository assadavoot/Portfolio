'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    /* ─── Renderer ─── */
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    /* ─── Scene & Camera ─── */
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30

    /* ─── Star Particles ─── */
    const starCount = 2200
    const starGeo = new THREE.BufferGeometry()
    const starPos = new Float32Array(starCount * 3)
    const starCol = new Float32Array(starCount * 3)

    for (let i = 0; i < starCount; i++) {
      starPos[i * 3]     = (Math.random() - 0.5) * 200
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 200
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 200
      const t = Math.random()
      if (t < 0.5)      { starCol[i*3]=0.3; starCol[i*3+1]=1;   starCol[i*3+2]=1   }
      else if (t < 0.8) { starCol[i*3]=0.6; starCol[i*3+1]=0.7; starCol[i*3+2]=1   }
      else              { starCol[i*3]=1;   starCol[i*3+1]=0.4;  starCol[i*3+2]=0.4 }
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
    starGeo.setAttribute('color',    new THREE.BufferAttribute(starCol, 3))

    const starMat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    })
    scene.add(new THREE.Points(starGeo, starMat))

    /* ─── Floating Wireframe Shapes ─── */
    const shapeGeos = [
      new THREE.IcosahedronGeometry(1.8, 0),
      new THREE.OctahedronGeometry(1.5, 0),
      new THREE.TetrahedronGeometry(2, 0),
    ]

    interface ShapeItem {
      mesh: THREE.Mesh
      speed: { rx: number; ry: number; y: number }
    }

    const shapes: ShapeItem[] = []

    for (let i = 0; i < 6; i++) {
      const geo = shapeGeos[i % 3]
      const mat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x4fffff : 0xff6b6b,
        wireframe: true,
        transparent: true,
        opacity: 0.12 + Math.random() * 0.1,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20 - 5,
      )
      const speed = {
        rx: (Math.random() - 0.5) * 0.004,
        ry: (Math.random() - 0.5) * 0.006,
        y:  (Math.random() - 0.5) * 0.005,
      }
      scene.add(mesh)
      shapes.push({ mesh, speed })
    }

    /* ─── Grid ─── */
    const grid = new THREE.GridHelper(120, 40, 0x1e2a45, 0x111827)
    grid.position.y = -20
    grid.rotation.x = Math.PI * 0.05
    scene.add(grid)

    /* ─── Mouse Parallax ─── */
    let mx = 0
    let my = 0
    const handleMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2
      my = (e.clientY / window.innerHeight - 0.5) * 2
    }
    document.addEventListener('mousemove', handleMouse)

    /* ─── Scroll ─── */
    let scrollY = 0
    const handleScroll = () => { scrollY = window.scrollY }
    window.addEventListener('scroll', handleScroll)

    /* ─── Resize ─── */
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', handleResize)

    /* ─── Animation Loop ─── */
    const clock = new THREE.Clock()
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      camera.position.x += (mx * 3                   - camera.position.x) * 0.03
      camera.position.y += (-my * 2 - scrollY * 0.004 - camera.position.y) * 0.03
      camera.lookAt(0, -scrollY * 0.004, 0)

      shapes.forEach(({ mesh, speed }) => {
        mesh.rotation.x += speed.rx
        mesh.rotation.y += speed.ry
        mesh.position.y += Math.sin(t * 0.4 + mesh.id) * 0.003
      })

      starMat.opacity = 0.75 + Math.sin(t * 0.3) * 0.1

      renderer.render(scene, camera)
    }
    animate()

    /* ─── Cleanup ─── */
    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, display: 'block' }}
    />
  )
}
