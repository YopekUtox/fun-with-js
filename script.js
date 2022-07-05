const tds = [...document.querySelectorAll("td")];
const afterTransform = document.querySelector(".afterTransform");

const arrayMethods = [
  {
    name: "pop",
    params: [],
  },
  {
    name: "push",
    params: ["👀"],
  },
  {
    name: "shift",
    params: [],
  },
  {
    name: "unshift",
    params: ["👀"],
  },
  {
    name: "splice",
    params: [0, 3, "👀"],
  },
  {
    name: "concat",
    params: ["👀", "👀", "👀"],
  },
  // {
  //   name: "join",
  //   params: [0, 3],
  // },
  // {
  //   name: "slice",
  //   params: 1,
  // },
  // {
  //   name: "indexOf",
  //   params: "😍",
  // },
  // {
  //   name: "lastIndexOf",
  //   params: "😜",
  // },
  // {
  //   name: "forEach",
  //   params: [0, 3],
  // },
  // {
  //   name: "map",
  //   params: [0, 3],
  // },
  // {
  //   name: "filter",
  //   params: [0, 3],
  // },
  // {
  //   name: "reduce",
  //   params: [0, 3],
  // },
  // {
  //   name: "reduceRight",
  //   params: [0, 3],
  // },
  // {
  //   name: "every",
  //   params: [0, 3],
  // },
  // {
  //   name: "some",
  //   params: [0, 3],
  // },
  // {
  //   name: "find",
  //   params: [
  //     (el) => {
  //       el === "😜";
  //     },
  //   ],
  // },

  // "splice",
  // "concat",
  // "join",
  // "slice",
  // "indexOf",
  // "lastIndexOf",
  // "forEach",
  // "map",
  // "filter",
  // "reduce",
  // "reduceRight",
  // "every",
  // "some",
  // "find",
  // "findIndex",
  // "fill",
  // "copyWithin",
  // "entries",
  // "keys",
  // "values",
  // "includes",
  // "flat",
  // "flatMap",
  // "at",
  // "reverse",
  // "sort",
];

class GetAllEmojis {
  constructor(element) {
    this.element = element;
  }

  async emjis() {
    document.createElement(this.element);
  }
}

const getAllEmojis = () => {
  return tds.map((emoji) => emoji.textContent);
};

const makeFrame = (text) => {
  const row = document.createElement("div");
  row.className = "row";

  row.innerHTML = text;
  afterTransform.append(row);
};

const setColorOfParams = (params) => {
  return params.map((param) => {
    if (typeof param === "number") {
      return `<span class="number">${param}</span>`;
    }
  });
};

const baseEmojis = getAllEmojis();

const showFunction = (funcName, params) => {
  const emojis = [...baseEmojis];
  const newEmojis = emojis[funcName](...params);
  const text = `
  [${getAllEmojis()}].
  <span class="nameOfFunction">
    ${funcName}(${JSON.stringify(params).slice(1, -1)})
  </span> <span class="comment"> 
  // [${emojis}]<span>`;

  makeFrame(text);
};

arrayMethods.forEach(({ name, params }) => showFunction(name, params));
