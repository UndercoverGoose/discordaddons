/* stores main functions and information */
window.discordAddons = {
  auth: [localStorage.getItem('auth'), null], /* plugged into array in the event that the object is logged it doesn't reveal token */
  globalize: function() { /* globalize functions like localStorage and sessionStorage which are removed by discord */
    console.log("%cDiscord Addons | Globalizing variables...",window.discordAddons.vars.console.passive);
    try {
      window.localStorage = window.discordAddons.vars.localStorage;
      console.log("%cDiscord Addons <Globalize.localStorage>| Success!",window.discordAddons.vars.console.success);
    }catch(err) {
      console.log("%cDiscord Addons <Globalize.localStorage> | " + err,window.discordAddons.vars.console.error);
    }
    try {
      window.sessionStorage = window.discordAddons.vars.sessionStorage;
      console.log("%cDiscord Addons <Globalize.sessionStorage>| Success!",window.discordAddons.vars.console.success);
    }catch(err) {
      console.log("%cDiscord Addons <Globalize.sessionStorage> | " + err,window.discordAddons.vars.console.error);
    }
  },
  vars: { /* variables */
    console: {
      passive: "display:block;background:#7777FF;padding:10px;border:3px solid #3333AA;border-radius:5px;color:black;",
      success: "display:block;background:#77FF77;padding:10px;border:3px solid #33AA33;border-radius:5px;color:black;",
      warning: "display:block;background:#FFFF77;padding:10px;border:3px solid #AAAA33;border-radius:5px;color:black;",
      error: "display:block;background:#FF7777;padding:10px;border:3px solid #AA3333;border-radius:5px;color:black;"
    },
    settings: {
      elements: {
        titles: {},
        ratios: {}
      },
      get: function(a) {
        return document.getElementsByClassName(a);
      },
      menuActivator: function() {
        _this = this;
        function w() {
          let a = _this.get("button-14-BFJ enabled-2cQ-u7 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN");
          if(a[0] !== undefined) {
            clearInterval(w_i);
            for(let i=0;i<a.length;i++) {
              if(a[i].getAttribute("aria-label") === "User Settings") {
                a[i].addEventListener("click", e => {
                  if(!_this.created) {
                    _this.createMenu();
                  }
                  _this.generateBtn();
                });
              }
            }
          }
        }
        let w_i = setInterval(w, 0);
      },
      generateBtn: function() {
        _this = this;
        function w() {
          if(_this.get("side-8zPYf6")[0] !== undefined) {
            clearInterval(w_i);

            _this.get("closeButton-1tv5uR")[0].addEventListener("click", e => {
              _this.elements.menu.style.display = "none";
              _this.inView = false;
            });

            let pBtns = _this.get("item-PXvHYJ");
            for(let i=0;i<pBtns.length;i++) {
              pBtns[i].addEventListener("click", e => {
                _this.elements.menu.style.display = "none";
                _this.elements.menu.className = "item-PXvHYJ themed-OHr7kt";
                e.target.className = "item-PXvHYJ selected-3s45Ha themed-OHr7kt";

                _this.inView = false;
              });
            }
            create();
          }
        }
        let w_i = setInterval(w, 0);

        function create() {
          let btn = _this.create("div", {class:"item-PXvHYJ themed-OHr7kt",style:"animation-name:DABtn;animation-duration:1s;animation-iteration-count:infinite"});
          btn.textContent = "Discord Addons";

          btn.addEventListener("click", e => {
            _this.get("selected-3s45Ha")[0].className = "item-PXvHYJ themed-OHr7kt";
            _this.elements.menu.className = "item-PXvHYJ selected-3s45Ha themed-OHr7kt";
            _this.elements.menu.style.display = null;

            _this.inView = true;
          });

          _this.get("side-8zPYf6")[0].insertBefore(btn, _this.get("side-8zPYf6")[0].children[5]);
        }
      },
      create: function(e, t) {
        let a = document.createElement(e);
        let c = Object.keys(t);
        for(let i=0;i<c.length;i++) {
          a.setAttribute(c[i], t[c[i]]);
        }
        return a;
      },
      createMenu: function() {
        this.elements.menu = this.create("div", {id:"addonMenu",style:"z-index:9999999;position:fixed;left:266px;top:0px;min-width:406px;width:calc(100vw - 376px);max-width:670px;height:100vh;display:none;padding-top:60px;background:#36393f"})
        this.createTitle("Custom Status");

        this.createTitle("Custom Status");
        this.createRatio("School Countdown","Countdowns until school starts and ends","43b581");
        this.createRatio("Uptime","Counts up infinitely","43b581");

        this.createTitle(" ");
        this.createTitle("HypeSquad Status");
        this.createRatio("Bravery",undefined,"835dc4");
        this.createRatio("Brilliance",undefined,"ff6d57");
        this.createRatio("Balance",undefined,"00e5c3");

        window.onresize = this.menuResize;

        document.body.appendChild(this.elements.menu);
      },
      createStyle: function() {
        this.elements.style = this.create("style");
        this.elements.style.textContent = "@keyframes DABtn {0% {color: gold;}50% {color: yellow;}100% {color: gold;}} @keyframes DAExperiment {0% {color: #ff3300;}50% {color: red;}100% {color: #ff3300;}}";
        document.head.appendChild(style);
      },
      createTitle: function(a) {
        this.elements.titles[a] = this.create("h2", {class:"colorStandard-2KCXvj size14-e6ZScH h2-2gWE-o title-3sZWYQ defaultColor-1_ajX0 defaultMarginh2-2LTaUL"});
        this.elements.titles[a].textContent = a;
        this.elements.menu.appendChild(this.elements.titles[a]);
      },
      createRatio: function(a, b, c) {
        let d1 = this.create("div", {class:"item-26Dhrx marginBottom8-AtZOdT horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG",role:"radio","aria-checked":"false",tabindex:"-1"});
        let d2 = this.create("div", {class:"radioBar-bMNUI-",style:`--radio-bar-accent-color:#${c}; padding: 10px;`});
        d2.innerHTML = `<svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path></svg>`;
        let d3 = this.create("div", {class:"info-3LOr12"});
        let d4 = this.create("div", {class:"size16-1P40sf title-3BE6m5"});
        d4.textContent = a;
        let d5 = this.create("div", {class:"size14-e6ZScH"});
        d5.textContent = b;

        d3.appendChild(d4); d3.appendChild(d5);
        this.elements.ratios[a] = d1.appendChild(d2.appendChild(d3));
        this.elements.menu.appendChild(this.elements.ratios[a]);
      },
      menuResize: function() {
        this.elements.menu.style.left = (document.getElementsByClassName("sidebarRegionScroller-3MXcoP thin-1ybCId scrollerBase-289Jih fade-2kXiP2")[0].offsetWidth + 40) + "px";
        this.elements.menu.style.width = `calc(100vw - ${document.getElementsByClassName("sidebarRegionScroller-3MXcoP thin-1ybCId scrollerBase-289Jih fade-2kXiP2")[0].offsetWidth + 140}px)`;
      },
      created: false,
      inView: false
    },
    localStorage: localStorage,
    sessionStorage: sessionStorage
  }
}

