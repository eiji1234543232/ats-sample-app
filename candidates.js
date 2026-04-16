 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/candidates.js b/candidates.js
new file mode 100644
index 0000000000000000000000000000000000000000..5610e1bcfbff21b614f787e4d932a3a27b1bd3d9
--- /dev/null
+++ b/candidates.js
@@ -0,0 +1,15 @@
+const candidateList = document.getElementById("candidateList");
+
+window.candidates.forEach((candidate) => {
+  const item = document.createElement("li");
+  item.className = "candidate-item";
+
+  const link = document.createElement("a");
+  link.href = `candidate.html?id=${encodeURIComponent(candidate.id)}`;
+  link.target = "_blank";
+  link.rel = "noopener noreferrer";
+  link.textContent = `${candidate.name}（${candidate.position} / ${candidate.stage}）`;
+
+  item.appendChild(link);
+  candidateList.appendChild(item);
+});
 
EOF
)
