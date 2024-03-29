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
  {
    id: "11",
    name: "lesson(2023.04.10)",
    path: "./11-lesson/index.html",
  },
  {
    id: "12",
    name: "lesson(2023.04.12)",
    path: "./12-lesson/index.html",
    absent: true,
  },
  {
    id: "13",
    name: "lesson(2023.04.24)",
    path: "./13-lesson/index.html",
  },
  {
    id: "14",
    name: "lesson(2023.04.26)",
    path: "./14-lesson/index.html",
  },
  {
    id: "15",
    name: "lesson(2023.05.03)",
    path: "./15-lesson/index.html",
  },
  {
    id: "16",
    name: "lesson(2023.05.08)",
    path: "./16-lesson/index.html",
  },
  {
    id: "17",
    name: "lesson(2023.05.10)",
    path: "./17-lesson/index.html",
  },
  {
    id: "18",
    name: "lesson(2023.05.15)",
    path: "./18-lesson/index.html",
  },
  {
    id: "19",
    name: "lesson(2023.05.17)",
    path: "./19-lesson/index.html",
    homework: "./19-lesson/homework/index.html",
  },
  {
    id: "20",
    name: "lesson(2023.05.22)",
    path: "./20-lesson/index.html",
  },
  {
    id: "21",
    name: "lesson(2023.05.24)",
    path: "./21-lesson/index.html",
  },
  {
    id: "22",
    name: "lesson(2023.05.31)",
    path: "./22-lesson/index.html",
  },
  {
    id: "23",
    name: "lesson(2023.06.05)",
    path: "./23-lesson/index.html",
    homework: "./23-lesson/homework/index.html",
  },
  {
    id: "24",
    name: "lesson(2023.06.07)",
    path: "./24-lesson/index.html",
  },
  {
    id: "25",
    name: "lesson(2023.06.12)",
    path: "./25-lesson/index.html",
  },
  {
    id: "26",
    name: "lesson(2023.06.14)",
    path: "./26-lesson/index.html",
  },
];

window.addEventListener("load", () => {
  let orderedElement = document.getElementById("ol");
  let result = "";
  allPaths.forEach((path, idx) => {
    result += `<li key="${path.id}">
    ${path?.absent ? "<del style='color: red'>" : ""}<a title="${
      path.name
    }" target="_blank" href="/${path.path}" >${
      path.name
    }</a> <a target="_blank"  href="https://github.com/Zokirkhon1002/smartWebProgrammingCNU/tree/main/${
      path.path.split("/")[1]
    }" style="text-decoration:underline;" title="${path.name}'s code on github'">[<i>code${
      idx + 1
    }</i>]</a>${path?.absent ? "</del>" : ""}
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
