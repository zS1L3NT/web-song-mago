import { PolySynth, Synth } from "tone"

const synth = new PolySynth(Synth).toDestination()

const sequence: [string, number, number][] = [
	["D5", 2, 2],
	["C5", 1, 1],
	["A#4", 1, 1],
	["G4", 1, 1]
]

document.getElementById("play").onclick = async () => {
	for (const [note, time, pause] of sequence) {
		synth.triggerAttackRelease(note, `${16 / time}n`)
		await new Promise(res => setTimeout(res, pause * 100))
	}
}