console.log("%cDiscord Addons | Loaded",window.discordAddons.vars.console.passive);

if(window.discordAddons.auth[0] === null) { /* tells user if authorization is missing */
  console.log("%cDiscord Addons | Authorization code not stored in localStorage! Make sure to set window.discordAddons.vars.localStorage.setItem('auth', 'yourAuthToken')",window.discordAddons.vars.console.error);
}

/* my custom status */
(async function() {
  try {
    function getTimeTill() {
      let cTime = new Date();
      let sTime = cTime.toString().split(" GMT")[0];
      let tt = "";
      let p = "School starts in ", e = "👎";

      if(["Mon","Tue","Wed","Thu","Fri"].indexOf(cTime.toString().slice(0, 3)) !== -1) {
        if((cTime.getHours() < 7) || (cTime.getHours() === 7 && cTime.getMinutes() < 55)) {
          tt = format((new Date(sTime.slice(0, sTime.lastIndexOf(" ")) + " 7:55:00")) - cTime.getTime());
        }else if((cTime.getHours() >= 15) || (cTime.getHours() === 14 && cTime.getMinutes() > 47)) {
          if(cTime.toString().slice(0, 3) === "Fri") {
            tt = format((new Date(addDay(sTime, 3).slice(0, 15) + " 7:55:00")) - cTime.getTime());
          }else {
            tt = format((new Date(addDay(sTime, 1).slice(0, 15) + " 7:55:00")) - cTime.getTime());
          }
        }else if(cTime.getHours() === 7 && cTime.getMinutes() >= 55) {
          p = "", e = "😖", tt = "School just started...";
        }else if(cTime.getHours() === 14 && cTime.getMinutes() >= 42 && cTime.getMinutes() <= 47) {
          p = "", e = "😏", tt = "School ended!";
        }else if((cTime.getHours() >= 8 && cTime.getHours() <= 14) || (cTime.getHours() === 14 && cTime.getMinutes() < 42)) {
          p = "School ends in ", e = "👍";
          tt = format((new Date(sTime.slice(0, 15) + " 14:42:00")) - cTime.getTime());
        }else {
          console.log("%cDiscord Addons <Custom Status> | Time: " + new Date().getTime() + ", did not get evaluated!",window.discordAddons.vars.console.error);
        }
      }else {
        if(cTime.toString().slice(0, 3) === "Sat") {
          tt = format((new Date(addDay(sTime, 2).slice(0, 15) + " 7:55:00")) - cTime.getTime());
        }else if(cTime.toString().slice(0, 3) === "Sun") {
          tt = format((new Date(addDay(sTime, 1).slice(0, 15) + " 7:55:00")) - cTime.getTime());
        }else {
          console.log("%cDiscord Addons <Custom Status> | new Date() returned an invalid day of the week! new Date().toString().slice(0,3) responds with: " + (new Date().toString().slice(0,3)),window.discordAddons.vars.console.error);
        }
      }
      function buildDate(s) {
        return `${s[0]} ${s[1]} ${s[2]} ${s[3]} ${s[4][0]}:${s[4][1]}:${s[4][2]}`;
      }
      function splitDate(str) {
        let s = str.split(" ");
        let i = s[4].split(":");
        return [s[0], s[1], parseInt(s[2]), parseInt(s[3]), [parseInt(i[0]), parseInt(i[1]), parseInt(i[2])]];
      }
      function addDay(a, t) {
        s = a;
        if(typeof a === "string") {
          s = splitDate(a);
        }
        let mo = ["Jan", "Feb", "Mar", "Apr", "May"], mv = [31, 28, 31, 30, 31], newDay = s[2] + t, newMon = s[1];
        if(newDay > mv[mo.indexOf(s[1])]) {
          newDay = t - (mv[mo.indexOf(s[1])] - s[2]);
          newMon = mo[mo.indexOf(newMon) + 1];
        }
        s[1] = newMon, s[2] = newDay;
        if(typeof a === "string") {
          return buildDate(s);
        }else {
          return s;
        }
      }
      function calcTillMon() {
        return addDay(sTime, 3 - ["Fri","Sat","Sun"].indexOf(splitDate(sTime)[0]));
      }
      function format(time) {
        time = time / 1000;

        let days = Math.floor(time / 86400);
        time -= days * 86400;
        days = days.toString();
        if(days.length === 1) {
          days = "0" + days;
        }

        let hours = Math.floor(time / 3600);
        time -= hours * 3600;
        hours = hours.toString();
        if(hours.length === 1) {
          hours = "0" + hours;
        }

        let minutes = Math.floor(time / 60);
        time -= minutes * 60;
        minutes = minutes.toString();
        if(minutes.length === 1) {
          minutes = "0" + minutes;
        }

        let seconds = Math.floor(time);
        seconds = seconds.toString();
        if(seconds.length === 1) {
          seconds = "0" + seconds;
        }
        if(parseInt(days) === 0) {
          if(parseInt(hours) === 0) {
            if(parseInt(minutes) === 0) {
              return parseInt(seconds);
            }else {
              return `${minutes}:${seconds}`;
            }
          }else {
            return `${hours}:${minutes}:${seconds}`;
          }
        }else {
          return `${days}:${hours}:${minutes}:${seconds}`;
        }
      }
      return [p + tt, e];
    }
    while(true){
      let a = getTimeTill();
      fetch("https://discord.com/api/v8/users/@me/settings", {
        "headers": {
          "authorization": window.discordAddons.auth[0],
          "content-type": "application/json",
          "x-super-properties": "eyJvcyI6Ik1hYyBPUyBYIiwiYnJvd3NlciI6IkRpc2NvcmQgQ2xpZW50IiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X3ZlcnNpb24iOiIwLjAuMjYxIiwib3NfdmVyc2lvbiI6IjE3LjcuMCIsIm9zX2FyY2giOiJ4NjQiLCJzeXN0ZW1fbG9jYWxlIjoiZW4tVVMiLCJjbGllbnRfYnVpbGRfbnVtYmVyIjo3NTE0NCwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0="
        },
        "body": "{\"custom_status\":{\"text\":\"" + a[0] + "\",\"emoji_name\":\"" + a[1] + "\"}}",
        "method": "PATCH",
        "mode": "cors",
        "credentials": "include"
      });
      await new Promise(r=>setTimeout(r,1000));
    }
  }catch(err) {
    console.log("%cDiscord Addons <Custom Status> | " + err, window.discordAddons.vars.console.error);
  }
})();
console.log("%cDiscord Addons | Loaded Custom Status", window.discordAddons.vars.console.success);

