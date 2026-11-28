const chart = document.querySelector(".activity-chart");
const heatmap = document.querySelector(".activity-map");
const tooltip = document.querySelector(".activity-tooltip");
const range = document.querySelector(".activity-range");
const { year, points, examDate } = window.activityData;
const yearStart = new Date(Date.UTC(year, 0, 1));
const daysInYear = (Date.UTC(year + 1, 0, 1) - yearStart) / 86400000;
const weekOffset = (yearStart.getUTCDay() + 6) % 7;
const weekCount = Math.ceil((daysInYear + weekOffset) / 7);
const svgNamespace = "http://www.w3.org/2000/svg";

heatmap.setAttribute("width", String(weekCount * 11));
heatmap.setAttribute("height", "90");
heatmap.setAttribute("viewBox", `0 0 ${weekCount * 11} 90`);
heatmap.setAttribute("aria-label", `Daily activity from January to December ${year}`);
range.textContent = `Jan ${year} – Dec ${year}`;

for (let month = 0; month < 12; month += 1) {
  const monthStart = new Date(Date.UTC(year, month, 1));
  const daysBeforeMonth = (monthStart - yearStart) / 86400000;
  const label = document.createElementNS(svgNamespace, "text");

  label.setAttribute("class", "activity-map-month");
  label.setAttribute("x", String(Math.floor((daysBeforeMonth + weekOffset) / 7) * 11));
  label.setAttribute("y", "10");
  label.textContent = monthStart.toLocaleDateString("en-US", { timeZone: "UTC", month: "short" });
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
