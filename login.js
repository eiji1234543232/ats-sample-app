 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/login.js b/login.js
new file mode 100644
index 0000000000000000000000000000000000000000..e4bbc762fdc44b4a28c0bccfc5f75b261afa9101
--- /dev/null
+++ b/login.js
@@ -0,0 +1,6 @@
+const loginForm = document.getElementById("loginForm");
+
+loginForm.addEventListener("submit", (event) => {
+  event.preventDefault();
+  window.location.href = "candidates.html";
+});
 
EOF
)
