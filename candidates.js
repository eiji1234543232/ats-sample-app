const candidateList = document.getElementById("candidateList");

window.candidates.forEach((candidate) => {
  const item = document.createElement("li");
  item.className = "candidate-item";

  const link = document.createElement("a");
  link.href = `candidate.html?id=${encodeURIComponent(candidate.id)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = `${candidate.name}（${candidate.position} / ${candidate.stage}）`;

  item.appendChild(link);
  candidateList.appendChild(item);
});
