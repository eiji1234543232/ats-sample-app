 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/candidate.js b/candidate.js
new file mode 100644
index 0000000000000000000000000000000000000000..1453477b4fde65b730122ec7539b3268649c5475
--- /dev/null
+++ b/candidate.js
@@ -0,0 +1,22 @@
+const params = new URLSearchParams(window.location.search);
+const id = params.get("id");
+const candidate = window.candidates.find((person) => person.id === id);
+const detail = document.getElementById("candidateDetail");
+
+if (!candidate) {
+  detail.innerHTML = `
+    <h1>候補者詳細</h1>
+    <p class="error">対象の候補者が見つかりませんでした。</p>
+    <a href="candidates.html" class="text-link">候補者一覧に戻る</a>
+  `;
+} else {
+  detail.innerHTML = `
+    <h1>${candidate.name}（${candidate.id}）</h1>
+    <p><strong>応募職種:</strong> ${candidate.position}</p>
+    <p><strong>選考ステータス:</strong> ${candidate.stage}</p>
+    <p><strong>メールアドレス:</strong> ${candidate.email}</p>
+    <p><strong>電話番号:</strong> ${candidate.phone}</p>
+    <p><strong>スキル:</strong> ${candidate.skills.join(" / ")}</p>
+    <p><strong>メモ:</strong> ${candidate.note}</p>
+  `;
+}
 
EOF
)