window.addEventListener("load", e => {
  /* enable custom menu*/
  window.discordAddons.vars.settings.menuActivator();

  /* enabled experiments */
  try {
    const DI = window.DiscordInternals;
    const hasLib = !!(DI && DI.versionCompare && DI.versionCompare(DI.version || "", "1.9") >= 0);
        const WebpackModules = hasLib && DI.WebpackModules || (() => {

            const req = typeof(webpackJsonp) == "function" ? webpackJsonp([], {
                    '__extra_id__': (module, exports, req) => exports.default = req
            }, ['__extra_id__']).default : webpackJsonp.push([[], {
                    '__extra_id__': (module, exports, req) => module.exports = req
            }, [['__extra_id__']]]);
            delete req.m['__extra_id__'];
            delete req.c['__extra_id__'];
            const find = (filter, options = {}) => {
                const {cacheOnly = false} = options;
                for (let i in req.c) {
                    if (req.c.hasOwnProperty(i)) {
                        let m = req.c[i].exports;
                        if (m && m.__esModule && m.default && filter(m.default))
                            return m.default;
                        if (m && filter(m))
                            return m;
                    }
                }
                if (cacheOnly) {
                    console.warn('Cannot find loaded module in cache');
                    return null;
                }
                console.warn('Cannot find loaded module in cache. Loading all modules may have unexpected side effects');
                for (let i = 0; i < req.m.length; ++i) {
                    let m = req(i);
                    if (m && m.__esModule && m.default && filter(m.default))
                        return m.default;
                    if (m && filter(m))
                        return m;
                }
                console.warn('Cannot find module');
                return null;
            };
            const findByUniqueProperties = (propNames, options) => find(module => propNames.every(prop => module[prop] !== undefined), options);
            const findByDisplayName = (displayName, options) => find(module => module.displayName === displayName, options);
            return {find, findByUniqueProperties, findByDisplayName};
        })();
    t = WebpackModules.findByUniqueProperties(["isDeveloper"]);
    Object.defineProperty(t,"isDeveloper",{get:_=>1,set:_=>_,configurable:true});
    console.log("%cDiscord Addons | Loaded Experiments", window.discordAddons.vars.console.success);
  }catch(err) {
    console.log("%cDiscord Addons <Experiments> | " + err, window.discordAddons.vars.console.error);
  }
});
