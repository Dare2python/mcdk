const m = require("mithril");

const test = require("./model/AWS.js");

if (module.hot) {
    module.hot.accept();
}

m.render(document.body,
    m("button",{
        onclick: () => test()
      },"test")
);
