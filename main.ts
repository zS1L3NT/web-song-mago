import { PolySynth, Synth } from "tone"

type iNotes = [string, number, number][]
const synth = new PolySynth(Synth).toDestination()

const Beginning: iNotes = [
	["D5", 2, 1],
	["C5", 1, 0.5],
	["A#4", 1, 0.5],
	["G4", 1, 1],
	["G4", 1, 1],

	["D#5", 2, 1],
	["D5", 2, 1],
	["G4", 1, 1],
	["A#4", 1, 1],

	["C4", 1, 1],
	["C4", 1, 1],
	["C5", 1, 1],
	["C4", 1, 1],

	["D#5", 1, 1],
	["C4", 1, 1],
	["C5", 1, 1],
	["A#4", 1, 1],

	["F4", 1, 1],
	["F4", 1, 1],
	["F5", 1, 1],
	["F4", 1, 1],

	["G5", 1, 1],
	["F5", 1, 1],
	["F4", 1, 1],
	["C5", 1, 1],

	["A#4", 1, 1],
	["A#4", 1, 1],
	["D5", 1, 1],
	["A#4", 1, 1],

	["F5", 1, 1],
	["D#5", 1, 1],
	["A#4", 1, 1],
	["D5", 1, 1],

	["D#4", 1, 1],
	["D#4", 1, 1],
	["A#4", 1, 1],
	["D#4", 1, 1],

	["D#5", 1, 1],
	["G5", 1, 1],
	["D#4", 1, 1],
	["A#4", 1, 1],

	["C4", 1, 1],
	["C4", 1, 1],
	["D5", 1, 1],
	["D#5", 1, 1],

	["C4", 1, 1],
	["G4", 1, 1],
	["C5", 1, 1],
	["A#4", 1, 1],

	["D4", 1, 1],
	["D4", 1, 1],
	["A4", 1, 1],
	["D5", 1, 1],

	["D4", 1, 1],
	["C5", 1, 1],
	["D4", 1, 1],
	["A4", 1, 1],

	["D4", 1, 1],
	["D4", 1, 1],
	["D5", 1, 1],
	["C5", 1, 1],

	["D4", 1, 1]
]

const Verse1: iNotes = [
	["D5", 1, 1],
	["D5", 1, 1],
	["C5", 1, 1],
	["C5", 1, 5],

	["D5", 1, 1],
	["D5", 1, 1],
	["C5", 1, 2],
	["C5", 1, 2],
	["G4", 1, 2],

	["D5", 1, 1],
	["D5", 1, 1],
	["D5", 1, 1],
	["C5", 1, 3],

	["A#4", 1, 0.5],
	["A#4", 1, 0.5],
	["F5", 1, 1],
	["F5", 1, 1],
	["D5", 1, 1],
	["G5", 1, 1],

	["F5", 1, 1],
	["D5", 1, 1],
	["D5", 1, 1],
	["C5", 1, 1],
	["C5", 1, 1],
	["A#4", 1, 1],
	["A#4", 1, 1],
	["C5", 1, 0.5],
	["D5", 1, 0.5],

	["F5", 1, 1],
	["D5", 1, 1],
	["F5", 1, 1],
	["D5", 1, 1],
	["F5", 1, 2],
	["G5", 1, 2],

	["F5", 1, 1],
	["D5", 1, 0.5],
	["D#5", 1, 0.5],
	["F5", 1, 1],
	["D5", 1, 0.5],
	["D#5", 1, 0.5],
	["F5", 1, 2],
	["G5", 1, 1],

	["F5", 1, 0.5],
	["F5", 1, 0.5],
	["G5", 1, 2],
	["D5", 1, 2],
	["C5", 1, 1],
	["A#4", 1, 1],
	["A#4", 1, 2],

	["C5", 1, 0.5],
	["D5", 1, 0.5],
	["C5", 1, 0.5],
	["D5", 1, 0.5],
	["C5", 1, 0.5],
	["D5", 1, 0.5],
	["C5", 1, 0.5],
	["D5", 1, 0.5],
	["C5", 1, 1]
]

const PreChorus: iNotes = [
	["A#5", 1, 1],
	["A5", 1, 1],
	["A5", 1, 1],
	["G5", 1, 1],
	["G5", 1, 5],

	["A#5", 1, 1],
	["A#5", 1, 1],
	["B#5", 1, 2],
	["G5", 1, 1],
	["G5", 1, 1],
	["F5", 1, 1],
	["D#5", 1, 2],

	["D5", 1, 1],
	["D#5", 1, 1],
	["F5", 1, 1.5],
	["F5", 1, 1.5],
	["G5", 1, 1],
	["A5", 1, 1.5],
	["A#5", 1, 1.5],
	["C6", 1, 1],
	["D6", 1, 10],

	["A#5", 1, 0.5],
	["A#5", 1, 1.5],
	["C6", 1, 1],
	["G5", 1, 1],
	["G5", 1, 2],
	["G5", 1, 2],

	["A#5", 1, 0.5],
	["A#5", 1, 1.5],
	["C6", 1, 1],
	["G5", 1, 1],
	["G5", 1, 2],

	["A#5", 1, 0.5],
	["A5", 1, 1.5],
	["A#5", 1, 0.5],
	["A5", 1, 1.5],
	["A#5", 1, 0.5],
	["A5", 1, 1.5],
	["A#5", 1, 0.5],
	["A5", 1, 3.5]
]

