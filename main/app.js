// @ts-nocheck
let allPaths = [
  {
    id: "01",
    name: "lesson(2023.03.06)",
    path: "./1-lesson/index.html",
  },
  {
    id: "02",
    name: "lesson(2023.03.08)",
    path: "./2-lesson/index.html",
  },
  {
    id: "03",
    name: "lesson(2023.03.13)",
    path: "./3-lesson/index.html",
  },
  {
    id: "04",
    name: "lesson(2023.03.15)",
    path: "./4-lesson/index.html",
    homework: "./4-lesson/homework/index.html",
  },
  {
    id: "05",
    name: "lesson(2023.03.20)",
    path: "./5-lesson/index.html",
  },
  {
    id: "06",
    name: "lesson(2023.03.22)",
    path: "./6-lesson/index.html",
  },
  {
    id: "07",
    name: "lesson(2023.03.27)",
    path: "./7-lesson/index.html",
    homework: "./7-lesson/homework/index.html",
  },
  {
    id: "08",
    name: "lesson(2023.03.29)",
    path: "./8-lesson/index.html",
  },
  {
    id: "09",
    name: "lesson(2023.04.03)",
    path: "./9-lesson/index.html",
  },
  {
    id: "10",
    name: "lesson(2023.04.05)",
    path: "./10-lesson/index.html",
    homework: "./10-lesson/homework/index.html",
  },
];

window.addEventListener("load", () => {
  let orderedElement = document.getElementById("ol");
  let result = "";
  allPaths.forEach((path, idx) => {
    result += `<li key="${path.id}">
    <a title="${path.name}" target="_blank" href="/${path.path}" >${
      path.name
    }</a> <a target="_blank"  href="https://github.com/Zokirkhon1002/smartWebProgrammingCNU/tree/main/${
      path.path.split("/")[1]
    }" style="text-decoration:underline;" title="${
      path.name
    }'s code on github'">[<i>code${idx + 1}</i>]</a>
          ${
            path?.homework
              ? `<br><ul><li><a href="/${
                  path.homework
                }" target="_blank">homework</a> [<a href="https://github.com/Zokirkhon1002/smartWebProgrammingCNU/tree/main/${
                  path.homework.split("/")[1]
                }/homework" target="_blank">code</a>]</li></ul>`
              : ""
          }
  </li>`;
  });
  orderedElement.innerHTML = result;
});
