const copyButtons = document.querySelectorAll("[data-copy-target]");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const targetId = button.getAttribute("data-copy-target");
    const target = targetId ? document.getElementById(targetId) : null;
    const status = button.parentElement?.querySelector(".copy-status");

    if (!target) return;
    const text = target.textContent.trim();

    try {
      if (!navigator.clipboard) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(text);
      if (status) status.textContent = "コピーしました。相談メッセージに貼り付けて使えます。";
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.append(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();

      if (status) {
        status.textContent = copied
          ? "コピーしました。相談メッセージに貼り付けて使えます。"
          : "コピーできませんでした。本文を選択してコピーしてください。";
      }
    }
  });
});

const details = document.querySelectorAll(".faq details");

details.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    details.forEach((other) => {
      if (other !== item) other.removeAttribute("open");
    });
  });
});