const Chorus: iNotes = [
	["D6", 1, 1],
	["C6", 1, 1],
	["A#5", 1, 1],
	["D6", 1, 1],
	["C6", 1, 1],
	["A#5", 1, 2],
	["D6", 1, 6],

	["C6", 1, 1.5],
	["D6", 1, 1.5],
	["D#6", 1, 1.5],
	["D#6", 1, 1.5],
	["D#6", 1, 1],
	["D6", 1, 1.5],
	["A#5", 1, 1.5],
	["D6", 1, 1],
	["A#5", 1, 0.5],
	["B#5", 1, 1.5],

	["B#5", 1, 0.5],
	["D6", 1, 1.5],
	["B#5", 1, 2],
	["B#5", 1, 0.5],
	["D6", 1, 1.5],
	["B#5", 1, 1],

	["D6", 1, 1],
	["C6", 1, 1],
	["A#5", 1, 1],
	["D6", 1, 1],
	["C6", 1, 1],
	["A#5", 1, 2],
	["D6", 1, 1],
	["C6", 1, 5],

	["G5", 1, 1],
	["A5", 1, 1],
	["A5", 1, 1],
	["A#5", 1, 1],
	["B#5", 1, 1],
	["A#5", 1, 1],
	["A5", 1, 1],
	["G5", 1, 2],

	["C5", 1, 0.5],
	["C5", 1, 1.5],
	["D5", 1, 2],
	["C5", 1, 2],
	["D5", 1, 2],
	["C5", 1, 2],

	["C6", 1, 2],
	["C6", 1, 2],
	["C6", 1, 0.5],
	["D6", 1, 1.5]
]

const PostChorus: iNotes = [
	["C6", 1, 0.5],
	["D6", 1, 1.5],
	["G5", 1, 2],
	["C6", 1, 0.5],
	["D6", 1, 1.5],
	["G5", 1, 2],

	["G5", 1, 1],
	["A5", 1, 1],
	["A#5", 1, 1],
	["C6", 1, 1],
	["A5", 1, 1],
	["A#5", 1, 1],
	["G5", 1, 2],

	["C6", 1, 0.5],
	["C6", 1, 1.5],
	["C6", 1, 0.5],
	["D6", 1, 1.5],
	["C6", 1, 0.5],
	["D6", 1, 1.5],
	["F5", 1, 2],
	["F6", 1, 1],
	["F6", 1, 2],
	["C6", 1, 0.5],
	["D6", 1, 5],

	["C6", 1, 0.5],
	["D6", 1, 1.5],
	["G5", 1, 2],
	["C6", 1, 0.5],
	["D6", 1, 1.5],
	["G5", 1, 2],

	["G5", 1, 1],
	["A5", 1, 1],
	["A#5", 1, 1],
	["C6", 1, 1],
	["A5", 1, 1],
	["A#5", 1, 1],
	["G5", 1, 2],

	["C5", 1, 0.5],
	["C5", 1, 1.5],
	["D5", 1, 2],
	["C5", 1, 2],
	["D5", 1, 2],
	["C5", 1, 2],

	["C6", 1, 2],
	["C6", 1, 2],
	["C6", 1, 0.5],
	["D6", 1, 3.5]
]

const Verse2: iNotes = [
	["A#5", 1, 1],
	["A#5", 1, 1],
	["A5", 1, 2],
	["D5", 1, 1],
	["D5", 1, 1],
	["C5", 1, 1],
	["D5", 1, 6],

	["C5", 1, 1],
	["C5", 1, 1],
	["C5", 1, 1],
	["G5", 1, 1],
	["A5", 1, 1],
	["G5", 1, 2],
	["C5", 1, 1],
	["C5", 1, 1],
	["D#5", 1, 1],
	["D5", 1, 5],
	
	["C5", 1, 1],
	["D5", 1, 1],
	["C5", 1, 1],
	["A#4", 1, 1],

	["F5", 1, 1],
	["D5", 1, 0.5],
	["D#5", 1, 0.5],
	["F5", 1, 1],
	["D5", 1, 0.5],
	["D#5", 1, 0.5],
	["F5", 1, 2],
	["G5", 1, 2],

	["F5", 1, 1],
	["D5", 1, 0.5],
	["D#5", 1, 0.5],
	["F5", 1, 1],
	["D5", 1, 0.5],
	["D#5", 1, 0.5],
	["F5", 1, 2],
	["G5", 1, 1],
	
	["F5", 1, 0.5],
	["F5", 1, 0.5],
	["G5", 1, 2],
	["D5", 1, 2],
	["C5", 1, 1],
	["A#4", 1, 1],
	["A#4", 1, 2],

	["C5", 1, 0.5],
	["D5", 1, 0.5],
	["C5", 1, 0.5],
	["D5", 1, 0.5],
	["C5", 1, 0.5],
	["D5", 1, 0.5],
	["C5", 1, 0.5],
	["D5", 1, 0.5],
	["C5", 1, 1]
]

const sequence: iNotes = [
	...Beginning,

	...Verse1,

	...PreChorus,

	...Chorus,

	...PostChorus,

	...Verse2,

	...PreChorus,

	...Chorus,

	...PostChorus,
]

document.getElementById("play")?.addEventListener("click", async () => {
	for (const [note, time, pause] of sequence) {
		synth.triggerAttackRelease(note, `${16 / time}n`)
		await new Promise(res => setTimeout(res, pause * 250))
	}
})
