 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/data.js b/data.js
new file mode 100644
index 0000000000000000000000000000000000000000..4a02d2a19b617eb28d5166df4152ba2412f7f70d
--- /dev/null
+++ b/data.js
@@ -0,0 +1,32 @@
+window.candidates = [
+  {
+    id: "C001",
+    name: "山田 太郎",
+    position: "フロントエンドエンジニア",
+    stage: "一次面接",
+    email: "taro.yamada@example.com",
+    phone: "090-1111-2222",
+    skills: ["React", "TypeScript", "UI設計"],
+    note: "プロダクト改善の提案力が高い。"
+  },
+  {
+    id: "C002",
+    name: "佐藤 花子",
+    position: "バックエンドエンジニア",
+    stage: "書類選考",
+    email: "hanako.sato@example.com",
+    phone: "090-3333-4444",
+    skills: ["Go", "Node.js", "MySQL"],
+    note: "大規模アクセス環境の経験あり。"
+  },
+  {
+    id: "C003",
+    name: "鈴木 一郎",
+    position: "プロダクトマネージャー",
+    stage: "最終面接",
+    email: "ichiro.suzuki@example.com",
+    phone: "090-5555-6666",
+    skills: ["ロードマップ策定", "KPI設計", "ユーザー調査"],
+    note: "SaaS企業でのPM経験が豊富。"
+  }
+];
 
EOF
)
