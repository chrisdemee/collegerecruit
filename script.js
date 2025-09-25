// names for rutgers alumni
const alumni = [
  "James Gandolfini – Actor (The Sopranos)",
  "Kristin Davis – Actress (Sex and the City)",
  "Mario Batali – Celebrity Chef",
  "Elizabeth Warren – U.S. Senator",
  "Milton Friedman – Nobel Prize Economist",
  "Carli Lloyd – Olympic Soccer Champion",
  "Paul Robeson – Activist, Singer, Actor",
  "Brian Leonard – NFL Running Back",
  "Roy Scheider – Actor (Jaws)",
  "Junot Díaz – Pulitzer Prize-winning Author"
];

document.getElementById("alumniBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * alumni.length);
  document.getElementById("alumniName").textContent = alumni[randomIndex];
});

document.getElementById("alumniBtn").addEventListener("click", () => {
  const alumniInfo = document.getElementById("alumniInfo");
  alumniInfo.classList.toggle("d-none");
});

