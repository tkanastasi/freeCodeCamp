const chart = document.querySelector(".activity-chart");
const heatmap = document.querySelector(".activity-map");
const tooltip = document.querySelector(".activity-tooltip");
const range = document.querySelector(".activity-range");
const previousPeriod = document.querySelector(".activity-nav-prev");
const nextPeriod = document.querySelector(".activity-nav-next");
const { year, points, examDate } = window.activityData;
const yearStart = new Date(Date.UTC(year, 0, 1));
const daysInYear = (Date.UTC(year + 1, 0, 1) - yearStart) / 86400000;
const weekOffset = (yearStart.getUTCDay() + 6) % 7;
const weekCount = Math.ceil((daysInYear + weekOffset) / 7);
const svgNamespace = "http://www.w3.org/2000/svg";
const mobileView = window.matchMedia("(max-width: 520px)");
const monthNames = Array.from({ length: 12 }, (_, month) =>
  new Date(Date.UTC(year, month, 1)).toLocaleDateString("en-US", { timeZone: "UTC", month: "short" })
);
let mobileHalf = 1;

heatmap.setAttribute("width", String(weekCount * 11));
heatmap.setAttribute("height", "90");
heatmap.setAttribute("aria-label", `Daily freeCodeCamp activity in ${year}`);

for (let month = 0; month < 12; month += 1) {
  const monthStart = new Date(Date.UTC(year, month, 1));
  const daysBeforeMonth = (monthStart - yearStart) / 86400000;
  const label = document.createElementNS(svgNamespace, "text");

  label.setAttribute("class", "activity-map-month");
  label.setAttribute("data-month", String(month));
  label.setAttribute("x", String(Math.floor((daysBeforeMonth + weekOffset) / 7) * 11));
  label.setAttribute("y", "10");
  label.textContent = monthNames[month];
  heatmap.append(label);
}

for (let dayOfYear = 0; dayOfYear < daysInYear; dayOfYear += 1) {
  const date = new Date(Date.UTC(year, 0, dayOfYear + 1));
  const dateKey = date.toISOString().slice(0, 10);
  const score = points[dateKey] || 0;
  const cell = document.createElementNS(svgNamespace, "rect");
  const formattedDate = date.toLocaleDateString("en-US", { timeZone: "UTC", month: "short", day: "numeric", year: "numeric" });
  const isExamDate = dateKey === examDate;
  const label = isExamDate ? `Certification exam on ${formattedDate} 🎉` : `${score} points on ${formattedDate}`;
  const calendarDay = dayOfYear + weekOffset;

  cell.setAttribute("class", `color-${getActivityLevel(score)}${isExamDate ? " exam-day" : ""}`);
  cell.setAttribute("data-month", String(date.getUTCMonth()));
  cell.setAttribute("x", String(Math.floor(calendarDay / 7) * 11));
  cell.setAttribute("y", String(14 + (calendarDay % 7) * 11));
  cell.setAttribute("width", "10");
  cell.setAttribute("height", "10");
  cell.setAttribute("tabindex", "0");
  cell.setAttribute("data-tip", label);
  cell.setAttribute("aria-label", label);

  cell.addEventListener("mouseenter", () => showTooltip(cell, label));
  cell.addEventListener("focus", () => showTooltip(cell, label));
  cell.addEventListener("mouseleave", hideTooltip);
  cell.addEventListener("blur", hideTooltip);
  heatmap.append(cell);
}

function applyView() {
  const isMobile = mobileView.matches;
  const firstMonth = isMobile ? mobileHalf * 6 : 0;
  const lastMonth = isMobile ? firstMonth + 6 : 12;
  const startDay = (Date.UTC(year, firstMonth, 1) - yearStart) / 86400000;
  const endDay = (Date.UTC(year, lastMonth, 1) - yearStart) / 86400000;
  const firstWeek = isMobile ? Math.floor((startDay + weekOffset) / 7) : 0;
  const lastWeek = isMobile ? Math.ceil((endDay + weekOffset) / 7) : weekCount;
  const width = (lastWeek - firstWeek) * 11;

  heatmap.setAttribute("width", String(width));
  heatmap.setAttribute("viewBox", `${firstWeek * 11} 0 ${width} 90`);
  heatmap.setAttribute("aria-label", `Daily freeCodeCamp activity from ${monthNames[firstMonth]} to ${monthNames[lastMonth - 1]} ${year}`);
  range.textContent = `${monthNames[firstMonth]} ${year} – ${monthNames[lastMonth - 1]} ${year}`;
  heatmap.querySelectorAll("[data-month]").forEach((item) => {
    const month = Number(item.getAttribute("data-month"));
    item.style.display = month >= firstMonth && month < lastMonth ? "" : "none";
  });

  previousPeriod.hidden = !isMobile || mobileHalf === 0;
  nextPeriod.hidden = !isMobile || mobileHalf === 1;
}

previousPeriod.addEventListener("click", () => {
  mobileHalf = 0;
  applyView();
});

nextPeriod.addEventListener("click", () => {
  mobileHalf = 1;
  applyView();
});

mobileView.addEventListener("change", applyView);
applyView();

function getActivityLevel(score) {
  if (score === 0) return "empty";
  if (score < 4) return "low";
  if (score < 10) return "mid";
  if (score < 20) return "high";
  if (score < 40) return "higher";
  if (score < 70) return "strong";
  return "max";
}

function showTooltip(cell, label) {
  const cellBounds = cell.getBoundingClientRect();
  const chartBounds = chart.getBoundingClientRect();

  tooltip.textContent = label;
  tooltip.hidden = false;

  const halfWidth = tooltip.offsetWidth / 2;
  const center = cellBounds.left - chartBounds.left + cellBounds.width / 2;
  const left = Math.max(halfWidth + 8, Math.min(chartBounds.width - halfWidth - 8, center));
  const top = Math.max(tooltip.offsetHeight + 12, cellBounds.top - chartBounds.top);

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function hideTooltip() {
  tooltip.hidden = true;
}
