import { PolySynth, Synth } from "tone"

const synth = new PolySynth(Synth).toDestination()

const sequence: [string, number, number][] = [
	// ["D5", 2, 1],
	// ["C5", 1, 0.5],
	// ["A#4", 1, 0.5],
	// ["G4", 1, 1],
	// ["G4", 1, 1],

	// ["D#5", 2, 1],
	// ["D5", 2, 1],
	// ["G4", 1, 1],
	// ["A#4", 1, 1],

	// ["C4", 1, 1],
	// ["C4", 1, 1],
	// ["C5", 1, 1],
	// ["C4", 1, 1],

	// ["D#5", 1, 1],
	// ["C4", 1, 1],
	// ["C5", 1, 1],
	// ["A#4", 1, 1],

	["F4", 1, 1],
	["F4", 1, 1],
	["F5", 1, 1],
	["F4", 1, 1],

	["G5", 1, 1],
	["F5", 1, 1],
	["F4", 1, 1],
	// !["B5", 1, 1],
]

document.getElementById("play").onclick = async () => {
	for (const [note, time, pause] of sequence) {
		synth.triggerAttackRelease(note, `${16 / time}n`)
		await new Promise(res => setTimeout(res, pause * 200))
	}
}
