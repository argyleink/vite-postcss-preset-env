import confetti from 'canvas-confetti'
import $ from 'blingblingjs'
import '/style.css'

confetti.create(null, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 })

console?.log('ready.')