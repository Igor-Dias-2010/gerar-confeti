'use client'

import confetti from "canvas-confetti"

export default function GerarConfeti() {
    function gerarConfetti() {
        confetti({
            particleCount: 1000,
            spread: 150,
            origin: { y: 0.6 },
        })
    }
    return (
            <div className="main">
                <button onClick={gerarConfetti}>🎉</button>
            </div>
    )
}