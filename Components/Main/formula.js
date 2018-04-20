const Epley = (reps, weight) => {
  if (reps === 1) return weight
  if (reps < 1) return 0

  return (1 + (reps / 30)) * weight
}

const Brzycki = (reps, weight) => {
  if (reps < 1) return 0

  return weight * (36 / (37 - reps))
}

const McGlothin = (reps, weight) => {
  if (reps < 1) return 0

  return (100 * weight) / (101.3 - (2.67123 * reps))
}

const Lombardi = (reps, weight) => {
  return weight * reps ** 0.1
}

const Mayhew = (reps, weight) => {
  return (100 * weight) / (52.2 + (41.9 * Math.E ** (-0.055 * reps)))
}

const OConner = (reps, weight) => {
  return weight * (1 + (reps / weight))
}

const Wathan = (reps, weight) => {
  return ((100 * weight) / (48.8 + 53.8 * Math.E ** (-0.075 * reps)))
}

const formulas = {
  Epley,
  Brzycki,
  McGlothin,
  Lombardi,
  Mayhew,
  OConner,
  Wathan
}

export default formulas
