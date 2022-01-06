const m = require("mithril");

const test = require("./model/AWS.js");

// console.log(module.hot);
if (module.hot) {
    module.hot.accept();
}

m.render(document.body,
    m("button",{
        onclick: () => test()
      },"test")
);
