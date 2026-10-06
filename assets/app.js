/* 游戏 UX 求职陪跑营 · 页面交互（无外部依赖） */
(function () {
  "use strict";

  /* ---------- 移动端导航 ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- 页脚年份 ---------- */
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = String(new Date().getFullYear());

  /* ---------- 工具库（toolkit.html） ---------- */
  var grid = document.getElementById("projGrid");
  if (grid && window.PROJECTS && window.CATS) {
    var catById = {};
    window.CATS.forEach(function (c) { catById[c.key] = c; });
    var state = { cat: "ALL", q: "" };

    var fmtStars = function (n) {
      return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
    };
    var esc = function (s) {
      return String(s).replace(/[&<>"']/g, function (m) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
      });
    };

    var cardHTML = function (p) {
      var c = catById[p.cat];
      var phases = (p.phase || []).map(function (x) {
        return '<span class="chip chip-acc">' + esc(x) + "</span>";
      }).join("");
      return (
        '<article class="proj">' +
        '<div class="proj-top"><h3><span class="cat-dot" style="background:' + c.color + '"></span>' +
        esc(p.name) + "</h3>" +
        '<span class="stars" title="Star 快照 2026-10-07">★ ' + fmtStars(p.stars) + "</span></div>" +
        '<span class="chip">' + esc(c.name) + "</span>" +
        '<p class="desc">' + esc(p.desc) + "</p>" +
        '<p class="use">' + esc(p.use) + "</p>" +
        '<div class="proj-links"><a class="gh" href="https://github.com/' + esc(p.repo) +
        '" target="_blank" rel="noopener">github.com/' + esc(p.repo) + " ↗</a>" +
        '<span class="chip chip-gold">' + esc(p.invoke) + "</span>" + phases + "</div>" +
        "</article>"
      );
    };

    var render = function () {
      var q = state.q.trim().toLowerCase();
      var list = window.PROJECTS.filter(function (p) {
        if (state.cat !== "ALL" && p.cat !== state.cat) return false;
        if (!q) return true;
        return (p.name + " " + p.repo + " " + p.desc + " " + p.use + " " + p.invoke).toLowerCase().indexOf(q) !== -1;
      });
      grid.innerHTML = list.map(cardHTML).join("") ||
        '<p style="color:var(--muted);grid-column:1/-1">没有匹配的项目——换个关键词试试。</p>';
      var note = document.getElementById("countNote");
      if (note) note.textContent = "显示 " + list.length + " / " + window.PROJECTS.length + " 个项目";
    };

    document.querySelectorAll(".fbtn").forEach(function (b) {
      b.addEventListener("click", function () {
        document.querySelectorAll(".fbtn").forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        state.cat = b.getAttribute("data-cat") || "ALL";
        render();
      });
    });
    var si = document.getElementById("projSearch");
    if (si) si.addEventListener("input", function () { state.q = si.value; render(); });
    render();
  }

  /* ---------- 30 秒自诊断（apply.html） ---------- */
  var diagForm = document.getElementById("diagForm");
  if (diagForm) {
    var DIMS = ["可核验开场", "约束显性", "敢放负结果", "过程计量", "AI 提效"];
    var Advice = [
      {
        min: 0, max: 3, cls: "t0", tier: "重做区（0–3 分）",
        text: "你的案例大概率还停留在「我做了什么」，而招聘方在找「可核验的决策」。直接进入 P1 证据工程：先按决策十环重写一个案例，比再投 100 份简历有用。"
      },
      {
        min: 4, max: 6, cls: "t1", tier: "补证据区（4–6 分）",
        text: "叙事骨架已经在，缺的是硬证据。重点补：可核验开场（游戏名/时间线/署名角色/shipped 状态）、量化数字与一次像样的取舍记录。配合 100 分制自查表逐环打分。"
      },
      {
        min: 7, max: 10, cls: "t2", tier: "冲刺区（7–10 分）",
        text: "底子好，别浪费在盲目投递上。进入 P3–P5：用岗位漏斗只投 4 分以上的岗，每家公司单独做情报简报，再把 AI 工具链的工作流写进简历——这是 2026 JD 的新基线。"
      }
    ];
    diagForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var scores = [];
      for (var i = 1; i <= 5; i++) {
        var picked = diagForm.querySelector('input[name="q' + i + '"]:checked');
        if (!picked) {
          diagForm.querySelector(".diag-hint").hidden = false;
          return;
        }
        scores.push(Number(picked.value));
      }
      diagForm.querySelector(".diag-hint").hidden = true;
      var total = scores.reduce(function (a, b) { return a + b; }, 0);
      var adv = Advice.filter(function (a) { return total >= a.min && total <= a.max; })[0];
      var out = document.getElementById("diagOut");
      var bars = scores.map(function (s, i) {
        var pct = (s / 2) * 100;
        var col = s === 2 ? "var(--acc)" : s === 1 ? "var(--gold)" : "var(--danger)";
        return '<div class="dim-bar"><span>' + DIMS[i] + "</span>" +
          '<div class="bar-track"><div class="bar-fill" style="width:' + pct + "%;background:" + col + '"></div></div></div>';
      }).join("");
      out.hidden = false;
      out.innerHTML =
        '<div class="tier ' + adv.cls + '">' + total + " / 10 · " + adv.tier + "</div>" +
        "<p>" + adv.text + "</p>" +
        '<div class="dim-bars">' + bars + "</div>" +
        '<p style="margin-top:16px"><a class="btn btn-primary" href="program.html">看你的 8 周路线 →</a></p>';
      out.scrollIntoView({ block: "nearest" });
    });
  }

  /* ---------- 报名表单（demo，不伪造成功） ---------- */
  var form = document.getElementById("applyForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("formDone").hidden = false;
      form.querySelector(".form-actions").hidden = true;
    });
  }
})();
